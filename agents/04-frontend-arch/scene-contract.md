# Scene Contract

## Required props
- `id: string` unique scene id, used for deep links and analytics.
- `isActive: boolean` true when scene is the current focus.
- `reducedMotion: boolean` resolved user preference.
- `features: FeatureFlags` includes low power and device gates.
- `scrollProgress: number` normalized 0-1 progress for this scene.
- `onEnter?: (id: string) => void` fired once when scene activates.
- `onExit?: (id: string) => void` fired once when scene deactivates.
- `assetManifest?: AssetManifest` optional list of assets for preloading.

## Optional props
- `debug?: boolean` render debug overlays.
- `onEvent?: (event: SceneEvent) => void` for CTA or analytics signals.

## Lifecycle boundaries
- Mount: scene renders static content first; no heavy assets yet.
- Preload: `assetManifest` is used by SceneRoot to preload assets before activation.
- Activate: `onEnter` fires; motion starts only if `reducedMotion` is false.
- Update: scene responds to `scrollProgress` updates without local scroll listeners.
- Deactivate: `onExit` fires; stop timers, cancel raf, pause media.
- Unmount: cleanup all observers, listeners, and refs.

## Scroll model integration (no rerender jank)
- Global `SceneRoot` owns scroll listeners and computes progress.
- Progress updates flow via a single store (context + reducer) with a `useSyncExternalStore`-style subscription.
- Scenes consume `scrollProgress` and `isActive` from the store; avoid local state derived from scroll.
- Use CSS transforms and `requestAnimationFrame` throttling for animation updates.
- Any direct DOM reads use a single `useLayoutEffect` in SceneRoot to avoid layout thrash.

## Asset preloading
- `AssetManifest` includes `images`, `videos`, and `fonts` arrays.
- SceneRoot preloads assets for the next scene when current scene is active.
- Preload is skipped if `features.lowPowerMode` is true.
