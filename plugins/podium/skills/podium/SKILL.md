---
name: podium
description: Build a presentation deck, or a web page people scroll, and publish it to Podium, run on your machine, or on Podium itself with the build tool when you have no shell (claude.ai chat). Use when asked to make or design a deck, presentation, slides, pitch or talk, or a page, one-pager, microsite, web report or landing page. Your first reply is questions, not a deck, about the room, never about taste in looks: who must decide what, presented or read, whether a house style binds, and, if image generation is off, whether to get access or go without. Never ask for references (one they give you is followed) and lift nothing from past decks: every look is invented new, from its subject. Then show three or four directions as pictures, each a cover and a proof slide, different in world, colour, type and parts, and let them pick before you build. There are no templates and no layouts: you invent the design language and arrange every slide yourself.
---

# Podium

Podium renders and hosts decks and pages. **It does not design them**: no templates, no
layouts. You write a **program** that emits the deck, publish it, look at the picture, and
change the program.

This file is the procedure, in order. Each step's detail is a file in `references/`, named at
the step that needs it. **Open that file at that step**; this summary does not replace it.

| When | Read |
|---|---|
| Before the first publish | `references/vocabulary.md`: every field, role and default |
| Before you write the questions | `references/asking.md` |
| It carries weight: a pitch, a board deck, a launch | `references/brief.md` (the thorough brief) |
| Setting up the program; no shell; eyes; a poster; a PDF | `references/setup.md` |
| Before you choose a colour | `references/inventing-a-design-language.md` |
| Presented to a room / read closely | `references/cinematic.md` / `references/editorial.md` |
| Laying out slides; the floor in full; motion | `references/slides.md` |
| Before the first `generate_image`, or placing any picture | `references/pictures.md` |
| A page people scroll, not slides | `references/pages.md` |
| The tools; comments on a deck; what will bite you | `references/tools.md` |
| Before you hand it over | `references/review.md`, then `references/judge.md` |
| They have their own deck skill | `references/personal-skills.md` |

**Deck or page?** Presented, or paged slide by slide → a **deck** (blocks on a 1920×1080
plane). Read by scrolling → a **page** (one HTML document; `references/pages.md` first). The
brief, the critic and the judge are the same for both.

**Their own deck skill comes first.** If one of your skills is for how this person builds
decks, load it now as part of the brief: its rules beat this skill's defaults; the floor still
holds. Several? Ask which (`node <this skill's folder>/lib/personal-skill.mjs list`).

## 1. The first ten minutes

A one-line request (*"make me a deck about Q3"*) settles neither of the two things that
decide whether the deck is any good: what it is for, and how it looks. So the first ten
minutes always run the same way, and the person's first deck depends on them:

1. **Questions, one batch** (step 2), about the room and never about the look. Call
   `generate_image({ check: true })` first: if it is off, the batch offers the choice.
   **No references for the look.** One they give you is followed (step 2); the look is
   invented from the subject, every time.
2. **Directions, as pictures** (step 3): each a cover with its crafted object and a proof
   slide. They pick from the pictures, not from your descriptions.
3. **The argument**, as slide titles that are claims. Approve, or say what moves.
4. **Then build** (the program, looking at every slide) and run the critic and the judge
   before anybody else sees it.

Skip the directions (step 3) only when the look is already decided: a house style that
binds, a reference they gave you (unless "just for inspiration"), the
next instalment of a series. "Quick" is not a reason to skip it, a deck whose look nobody chose is the deck
people reject.

## 2. Ask: one batch, before `build.mjs` exists

**Open `references/asking.md` before you write the batch**: what to spend the slots on, what
they hate, their own deck, brand guides, a reference they bring anyway, nobody answering.

- **One round** of up to four questions, a default marked on each, options that disagree and
  read as consequences ("read alone on a laptop, which means full sentences on every slide"), never a menu of
  ready-made looks. **Name the line of `build.mjs` each answer changes, or drop the question.**
  More than four apply? The rest go in the message text, one line each, default marked.
- **In order, the first that apply** (`references/asking.md` has the slots): what the room
  must *do*, and the one person whose mind must change (a name and a job); presented, read
  alone, or presented by somebody else (then `notes` are full sentences, and they never reach
  a share link); the screen and the network; whether a house style binds (their brand's
  colours, faces or logo are the one thing allowed to fence the invention in); what must
  **not** be on it; where each number comes from and
  whether it may leave the room (illustrative figures are labelled on the slide). When they
  apply: the script the words are in, and whether it is an instalment (then `decks` gives you
  the last theme).
- **Never ask for a reference.** One they give you is followed (`references/asking.md`,
  *When they bring a reference*).
- **Image generation:** `generate_image({ check: true })` before you ask. Off → it goes in the
  batch: "<admin named in the check> can turn image generation on for you. Get access, or go
  without?" Default: without. On or off, ask whether generated imagery is allowed at all and
  whether real photography exists.
- **Thorough brief** (`references/brief.md`): offer it in the first question when the deck
  carries weight; take no for an answer.
- **Record the brief**, an object, sent as `brief` with the first publish (the directions
  deck), or `deck.brief` in a program, the answers, the directions you showed and the one
  picked, what you assumed (`references/brief.md`, *Recording it*). Read it at the
  start of every later session and never re-ask what it answers.
- **Only the argument and a binding house style block.** Assume the rest and say so. Never
  ask what you can find out: open the URL, read the folder, call `decks`.
- **Nobody answering?** Write the guesses (audience, length) at the top of `build.mjs`, build
  the three or four directions anyway, publish unlisted, look, and show the pictures. The first
  version is a better question than any question.

## 3. Directions, then the outline

**Directions: three or four, invented, unlike each other.** Before forty slides, invent three
or four design languages for THIS subject, four when nothing binds the look. Open
`references/inventing-a-design-language.md` (*Directions*) first. Each starts from a
different world the subject touches. Before any code, write the **divergence table** in
`directions.md`: a column per direction, a row each for its world, ground (hue and
lightness), accent and its one job, display face class, composition (where the title, the
object and the empty space sit), cover object, how a number is shown, how a comparison is
shown, the signature move, motion, and **mistaken for**, the brand or famous look it could
pass for. No row repeats a cell (the brand pair excepted); no cell comes from
a reference, this skill's examples or their last five decks (`decks()`). Memory is a reference too: a direction a
stranger would take for another brand, above all a competitor, changes until it is not.

- **Craft references** (inventing, *Craft references*): two or three per direction, from its
  own world, never a search for decks; take their measurements, never their colours, faces,
  layout or object, and change any direction recognisable from them.
- **For a named client** with no binding house style, unless they say not to, two directions
  are **in their brand**, their colours and type, sampled from their site, one faithful, one
  bolder, with this deck's own world, components and composition; the rest are invented.
- Each direction **invents a component** of its own, how its world shows a number, a
  sequence or a comparison, drawn in `svg`, not the stock card, pill and table.
- Push one direction past comfortable: the one you would hesitate to show.
- **Calm, however wild:** floor 13 (inventing, *Calm, however wild*); the number slide read
  in three seconds, both sides on one scale; wild is one surprising choice, never more layers.
- **Quiet first:** words and number alone, look, then the world a layer at a time.

Build each as **two slides**, the cover with its crafted object (step 5), and the slide that
carries the deck's key number in that direction's own component, in one deck,
`<id>-directions`, unlisted, with step 4's loop; the floor (step 5) and pictures (step 6)
already apply. **Judge them before the person sees them** (`references/judge.md`,
*The directions round*): rebuild any under 4 once, then show them all with their scores;
replace one only if it trips a look cap or is still under 3, never a brand one. Then put the
pictures, each with its score, and the link in front of the person, each direction named as a noun phrase from this subject. They pick one, mix two ("the ground
of 2, the numbers of 4"), or pin comments. Record the table and the pick in the brief: a
direction chosen from a picture is a decision; one chosen from a description is a guess.

**The outline.** Then the argument as numbered slide titles, each a claim: *"3. Churn halved
after the move"*, not *"3. Churn"*. Mark which slide carries which number and where the ask
is. One question: approve, or say what moves.

Skip the outline only when they handed you the argument as a document.

## 4. Build: the program, then look

```
brief  →  directions  →  outline  →  build ⟲ look  →  review  →  hand over
build.mjs   →   deck.json   →   publish   →   look at it   →   change build.mjs
```

Copy `lib/` next to the deck with node (`cp -R` stops for permission every time):

```bash
node -e "require('fs').cpSync(process.argv[1] + '/lib', 'lib', { recursive: true })" <this skill's folder>
```

```js
import { Deck, text, svg, image, group, grid, publish, poster } from './lib/podium.mjs';
import { rng, noise, hatch, contours, stipple } from './lib/draw.mjs';
```

`lib/atmosphere.mjs` is one measured way to light a dark ground, not a look: at most one
direction may use its recipes; the others invent their own light.

`node build.mjs` publishes (token: `PODIUM_TOKEN`, else Claude Code's `podium` entry), and so
does importing it: check syntax with `node --check build.mjs`. **No
token or no shell:** send the program to the `build` tool; look with `look({ id })`. Then,
after every publish:

1. **Read `warnings[]` before the picture.** They name what a screenshot cannot show: a
   `fonts.google` spec that failed, a scale you never set, a chart encoding you destroyed.
2. **Look.** `node lib/eyes.mjs "<look-url>"` writes every slide to `shots/` (`--slides 3,7`
   full size) and prints what it measured: faces, overflow, overlaps, broken pictures. **Read
   the pictures**: every layout bug here survived a clean build and died when somebody looked.
3. **Change the program**, never the JSON. `publish` replaces the whole deck: resend it.
   Give every slide an authored `id`, so comments stay pinned when slides move.

A shared deck gets a poster; an emailed one, `node lib/pdf.mjs <share-url>`. How:
`references/setup.md`.

## 5. The design language and the floor

**Open `references/inventing-a-design-language.md` before you choose a colour.** In short: the
language comes from what the subject is *made of*; two inks and one accent with one job; a
scale that refuses the middle; two or three faces picked against each other; one signature
move, named in `theme.signature` and built on three slides.

- **Unlike anything already made:** `decks()` shows their last decks; pick a ground hue,
  accent hue and display face none of the last five used, unless the brief asks for
  continuity (a series, their brand). How light the ground is belongs to the room.
- **Invented parts:** at least one component no other deck has, the way this subject's world
  shows a number, a route or a ranking, computed in `svg` and carrying proof, not decoration.
- **The register:** presented to a room → `references/cinematic.md`; read closely →
  `references/editorial.md`. Say which in the brief.
- **Memorable:** the cover carries one crafted object from this subject, recognisable at
  thumbnail size; a read deck still gets a poster moment every three or four slides.

**The floor: every deck, every slide.** Eyes flags each; the full text is in `references/slides.md`.

1. Nothing under 24px on the 1920 plane (22px inside a drawn interface).
2. Two or three faces, each tested at its smallest size.
3. One hero per slide: a figure at 280px+, a statement at 200–230px with almost nothing else,
   or a drawing across two thirds of the frame.
4. A slide that exists for a number: the number is the biggest thing on it, 280px+.
5. Dark grounds get light with range (a lit object; a gradient 25–35% darker at its far edge;
   a photograph). Paper stays flat and its colour clear.
6. No more than three slides in a row on one skeleton; a statement slide after every three or
   four proof slides.
7. Headlines break where the sense breaks, with a real newline.
8. The accent has one job.
9. The proof fills two thirds of the frame and reaches its lower third.
10. The hero move varies: one device on more than four slides is wallpaper.
11. Marks a room can see: 8px or more.
12. No ledgers: past about twenty-five pieces of text, lead with the three or four figures.
13. Calm: at most three things at full strength; texture behind words at `style.ink` 0.25 or less.

Slide mechanics (`at`, roles, `style.scale`, `style.ink`, rich text, motion):
`references/slides.md`.

## 6. Pictures

With generation on, the cover is usually one object generated for this deck, never stock:
name it, prompt the object not the mood, make three at medium, pick by looking, remake the
keeper at xhigh, no lettering. One to three pictures a deck, in a hole the composition left,
never behind the copy; theirs come in through `add_pictures`.
**Open `references/pictures.md` before the first `generate_image`**, including *Making the hero
object*.

## 7. Review before you hand it over: the critic

**A clean eyes report is where the review starts, not where it ends.** Eyes measures; the rest
is judgement.

1. Open the overview picture. For every slide, one line in `critique.md` next to the program:
   its hero (what, how big), what a projector in a lit room does to it, and a grade from 1 to 5
   against the best keynote you know (presented) or the best annual report page (read). Grade
   the cover twice: one crafted object? the idea visible at thumbnail size? (The scale:
   `references/judge.md`.)
2. **Rebuild** the three lowest slides, the composition, not the font size: the number becomes
   the hero, the diagram takes two thirds of the frame, the ledger becomes four figures, the
   ground does its work.
3. Publish, look, grade them again, until no slide is below 4 or three rounds have passed. Then
   `references/review.md`: the argument, the design language, the brief's must-not list.
4. **The judge, `references/judge.md`:** a subagent that gets only the pictures, eyes'
   measurements, one line about the room, the brief's must-not list and which numbers may appear,
   and the scale, never your program or reasoning, and
   returns scores and the three changes that would raise it most. Make them; judge again as its
   *When* says. In Claude Code it is always a subagent, the directions round included; only a
   client that cannot start one judges itself, and labels those scores self-judged.
5. **Three checks, every time.** *The brief is current*: every decision made during the build (a
   changed colour, a rule broken on purpose, a dropped direction) goes into `brief` on the last
   publish. *No warning you caused is unexplained*: fix each, or say in the brief why it stays.
   *Claim only what you checked*: a figure is "illustrative" unless the person gave it, a
   font "loaded" only if eyes said so.

Hand it over in three lines: what it is, what you assumed, and the link.

## 8. After hand-over

- **Comments steer the deck.** Read the comments in `decks({ id })` before you rebuild a deck
  anybody has looked at. Fix in the program, publish with `resolve: [{ comment, reply }]`, and
  never resolve a comment you did not act on. (`references/tools.md`)
- **When it went well**, offer in one line to save how it was built as their deck skill
  (`references/personal-skills.md`).
