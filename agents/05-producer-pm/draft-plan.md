# Draft Plan

## Scope Definition

### MVP (must ship and still feel jaw-dropping)
- Scene-based comic issue with 6 sections: Home, My Story, Work (index), Work (detail), Resume, Contact.
- Multiple wow moments (at least 3):
  - Hero multi-panel splash with ball-to-wheel transformation.
  - Scroll-revealed action lines + halftone texture overlays.
  - Interactive SFX pops and micro-interaction on key elements.
- One mini interaction (easter egg) that is optional but delightful.
- Responsive layout with strong mobile presentation.
- Reduced motion mode and performance budgets.

### MVP WOW MOMENTS (LOCKED)
- Hero multi-panel splash with ball-to-wheel transformation. (Deps: Creative, Motion, Frontend | Risk: Medium | Pass/Fail: LCP <= 2.5s on mobile; no layout shifts during animation; respects reduced motion; keyboard users can reach CTA without waiting | Fallback: static multi-panel with subtle parallax)
- Scroll-revealed action lines + halftone texture overlays. (Deps: Creative, Motion, Frontend | Risk: Medium | Pass/Fail: no essential info only in motion; reduced motion shows static composition; no scroll jank on mid-tier mobile | Fallback: static overlays with fade-in only)
- SFX pop-ups on key interactions (hover/tap) with comic typography. (Deps: Creative, Motion, Frontend | Risk: Low | Pass/Fail: available on keyboard focus; aria-hidden for decorative SFX; no motion in reduced mode | Fallback: text-only SFX with no motion)
- Panel-to-panel scene transition (comic tab bar slide). (Deps: Motion, Frontend | Risk: Medium | Pass/Fail: navigation works without motion; focus is preserved; transition under 300ms or disabled with reduced motion | Fallback: standard anchor jump with soft fade)
- Work grid reveal with “locker/garage” treatment. (Deps: Creative, Frontend | Risk: Low | Pass/Fail: thumbnails load progressively; tap targets >= 44px; contrast AA on labels | Fallback: clean card grid with thematic borders)
- Contact “pit stop” form micro-interaction (gas pump handle or nozzle). (Deps: Creative, Motion, Frontend | Risk: Medium | Pass/Fail: form usable without interaction; no motion in reduced mode; label and error states AA | Fallback: themed static illustration next to form)
- Easter egg micro-interaction (tap cone for mini effect). (Deps: Creative, Motion, Frontend | Risk: Medium | Pass/Fail: optional; no impact on performance metrics; keyboard accessible or safely ignorable | Fallback: simple visual pulse only)
- Reduced motion mode with equivalent static wow composition. (Deps: Frontend | Risk: Low | Pass/Fail: prefers-reduced-motion honored globally; no animation required to understand content; INP <= 200ms | Fallback: static layout with no motion and clear CTA)

### WOW MOMENT PERFORMANCE + A11Y BUDGETS (Agent 06)
| Wow moment | Numeric budgets (pass/fail) | A11y requirements |
| --- | --- | --- |
| Hero multi-panel splash | LCP <= 2.5s, CLS <= 0.1, INP <= 200ms, hero image <= 250KB | Skip animation available; keyboard reaches CTA; reduced motion shows still |
| Scroll action lines + halftone | INP <= 200ms, no long tasks > 50ms in 5s transition | No essential info in motion; reduced motion shows still |
| SFX pop-ups | INP <= 200ms | Keyboard focus triggers; aria-hidden for decorative SFX |
| Panel-to-panel transition | INP <= 200ms, transition <= 300ms or disabled | Focus preserved; keyboard navigation works |
| Work grid reveal | LCP <= 2.5s, CLS <= 0.1, thumbs <= 200KB | Tap targets >= 44px; contrast AA |
| Contact pit stop interaction | INP <= 200ms | Form usable without interaction; errors labeled |
| Easter egg micro-interaction | No impact on LCP/INP/CLS; asset <= 150KB | Optional; keyboard accessible or ignorable |
| Reduced motion mode | LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 | Prefers-reduced-motion honored globally |

### V2 Backlog (extra wacky)
- Mini-game expanded (score, timed challenge, shareable).
- Panel-to-panel parallax with depth layers.
- Dynamic time-of-day or theme switch.
- Voice/sound toggle with comic SFX audio.
- Advanced scene transitions (page flip, panel burst).

## Work Breakdown Structure (Epics -> Stories) with Dependencies

### Canonical Scene IDs
- S01-home: Hero / landing.
- S02-my-story: Personal narrative and credibility.
- S03-work-index: Project grid.
- S04-work-detail: Project detail template.
- S05-resume: Resume highlights + download.
- S06-contact: Contact CTA + form.

### Epic 1: Vision + Style System
- Story: Define theme, tone, and comic issue framing. (dep: none)
- Story: Style guide for color, type, textures, SFX. (dep: theme)
- Story: Layout grid and panel language. (dep: style guide)

### Epic 2: Content + Asset Pipeline
- Story: Content inventory for sections. (dep: none)
- Story: Asset list and naming conventions. (dep: style guide)
- Story: Produce first asset pack for hero + nav. (dep: asset list)

### Epic 3: Architecture + Prototype
- Story: Build scene framework and navigation shell. (dep: layout grid)
- Story: Animation spike for scroll and panel reveal. (dep: style guide)
- Story: Low-fi animatic/prototype. (dep: scene framework)

### Epic 4: Scene Production (MVP)
- Story: S01-home with hero wow moment. (dep: asset pack, prototype)
- Story: S02-my-story with character moment. (dep: asset pack)
- Story: S03-work-index with interactive panel grid. (dep: asset pack)
- Story: S04-work-detail template with proof points. (dep: asset pack, content inventory)
- Story: S05-resume with highlights and download CTA. (dep: content inventory)
- Story: S06-contact with pit-stop form. (dep: asset pack)

### Epic 5: Quality, Performance, Accessibility
- Story: Reduced motion and skip animation controls. (dep: prototype)
- Story: Performance pass and asset optimization. (dep: scenes)
- Story: Cross-device QA and fixes. (dep: scenes)

### Epic 6: Launch
- Story: Final content polish and metadata. (dep: QA)
- Story: Deployment and launch checklist. (dep: QA)

## Timeline Options

### 6-week plan
- Week 1: Vision + style guide; content inventory; architecture spike.
- Week 2: Animatic/prototype; asset pipeline setup; hero assets.
- Week 3: Build navigation shell + S01-home.
- Week 4: Build S02-my-story + S03-work-index; early performance pass.
- Week 5: Build S04-work-detail + S05-resume + S06-contact; integrate SFX; reduced motion.
- Week 6: QA, polish, deploy, launch checklist.

### 8-week plan
- Week 1: Vision + style guide; content inventory; asset list.
- Week 2: Architecture spike; animatic/prototype; hero assets.
- Week 3: Navigation shell + S01-home.
- Week 4: S02-my-story; begin S03-work-index.
- Week 5: Finish S03-work-index; build S04-work-detail.
- Week 6: Build S05-resume + S06-contact; interaction polish; reduced motion; performance pass.
- Week 7: QA across devices; bug fixes; content polish.
- Week 8: Final review gate; deploy; launch.

### 10-week plan
- Week 1: Vision, style guide, asset list.
- Week 2: Architecture spike; animatic; first asset pack.
- Week 3: Navigation shell; S01-home base.
- Week 4: S01-home polish; S02-my-story base.
- Week 5: S02-my-story polish; S03-work-index base.
- Week 6: S03-work-index polish; S04-work-detail base.
- Week 7: S04-work-detail polish; S05-resume base.
- Week 8: S05-resume polish; S06-contact base; SFX interactions; easter egg.
- Week 9: Reduced motion; performance pass; content polish.
- Week 10: QA across devices; fixes; final review gate; deploy; launch.

## Critical Path
- Style guide and panel language must lock early.
- Asset list and pipeline must be defined before scene build.
- Architecture spike to prove scroll and scene transitions.
- Animatic/prototype to validate wow moments before full build.
- First asset pack for hero must land before Week 3.

## EARLY LOCKS
- Final creative direction (A/B/C) - latest decision date: end of Week 1.
- Final IA/scene map - latest decision date: end of Week 1.
- Chosen animation approach (scroll vs. section triggers) - latest decision date: end of Week 2.
- Scene contract/architecture (components, data model) - latest decision date: end of Week 2.
- Content required for /work and /work/[slug] (project count, fields) - latest decision date: end of Week 2.

## Risk Register + Mitigations
- Performance risk: heavy textures and layered motion.
  - Mitigation: asset budgets, lazy load, reduced layers on mobile.
- Animation complexity: too many bespoke animations.
  - Mitigation: reuse motion patterns, cap unique interactions per scene.
- Asset pipeline delays: user-generated art timing slips.
  - Mitigation: placeholder kit, staged asset deliveries by priority.
- Mobile UX issues: dense panels and small targets.
  - Mitigation: mobile-first pass, simplify layouts, larger tap areas.
- Scope creep: new scenes or mechanics added late.
  - Mitigation: strict MVP list, V2 backlog parking lot, review gates.

## Review Gates
- Design/style lock (end of Week 1 or 2).
- Animatic/prototype review (early Week 2 or 3).
- Alpha QA review (after all MVP scenes built).
- Beta QA review (performance + accessibility pass).
- Launch checklist signoff.
- Recruiter usability gate: 30-second test (identity, role, proof), condensed/no-animation mode review, keyboard-only navigation smoke test.

## Definition of Done per Milestone
- Style Lock: approved palette, type, textures, panel language.
- Prototype: animatic demonstrates all wow moments.
- Alpha: all MVP scenes built with content placeholders.
- Beta: performance budgets met, reduced motion works, no P1 bugs.
- Launch: content final, metadata set, deploy verified on mobile/desktop.

## Input Needed from Cameron
- Number of projects to ship in MVP (3-6).
- Per project: title, impact, tech stack, screenshots, links, 2-4 bullets.
