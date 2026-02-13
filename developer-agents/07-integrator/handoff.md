# D07 Handoff

## What shipped
- Canonical route redirects in `next.config.mjs` for `/about`, `/story`, `/work`, `/resume`, `/contact` -> anchored sections.
- Legacy hash alias mapping in `components/SiteHeader.tsx` for `#scene-*` and `#about`.
- Motion type safety fixes around `navigator.connection` in `lib/motion.ts`.

## Notes
- `/work` list page remains in place but is superseded by redirect; revisit if the canonical model should remove it.
