# The review pass

Before you hand a deck over, look at every slide as the person will, and check it against
this list. Do it with pictures, not with the JSON: the overview from
`node lib/eyes.mjs "<look-url>"`, then full size (`--slides n,…`) for anything the
overview makes you doubt.

Write down what fails, slide by slide. Fix it **in the program**, publish, and look again.
Hand over only when the list comes back clean, or when what is left is a judgement you
name to the person.

## Contents

- The argument
- What eyes measured
- Reading it where it will be seen
- Impact, would it stand next to the best deck you know?
- The design language
- What must not be there
- Handing over

## The argument

- Every slide title is a claim, not a label. "Churn halved after the move", not "Churn".
- One idea per slide. A slide making two points is two slides, or one point and a cut.
- Every slide moves the person named in the brief's outcome. The rest go.
- The last slide asks for the thing the brief says the room should do.
- A headline says what the hero number means; it never repeats it.
- Each person the brief names gets the slide that answers their own question in concrete
  terms, an amount, a limit, a threshold, a success bar, who does what. A CFO shown only
  the customer's gain has been shown the wrong slide.
- A comparison compares like with like: two quantities in one unit, on one scale. Two
  different counts are two figures side by side, never one drawn as part of the other.
- A number the room can trust. "Illustrative" is honest, but a room that owns the real
  figure will pick at a made-up one: use a public figure, or one the presenter can stand
  behind, or make the slide ask for theirs.

## What eyes measured

- No findings: nothing overflows, nothing sits on top of something it should not, every
  face loaded, no picture 404s.
- And the craft ones are clear too: `no hero`, `figure under hero scale`, `a ledger`,
  `flat grounds`, `statement under hero scale`, `proof run`, `proof too small`, `one hero, everywhere`, `one picture, everywhere`, `small type`, `empty
  lower band`, `marks too fine`. They are the judge's most common notes, measured; each one
  names the slides and what to do.
- The critic pass (SKILL.md step 7) comes before this list: `critique.md` graded slide by
  slide, the three lowest rebuilt.
- If a finding is deliberate (a bleed, an overlap that is the design), say so in the notes.
  If it is wrong, eyes cannot read a numeral drawn as svg shapes, say that too. Rebuild for
  the room, never for the checker.

## Reading it where it will be seen

- The smallest text is readable on the screen the brief names. A phone or a lit
  projector needs more than a laptop on a call does.
- Every slide has one element the eye lands on first, and it is the claim.
- Contrast holds on the ground you chose, including over pictures.
- Every face holds at the smallest size it is set: no hairlines breaking up, no closed
  counters, no collapsed word spaces (`inventing-a-design-language.md`, §4).
- One picture language: the hero object looks made the same way everywhere it appears, and
  every picture shares the palette and the light, with no lettering.
- Every proof slide's point reads without its small print: the claim or number at hero
  scale, the labels the room needs at 28px or more. A component whose meaning is in its
  labels is not proof yet.

## Impact: would it stand next to the best deck you know?

The argument can be flawless and the deck still a tidy page of text. These are the checks:

- **Scale.** Each chapter has one hero slide, a statement at 200px+ or a number at 280px+
  (the floor, rule 3), with almost nothing else on it, or one drawing filling the frame.
  Nothing is below 24px (22px inside a drawn interface).
- **Diagrams at room size.** A diagram carrying proof fills two thirds of the frame, labels
  24px+. Smaller, and it is a slide split waiting to happen.
- **The number is the biggest thing.** On a slide that exists for a number, that number is
  the largest type on the slide and the first thing read. A drawn instrument it drives may be
  larger, built around it or under it.
- **Calm, however wild.** At most three things at full strength on a slide, the hero, the
  words, the accent mark. A texture from the world (contours, rings, rules, a field of marks)
  sits faint and never under the title or the number. Read it for three seconds: if the point
  is not what you got, take something away.
- **Light where the language uses it.** A dark ground gets light with range, a tonal
  gradient with grain, a photograph, a lit object; paper stays flat and its colour clear
  (floor rule 5). A flat dark ground on purpose is fine; say so in the notes.
- **Rhythm.** No more than three slides in a row with the same skeleton. Statements between
  runs of proof.
- **Faces.** Two or three. Count them from eyes' Faces line.
- **Headlines break on sense.** A real newline where the phrase turns, never "sign- / ups"
  or a lone word on the last line.
- **The default look.** If the deck is warm paper with a serif and a red or orange accent
  and the brief did not ask for that, it is the look every model drifts to. Change it.
- **Proof reaches the bottom.** On every proof slide, the proof fills two thirds of the frame
  and reaches its lower third, no top-half cluster over an empty band (eyes: `empty lower
  band`).
- **The hero move varies.** Count the slides using your hero device; past four, change its
  scale, position or form. And any dense field of marks: can the back row see the marks?
- **Motion, directed.** One transition kind for chapter changes, the crossfade elsewhere.
  Every click shows something (lint names an empty one). Each build reads on its own: look
  at the steps before the last with eyes, `--slides 4.1` (slide 4 after one click). No loop on words, and no
  more than one moving thing a slide.

## The design language

- The signature move is there, and it is not on every slide. A move on every slide is
  wallpaper.
- The accent has one job and does only that job.
- Only the theme's colours and faces appear; nothing slipped in from a craft reference.
- **Nothing came from anywhere else.** Not a reference they did not hand you, a craft
  reference lends measurements, never a look, an example in this
  skill, or their last decks. Every craft reference used is in `refs/USED.md` with the one
  decision taken from it, and nobody who knew it would recognise it in the deck. Could somebody who has seen
  Podium's other decks name the one this was copied from? Then it was. And memory: could a
  stranger name the brand it looks like, above all one the audience competes with? Then
  change it. (The audience's own brand, colours and type, chosen on purpose, is the
  exception.)
- **The parts are invented.** At least one component, how a number, a sequence or a
  comparison is shown, exists only in this deck, and it carries proof.
- **The directions really differed**, and the deck is the one they picked, built as picked.

## What must not be there

- Nothing from the brief's `mustNot` list, anywhere, notes included.
- Every number is sourced. Illustrative ones are labelled on the slide itself.
- Nothing internal-only if the deck is going behind a share link.
- Every picture is theirs, licensed, or generated. No image found as a reference is in it.

## Handing over

- `notes` are sentences if somebody else presents it.
- A deck going behind a link has a poster.
- Every comment you acted on is resolved, with a reply saying what changed.
- Then the judge (`judge.md`); then hand it over in three lines: what it is, what you
  assumed, and the link.
