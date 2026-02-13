# D05 Motion Handoff

## What shipped
- Motion system based on WAAPI with scene entry/stagger and optional float loops (paused offscreen).
- SFX pop interaction hooks for approved CTA/link targets with reduced-motion fallback.
- Condensed-mode and low-power guards integrated via `useMotionSettings`.

## Key files
- `lib/motion.ts`
- `components/MotionOrchestrator.tsx`
- `app/page.tsx`
- `components/WorkCard.tsx`
- `app/globals.css`

## Usage notes
- Mark scene elements with `data-motion="reveal"`, `data-motion="stagger"`, or `data-motion="float"`.
- Add SFX with `data-sfx-trigger` + child span `[data-sfx]` inside `.sfx-anchor`.
- Reduced-motion mode uses opacity-only reveals and disables float loops.
