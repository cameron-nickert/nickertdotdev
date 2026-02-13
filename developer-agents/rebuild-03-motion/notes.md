Motion rebuild scope
- Rebuilt scene choreography in `lib/motion.ts` with reveal, impact, ambient, and surprise beats per scene.
- Added Wacky mode toggle in `components/SiteHeader.tsx` that writes `data-wacky` on `html` and persists in localStorage.
- Added performance safeguards: low-end tier detection, longtask downgrades, visibility pause, and animation limits per tier.
- Introduced reactive overlays on panels/cards via `wireReactiveOverlays` + `.reactive-*` CSS.
- Added extra SFX pops on contact email button and extended impact animations on `.impact-frame` elements.

Behavior notes
- Reduced motion uses short opacity/scale reveals instead of full transforms.
- Low-power or minimal performance tier disables ambient loops and burst sprites.
- Wacky mode only runs at full tier and not when reduced-motion or low power is active.

Key files touched
- `lib/motion.ts`
- `components/MotionOrchestrator.tsx`
- `components/SiteHeader.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/layout.tsx`
