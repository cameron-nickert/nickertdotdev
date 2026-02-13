# Integrator Notes (D07)

## 2024-03-XX
- Updated route behavior to match canonical single-page scroller by adding Next.js redirects for `/about`, `/story`, `/work`, `/resume`, `/contact` -> anchored sections.
- Added legacy hash aliases (`#scene-01-hero` ... `#scene-06-contact`, plus `#about`) in the header hash sync to preserve deep links while enforcing canonical IDs.
- Kept existing `/work` list page intact but note it is now superseded by the redirect; not removing to avoid overwriting D02 intent without explicit approval.
- Cleaned unused motion variables to reduce lint warnings (`lib/motion.ts`).
- Fixed build-time type error by typing `navigator.connection` access in `lib/motion.ts`.
