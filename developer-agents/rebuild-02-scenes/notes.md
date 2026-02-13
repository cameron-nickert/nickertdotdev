Rebuild Agent R02 notes

Recent updates
- Scene backgrounds now use per-section comic-page images placed in `public/assets/scene-*/scene-*-comic-page.png` and wired via `.scene-panel-bg` classes.
- Section backgrounds are full-width, no drop shadows, with dot/halftone overlay and dulled color (filter: saturate 0.8, brightness 0.92).
- Chapter dividers are angled, full-width bands with speed-lines applied via `speed-lines` class, negative margins for bleed, and thicker bottom borders.
- Horizontal overflow hidden on html/body to prevent rotated dividers from causing scrollbars.
- Footer divider moved into main content; footer content restored to panel style.

Open items / tuning
- Divider angle/bleed and speed-line fill have been iteratively adjusted; continue tuning if edges still clip.
- Divider band color is a lighter orange (#ff8a6a); adjust if needed.
