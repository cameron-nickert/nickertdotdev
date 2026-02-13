# Frontend Architecture Draft Plan

## Recommended stack
- Primary: Next.js (App Router) + React + TypeScript.
- Styling: Tailwind (utility-first) or CSS Modules (scope-first).
- Animation: DOM/SVG + WAAPI with a light GSAP timeline layer for scene orchestration.
- Data/content: MDX or local JSON for projects; CMS optional in V2.
- Tooling: ESLint + Prettier, Playwright for e2e, Lighthouse CI.

Alternatives if constraints unknown:
- Vite + React + React Router for minimal runtime.
- Astro + React islands when content-heavy and low JS is priority.

## App structure

### Routes (canonical model)
- `/` single-page scroller with anchored scenes (primary experience).
- `/work/[slug]` case study detail pages (MVP scope).
- Optional thin aliases: `/about`, `/story`, `/work`, `/resume`, `/contact` can redirect to `/#about`, `/#story`, `/#work`, `/#resume`, `/#contact` if shareable paths are required.

### Route + scene mapping
- `/` includes scenes: Hero, Work, Who I Am, My Story, Resume, Contact.
- Canonical anchor ids: `#home`, `#work`, `#about`, `#story`, `#resume`, `#contact`.
- Deep links use `/#story` etc; SceneRoot maps hash -> scene index and scrolls with `scrollIntoView` or a controlled container. URL hash updates on scene enter.

### Scene abstraction
A Scene is a self-contained visual module with a defined lifecycle and inputs:
- Inputs: scroll position, viewport metrics, reduced motion flag, feature toggles.
- Outputs: UI state (classNames, variants), analytics hooks, optional background assets.
- Lifecycle: mount -> activate -> update -> deactivate -> unmount.
- Each scene receives a `SceneContext` and emits minimal events.

### Shared UI
- SiteNav: persistent top nav with anchors and active state.
- HUD: optional progress indicator or scene index.
- Controls: motion toggle, skip animation, low power mode toggle.
- Skip links: focusable and consistent across routes.

## Component breakdown

### Layout
- `AppShell`: top-level layout, handles background layers and global toggles.
- `RouteTransition`: wraps page transitions, respects reduced motion.

### Scenes
- `SceneRoot`: orchestrates scene registry and route integration.
- `Scene`: base component with lifecycle hooks and standards.
- `SceneBoundary`: error boundary and fallback for a scene.
- `SceneOverlay`: optional overlays (text, CTA) that sync with scene state.

### Shared UI
- `SiteNav`, `Footer`.
- `MotionToggle`, `SkipAnimation`, `LowPowerToggle`.
- `SceneProgress`: optional HUD.

### Utilities
- `useSceneRegistry`: map of scene ids to components and metadata.
- `useReducedMotion`: wrapper over `prefers-reduced-motion` plus local preference.
- `useScrollModel`: normalized scroll progress, snap logic, and velocity.
- `useViewport`: viewport size, DPR, safe area.
- `useFeatureFlags`: access to performance/feature toggles.

Props and responsibilities
- Scenes accept `sceneId`, `sceneIndex`, `isActive`, `scrollProgress`, `features`.
- Shared UI accepts only global toggles and navigation props.

## State model

### Scene state
- Managed by `SceneRoot` and a `SceneStore` (context + reducer).
- State shape: `{ activeSceneId, sceneProgress, isPaused, sceneMeta }`.

### Scroll position model
- Normalized 0-1 progress for each scene.
- Only `useScrollModel` can interpret raw scroll; scenes are pure consumers.

### Interaction events
- Minimal event bus: `onSceneEnter`, `onSceneExit`, `onSceneCTA`.
- Analytics lives outside scene components to avoid coupling.

### Feature flags
- `reducedMotion`: OS + user override.
- `lowPowerMode`: manual toggle or heuristic (battery + low FPS).
- `enableHeavyAssets`: only on capable devices.

## Content system
- MVP: local content maps (`content/projects.ts`) and copy in MDX or JSON.
- V2: headless CMS (Sanity/Contentful) if non-dev editing is needed.
- Keep project data in typed schema; separate layout components from copy.

## /work/[slug] implementation details
- Content format: MDX for solo-dev speed and rich layout control. Use frontmatter for metadata and structured sections in the body.
- Components for case study page:
  - `CaseHero` (title, role, timeline, hero media)
  - `CaseSummary` (one-paragraph overview)
  - `CaseImpact` (metrics and outcomes)
  - `CaseRole` (responsibilities, team, tools)
  - `CaseTechStack` (tags, links)
  - `CaseGallery` (screenshots, video, captions)
  - `CaseChallenges` (problem/solution)
  - `CaseLinks` (live, repo, press)
  - `CaseNav` (prev/next, back to work)
- Readability-first: enforce a type scale, max line width, and generous spacing. Use comic-style visual framing as accents (panels, callouts, caption blocks) that degrade to plain blocks when motion is off.

## Testing strategy

### Unit/integration
- Unit test utilities and hooks (`useScrollModel`, `useReducedMotion`).
- Integration tests for Scene lifecycle and page transitions.

### Visual regression
- Chromatic or Playwright screenshot tests for scenes.
- Snapshot key scene states: start, mid, end, reduced motion.

### A11y checks
- Axe smoke checks per route in CI (Playwright + axe).
- Manual pass for focus order and skip links before release.

### Performance checks
- CI: Lighthouse CI budgets for LCP, TBT, CLS, JS size on `/` and `/work/[slug]`.
- Manual: run profile for animation-heavy scenes and verify FPS on mobile.

## Build/deploy plan + CI checklist
- Build: `next build` or Vite build.
- Deploy: Vercel or Netlify, preview per PR.
- CI checklist:
  - Lint + typecheck
  - Unit tests
  - Playwright smoke + axe checks
  - Lighthouse CI budgets on key routes

## MVP vs V2 architecture notes

### MVP
- Local content maps.
- Minimal scenes (2-3 on HOME).
- Skip animation and reduced motion done early.
- Avoid complex per-scene state stores.

### V2
- CMS integration.
- Rich project detail pages.
- Advanced timelines and scene transitions.
- Scene editor tools if needed.
