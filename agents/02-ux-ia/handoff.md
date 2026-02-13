# UX/IA Handoff

Final sitemap + nav model
- Single-page anchored scenes + project detail pages.
- Persistent HUD: Issue label + progress dots + Jump menu.
- Nav labels: Home / Who I Am / My Story / Work / Resume / Contact.
- Anchors: #home, #who-i-am, #story, #work, #resume, #contact.

30-second flow
- Above fold: name, title, tagline; credibility chips (Shopify, Indeed, Ford, M.S.); primary Contact CTA; secondary Resume CTA.
- 1 featured project teaser sits immediately below CTAs (desktop) or within first scroll (mobile).

2-minute flow
- Home -> Work -> project detail -> outcomes + artifacts -> My Story -> Resume -> Contact.

Condensed / reduced-motion UX rules
- Toggle in HUD: "Condensed mode" and "Skip animations".
- Auto-enable condensed mode for prefers-reduced-motion.
- Disable scroll-snap/parallax; flatten panels into a clean list with clear headings.
- Preserve linear tab order and remove any auto-advance behaviors.

Top 5 UX risks + mitigations
1) Scene visuals overpower IA -> keep text nav, clear headings, and summaries in every scene.
2) Motion causes disorientation -> condensed mode default for reduced motion + visible toggles.
3) Recruiter can't find contact fast -> Contact CTA always visible + footer contact strip.
4) Timeline too dense -> 6-8 highlight cards with one-line descriptions + optional expand.
5) Project credibility unclear -> each card shows outcome, role, and stack upfront.
