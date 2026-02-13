# Internal Notes


## 2026-02-13 16:26 - frontend-refactor
- Scanned `app/resume/fullscreen/page.tsx` for hardcoded content vs canonical sources (`content/project-history.ts`, `context.md`).
- Noted multiple inline arrays (experience, highlights, wins, skills, interests, education, operating principles) that duplicate `context.md` content and are likely to drift.
- Identified project selection logic using repeated `find` calls and title overrides separate from canonical `projectHistory` entries.
