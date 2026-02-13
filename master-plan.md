# MASTER PLAN — Cameron Nickert Portfolio

## A) Vision and Success Criteria

Build a comic-scene portfolio that feels jaw-dropping and playful while staying recruiter-clear, accessible, and fast. The site should communicate credibility within 30 seconds, then support a deeper 2-minute scan into projects and story.

### Success metrics
- **Clarity (30 seconds):** user can identify name, role, tagline, credibility anchors, and primary CTA without playing animations.
- **Credibility (2 minutes):** user can review at least 3 case studies, timeline highlights, and resume access path.
- **Conversion:** user can reach contact or resume from hero and from persistent navigation in <= 2 interactions.
- **Accessibility:** WCAG 2.2 AA target, keyboard-complete primary flows, screen reader-reasonable semantics, designed reduced-motion mode.
- **Performance (mobile p75):** LCP <= 2.5s, INP <= 200ms, CLS <= 0.1, TTFB <= 0.8s.

## B) Final Sitemap and Scene Map

### Route model
- Primary route: `/` (single-page anchored scroller).
- Supporting MVP route: `/work/[slug]` (case study detail).
- Optional alias redirects: `/about`, `/story`, `/work`, `/resume`, `/contact` -> anchors on `/`.

### Canonical scene order and anchors
- `scene-01-hero` -> `#home`
- `scene-02-who-i-am` -> `#who-i-am`
- `scene-03-story` -> `#story`
- `scene-04-work` -> `#work`
- `scene-05-resume` -> `#resume`
- `scene-06-contact` -> `#contact`

### Compatibility aliases
- `#about` redirects to `#who-i-am`.
- Legacy `#scene-*` anchors can be supported as soft aliases during implementation.

## C) Interaction Inventory (Prioritized)

MVP interaction cap: max 8 locked wow moments, max 1 optional delight per scene.

### Must
1. **Hero multi-panel splash (ball-to-wheel morph)**
   - Recruiter value: immediate polish + identity.
   - Mobile: simplified two-panel morph.
   - Reduced motion: static hero composition with fade.
   - Pass/fail: hero CTA reachable immediately; no layout shift; LCP <= 2.5s.

2. **Timeline issue-list reveal**
   - Recruiter value: quick chronology and milestone scan.
   - Mobile: stacked cards.
   - Reduced motion: static cards/accordion.
   - Pass/fail: milestone info readable without animation; keyboard operable.

3. **Work pit-lane card reveal**
   - Recruiter value: impact-first project previews.
   - Mobile: tap-to-expand cards.
   - Reduced motion: instant card state.
   - Pass/fail: card labels AA contrast; targets >= 44x44px; INP <= 200ms.

4. **Resume panel embed**
   - Recruiter value: zero-friction resume access.
   - Mobile: full-width embed + open-in-new-tab link.
   - Reduced motion: static panel.
   - Pass/fail: embed fallback link always present; CLS <= 0.1.

5. **Contact pit-stop CTA**
   - Recruiter value: direct conversion path.
   - Mobile: single-column form and links.
   - Reduced motion: static themed form.
   - Pass/fail: form usable without micro-interactions; labeled errors.

6. **HUD progress + jump navigation**
   - Recruiter value: orientation and fast section jumping.
   - Mobile: compact sticky jump control.
   - Reduced motion: same control, no animated needle.
   - Pass/fail: keyboard + screen reader support; active step announced.

7. **Ink-smear panel transitions (subtle)**
   - Recruiter value: cohesive comic identity.
   - Mobile: shorter transitions.
   - Reduced motion: <=150ms fades or instant swaps.
   - Pass/fail: navigation remains functional without transitions.

8. **Optional easter egg micro-interaction**
   - Recruiter value: personality without blocking flow.
   - Mobile: tap-only optional trigger.
   - Reduced motion: simple pulse or static state.
   - Pass/fail: fully optional; no impact on core flow/perf.

### Should
- Subtle speed-line overlays tied to scroll progress.
- Click-to-advance mini panels inside Story or Work cards.
- Scene stamp labels with issue-style chapter markers.
- Limited SFX pop words (basketball-first usage rules).

### Could (V2)
- Mini free-throw game.
- Day/night visual theme switch.
- Trading-card style project detail transitions.
- Audio SFX toggle (off by default).

## D) Animation Approach and Fallback Modes

### Chosen approach
- DOM/SVG + WAAPI for most motion.
- One light GSAP timeline per scene for sequencing and scroll choreography.
- No mixed animation paradigms in MVP.

### Scene state model
- Per scene phases: `enter`, `active`, `exit`.
- `SceneRoot` computes progress and distributes to scene components.
- Animations are ref-driven and imperative; no per-frame React state.

### Fallback modes
- **Reduced motion:** no parallax/auto-play, static compositions, short fades only.
- **Condensed mode:** flattened linear content, no scroll-snap, no panel choreography.
- **Low-end mode:** disable heavy FX layers; cap active loops.
- **Mobile defaults:** simplified transitions, tap-first interactions, no hover dependency.

## E) UX Flows

### 30-second recruiter flow
1. Land on `#home`: see role, tagline, credibility chips (Shopify, Indeed, Ford, M.S.).
2. Choose primary CTA (`View Work` or `Contact`) or jump nav.
3. Confirm credibility via first featured project teaser and visible resume access.

### 2-minute credibility flow
1. Hero -> Work list -> one case study detail.
2. Return to Story timeline highlights (2008 to present milestones).
3. Open Resume panel.
4. Convert through Contact.

### Conversion flow (contact/resume)
- Hero and nav both expose `Contact` and `Resume`.
- Contact scene includes email + LinkedIn + form.
- Resume scene includes embed + open/download fallback.

## F) Architecture Overview

### Routes
- `/` anchored scene scroller.
- `/work/[slug]` detail pages via MDX content.

### Core components
- `AppShell`, `SiteNav`, `SceneRoot`, `SceneBoundary`.
- Scene components for `scene-01` through `scene-06`.
- Shared controls: skip animation, condensed mode, reduced motion, low-power mode.

### Scene contract
- Required props: `id`, `isActive`, `reducedMotion`, `features`, `scrollProgress`, `onEnter`, `onExit`, `assetManifest`.
- Cleanup rules: remove listeners, stop loops, kill timelines on deactivate/unmount.

### Feature gating
- Inputs: OS reduced motion, user override, device capability heuristics.
- Flags: `reducedMotion`, `lowPowerMode`, `enableHeavyAssets`, `supportsHover`.
- Persistence: local storage for user-chosen overrides.

### Content system
- `/work/[slug]` uses MDX + typed frontmatter.
- Shared project index for list and linking.
- Copy content remains separate from motion logic.

## G) Asset Production Plan

### Naming and exports
- File naming: `scene-XX-name__layer-state.ext` or `scene-XX-name-[asset]-v01.ext`.
- Prefer SVG for line/panel/UI vectors.
- Raster: AVIF/WebP preferred; PNG only when transparency requires it.

### Per-scene asset batches
- **S01 Hero:** avatar set, court/city BG, ball/wheel, HUD elements, key SFX.
- **S02 Who I Am:** profile art, interests icons (travel, hiking/camping/boating, sports), panel frames.
- **S03 Story:** timeline rail/cards/year chips, milestone badges.
- **S04 Work:** pit-lane grid cards, project frames/thumbs, CTA badges.
- **S05 Resume:** clipboard/panel frame, texture overlays, embed wrapper.
- **S06 Contact:** pit-stop illustration, CTA art, social icon set.

### Dependencies
- Style guide lock -> scene asset list -> hero pack -> scene-by-scene batches.
- Placeholders allowed for unfinalized art to keep engineering unblocked.

## H) Project Plan (MVP vs V2 + 6/8/10 Weeks)

### MVP
- Full six-scene anchored experience.
- `/work/[slug]` detail pages for 3-6 case studies.
- Locked wow moments with reduced-motion equivalents.
- A11y/perf gates in CI and manual QA.

### V2
- Extended micro-interactions and optional mini-game.
- Additional themed transitions and collectible/project polish.
- Optional content CMS.

### Recommended timeline: 8 weeks
- **Week 1:** style/IA/scene contract lock.
- **Week 2:** animation spike + asset pipeline + hero pack.
- **Week 3:** shell/nav + `scene-01-hero`.
- **Week 4:** `scene-02-who-i-am` + `scene-03-story`.
- **Week 5:** `scene-04-work` + `/work/[slug]`.
- **Week 6:** `scene-05-resume` + `scene-06-contact` + reduced-motion.
- **Week 7:** performance + accessibility QA, bug fixes.
- **Week 8:** polish, launch checks, deploy.

### Alternative schedules
- **6 weeks:** tighter scope, fewer optional effects, higher execution risk.
- **10 weeks:** more polish and V2 carry-in, lower risk.

### Definition of Done by milestone
- Style lock: approved visual system and scene blueprint.
- Prototype lock: key motion patterns validated with fallbacks.
- Alpha: all MVP scenes implemented.
- Beta: perf/a11y gates pass; no P1 defects.
- Launch: final content, metadata, production verification complete.

## I) Risk Register and Mitigations

- **Motion over-complexity**
  - Mitigation: cap wow moments; no new bespoke effects after Week 5.
- **Performance regression on mobile**
  - Mitigation: strict budgets, lazy loading, low-end mode defaults.
- **Asset delays**
  - Mitigation: placeholder-first build strategy and weekly asset readiness checks.
- **Usability loss from visual density**
  - Mitigation: persistent text nav, condensed mode, CTA visibility rules.
- **A11y regressions**
  - Mitigation: CI axe checks + manual keyboard/screen-reader passes per milestone.

## J) Launch Checklist (A11y/Perf/QA)

### Accessibility
- Skip link first focusable element.
- All core actions keyboard-operable.
- Screen reader announces landmarks/headings/active scene state.
- Reduced-motion and condensed modes are complete experiences.
- No flashing > 3 times per second.

### Performance
- Lighthouse mobile meets LCP/INP/CLS/TTFB targets.
- Initial JS and CSS within budget.
- No sustained long-task clusters during transitions.
- In-viewport media within size budgets.

### Functional QA
- Scene-to-scene navigation works via scroll, jump links, and keyboard.
- Contact and resume conversion paths tested on mobile and desktop.
- `/work/[slug]` pages render from content schema and degrade gracefully without motion.

### Content QA
- Timeline milestones and project metrics are factual and current.
- Ford references remain text-only with no brand assets.
- CTA copy is consistent across hero, nav, and contact scenes.
