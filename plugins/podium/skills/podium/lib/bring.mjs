#!/usr/bin/env node
/**
 * Bring one of your own decks into another space, when the person asks for it.
 *
 * Podium keeps every space sealed: Personal, and each organization, never share or copy
 * anything between them. So this is done here, on your machine, the way the person would do
 * it by hand: it reads the deck from the space it is in, uploads its pictures again into the
 * other space, and publishes it there as a NEW private deck, whose brief records where it came
 * from. The original is not touched. Its program (if Podium kept one) is written next to you,
 * so later changes are built from it in the new space.
 *
 *   node lib/bring.mjs <deck-id> --to juspay [--project <its project>] [--into <project there>] [--as <new id>]
 *
 * `--to` is a space: `personal`, or an organization's address (decks() lists them as
 * `spaces`). Needs a Podium API token on this machine (PODIUM_TOKEN, or Claude Code's `podium`
 * server registered with one). Without one, do the same with the tools: decks({ id, program:
 * true }), then publish it with `space`.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { call, credentials } from './podium.mjs';

const args = process.argv.slice(2);
const flag = (k) => {
  const i = args.indexOf(`--${k}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const id = args.find((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));
const to = flag('to');
if (!id || !to) {
  console.error('usage: node lib/bring.mjs <deck-id> --to <space> [--project <p>] [--into <p>] [--as <id>]');
  process.exit(2);
}

const MEDIA = /\/m\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})/g;

const source = await call('decks', { id, project: flag('project'), program: true });
const from = source.space ?? 'personal';
if (from === to) {
  console.error(`"${id}" is already in ${to}`);
  process.exit(2);
}
const newId = flag('as') ?? source.id;
const into = flag('into');

/* Never over another deck: the new space must not already have one at that address. */
const listing = await call('decks', { space: to, q: newId });
if ((listing.decks ?? []).some((d) => d.id === newId && (!into || d.project === into))) {
  console.error(`${to} already has a deck "${newId}"; pass --as <another id>`);
  process.exit(1);
}

/* The pictures, uploaded again into the new space: one there cannot show one from here. */
const { url, token } = credentials();
const deck = {
  id: newId,
  ...(source.kind === 'page' ? { kind: 'page', html: source.html } : {}),
  title: source.title,
  subtitle: source.subtitle,
  theme: source.theme,
  slides: source.slides ?? [],
  poster: source.poster,
  frame: source.frame,
  ...(into ? { project: into } : {})
};
let text = JSON.stringify(deck);
const program = source.program && Array.isArray(source.program.files) ? source.program : null;
let programText = program ? JSON.stringify(program) : '';
const ids = [...new Set([...text.matchAll(MEDIA), ...programText.matchAll(MEDIA)].map((m) => m[1]))];
for (const old of ids) {
  const res = await fetch(`${url}/m/${old}`, { headers: { authorization: `Bearer ${token}` } });
  if (!res.ok) {
    console.error(`  picture /m/${old}: ${from} answered ${res.status}; left as it was`);
    continue;
  }
  const data = Buffer.from(await res.arrayBuffer()).toString('base64');
  const up = await call('upload_media', { data, alt: `brought from ${from}`, space: to, ...(into ? { project: into } : {}) });
  text = text.split(`/m/${old}`).join(up.url);
  programText = programText.split(`/m/${old}`).join(up.url);
  console.error(`  picture /m/${old} → ${up.url}`);
}

const brief = {
  ...(source.brief && typeof source.brief === 'object' ? source.brief : {}),
  broughtFrom: { space: from, project: source.project, id: source.id, version: source.version, at: new Date().toISOString() }
};
const out = await call('publish', { ...JSON.parse(text), space: to, visibility: 'private', brief });
console.error(`brought ${source.id} from ${from} into ${out.space ?? to} as ${out.published} (private), in ${out.project}`);
console.error(`  look   ${out.look}\n  stage  ${out.stage}`);

if (program) {
  const dir = join(process.cwd(), 'brought', String(out.published));
  for (const f of JSON.parse(programText).files) {
    const path = join(dir, f.path);
    mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, f.body);
  }
  console.error(`  its program is in ${dir}: build from there, with space "${to}" on its Deck`);
}
