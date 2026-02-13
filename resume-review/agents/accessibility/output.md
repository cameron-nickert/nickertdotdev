# Output


## 2026-02-13 16:27 Accessibility

Accessibility Findings (severity + affected area)
- High: Contact links have no visible focus indicator or underline, reducing keyboard discoverability and link affordance. Affected area: `app/resume/fullscreen/page.module.css` (.contactList a).
- Medium: Skills and interests are rendered with spans/divs instead of lists, so screen readers lose list semantics. Affected area: `app/resume/fullscreen/page.tsx` + `app/resume/fullscreen/page.module.css`.
- Medium: Issue bar subtitle uses a very light color on orange background, risking contrast failure. Affected area: `app/resume/fullscreen/page.module.css` (.issueBar span:nth-child(2)).
- Medium: Print view keeps muted gray metadata and non-underlined links, reducing readability for low-vision users. Affected area: `app/resume/fullscreen/page.module.css` (@media print).

Required fixes vs Nice-to-have
- Required: Add focus-visible + underline styles for contact links; restore list semantics for skills/interests; darken issue bar subtitle; improve print contrast and underline links.
- Nice-to-have: Consider a small print font-size bump for meta text (0.02–0.04rem) if layout allows after print testing.

Exact TSX/CSS edits
- `app/resume/fullscreen/page.tsx`
```tsx
<ul className={styles.skillPills}>
  {group.items.map((item) => (
    <li key={item} className={styles.skillPill}>
      {item}
    </li>
  ))}
</ul>

<ul className={styles.interestCloud}>
  {interests.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>
```
- `app/resume/fullscreen/page.module.css`
```css
.issueBar span:nth-child(2) {
  color: #2b140b;
}

.contactList a:hover,
.contactList a:focus-visible {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

.contactList a:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 2px;
}

.skillPills {
  margin: 0;
  padding: 0;
  list-style: none;
}

.interestCloud {
  margin: 0.06rem 0 0;
  padding: 0;
  list-style: none;
}

.interestCloud li {
  /* existing pill styles */
}

@media print {
  .metaLine,
  .itemMeta,
  .projectImpact,
  .skillsLabel {
    color: #2a2a2a;
  }

  .contactList a {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}
```
