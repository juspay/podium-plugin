# The editorial register

For a deck that is **read, or walked through closely**: an enterprise explainer, an
architecture review, a working document for an operator, a pilot plan, a quarterly review.

## Contents

- The register
- The bar, every slide
- Measures
- Motion
- What breaks it

A read deck meets the same craft as a presented one, a hero on every slide, drawings that
fill the frame, with more words around it. Read closely is not a licence to be quiet
everywhere.

The opposite register is `cinematic.md`. Pick by what the room does with the deck.

## The register

1. **Every title is a claim**, one sentence with a full stop: *"The service slot that would
   have gone empty."* Read the titles alone and the argument is there.
2. **One signature diagram carries the argument and returns**, a drawing invented for this
   subject, with every pill, column and connector keyed to one of its parts by colour.
   Colour encodes a ROLE and nothing else.
3. **The product is drawn, not screenshotted**: its own screens, mid-use, with numbered
   annotations, drawn in blocks and svg, so it is sharp, on-palette and editable.
   **And the deck's object can be generated**, one object from this subject's world, as
   `art` on the paper's own colour, flat, big enough to recognise in a thumbnail
   (`references/pictures.md`, *Making the hero object*).
4. **Chapter dividers are poster moments**: the chapter's title at cover size, or one
   object from the deck's world drawn big, on an inverted ground, or on the paper itself. Not a ghost numeral behind the title: that is the cliché people reject.

## The bar, every slide

- **One hero.** The thing the slide exists for is the biggest thing on it: the key figure
  at 280–360px with its label and its change small beside it, or the diagram across two
  thirds of the frame, or a statement at 200px+. The claim title sits above at 56–72px and
  is never the largest thing on a proof slide. A 58px sentence over a chart at a third of
  the frame is the pattern this register exists to leave. (Eyes: `no hero`, `figure under
  hero scale`.)
- **Paper stays flat and its colour clear**: a colour chosen for the subject, held flat.
  Lighting paper from a corner turns it khaki, sage or grey. The depth on a read deck comes
  from the object drawn on the paper, not from a vignette. Dark grounds in this register (a
  chapter divider, a deck read on a dark screen) get light with range (eyes: `flat grounds`).
- **Type for the room.** Nothing below 24px on the 1920 plane, footnotes, axis labels and
  mono labels included (22px inside a drawn interface); table text 24px+. Mono is for data, figures, ids, timings, code, not for
  furniture. (Eyes: `small type`.)
- **No ledgers.** More than about twenty-five pieces of text on one slide is a document
  page. Lead with the three or four figures that matter, at hero size, and move the rest to
  an appendix slide or the notes. (Eyes: `a ledger`.)
- **A diagram is the slide.** A diagram that carries the proof fills two thirds of the
  frame, labels 24px+, and reaches the lower third. Split the slide rather than shrink the
  drawing. (Eyes: `empty lower band`, `marks too fine`.)
- **Rhythm.** No more than three slides in a row with the same skeleton; a statement slide
  after every three or four proof slides, the next section's claim at 200px+.
- **The motif grows and the hero changes form.** Build the signature diagram part by part,
  change its size and angle, zoom into one part for its chapter. A hero figure in one colour and size
  on more than four slides is wallpaper, vary scale, position and form. (Eyes: `one hero,
  everywhere`, `one picture, everywhere`.)

## Measures

| Element | Setting on 1920×1080 |
|---|---|
| Margins | 120px left and right |
| Claim title | display 500, 56–72px, −0.035em; top ≈ 110; one sentence, a full stop |
| Hero figure | display 600–700, 280–360px, leading 0.85; its label 26–30px beside or above it |
| Statement | display 500–600, 200–230px, after every three or four proof slides |
| Lede | body 24–28px; one line, up to ~95ch (`maxWidth: "none"`) |
| Eyebrow | 24px, UPPERCASE, 0.06–0.08em, on section openers, not every slide |
| Folio | 24px, `"{{page:2}} / {{pages}}"` at the bottom right |
| Cover title | display 500, 140–180px |
| Chapter divider | the title at 200px+, or one object from the deck's world drawn big; inverted, or on the paper |
| Ground | paper flat, in one clear colour; a dark ground gets light with range |

**Tables**, text at 24px+. Four columns and six rows is a table; more is an appendix.

**Drawn interface**, at 1.3–1.5× life size, not 1:1: a console the room can read is
bigger than the console, and its labels reach 22px. Numbered annotation dots 34px in the
accent with a 3px ring in the ground colour, repeated down a side column with the
explanation.

## Motion

A read deck barely moves. In a walkthrough, the signature diagram can BUILD, one part per
click (`step`), the annotation dots arriving with the part they explain, so the presenter
walks the room through it in order. No transitions beyond the crossfade, and no loops: a
page that moves is a page that cannot be read.

## What breaks it

A sentence as the biggest thing on every slide; grey carrying the hierarchy instead of size
(four greys at similar sizes give the eye nowhere to land); flat paper with a whisper of
gradient; a table of forty cells where four numbers were the point; a diagram so small it
needs its own caption to be read. If you would not print the slide at A4, pin it on a wall
and read it from across the room, it is not finished.
