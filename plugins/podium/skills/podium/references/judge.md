# The judge, fresh eyes on a finished deck

The deck's author knows what every slide was meant to say; a judge does not. It sees only
what the room will see, holds it to a bar, and says what to change. If you are the judge,
start at *The scale*.

## Contents

- When
- How
- The scale
- The dimensions
- The directions round

## When

After the critic pass (SKILL.md), before you hand the deck over. Once for a quick deck;
until it scores 4 or more, at most twice more, for one that carries weight.

## How

**With a subagent** (Claude Code's Agent tool, or any way you have to start a second model
with a clean context): give it only this,

1. the overview picture(s) from `node lib/eyes.mjs "<look-url>"`, and three to six slides
   full size (`--slides`): the cover, the ask, and the slides your critique graded lowest;
2. the eyes text, including the line **Smallest type, measured**, judge legibility from
   those numbers, never from how small text looks in a scaled-down overview;
3. who the room is and how the deck reaches it (presented in a dim room, read on a laptop,
   opened on a phone), one line from the brief, and the brief's must-not list and which
   numbers may appear, so it never asks for one the brief forbids;
4. this file.

**In Claude Code there is always one: use it,** for the directions round and for every
re-judge after a rebuild, your own reading of your own slides is the generous one this file
exists to replace. Start it in the background. Only if it has not answered in ten minutes,
judge from the pictures yourself (*Without one*, below).

Never your program, your reasoning or your critique: the point is a reader who has not been
told what the slides mean. Ask it for ONLY this JSON:

```json
{ "scores": { "argument": 0, "hierarchy": 0, "typography": 0, "composition": 0,
              "colour": 0, "imagery": 0, "system": 0, "finish": 0, "memorable": 0 },
  "overall": 0, "presentTomorrow": false,
  "worst": "slide n: why", "fix": ["the three changes that would raise it most"] }
```

Then make those three changes in the program, as rebuilds, not nudges, publish, look, and
judge again if it is still under 4.

**Read the scores as a judge, not a meter.** Two judges on the same slides differ by about
0.2, so a change under 0.25 is noise: act on `worst` and `fix`, never chase the decimal. When
two judges' fixes contradict each other, keep what the brief and the floor say, and skip any
fix that needs something the brief forbids.

**Without one** (claude.ai, a client with no way to start a second model): score it yourself
against the scale below from the pictures alone, as if someone else had made it, before you
re-read your program. A score you gave yourself is labelled **self-judged** wherever it
appears, in the brief, beside each direction, in the hand-over, and is never shown as the
judge's.

## The scale

Nine dimensions, 1–5, half points allowed. Overall is their mean with **memorable counted
twice**: a correct, generic deck is the one nobody keeps. **The scale rewards craft
and deliberateness, never a style:** dark or light, photographic, drawn or purely
typographic, lit or flat, quiet or loud, any of them can score 5. What is scored is whether
every choice was made for this subject and this room, and whether the room can read it.

- **5**, a deck the room remembers: every slide's point unmistakable at a scale the back
  row cannot miss; a design language invented for this subject, its ground, colour, type
  and one signature move, held from the first slide to the last and developing as the
  argument moves; proof made for this deck, readable at room distance; emphasis and
  evidence taking turns. Rare.
- **4**, presentable tomorrow: each slide has one hero at hero scale, nothing is under
  24px, the proof fills the frame, the ground and colour were chosen rather than defaulted,
  and there is a beat between emphasis and evidence.
- **3**, tidy and forgettable: a 60–70px sentence as the biggest thing on content slides,
  a ground and colour that do no work, small labels as furniture, diagrams at a third of the
  frame, one move repeated slide after slide. Correct, consistent, and nobody will remember
  it.
- **2**, a default: the look you get without choosing, a template's look with this deck's
  words in it, or the palette any model reaches for unasked.
- **1**, broken: overflowing, overlapping, unreadable, missing pictures.

**Caps, apply before anything else.** A deck that trips one cannot score above it on that
dimension, however clean it is:

- **A comparison of unlike things**, two quantities in different units drawn on one scale,
  or one drawn as a share of the other (a count of customers as a slice of a count of
  agents) → argument at most **2.5**. Two figures that do not compare are two figures.

- Reads as tidy-and-forgettable (as described under 3, on most slides) → typography,
  composition and colour at most **3**.
- The look any model reaches for unasked, warm paper or off-white, a serif display, a red
  or orange accent, when the brief did not ask for it → colour at most **2.5**. (This caps
  a default, not a style: the same choices, made on purpose for a subject that wants them,
  are scored like any other.)
- Hierarchy **4+** needs hero slides: statements at 200px+ or figures at 280px+ with little
  else on the slide.
- Colour **4+** needs the colour to do work: a ground and an accent chosen for this subject,
  the accent with one job, and depth or atmosphere wherever the language calls for it. A
  flat system can score 5 when it is deliberate and striking; arbitrary or defaulted colour,
  however clean, is 3.
- Imagery **4+** needs the proof carried by visuals made for the deck, at a size the room
  can read.
- Measured type under 24px (22px inside a drawn interface) → typography at most **3**; under
  14px → at most 2.
- **No crafted object on the cover**, a title over a rail, an arc or a row of boxes, or an
  idea that lives only in the theme's name → memorable at most **2.5**, and overall at most
  **3.5** whatever the rest scores.
- Paper lit from a corner until it reads khaki, sage or grey → colour at most **3**. Paper
  is meant to stay flat and its colour clear.
- Ghost numerals behind content, condensed all-caps headlines, or one joke repeated on
  every slide → memorable at most **3**.
- **A look you have seen before**, when the room did not ask for it, a violet glow under
  frosted glass cards with a glowing orb; warm paper with a serif and a red accent (which
  also caps colour, above); a figure drawn as a lit display, LED, seven-segment, dot-matrix,
  split-flap, on a dark panel; every proof a big numeral over a small label in a rounded card
  → memorable at most **3**.
- **Another brand's look**, a deck a stranger would take for a famous brand's or campaign's
  at a glance (its signature colour on its signature ground) → memorable at most **2.5**, and
  at most **2** when that brand competes with the audience.
- **The client's own brand, used on purpose, is exempt from every look cap above.**
- **Overwhelming**, more than three things at full strength on a slide, or a pattern as loud
  as the words → hierarchy and composition at most **3**.
- **Present tomorrow** only when the overall is 4 or more and nothing in Finish is visible.

## The dimensions

1. **Argument.** Every title a claim; one idea a slide; it builds to the ask. Read only the
   titles and the case holds.
2. **Hierarchy.** On every slide the eye lands first on the one thing that matters. Scale
   contrast is real.
3. **Typography.** A scale with real contrast; two or three faces; emphasis that means
   something; nothing too small for the screen in the brief; headlines that break on sense.
4. **Composition.** A grid you can feel, deliberate space, layouts that vary with the
   content and belong to one system; the proof reaching the lower third.
5. **Colour and atmosphere.** A ground and an accent chosen for this subject, the accent
   with one job, and a mood a person would remember, whether that comes from light, from a
   photograph, or from a flat field used with conviction.
6. **Imagery and data.** Charts, diagrams, screens and pictures made for this deck, carrying
   the proof at a size the room reads, reading as one set.
7. **System and rhythm.** One language from first slide to last; statements alternate with
   proof; the signature recurs and changes rather than repeating.
8. **Finish.** Nothing overflows, overlaps by accident or sits outside the frame; no
   placeholder, no missing picture; numbers and units consistent.
9. **Memorable.** The cover carries one crafted object you could name from a thumbnail; the
   idea shows on the slides, not just in the theme's name; a read deck still has poster
   moments; nothing a hundred other decks have, including the parts, the way a number or a
   comparison is shown was made for this deck. Would a person keep this one over a correct,
   generic version of the same deck? Any style can score 5 here.

## The directions round

Before the person sees the directions (SKILL.md step 3), judge each direction's two slides as
a deck of its own, with the same JSON, one object per direction: `argument` and `system` are
`null` (two slides cannot show them), and two keys more, `"threeSeconds"`, what a stranger
understands from its number slide in three seconds, and `"competes"`, what competes for the
eye. The agent rebuilds any direction under 4 from
its `fix` list, once, and judges it again. Then every direction is shown with its score: a
3.6 is information for the person, not a reason to hide a direction. Replace one only if it
trips a look cap (*A look you have seen before*, *Another brand's look*) or is still under 3,
never a direction in the client's own brand, which is always shown.
