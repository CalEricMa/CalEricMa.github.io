---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["html/thoughts.html", "html/post/*.html"]
---

# Surface brief: personal site home page (index.html)

## Scope and mode
Experience (portfolio). The home page plus the existing Thoughts index and post pages, all in this pass: every page loads the shared `style.css`, so replacing it without restyling them would break them. The spec column (who, where, since when, which degree) is the first thing read; the stretchable portrait is the focal image beside it. Redesign of an existing site; content carries over, look is replaced. Revised after owner feedback (2026-11-21): the first version felt too plain, the colour too flat, the nav not helpful while scrolling, and the page too dense.

## Audience, job, proof
- Audience: recruiters first, then engineers. Job: see Eric's role and impact in one pass, then contact him or open the resume.
- Action: email (ericma0828@icloud.com), LinkedIn, GitHub, resume PDF. The PDF in the repo (`pic/Eric_Ma_Resume.pdf`, last committed 2024-10-05) predates Amazon; the owner supplies an updated one before launch.
- Proof/content: the Amazon SDE I role is a single line ("I build the planning systems that help Amazon delivery stations around the world staff their days."); the owner keeps the detailed bullets and metrics on the resume PDF only. Also: Berkeley internship, DVC teaching, education, skills, Thoughts from the existing repo.
- Projects (owner delegated the pick): Dropbox Clone with End-to-End Encryption, Voice Command Controlled Car, Adversarial Attack Detection with Lasso Regression, each with its result stated and linking to its existing post. MCMC decryption and the Systematic Trading Strategy stay reachable through Thoughts only.
- Research basis: TheLadders eye-tracking (30 recruiters, a job site's own study; treat as a rough guide), portfolio-advice blogs (secondary), WCAG 2.2 SC 2.5.7, web.dev and MDN on reduced motion. Touch pull vs page scroll on phones and load time are verified in headless Chromium only; the owner should test on a real iOS Safari and Android Chrome device.
- Constraints: plain HTML/CSS/JS, GitHub Pages, no build step. Reduced-motion fallback. The tag is never required to reach content. No phone number anywhere on the site.

## Selected direction
Owner-directed revision of the rolled "Unbranded Hang Tag" world (the owner rejected the rope-and-badge idea as "not fun" and asked for something where "others pull my face"). Kept from that world: the cool card-stock ground for the reading sections, the ruled hairline spec rows, mono labels and dates, one indigo accent. Changed: the indigo accent now floods a full-width hero band (Committed colour strategy); the portrait is a rubber sheet you can stretch, not a tag on a string; the nav is sticky; older roles collapse to one line; projects are a title plus one line. Navigation stays four items: Experience, Projects, Thoughts, Resume (opens the PDF). Declined and not used: any second animated effect, the string, tag and badge.

## Direction contract
THESIS: One page with one toy: your face is a rubber sheet on a bold indigo field, and everything else is a quiet ruled spec sheet. Refuses the category default of a round avatar beside a headline over a row of cards.
OWN-WORLD: A saturated indigo band (#22356B, the page's one colour) carries the name, spec rows and portrait in near-white (#F5F5F2) with indigo-tinted secondary text (#C9D0EA); below it a cool uncoated card-stock ground (#E7E8E4) with near-black ink (#161616). Ruled hairlines, mono labels and dates, labelled spec rows. No cream, no terracotta, no second hue. Type: system sans stack for text, `ui-monospace` stack for spec labels, dates and the portrait hint; no web fonts. "Amazon" is the one company name set bold in the hero and in the Experience entry. Contrast: ink on ground 14.7:1, near-white on indigo 10.7:1, indigo-tinted secondary on indigo 7.3:1; links in running text are underlined and the current nav item carries `aria-current` plus a heavier underline, never colour alone.
STORY: A recruiter sees the name, "Amazon" and the degree in the first second, pulls the face, then jumps with the sticky nav to Experience or Projects and emails or opens the resume. An engineer follows Projects and Thoughts.
FIRST VIEWPORT: A full-width indigo band under a sticky indigo nav. Desktop: left, the name large, the role line "Software Engineer · Applied ML Systems & Backend", Bellevue WA, then ruled rows: Now (Amazon in bold, Software Development Engineer I, Jul 2025 – Present), School (UC Berkeley, B.S. EECS, May 2025) and Contact (Email as the solid primary, Resume, LinkedIn, GitHub); right, a tall portrait with the hint "Go on, pull my face". Phone: the portrait sits beside the name, the spec rows directly below, all above the fold. The page's first light section starts straight after the band.
FORM: Rubber-sheet portrait, mesh and spring simulation. Grab the face anywhere and pull; the pulled area follows the pointer, falls off with distance, and the frame edge stays pinned. On release it wobbles back and settles in about 2 to 3 seconds. Nothing moves until the visitor acts. Dragging is never the only way: a click or tap pokes it, and Enter or Space does the same from the keyboard (WCAG 2.2 SC 2.5.7); the portrait gets `role="button"` and a label only while the effect is live, with a visible focus ring. The photo's alt text is "Eric Ma". Touch: the canvas uses `touch-action: pan-y`, so a vertical swipe on the portrait scrolls the page and only horizontal pulls stretch it. With prefers-reduced-motion, or without WebGL, the plain `<img>` stays and the page listens for the setting changing. No on-page motion toggle. Navigation: the nav is sticky, shows the current section with `aria-current="location"`, and anchors clear it with `scroll-padding-top`. Experience: Amazon as one line under its title (the detail lives in the resume PDF); the four older roles are native `<details>` rows (one line each, collapsed). Projects: three rows, a linked title plus one sentence taken from the existing project copy. Education is one row and Skills one line. Direction pinned by the owner after the roll: seed: none (pinned), "Indigo hero band", "allowing others to pull my face sounds more fun", "Sticky nav", "Amazon in full".
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.

## Unresolved
- Updated resume PDF: owner to supply before launch.
- Site location: clone `CalEricMa/CalEricMa.github.io` into workspace/personal-website/ and work on a branch; move PRODUCT.md and .impeccable/ in with it and re-check paths.
- Profile photo: exported to `pic/profile-600.jpg` and `pic/profile-896.jpg` (source is 896px wide, so no 1200px export); served with `srcset`.
