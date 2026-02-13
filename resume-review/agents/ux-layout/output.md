# Output

## 2026-02-14 UX Layout

Top 10 layout issues (severity + area)
1) High: Column imbalance persists; left column is narrower but carries more stacked blocks, compressing content and visual weight. Area: `.grid`, `.left`, `.right`.
2) High: Fixed header height with overflow hidden constrains identity area and can clip long lines; limits top breathing room. Area: `.header`.
3) Medium: Rotations on cards + `overflow: hidden` in column wrappers risk clipping and create jittery rhythm. Area: `.left`, `.right`, `.experienceList > li`, `.projectList > li`.
4) Medium: Projects still read too close to Experience in weight because card styling remains similar (border/shadow/tilt). Area: `.experienceList > li`, `.projectList > li`.
5) Medium: Issue bar still competes with header hierarchy due to size/letter-spacing; eye lands on bar before name. Area: `.issueBar`.
6) Medium: Contact pills remain visually chunky and right-aligned, drawing attention away from identity block. Area: `.contactList`, `.contactList li`.
7) Low: Padding/gap values between grid and columns remain slightly mismatched, creating uneven vertical rhythm. Area: `.grid`, `.left`, `.right`.
8) Low: Skills vs interests still share similar visual weight; sub-hierarchy inside left column is weak. Area: `.skillPill`, `.interestCloud li`.
9) Low: Endcap shadow/border still reads as a primary card, pulling attention down the page. Area: `.endcap`.
10) Low: Issue bar + header stack feels top-heavy; the combined weight reduces flow into the grid. Area: `.issueBar`, `.header`.

Patch-ready CSS changes (selector + property + value)
- `.grid`: `grid-template-columns: 0.96fr 1.04fr;`
- `.left`: `padding-right: 0.56rem;`
- `.right`: `padding-left: 0.4rem;`
- `.header`: `height: auto;`
- `.header`: `min-height: 152px;`
- `.header`: `overflow: visible;`
- `.left, .right`: `overflow: visible;`
- `.experienceList > li:nth-child(odd)`: `transform: rotate(-0.15deg);`
- `.experienceList > li:nth-child(even)`: `transform: rotate(0.15deg);`
- `.projectList > li`: `transform: none;`
- `.projectList > li`: `background: rgba(255, 247, 229, 0.36);`
- `.projectList > li`: `box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.08);`
- `.projectList > li`: `border-color: rgba(18, 11, 11, 0.24);`
- `.issueBar`: `font-size: 0.82rem;`
- `.issueBar`: `letter-spacing: 0.05em;`
- `.contactList li`: `background: rgba(255, 247, 229, 0.45);`
- `.contactList li`: `box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.06);`
- `.contactList li`: `border-color: rgba(18, 11, 11, 0.7);`
- `.interestCloud li`: `background: rgba(255, 212, 59, 0.24);`
- `.endcap`: `box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.16);`

Notes
- These changes keep the one-page comic identity while clarifying hierarchy and calming scan rhythm.
