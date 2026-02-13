# Internal Notes — Responsive & Print UX (Refresh)

Scope focus
- <=1100px behavior (single-column)
- Print composition quality, clipping risk, legibility, transform artifacts

What changed since last pass
- Rotations removed at <=1100px and in print for cards/pills.
- Contact links now wrap at <=1100px.
- Print has @page margin and texture reductions.

Remaining risks (draft)
- Print margin mismatch: @page margin is 0.35in, but `.sheet` width/height are based on 0.25in margins (8.0in x 10.5in). This exceeds the printable content box (7.8in x 10.3in) and will clip edges on many printers.
- Print still uses a border + inset outline; with the margin mismatch, clipped edges will be more visible.

Proposed minimal update
- Align `.sheet` width/height to the 0.35in margin: use `calc(8.5in - 0.7in)` and `calc(11in - 0.7in)` in @media print.

Tradeoffs
- Slightly smaller printed content; safer edges and reduced clipping risk.
