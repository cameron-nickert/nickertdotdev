# ARIA + Semantics Patterns

## Scene navigation HUD / progress indicator
- Recommended HTML
  - nav[aria-label="Scene navigation"]
  - ol > li > button for each scene
  - h2 for current scene title
- Keyboard model
  - Tab to enter nav; ArrowLeft/ArrowRight to move; Enter/Space to activate
  - roving tabindex for buttons
- ARIA
  - Use aria-current="step" on active scene button
  - Avoid role="tablist" unless scene content is a true tab panel
- Screen reader expectations
  - "Scene navigation, 5 items"; active item announced as current

## "Skip animation / condensed mode" toggle
- Recommended HTML
  - button or a link that toggles condensed mode
  - Include visible label text
- Keyboard model
  - Enter/Space toggles; focus remains on control
- ARIA
  - Use aria-pressed="true|false" if toggle button
  - If link, use aria-controls to point to condensed container
- Screen reader expectations
  - "Condensed mode, pressed" or "Skip animation" announced

## Reduced motion toggle (manual override)
- Recommended HTML
  - button with aria-pressed or a checkbox input + label
  - Include helper text: "Respects system setting"
- Keyboard model
  - Enter/Space toggles; no focus change
- ARIA
  - aria-pressed for button toggle
- Screen reader expectations
  - "Reduced motion, pressed" or "Reduced motion, checked"

## Click-to-advance comic panels
- Recommended HTML
  - section with h2 for scene title
  - button labeled "Next panel" and "Previous panel"
  - panel list as ol > li with aria-hidden for inactive panels
- Keyboard model
  - Enter/Space on Next/Prev; ArrowRight/ArrowLeft also advance
  - Focus stays on controls; optional roving tabindex on panels
- ARIA
  - aria-live="polite" on panel title or caption to announce updates
  - aria-hidden="true" for inactive panels
- Screen reader expectations
  - "Panel 3 of 8" announced via live region

## Carousel-like project gallery
- Recommended HTML
  - section with h2
  - button "Previous" / "Next" and an ol of slides
  - Keep one slide in DOM as active; others hidden
- Keyboard model
  - Tab to controls; Enter/Space to change slide
  - Optional ArrowLeft/ArrowRight; do not hijack page scroll
- ARIA
  - aria-roledescription="carousel" on container
  - aria-live="polite" on slide title
  - aria-hidden="true" for inactive slides
- Screen reader expectations
  - "Carousel" with current slide announced and index

## Modal / lightbox (if used)
- Recommended HTML
  - dialog element with aria-labelledby and aria-describedby
  - close button first or last in tab order
- Keyboard model
  - Focus moves into dialog on open; Escape closes; focus returns to trigger
- ARIA
  - Use native dialog where possible; otherwise role="dialog" + aria-modal="true"
- Screen reader expectations
  - "Dialog" announced with title and description
