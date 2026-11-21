---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["html/thoughts.html", "html/post/*.html"]
---

# Surface brief: personal site home page (index.html)

## Scope and mode
Experience (portfolio). The home page plus the existing Thoughts index and post pages, all in this pass: every page loads the shared `style.css`, so replacing it without restyling them would break them. The spec column (who, where, since when, which degree) is the first thing read; the photo tag is the focal image beside it. Redesign of an existing site; content carries over, look is replaced.

## Audience, job, proof
- Audience: recruiters first, then engineers. Job: see Eric's role and impact in one pass, then contact him or open the resume.
- Action: email (ericma0828@icloud.com), LinkedIn, GitHub, resume PDF. The PDF in the repo (`pic/Eric_Ma_Resume.pdf`, last committed 2024-10-05) predates Amazon; the owner supplies an updated one before launch.
- Proof/content: Amazon SDE I bullets as written in the draft resume, including specific metrics and architecture (owner confirmed Amazon allows it). The LLM-agent bullet ships without a metric; its TODO lives only in an HTML comment, never on the page. Also: Berkeley internship, DVC teaching, education, skills, Thoughts from the existing repo.
- Projects (owner delegated the pick): Dropbox Clone with End-to-End Encryption, Voice Command Controlled Car, Adversarial Attack Detection with Lasso Regression, each with its result stated and linking to its existing post. MCMC decryption and the Systematic Trading Strategy stay reachable through Thoughts only.
- Research basis: TheLadders eye-tracking (30 recruiters, a job site's own study; treat as a rough guide), portfolio-advice blogs (secondary), WCAG 2.2 SC 2.5.7, web.dev and MDN on reduced motion. Not yet checked: touch drag vs page scroll on phones, load performance; test both during the build on a real iOS Safari and Android Chrome device.
- Constraints: plain HTML/CSS/JS, GitHub Pages, no build step. Reduced-motion fallback. The tag is never required to reach content. No phone number anywhere on the site.

## Selected direction
Unbranded Hang Tag (chosen by the user on the decision page; assigned by the roll). Raises: ruled, fixed-column Experience table (from Split-Flap Concourse); four-item closed navigation — Experience, Projects, Thoughts, Resume (opens the PDF) — with the active item in the accent (from French Pop Sleeve). Education and Skills are reached by scrolling. Declined and not used: shader portal, Miura fold, indoor sun, cassette deck, and any second animated effect.

## Direction contract
THESIS: The profile photo is a tag on a string, and the page is the spec sheet it belongs to. Refuses the category default of a hero with a round avatar beside a headline over a row of cards.
OWN-WORLD: Cool uncoated card-stock ground (#E7E8E4), near-black ink (#161616), one indigo accent (#22356B), cotton-string tan (#B9A98A) used only on the string. Ruled hairlines, a punched eyelet, labelled spec rows; recognisable with all content removed as a goods tag and its spec table. No cream, no terracotta. Type: system sans stack for text, `ui-monospace` stack for spec labels and dates; no web fonts. Contrast: ink on ground 14.7:1, indigo on ground 9.5:1, but indigo against ink is only 1.5:1, so links in running text are underlined and the active nav item carries `aria-current` plus a rule under it, never colour alone.
STORY: A recruiter sees who Eric is and where he works, swings the tag, reads the Experience table, and emails or opens the resume. An engineer follows Projects and Thoughts.
FIRST VIEWPORT: Left, a narrow ruled spec column: name large, role line "Software Engineer · Applied ML Systems & Backend", Bellevue WA, then the current-role row (Software Development Engineer I, Amazon, Jul 2025 – Present) and the education row (UC Berkeley, B.S. EECS, May 2025), then Email (primary), Resume, LinkedIn, GitHub. Recruiters spend about 6-7 seconds on a first screen, mostly on name, title and company, dates and education, so all of these sit above the fold on desktop and phone. Desktop: right of centre, a tall photo tag on a string hanging from the top edge into the viewport, large enough to be the focal point. Phone: a short tag (about a third of the viewport height) hangs beside the name, with the spec rows directly below it.
FORM: Hang tag and spec label, position 6 of the grounded list, seed:44606b8334e4dcc5. Signature interaction: drag the tag, it swings on the string with damped physics and settles within about 3 seconds. Nothing moves until the visitor acts. Dragging is never the only way: a click or tap swings the tag, and Enter or Space does the same from the keyboard (WCAG 2.2 SC 2.5.7). The tag is a `<button aria-label="Swing photo tag">` with a visible focus ring; the photo's alt text is "Eric Ma". Touch: the tag uses `touch-action: pan-y` and starts a drag only after a mostly horizontal move past a small threshold, so a vertical swipe on the tag scrolls the page. With prefers-reduced-motion the tag is static and the page listens for the setting changing; no on-page motion toggle. The Experience table stacks into label-over-value rows on narrow screens and is built from headings and lists, not a layout table.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.

## Unresolved
- Updated resume PDF: owner to supply before launch.
- LLM-agent users/eval metric: owner to add when real numbers exist.
- Site location: clone `CalEricMa/CalEricMa.github.io` into workspace/personal-website/ and work on a branch; move PRODUCT.md and .impeccable/ in with it and re-check paths.
- Profile photo: source copied to `.impeccable/assets/profile-source.png` (1.27 MB PNG); export 600px and 1200px JPEG/WebP, each under about 150 KB, served with `srcset`.
