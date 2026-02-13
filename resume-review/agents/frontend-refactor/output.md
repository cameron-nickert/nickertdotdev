# Output


## 2026-02-13 16:26 - frontend-refactor

### Refactor Opportunities (ranked)
1) Move resume content into a single canonical module (e.g. `content/resume.ts`) and import into `app/resume/fullscreen/page.tsx` to avoid divergence from `context.md` (name, title, summary, experience, interests, education, contact).
2) Align selected project metadata to `content/project-history.ts` by centralizing title overrides and impact notes alongside each project item, or by adding optional fields (e.g. `displayTitle`, `impactNote`) to `ProjectHistoryItem`.
3) Replace ad-hoc project selection with a slug list + helper (e.g. `const selectedProjectSlugs = [...]` and `getProjectHistoryBySlugs`) to avoid repeated `find` calls and improve clarity.
4) Normalize experience entries to a typed structure that can be shared across resume views (e.g. `content/experience.ts`), since `context.md` already holds this data.

### Low-risk patch set
- Extract the arrays (`experience`, `highlights`, `wins`, `skillGroups`, `interests`, `leadershipHighlights`, `operatingPrinciples`) into `content/resume.ts`, export a `resume` object, and import into `app/resume/fullscreen/page.tsx` to keep UI unchanged but reduce drift.
- Add `displayTitle?: string` and `impactNote?: string` to `ProjectHistoryItem` in `content/project-history.ts` to eliminate `projectTitleOverrides` and `projectImpactNotes` in the page.
- Replace the `selectedProjects` `find` chain with a `selectedProjectSlugs` array + `map`/`filter` helper to make selection stable and easier to update.

### Regression risks + validation checks
- Risk: content ordering changes if the new data module reorders arrays; validate visual order against current render.
- Risk: project title overrides/impact notes missing if migrated incorrectly; validate each selected project section.
- Risk: contact or header lines drift if moved; cross-check against `context.md`.
- Validation checks: open `/resume/fullscreen` locally and compare sections (Summary, Experience, Selected Projects, Skills/Interests) to current; verify no layout shift or missing bullets.
