# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Plain static HTML, CSS and JS with no build step, deployed to GitHub Pages from the existing repo `CalEricMa/CalEricMa.github.io` (branch `main`, live at https://calericma.github.io/). Decided by the user; custom physics in JS, no framework.

## Users
Primary: recruiters and hiring managers who skim for Eric's current role and impact, then contact him or open the resume PDF. Secondary: fellow engineers who read projects and the Thoughts section. Recruiters come first.

## Product Purpose
Personal resume/portfolio site for Eric Ma, a Software Development Engineer at Amazon (applied ML systems and backend). It presents his experience, projects, education, skills and writing, and gets visitors to contact him. Success is a memorable, clean page where the experience is readable in one pass.

## Positioning
One bold colour field and one toy: the profile photo is a rubber sheet the visitor can grab and pull, and it wobbles back. It sits on a full-width indigo hero band under a sticky nav. Everything else is a quiet, ruled spec sheet, so the portrait is the only thing that moves.

## Operating Context
Redesign of an existing live site (blue fixed sidebar, round photo, sections About, Experience, Education, Projects, Skills, Thoughts). Content carries over; the layout and look are replaced. The visitor often arrives from a resume or LinkedIn link, on desktop or phone.

## Capabilities and Constraints
- Sections: hero, Experience, Projects, Education, Skills, Thoughts (blog, existing `html/thoughts.html` and `html/post/`). Navigation: Experience, Projects, Thoughts, Resume.
- Thoughts and post pages are restyled in the same pass: they all load the shared `style.css`.
- Projects featured: Dropbox Clone with End-to-End Encryption, Voice Command Controlled Car, Adversarial Attack Detection with Lasso Regression (owner delegated the pick).
- Portrait: pull with mouse or touch and it stretches and wobbles back; click, tap, Enter or Space also make it wobble; `prefers-reduced-motion` (or no WebGL) falls back to the plain photo. Navigation is a sticky bar with the current section marked.
- Headline: Software Engineer · Applied ML Systems & Backend.
- Contact: ericma0828@icloud.com, linkedin.com/in/eric-ma-ba7052212, github.com/CalEricMa. No phone number on the public page.
- Decision: the Amazon role is one line on the site: "I build the planning systems that help Amazon delivery stations around the world staff their days." The detailed bullets and metrics stay on the resume PDF only (owner decision).
- Do not add Amazon metrics or architecture to the site without the owner asking; none are needed now.
- Old "graduating spring 2025" copy is out of date and is dropped.

## Evidence on Hand
- Draft resume text (Amazon SDE I, Jul 2025 – Present; UC Berkeley Student Government Technology Committee internship, Jan 2022 – May 2023; skills; B.S. EECS, UC Berkeley, May 2025). The user says it is a rough draft.
- Existing site content in the repo: Experience (including Teaching Assistant and Tutor at Diablo Valley College, Jan 2022 – May 2023), Education, Projects, Skills, Thoughts posts, `pic/Eric_Ma_Resume.pdf` (last committed 2024-10-05, predates Amazon; the owner supplies an updated one before launch), social icons.
- Profile photo: portrait on a black background, grey hoodie. Source copied to `.impeccable/assets/profile-source.png`; it has no badge ID or barcode. Web exports at 600px and 1200px wide still to make.
- Absent: testimonials, case studies, press, metrics beyond those in the draft resume. Do not fabricate any.

## Product Principles
- Recruiter-first: current role and impact are readable in the first scroll.
- One moving thing: the portrait is the only expressive element; the rest is plain and calm.
- Less is more: Amazon in full, everything else condensed or one click away.
- Real content only: carry over existing copy and mark gaps, never invent claims.
- Works everywhere: fast on GitHub Pages, usable on touch, readable with reduced motion.

## Accessibility & Inclusion
Respect `prefers-reduced-motion` (static photo, no physics, no on-page override). The portrait must not be required to reach any content. Keyboard and screen-reader users get the same information as everyone else.
