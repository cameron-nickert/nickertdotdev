# Implementation Status

## Core experience
- Single-page anchored scroller on `/` with canonical section order and IDs (`home`, `who-i-am`, `story`, `work`, `resume`, `contact`).
- Persistent header with active-section tracking and hash alias support for legacy `#scene-*` anchors.
- Motion system wired via WAAPI with reduced-motion + low-power + condensed mode guards.

## Routes
- `/` main experience complete.
- `/work/[slug]` case study detail pages complete and wired to `content/work.ts`.
- Alias redirects in place for `/about`, `/story`, `/work`, `/resume`, `/contact` -> anchored sections.

## Content + assets
- Profile and work content schemas implemented with runtime validation.
- Scene art and work card images wired to `public/` assets.
- Resume embed + PDF download present.

## Open items
- Social/brand assets (Open Graph image, favicons) missing.
- Case study metrics/links contain placeholders that need final copy.
