# Internal Notes


## 2026-02-13 16:26:25 print-qa
- Checked print media rules in `app/resume/fullscreen/page.module.css` for letter sizing, clipping risk, and legibility.
- Key risks: sheet sized to full 8.5x11in with border may clip on printers with margins; burst shapes and heavy backgrounds can print as edge artifacts; smallest text (0.66-0.73rem) may be too small in print.
- Potential print optimizations: add `@page` size/margins, hide bursts, reduce/strip background images and halftone opacity in print, slightly bump critical text sizes.
