---
name: Eric Ma Personal Site
description: A full-width indigo hero band holding one stretchy portrait, over a ruled spec sheet on cool card-stock grey with near-black ink.
colors:
  ground: "#e7e8e4"
  card: "#f5f5f2"
  ink: "#161616"
  ink-2: "#4e514b"
  accent: "#22356b"
  accent-deep: "#1a2956"
  on-accent: "#f5f5f2"
  on-accent-2: "#c9d0ea"
  rule: "rgba(22, 22, 22, 0.22)"
  rule-on-accent: "rgba(245, 245, 242, 0.3)"
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
  portrait: "0.75rem"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  wrap: "70rem"
  nav-height: "3.5rem"
  portrait-w: "9.5rem"
  entry-pad: "1.25rem"
  spec-pad: "0.9rem"
  section-gap: "clamp(3.5rem, 8vw, 5.5rem)"
components:
  button-solid:
    backgroundColor: "{colors.on-accent}"
    textColor: "{colors.accent}"
    rounded: "{rounded.button}"
    padding: "0 1.1rem"
    height: "2.75rem"
  button-solid-hover:
    backgroundColor: "#ffffff"
  button-outline:
    textColor: "{colors.on-accent}"
    rounded: "{rounded.button}"
    padding: "0 1.1rem"
    height: "2.75rem"
  nav:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    height: "{spacing.nav-height}"
  hero-band:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  portrait:
    rounded: "{rounded.portrait}"
    width: "{spacing.portrait-w}"
---

# Design System: Eric Ma Personal Site

## Overview

**Creative North Star: "The Pull-Toy Spec Sheet"**

A deep indigo band carries the name, the role and one toy: a portrait you can grab and stretch like a rubber sheet. Below it the page drops to cool card-stock grey and reads as a printed spec sheet, with hairline-ruled rows, mono labels over plain sans values, and near-black ink. One hue does everything; one object moves.

The band is the Committed colour: the sticky nav and the hero are the same indigo, so the header reads as one surface while the page scrolls beneath it. The rest is calm on purpose, so that the portrait is the only thing that responds to touch. Density is that of a printed form: narrow label column, generous row padding, text capped near 68ch.

The system uses the platform's own type (no web fonts, an owner decision) and no imagery beyond the portrait.

**Key Characteristics:**
- Indigo band (nav plus hero) over a flat, ruled grey sheet; hairlines are the only structural device below the band.
- One hue (indigo) for the band, links, focus and selection; no second accent.
- System sans for text, system mono for labels, dates and the portrait hint.
- One toy: the WebGL rubber-sheet portrait. Everything else is static apart from link scrolling.
- "Amazon" is the one bold company name.
- The same stylesheet serves home, Thoughts index and posts.

## Colors

Cool grey-green card stock, near-black ink, and one deep indigo used both as a flood (the band) and as the interaction colour (links, focus).

### Primary
- **Ledger Indigo** (#22356b): the hero band and sticky nav fill; on the light ground it is the link colour, focus ring, selection fill, caret and form accent. **Indigo Deep** (#1a2956) is defined as a token alongside it.

### Neutral
- **Card-Stock Grey** (#e7e8e4): page ground below the band.
- **Band Paper** (#f5f5f2): text, buttons, hairline-free outlines and focus ring on the indigo band; selection text on light ground and the skip-link fill.
- **Band Mist** (#c9d0ea): indigo-tinted secondary text on the band (place, spec labels, sub-lines, portrait hint).
- **Press Ink** (#161616): primary text on the ground.
- **Soft Ink** (#4e514b): secondary text on the ground: dates, org lines, notes, footer.
- **Hairline** (rgba(22,22,22,0.22)): every rule on the ground: entry rows, post list, footer.
- **Band Hairline** (rgba(245,245,242,0.3)): the spec rows' rules on the band.

### Named Rules
**The One Hue Rule.** Indigo is the only chromatic colour. On the band it is the surface; on the ground it marks interaction (link, focus, selection), never decoration.

**The Never Colour Alone Rule.** Links are underlined (1px, 2px on hover), and the current nav item is marked by weight 700 plus a 2px underline and `aria-current`, never by colour. Indigo against ink is only about 1.5:1.

**The Band Text Rule.** Text on the band is Band Paper or Band Mist only, with the same two-step hierarchy as Press Ink and Soft Ink on the ground.

## Typography

**Display / Body Font:** system sans stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif`)
**Label / Mono Font:** system mono stack (`ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, monospace`)

**Character:** Plain, native and legible; hierarchy comes from weight and tight negative tracking on large sizes, not from a display face. Mono is what makes the rows read as a form.

### Hierarchy
- **Display** (700, clamp(2.75rem, 7vw + 1rem, 6rem), 0.95, -0.035em): the name in the hero only.
- **Role** (500, clamp(1.0625rem, 0.5vw + 0.95rem, 1.375rem), 1.3, max 26ch): the line under the name.
- **Page title** (700, clamp(2rem, 4vw + 1rem, 3rem), 1.1, -0.025em): `.prose h1` on Thoughts and posts.
- **Headline** (700, 1.75rem, 1.15, -0.02em): home section headings. Post h2 is 1.5rem/700.
- **Title** (650, 1.1875rem, 1.3): entry titles and post h3. The current role steps up to 1.5rem; folded older roles use 1.0625rem.
- **Company name** (800, 1.375rem, -0.01em): "Amazon" in the hero spec only. In the Experience org line it is `strong` at 1.125rem/700.
- **Body** (400, 1.0625rem, 1.6): running text; lists and notes cap at 68ch, lede at 60ch.
- **Small** (400/500, 0.9375rem): nav (500), buttons (600), entry notes, sub-lines, footer.
- **Label** (mono, 600, 0.8125rem, 0.04em, uppercase): spec `dt` on the band. Entry dates and the portrait hint are the same mono at weight 400, no uppercase; dates use tabular numerals.

### Named Rules
**The Mono Is For Labels Rule.** Mono marks a label, a date or the portrait hint. It never sets running text or headings.

**The Amazon Is The Only Bold Name Rule.** One company name carries extra weight (800 in the hero). No other organisation is set heavier than its neighbours.

**The Balanced Headings Rule.** Headings use `text-wrap: balance`, paragraphs and list items `text-wrap: pretty`.

## Layout

A single centred wrap (max 70rem) with a fluid gutter (clamp(1.25rem, 4vw, 3rem)). Page order: sticky 3.5rem indigo nav, full-width indigo hero band, then light sections on the grey ground with clamp(3.5rem, 8vw, 5.5rem) of top padding and a footer.

The hero is a grid. Below 760px: name and role beside a 9.5rem portrait column, with the spec rows spanning full width underneath. From 760px: intro and spec stack on the left and a 22rem track holds the portrait (18rem wide, centred), column gap 3rem, band padding 2.5rem top and 4rem bottom.

Ruled rows: 1px Hairline top rule on the list, bottom rule per row, 1.25rem block padding on entries (1.75rem on the current role) and 0.9rem on spec rows. Entries use a 10.5rem mono date column and a flexible content column with a 2rem gap; below 720px they stack. Spec rows use a 5.5rem label column (7rem from 760px). Older roles are native `details`/`summary` rows (one line, title plus org, open on click). Projects are a linked title plus one line.

Anchors clear the sticky nav via `scroll-padding-top` (nav height plus 1rem).

Breakpoints: 360px (tighter nav gaps), 520px (phone nav: home mark hides, 0.875rem links with taller tap padding), 720px (entries stack/unstack), 760px (desktop hero). Vertical rhythm is rem-based with no spacing scale beyond the values above.

## Elevation & Depth

Flat. Below the band nothing has a shadow; depth is conveyed by hairlines and by the colour step from indigo band to grey ground. The one exception is the portrait frame, which lifts off the band with `box-shadow: 0 0.9rem 1.6rem -0.7rem rgba(0,0,0,0.55), 0 0 0 1px rgba(245,245,242,0.18)`: a soft downward shadow plus a faint paper-coloured edge.

### Named Rules
**The One Toy Rule.** There is one interactive object, the portrait, and it is the only element with a shadow or a pointer-driven animation. A second toy or shadowed element breaks the page's single point of play.

## Shapes

Mostly square and ruled. Buttons have a restrained 0.375rem radius and a 1.5px Band Paper border. The portrait is the one large form: a 2:3 frame with 0.75rem corners, clipped, with a black backing. Focus rings are 2px outlines with a 3px offset and a 2px radius (Band Paper on the band and nav, Indigo on the ground; the portrait uses a 4px offset).

## Components

### Buttons
- **Shape:** 2.75rem minimum height (touch target), 0.375rem radius, 0 1.1rem padding, 0.9375rem/600 text, no underline.
- **Solid (Email, primary):** Band Paper fill with Indigo text on the band; hover goes to white (#ffffff).
- **Outline (Resume):** transparent, 1.5px Band Paper border and text; hover adds a 14% paper wash.
- **Focus:** 2px Band Paper ring, 3px offset.
- Actions sit in a flex row with 0.6rem/1.25rem gaps; other links in the row are plain underlined Band Paper links.

### Navigation
Sticky, indigo, 3.5rem tall, no border. Brand mark (700, -0.01em) then Experience, Projects, Thoughts, Resume at 0.9375rem/500 in Band Paper, no underline at rest, 1px underline on hover. The current item is weight 700 with a 2px underline and `aria-current`: `location` set by scroll-spy on home (Experience or Projects), `page` on Thoughts and `true` on a post's parent link. On phones the mark hides and the links take the full row.

### Spec Rows (`.spec`)
The hero's table, on the band. Mono uppercase Band Mist label on the left; value on the right (strong 1.1875rem, with the 1.375rem/800 company name) and a Band Mist 0.9375rem sub-line. Rules are Band Hairline.

### Entries (`.entry`, `.entries`)
Used for Experience, Projects, Education and Skills. Mono Soft Ink date or label in the side column; title (650), organisation (Soft Ink, with the bold company name), a one-line summary and, in collapsed `details` rows (the current role's Details and the older roles), bullets (1.1rem indent). Only the current role has a larger title.

### Older-role rows
Native `details`/`summary`: a single line of title (1.0625rem) and Soft Ink org, pointer cursor; opening adds the notes beneath.

### Post list
Hairline-ruled list rows with 0.9rem padding, capped at 68ch.

### Portrait (signature)
A 2:3 `.portrait` frame inside the hero band holding a plain `img` and a `canvas`. Script upgrades it to a WebGL rubber sheet when WebGL is available and motion is not reduced; otherwise the `img` stays.

Motion and physics contract:
- Mesh of 14 by 21 cells with a spring simulation: stiffness 150, damping 5 (lower means more wobble), neighbour coupling 40, grip 380.
- Grab anywhere: the pulled area follows the pointer with gaussian falloff (sigma 0.2 of frame width), pull capped at 0.4 of the frame, the frame edge pinned, and the sheet wobbles back on release.
- Click or Enter or Space gives a wobble (poke speed 5). Drag is never the only way in.
- Touch: `touch-action: pan-y` on the canvas so vertical swipes still scroll; cursor is grab, then grabbing.
- Semantics: when live, the frame gets `role="button"`, `tabindex="0"` and an aria-label describing pull and key use; these are removed when not live. The image alt is "Eric Ma".
- Hint: "Go on, pull my face" in mono Band Mist, visible only while live.
- Fallbacks: plain `img` under `prefers-reduced-motion: reduce` (and when the setting changes) or without WebGL; recovers from WebGL context loss and restore.

### In-page scrolling
Links to anchors use a JS eased scroll, 450-900 ms scaled to distance, cancelled by wheel, touch or key input, and instant under `prefers-reduced-motion`. CSS `scroll-behavior: smooth` applies only under `no-preference`.

## Do's and Don'ts

### Do:
- **Do** build new surfaces from hairline rules (1px) and mono labels over sans values, on the grey ground.
- **Do** keep Indigo (#22356b) as the one hue: the band, links, focus and selection.
- **Do** put text on the band in Band Paper (#f5f5f2) or Band Mist (#c9d0ea) only.
- **Do** pair every link and current-state signal with an underline, weight or `aria-current`.
- **Do** keep reduced-motion users on the plain photo and instant scrolling.
- **Do** size touch targets to 2.75rem and cap running text at 68ch.
- **Do** keep the page on the system font stacks.

### Don't:
- **Don't** add a second toy, a second animated effect, scroll-triggered motion or extra shadows.
- **Don't** add cards, filled panels, tinted section backgrounds or a second chromatic accent.
- **Don't** convey the current page or a link by colour alone.
- **Don't** set a second company name in heavier weight than Amazon's.
- **Don't** set body or headings in the mono face, or add web fonts.
