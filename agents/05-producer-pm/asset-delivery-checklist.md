# Asset Delivery Checklist

## Week 1: Style Frames + System
- Required asset IDs (scene + layer):
  - global/style-frame-A/background
  - global/style-frame-A/texture-halftone
  - global/style-frame-A/sfx-typography
  - global/palette-swatches/colors
  - global/typography/wordmark-placeholder
- Definition of ready:
  - Format: PNG or SVG as appropriate.
  - Dimensions: 2400px wide min for raster; SVG for line art.
  - Background: transparent when layered; solid ok for background plates.
  - Naming: `scene-layer-variant.ext` (ASCII only).
- Depends on:
  - Style guide lock, layout grid, and motion language framing.

## Week 2: Scene 01 (Home/Hero)
- Required asset IDs (scene + layer):
  - home/hero/character-driver-hooper
  - home/hero/ball-to-wheel-sequence-01..03
  - home/hero/panel-gutters
  - home/hero/action-lines
  - home/hero/halftone-overlay
  - home/hero/sfx-vroom
- Definition of ready:
  - Format: SVG for line art; PNG for textures.
  - Dimensions: 2800px wide min for hero art; 2x scale for retina.
  - Background: transparent for characters/props; separate background plate.
  - Naming: `home-hero-layername.ext`.
- Depends on:
  - Hero wow moment, animatic, navigation shell integration.

## Week 3: Navigation + Scene 02 (My Story)
- Required asset IDs (scene + layer):
  - global/nav/comic-tab-bar
  - my-story/character-portrait
  - my-story/panel-background
  - my-story/texture-halftone
  - my-story/sfx-whoosh
- Definition of ready:
  - Format: SVG for UI; PNG for textures.
  - Dimensions: nav elements at 2x target size.
  - Background: transparent for UI elements.
  - Naming: `my-story-layername.ext` and `global-nav-layername.ext`.
- Depends on:
  - My Story scene layout; nav animation prototype.

## Week 4: Scene 03 (Work Index) + Scene 04 (Work Detail)
- Required asset IDs (scene + layer):
  - work/locker-wall/background
  - work/project-card/frame
  - work/props/toolbox
  - work/sfx-clank
  - work/texture-halftone
  - work/project-thumbnails/thumb-01..06
  - work-detail/hero/scene-header
  - work-detail/frames/case-study-panel
  - work-detail/texture-halftone
- Definition of ready:
  - Format: PNG for textures/thumbs; SVG for frames.
  - Dimensions: thumbs 1200px wide min; 2x for retina.
  - Background: transparent for frames/props.
  - Naming: `work-project-thumb-01.ext` etc.
- Depends on:
  - Work grid reveal; /work and /work/[slug] content build.

## Week 5: Scene 05 (Resume) + Scene 06 (Contact)
- Required asset IDs (scene + layer):
  - resume/section/header-banner
  - resume/section/timeline-frame
  - contact/pitstop/pump
  - contact/pitstop/nozzle-handle
  - contact/pitstop/background
  - contact/sfx-skrrrt
  - contact/texture-halftone
- Definition of ready:
  - Format: SVG for pump/handle; PNG for textures.
  - Dimensions: 2000px wide min for primary illustration.
  - Background: transparent for interactive parts.
  - Naming: `resume-layername.ext` and `contact-pitstop-layername.ext`.
- Depends on:
  - Resume section layout; contact form micro-interaction and layout polish.

## Week 6: Easter Egg + Global Polish
- Required asset IDs (scene + layer):
  - global/easter-egg/traffic-cone
  - global/easter-egg/impact-burst
  - global/sfx-pop
  - global/texture-noise
- Definition of ready:
  - Format: SVG for cone/burst; PNG for noise.
  - Dimensions: 1200px wide min for interactive elements.
  - Background: transparent for interactive parts.
  - Naming: `global-easter-egg-layername.ext`.
- Depends on:
  - Easter egg micro-interaction; final motion polish.

## Week 7: Reduced Motion + Fallbacks
- Required asset IDs (scene + layer):
  - global/reduced-motion/hero-static
  - global/reduced-motion/panel-static
  - global/reduced-motion/sfx-static
- Definition of ready:
  - Format: PNG for static composites; SVG for text.
  - Dimensions: match primary art at 2x.
  - Background: as needed for static composites.
  - Naming: `global-reduced-motion-layername.ext`.
- Depends on:
  - Reduced motion mode and accessibility checks.

## Week 8: Final Delivery + Launch
- Required asset IDs (scene + layer):
  - global/og/og-image
  - global/og/social-card
  - global/favicon-set/primary
- Definition of ready:
  - Format: PNG/JPG for OG; SVG/PNG for favicon.
  - Dimensions: OG 1200x630; favicon multiple sizes.
  - Background: solid.
  - Naming: `global-og-image.ext`, `favicon-32.png` etc.
- Depends on:
  - Launch checklist and metadata polish.
