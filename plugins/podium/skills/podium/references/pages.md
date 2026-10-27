# Pages

A **page** is a single web page people scroll: a closing note, a launch page, a report, an
announcement, a story told top to bottom. A **deck** is slides somebody clicks through or
presents. Podium hosts both, at the same links, with the same comments, versions and
sharing.

## Contents

- Invent it, no references
- One document, both widths
- The shape of a good page
- Motion
- Pictures and links
- Publish, look, fix
- On their own website

**The rule:** read by scrolling, on any screen → a page. Presented, or paged slide by slide
→ a deck. When the person asks for "a page", "a one-pager", "a microsite", "a web report"
or "something like a landing page", it is a page.

A page is **one HTML document**: its own CSS and its own small scripts inside it. It is
not blocks on a plane: a page has to reflow from a 390px phone to a 1440px desktop, and only
real web layout does that. Everything in SKILL.md about the brief, the design language, the
critic and the judge still holds; this file is what is different.

## Invent it, no references

Never ask for a reference, and lift nothing from their earlier pages; one they
give you is followed (`references/asking.md`, *When they bring a reference*).

Design from the story and the subject's own world, as `inventing-a-design-language.md`
describes, and show **three or four directions** before building the whole page: each the
top of the page, the hero and the first section, at 1440 and at 390, in its own world,
colour, faces and components, published as separate unlisted pages and looked at with eyes.
For a named client, two of them are in its own brand (`inventing-a-design-language.md`, *In
their brand*). Judge each before they see it and rebuild any under 4 (`judge.md`, *The
directions round*). They pick from the pictures.

## One document, both widths

It is built once and holds at every width. The checks below are what eyes measures.

- **Fluid by default.** Type with `clamp()` (a display size like `clamp(48px, 9vw, 132px)`,
  body `clamp(16px, 1.1vw + 12px, 19px)`), containers with `max-width` and side padding,
  grids that wrap (`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`), images at
  `max-width: 100%`. Two breakpoints at most, around 860px and 640px.
- **Nothing scrolls sideways at 390px.** No fixed width over the phone's; long words and
  numbers get `overflow-wrap: anywhere` or a smaller size; decorative bleeds sit inside a
  parent with `overflow: hidden`.
- **Phones get real sizes.** Body text 16px or more; nothing under 12px anywhere; links and
  buttons at least 44px tall. A stat that is 140px on a desktop is still the hero on a
  phone at 64px; let it shrink with `clamp()`, do not hide it.
- **`<meta name="viewport" content="width=device-width, initial-scale=1">`** in the head,
  always. Without it a phone renders a desktop page in miniature.

## The shape of a good page

- **One hero.** The claim, set enormous, and one visual. It is the cover of the deck the page
  replaces.
- **Numbered sections, each with an `id`** (`<section id="numbers">`). People comment on a
  page by pinning to an element, and an id is what keeps a pin on the same thing at every
  width.
- **Rhythm.** Alternate dense and quiet: a section of figures, then one line set large; a
  table, then a picture. Four dense sections in a row is a document, not a page.
- **One signature move,** repeated: the dividers between sections, a way numbers are set, a
  frame round pictures. Name it in the brief.
- **A close.** What happens next, who to talk to, the one link, not a footer of everything.

Faces from Google Fonts (`<link>` in the head; two families, three at most). Colour from the
subject. From the deck's floor, these hold: one accent with one job, no lorem, real numbers big, body
text against its ground at 4.5:1 or better.

## Motion

Reveal on scroll is fine, and quiet: opacity plus a 12–24px rise over 400–600ms, triggered
by an `IntersectionObserver`. Two rules:

- **Content is visible without the script.** Add the hidden starting state from the script
  (`document.documentElement.classList.add('js')`, then `.js .reveal { opacity: 0 }`), so a
  page whose script fails is still a page.
- **Respect `prefers-reduced-motion: reduce`**: no movement, everything shown.

Marquees, sprites and drawn animation are the page's signature moves when the story wants
them, and CSS when they can be.

## Pictures and links

Pictures are Podium media: `/m/<id>` paths from `add_pictures` (the person's own) or
`generate_image`, used as `<img src="/m/…" alt="…">` or a CSS `url(/m/…)`. Nothing else
loads pictures; no hot-linked images from other sites, no base64 photographs inline.
Drawings are inline `<svg>`. Links open in a new tab. No analytics, trackers or third-party
widgets.

## Publish, look, fix

The page is a file next to its folder, `page.html`.

- **With a shell (Claude Code):** `node lib/page.mjs page.html --id <id> --project <project>`
  publishes it and prints the `look` URL.
- **Without one (claude.ai chat):** `publish({ kind: "page", id, project, title, html })`.
  Later changes can send only the edit:
  `publish({ kind: "page", id, patch: [{ find, replace }] })`; each `find` must appear
  exactly once in the stored page.

Then look, every time: `look({ id })`, or `node lib/eyes.mjs "<look>"`. You get the page at
1440px and at 390px, top to bottom, and the measurements: sideways scroll on the phone, text
under 12px, faces that never loaded, broken pictures, script errors, sections with no id.
Fix the document and publish again.

Then the critic and the judge, as SKILL.md describes, section by section instead of slide by
slide, and the judge sees both widths.

## On their own website

When the page is to live inside the person's own website, embed it. Ask which website, then
publish with `embed` set to that site:

- **With a shell:** `node lib/page.mjs page.html --id <id> --project <project> --embed "example.org"`
- **Without one:** `publish({ kind: "page", id, embed: "example.org" })`

The result's `embed.code` is the HTML to paste where the page should appear. It shows the
page with nothing of Podium's around it (no comments, no way back to a library), and the
frame grows to the page's height, so their website scrolls and the frame never does. Only
the sites named may show it; a private page becomes "unlisted", because an embed needs a
link. `embed: "off"` stops it.

Inside a frame that fits its page, `100vh` means the frame's height, not the screen's, so a
section sized to the screen grows with it. Cap such sections with `max-height`, as a hero
usually wants anyway.
