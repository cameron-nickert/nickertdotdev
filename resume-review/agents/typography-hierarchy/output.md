# Output

## 2026-02-13 Typography & Hierarchy (Second Pass)

Top issues (severity-tagged)
- [High] Experience/project item heads still read like body copy because the size gap is narrow and they are rendered as `p` tags rather than headings. (`app/resume/fullscreen/page.tsx:241`, `app/resume/fullscreen/page.tsx:268`, `app/resume/fullscreen/page.module.css:484`)
- [Medium] Body and bullet line-height is still tight for 6-second scanning, especially in the Experience bullets and Summary. (`app/resume/fullscreen/page.module.css:334`, `app/resume/fullscreen/page.module.css:505`)
- [Medium] Contact pills remain small with tight line-height, which makes the contact row slower to parse in the header. (`app/resume/fullscreen/page.module.css:223`)
- [Low] Issue bar typography remains relatively loud (size + tracking), competing with the name/role line. (`app/resume/fullscreen/page.module.css:94`)

Exact CSS patch recommendations
```css
/* Reduce issue bar competition */
.issueBar {
  font-size: 0.82rem;
  letter-spacing: 0.05em;
}

/* Role/meta separation */
.title {
  letter-spacing: 0.01em;
}

.metaLine {
  color: rgba(18, 11, 11, 0.62);
  line-height: 1.3;
}

/* Contact legibility */
.contactList a {
  font-size: 0.72rem;
  line-height: 1.3;
}

/* Body and bullets */
.block p {
  font-size: 0.84rem;
  line-height: 1.32;
}

.featureList li,
.experienceList ul li,
.projectList li p,
.miniList li {
  line-height: 1.3;
}

/* Item hierarchy */
.itemHead {
  font-size: 0.94rem;
  line-height: 1.28;
  letter-spacing: 0.01em;
}

.itemMeta {
  font-size: 0.68rem;
  font-weight: 600;
  color: rgba(18, 11, 11, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.projectImpact {
  font-size: 0.68rem;
  line-height: 1.25;
  color: rgba(18, 11, 11, 0.62);
}
```

Minimal TSX changes for semantic hierarchy
- `app/resume/fullscreen/page.tsx`: render Experience and Project item headings as `h3` instead of `p`.
```tsx
<h3 className={styles.itemHead}>
  {item.role} · {item.company}
</h3>

<h3 className={styles.itemHead}>{projectTitleOverrides[item.slug] ?? item.title}</h3>
```

Notes
- These tweaks preserve the comic feel while making the scan path Name → Role → Contact → Experience → Projects more immediate.
