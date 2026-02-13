# Scene Timeline v0 (Canonical)

## scene-01-hero
- Entry: hero panel smash-in (scale 0.98 -> 1) + headline ink reveal + subtle parallax background.
- Idle: halftone shimmer on backdrop at 0.15 opacity; slow pan on skyline.
- Primary interaction: scroll-driven parallax; click "View Work" advances.
- Exit: diagonal panel wipe with speed lines.
- Mobile differences: no pin; shorter duration; parallax reduced.
- Reduced-motion: static hero with fade-in text; no parallax.
- Performance risk: medium if too many layers; cap to 3-4 layers.

## scene-02-who-i-am
- Entry: speech bubble pop + portrait slide-in.
- Idle: subtle bob on portrait (2-3px).
- Primary interaction: click-to-advance stat cards; keyboard arrow support.
- Exit: panel slide-left with ink smear.
- Mobile differences: stat cards stacked; tap to expand.
- Reduced-motion: instant card reveal; no bobbing.
- Performance risk: low.

## scene-03-story
- Entry: timeline strip draws on; panels flip in sequence.
- Idle: faint paper grain drift (very low opacity).
- Primary interaction: click-to-advance beats; optional short "basketball flourish" as a micro-interaction inside one beat (ball bounce + motion lines).
- Exit: timeline collapses into a single panel.
- Mobile differences: swipe or tap to advance; no flip 3D.
- Reduced-motion: no flips; instant panel swap with fade.
- Performance risk: low to medium if too many panels; limit to 4-5 beats.

## scene-04-work
- Entry: grid tiles stagger in; comic SFX labels pop.
- Idle: faint scanline on grid background.
- Primary interaction: hover/tap reveals project details; click opens case study.
- Exit: grid collapses into center panel.
- Mobile differences: tap-to-toggle; no hover reliance.
- Reduced-motion: no stagger; show all tiles.
- Performance risk: medium with too many tiles; limit to 6.

## scene-05-resume
- Entry: resume card slides up with stamp effect ("Verified" style).
- Idle: subtle underline shimmer on key metrics.
- Primary interaction: click to expand sections; optional "garage energy" sub-interaction on skills (tool icons light up in sequence).
- Exit: card folds into a compact footer strip.
- Mobile differences: accordion layout; larger tap targets.
- Reduced-motion: no stamp bounce; instant expand/collapse.
- Performance risk: low.

## scene-06-contact
- Entry: panel zoom-out to contact card; CTA pops.
- Idle: gentle glow pulse on CTA.
- Primary interaction: click/tap to email; optional copy button.
- Exit: none (final state).
- Mobile differences: bigger CTA; sticky email button.
- Reduced-motion: no glow; static CTA.
- Performance risk: low.
