# Comic Polish Output (2026-02-13)

## 1) Keep / Remove / Tune (Decorative Effects)

Keep
- Issue bar treatment (color band + uppercase display) as the comic header anchor.
- Tape strip on Education and skyline endcap badge (distinct, recognizable artifacts).
- Halftone texture on the sheet and endcap (light touch only).

Remove
- Rotation on project cards (secondary content should be calmer than Experience).
- Rotation on skill pills (micro-jitter without hierarchy value).

Tune (reduce intensity, not identity)
- Burst opacity near the header to avoid competing with the name/role.
- Experience card tilt to a subtler angle; keep slight motion but reduce jitter.
- Exclamation badge size/opacity so it reads as a single accent instead of a loud stamp.
- Shadows on endcap and cards to a lighter, thinner ink effect.
- Interest/Wins pill saturation and weight to keep them supportive, not primary.

## 2) Exact CSS edits to reduce clutter

Targets: `app/resume/fullscreen/page.module.css`

```css
.sheet::before {
  opacity: 0.05;
}

.sheet::after {
  border: var(--stroke-light) solid rgba(18, 11, 11, 0.2);
}

.burst {
  opacity: 0.16;
}

.burstB {
  opacity: 0.14;
}

.burstC {
  opacity: 0.12;
}

.blockLoud {
  box-shadow: 2px 2px 0 rgba(18, 11, 11, 0.18);
  transform: rotate(-0.12deg);
}

.right .blockLoud {
  transform: rotate(0.12deg);
}

.blockLoud::after {
  width: 0.9rem;
  height: 0.9rem;
  font-size: 0.66rem;
  line-height: 0.9rem;
  opacity: 0.45;
}

.winList li {
  background: rgba(255, 212, 59, 0.14);
  font-weight: 600;
}

.skillPill:nth-child(3n),
.skillPill:nth-child(4n) {
  transform: none;
}

.skillPill:nth-child(3n) {
  background: rgba(255, 212, 59, 0.16);
}

.skillPill:nth-child(4n) {
  background: rgba(44, 107, 255, 0.1);
}

.interestCloud li {
  background: rgba(255, 212, 59, 0.24);
  font-weight: 600;
}

.experienceList > li:nth-child(odd) {
  transform: rotate(-0.1deg);
}

.experienceList > li:nth-child(even) {
  transform: rotate(0.1deg);
}

.projectList > li {
  background: rgba(255, 247, 229, 0.36);
  box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.1);
}

.projectList > li:nth-child(odd),
.projectList > li:nth-child(even) {
  transform: none;
}

.endcap {
  box-shadow: 1px 1px 0 rgba(18, 11, 11, 0.18);
}

.endcap::before {
  opacity: 0.05;
}
```

## 3) Risk notes (too plain)
- If burst opacity and halftone texture are both reduced too far, the top of the page loses its comic energy; keep at least one strong graphic accent in the header region.
- Removing rotations on both Experience and Projects would flatten the card stack; keep a subtle tilt on Experience only.
- If shadows drop below 1px or become too transparent, the inked-panel feel collapses and the page reads like a standard resume.
