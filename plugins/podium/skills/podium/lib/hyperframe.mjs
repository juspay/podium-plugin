/**
 * A HyperFrames project on disk → the `html` of a hyperframe block, which plays it live on a
 * slide with HyperFrames' own player.
 *
 *   import { slide, hyperframe, upload } from './lib/podium.mjs';
 *   import { composition } from './lib/hyperframe.mjs';
 *
 *   const html = await composition('./launch-video', { project: deck.project });
 *   const poster = await upload('./launch-video/snapshots/at-4000.png', 'Launch video', deck.project);
 *   deck.slides.push(slide({}, [hyperframe(html, { poster, at: { x: 0, y: 0, w: 1920, h: 1080 } })]));
 *
 * What it does, in order:
 *   1. bundles the project into one document with HyperFrames' own bundler
 *      (`@hyperframes/core/compiler`, the version the player was vendored at: the project's
 *      own copy if it has that one, otherwise a copy kept in ~/.cache/podium);
 *   2. leaves HyperFrames' runtime out, about 600KB the player brings itself;
 *   3. uploads every picture the bundler inlined, and every clip and sound file the project
 *      names, and points the composition at their /m/ paths.
 *
 * It needs a shell (Claude Code): Podium's build service has neither the files nor npm.
 */
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve, sep } from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { call } from './podium.mjs';

/** The HyperFrames version Podium's player is vendored at (src/lib/vendor/hyperframes-player). */
export const HYPERFRAMES_VERSION = '0.9.2';

/** HyperFrames' inlined runtime, which the player supplies itself. */
const RUNTIME = /<script\b[^>]*\bdata-hyperframes-preview-runtime\b[^>]*>[\s\S]*?<\/script>/gi;

/** Below this an inlined picture stays inline: an icon is cheaper as part of the document. */
const INLINE_UNDER = 4 * 1024;

const SOUND_AND_CLIPS = /\.(mp4|webm|mp3|m4a|wav|ogg|png|jpe?g|webp|gif|avif)$/i;

async function bundler(dir) {
  const cache = join(process.env.XDG_CACHE_HOME || join(homedir(), '.cache'), 'podium', `hyperframes-${HYPERFRAMES_VERSION}`);
  /* `./compiler` is exported for `import` only, so require.resolve cannot see it: find the
     package, then read the path from its own export map. */
  const tryFrom = async (anchor) => {
    try {
      const at = createRequire(anchor).resolve('@hyperframes/core/package.json');
      const pkg = JSON.parse(readFileSync(at, 'utf8'));
      const entry = pkg.exports?.['./compiler'];
      const file = typeof entry === 'string' ? entry : entry?.import ?? entry?.node ?? entry?.default;
      if (pkg.version !== HYPERFRAMES_VERSION || typeof file !== 'string') return null;
      return await import(pathToFileURL(join(dirname(at), file)).href);
    } catch {
      return null;
    }
  };
  const own = await tryFrom(join(resolve(dir), 'package.json'));
  if (own) return own;
  const cached = await tryFrom(join(cache, 'package.json'));
  if (cached) return cached;
  mkdirSync(cache, { recursive: true });
  if (!existsSync(join(cache, 'package.json'))) writeFileSync(join(cache, 'package.json'), '{"private":true}');
  console.error(`hyperframe: installing @hyperframes/core@${HYPERFRAMES_VERSION} into ${cache} (once)`);
  execFileSync('npm', ['install', `@hyperframes/core@${HYPERFRAMES_VERSION}`, '--no-audit', '--no-fund', '--silent'], { cwd: cache, stdio: ['ignore', 'ignore', 'inherit'] });
  const fresh = await tryFrom(join(cache, 'package.json'));
  if (!fresh) throw new Error(`hyperframe: could not load @hyperframes/core@${HYPERFRAMES_VERSION} from ${cache}`);
  return fresh;
}

/**
 * Points a composition at uploaded media: every inlined picture over a few kilobytes, and
 * every project file a `src`, `poster` or CSS `url()` names. `put(bytes, name)` uploads one
 * and returns its /m/ path; each distinct file is sent once. Exported for the tests.
 */
export async function localise(html, { dir, put }) {
  const sent = new Map();
  const once = async (key, bytes, name) => {
    if (!sent.has(key)) sent.set(key, await put(bytes, name));
    return sent.get(key);
  };
  const root = resolve(dir);
  const fileAt = (ref) => {
    let path;
    try { path = resolve(root, decodeURI(ref.split(/[?#]/)[0])); } catch { return null; }
    if (path !== root && !path.startsWith(root + sep)) return null;
    return existsSync(path) && statSync(path).isFile() && SOUND_AND_CLIPS.test(path) ? path : null;
  };

  let out = html;
  const swaps = [];
  for (const m of out.matchAll(/data:(image\/(?:png|jpeg|webp|gif|avif));base64,([A-Za-z0-9+/=]+)/g)) {
    const bytes = Buffer.from(m[2], 'base64');
    if (bytes.length < INLINE_UNDER) continue;
    swaps.push([m[0], await once(m[2].slice(0, 64) + m[2].length, bytes, `inlined ${m[1]}`)]);
  }
  const refs = [
    ...out.matchAll(/\b(?:src|poster)\s*=\s*"([^"]+)"/g),
    ...out.matchAll(/\b(?:src|poster)\s*=\s*'([^']+)'/g),
    ...out.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)
  ];
  for (const m of refs) {
    const ref = m[1].trim();
    if (/^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(ref)) continue;
    const path = fileAt(ref);
    if (!path) continue;
    swaps.push([m[0], m[0].replace(m[1], await once(path, readFileSync(path), ref))]);
  }
  for (const [from, to] of swaps) out = out.split(from).join(to);
  return out;
}

/**
 * A HyperFrames project directory → the composition as one document, ready for a
 * hyperframe block's `html`. `entry` is the project file to start from (index.html).
 */
export async function composition(dir, { project, entry = 'index.html' } = {}) {
  const { bundleToSingleHtml } = await bundler(dir);
  const bundled = await bundleToSingleHtml(resolve(dir), { entryFile: entry, inlineAssets: true });
  const html = await localise(bundled.replace(RUNTIME, ''), {
    dir,
    put: async (bytes, name) => {
      const out = await call('upload_media', { data: bytes.toString('base64'), alt: `${name} (HyperFrames asset)`, project });
      if (out.warning) console.error(`  ${name}: ${out.warning}`);
      return out.url;
    }
  });
  console.error(`hyperframe: ${dir} → ${(html.length / 1024).toFixed(0)}KB composition`);
  return html;
}
