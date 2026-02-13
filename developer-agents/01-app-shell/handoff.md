# D01 Handoff

## What is ready
- App shell with persistent header, skip link, and anchored section structure.
- Jump navigation with active section indication via intersection observer.
- HUD controls removed per user request.
- Hash alias support for `#about` -> `#who-i-am`.

## Notes for scene agents
- Scene wrappers are on `section` elements with `data-scene="scene-0X-*"` to hook scene-specific UI.
- Section headings carry IDs used by `aria-labelledby` for semantic landmarks.
