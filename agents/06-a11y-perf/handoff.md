# A11y + Perf Handoff (Non-Negotiables)

## Non-negotiable rules
- Every animated or interactive moment must have an accessible equivalent (text + stills or list mode).
- Keyboard users must complete all flows with visible focus and no traps.
- Respect prefers-reduced-motion: disable non-essential motion by default and provide opt-in playback.
- Provide Pause/Stop/Hide for any auto-play animation > 5 seconds.
- Hit performance budgets: LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile p75.

## Implementation checklist
- Skip link + “Skip animation” + “View as list” controls are visible and keyboard operable.
- Use native elements or correct ARIA patterns; no div-button controls.
- Canvas/WebGL scenes have a parallel DOM description and controls.
- Roving tabindex and arrow key support for composite widgets.
- All media has dimensions reserved to prevent CLS.
- Defer non-critical JS; cap initial JS payload.
- Reduced-motion mode: no parallax, no auto-play, minimal transitions.
- No flashing > 3 per second; avoid high-contrast strobe.
- Animations run off main thread where possible; avoid layout thrash.

## QA pass criteria
- Keyboard-only walkthrough succeeds with visible focus.
- Screen reader announces headings, landmarks, and controls correctly.
- Reduced-motion toggle and OS setting both respected.
- Lighthouse CI meets LCP/CLS/INP budgets on mobile.
