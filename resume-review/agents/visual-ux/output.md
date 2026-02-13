# Output

## 2025-02-14 visual-ux

### Visual Findings (severity-tagged)
- [High] Primary scan path is diluted by equal visual weight across blocks; the eye bounces between loud summary/wins/skills and experience cards instead of staying Name → Role → Contact → Experience.
- [High] Stacked tilt + box-shadow + badges on multiple block types creates noise and reduces legibility at print scale.
- [Medium] Header row feels compressed; name/role has limited breathing room and contact pills read as equal priority to identity.
- [Medium] Experience and project cards share near-identical styling, blurring hierarchy between primary and secondary sections.
- [Low] Section spacing cadence is inconsistent (header vs. grid vs. block gaps), which makes scanning feel jittery.

### CSS Change List (selector + property + value)
- `.header`: `padding: 0.36rem 0.7rem 0.3rem;`
- `.header`: `gap: 0.36rem;`
- `.name`: `font-size: 1.88rem;`
- `.title`: `font-size: 0.98rem;`
- `.contactList li`: `background: rgba(255, 247, 229, 0.72);`
- `.contactList li`: `box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.12);`
- `.contactList a`: `font-size: 0.68rem;`
- `.grid`: `gap: 0.5rem;`
- `.left, .right`: `gap: 0.46rem;`
- `.blockLoud`: `transform: rotate(-0.2deg);`
- `.right .blockLoud`: `transform: rotate(0.2deg);`
- `.blockLoud`: `box-shadow: 3px 3px 0 rgba(18, 11, 11, 0.28);`
- `.blockLoud::after`: `opacity: 0.7;`
- `.experienceList > li`: `background: rgba(255, 247, 229, 0.72);`
- `.experienceList > li`: `box-shadow: 2px 2px 0 rgba(18, 11, 11, 0.16);`
- `.projectList > li`: `background: rgba(255, 247, 229, 0.5);`
- `.projectList > li`: `border-style: dashed;`
- `.projectImpact`: `font-size: 0.7rem;`
- `.skillsLabel`: `letter-spacing: 0.06em;`
- `.skillPill`: `box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.16);`
- `.skillPill`: `transform: none;`
- `.interestCloud span`: `background: rgba(255, 212, 59, 0.46);`

### Before/After rationale
- Before: Multiple sections compete with equal loudness; after: header lead is clearer and cards settle into a primary/secondary hierarchy.
- Before: Heavy tilts and shadows on many elements add clutter at print size; after: comic texture remains but with calmer, more legible panels.
- Before: Experience and projects read as peers; after: experience stays primary while projects are visually demoted with lighter fill and dashed borders.
- Before: Spacing rhythm changes between header, grid, and blocks; after: consistent cadence improves scanability.

### No-change list (what should stay)
- Keep the issue bar, halftone texture, and skyline endcap for comic identity.
- Keep the two-column grid and one-page 8.5x11 composition.
- Keep the portrait panel treatment and overall warm paper palette.
