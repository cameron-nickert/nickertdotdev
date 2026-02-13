# Motion Notes

## Candidate libraries/approaches
- CSS + WAAPI (Web Animations API): best for simple panel transitions, parallax, and small looped effects; low bundle cost; easy reduced-motion compliance.
- GSAP (with ScrollTrigger): precise timeline control, good for choreography across panels; extra bundle cost; needs guardrails for low-end devices.
- Framer Motion: convenient in React; great for component-level interactions; timeline choreography can get complex without additional orchestration.
- SVG + SMIL/WAAPI: crisp comic line art and ink effects; SMIL is less consistent; WAAPI for robust control.
- Canvas 2D: performant for sprite effects (speed lines, particles) but less accessible and harder to integrate with DOM hit targets.
- WebGL/Three.js: dramatic depth effects; highest perf risk and complexity; need strong fallbacks.
- Lottie/Rive: fast to ship complex micro-animations; limits in interactivity + responsiveness; asset handoff heavy.

## Tradeoffs
- DOM/SVG + WAAPI: highest accessibility and responsive layout control, moderate animation complexity.
- GSAP: choreography power but adds ~20-40kb+; ensure tree-shaking and code-splitting.
- Canvas/WebGL: jaw-drop visuals but harder to keep LCP/INP in budget; must be optional layer.

## Risks
- Over-animating scroll can tank INP on mid/low-end devices.
- Canvas overuse breaks semantic layering; must preserve DOM for headings and CTAs.
- Overly heavy SVGs can bloat LCP if not optimized.

## Assumptions
- Stack is flexible with React/Next.js possible.
- Scenes are sectioned into panels with clear narrative beats.
- Assets can be delivered in SVG/PNG with naming discipline.
