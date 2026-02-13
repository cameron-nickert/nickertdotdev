# Feature Gating Plan

## Detection
- `prefers-reduced-motion`: read via `window.matchMedia('(prefers-reduced-motion: reduce)')`.
- Low power mode:
  - Manual toggle persisted in localStorage.
  - Heuristic: low FPS sampling during animation, or `navigator.deviceMemory` and `hardwareConcurrency` thresholds.
- Mobile vs desktop enhancement:
  - Use CSS media queries for layout changes.
  - Use viewport width + pointer/hover capabilities for enhanced scenes.

## Storage
- Central `FeatureFlags` in context/store.
- Persist user toggles (reduced motion override, low power) in localStorage.
- Server-rendered default uses safe values, then hydrate with client detection.

## Consumption
- Scenes receive `features` and `reducedMotion` via SceneRoot props.
- Shared UI toggles write to the store; scenes subscribe read-only.
- Heavy assets and preloading are gated by `features.enableHeavyAssets`.

## FeatureFlags shape
```
{
  reducedMotion: boolean,
  lowPowerMode: boolean,
  enableHeavyAssets: boolean,
  isMobile: boolean,
  supportsHover: boolean
}
```
