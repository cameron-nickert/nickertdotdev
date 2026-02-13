# Draft Plan — Creative Director

## Creative thesis
A comic-book action story where basketball intensity collides with street-performance car energy, turning a portfolio into a kinetic, scene-by-scene adventure. The site reads like a graphic novel issue: each scroll is a panel cut, each click is a sound effect, and every project is a dramatic set piece. The experience should feel fast, playful, and bold, while remaining readable, accessible, and performant.

Mood words: kinetic, punchy, glossy, gritty, heroic, loud, playful, halftone, turbo, court-lit.

## Creative directions

### Direction A: "Full-Court Horsepower" (Sports action + street racing)
Signature jaw-drop moments:
- Hero splash: the ball arcs across three panels and morphs into a wheel that peels out into the Work section.
- Scroll-triggered "slam": user drags a ball into a hoop to unlock the About panel.
- Work cards launch like a pit-crew jack lifting a car.
Pros: clear thematic blend, easy to map to sections, high energy.
Cons: could feel busy if not disciplined; asset scope moderate.

### Direction B: "Neon Garage Comic" (Night city + glowing panels)
Signature jaw-drop moments:
- Panels light up like neon signs; each project is a glowing "bay door" that rolls open.
- Contact form is a neon fuel gauge; typing fills it.
- Background skyline parallax with streaking light trails.
Pros: stylish, strong visual identity; flexible for minimal assets.
Cons: risk of dark theme; must keep contrast accessible.

### Direction C: "Stickerbook Action" (Collage + pop art)
Signature jaw-drop moments:
- Panels look like stickers slapped on a court/garage collage; drag to reorder mini-panels.
- Tap a panel to hear SFX text pop and "explode" into halftone dots.
- Work section uses "trading cards" with holographic flip.
Pros: playful, reduces drawing complexity; can be modular.
Cons: might feel less cinematic, needs careful motion to feel dynamic.

## Recommended MVP direction
Direction A ("Full-Court Horsepower") with a light touch of Direction C's modular clarity. This is best for a recruiter audience because it communicates credibility fast: the hero scene anchors identity and impact, the timeline reads like a clear issue list, and the work section feels structured like a pit-lane lineup. It delivers standout moments without making navigation feel like a game, and it scales down to mobile with simple panel transitions.

## Prioritized WOW list

Must (6–8)
1) Hero multi-panel splash with ball-to-wheel morph, then clean CTA.
   - 30-second recruiter value: establishes identity + polish; shows taste and execution.
   - Mobile: simplified 2-panel stack with a crossfade morph.
   - Reduced motion: no morph, just a static ball + wheel with a quick fade-in.
   - Complexity: M, Risk: Med.
2) Timeline as "issue list" with clear dates and outcomes.
   - 30-second recruiter value: fast credibility scan (roles, promotions, milestones).
   - Mobile: vertical accordion cards with year labels.
   - Reduced motion: simple expand/collapse, no parallax.
   - Complexity: S, Risk: Low.
3) Work/Projects pit-lane cards with "garage door" reveal.
   - 30-second recruiter value: surfaces project impact at a glance.
   - Mobile: tap to open, no hover states.
   - Reduced motion: instant reveal, no sliding door.
   - Complexity: M, Risk: Med.
4) Resume embed as a comic prop (clipboard/panel) with a direct download link.
   - 30-second recruiter value: easy access to the resume without hunting.
   - Mobile: full-width embed with a sticky "Open Resume" button.
   - Reduced motion: static frame, no bounce.
   - Complexity: S, Risk: Low.
5) Contact "Pit Stop" CTA with bold copy and clear form.
   - 30-second recruiter value: clear next step and direct outreach path.
   - Mobile: single-column, large tap targets.
   - Reduced motion: no form micro-animations.
   - Complexity: S, Risk: Low.
6) HUD-style progress indicator (speedometer or issue tab bar).
   - 30-second recruiter value: clear orientation + content depth.
   - Mobile: compact progress dots in the header.
   - Reduced motion: no animated needle; simple state change.
   - Complexity: M, Risk: Med.

MVP interaction cap: max 8 total MVP WOW moments, and max 1 optional delight per scene.

Should (6–10)
1) Drag ball into hoop to unlock About panel.
2) Ink-smear section wipes to reinforce page transitions.
3) Motion lines that react to scroll speed (subtle).
4) SFX words that pop on click for emphasis.
5) Parallax skyline on hero scene (low intensity).
6) "Issue stamp" headers on each section.
7) Subtle panel tilt on hover for desktop.
8) Sticker slap-in of tool icons in About.

Could (10+)
1) Mini free-throw micro-game Easter egg.
2) Dynamic day/night toggle for background scenes.
3) Trading-card flips for project detail view.
4) Animated halftone dot field that blooms on CTA hover.
5) Character pose swap on scroll milestones.
6) Animated road lines during scroll in Work section.
7) Sound toggle with optional low-volume SFX (off by default).
8) Swipe "page turn" effect on mobile for section transitions.
9) Panel corner peel preview of next section.
10) Scroll-speed adaptive blur trail behind hero elements.
11) "Power meter" fills as user reaches Contact.
12) Audio-less "SFX bubble" typing animation in Contact.

## Transition language
- Panel-to-panel wipes; angled diagonal cuts.
- Smash cuts with SFX stamps and halftone bursts.
- Speed lines during fast scroll; slow scroll = minimal motion.
- Parallax depth for skyline and court floor.
- Ink smear wipes between sections.

## Visual system draft
- Typography vibe: bold display face for headings (comic or sport-inspired), clean geometric sans for body.
- Color palette approach: warm orange + asphalt gray + cream paper base; accent neon teal for highlights.
- Panel grid rules: 12-col base on desktop, modular panels that can tilt 3–6 degrees max.
- SFX usage: 2–3 major SFX words per section max; must be clickable.

## Scene map (content-aligned)

Scene 01 — Home/Hero (Tagline + credibility) — anchor: #scene-hero
- Purpose: immediate identity + proof.
- Content: Name, role, 1-line pitch, 2–3 credibility bullets (ex: scale, years, companies), CTA.

Scene 02 — About/Who I Am (Interests) — anchor: #scene-about
- Purpose: humanize quickly.
- Content: travel, hiking/camping/boating, sports, short values list.

Scene 03 — My Story timeline (Issues/Chapters) — anchor: #scene-story
- Purpose: chronological credibility.
- Content: 2008 → present with key milestones (Roblox 250k+ visits, Ford rotations/promotions, started company, Indeed, Shopify, M.S. SE).

Scene 04 — Work/Projects (Pit Lane) — anchor: #scene-work
- Purpose: show impact.
- Content: 3–6 featured projects with role, impact metric, stack, link(s).

Scene 05 — Resume (Comic prop) — anchor: #scene-resume
- Purpose: fast access to full details.
- Content: Google Drive embed + download/open link.

Scene 06 — Contact (Finale CTA) — anchor: #scene-contact
- Purpose: clear action.
- Content: "You Need Software. I Make Software. Let's Talk!" + form + links.

## Asset brief (per scene + layers)

Naming: scene-0X-[section]-[asset]-v01.ext (e.g., scene-01-hero-bg-v01.svg)

Scene 01 — Hero
- Layers:
  - BG: stylized court + city skyline with speed streaks.
  - Mid: angled comic panels, road lines, halftone dots.
  - FG: Cameron avatar (neutral + excited pose), ball, wheel, CTA badge.
  - FX: motion lines, SFX burst "VROOM" and "SWISH".
  - UI: issue badge, progress HUD.
- Assets:
  - scene-01-hero-bg (SVG)
  - scene-01-hero-panels (SVG)
  - scene-01-hero-avatar-neutral (PNG)
  - scene-01-hero-avatar-excited (PNG)
  - scene-01-hero-ball (SVG)
  - scene-01-hero-wheel (SVG)
  - scene-01-hero-sfx-vroom (SVG)
  - scene-01-hero-sfx-swish (SVG)
  - ui-issue-badge (SVG)
  - ui-hud-speedometer (SVG)

Scene 02 — About/Who I Am
- Layers:
  - BG: locker room + garage wall hybrid.
  - Mid: panel frames, sticker placeholders.
  - FG: interest icons (travel, hiking/camping/boating, sports).
  - FX: subtle halftone overlay.
  - UI: section header stamp.
- Assets:
  - scene-02-about-bg (SVG)
  - scene-02-about-panels (SVG)
  - scene-02-about-icon-travel (SVG)
  - scene-02-about-icon-outdoor (SVG)
  - scene-02-about-icon-sports (SVG)
  - ui-section-stamp (SVG)
  - ui-halftone-overlay (PNG)

Scene 03 — My Story Timeline (Issues)
- Layers:
  - BG: assembly line / court floor gradient.
  - Mid: issue card stack, timeline rail.
  - FG: small Cameron avatar head, key milestone badges.
  - FX: ink smear transitions.
  - UI: year chips.
- Assets:
  - scene-03-story-bg (SVG)
  - scene-03-story-rail (SVG)
  - scene-03-story-issue-card (SVG)
  - scene-03-story-avatar-head (PNG)
  - scene-03-story-badge-roblox (SVG)
  - scene-03-story-badge-company (SVG)
  - ui-year-chip (SVG)

Scene 04 — Work/Projects
- Layers:
  - BG: pit lane / garage bays.
  - Mid: project bay doors and panel frames.
  - FG: project cards (title, impact, stack).
  - FX: motion streaks, subtle exhaust puff.
  - UI: "Read the Issue" CTA badges.
- Assets:
  - scene-04-work-bg (SVG)
  - scene-04-work-bay (SVG)
  - scene-04-work-card (SVG)
  - scene-04-work-cta-badge (SVG)
  - ui-motion-streaks (SVG)

Scene 05 — Resume
- Layers:
  - BG: tabletop or clipboard area.
  - Mid: panel frame with clip.
  - FG: resume embed frame.
  - FX: light paper texture.
  - UI: "Open Resume" button.
- Assets:
  - scene-05-resume-bg (SVG)
  - scene-05-resume-frame (SVG)
  - scene-05-resume-clip (SVG)
  - ui-button-primary (SVG)
  - ui-paper-texture (PNG)

Scene 06 — Contact
- Layers:
  - BG: service bay / pit stop.
  - Mid: gas pump body, road lines.
  - FG: form fields + Cameron avatar "wave" pose.
  - FX: glow around CTA, small SFX pop.
  - UI: social icons, form labels.
- Assets:
  - scene-06-contact-bg (SVG)
  - scene-06-contact-pump (SVG)
  - scene-06-contact-avatar-wave (PNG)
  - scene-06-contact-sfx-lets-talk (SVG)
  - ui-social-icons (SVG)

Character requirements (Cameron avatar variants)
- avatar-neutral, avatar-excited, avatar-dunk, avatar-driver, avatar-wave, avatar-headshot.

Props
- basketball, hoop, scoreboard, car silhouette, road lines, motion streaks, panel borders, speech bubbles, speedometer.

Export guidance
- SVG: panels, borders, icons, SFX words, HUD, motion lines.
- PNG (transparent): character art, halftone textures, paper grain.
- Dimensions: base artboard 1600x900 (desktop), 900x1600 (mobile) for key backgrounds.
- Naming: kebab-case, versioned (e.g., scene-01-hero-bg-v01.svg).

## Delight without confusion rules
- Always show a clear primary CTA in each scene.
- Keep copy readable: avoid text over busy textures; reserve clean panel areas.
- Provide a "Skip Animations" toggle alongside "Reduce Motion" support.
- Progress HUD always visible on desktop; compact on mobile.
- Limit interactive surprises to 1 per scene; everything else is optional.
- Interactions never block scroll or access to content.

## MVP vs V2

MVP:
- Core scenes with 1–2 animated hero transitions.
- Simple panel transitions, no mini-game.
- Minimal parallax and reduced SFX.

V2 (extra wacky):
- Mini free-throw game.
- Advanced SVG morphing and character animation.
- Dynamic day/night toggle.
- Full trading-card effect for work items.
