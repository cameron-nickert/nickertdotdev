# Output

## 2026-02-13 — responsive-print (refresh)

Top responsive/print UX risks (severity-tagged)
- [High] Print margin mismatch: `@page { margin: 0.35in; }` yields a 7.8in x 10.3in printable box, but `.sheet` is sized to 8.0in x 10.5in in print, so edges can clip (border + content). Affected: `@media print` in `app/resume/fullscreen/page.module.css`.
- [Low] Print border + inner outline amplify any edge clipping from the margin mismatch; the clipping is more visible when the border is cut. Affected: `.sheet` + `.sheet::after` in print.

Exact @media updates (minimal side effects)
```css
@media print {
  .sheet {
    width: calc(8.5in - 0.7in);
    height: calc(11in - 0.7in);
  }
}
```

Tradeoffs with desktop comic style
- Print-only size reduction slightly shrinks the comic panels on paper, but keeps all edges intact and preserves the on-screen layout unchanged.
