Requested motion assets (FX + sprites + layered SVGs)

1) FX overlay textures (transparent PNG)
- Size: 2048x2048
- Color space: sRGB, 8-bit
- Variants:
  - Halftone dot cloud (medium density, soft edges)
  - Speed-line streaks (diagonal, comic-book style)
  - Grain sparkle (tiny stars + dust)
- Must tile seamlessly

2) SFX sprite sheets (transparent PNG)
- Burst pop v2
  - 16 frames total
  - Grid: 4 columns x 4 rows
  - Sheet size: 1024x1024 (each frame 256x256)
  - Target playback: 12 fps
- Impact thump v2
  - 12 frames total
  - Grid: 6 columns x 2 rows
  - Sheet size: 1200x400 (each frame 200x200)
  - Target playback: 12 fps
- Optional: sparkle ping
  - 10 frames total
  - Grid: 5 columns x 2 rows
  - Sheet size: 1000x400 (each frame 200x200)
  - Target playback: 10 fps

3) Layered SVGs (animation-ready)
- Each SVG should use grouped layers with clear ids (no raster)
- Provide 3-5 layers per scene:
  - scene-01-hero: bg-orb, bg-grid, mid-glow, fg-accent, fx-grain
  - scene-02-who: bg-halo, mid-threads, fg-card, fx-spark
  - scene-03-story: art-panel, accent-stamp, timeline-flourish
  - scene-04-work: boss-badge, spotlight, card-burst
  - scene-05-resume: frame, stamp, paper-tear
  - scene-06-contact: signal-beam, contact-badge, flare
- ViewBox: 0 0 1200 800
- Stroke widths >= 2px and expanded paths for consistent scaling
- Deliver: individual SVGs per scene and a combined sprite sheet (optional)
