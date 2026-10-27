# Slides: the plane, the register, the floor

What a slide is made of, the two registers, the floor every slide meets (with the eyes finding for each rule), motion, and what made the decks people kept memorable. `SKILL.md` step 5 is the summary; the floor here is the full text.

## Contents

- A slide is blocks on a plane
- Pick the register, then meet the floor
- Make it memorable
- Do not make it consistent

## A slide is blocks on a plane

1920×1080. That is the entire model.

```js
slide({ tone: 'invert', notes: 'what you say out loud' }, [
  text('<the claim>', 'title', { at: g.at(1, 8, 186) }),
  svg(mark(), { at: { x: 0, y: 0, w: 1920, h: 1080, z: 0 }, color: 'accent' }),
  image('/m/abc…', { at: { right: -80, y: 40, w: 900 }, fit: 'cover' })
])
```

- **`at`**, `x y w h right bottom z rotate opacity place`, or `col`/`span` against the
  deck's own twelve columns. Negatives and overflow **bleed**; the slide clips. Omit `at`
  entirely and the block flows down the margin-bound column.
- **`role`** on text, `cover title h2 h3 statement lede body label micro ordinal giant
  quote bignum pill eyebrow`. A role inherits the theme's own size for that thing, which
  is what keeps forty hand-built slides in one type scale.
- **`style.scale`** beats `style.size`: it is a multiple of the *role's* size, so the
  block stays hooked to the scale instead of freezing at one theme's numbers.
- **`style.ink`** (0–1) is how much ink the block **keeps**. 0.7 is quiet, 0.2 is nearly
  gone. It mixes against `currentColor`, so it reads on paper white and on a dark card
  alike, which a fixed grey does not.
- Slide-level: `id`, `bg {color fill grain image fit position opacity scrim}`,
  `tone: "invert"`, `anim`, `transition`, `still`, `margin`, `notes` (each in the vocabulary).
  There is no running furniture, if you want a page number, draw one.

A text block's `role` is its outline level as well as its size: `cover` renders as an
`h1`, `title` an `h2`, `h2` an `h3`, `h3` an `h4`. That is free structure for anyone
reading the deck with a screen reader, and it is why a headline should wear a role rather
than a hand-set `style.size`.

Drawn marks are hidden from assistive tech, because nearly all of them are decoration.
When one is not, a chart you computed, a diagram that carries the argument, put a
`<title>` as the first child of the svg and it becomes a described image instead:

```js
svg(`<title>Capital stack: senior debt 60%, mezzanine 25, equity 15</title>${bars}`,
    { at: g.box(1, 6, 300, 300) })
```

Rich text works in every string: `**bold**` `*italic*` `__underline__` `==accent==` `` `mono` `` `~alt~`,
and a real newline breaks the line where you want it rather than where the box wraps.
`~tildes~` switch to `--font-alt` mid-sentence, which is how you get two typefaces inside
one headline.

## Pick the register, then meet the floor

Two registers, and the brief's delivery answer picks one:

- **Cinematic**, presented to a room that has to feel something: a pitch, a launch, a
  vision talk. Statements set enormous, a hero object that recurs, proof shown big. **Read
  `references/cinematic.md`.**
- **Editorial**, read, or walked through closely: an explainer, an architecture review, a
  working document. A claim per title, one signature diagram keyed by colour, the product
  drawn. **Read `references/editorial.md`.**

Say which in the brief (`register`). Either way, the floor, every deck, every slide:

1. Nothing below 24px on the 1920 plane, not a caption, a kicker, a footnote, a source, an
   axis label or a label inside a drawing; 22px inside a drawn interface, drawn at 1.3–1.5×
   life. The judge that stands in for the room reads 20px as too small. Eyes reports
   anything under 22px, svg text included, as `small type`.
2. Two or three faces, each tested at its smallest size.
3. Every slide has one hero, the thing it exists for is the biggest thing on it: a figure
   at 280px+, a statement at 200–230px with almost nothing else, or a drawing across two
   thirds of the frame. A 60px sentence over a chart at a third of the frame is the "okay
   deck". Eyes: `no hero`, `statement under hero scale`.
4. On a slide that exists for a number, the number is the biggest thing on it, at 280px or
   more. Eyes: `figure under hero scale`.
5. **Dark grounds get light with range:** a lit object, a gradient whose far edge is 25–35%
   darker than its lit corner, or a photograph. A 2–4% wash and a little grain read as flat.
   **Paper stays flat and its colour clear**, never lit from a corner, which turns it khaki,
   sage or grey; the depth on paper comes from the object drawn on it. **The room decides how light the ground is:** a projector
   in a dim room wants a dark, lit ground (light paper glares there); a deck read on a
   laptop can be light. Variety between decks comes from hue and material, never from
   putting a dim-room talk on white. Eyes: `flat grounds` (dark grounds only).
6. No more than three slides in a row with the same skeleton, and a statement slide,
   200px+, almost nothing else, after every three or four proof slides. Eyes: `proof run`.
7. Headlines break where the sense breaks: a real newline, never "sign- / ups".
8. The accent has one job.
9. The proof on a proof slide, a diagram, a drawn screen, a chart, fills two thirds of the
   frame and reaches its lower third. A headline and some cards in the top
   half over an empty bottom is the "okay deck"; eyes reports it as `empty lower band`, and a
   proof under 55% of the frame as `proof too small`.
10. The hero move varies. The same device on more than four slides, one colour of hero
    number, one crop of the hero object, one shape of divider, is wallpaper by the fifth; change
    its scale, position or form as the argument moves. Eyes: `one hero, everywhere`,
    `one picture, everywhere`.
11. Marks a room can see. A field of hundreds of tiny dots or a dense grid reads as a grey
    slab from the back row: marks of 8px or more, or fewer of them. Eyes: `marks too fine`.
12. No ledgers: past about twenty-five pieces of text a slide is a document page. Lead with
    the three or four figures that matter. Eyes: `a ledger`.
13. Calm, however wild: at most three things at full strength on a slide, the hero, the
    words, the accent mark, and texture behind words at `style.ink` 0.25 or less
    (`inventing-a-design-language.md`, *Calm, however wild*).

**Motion belongs to the register.** A presented deck moves like one directed: a
`transition` (a dip, a push) on the slides that open a chapter and the crossfade on the
rest; `step`/`until` builds where one slide's argument unfolds click by click, a build,
not three near-duplicate slides; and at most one `loop` a slide, on the hero object or a
live signal (an orbit, a breathing glow, a ping), never on words. A read deck barely moves:
builds in a walkthrough, nothing else. Every field is in the vocabulary's MOTION section.
Eyes and every still show the final build with loops at rest; look at an earlier build
with `node lib/eyes.mjs "<look-url>" --slides 4.1` (slide 4 after its first click).

## Make it memorable

A correct, generic deck is not one people keep, however clean eyes and the judge find it.
What a kept deck has:

- **The cover carries one crafted object**, from this subject's world. A cover that is a
  title over a progress rail, an arc or a row of boxes is not one.
- **The idea shows at thumbnail size.** If the metaphor lives only in the theme's name and
  on the slide it is faint rings or a grey vignette, it is not there. Pick a physical artefact the audience knows and draw it big enough to
  recognise in a thumbnail.
- **A read-closely deck still has poster moments:** a type or picture hero at poster scale
  every three or four slides, or it becomes table after table.
- **Leave out the clichés:** ghost chapter numerals behind the content, tall condensed
  all-caps headlines, one joke repeated on every slide.
- **Draw the way the subject's world draws**, rather than with a software kit of pills,
  rails and rounded cards: the parts are invented per deck (`references/inventing-a-design-language.md`,
  *Invent the components*).

With generation on, that object is usually a render made for this deck (*Making the hero
object*, `references/pictures.md`). None of this is a style: dark or light, rendered or drawn.
What matters is an object and an idea you can see, from this deck's subject, the way its
palette is (`references/inventing-a-design-language.md`).

## Do not make it consistent

The instinct this tool most needs you to fight is the one that makes every deck safe.

- **A deck should be recognisably unlike the last deck you made.** If you cannot say in
  one sentence what is different about this one, you have not designed it yet.
- **Unlike their last decks**: SKILL.md step 5. Every recipe and number in this skill is a
  way of working, not a look; ten agents following it should make ten decks that share
  nothing but their quality.
- **Nothing here is a default worth keeping.** Podium ships a neutral fallback theme so a
  themeless deck is not broken. It is not a starting point; it is a smoke alarm.
- **Nothing ships a design to lean on, and nothing is fetched to lean on.** No look from
  the web (craft references lend measurements only), nothing from the person's earlier
  decks, no example from this skill. `lib/draw.mjs` and `lib/atmosphere.mjs` are the
  toolkit; the look comes from the subject.
- **Compute the marks, and build the slide that scares you**:
  `inventing-a-design-language.md` §7 and §8.
