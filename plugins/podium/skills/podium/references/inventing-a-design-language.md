# Inventing a design language

## Contents

- 1. Find the physical thing
- 2. Ground first, and it does not have to be white
- 3. One accent, one job
- 4. Two or three faces, and pick them against each other
- 5. Build a scale, then refuse the middle
- 6. Name one signature move, then build it
- 7. Compute the marks
- 8. Look at it, then break the safest thing
- Directions, three or four worlds, not four palettes
- Craft references, measurements, never the look
- Invent the components
- Calm, however wild
- The failure modes, in the order they happen

This is a method, not a menu.

---

## 1. Find the physical thing

Before any colour, answer this: **what is this deck made of?**

Not the topic, the material: the surfaces the subject lives on, the marks made on them,
the light it is seen in, the lettering it already carries, and the one thing in it that warns
or celebrates. Answer for THIS subject, from reading about it, in one noun phrase.

That noun phrase is your whole design language in compressed form. Unpack it in order: the
ground is the surface; the ink is what marks it; the accent is the one thing that warns or
celebrates; the face is the lettering the material already carries, the way it is printed,
stamped, painted, cut, lit or written.

If you cannot name the material, you do not understand the subject well enough to design
for it yet. Go and read about the subject; the language falls out.

**A palette chosen because it looks nice is a palette. A palette chosen because it is the
colour of the thing is a design language.**

## 2. Ground first, and it does not have to be white

The ground decides more than anything else, and it is the decision most often made by
default: near-white, because nobody chose.

A genuinely dark deck reads completely differently in a dim room. A saturated ground reads
as a brand asserting itself. Pure white and pure black almost never do what you want.

Then the ink, and it is not black either: sample the colour of whatever makes marks in this
world. Two near-blacks a few points apart are different decks.

## 3. One accent, one job

Name the job out loud before you use it: *"the accent is the eyebrow and nothing else"*,
*"the accent is the one number per slide"*, *"the accent appears exactly twice in the
deck"*.

Two accents is a brand system, not a deck. The fastest way to destroy anything you have
built is a helpful third colour introduced "for hierarchy" on slide seven.

If you need a second non-ink colour for drawings, make it clearly *not* an accent, a cold
steel grey, a paper shadow, and forbid it from ever touching type.

## 4. Two or three faces, and pick them against each other

`--font-display` for headings and `--font-body` for copy carry the deck. Add a third only
when a job needs it: `--font-mono` for figures that line up, or `--font-alt`, a voice
reached mid-sentence with `~tildes~`: the serif inside a grotesk headline, the brush inside
a Latin sentence, the handwriting annotating a printed line. Pick it *against* the other
two; same-but-lighter is not a voice. The four slots are not a quota, a fourth face is
usually a mess. One family at several weights, a display face with a text face, a grotesk
with a serif, a mono that leads: each is a system, none is the answer. Choose by the
subject, and not by what you chose last time.

**Choose the class before the family.** Serif, slab, condensed gothic, wide display, mono,
script, grotesk: the material names one, by how its own lettering is made, and only then
do you pick a family in it. A grotesk is a choice when the material asks for it, not the
neutral answer, if the last decks all used one, this one probably should not.

Three things worth knowing:

- **A font stack can be two scripts.** `"<Latin face>", "<CJK face>", serif` puts every
  Latin glyph in the first and every CJK glyph in the second, in one string, with no markup,
  because the Latin face has no CJK and the browser falls through per glyph. Two scripts,
  each in the face built for it, in the same headline.
- **Weight is a design language, not a detail.** `--w-display: 300` and `--w-display: 700`
  in the same family are two different decks. Hairline at 180px is a completely different
  argument from heavy at 180px.
- **Test the face at the size you set it.** A reference shows a face already working at one
  size; inventing, you have to check. Set every line at the smallest size it will run and
  look full size. A high-contrast serif, a Didone, a Bodoni, breaks into hairlines below
  about 100px on a screen: keep it for the hero, or use a low-contrast cut for the rest. A
  mono or grotesk at a heavy weight with negative tracking closes its counters and collapses
  its word spaces: track it at 0 or wider. A script or a hand wants 60px and up. A line that
  fails changes its cut or its size, not the idea.

Every family you name in `vars` must appear in the one `fonts.google` spec, at every
weight you use, joined with `&family=`. A family that never loads does not error, it
falls through to the OS UI font and looks merely a bit off.

## 5. Build a scale, then refuse the middle

This is the step that separates a design language from a recolour, and it is the one most
often skipped, because the defaults are fine and fine is the enemy.

```
--fs-cover   150–220    the biggest thing in the deck
--fs-title    70–100    a slide heading
--fs-h2      ~title/2   --fs-h3  24 or more
--fs-giant   300–420    a numeral or a character bled off the frame
--fs-lede     28–34     one supporting sentence
--fs-body     24–30     paragraphs
--fs-micro    24–26     furniture: eyebrow, micro and pill are set at it
--margin      88–140    --gutter  24–48
```

Sizes do **not** derive from each other. Move `--fs-title` and set `--fs-h2` and
`--fs-h3` yourself, or they stay at 46 and 30 against whatever scale you just chose.

Then the actual move: **decide on a gap and let nothing live in it.** Nothing between 34
and 84. Nothing between 28 and 60. Big or tiny, no middle. The gap is where the drama
comes from, it is why the headline lands, and a deck with a smooth ramp of eleven sizes
has no drama anywhere in it.

## 6. Name one signature move, then build it

A signature move is a **device**, not a colour: a vertical rail down one edge, a numeral
bled off the corner, a rule that grows one column per slide, a hairline that only ever
appears under the claim, a figure cropped by the frame on every third slide.

Put it in `theme.signature` in words. Then build it on at least three slides. `publish`
compares the two, a move that is named and never drawn produces a warning, because a deck
that claims an idea it does not have is worse than one that claims nothing.

The test of a good one: **remove it, and the deck should get noticeably worse.** If
nothing changes, it was decoration.

## 7. Compute the marks

If a mark could be drawn by hand in five minutes, it is not worth drawing. What is worth
drawing is what only a program can do:

- a curve from the **real function**, an arc with its sag dimensioned, a decay, an orbit
- a field whose **density is the data**
- a **seeded** wobble, so a hand-drawn line letters identically forever
- a **pattern tiled from geometry**, most traditional repeats are a half-drop, not a
  square lattice, and that offset is the whole difference between a fabric and a grid
- a diagram of the actual **object**, a cross-section, a cutaway, an exploded view. Real
  proportions. Nobody puts these in decks and they are the most memorable thing you can
  put on a slide.
- **loss of resolution as the point**, a stack of lines that goes solid is an honest way
  to say "past here, nobody can see the difference"

`lib/draw.mjs` has the primitives. `svg` blocks render exactly as written, `<defs>`,
`<pattern>`, `<clipPath>`, `<mask>`, gradients, text on a path. Anything SVG can do, a
slide can do.

## 8. Look at it, then break the safest thing

Publish, read the warnings, open the preview in a real browser, and look at the pictures.
Then ask the question that actually improves a deck: **which slide is the safest?** Find
the one that could be in anybody's deck, and replace it with the one that scares you a
little, the slide that is ninety per cent empty, the headline cropped by the frame, the
diagram with no words on it.

Build one of those per deck and keep it. It is the slide people photograph.

---

## Directions, three or four worlds, not four palettes

The directions round (SKILL.md step 3) is where a deck gets its look, so it is where sameness
gets in. Four palettes on one skeleton is one direction four times: the person picks a
colour, and the deck that ships is the deck every agent ships.

**Start each direction in a different world.** A subject touches many: the thing itself,
the people who use it and what they hold, the place it happens, the paperwork and signage
around it, the machine underneath, the moment it goes right or wrong, the culture it comes
from, what it becomes next. Pick three or four that are far apart and run sections 1–7 for
each on its own, its own ground, ink, accent, faces, scale and signature. A world nobody
would expect for this subject is allowed, and is often the one people pick.

**Write the divergence table before any code**, `directions.md`, a column per direction:

| row | what goes in it |
|---|---|
| world | the noun phrase it comes from |
| ground | hue AND lightness, when the room fixes how light, differ in hue and material |
| accent | the colour, and its one job |
| faces | the display face's class, then the family |
| composition | where the title, the object and the empty space sit, on the cover and on the number slide |
| cover object | the one crafted thing on the cover |
| a number | how this direction shows the deck's key figure: its own component |
| a comparison | how it sets two things against each other |
| signature | the repeated device |
| motion | how it moves, or that it holds still |
| mistaken for | the brand, campaign or famous look it could pass for, written honestly, then designed out |

Then read it across. **A row with a repeat is a failure**: two dark grounds of one hue, two
grotesks, two directions that show the number as a big numeral over a small label, two
components that read the number the same way, two covers with the title top-left and the
object on the right. The composition row is the one that
slips: four worlds poured into one skeleton still read as one deck in four colours, so give
each its own composition, from its world. Change the weaker cell. Then read it against
what already exists, their last five decks (`decks()`) and anything this skill names as an
example. A cell that matches one is a copy:
replace it.

**Memory is a reference too, and the obvious world is already taken.** With no reference in
the room, the first picture that comes for a subject is the one its category's biggest brand
already owns, its colour, its ground, its kind of type, and a direction built on it reads as
that brand's ad. For a pitch to a company, a look that belongs to one of its competitors is
the worst place to land. So fill the *mistaken for* row honestly for every direction: name the
brand or the famous campaign a stranger would think of at a glance. If a name comes, change
the cells that call it up, usually the accent and the ground together, until none does. A brand
owns a combination, its colour on its ground, with its type and its objects, not a hue: change
the combination, and do not strike a colour off the wheel because a competitor uses it
somewhere. At most one direction may start in the subject's most obvious world, and only if it
goes somewhere the brand that owns that world never has.

**In their brand.** When the deck is for a named company and no house style binds, two of the
three or four directions are in the client's own brand, unless the person says not to: one
faithful, their palette as they use it, their type, and one bolder, the same palette
pushed where they never take it (one of their colours as the whole ground, their type at a
scale their site never uses). Looking like them on purpose is the one exception to the
*mistaken for* row. The two share palette and faces, so they differ on every other row. A
client's brand is a fact about them, not a reference:

- **Colours** from the pixels of their own site or logo (`node lib/eyes.mjs "<their home
  page>"`, then read them). A one-colour brand gives you a ground or an accent, not both: the
  other is white, black or a tint of theirs, never a hue they do not use.
- **Type** from their own CSS: the `font-family` of their headings and the `@font-face` they
  load (`curl -sL "<their home page>"` and the stylesheets it links). On Google Fonts, use it
  for display. Proprietary, use the nearest Google family of the same class and weight, a
  geometric sans for a geometric sans, and say in the brief which face it stands in for.
- **Blocked?** Sites behind bot protection answer a headless browser with "you have been
  blocked". Then try their logo on Wikimedia Commons
  (`https://commons.wikimedia.org/w/index.php?search=<brand>+logo`), their app-store listing or
  their press kit; if none opens, ask for the hex values and the font in the first batch. With
  no shell, the same. Never present colours from memory as sampled: say they are assumed.

Everything else in those two is this deck's own, the world, the components, the composition,
the object, so the person sees their brand taken somewhere new beside looks nobody has seen.
A brand direction is never dropped, whatever it scores: the person is owed the chance to
see their own brand. Told "you choose", recommend the strongest direction, brand or
not.

**One direction goes past comfortable**: the ground nobody would choose for this subject, the
face that looks wrong until it is right, a composition with no grid showing. People rarely
pick the safest of four, and the wild one tells you how far they will go.

Build each as a cover and the key-number slide drawn in its own component (SKILL.md step 3),
with the same words on all of them, so the only thing that differs is the design.

**One deck holds them all, and a deck has one theme.** Put every direction's faces in the one
`fonts.google` spec and set them per block with `style.font`, which takes a plain family name
as well as a slot; give each slide its own `bg` and each block its own `#hex` colours. Leave
the theme's colours neutral, but point its font slots at families the spec loads: the default
names Inter, which a deck loading its own faces never fetches, so every slot reports "never
loaded". `==accent==` takes the theme's accent, so colour a direction's words on the block.
Some findings exist only because this is a directions deck,
more faces and transition kinds than a deck should have, contrast measured against the
neutral theme, so read them, and say in the brief which you left for that reason. Eyes'
Faces line checks the theme's slots, so confirm the other families from the pictures. The
picked direction becomes the real deck's own theme.

## Craft references, measurements, never the look

A reference teaches craft by example: a type ratio that holds, labels a room can read, a
margin that breathes, one number carrying a slide, pictures that belong together. A
reference also teaches its look, and a search in the client's category finds the same
trending genre for every agent. Take its craft, never its look.

- **When:** after the divergence table is written, two or three per direction. Never one
  moodboard for all of them: the directions collapse into it.
- **Where:** in the direction's own world, from its *world* row, what that world already
  prints, labels and measures, never the client's category, and never a search containing
  deck, pitch, keynote, presentation, template or brand. Prefer sources that document craft
  to sources that show trends: type in use (Fonts In Use,
  `https://fontsinuse.com/search?terms=<q>`), museum and archive collections, the world's own
  printed matter. Open them with `node lib/eyes.mjs "<url>"`; a page behind a cookie or
  sign-in wall shows nothing, so move on. Never moodboards or trend boards: that is where the
  genre lives.
- **Take:** measurements and decisions, the ratio between the largest and smallest type,
  the size labels run at, margins as a fraction of the frame, how much room one number gets,
  how pictures are cropped and lit, how a sequence is drawn.
- **Never take:** the palette, the typeface family, the composition's signature move or the
  object. Those come from the divergence table, which is written before you look.
- **Write it down:** a picture of each in `refs/` beside the program, and `refs/USED.md`, the
  URL and the one decision taken from it. The URLs go in the brief.
- **The copy check:** before the directions are judged, put each next to its references and
  ask fresh eyes (a subagent, or you as a stranger) whether someone who knew a reference
  would recognise it, 1–5. Above 2, change what gives it away, usually the palette and the
  face first.
- **Never twice:** a reference already in one of their last decks' briefs is not used again,
  and a direction that repeats any of a recent deck's marks, ground hue, accent hue, display
  face, cover object, is replaced (SKILL.md step 5).

A reference the person gives you is a different thing, and is followed: *When they bring
a reference*, `references/asking.md`.

## Invent the components

The vocabulary's blocks, a text role, a table, a chart, a group with a radius, are the
floor, not the kit. A deck assembled only from them looks like every other deck assembled
only from them: a big numeral over a small label, rounded cards in a row, a table with rules.
That is the "simpler" look, and no palette fixes it.

For each direction, ask how its world already shows things, and draw that:

- **A quantity.** How does this world show how much? Draw its own instrument or mark, with
  the real number driving the geometry.
- **A sequence.** How does it show what comes next, or how far along you are?
- **A comparison.** How does it set two things against each other?
- **A chapter.** How does it say "a new part starts here"?

New marks over one reading are one component: one count drawn with three kinds of icon is
one chart drawn three ways. Ask what the world measures with, a
count, a length, an angle, an area, a level, a distance on a map, time on a clock, and let the
directions read the number differently.

Compute each in `svg` from the data (`lib/draw.mjs` has the primitives), colour it through
`currentColor` so it follows the theme, and make it carry proof, not ornament: when a slide
exists for a number, the numeral is still the biggest type on it and the first thing read (the
floor, rule 4). The instrument it drives may be larger, drawn around it or under it. At least
one invented component per direction; used on three or four proof slides, it is a system
nobody else has.

**Its point reads without its small print.** A stamp, a form, a dial or a route that needs
its labels read before it means anything is a diagram, not proof, and on a shared laptop
or across a boardroom the labels are the first thing to go. The claim or the number carries
the slide at hero scale; every label the room must read is 28px or more on a presented deck (above the 24px floor);
the rest is cut. A reference would have shown you that by example; here it is a rule.

## Calm, however wild

A direction that pours its whole world onto the slide, contours, rings, rules, tallies, all at
full ink, is overwhelming however new it is. The room cannot find the point, and the slide
reads as noise before it reads as design.

- **One loud thing.** Count what is at full strength in the picture: the hero (the object or
  the component), the words, the one accent mark. A fourth is too many. Everything else from
  the world is faint (`style.ink` 0.25 or less), smaller, or gone.
- **Texture stays behind.** A pattern from the world, contours, guilloche, ruled paper, a
  grid, a field of marks, sits at low ink and never under the title or the number. If you
  read it before the title, it is too loud.
- **Space belongs to the direction.** At least a third of each slide is empty, on a proof
  slide, the space inside the proof's frame counts; emptiness is how the eye knows where to
  land.
- **The component draws the comparison, not the world.** Two marks of the same unit on one
  scale, side by side, the gap the thing you see, each labelled where it ends. With one
  figure and nothing it truly compares to, draw that figure alone, never make a comparison
  out of two numbers that measure different things. Past about twenty repeated
  units a side, show a length, an area or an angle instead of a count.
- **Build up from quiet.** Words and number first, on the ground, in the faces, look. Then
  the object, then the component, then any texture, looking after each. A layer that makes
  the slide harder to read goes faint or goes.
- **The three-second test.** Open the number slide full size, look for three seconds, write
  down what you understood. Not the point? Take something away and look again.
- **Past comfortable is an idea, not a quantity.** The wild direction is one surprising
  choice, the ground, the face, the world, carried as calmly as the others.

## The failure modes, in the order they happen

1. **A palette with slides in it.** Colour and a typeface, no scale, no move. Test: could
   you swap the three colours and have a different-looking deck? Then it is a recolour.
2. **A named move that was never built.** Free to write, so it gets written.
3. **The helpful third colour**, added on slide seven for hierarchy.
4. **A smooth type ramp** with no gap, so no size means anything.
5. **The middle-sized slide**, repeated: a heading, three columns, a caption. Individually
   fine, collectively a template.
6. **`--font-alt` unset**, so `~tildes~` are a silent no-op and one voice does everything.
7. **The last deck, again.** The strongest pull of all. If you cannot say in one sentence
   what is different about this one, you have not designed it, you have reused it.
8. **The example, again.** A ground, an object or a device lifted from this skill or
   a reference. It is somebody else's answer to somebody else's subject.
9. **Four palettes, one deck.** Directions that differ in colour and share the skeleton,
   the faces' class and the components. The person picks a colour, not a deck.
10. **Stock parts.** Every number a numeral with a label, every list a row of rounded cards.
   Invent the component.
11. **The whole world on the slide.** Every texture of the direction's world at full strength:
   overwhelming, and the point is lost. Calm, however wild.
