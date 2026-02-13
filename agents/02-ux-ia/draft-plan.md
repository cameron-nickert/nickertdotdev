# Draft Plan (UX/IA) - Nickert.dev

Personas + jobs-to-be-done
1) Recruiter Rita (screening)
- JTBD: "Help me quickly judge fit and get contact details without digging."
2) Hiring Manager Hank (depth)
- JTBD: "Show me your strongest projects, impact, and how you think."
3) Peer/Collaborator Priya (credibility)
- JTBD: "Confirm your craft and see if we'd work well together."
4) Client Casey (small projects)
- JTBD: "Can you deliver a small app fast and professionally?"

FINAL recommended IA (single-page with anchored scenes + project detail pages)
Navigation labels (persistent): Home / Who I Am / My Story / Work / Resume / Contact
Scene/Chapter mapping (comic issue structure + anchor IDs)
- Issue #1: Cover Shot (Home/Hero) -> scene-01-hero / #home
- Issue #2: The Character Sheet (Who I Am) -> scene-02-who-i-am / #who-i-am
- Issue #3: Origin Arc (My Story timeline) -> scene-03-story / #story
- Issue #4: The Lineup (Work) -> scene-04-work / #work
- Issue #5: The Blueprint (Resume preview) -> scene-05-resume / #resume
- Issue #6: Final Buzzer (Contact) -> scene-06-contact / #contact
Supporting pages
- Project detail pages (linked from Work; modal acceptable but full page preferred for shareability)

Navigation + orientation model
- Persistent HUD in top-right: Issue label + progress dots (scroll position) + jump menu.
- Sticky jump controls: "Jump to" menu with Home, Who I Am, My Story, Work, Resume, Contact.
- Breadcrumbs on project detail pages: Home > Work > Project.
- Scene headers always include an issue number + title to anchor orientation.

30-second recruiter mode (explicit)
Above the fold (mobile-first)
- Name + title + tagline: "Empowering the world with one line |"
- 3 credibility chips visible immediately: Shopify, Indeed, Ford (no logos), M.S.
- Primary CTA: "Contact" (email or contact page)
- Secondary CTA: "Resume"
- One-line role summary + 1 metric highlight (placeholder until data provided)
Immediate credibility placement
- Company chips sit under the headline; M.S. badge in the same line.
- 1 featured project card with outcome sits below CTAs (still within first screen on desktop).

2-minute credibility flow
- Home -> Work -> project detail -> results + artifacts -> My Story -> Resume -> Contact.

Condensed / no-friction mode (explicit)
Toggle behavior
- Toggle in HUD: "Condensed mode" (default off; auto-on for prefers-reduced-motion).
- Behavior: disables scroll-snap and parallax, flattens comic panels into a clean list, collapses decorative speech bubbles, increases text density slightly.
Mobile behavior
- Toggle is sticky at top; expands scenes into stacked cards with visible headings and anchors.
- CTAs remain at top of each scene for quick action.
Keyboard behavior
- Toggle is first focusable control after skip link; can be toggled with Enter/Space.
- Condensed mode ensures linear tab order and removes any scroll-jacking.

Wireframe-level layout descriptions (mobile-first, with desktop enhancements)

Issue #1: Cover Shot (Home/Hero)
- Mobile: hero with name, title, tagline; primary Contact CTA; secondary Resume CTA; 3 credibility chips; 1 featured project teaser; "Skip animations / Condensed" control; quick proof strip.
- Desktop: hero split layout; chips + CTAs in left column; teaser panel on right; persistent HUD.

Issue #4: The Lineup (Work)
- Mobile: vertical list of project cards with thumbnail, title, 2-line summary, tech tags, outcome.
- Desktop: grid of cards; quick filters (role, platform, impact).

Issue #2: The Character Sheet (Who I Am)
- Mobile: short bio, activity list (travel, hiking, camping, boating, sports), personal values, 1 photo/illustration.
- Desktop: split layout; activity cards + bio.

Issue #3: Origin Arc (My Story timeline)
- Mobile: timeline as stacked highlight cards with year + milestone.
- Desktop: horizontal timeline with cards; each card is clickable to expand.

Issue #5: The Blueprint (Resume)
- Mobile: embedded Google Drive iframe preview; "Open in new tab" link.
- Desktop: iframe with side panel of key skills + download link.

Issue #6: Final Buzzer (Contact)
- Mobile: headline "You Need Software. I Make Software. Let's Talk!" + email + LinkedIn + compact form.
- Desktop: form left, contact methods right; CTA button emphasized.

Interaction rules
- Required navigation is always text + standard links; scenes are wrappers only.
- Optional delight: panel transitions, subtle parallax, animated page load.
- Prevent getting lost: persistent HUD, issue headers, jump menu, breadcrumbs on project pages.
- Provide "Skip animations" and "Condensed mode" toggles, remembered per session.

Accessibility pass by interaction type
1) Scroll scene transitions (parallax, scroll-snap)
- Focus order: normal DOM order; do not move focus on scroll.
- Keyboard: no scroll-jacking; allow Page Up/Down and Home/End.
- Screen reader: announce section headings; avoid auto-updating aria-live on scroll.
- Reduced motion: disable scroll-snap/parallax; default to condensed mode.
2) Click-to-advance panels (if used for project previews)
- Focus order: Next/Prev buttons after panel content; wrap with aria-controls.
- Keyboard: Left/Right arrows on focused carousel; Tab to controls; Enter/Space to activate.
- Screen reader: use aria-roledescription="carousel"; announce "Panel X of Y."
3) Mini-games (not in MVP)
- Focus order: keep after main content; provide "Skip interaction" link.
- Keyboard: full keyboard equivalent for all interactions.
- Screen reader: provide text alternative and non-interactive fallback.

Content requirements checklist per scene (minimums)
Issue #1: Cover Shot
- Copy blocks: name, title, tagline, 1-line positioning, 1 metric highlight.
- Proof points: Shopify, Indeed, Ford, M.S. chips.
- CTAs: primary Contact; secondary Resume.
Issue #4: The Lineup (Work)
- Copy blocks: section intro, 3-6 project cards.
- Proof points: outcomes/metrics per card, role, stack, links.
- CTA: "View project" per card + "Contact" strip.
Issue #2: The Character Sheet (Who I Am)
- Copy blocks: 2-3 sentence bio, activity list.
- Proof points: values or working style highlights (3 bullets).
- CTA: "See My Story" link.
Issue #3: Origin Arc (My Story timeline)
- Copy blocks: timeline intro + 6+ highlight cards with year + title + 1-line description.
- Timeline highlight cards (canonical):
  - 2008 — First Code Spark — Started building small projects and game experiments.
  - 2013 — Roblox Builder Phase — Designed and shipped Roblox experiences; learned rapid iteration.
  - 2016 — Systems Thinking Upgrade — Shifted from "just code" to architecture and reliability mindset.
  - 2018 — Ford Engineering Start — Entered professional software delivery in high-scale environments.
  - 2020 — Founder Mode — Started a company; owned scope, delivery, and outcomes end-to-end.
  - 2021 — Indeed — Built product-facing software with measurable user impact.
  - 2022 — Shopify — Shipping at platform scale with strong UX/perf focus.
  - 2023+ — M.S. Software Engineering — Formalized advanced software architecture and quality practice.
Issue #5: The Blueprint (Resume)
- Copy blocks: section intro + skills snapshot.
- Proof points: embedded Google Drive iframe + download/open link.
- CTA: "Open Resume" and "Contact".
Issue #6: Final Buzzer (Contact)
- Copy blocks: headline, 1-line expectation setting, privacy note.
- Proof points: email, LinkedIn, availability.
- CTA: "Send message".

MVP vs V2
- MVP: Home, Work, Project detail, Who I Am, My Story, Resume, Contact; condensed mode; reduced motion.
- V2: richer scene transitions, optional interactive panel navigation, testimonials, downloadable case studies.

Inputs needed from you to finalize Work/Projects
- 3-6 projects with: title, role, 1-sentence outcome, metrics, stack, screenshots, links, and any constraints.
