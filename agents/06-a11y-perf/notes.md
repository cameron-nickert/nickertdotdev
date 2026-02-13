# A11y + Performance Notes

## Risks
- Heavy motion and parallax can violate prefers-reduced-motion expectations and trigger vestibular issues.
- Canvas/WebGL scenes often hide semantics from screen readers; interactive content can become inaccessible.
- Scroll-jacking and nonstandard focus behavior can trap keyboard users.
- Animated text/characters may reduce readability and contrast compliance.
- Performance regressions from unbounded animations, large images, and JS-heavy scenes can harm LCP/INP.

## Common pitfalls
- Missing focus rings or using only hover for key actions.
- Animation-only affordances with no equivalent control or textual description.
- Auto-playing motion without pause/stop/hide controls.
- Inaccessible custom controls (div buttons without roles/keyboard handlers).
- CLS from late-loaded assets and unreserved media dimensions.
- Large JS bundles; heavy animation work on main thread.

## Assumptions
- Scene content can be represented as semantic HTML or accessible alternatives (e.g., list or story mode).
- Build pipeline supports image optimization and code splitting.
- We can implement a global reduced-motion toggle in addition to respecting OS settings.
- Design team agrees to define accessible equivalents for comic scenes.
