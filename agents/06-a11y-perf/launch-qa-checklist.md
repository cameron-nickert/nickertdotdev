# Launch QA Checklist

## Keyboard-only walkthrough
- Load homepage; press Tab: skip link appears and works
- Navigate hero/scene HUD; activate scene changes with Enter/Space
- Operate skip animation, condensed mode, and reduced-motion toggles
- Open/close any modal or lightbox; focus returns to trigger
- Complete primary flow (about, projects, contact) with keyboard only

## Screen reader smoke tests
- NVDA/JAWS (Windows)
  - Headings read in order; no skipped levels
  - Landmarks announced (nav, main, footer)
  - Scene nav announces current step
  - Panel updates announced via live region
- VoiceOver (macOS/iOS)
  - Rotor shows headings and landmarks
  - Toggles announce state (pressed/checked)
  - Dialog announces title and description

## Reduced motion verification
- OS prefers-reduced-motion ON
  - No auto-play motion; transitions are minimal
  - Still images and captions visible; experience feels complete
  - "Play motion" opt-in works and is reversible
- OS prefers-reduced-motion OFF
  - Motion plays; pause/stop control works

## Mobile testing
- iOS Safari
  - Tap targets >= 44x44px; no hover-only actions
  - Scroll smooth; no scroll-jacking
- Android Chrome
  - No focus traps in menus or modals
  - Orientation change does not break layout or focus

## Performance verification
- Lighthouse (mobile)
  - LCP <= 2.5s, INP <= 200ms, CLS <= 0.1, TTFB <= 0.8s
- Performance panel
  - No sustained jank during scene transitions
  - Long tasks > 50ms do not cluster during animations
- Asset audit
  - Hero image <= 250KB; in-viewport images <= 200KB
  - No video over size cap; lazy-load offscreen assets
