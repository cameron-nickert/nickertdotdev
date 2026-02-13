Handoff summary
- Motion system now handles reveal, impact, ambient loops, and surprise beats per scene in `lib/motion.ts`.
- Wacky mode toggle in header persists to localStorage and flips `html[data-wacky]` between normal/extra.
- Performance safeguards: device tier detection, longtask downgrade, reduced-motion and low-power fallbacks, and visibility pause.
- Reactive overlays are wired to `.panel`, `.comic-panel`, `.activity-card`, and `.work-card` elements.

How to verify
1) Normal mode: hover panels/cards to see overlay sweeps and ring pulses.
2) Wacky mode: toggle in header, revisit hero/work to see larger impact pops.
3) Reduced motion: enable OS setting, reload, confirm short opacity/scale reveals and no ambient loops.
4) Low-end: simulate `prefers-reduced-data` or throttle device; bursts and ambient loops should stop.

Implementation notes
- `data-impact="true"` can be applied to any element for comic impact animation.
- `data-wacky="extra"` on `html` increases motion amplitude (full tier only).
- New CSS in `app/globals.css` for `.reactive-overlay` and `.wacky-toggle`.
