# Motion Draft Plan (Next.js + React + TypeScript)

## Architecture options
1) DOM/SVG + WAAPI + small GSAP timeline layer
   - DOM for panels, SVG for ink overlays, WAAPI for loops, GSAP for scroll choreography.
   - Pros: accessible, responsive, moderate complexity.
   - Cons: needs coordination to avoid main-thread spikes.

2) DOM/SVG + CSS scroll-timeline (experimental)
   - Pure CSS for scroll-driven sequences; minimal JS.
   - Pros: tiny bundle, simple.
   - Cons: limited browser support; needs fallback.

3) Canvas 2D overlay + DOM baseline
   - DOM for content; canvas for speed lines, particles.
   - Pros: cinematic effects.
   - Cons: more complexity; higher perf risk.

## Recommendation (MVP)
Choose option 1: DOM/SVG + WAAPI with a light GSAP timeline layer.
- It balances spectacle with accessibility, keeps content semantic, and supports reduced-motion and low-end fallbacks.

## React structure (where timelines live)
- Create a `useSceneTimeline(sceneId, options)` hook that:
  - Accepts refs for scene root and child layers.
  - Builds a GSAP timeline in `useLayoutEffect` guarded by `prefers-reduced-motion`.
  - Returns a cleanup function that kills timelines and ScrollTriggers on unmount.
- Refs:
  - Use `useRef<HTMLDivElement>(null)` for scene root and `data-layer` attributes for layer queries.
  - Avoid per-frame React state; timeline updates should be imperative.
- Files:
  - `components/scenes/SceneXX.tsx` renders markup + SVG.
  - `motion/useSceneTimeline.ts` owns GSAP wiring.
  - `motion/sceneConfigs.ts` keeps per-scene durations and offsets.

## Preventing re-render jank
- Imperative animation layer: use GSAP/WAAPI and refs, not React state, for motion.
- Keep React state for discrete UI (e.g., step index, open/closed) only.
- Use `useMemo` for derived values and to avoid re-creating config objects.
- Use `requestAnimationFrame` batching for custom pointer interactions.
- Avoid layout-triggering properties; animate transform/opacity only.

## Lazy loading and asset strategy
- Route-level:
  - Use Next.js dynamic imports for heavy scenes (`dynamic(() => import('./Scene03'))`).
- Scene-level:
  - Load scene assets on intersection using `IntersectionObserver`.
  - Preload the next scene only after the current scene is within 1 viewport.
- Media:
  - Use `next/image` for rasters, `loading="lazy"` by default.
  - For large SVGs, inline only critical above-the-fold; lazy import the rest.
- Unload:
  - On scene unmount, kill timelines and remove event listeners.

## Scroll choreography plan
- Structure into 4-6 scenes with clear start/end ranges.
- State model per scene: `sceneIndex`, `progress`, `phase` (enter/active/exit).
- GSAP ScrollTrigger pins each scene lightly (short pin duration) to stage transitions.
- Parallax caps: 10-15% translate; avoid deep scaling on text.
- One timeline per scene; no cross-scene dependencies.

## Interaction patterns
- Drag/throw: ball flick microgame in a single panel (pointer events; scripted arc).
- Hover reveals: inked speech bubbles or stat cards (hover/focus; tap toggle on touch).
- Click-to-advance panels: 3-4 step carousel; supports keyboard arrows.
- Mini interaction: "garage light-up" hotspots to reveal car features (no trademarks).

## Fallback strategy
- prefers-reduced-motion:
  - Replace scroll transforms with instant states; use fades only.
  - Replace drag/throw with "Shoot" button + simple success state.
- Low-end device mode:
  - Detect via `prefers-reduced-motion` or `navigator.hardwareConcurrency <= 4` or `deviceMemory <= 4`.
  - Disable FX layers; reduce staggered items.
- No-hover devices:
  - Convert hover reveals to tap toggles; add "info" icon.

## Performance plan
- Budgets:
  - LCP < 2.5s (mobile), CLS < 0.1, INP good.
  - Max 1-2 active loops per scene beyond scroll transforms.
- Measurements:
  - Use Web Vitals in Next.js (`reportWebVitals`) for LCP/CLS/INP.
  - Use PerformanceObserver to track long tasks.
  - Measure animation smoothness with FPS sampling during scroll in dev builds only.
- Keep main thread light:
  - Use `will-change` sparingly; avoid layout thrash; precompute transforms.
  - Pause loops offscreen; throttle pointer handlers.

## Animation QA checklist
- Functional:
  - All interactions work with keyboard and touch.
  - prefers-reduced-motion swaps to designed alternatives.
  - No-hover devices can access all reveals.
- Visual:
  - No text jitter or blurry scaling; check at 1x and 2x DPR.
  - Layer alignment matches art frames.
- Performance:
  - No long tasks > 50ms during scroll.
  - FPS stays > 50 on mid-tier mobile.
