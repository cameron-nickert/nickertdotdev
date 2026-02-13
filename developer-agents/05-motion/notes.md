# D05 Motion Notes

- Added motion utilities in `lib/motion.ts` for reduced-motion/low-power/condensed detection, scene reveal/stagger/float orchestration, SFX trigger wiring, and cleanup.
- Wired `components/MotionOrchestrator.tsx` to apply scene motion + SFX across home scenes via WAAPI.
- Tagged scene elements in `app/page.tsx` with `data-motion` and added SFX anchors; added base SFX styling in `app/globals.css`.

Open items
- Confirm SFX word choices (currently SWISH for hero CTA, THUMP for work links).
- Validate reduced-motion behavior with a11y/perf pass once assets land.
