# Effects Palette

01) Panel smash-in
- Approach: scale 0.98 -> 1 with slight overshoot; optional shadow pop.
- Safe: mobile + desktop.
- Reduced-motion: simple fade-in.

02) Halftone burst
- Approach: SVG halftone layer fades in + slight radial scale.
- Safe: desktop; mobile if static.
- Reduced-motion: static halftone layer, no scale.

03) Motion lines sweep
- Approach: SVG lines translate across panel; low opacity.
- Safe: desktop + mobile (short duration).
- Reduced-motion: static lines or none.

04) Impact frame
- Approach: quick 2-frame flash of thick border + shake.
- Safe: desktop; mobile only if very brief.
- Reduced-motion: border flash only.

05) Parallax pan
- Approach: 3-layer translateZ-style via transform; capped 10-15%.
- Safe: desktop; reduced depth on mobile.
- Reduced-motion: no parallax, single layer.

06) Comic SFX pop
- Approach: scale up from 0.8 with bounce; optional rotation 2-4deg.
- Safe: mobile + desktop.
- Reduced-motion: fade in at full size.

07) Rubber-band bounce
- Approach: keyframe overshoot on scaleX/scaleY.
- Safe: desktop + mobile (short duration).
- Reduced-motion: no bounce; linear scale in.

08) Ink wipe reveal
- Approach: mask-based wipe (SVG clipPath) from left/right.
- Safe: desktop; mobile if mask is simple.
- Reduced-motion: instant reveal.

09) Speedline tunnel
- Approach: repeating linear gradient background with translate.
- Safe: desktop only; heavy on mobile.
- Reduced-motion: static background.

10) Staggered card lift
- Approach: cards rise 6-10px with stagger; shadow appears.
- Safe: desktop + mobile.
- Reduced-motion: no lift; just show.

11) Spotlight sweep
- Approach: soft radial gradient overlay moving across object.
- Safe: desktop; mobile if opacity low.
- Reduced-motion: static highlight.

12) Panel flip
- Approach: 3D rotateY 10-12deg; short duration.
- Safe: desktop only.
- Reduced-motion: crossfade.

13) Dots shimmer
- Approach: halftone dots opacity oscillation 0.08-0.15.
- Safe: mobile + desktop.
- Reduced-motion: static dots.

14) Speech bubble pop
- Approach: scale 0.9 -> 1 with small bounce; tail draws in.
- Safe: mobile + desktop.
- Reduced-motion: fade in.

15) Speed blur streak
- Approach: pre-rendered blur overlay that fades on entry.
- Safe: desktop + mobile (short).
- Reduced-motion: none.
