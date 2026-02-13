# Output


## 2026-02-13 16:26:25 print-qa

Print Failure Risks
- Full-bleed sizing: `.sheet` is set to `8.5in x 11in` with a border; many printers have non-printable margins, so edge clipping is likely.
- Edge artifacts: `.burst*` elements are positioned off-canvas; in print they can create clipped color wedges at the sheet edge.
- Dense backgrounds: multiple gradients/textures (`.sheet::before`, `.header`, `.endcap`) can print muddy and reduce text contrast.
- Small text sizes: 0.66-0.73rem values in print are near legibility limits for long-form body text and links.

Concrete print CSS edits
- Add page sizing and margins to reduce clipping risk:
  - `@page { size: letter; margin: 0.25in; }`
  - Then set `.sheet { width: 8in; height: 10.5in; }` or use `calc(8.5in - 0.5in)` for both dimensions.
- Hide burst shapes in print to avoid edge artifacts:
  - `@media print { .burst { display: none; } }`
- Tone down texture and background images for clearer type:
  - `@media print { .sheet::before { opacity: 0.02; } .header, .endcap { background-image: none; background-color: #fff7e5; } }`
- Bump smallest text to safer print sizes while keeping hierarchy:
  - `@media print { .contactList a { font-size: 0.7rem; } .block p, .featureList li, .experienceList ul li, .projectList li p, .miniList li { font-size: 0.75rem; } .itemMeta { font-size: 0.68rem; } }`

Preflight checklist (5 checks)
- Print to PDF at 100% scale and confirm no clipping on all four edges.
- Verify all text stays legible at arm's length (especially contact links and bullet text).
- Confirm no burst or background texture creates harsh edge artifacts or moire.
- Validate contrast of text against all tinted panels in print preview.
- Ensure header and endcap imagery do not obscure or wash out text.
