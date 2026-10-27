# Podium, the vocabulary

Every field, value and default a deck can use, generated from the code that renders it.
Read it before the first publish. Unknown names are refused with the reason, or dropped with a warning: read warnings[].

## Contents

Each section below starts with its name in capitals; search for it.

- THEME: the deck's design language (vars, faces, the scale, signature)
- A SLIDE IS BLOCKS ON A PLANE: slide fields, bg, tone, notes
- RICH TEXT: bold, italic, accent, mono, alt
- CHARTS: bar, line, meter
- BLOCKS: text, svg, image, group, chart, table; at, style
- ROLES: what each text role draws by default
- PAINT: gradients, glass, glow, shadow, grain
- PICTURES: /m/ paths, add_pictures, generate_image
- MOTION: transitions, builds, loops

```
THEME, the deck's own design language. Optional; anything omitted falls back to a
neutral default, and the default type sizes are under the floor (--fs-body 18px,
--fs-micro 15px): set every --fs-* your roles use. There is no fixed set: invent one
from this subject. Unknown var names are REJECTED, so --font-heading (the name is
--font-display) fails loudly instead of rendering wrong.

  "theme": {
    "name": "<what this deck's language is called>",
    "signature": "<the one repeated move, in a sentence>",
    "fonts": { "google": "<Display>:wght@400;700&family=<Body>:wght@400;500" },
    "vars": { "--ground": "#…", "--ink": "#…", "--accent": "#…",
              "--font-display": "<Display>", "--font-body": "<Body>",
              "--fs-cover": "…px", "--fs-title": "…px", "--fs-h2": "…px", "--fs-body": "…px" }
  }

The shape, with no values: the language comes from this subject's own world.

fonts.google, ONE spec, every family joined with &family=. A "|" is v1 syntax, returns
HTTP 400, and the whole deck silently falls back. Every family you name in vars must
appear here, at every weight you use.

vars
  surfaces    --board --ground --inverted --accent --secondary --gradient-end
  ink         --ink --ink-invert --hairline --muted --chart-2
  faces       --font-display --font-body --font-alt --font-mono
              ↳ four SLOTS, not a quota: display and body, and alt or mono only when a job needs one, two or three faces is a system, four is usually a mess
  weight & rhythm --w-display --w-body --w-label --track-display --track-body --lh-display
              --lh-body --alt-scale --alt-tilt
  geometry    --card-radius --card-stroke --card-inset --margin --gutter
              ↳ px against a 1920×1080 slide
  scale       --fs-cover --fs-title --fs-h2 --fs-h3 --fs-ordinal --fs-giant --fs-lede
              --fs-body --fs-micro
              ↳ sizes do NOT derive from each other, move one and set the rest
  other       --mono-chip --mono-pad

A SLIDE IS BLOCKS ON A PLANE, 1920×1080, and nothing else.

  { "id": "cover", "blocks": [ … ], "bg": {…}, "tone": "invert", "anim": "rise",
    "transition": "fade", "still": "end", "margin": 140, "notes": "speaker-only" }

That is every slide field. There is no `layout`, `title`, `columns` or `stat`: you
arrange every slide from blocks. Charts and tables are block types.

  bg   color · fill · grain (PAINT, below) · image "/m/<id>" · fit cover | contain | fill | none
       · position "center" or "70% 20%" · opacity 0–1, fades the image into the ground
       · scrim left | right | top | bottom | full | none, a wash under the side the words sit on

RICH TEXT, every string on every block
  **bold**  *italic*  __underline__  ==accent==  `mono`  ~alt face~  \* escapes
  a real newline breaks the line where you want it, not where the box wraps
  ~alt~ switches to --font-alt mid-sentence. It is a no-op if --font-alt is unset.

CHARTS, kind is bar | line | meter. No pie and no donut, deliberately: the eye
compares angles badly, and what a donut usually means is a ratio against a limit, which
is "meter" (it needs chart.max). The series cap is 3, series 1 is the accent, series
2 the same accent AS TEXTURE, series 3 the ink. A fourth is rejected rather than given a
hue the design language never chose. Leave --chart-2 unset: texture is the encoding that
survives greyscale, photocopying and colour-blindness. Rendered as inline SVG by Podium:
no third-party chart service sees the data.

  { "type": "chart", "chart": { "kind": "bar", "categories": ["…", "…"],
    "series": [{ "label": "…", "values": [12, 18] }], "max": 100, "unit": "%", "source": "…" } }
  categories   one label per value; omit on a meter
  max          meter requires it, the limit the value is measured against
  unit         appended to every direct label        source  where the numbers came from

tone default | invert | accent · anim rise | fall | left | right | zoom | none · transition · still (MOTION, below)

BLOCKS, free placement on the 1920×1080 plane.

  types   text · image · svg · chart · table · group
  roles   eyebrow cover title h2 h3 statement lede body label micro ordinal
          giant quote bignum pill
          a role inherits the theme's own size for that thing, reach for one before
          style.size, and every slide stays in one type scale however it is arranged
  colour  ink accent secondary muted hairline ground inverted ink-invert current
          none  or a #hex
  faces   display · body · alt · mono
  image   src "/m/<id>" · alt · fit cover · contain · fill · none · position "center" or "60% 30%"
  svg     svg (the source) · viewBox, for a bare fragment · color, which paints currentColor

  at      x y w h right bottom z rotate opacity place, and col/span, which resolve
          against the deck's own twelve-column grid so placement survives a change of
          theme. Negatives and overflow BLEED; the slide clips.
          Omit `at` and the block flows down the margin-bound column.
  style   font size scale weight italic case align leading tracking whitespace trim
          · color bg ink opacity · width height minWidth maxWidth aspect pad radius clip
          · rule ruleColor ruleWidth ruleStyle · dir cols gap wrap justify items self grow
          · tabular · hand
          PAINT: fill textFill glass blur shadow textShadow blend grain (below)

  rule      "top" | "box" | … , an edge { edge, width, color, style }, or a list, a named
            edge wins over the box: ["box", { "edge": "left", "width": 5, "color": "ink" }]
  ruleStyle solid · dashed · dotted            radius  px, or [tl, tr, br, bl]
  tracking  em, as a number: 0.08, not "0.08em"  dir     row · col
  clip      true crops the contents to the box and its radius
  whitespace nowrap keeps a pill on one line; pre keeps spaces as typed (runs collapse)
  trim      true trims the line box to cap height and baseline, so at.y is where the
            capitals start, without it, at.y is the top of the line box
  maxWidth  "none" lifts a role's own measure (lede, statement, quote have one)

  `scale` beats `size`: it is a multiple of the ROLE's size, so the block stays hooked
  to the deck's type scale instead of freezing at one theme's numbers.

  `ink` (0–1) is how much ink the block KEEPS, 0.7 is quiet, 0.2 is nearly gone. It
  thins the block's own colour (its style.color, or the one it inherits) toward
  transparent, so it reads on paper white and on a dark card alike.

  svg blocks render as written and are the real drawing surface, compute the geometry
  rather than typing three straight rules. Use currentColor and they follow the theme.
  Ids inside one svg block are its own (they are scoped per block), so reuse "g" freely.

  TABLE    { "type": "table", "head": [...], "data": [[...], ...],
             "cols": [3, 1, 1],                 relative column widths
             "align": ["left", "right", "right"],  per column, or one for all
             "dividers": true,                  rules between columns
             "rows": "rules" | "cards" | "zebra" | "none",
             "headColors": ["accent", "secondary"],  a bar over each column head
             "lineColor": "#FFFFFF24", "rowFill": "#FFFFFF0A", "cell": [14, 20],
             "rowHead": false }                 the first cell is a bold row head unless false
           Cells take rich text. style.size on the block sets the table's type size.

  IDIOMS that work
  · To centre content in a group, let it FLOW, a child with its own `at` opts out of the
    group's justify/items and sits at the top.
  · An empty group is a shape: { type: "group", blocks: [], style: { bg, radius, shadow } }.
  · A glow is a blurred shape: a group with bg, radius 999, blur 80–200, opacity 0.5–0.9,
    behind the thing that glows.
  · textShadow with color "current" makes every run glow in its own colour.
  · Folios: "{{page:2}} / {{pages}}" renders "05 / 24" and stays right when slides move.
  · Plain monospace inside a line: set --mono-chip "transparent" and --mono-pad "0".

ROLES, what each draws by default. Every size is a theme var, so the scale is yours.
  cover      --fs-cover · display face · lines balanced
  title      --fs-title · display face · an <h2>, so the deck has an outline
  h2 · h3    --fs-h2 · --fs-h3 · display face
  statement  0.82 × --fs-title · display · at most 24ch wide
  quote      0.72 × --fs-title · display · at most 22ch
  giant      --fs-giant · display · line-height 0.9, made to bleed off the frame
  bignum     0.8 × --fs-giant · display · the ACCENT colour, the only role that is
  ordinal    --fs-ordinal · display
  lede       --fs-lede · at most 32ch · 82% opacity
  body       --fs-body · body face · --lh-body
  label      1.12 × --fs-body · --w-label weight
  eyebrow    --fs-micro · UPPERCASE · tracked 0.12em · 75% opacity
  micro      --fs-micro · UPPERCASE · tracked 0.12em
  pill       --fs-micro · UPPERCASE · tracked · a 1px rounded outline
Every role but bignum takes the ink. style.case "none" undoes the capitals; style.scale
multiplies the role's own size; ==accent== colours a phrase inside any of them.

PAINT, light, depth and texture, typed like everything else. A flat ground is a
decision, not a default, and so is a lit one: decide where this deck's light comes from.

  style.fill        gradient layers over style.bg, one, or a list of up to 6, first on top
  style.textFill    one gradient clipped to the letters (not with fill on the same block)
  style.glass       px of blur BEHIND the block, frosted glass; it shows only over a
                    translucent bg
  style.blur        px of blur on the block itself, a soft shape, or a glow
  style.shadow      { x, y, blur, spread, color, inset } or a list, depth, or a glow at 0 0
  style.textShadow  { x, y, blur, color } or a list
  style.blend       normal · multiply · screen · overlay · soft-light · hard-light · color-dodge · color-burn · darken · lighten · plus-lighter · luminosity · difference
  style.grain       0–1 film grain over the block's paint, 0.2 felt, 0.4 visible, 0.8 photocopy
  slide bg.fill     gradient layers over bg.color, under bg.image: the atmosphere
  slide bg.grain    0–1 film grain over the whole slide, under the blocks

A GRADIENT is data, never a CSS string:
  { "kind": "linear" | "radial" | "conic", "angle": 180, "at": [0.5, 1.1], "size": 0.8 or [1.2, 0.6],
    "stops": [ "accent", ["ink", 0.6], { "color": "accent", "at": 1, "alpha": 0 } ] }
  kind      default linear. angle: linear's direction (180 = top to bottom), conic's start
  at, size  radial and conic centre, radial radius, fractions of the box; outside 0–1 is
            allowed, which is how a horizon glow sits below the frame
  stops     2–8: a colour (token or #hex, alpha allowed), [colour, at], or
            { color, at, alpha }, alpha fades a TOKEN, which is how a glow ends

Each field on its own, in the theme's tokens, the syntax, not a look:
  "bg": { "color": "ground", "grain": 0.12, "fill": { "kind": "linear", "angle": 180, "stops": ["ground", "secondary"] } }
  { "type": "group", "style": { "bg": "secondary", "radius": 8, "shadow": { "y": 12, "blur": 40, "color": "#00000040" } }, "blocks": [ … ] }
  { "type": "text", "role": "giant", "text": "…", "style": { "textFill": { "angle": 90, "stops": ["ink", "accent"] } } }

PICTURES, every one is "/m/<id>": the person's own from add_pictures, generated ones from
generate_image. It works in
three places: an image block's src, a slide's bg.image, and <image href="/m/<id>"> inside
svg source, where masks, clips and blends apply to it. Share links re-sign them. Nothing
else loads: no outside URLs, no data: URIs.

generate_image kinds: art · render · photo · logo
  art     flat illustration        render  a lit 3D object or scene
  photo   a photograph             logo    one reducible mark
  transparent: true returns a cut-out, the object alone, no box, to sit on the slide's
  own ground. The palette is the deck's own colours; register is the deck's mood, in words.
  An image block with style.blend "screen" drops a black ground on a dark slide.
  Pictures come back as JPEG, a tenth of a PNG, except cut-outs and logos, which stay PNG;
  a cut-out that came back wrapped in grey haze says so in the result's warning: make it again.

MOTION, typed like the rest, and still wherever a picture is taken: still mode, print,
PDF, thumbnails, the contact sheet, eyes and reduced motion show every loop at rest and
every slide at its final build. What you measure is what the room sees first.

  transition  on a SLIDE: how it arrives, going forward. Back is always a quick crossfade to
    the slide as it was left, already built, nothing replayed.
    fade  the crossfade every slide has unless it says otherwise · 380ms
    none  a cut
    dip   fades through a colour (color, default the ground): a chapter change · 1100ms
    push  the new slide pushes the old one out, in from the right unless it says · 700ms
    wipe  the new slide is uncovered from one edge, from the left unless it says · 800ms
    zoom  the old slide swells and fades as the new one settles in · 600ms
    long form { "type": "dip", "duration": 1400, "color": "#FFFFFF" }; push and wipe take
    "from": left | right | top | bottom. The blocks on an arriving slide wait for it to land. A dip
    through a colour far brighter than the slides either side is a flash, and a room reads one
    on every chapter as flicker: dip a dark deck through its ground.

  step, until  on a BLOCK: builds.
    "step": 1    arrives on the first click, with its own anim and delay; blocks sharing a
                 step stagger among themselves
    "until": 2   leaves on the second click. Put what replaces it at the same at, "step": 2
    Next plays the next build, then the next slide; Back takes one away, and from none
    returns to the previous slide at its last build. #4.2 is slide 4 after two clicks.
    slide.still, "end" (default), "start" or a step, is the build a picture shows.

  loop  on a BLOCK: keeps moving while its slide is up, from the moment it has arrived.
    pulse   grows by amount (a fraction) and settles, like a heartbeat · 1800ms · amount 0.06
    breathe dims by amount (a fraction of its opacity) and swells back, like a light breathing · 5000ms · amount 0.35
    spin    turns a full circle every duration · 24000ms
    sway    rocks amount degrees either side of its tilt · 4000ms · amount 6
    orbit   circles around [x, y], or a point amount px to its left, staying upright · 16000ms · amount 24
    float   rises amount px and settles · 6000ms · amount 14
    drift   wanders within amount px, never quite repeating · 18000ms · amount 24
    ping    swells to amount times its size as it fades out, a ripple from a live dot · 2400ms · amount 1.8
    long form { "type": "orbit", "around": [960, 540], "tilt": 0.35, "duration": 12000,
    "reverse": true, "delay": 400 }. around and tilt are orbit's; reverse turns spin and
    orbit anticlockwise, swings a sway the other way first and sinks a float.

  drawn motion  an svg block may carry its own <style> with CSS @keyframes, and SMIL. The
    styles are the drawing's own (scoped, so a .part here never restyles a .part elsewhere),
    its animations start when its slide appears and pause elsewhere, and a still shows each
    one's LAST frame, so write the end state as the picture you want printed. Choreograph in
    the program: compute each part's animation-delay from its place in your drawing (the i-th
    part waits i × 120ms) and add var(--enter, 0ms) to wait for a transition to land.
    THE SYNTAX ONLY, an example of how the CSS is written, never a drawing to use. The parts,
    their shapes and their order are this deck's own:
    <style>.part { opacity: 0; animation: arrive 600ms ease-out both }
      .last { animation: arrive 600ms ease-out both, mark 500ms forwards }
      @keyframes arrive { to { opacity: 1 } }
      @keyframes mark { to { fill: <the accent's hex> } }</style>

  Direct it; don't demo it. One transition for chapter changes and the crossfade for the
  rest. Builds where an argument unfolds, not on every list. One loop per slide, on the
  hero object or a live signal, never on words.
```
