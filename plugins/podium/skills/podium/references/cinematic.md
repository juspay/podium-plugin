# The cinematic register

For a deck that is **presented to a room that has to feel something**: an investor pitch, a
launch keynote, a vision talk, an all-hands. What follows is proportions and roles, the
scale, the rhythm, how big the hero is, how a statement and its proof take turns, **not a
look.** Every cinematic deck invents its own light, its own surfaces and its own hero.

## Contents

- What makes it cinematic
- Grounds, light is a method, not a recipe
- Type
- Surfaces and light
- Pictures
- Motion
- Drawn motion, one moment choreographed
- The hero, on every slide
- What breaks it

The opposite register is `editorial.md`: a document that is read. Pick by what the room does
with the deck, not by what looks impressive.

## What makes it cinematic

1. **Statements and proof take turns.** A statement slide is one idea set enormous, a
   number, a phrase, two words, with nothing else on it. A proof slide follows with the
   evidence: a table, a product screen, a chart. Never two proof slides without a statement
   between them for long; never a statement without the proof that earns it.
2. **The ground tells chapters apart**, from this deck's world: the room knows where it is
   before a word is read.
3. **One hero object recurs**, this subject's own, introduced once at hero size, then
   returning: cropped by the frame like a horizon, behind the proof, small beside a claim.
   It is the deck's face.
4. **A repeated sentence shape gives the middle a beat**: chapter titles that share one
   shape, invented for this argument. The shape is the rhythm; the words change.
5. **The product is shown, big**, in use. Never a screenshot in a box at a third of the
   width.
6. **One accent with one job**: only the key word in a statement and the figure that
   matters. Hold the line on every slide.

## Grounds, light is a method, not a recipe

Light on a slide has a source, a falloff, a colour and a texture. Decide those four for
this deck, from its world: where does light come from in the place this subject lives? A
cinematic deck can as well be bright, flat, photographic or typographic: the register is the
scale and the rhythm, not the dark.

`lib/atmosphere.mjs` has worked answers, each a function of YOUR hue: `aurora` (a lit arch
over a dark base), `dusk` (light pooling along the floor), `spotlight` (one light where the
product sits), and the blocks `glow`, `glass` and `stars`. They show the method; they are
not the register. Ten decks with an aurora are one deck ten times, so at most one of a
deck's directions uses them, and never as the unexamined default. Grain about 0.5 reads as
film on a deep ground; keep it under 0.2 on black, where grain turns to dust.

## Type

Two or three faces (floor rule 2), their classes chosen by the subject.

| Element | Size on 1920 | Weight · tracking · leading |
|---|---|---|
| Statement (a phrase) | 200–230px (≈11–12% of the width) | 700 · −0.01em · cap top at ~43% of the height |
| Giant number | 330–370px | 700 · −0.03em · leading 0.8; a 55px label above, the split below at 64px |
| A claim with a number | 280–290px, number in accent, noun in ink | 800 |
| Section title | 72–76px | 700 · −0.025em |
| Body statement (a sentence) | 40–42px | 600 · −0.045em · leading 1.26 · key words `==accent==` |
| Chapter heading | 64–92px | 500 · leading 1.08–1.18 |
| Interface numerals | 28–74px | the product's own voice |
| Interface labels | 22px+, tracked 0.06–0.1em | draw the interface at 1.3–1.5× life so its labels reach this |

Nothing is below 24px (22px inside a drawn interface), draw it bigger. A statement slide has
at most one other line, and it is at least a third of the statement's size.

## Surfaces and light, only when a direction calls for them

A surface is the direction's own: paper, metal, fabric, a screen, a sign, the subject's own
material. Glass is one among many. When it is glass, `glass({ on })` in `lib/atmosphere.mjs`
builds it; children flow inside the pane, and a child with its own `at` leaves its padding
and alignment. A table on it: `dividers: true`, `lineColor` = the edge colour, numbers
`align: right`.

- **A glow** is a blurred disc behind the thing that glows: `glow({ x, y, size, color })`
  (the vocabulary's IDIOMS has the numbers). A cut-out comes back without its halo; on a lit
  ground, give it one.
- **A headline in the light:** `textShadow { blur: 10, color: "current" }`, each run glows
  in its own colour; it reads as light, not as a drop shadow.

## Pictures

Three at most, each earning its place: the hero object, the product in use, a person.
Palette and order: `pictures.md`. Draw the interface on a photographed phone yourself,
measure the screen's rectangle, then place a group with the phone's corner radius on it; the
model's screens are gibberish.

## Motion

The room is carried, not clicked through. Motion is typed, so it is in the JSON (the
vocabulary's MOTION section):

- **Slides arrive composed.** `anim: "none"` on most slides: the crossfade brings the slide
  in whole, and nothing pops in after it. Blocks rising one by one after every click is
  motion for its own sake, and with big objects on the slide it reads as flicker. Keep
  entrances for builds, what arrives on a click because the argument does.
- **Chapters dip.** The slide that opens a chapter takes `transition: { type: "dip",
  color: … }`. Through the ground is a breath, and on a dark deck it is the one to use: a
  dip through white or any colour far brighter than the slides on either side is a flash,
  and a room watching one on every chapter calls it flicker. The crossfade everywhere else.
  One kind of transition, used for one thing. Going back is always a quick crossfade.
- **Stepped proof builds.** A table that fills row by row, three claims that arrive on three
  clicks, a "before" that is replaced in place (`until`). Builds, not near-duplicate slides.
- **The hero object is alive.** One loop, on it, a glow that breathes, a device that
  floats 12px, slow: `loop: { type: "breathe", duration: 12000 }`, 9–20 s a cycle. Never a
  loop on a statement: words that move cannot be read.

## Drawn motion, one moment choreographed

Sometimes one slide deserves real choreography: the parts of this deck's own drawing arriving
in the order the argument needs, the one that matters landing last, in the accent. Write it
as CSS inside the svg block, choreographed by the program (the vocabulary's MOTION has the
rules).

**The code below is the syntax only, an example of how it is written, never a drawing to
use.** Do not draw it as it is: the parts, their shapes and their order come from this
deck's world.

```js
// parts: this deck's own drawing, as svg strings, in the order the argument needs
const marked = parts.map((p, i) => {
  const at = `calc(var(--enter, 0ms) + ${i * 120}ms)`;
  const last = i === parts.length - 1;
  const delay = last ? `${at}, calc(var(--enter, 0ms) + ${parts.length * 120 + 300}ms)` : at;
  return `<g class='part${last ? ' last' : ''}' style='animation-delay: ${delay}'>${p}</g>`;
});
svg(`<style>
  .part { opacity: 0; animation: arrive 600ms ease-out both }
  .last { animation: arrive 600ms ease-out both, mark 500ms forwards }
  @keyframes arrive { to { opacity: 1 } }
  @keyframes mark { to { fill: ${accent} } }
</style>${marked.join('')}`, { viewBox, at })
```

The last frame is what every still shows, every part in place, the last in the accent, so
the picture in the PDF is the point of the motion. **Move fills, fade lines.** A thin stroke,
a hairline, a dashed ring, that scales or slides, above all through the slow end of an
ease-out, creeps across the pixel grid, and on a real screen that reads as flicker (eyes'
software renderer will not show it). Bring lines in by opacity where they will stay. One
choreographed slide a chapter at most; the rest of the deck should be still enough that this
one is felt.

## The hero, on every slide

Every slide gets one hero at hero scale (eyes: `no hero`, `figure under hero scale`): never
a 76px sentence as the largest thing, a drawn phone at a twentieth of the frame, or a figure
at 150px. The hero changes form as the talk moves, one figure in one colour and size on
seven slides is wallpaper (eyes: `one hero, everywhere`). A dim room gets dark grounds,
light paper glares there. Dark proof slides need their own light, a lit object, a rim of
light, a photograph; a faint gradient alone reads as flat (eyes: `flat grounds`).

## What breaks it

- **The system breaks in the last third**, go-to-market and the appendix switch to white
  corporate slides with other faces. Every slide is in the language, the dull ones most.
- **More than three faces.**
- **Dense small tables.** If a table needs 14px to fit, it is two slides, or an appendix.
- **Near-duplicate slides** where one idea builds. Build it (or say so in the notes).

Measure yourself against the scale, not the look: would this slide hold its own next to a
statement set at 220px with nothing else on the slide? If it is a tidy page of 24px text, it
is the other register.
