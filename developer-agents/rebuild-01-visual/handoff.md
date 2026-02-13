Handoff - Rebuild R01

What changed since last handoff
- Contact section now has left/right columns and an overlayed "Activate template" button that prefills the form.
- Resume cover image + read icon are used; modal preview stays and read button has SFX burst + pulse.
- Activity toggle swaps between off-duty and on-duty grids without causing layout jumps.
- Removed boss-level and recap filler panels and burst-badge styling.

Current asset mappings
- `public/assets/scene-01-hero/portrait-cameron.png`
- `public/assets/scene-02-who-i-am/activity-father.png`
- `public/assets/scene-02-who-i-am/activity-boardgames.png`
- `public/images/scene-05-resume/resume-cover.png`
- `public/images/scene-05-resume/resume-read.png`

Key files touched
- `app/page.tsx`
- `app/globals.css`
- `components/SignalFlareButton.tsx`
- `components/SiteHeader.tsx`
- `components/WorkCard.tsx`
- `app/work/[slug]/page.tsx`

Follow-ups
- Verify SFX hover trigger on resume read button in all browsers.
- Check contact form overlay button placement on narrow screens.
