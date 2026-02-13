# Output

## Spacing Token Rhythm (proposal)
- `--space-2xs: 0.08rem` (micro offsets, underlines, tiny margins)
- `--space-xs: 0.12rem` (tight gaps between small text blocks)
- `--space-sm: 0.2rem` (list gaps, pill gaps)
- `--space-md: 0.28rem` (panel padding Y, list spacing)
- `--space-lg: 0.36rem` (panel padding X, block gaps)
- `--space-xl: 0.5rem` (column gaps, grid gaps)
- `--space-2xl: 0.7rem` (outer padding, header padding)

## Selector → Tokenized Spacing Updates (mapping)
- `.issueBar gap: 0.4rem` → `var(--space-lg)`
- `.issueBar padding: 0.38rem 0.7rem` → `var(--space-lg) var(--space-2xl)`
- `.header padding: 0.36rem 0.7rem 0.3rem` → `var(--space-lg) var(--space-2xl) var(--space-md)`
- `.header gap: 0.36rem` → `var(--space-lg)`
- `.headerLeft gap: 0.12rem` → `var(--space-xs)`
- `.headerIdentity gap: 0.42rem` → `var(--space-xl)`
- `.headerText gap: 0.02rem` → `var(--space-2xs)`
- `.title margin-top: 0.03rem` → `var(--space-2xs)`
- `.metaLine line-height spacing: 0.12rem` → `var(--space-xs)` where applicable
- `.contactList gap: 0.14rem` → `var(--space-xs)`
- `.contactList li padding: 0.07rem 0.26rem` → `var(--space-2xs) var(--space-sm)`
- `.grid gap: 0.5rem` → `var(--space-xl)`
- `.grid padding: 0.34rem 0.38rem 0.38rem` → `var(--space-md) var(--space-lg) var(--space-lg)`
- `.left/.right padding: 0.36rem 0.5rem` → `var(--space-lg) var(--space-xl)`
- `.left/.right gap: 0.46rem` → `var(--space-xl)`
- `.left padding-right: 0.64rem` → `calc(var(--space-xl) + var(--space-sm))` (or `0.7rem` if fixed)
- `.right padding-left: 0.3rem` → `var(--space-md)`
- `.block h2 margin-bottom: 0.2rem` → `var(--space-sm)`
- `.blockLoud padding: 0.3rem 0.44rem` → `var(--space-md) var(--space-lg)`
- `.blockTape padding-top: 0.16rem` → `var(--space-xs)`
- `.blockTape::before top: -0.32rem` → `calc(var(--space-md) * -1)`
- `.block p margin-bottom: 0.24rem` → `var(--space-sm)`
- `.featureList gap: 0.18rem` → `var(--space-sm)`
- `.winList gap: 0.22rem` → `var(--space-sm)`
- `.winList li padding: 0.16rem 0.36rem` → `var(--space-xs) var(--space-lg)`
- `.skillsGrid gap: 0.24rem` → `var(--space-sm)`
- `.skillsGroup gap: 0.12rem` → `var(--space-xs)`
- `.skillPills gap: 0.2rem` → `var(--space-sm)`
- `.skillPill padding: 0.06rem 0.36rem` → `var(--space-2xs) var(--space-lg)`
- `.interestCloud margin-top: 0.06rem` → `var(--space-2xs)`
- `.interestCloud gap: 0.24rem` → `var(--space-sm)`
- `.interestSection margin-top: 0.18rem` → `var(--space-sm)`
- `.interestCloud li padding: 0.06rem 0.42rem` → `var(--space-2xs) var(--space-xl)`
- `.experienceList/.projectList gap: 0.28rem` → `var(--space-md)`
- `.experienceList/.projectList li padding: 0.3rem 0.4rem` → `var(--space-md) var(--space-lg)`
- `.itemMeta margin: 0.06rem 0 0.12rem` → `var(--space-2xs) 0 var(--space-xs)`
- `.experienceList ul gap: 0.12rem` → `var(--space-xs)`
- `.projectImpact margin-top: 0.08rem` → `var(--space-2xs)`
- `.blockSoftAccent padding: 0.28rem 0.4rem` → `var(--space-md) var(--space-lg)`
- `.blockSoftAccent::before top: 0.16rem` → `var(--space-xs)`
- `.miniList gap: 0.14rem` → `var(--space-xs)`
- `.endcap margin-top: 0.12rem` → `var(--space-xs)`
- `.endcap padding: 0.12rem 0.34rem 0.18rem` → `var(--space-xs) var(--space-lg) var(--space-sm)`
- `.endcapBadge padding: 0.1rem 0.5rem 0.08rem` → `var(--space-2xs) var(--space-xl) var(--space-2xs)`

## High-Risk Spacing Changes (overflow/clip)
- Increasing `.grid gap` or `.left/.right gap` multiplies across many blocks and can push the endcap below fold/print safe area.
- Increasing `.blockLoud` or card padding risks overflow inside the fixed-height sheet and print bounds.
- Increasing `.header` vertical padding or text spacing risks clipping because `height: 152px` + portrait height leave little slack.
- Increasing `.endcap` min-height or padding pushes the grid height; it sits near the bottom edge in print mode.
- Reverting the <=1100px padding reductions will increase scroll height and likely overflow on narrower screens.

## Issues Logged / Decisions
- Issues and spacing-token decision appended in shared logs.
