# Decision Log

| Decision | Chosen Option | Why | Alternatives Considered | Impact |
| --- | --- | --- | --- | --- |
| Primary IA model | Single-page anchored scroller on `/` | Best recruiter scan speed and comic-scene continuity | Multi-route primary IA | Reduces navigation friction and keeps scene narrative coherent |
| Supporting detail route | `/work/[slug]` in MVP | Needed for shareable, credible case studies | Modal-only details, no detail pages | Improves depth and shareability for hiring managers |
| Canonical section order | Hero -> Who I Am -> Story -> Work -> Resume -> Contact | Balances human context before project depth while keeping recruiter clarity | Work before Who I Am | Stabilizes navigation and cross-agent scene alignment |
| Canonical anchors | `#home`, `#who-i-am`, `#story`, `#work`, `#resume`, `#contact` | Clean semantic URLs and consistent IA language | `#scene-*`, `#about` only | Improves deep-link clarity and implementation consistency |
| Anchor compatibility | Keep `#about` alias to `#who-i-am` | Prevents link breakage from older docs | Hard break old anchors | Safer rollout with minimal extra complexity |
| Animation stack | DOM/SVG + WAAPI + light GSAP timelines | Best balance of performance, control, and accessibility | Framer-first, Canvas-heavy | Avoids stack conflicts and minimizes jank risk |
| Motion architecture rule | One timeline per scene, no cross-scene timeline dependencies | Simplifies debugging and cleanup | Global mega-timeline | Improves maintainability and lowers regression risk |
| Content format for projects | MDX with typed frontmatter | Fast solo-dev iteration with structured metadata | JSON only, external CMS in MVP | Enables quick publish cadence with rich case layouts |
| MVP wow cap | Max 8 locked wow moments, max 1 optional delight per scene | Prevents scope creep while preserving delight | Open-ended effect list | Keeps 8-week plan realistic |
| Accessibility baseline | WCAG 2.2 AA target with keyboard-complete flows | Non-negotiable usability and hiring signal quality | Partial conformance | Lowers legal/UX risk and improves inclusive experience |
| Reduced-motion strategy | Designed equivalent experience, not "animation off" | Maintains quality for all users | Hard disable all effects | Preserves brand feel while respecting preferences |
| Condensed mode strategy | Explicit toggle + auto-on for reduced motion/low-end contexts | Fast, stable fallback for constrained devices | Manual-only toggle | Increases reliability and readability on mobile/low-end |
| Performance source of truth | Agent 06 numeric budgets | Most specific pass/fail guardrails across outputs | Generic CWV statements | Creates objective release gates and CI checks |
| Timeline recommendation | Default 8-week plan with 6/10-week alternatives | Best risk-adjusted balance of wow and polish | Default 6 or 10 weeks | Preserves launch feasibility for solo dev |
| Ford references policy | Textual employment history only, no logos/model names/assets | Meets legal/brand constraint | Visual brand references | Avoids IP risk while retaining credibility |
