# Frontend Architecture Handoff

## Routing approach (explicit recommendation)
- Use a single-page scene scroller on `/` for the hero-driven experience.
- Only dedicated route in MVP: `/work/[slug]` for case studies.
- Optional aliases (`/about`, `/story`, `/work`, `/resume`, `/contact`) can redirect to anchors if needed.
- Deep links on `/` use anchors like `/#story` with canonical ids: `#home`, `#work`, `#about`, `#story`, `#resume`, `#contact`.

## Scene contract (summary)
- Required props: `id`, `isActive`, `reducedMotion`, `features`, `scrollProgress`, `onEnter`, `onExit`, `assetManifest`.
- SceneRoot owns scroll listeners and emits normalized progress via a shared store.
- Scenes never read raw scroll or window state; they render static-first and animate only when allowed.

## Animation stack (MVP standard)
- DOM/SVG + WAAPI for most motion; one light GSAP timeline per scene when sequencing is required.
- Avoid mixing Framer Motion with GSAP in MVP to prevent conflicting paradigms.

## /work/[slug] in MVP
- Included in MVP as minimal but polished case study pages.
- Content stored in MDX with typed frontmatter for speed and readability.
- Case study components: hero, summary, impact, role, tech stack, gallery, challenges, links, nav.

## Do not do
- Do not mix animation libraries in the same route.
- Do not let scenes own scroll listeners or store global state.
- Do not bake content into animation logic; keep copy in MDX or content maps.
- Do not ship without reduced-motion and skip-animation pathways.
- Do not overbuild CMS or scene tooling in MVP.

## Summary
This architecture prioritizes maintainability: scenes are isolated, routing is clear, and case studies remain readable without motion. The contract and feature gates keep performance and accessibility stable as the project grows.
