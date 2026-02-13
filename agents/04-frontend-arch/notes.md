# Frontend Architecture Notes

## Assumptions
- Solo dev with AI assistance, 6-10 week runway.
- Brand/site name and content TBD; must support HOME, ABOUT, WORK, CONTACT at minimum.
- Scene-based animated interactions with reduced-motion and performance budgets.
- Prefer maintainability over novelty; progressive enhancement by default.

## Preferred stack
- Default: Next.js (App Router) + React + TypeScript + Tailwind or CSS Modules + Framer Motion.
- Alternatives if constraints shift:
  - Vite + React + React Router for simpler static deploys.
  - Astro + React islands for content-heavy pages with lighter JS.

## Complexity risks
- Scene lifecycle drift (custom animation logic becomes fragmented).
- Scroll-driven interactions that leak state into unrelated components.
- Overlapping animation libraries or ad-hoc effects.
- Performance regressions from heavy assets or unbounded observers.

## Maintainability strategies
- Central Scene abstraction with explicit lifecycle and inputs.
- Separate content from choreography; use content maps or MDX.
- Strict boundaries: layout, scene, and shared UI are isolated.
- Feature flags for reduced motion and low power mode.
- Opt-in animation: static first, enhance when capabilities allow.
- Always expose a global “skip animation” pathway.

## Accessibility + performance commitments
- Reduced motion honors OS preference and a user toggle.
- Focus management and skip links per scene.
- Budget checklists for LCP, TBT, CLS; lazy load heavy assets.
