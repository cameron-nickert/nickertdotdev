Re-applied the orchestrator plan to restore hierarchy and scanflow in the fullscreen resume after the site update, keeping the comic-book identity and one-page layout intact.

File changes and rationale
- `app/resume/fullscreen/page.tsx`: promoted Experience/Project item heads to semantic `h3` elements to reinforce hierarchy and accessibility.
- `app/resume/fullscreen/page.module.css`: reduced issue bar dominance, demoted contact pills, adjusted column ratio to 0.96/1.04, loosened body/list line-height, enlarged item heads, removed project rotation, softened project card styling, reduced wins/skill/interest saturation, removed skill pill rotations, softened endcap shadow, and aligned print margins/texture visibility with the @page margin.

Lint
- Ran `npm run lint`.
- Fails due to pre-existing issues in other files:
  - `app/page.tsx`: multiple `no-img-element` warnings, `no-html-link-for-pages` error, and `react/no-unescaped-entities` errors.
  - `components/WorkCard.tsx`: `no-img-element` warning.
  - `lib/motion.ts`: `prefer-const` errors.
  - `app/work/[slug]/page.tsx`: `no-img-element` warning.
  - `app/resume/fullscreen/page.tsx`: `no-img-element` warning (existing pattern).

QA flags
- Verify the header now auto-sizes without clipping and the Name → Role → Experience scan order is preserved.
- Confirm project cards now read as secondary vs Experience on both desktop and <=1100px views.
- Check print preview for border/inner outline clearance with the 0.35in @page margin and reduced texture.
