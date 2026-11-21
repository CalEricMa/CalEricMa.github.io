---
name: Eric Ma Personal Site
description: A goods tag on a string and the ruled spec sheet it belongs to, in cool card-stock grey, near-black ink and one indigo.
colors:
  ground: "#e7e8e4"
  card: "#f5f5f2"
  ink: "#161616"
  ink-2: "#4e514b"
  accent: "#22356b"
  accent-deep: "#1a2956"
  string: "#b9a98a"
  rule: "rgba(22, 22, 22, 0.22)"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7vw + 1rem, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 650
    lineHeight: 1.3
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, \"SF Mono\", \"Cascadia Mono\", Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  focus: "2px"
  button: "0.375rem"
  photo: "0.25rem"
  tag-top: "0.9rem"
  tag-bottom: "0.5rem"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  wrap: "70rem"
  nav-height: "3.5rem"
  entry-pad: "1.5rem"
  spec-pad: "0.9rem"
  section-gap: "clamp(3.5rem, 8vw, 6rem)"
components:
  button-solid:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.card}"
    rounded: "{rounded.button}"
    padding: "0 1.1rem"
    height: "2.75rem"
  button-solid-hover:
    backgroundColor: "{colors.accent-deep}"
  button-outline:
    textColor: "{colors.accent}"
    rounded: "{rounded.button}"
    padding: "0 1.1rem"
    height: "2.75rem"
  tag:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.tag-top}"
    padding: "2.6rem 0.9rem 0.7rem"
  string:
    backgroundColor: "{colors.string}"
    width: "3px"
---

# Design System: Eric Ma Personal Site

## Overview

**Creative North Star: "The Goods Tag"**

The profile photo is a tag on a string, and the page is the spec sheet it belongs to. The ground is uncoated card stock, the ink is near-black, and a single indigo does all the signalling. Structure comes from hairline rules and labelled rows, not boxes, cards or fills. With all content removed the page still reads as a tag and its spec table.

The page is calm so that exactly one thing can move: the tag. Nothing animates until the visitor acts; there is no scroll choreography, no hover motion, no second effect. Density is that of a printed form: narrow label column, generous row padding, text capped near 68ch.

The system uses the platform's own type (no web fonts, an owner decision) and no images beyond the photo.

**Key Characteristics:**
- Flat, ruled, label-and-value rows; hairlines are the only structural device.
- One accent (indigo) for links, buttons, focus and the current nav item; tan only on the string.
- System sans for text, system mono for labels and dates.
- One physical object (the tag) with a damped-pendulum motion contract; everything else is static.
- Same stylesheet serves home, Thoughts index and posts.

## Colors

Cool grey-green card stock, warm-neutral ink, one deep indigo, one cotton-tan accent used on a single object.

### Primary
- **Ledger Indigo** (#22356b): links, outline and solid buttons, focus ring, text selection, caret and form accent, the current nav item. Pressed/hover solid fill deepens to **Indigo Deep** (#1a2956); outline hover is a 9% indigo wash.

### Neutral
- **Card-Stock Grey** (#e7e8e4): page ground, also the eyelet hole's inner colour and scrollbar track.
- **Tag Card** (#f5f5f2): the tag face and text on indigo fills (button text, selection, skip link).
- **Press Ink** (#161616): primary text, brand mark, nav links.
- **Soft Ink** (#4e514b): secondary text, spec labels, dates, notes, footer, tag hint.
- **Hairline** (rgba(22,22,22,0.22)): every rule: spec rows, entry rows, post list, footer.
- **Cotton String** (#b9a98a): the string only. Nothing else may use it.

### Named Rules
**The One Indigo Rule.** Indigo is the only chromatic colour besides the string. It carries interaction state (link, button, focus, current), never decoration.

**The Never Colour Alone Rule.** Indigo against ink is only 1.5:1, so links are underlined and the current nav item pairs indigo with a 2px underline and `aria-current`.

**The String Is Tan Rule.** Cotton tan appears on the string and nowhere else.

## Typography

**Display / Body Font:** system sans stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif`)
**Label / Mono Font:** system mono stack (`ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, monospace`)

**Character:** Plain, native and legible; hierarchy comes from weight and tight negative tracking on large sizes, not from a display face. The mono face is reserved for spec-sheet labels and dates, which is what makes the rows read as a form.

### Hierarchy
- **Display** (700, clamp(2.75rem, 7vw + 1rem, 6rem), 0.95, -0.035em): the name in the hero only.
- **Role** (500, clamp(1.0625rem, 0.5vw + 0.95rem, 1.375rem), 1.3, max 26ch): the headline line under the name.
- **Page title** (700, clamp(2rem, 4vw + 1rem, 3rem), 1.1, -0.025em): `.prose h1` on Thoughts and posts.
- **Headline** (700, 1.75rem, 1.15, -0.02em): home section headings. Post h2 is 1.5rem/700.
- **Title** (650, 1.1875rem, 1.3): entry titles and post h3. The current role steps up to 1.5rem.
- **Body** (400, 1.0625rem, 1.6): running text; lists and notes cap at 68ch, lede at 60ch.
- **Small** (400/500, 0.9375rem): nav, buttons (600), entry notes, sub-lines, footer.
- **Label** (mono, 600, 0.8125rem, 0.04em, uppercase for spec labels): spec `dt`. Entry dates are the same mono at weight 400 with tabular numerals, no uppercase. Tag hint is mono 0.8125rem, regular weight, Soft Ink.

### Named Rules
**The Mono Is For Labels Rule.** Mono marks a label or a date in a ruled row. It never sets running text or headings.

**The Balanced Headings Rule.** Headings use `text-wrap: balance`, paragraphs and list items `text-wrap: pretty`.

## Layout

A single centred wrap (max 70rem) with a fluid gutter (clamp(1.25rem, 4vw, 3rem)). The hero is a two-area grid: intro and spec on the left, the tag in its own column on the right (24rem track at 760px and up, tag 18.5rem wide; below 760px a 9.5rem tag column beside the name, with the spec rows spanning full width underneath). Sections are separated by clamp(3.5rem, 8vw, 6rem) of top padding and share one ruled-row grammar.

Ruled rows: a 1px Hairline top rule on the list, a bottom rule per row, 1.5rem block padding on entries and 0.9rem on spec rows. Entries use a 10.5rem date column and a flexible content column with a 2rem gap; below 720px they stack label-over-value. Spec rows use a 5.5rem label column (7rem from 760px). Rows are built from `dl`, `ol` and `ul`, never a layout table.

Breakpoints: 520px (home nav wraps to two rows 11.5rem wide, left of the string), 720px (entries stack), 760px (desktop hero, wider tag, taller string). Vertical rhythm is rem-based, with no spacing scale beyond the values above.

## Elevation & Depth

Flat by default. The page, spec sheet and entries carry no shadows; depth is conveyed by hairlines. The single exception is the tag, which lifts off the page with a soft downward `drop-shadow` filter on `.tag` (`drop-shadow(0 0.5rem 0.6rem rgba(22,22,22,0.24))`) plus a 1px under-edge (`drop-shadow(0 1px 0 rgba(22,22,22,0.18))`), because it is a physical object. A filter, not `box-shadow`, so the shadow follows the chamfered silhouette and the focus ring on `.tag` is not clipped. The eyelet is a radial-gradient washer, not a shadow.

### Named Rules
**The One Object Rule.** Only the tag has a shadow (a drop-shadow filter on `.tag`). A second shadowed element makes it no longer the one object.

## Shapes

Mostly square and ruled. Buttons use a restrained 0.375rem radius with a 1.5px indigo border. The tag is the only large form: a paper layer (`.tag::after`) with 0.9rem chamfered top corners (clip-path, top edge inset 16% each side) and 0.5rem rounded bottom corners, a 1.5rem circular reinforced eyelet (grey hole, thin dark ring, pale washer), and a 0.25rem radius on the photo inside. The string is a 3px strip with 2px rounding. Focus rings use a 2px outline with a 3px offset and a 2px radius.

## Components

### Buttons
- **Shape:** 2.75rem minimum height (touch target), 0.375rem radius, 0 1.1rem padding, 0.9375rem/600 text, no underline.
- **Solid (Email, primary):** Indigo fill, Tag Card text; hover darkens to Indigo Deep.
- **Outline (Resume):** transparent with a 1.5px Indigo border and Indigo text; hover adds a 9% indigo wash.
- **Focus:** the global ring, 2px Indigo, 3px offset.
- Actions sit in a flex row with 0.6rem/1.25rem gaps; LinkedIn and GitHub appear in the same row as plain underlined links.

### Navigation
Four closed items: Experience, Projects, Thoughts, Resume (opens the PDF). Press Ink, 0.9375rem/500, no underline at rest, 1px underline on hover (0.35em offset). The current item takes Indigo, weight 600 and a 2px underline, and carries `aria-current`: `location` set by script on the home page as Experience or Projects enters the middle band of the viewport (observer margin -40%/-55%), `page` on Thoughts. Subpages show a bold `.mark` (700, -0.01em) beside the nav. The home header is a fixed 3.5rem bar with no background or border.

### Spec Rows (`.spec`)
The signature table. Mono uppercase Soft Ink label on the left, content on the right: a 650-weight strong value and a Soft Ink 0.9375rem sub-line. Rows are separated by hairlines.

### Entries (`.entry`, `.entries`)
Used for Experience, Projects, Education and Skills (as `dl`). Date or label in the mono side column; title (650), organisation (Soft Ink), optional note (0.9375rem, 68ch) and bullets (1.1rem indent, 0.5rem spacing). The current role is the only entry with a larger title.

### Post list
Hairline-ruled list rows with 0.9rem padding, capped at 68ch.

### Hang tag (signature)
Anatomy: `.pivot` (zero-size anchor at the string's top) and `.hang` (figure rotating around `50% 0`) holding the 3px tan string, then the tag (a `.tag` box whose paper is a separate `::after` layer, with a `::before` eyelet washer), a 2:3 photo (object-fit cover, black backing), and a mono "Drag to swing" hint. The tag overlaps the string by -1.2rem. The string starts at the page's top edge (anchor offset is minus nav height minus `--hero-pt`, 1.25rem, 2rem from 760px; string height is 3rem or 5.5rem plus `--hero-pt`). `.top` and `.spec` sit at z-index 3 above the swinging tag (z-index 2) so the nav and spec text stay readable and clickable.

Motion and physics contract:
- Nothing moves at rest or on load. Rotation is applied only as an inline `rotate()` and removed at rest.
- Model: a damped pendulum; gravity/length 10.5 s^-2 (about a 2 s period), damping 3.4 s^-1 (settles in about 3 s), sub-stepped at up to 240 Hz, dt capped at 1/30 s. It stops animating when angle and velocity fall below small thresholds, so there is no idle frame loop.
- Swing limit: 0.65 rad below 760px, 0.45 rad from 760px up, so the tag never sweeps across the contact controls. Releases are clamped to energy at that limit.
- Inputs: pointer drag (6px threshold, angle measured from the pivot, release velocity smoothed), click/tap (a 2.2 rad/s nudge away from the clicked side), Enter or Space (alternating-direction nudge). Drag is never the only way in.
- Touch: `touch-action: pan-y` so vertical swipes scroll the page. Cursor is grab, then grabbing while dragging.
- Semantics: script gives `.hang` `role="button"`, `tabindex="0"` and an aria-label only when live; the photo's alt is "Eric Ma".
- Focus: a 2px Indigo ring with 4px offset on `.tag`, unclipped because the paper clip lives on `::after`.
- Reduced motion: when `prefers-reduced-motion: reduce` matches, the tag is a static photo (no role, no tabindex, no cursor, no hint, no animation) and the page listens for the setting changing. There is no on-page toggle. Smooth scrolling is also enabled only under `no-preference`.

## Do's and Don'ts

### Do:
- **Do** build new surfaces from hairline rules (1px, Hairline) and mono labels over sans values.
- **Do** keep Indigo (#22356b) for interaction state and pair it with an underline or `aria-current`.
- **Do** keep nothing moving except the tag, and keep reduced-motion users on the static photo.
- **Do** size touch targets to 2.75rem and cap running text at 68ch.
- **Do** keep the page on the system font stacks.

### Don't:
- **Don't** add cards, filled panels, tinted backgrounds or additional shadows; the tag is the only raised object.
- **Don't** use Cotton String (#b9a98a) off the string, or add a second chromatic accent.
- **Don't** convey the current page or a link by colour alone.
- **Don't** add web fonts, a second animated effect, or scroll-triggered motion.
- **Don't** set body or headings in the mono face.
