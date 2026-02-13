# D00 Handoff

## What is ready
- Next.js App Router scaffolding with TypeScript and ESLint.
- Base layout, typography, and theme tokens.
- Placeholder routes: `/` and `/work/[slug]`.
- Baseline content data for work entries.

## Conventions
- Update density mode via `data-density` on `html` (`comfortable` or `condensed`).
- Keep section IDs aligned with navigation anchors.
- Add assets under `public/assets/` and keep `content/` as the data source for copy.

## Suggested next steps
- Swap placeholder copy with approved content from content team.
- Add case study visuals and restructure `/work/[slug]` page once assets arrive.
- Extend metadata with real domain and social handles.

## R04 coordination
- Copy rewrite pass in `app/page.tsx`, `app/work/page.tsx`, `components/WorkCard.tsx`, `content/profile.ts`, `content/work.ts`, plus tone-toggle styles in `app/globals.css`.

## D01 coordination
- Implementing app shell + anchored navigation updates in `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, and `components/SiteHeader.tsx` for homepage sections, skip link, and active section tracking.

## D05 coordination
- Implementing motion utilities + approved interactions in `lib/`, `app/`, and `components/` with reduced-motion and condensed-mode support.
- Wire motion to `.layer-bg`, `.layer-mid`, `.layer-fg`, `.layer-fx`, `.layer-ui` hooks for scenes 01 and 02.

## D03 coordination
- Moving user-provided scene assets into `public/assets/scene-01-hero/` and `public/assets/scene-02-who-i-am/` to replace placeholders.
