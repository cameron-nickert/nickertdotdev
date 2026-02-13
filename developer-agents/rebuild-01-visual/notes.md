Rebuild R01 notes

- Comic tokens + primitives live in `app/globals.css` (ink/paper palette, textures, heavy stroke/shadow).
- Intensity tiers are `tier-1` (mobile), `tier-2` default, `tier-3` optional; Wacky toggle sets `data-intensity` in `components/SiteHeader.tsx`.
- Hero portrait replaced with latest asset at `public/assets/scene-01-hero/portrait-cameron.png`.
- Resume section now uses a comic cover image + modal preview; read button is an image with SFX burst and pulse.
- Contact section split into left/right columns; signal flare button overlays the contact form and prefills the textarea.
- Activity toggle now switches between off-duty and on-duty grids without layout jump (grids stacked + opacity swap).
- Added new off-duty cards (Father, Board games) and removed Travel card.
- Removed boss-level/recap filler panels and burst-badge styling.

Open items to verify
- Confirm the resume read button hover + SFX burst feels right.
- Validate contact form overlay button placement on small screens.
- Check activity grid columns at 1280px+ (3 columns), 768px+ (2), below (1).
