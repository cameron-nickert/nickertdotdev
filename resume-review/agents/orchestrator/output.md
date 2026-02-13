# Output

## Merged Priority List (P0/P1/P2)

P0 (Readability + Scanflow)
- Reduce issue bar dominance (size/letter-spacing/background saturation) so Name/Role reads first on entry.
- Demote contact pills further (lighter fill/border, remove shadow) to stop right-column header competition.
- Separate Experience vs Projects with a clear size/weight gap on item heads and lighter project card styling.

P1 (Accessibility + Legibility + Layout Safety)
- Promote Experience/Project item heads to semantic `h3` and keep size/line-height separation from body copy.
- Loosen body/bullet line-height for summary and experience bullets to improve 6-second scan.
- Fix header height/overflow to avoid identity clipping; keep minimal padding to protect one-page layout.
- Align column widths toward parity (0.96/1.04) to reduce left compression without reflow risk.

P2 (Style Flourish + Print/Responsive Polish)
- Reduce wins/skill/interest saturation and remove skill pill rotations to lower micro-jitter.
- Keep Experience tilt subtle, remove project rotation entirely, soften burst opacity and endcap shadow.
- Resolve print margin mismatch and hide bursts/texture in print; bump smallest print sizes if space allows.

## Conflict Resolutions (explicit)

- Scanflow improvement vs TSX structure: keep block ordering intact; use CSS demotion over moving blocks to avoid layout risk.
- Column bias vs overflow: adjust grid ratio only (0.96/1.04) and avoid gap/padding increases to preserve one-page fit.
- Header breathing room vs clipping: set header to auto height with min-height rather than increasing padding.
- Print safety vs comic identity: apply print-only overrides (margins, texture, burst visibility) to keep screen styling intact.

## Final Patch Sequence (ordered, patch-ready)

1) `app/resume/fullscreen/page.module.css`: reduce `.issueBar` size/letter-spacing and slightly lower background saturation.
2) `app/resume/fullscreen/page.module.css`: further demote `.contactList li` (transparent background, no shadow) and lighten borders.
3) `app/resume/fullscreen/page.tsx`: render Experience/Project item heads as `h3` for semantic hierarchy.
4) `app/resume/fullscreen/page.module.css`: increase `.itemHead` size/line-height gap vs body and loosen `.block p`/list line-height.
5) `app/resume/fullscreen/page.module.css`: set `.grid` columns to 0.96/1.04 and make `.header` height auto with min-height.
6) `app/resume/fullscreen/page.module.css`: demote project cards (lighter fill/shadow, no rotation) and reduce wins/skill/interest saturation.
7) `app/resume/fullscreen/page.module.css`: print margin fix (match @page margin), hide bursts, reduce textures, and bump smallest print sizes if space allows.
8) Optional refactor: move resume content to a canonical module once layout is stable.

## Definition of Done

- Header scan order reads Name → Role → Experience without issue bar/contact pill competition.
- Experience clearly dominates Projects in size, weight, and card styling.
- Item heads are semantic headings with visible size/line-height separation from body copy.
- Header does not clip identity lines; grid remains one-page safe.
- Print preview shows no edge clipping; bursts/textures do not muddy text.

## Handoff Status

- Orchestrator: complete; ready for implementer and QA steps.
