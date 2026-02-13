# Motion Handoff

Primary approach: DOM/SVG + WAAPI with a light GSAP timeline layer.

Key rules
- Keep content in DOM for accessibility; use SVG overlays for ink lines and FX.
- One GSAP timeline per scene; avoid cross-scene dependencies.
- ScrollTrigger pinning should be short and subtle to protect INP.
- Cap parallax transforms to 10-15% so text remains readable.
- Pause loops when offscreen; only 1-2 active loops per scene.

Pitfalls to avoid
- Avoid Canvas/WebGL for core content; reserve for optional FX layer.
- Do not animate layout properties; only transform/opacity.
- Avoid heavy SVG filters; use raster or pre-baked effects when needed.
- Do not rely on hover-only discovery; always provide tap/focus fallback.

Fallbacks
- prefers-reduced-motion: static scene, no scroll transforms, click-only interactions.
- Low-end device: disable FX layers and reduce staggered items.
- No-hover devices: tap to toggle reveals and hints.
