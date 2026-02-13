# Asset Export Spec

## SVG layering rules
- Group naming: `layer-bg`, `layer-mid`, `layer-fg`, `layer-fx`, `layer-ui`.
- Element naming: `scene-01-hero__bg-city`, `scene-01-hero__fg-figure`, `scene-01-hero__fx-lines`.
- Keep transforms on groups only; child paths should be static for WAAPI/GSAP safety.
- Avoid SVG filters when possible; use baked raster overlays for glows/blur.
- Use viewBox with consistent scale; do not rely on width/height scaling only.

## Sprite sheets (if used)
- Target 12-18 fps.
- Max sheet height: 512px; width: 2048px.
- PNG-8 for hard edges; WebP for soft effects.
- Frame order left-to-right, top-to-bottom.
- Naming: `scene-04-basketball__fx-dust_18fps.png`.

## Raster images
- Max dimensions: 2400px wide for desktop hero; 1200px for mobile.
- Formats: AVIF primary, WebP fallback, PNG only for transparency.
- Transparent overlays should be pre-multiplied and tested on light/dark panels.
- Keep background textures under 300kb when possible.

## Asset naming
- Pattern: `scene-XX-name__layer-state.ext`.
- Examples:
  - `scene-01-hero__bg-sky.avif`
  - `scene-01-hero__fg-player.svg`
  - `scene-03-work__fx-halftone.webp`
  - `scene-05-garage__ui-callout-open.svg`
