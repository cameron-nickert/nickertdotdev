# Output

## 2026-02-14 scanflow-priority (recheck)

### 1) Current scanflow + failure points
- Entry path: Issue bar still grabs first due to saturated orange and uppercase; the eye then bounces to the contact pills (boxed, right-aligned).
- Experience is now the loudest card (good), but the left column still opens with three stacked blocks (Summary/Highlights/Wins), which delays the eye from settling on Experience.
- Impact Wins and skills/interest pills still use saturated yellow fills and some rotation, which pulls attention away from Experience bullets.
- Project cards still look close to Experience cards (same item head size/weight and similar background/shadow), so secondary content competes.
- Net effect: scan path has improved (Name -> Role -> Experience is clearer), but it still ping-pongs between header ornaments and left-column callouts before stabilizing on Experience.

### 2) Exact style/content positioning tweaks to improve scan order
1) Reduce issue bar dominance
- `app/resume/fullscreen/page.module.css`: lower `.issueBar` font-size to `0.82rem` and reduce letter-spacing to `0.04em`; optionally lower background saturation with `background: #ff936f`.
- Rationale: keeps comic identity while allowing Name/Role to read first.

2) Demote contact pills further
- `app/resume/fullscreen/page.module.css`: set `.contactList li { background: transparent; box-shadow: none; border: var(--stroke-light) solid rgba(18, 11, 11, 0.3); }` and `.contactList a { font-weight: 650; }`.
- Rationale: contact stays visible but no longer competes with the identity block.

3) Bias column width toward Experience
- `app/resume/fullscreen/page.module.css`: change `.grid { grid-template-columns: 0.85fr 1.15fr; }`.
- Rationale: gives Experience more visual real estate and makes the left stack feel secondary.

4) Reduce wins/skills visual pull
- `app/resume/fullscreen/page.module.css`: set `.winList li { background: rgba(255, 212, 59, 0.12); font-weight: 600; }`.
- `app/resume/fullscreen/page.module.css`: remove skill pill rotation on desktop by setting `.skillPill:nth-child(3n), .skillPill:nth-child(4n) { transform: none; }` and reduce pill saturation (`rgba(255, 212, 59, 0.16)` / `rgba(44, 107, 255, 0.1)`).
- Rationale: keeps the playful look but stops the eye from landing on pills before Experience.

5) Strengthen Experience vs Projects hierarchy
- `app/resume/fullscreen/page.module.css`: reduce project heading emphasis with `.projectList .itemHead { font-size: 0.84rem; color: rgba(18, 11, 11, 0.82); }`.
- `app/resume/fullscreen/page.module.css`: lighten project card fill to `rgba(255, 247, 229, 0.36)` and remove rotation on project cards only.
- Rationale: experience remains primary; projects read clearly as secondary proof.

6) Optional: reorder left-column emphasis without layout change
- `app/resume/fullscreen/page.tsx`: move the Impact Wins block below Skills to keep proof near the bottom of the left column.
- Rationale: reduces early scan distraction while keeping content intact.

### 3) Do-not-change list (to avoid regressions)
- Keep the issue bar, halftone texture, portrait panel, and skyline endcap (core comic identity).
- Keep the one-page 8.5x11 composition and two-column grid.
- Keep the warm paper palette and hand-inked border aesthetic.
- Keep the bold name styling and the clear role line for top-line recognition.
