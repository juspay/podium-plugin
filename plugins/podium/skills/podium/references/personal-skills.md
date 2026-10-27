# Their own deck skill

A person's way of making decks, their brand, their structure, the words they never use, how
numbers are written, the logo in the corner, kept as a plain Claude Code skill folder beside
this one.

## What it is

```
~/.claude/skills/<name>/          one person's
<repo>/.claude/skills/<name>/     a team's: everyone working in that repo gets it
  SKILL.md       the rules: what to always do, never do, and how
  theme.json     optional: a design language to KEEP (their brand), as a Podium `theme`
  assets/        optional: logo.svg, product screenshots, a reference deck exported as PNGs
  lib/           optional: their own helpers (a chart style, a ground, a cover builder)
```

`SKILL.md` starts with frontmatter; the description is what makes it load on its own, so say
exactly when it applies:

```markdown
---
name: <team>-decks
description: How <person> builds <team> decks, rules, brand and assets. Use together with the podium skill whenever making a deck, pitch or presentation for <team> or its customers.
---

# <Team> decks

## Always
- Open with the customer's problem in their own words, never our logo.
- Money in the unit the audience counts in, never converted.
- End on a three-step pilot with an owner and a date per step.

## Never
- Stock photos of people at laptops. Competitor names.

## The look
Keep `theme.json` (our brand). The logo is `assets/logo.svg`, top left, 32px high.

## Voice
Short claims, numbers with their source, no exclamation marks.
```

## Using one

At the start of a deck, look at the skills you have. If one says it is for how this person
(or their team) builds decks, load it with the podium skill and treat it as part of the
brief:

- **Its rules win over this skill's defaults**, its brand is asked-for continuity, so
  "unlike their last decks" steps aside for its look. The craft floor still holds.
- **Several apply?** Ask which, in the brief's one round of questions.
- **The brief can override it** ("this one goes out in the customer's brand"), and the
  brief says so.
- Record in the brief which one you used: `brief.skill: "<team>-decks"`.

## Making one, and keeping it current: `lib/personal-skill.mjs`

```bash
node lib/personal-skill.mjs list                                        # the deck skills they have
node lib/personal-skill.mjs new <team>-decks --from <project>/<deck> \
     --who "<person>" --for "for <team> and its customers"              # from a deck that went well
node lib/personal-skill.mjs new <team>-decks --from <project>/<deck> --keep-theme   # their brand, kept
node lib/personal-skill.mjs add <team>-decks --always "End on a three-step pilot"
node lib/personal-skill.mjs add <team>-decks --never "Competitor names"
node lib/personal-skill.mjs new <team>-decks --team <repo> …            # the team's, in <repo>/.claude/skills/
```

- **Offer at the end** of a deck that went well, in one line: *"Save how we built this as
  your deck skill, so the next one starts here?"* On yes, run `new` with `--from` the deck:
  it writes the folder from the recorded brief (the must-not list and what they hate become
  "never" rules; the house style becomes the look). Add `--keep-theme` only when the deck's
  look is their brand, kept on purpose: it writes the theme as `theme.json`, and every later
  deck reuses it. Without it, every deck's look is invented. Then fill in what they ALWAYS do, copy their logo and references into
  `assets/`, and show them the SKILL.md before you call it done. It never overwrites one
  that exists.
- **Mid-session, when they state a standing preference** ("always…", "never…", "from now
  on…"), add it to their skill and say so in one line. If they have none yet, offer to
  start one.
- **A look is not a skill.** A deck skill is for the way of working. If all they want to
  keep is a look, `new --keep-theme` carries it, and the rest of the skill stays about how
  they work.

## Sharing it

It is a folder. Put it in the team's repo under `.claude/skills/<name>/` and everyone who
works in that repo has it; or zip it and send it; teammates unzip into `~/.claude/skills/`.
Agents without a filesystem (claude.ai, ChatGPT) cannot load it; paste its SKILL.md into
the project's instructions there.
