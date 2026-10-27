# Asking before you build

The quick brief in full: the one batch of questions that comes before `build.mjs` exists. `SKILL.md` step 2 is the summary; this is the detail behind every line of it. The thorough brief, for a deck that carries weight, is `references/brief.md`.

## Contents

- Why ask, and how many
- Quick, or thorough
- One round, four questions
- What to spend the four slots on
- No references: the look is invented
- When they bring a reference
- Ask what they hate
- Their own deck: match it, break it, or keep the shell
- Image generation: check, then ask
- What actually blocks
- When nobody answers

## Why ask, and how many

Everything you build hangs off four or five facts you do not have: what the room is being
asked to decide, whether anyone talks over the slides, whether a house style binds, whether
there are pictures. Guess one wrong and it is a rebuild. Ask them in one batch, before
`build.mjs` exists, never one question at a time, and never what reading the folder answers.

## Quick, or thorough

The one batch below is the **quick** brief, and it is the default. A deck that carries
weight (a pitch, a board deck, a launch, anything a customer sees) earns the **thorough**
one: three short rounds, twelve questions, in `references/brief.md`. Offer it as an option
in the first question when the stakes call for it, and take no for an answer.

Either way, **record the brief** (`references/brief.md`, *Recording it*): send it with the
first publish, `new Deck({ …, brief })` from a program. Read it at the start of every later
session and never re-ask what it answers.

## One round, four questions

`AskUserQuestion` takes up to four questions at once, two to four options each, and the
user can always type something you did not offer. Sixteen option-slots is the budget,
and the budget is the point.

**Before you ask, name the line of `build.mjs` the answer changes. If you cannot name
it, drop the question.** "What tone are you after?" changes nothing you can act on.
"Presented live, or sent as a link and read alone?" changes how much text sits on a
slide, which changes the type scale, which changes every slide.

Give every question a default and mark it, so somebody who does not care can tap once. A
question with no default is a question handing your job back to the user. Make the
options positions that disagree with each other; two options that both mean "clean and
modern" produce a coin flip and tell you nothing. Write them as consequences: not
"less text" but "read alone on a laptop, which means full sentences on every slide". Invent
those options from the subject each time; offering ready-made design languages is a menu,
and you never offer one.

One question can carry two decisions when the options are combinations: "twenty
minutes, presented" against "sent as a link" settles length and density in one slot.

## What to spend the four slots on

**Two things touch the look without pointing at anybody's work: whether a house style binds,
and what they hate (*Ask what they hate*, below).** There is no reference question (*No references*, below): the look is yours to invent from the subject, and the
person chooses it from pictures in the directions round, not from words in this one.

Spend the four in rough order, on the first that apply to this deck:

1. **What do you want the room to *do* when it ends, and who is the one person whose
   mind has to change?** Ask for a name and a job, not a segment. This is the only
   question that usually needs a free-text line, because "approve the migration budget"
   is not something you can enumerate. Without it you have no cutting rule and every
   slide stays.
2. **Presented, read alone, or presented by somebody who is not you?** The third case is
   common and nobody offers it. A deck a stranger presents needs `notes` that are
   sentences rather than cues, and `notes` are stripped from every public link, so if
   they only ever get the share link, the script never reaches them and you owe them a
   second artefact. Ask who is standing up.
3. **Where is it on screen: projector in a lit room, laptop over a call, a phone, a
   recording?** Novices never ask this and it kills more decks than any palette choice.
   A deep ground goes to flat grey on a conference-room projector, hairlines dissolve in
   video compression, type under 24px is unreadable on a phone, and a 4:3 projector
   letterboxes the fixed plane so anything bled off the bottom lands in a black band.
   Ask about the network in the same breath: the faces come from one `fonts.google` spec
   fetched at render time and the art is hosted media, so a locked-down guest network
   means the OS UI font and empty plates at the moment it matters.
4. **Does a house style bind this, or is it yours to invent?** If it goes to brand
   review and you invented a palette, the review kills the deck. Default: yours to invent,
   and when the deck is for a named company, two directions are in that company's own brand,
   its colours and type, anyway (`references/inventing-a-design-language.md`, *In their
   brand*): read their site before you write the batch, and only if it and the fallbacks
   there fail, ask for their hex values and font here.
5. **What must not be in this deck?** Ask it in those words. People will spend ten
   minutes on what the deck should say and never mention that a competitor cannot be
   named, that a customer's logo is not cleared, that headcount is not shown, that a
   roadmap date was walked back last week, or that the person in the case study has
   left. None of it is secret and none of it is volunteered, because to them it is
   background and to you it is a landmine. Ask what they hate in the same slot.
6. **Where does each number come from, and can it appear on a link that leaves the
   room?** Not whether the numbers are right, whether they are publishable. A figure
   can be true, sourced and still under NDA, and a share link is a link. Sort them into
   published, internal, and illustrative. Illustrative gets labelled on the slide, not
   in `notes` where the reader never sees it.

Two more that only matter sometimes, and cost a rebuild when they apply: **what script
are the words in**: a display face chosen for a Latin headline has no Devanagari,
Arabic or CJK, and a missing glyph falls through silently on exactly the slide carrying
a customer's name; right-to-left inverts the reading order, so a signature move anchored
to the left edge is on the wrong side of the deck. And **is this an instalment?** A
monthly review or episode four of a series is the exception to "recognisably unlike the
last deck": the audience reads a redesign as a different meeting. If it is one, pull
the previous deck's theme with `decks` rather than describing it off a screenshot.

## No references: the look is invented

Do not ask for a reference, and do not go through the person's earlier decks or
this skill's own examples for something to start from. The person wants a
deck nobody has seen, and that is the job.

What you may look at, once a direction is invented, is craft: two or three references from
that direction's own world, for their measurements and never their look,
`references/inventing-a-design-language.md`, *Craft references*. Nobody is asked for them.

Adjectives cannot start a design, so do not ask for those either. What starts it is
the subject: what it is made of, where it happens, what its people hold, sign, wear and
watch, section 1 of `references/inventing-a-design-language.md`. Find that out by reading
(their site, their product, the documents in the folder) rather than by asking. A client's
own brand colours and type are found the same way, and are a fact about them, not a reference. The one
look question worth a slot is the house style, because it binds; everything else about the
look is decided from pictures in the directions round.

What the person *hates* is not a reference and is worth asking (*Ask what they hate*,
below): it rules moves out without pointing at anybody's work.

## When they bring a reference

Sometimes they paste a screenshot or a link without being asked. **A reference they give you
is followed**: they took the trouble to show you the look they want. Read it for its
decisions, say back in two lines what you are taking and what you are leaving, and match one
slide before you build forty (below). Only if they say it must not be copied, "just for
inspiration", take its craft and its mood and invent the rest. Their own deck or brand guide
is a house style, not a reference, *Their own deck*, below.

When you follow one, read it for its decisions, not its surface:

| it arrives as | what to do with it |
|---|---|
| **an image** | `Read` it, images come back visually. Sample the ground and ink from the pixels rather than naming them by eye; measure the ratio between the largest and smallest type, and the margin as a fraction of the frame. |
| **a PDF** | `Read` it with a page range: the cover, one dense page and one sparse one. |
| **a .pptx** | A zip. `ppt/theme/theme1.xml` has the colours and font names; for the look ask for four slides exported as PDF or PNG. |
| **a URL** | Fetching strips the design. `node lib/eyes.mjs "<url>"` returns a picture of the page; a sign-in wall means ask for a screenshot. |
| **a name with no file**, "like the Economist" | Say back what you think they mean, in specifics. Half the time the correction is the brief. |

**Match one slide before you build forty.** When the reference is a deck they told you to
follow, rebuild its densest and its loudest slide at full size and put your render beside
theirs (`node lib/eyes.mjs "<look-url>" --slides n`) until they match at a glance. Then build
the deck at that level. A reference names faces that are not on Google Fonts: pick the
nearest one you can load and say which.

Nothing found in a reference goes into a deck as a picture. Pictures are the person's own,
licensed, or generated.

## Ask what they hate

Often the most productive question in the batch, because people describe what repels
them far more precisely than what attracts them. Offer objects to reject, not
adjectives: a gradient background, a stock photo of people round a laptop, a 2×2
consultancy matrix, three columns of icon-heading-paragraph, thin grey sans on white.
And ask whether the deck has an enemy, some decks exist specifically not to look like
the last twelve in the room. Asking what it must not look like is allowed: it rules moves
out without pointing at anybody's work.

## Their own deck: match it, break it, or keep the shell

"Here's our deck" is genuinely ambiguous. Half the time it means *make it look like
this* and half the time *please, anything but this*. Guessing wrong wastes the build, so
put the consequence inside each option:

- **Match it**: internal, recurring, or somebody senior will ask why it looks
  different. The house deck is a constraint and the work is the best possible deck
  inside it. Say out loud that you inherit its ceiling.
- **Break from it**: a pitch, a keynote, a launch. Then it is a reference for what to
  avoid, read for what not to repeat.
- **Keep the shell, break the inside**: logo, brand colours and cover stay; the scale,
  the layouts and the signature move are yours. This is usually the true answer and
  almost nobody offers it unprompted, so it has to be in the options.

A brand guide is the same question in a stricter form. It hands you a palette and two
faces and no scale, no gap and no device, so it is the boundary the design lives inside,
not the design. Where it genuinely fights the method here, follow the guide and spend
your invention on the signature move, but say so in one line, because you are trading
away "refuse the middle" and the user should know you did. An agent that treats a brand
guide as the brief produces the brand's website reformatted as slides.

## Image generation: check, then ask

Check before you ask: `generate_image({ check: true })` says whether the admin has turned
Podium's image model on for this account and how many pictures are left. It makes nothing.

- **On:** plan the cover's object around it (*Making the hero object*, `references/pictures.md`). If this deck is
  better drawn or typographic, decide that on purpose and say so.
- **Off:** it goes in the first batch, because it decides the design language rather than
  decorating it. The check names the admin who can turn it on; put that name in: *"Image
  generation is off for your account; <admin> can turn it on. Get access and I'll design
  with pictures, or go without (a drawn, typographic deck)?"* Default: without. If they go for access, wait for them to
  say it is on before you choose the look; do not retry the check in a loop.

A deck laid out around six plates and shipped with two is worse than a typographic deck
designed as one from the start, and discovering the gap at slide nine means redesigning the
ground, the crops and the grid.

Two more in the same breath. **Is generated imagery allowed here at all?** Plenty of
organisations forbid it in client-facing or regulated material, and the ban is invisible
until legal sees the deck. **Do you have real photography?** A real picture of their own
warehouse beats a generated one, and `add_pictures` brings it in.

## What actually blocks

Almost nothing. `publish` sends the whole deck every time and the deck comes out of a
program, so most answers are one variable near the top of `build.mjs` and a re-run.
Slide count, order, whether the case study stays, the wording of the cover: none of
these are worth waiting for.

Two things block: **the argument**, because you cannot lay out a shape you have not got,
and **a binding house style**, because the design language is built first and everything
is composed against it. Wait for those. Assume the rest and say what you assumed.

Never ask what you can find out. Open the URL they gave you. Read the repo, the brand
guide in the folder, the previous deck sitting next to yours. If they said "like the
last one", call `decks` and go and look at it. Asking for something already in front of
you reads as not having read it, and it spends the one round of attention you were going
to get.

## When nobody answers

A queued run, a scheduled job, "just build it", do not stall. State the guesses on the
record: audience and length, as two lines at the top of `build.mjs` and in `brief.assumed`,
so a later session can tell what was decided from what was guessed. The look is not
guessed once: build the three or four directions anyway (SKILL.md step 3), each named as a
noun phrase from the subject.

Then be fast. Publish the directions unlisted, run `node lib/eyes.mjs "<look-url>"`, and
show the pictures. Somebody who cannot answer "how bold do you want this" answers "not that"
in four seconds. **The first version is a better question than any question**, which is
why every remaining question waits for the preview; by then the options are concrete
and they are reacting rather than imagining. Do not re-ask a settled question in new
words. If they said fifteen minutes, it is fifteen minutes.
