---
name: Eric Ma Personal Site
description: A full-width harbor-blue hero band holding one stretchy portrait, over a ruled spec sheet on blue-grey paper with blue-black ink, with a blue-black dark theme where the band darkens to a quiet strip.
colors:
  ground: "#eef1f5"
  card: "#f8f9fb"
  ink: "#1a2230"
  ink-2: "#4d586a"
  accent: "#284777"
  accent-deep: "#1f3a63"
  on-accent: "#f4f7fb"
  on-accent-2: "#c5d3ea"
  on-accent-wash: "rgba(244, 247, 251, 0.14)"
  link: "#22528f"
  rule: "rgba(26, 34, 48, 0.16)"
  rule-on-accent: "rgba(244, 247, 251, 0.24)"
  ground-dark: "#0f141c"
  card-dark: "#161c26"
  ink-dark: "#d5dce6"
  ink-2-dark: "#9daabd"
  accent-dark: "#1b2b48"
  accent-deep-dark: "#15223a"
  on-accent-dark: "#eef2f8"
  on-accent-2-dark: "#a9bbd8"
  link-dark: "#8fb3f5"
  rule-dark: "rgba(213, 220, 230, 0.14)"
  rule-on-accent-dark: "rgba(238, 242, 248, 0.18)"
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

A harbor-blue band carries the name, the role and one toy: a portrait you can grab and stretch like a rubber sheet. Below it the page drops to blue-grey paper and reads as a printed spec sheet, with hairline-ruled rows, mono labels over plain sans values, and blue-black ink. One hue does everything, neutrals included; one object moves.

The band is the Committed colour: the sticky nav and the hero are the same blue, so the header reads as one surface while the page scrolls beneath it. The rest is calm on purpose, so that the portrait is the only thing that responds to touch. Density is that of a printed form: narrow label column, generous row padding, text capped near 68ch.

The system uses the platform's own type (no web fonts, an owner decision) and no imagery beyond the portrait.

**Key Characteristics:**
- Blue band (nav plus hero) over a flat, ruled blue-grey sheet; hairlines are the only structural device below the band.
- One hue (blue, about OKLCH h255-260) for the band, links, focus and selection, and every neutral is tinted toward it; no second accent. In dark, links, focus and selection take a lighter tint of it.
- Two themes, light and dark, switched by a nav button; in dark the band darkens with the page so it never outshines the content.
- System sans for text, system mono for labels, dates and the portrait hint.
- One toy: the WebGL rubber-sheet portrait. Everything else is static apart from link scrolling.
- "Amazon" is the one bold company name.
- The same stylesheet serves home, Thoughts index and posts.

## Colors

Blue-grey paper, blue-black ink, and one harbor blue used both as a flood (the band) and, slightly brighter, as the interaction colour (links, focus). Every neutral shares the blue's hue at low chroma, so the page reads as one family; the earlier warm grey-green neutrals sat almost opposite the accent on the wheel and read as dirty next to it.

### Primary
- **Harbor Blue** (#284777): the hero band and sticky nav fill. **Harbor Deep** (#1f3a63) is defined as a token alongside it.
- **Harbor Link** (#22528f): link colour, focus ring, selection fill, caret and form accent on the light ground (through `--link` and `--focus`); about 6.9:1 on the ground and 2.0:1 against ink.

### Neutral
- **Blue-Grey Paper** (#eef1f5): page ground below the band.
- **Card** (#f8f9fb): skip-link fill.
- **Band White** (#f4f7fb): text, buttons, outlines and focus ring on the band (about 8.7:1); selection text on the band.
- **Band Mist** (#c5d3ea): blue-tinted secondary text on the band (place, spec labels, sub-lines, portrait hint; about 6.2:1).
- **Band Wash** (rgba(244,247,251,0.14)): hover fill for the outline button and theme toggle.
- **Harbor Ink** (#1a2230): primary text on the ground (about 14.1:1).
- **Slate Ink** (#4d586a): secondary text on the ground: dates, org lines, notes, footer (about 6.4:1).
- **Hairline** (rgba(26,34,48,0.16)): every rule on the ground: entry rows, post list, footer.
- **Band Hairline** (rgba(244,247,251,0.24)): the spec rows' rules on the band and the portrait's edge ring.
- Scrollbar thumb #a9b3c2 on the ground colour.

### Dark theme

`:root[data-theme="dark"]` (with `color-scheme: dark`) remaps every colour token, the band included.
- **Night Ground** (#0f141c): page ground, a blue-black.
- **Night Band** (#1b2b48): band and nav fill, only about 1.3:1 above the ground, so it reads as a quiet raised strip rather than a glowing slab. Harbor Deep dark is #15223a.
- **Mist Ink** (#d5dce6): primary text (about 13.4:1), deliberately below pure white to reduce halation.
- **Dusk Ink** (#9daabd): secondary text (about 7.8:1).
- **Sky Link** (#8fb3f5): links, focus ring and selection fill (about 8.7:1). Selection text is the ground colour.
- Band text #eef2f8 (about 12.6:1 on Night Band) and Band Mist #a9bbd8 (about 7.3:1); band wash rgba(238,242,248,0.12); band hairline rgba(238,242,248,0.18).
- **Dark Hairline** (rgba(213,220,230,0.14)): rules on the ground. Card #161c26.
- Scrollbar thumb #38445a on the ground colour.

**How it is chosen.** `theme.js`, loaded in `<head>` on every page, sets `data-theme` on `<html>` before paint: the stored `localStorage` "theme" value if present, else the system `prefers-color-scheme`. It follows live system changes until the visitor picks, and copies the current `--accent` into `<meta name="theme-color">` so the mobile browser bar matches the band. A nav button (`.theme-toggle`, 2.75rem, Band White sun/moon SVG, `aria-label` switching between "Switch to dark mode" and "Switch to light mode") flips and remembers the choice; it is hidden until the script adds `.has-theme`, and the choice lasts only for the session if storage is blocked.

**What stays the same.** Layout, type, hairline structure, the portrait and its shadow, and the underline-not-colour link rule.

### Named Rules
**The One Hue Rule.** Blue is the only chromatic colour, and every neutral is tinted toward it (OKLCH hue about 255-260, low chroma). On the band it is the surface; on the ground it marks interaction (link, focus, selection), never decoration.

**The Never Colour Alone Rule.** Links are underlined (1px, 2px on hover), and the current nav item is marked by weight 700 plus a 2px underline and `aria-current`, never by colour. Link against ink is only about 2:1.

**The Band Text Rule.** Text on the band is Band White or Band Mist only, in both themes, with the same two-step hierarchy as Harbor Ink and Slate Ink on the ground.

**The Band Sits Below The Content Rule.** In dark mode the band darkens to Night Band so it is never brighter than the text it frames. Keep it within about 1.5:1 of the dark ground.

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

A single centred wrap (max 70rem) with a fluid gutter (clamp(1.25rem, 4vw, 3rem)). Page order: sticky 3.5rem blue nav, full-width blue hero band, then light sections on the blue-grey ground with clamp(3.5rem, 8vw, 5.5rem) of top padding and a footer.

The hero is a grid. Below 760px: name and role beside a 9.5rem portrait column, with the spec rows spanning full width underneath. From 760px: intro and spec stack on the left and a 22rem track holds the portrait (18rem wide, centred), column gap 3rem, band padding 2.5rem top and 4rem bottom.

Ruled rows: 1px Hairline top rule on the list, bottom rule per row, 1.25rem block padding on entries (1.75rem on the current role) and 0.9rem on spec rows. Entries use a 10.5rem mono date column and a flexible content column with a 2rem gap; below 720px they stack. Spec rows use a 5.5rem label column (7rem from 760px). Older roles are native `details`/`summary` rows (one line, title plus org, open on click). Projects are a linked title plus one line.

Anchors clear the sticky nav via `scroll-padding-top` (nav height plus 1rem).

Breakpoints: 340px (last nav item, Resume, hides; the hero has its own Resume button), 400px (header and nav gaps tighten, theme toggle shrinks to 2.25rem), 520px (phone nav: home mark hides, 0.875rem links with taller tap padding), 720px (entries stack/unstack), 760px (desktop hero). Vertical rhythm is rem-based with no spacing scale beyond the values above.

## Elevation & Depth

Flat. Below the band nothing has a shadow; depth is conveyed by hairlines and by the colour step from the blue band to the blue-grey ground. The one exception is the portrait frame, which lifts off the band with `box-shadow: 0 0.9rem 1.6rem -0.7rem rgba(0,0,0,0.55), 0 0 0 1px var(--rule-on-accent)`: a soft downward shadow plus a faint Band Hairline edge.

### Named Rules
**The One Toy Rule.** There is one interactive object, the portrait, and it is the only element with a shadow or a pointer-driven animation. A second toy or shadowed element breaks the page's single point of play.

## Shapes

Mostly square and ruled. Buttons have a restrained 0.375rem radius and a 1.5px Band White border. The portrait is the one large form: a 2:3 frame with 0.75rem corners, clipped, with a black backing. Focus rings are 2px outlines with a 3px offset and a 2px radius (Band White on the band and nav, Harbor Link (light) or Sky Link (dark) on the ground; the portrait uses a 4px offset).

## Components

### Buttons
- **Shape:** 2.75rem minimum height (touch target), 0.375rem radius, 0 1.1rem padding, 0.9375rem/600 text, no underline.
- **Solid (Email, primary):** Band White fill with band-blue text; hover goes to white (#ffffff).
- **Outline (Resume):** transparent, 1.5px Band White border and text; hover adds the Band Wash.
- **Focus:** 2px Band White ring, 3px offset.
- Actions sit in a flex row with 0.6rem/1.25rem gaps; other links in the row are plain underlined Band White links.

### Navigation
Sticky, band blue, 3.5rem tall, no border. Brand mark (700, -0.01em) then Experience, Projects, Thoughts, Resume at 0.9375rem/500 in Band White, no underline at rest, 1px underline on hover, then the theme toggle pushed to the right edge (2.75rem square, 0.375rem radius, transparent with the Band Wash on hover). The current item is weight 700 with a 2px underline and `aria-current`: `location` set by scroll-spy on home (Experience or Projects), `page` on Thoughts and `true` on a post's parent link. On phones the mark hides and the links and toggle share the row.

### Spec Rows (`.spec`)
The hero's table, on the band. Mono uppercase Band Mist label on the left; value on the right (strong 1.1875rem, with the 1.375rem/800 company name) and a Band Mist 0.9375rem sub-line. Rules are Band Hairline.

### Entries (`.entry`, `.entries`)
Used for Experience, Projects, Education and Skills. Mono Slate Ink date or label in the side column; title (650), organisation (Slate Ink, with the bold company name), a one-line summary and, in collapsed `details` rows (the current role's Details and the older roles), bullets (1.1rem indent). Only the current role has a larger title.

### Older-role rows
Native `details`/`summary`: a single line of title (1.0625rem) and Slate Ink org, pointer cursor; opening adds the notes beneath.

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
- **Do** build new surfaces from hairline rules (1px) and mono labels over sans values, on the blue-grey ground.
- **Do** keep blue as the one hue: Harbor Blue (#284777) for the band and Harbor Link (#22528f) for links, focus and selection in light; Night Band (#1b2b48) and Sky Link (#8fb3f5) in dark. Tint any new neutral toward the same hue.
- **Do** build every new colour as a token with a dark value, and check ground-side text against the dark ground (#0f141c).
- **Do** put text on the band in Band White or Band Mist only (#f4f7fb / #c5d3ea light, #eef2f8 / #a9bbd8 dark).
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
- **Don't** let the dark band get brighter than about 1.5:1 over the dark ground, add a third theme, or use a second chromatic colour for dark mode.
- **Don't** use warm or untinted greys; they read as dirty next to the blue.
- **Don't** hardcode a colour in a rule; add a token with a dark value.
