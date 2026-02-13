# A11y + Performance Draft Plan

## Accessibility requirements for animated/interactive scenes
- Focus management
  - Every scene must be reachable by keyboard and entered/exited without traps.
  - Focus order follows visual narrative order; no auto-focus on load.
  - When a panel/scene opens, focus moves to the scene heading or first interactive control and returns to the trigger on exit.
- Semantics / ARIA approach
  - Prefer native elements (button, a, input, details/summary). Use ARIA only to fill gaps.
  - All interactive regions have programmatic names via visible text or aria-label.
  - For canvas/WebGL scenes: provide a parallel DOM description or list mode with equivalent actions and text alternatives.
- Keyboard interactions for all controls
  - All actions operable with Tab/Shift+Tab, Enter/Space, and Arrow keys where appropriate.
  - Custom components must follow WAI-ARIA patterns (e.g., carousel, tabs) with roving tabindex.
  - No interaction relies on drag-only; provide keyboard alternatives.
- Skip links / “skip animation” / “view as list”
  - Provide a skip link to bypass the animated hero.
  - Provide a persistent “Skip animation” control that jumps to the next static section.
  - Provide a “View as list” mode that presents the comic as linear text + still images with captions.

## Motion safety plan
- Prefers-reduced-motion behavior
  - If prefers-reduced-motion: disable non-essential motion, parallax, auto-play, and scroll-jacking.
  - Replace animated transitions with instant or simple fades under 150ms.
  - Pause any looping animation by default; allow user opt-in to play.
- Flashing/rapid motion guidance
  - No flashing > 3 times per second and avoid high-contrast strobing.
  - Limit large-scale movement across viewport; keep motion within 20% of viewport width/height unless user opts in.
- User controls (pause/stop/hide)
  - For any auto-play scene lasting > 5s, provide visible Pause/Stop/Hide controls.
  - Controls must be keyboard operable and labeled.

## Performance budget (mobile-first, pass/fail)
| Category | Target | Pass/Fail definition | Notes |
| --- | --- | --- | --- |
| LCP | <= 2.5s (p75) | Fail if Lighthouse mobile LCP > 2.5s | Measure on mid-tier Android profile |
| INP | <= 200ms (p75) | Fail if Lighthouse INP > 200ms | Use real user actions if RUM is added |
| CLS | <= 0.1 | Fail if Lighthouse CLS > 0.1 | Reserve all media dimensions |
| TTFB | <= 0.8s | Fail if Lighthouse TTFB > 0.8s | Server + CDN tuning |
| JS (MVP) | <= 170KB gzipped initial JS | Fail if initial JS > 170KB gz | Excludes lazy-loaded scenes |
| CSS (MVP) | <= 50KB gzipped | Fail if initial CSS > 50KB gz | Consolidate fonts/styles |
| Animation smoothness | No sustained jank during scroll/scene transitions | Fail if > 2 long tasks (> 50ms) within a 5s transition | Use Performance panel |
| Images | Hero <= 250KB, in-viewport <= 200KB, offscreen <= 150KB | Fail if any single asset exceeds target | Use AVIF/WEBP where possible |
| Video | <= 2MB for short loops, <= 5MB for full clips | Fail if any clip exceeds target | Use autoplay only if muted and controlled |

## Tooling / measurement plan
- CI (required)
  - Lighthouse CI (mobile) with hard budgets for LCP/INP/CLS/TTFB and asset sizes.
  - Playwright + axe-core for automated a11y checks.
- Manual (required)
  - Lighthouse (mobile) in DevTools for spot checks and regressions.
  - Chrome Performance panel: verify long tasks and smoothness targets.
  - Keyboard-only and screen reader walkthroughs (NVDA/JAWS/VoiceOver).
- Optional
  - WebPageTest for filmstrip and waterfall validation.
  - RUM (e.g., Web Vitals) to validate p75 in production.

## Pass/fail acceptance criteria + QA checklist
- Pass/fail
  - Pass if all interactive elements are reachable and operable via keyboard with visible focus.
  - Pass if all scenes have accessible names and descriptions; canvas has a DOM equivalent or list mode.
  - Pass if prefers-reduced-motion disables non-essential motion and provides opt-in playback.
  - Pass if LCP < 2.5s, CLS < 0.1, INP < 200ms (mobile p75 in Lighthouse CI).
- QA checklist
  - Keyboard-only: complete all primary flows.
  - Screen reader: headings, landmarks, and controls announced correctly.
  - Motion: reduced-motion setting verified; pause/stop/hide controls work.
  - Performance: no long tasks > 50ms during animations; images sized to prevent CLS.
## User controls
- Skip / Jump to content location
  - Provide a skip link as the first focusable element on every page.
  - Provide a visible "Skip animation" control in the hero/scene HUD.
- Pause/stop ambient motion
  - Persistent control in the HUD; keyboard reachable; labeled "Pause motion".
  - Pauses any looping/background motion and auto-advance behaviors.
- Prefers-reduced-motion ON by default
  - Start in reduced-motion mode with stills and minimal transitions.
  - Provide a clearly labeled "Play motion" opt-in toggle.
- Condensed mode on low-end devices
  - Default to condensed mode if device memory <= 4GB or prefers-reduced-motion is set.
  - Allow opt-in to full motion with a warning about performance.
