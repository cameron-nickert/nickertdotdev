# Resume Review Shared Notes

This folder is a shared workspace for parallel resume agents.

## Protocol

- Read all existing notes in this folder before writing new notes.
- Keep your internal notes in your own file.
- Add cross-agent comments in `SHARED_NOTES.md`.
- Reference exact selectors/symbols from:
  - `app/resume/fullscreen/page.tsx`
  - `app/resume/fullscreen/page.module.css`
- Prioritize readability and scanability while preserving comic style.

## Files

- `SHARED_NOTES.md` - cross-agent handoff and consensus notes
- `agent-ux-layout.md` - layout/spacing specialist
- `agent-typography-visual-hierarchy.md` - typography/hierarchy specialist
- `agent-comic-style-polish.md` - comic style balance specialist
- `agent-responsive-print.md` - responsive/print specialist
- `agent-orchestrator.md` - merged plan and decision log
# Resume Review Collaboration Protocol

## Required Logging
Every agent MUST write:
- internal notes -> its own internal-notes.md
- final recommendation -> its own output.md
- cross-team issues -> shared/issues-log.md
- unresolved disagreements -> shared/conflicts.md

## Shared Context
- Agents must read all existing files in resume-review/shared/ before finalizing.
- Agents should append entries (do not overwrite previous notes).
- Use headings with timestamp + agent name.
