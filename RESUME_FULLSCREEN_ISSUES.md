# Fullscreen Resume Review: Issues and Fixes

This document captures the current visual/content issues observed in the `/resume/fullscreen` design and concrete ways to address each one.

## 1) Excessive Empty Space in Lower Half

### Problem
- The lower half of the page has large unused blank regions after content cards end.
- The page feels unfinished and under-utilizes printable real estate.

### How to address
- Add more high-value content blocks (optional mini sections):
  - Certifications / speaking / awards
  - Notable stack achievements
  - Selected metrics by role
- Let lower sections expand intentionally:
  - Increase `projectList` card content by one concise impact line.
  - Add a short `Leadership & Mentoring` block.
- Reduce rigid compression where content feels squeezed at top while bottom stays empty.
- Keep a strict one-page target by:
  - Maintaining compact bullet length.
  - Avoiding verbose summaries.

---

## 2) Header Crowding and Horizontal Compression

### Problem
- Name/title/meta and contact pills are compressed into a shallow top strip.
- Contact stack competes with identity text.

### How to address
- Rebalance header columns:
  - Give identity block more width.
  - Reduce contact block visual weight.
- Slightly increase header height only if text clipping/scanning suffers.
- Convert contact pills from decorative to utility style:
  - Lower rotation and shadow.
  - Keep readability over flair.

---

## 3) Portrait Still Reads Too Small

### Problem
- Portrait is now vertical but still scans as a small thumbnail relative to page scale.

### How to address
- Increase portrait size using a real portrait ratio (e.g. 4:5 or 3:4).
- Keep crop focused on eyes/face with `object-position`.
- Ensure portrait size increases without forcing header bloat:
  - Prefer column-width adjustments over only adding header height.

---

## 4) Contact Badges Are Hard to Scan

### Problem
- Contact text is tiny and stylized with rotation/shadow.
- Utility information should be clear first, decorative second.

### How to address
- Increase contact text size slightly.
- Normalize rotation to near-zero values.
- Reduce shadow contrast.
- Keep borders for comic style but simplify visual effects.

---

## 5) Inconsistent Section Rhythm

### Problem
- Dense/heavy card stacks at top and sparse lower layout create abrupt pacing.
- Vertical rhythm is inconsistent between sections.

### How to address
- Normalize spacing tokens:
  - Card-to-card gap
  - Internal card padding
  - Heading-to-body spacing
- Keep left and right columns visually synchronized:
  - Similar vertical cadence
  - Balanced breakpoints between major blocks

---

## 6) Experience Card Too Dense

### Problem
- Experience entries are compact and text-heavy, reducing scan speed.

### How to address
- Use shorter bullets with one impact per line.
- Tighten but clarify typography hierarchy:
  - Role/company (strongest)
  - Timeframe (secondary)
  - Bullets (tertiary)
- Maintain enough line-height for easy reading.

---

## 7) Bottom-Half Left/Right Imbalance

### Problem
- Left side ends up visually lighter while right side appears structurally heavier.

### How to address
- Slightly increase right-column width only if it improves density balance.
- Add one compact left-column block near lower half (if needed).
- Ensure both columns finish with similar visual weight.

---

## 8) Typography Hierarchy Needs More Separation

### Problem
- Some metadata, bullets, and descriptions are too close in size.
- Primary vs secondary information is less obvious at a glance.

### How to address
- Widen size contrast:
  - Name and section headings: clearly dominant
  - Meta and helper text: clearly smaller
- Keep consistent weights by semantic role across all sections.

---

## 9) Skyline/Header Art Feels Clipped

### Problem
- Background skyline can feel accidentally cropped instead of intentionally composed.

### How to address
- Tune `background-size` and `background-position` for a deliberate framing line.
- Verify composition at both desktop and print scale.
- Avoid decorative dominance that harms text contrast.

---

## 10) Comic Energy Is Front-Loaded

### Problem
- Most visual personality is in header/top cards; lower page feels flatter.

### How to address
- Carry subtle comic motifs deeper:
  - Light accent treatments on one or two lower blocks
  - Gentle shape/texture continuity
- Avoid over-stylizing utility content.
- Preserve professional readability while keeping personality.

---

## Implementation Priorities

1. Fix information architecture and readability first:
   - Header hierarchy
   - Typography contrast
   - Experience scanability
2. Fix layout balance second:
   - Lower-half whitespace
   - Left/right visual weight
3. Polish style third:
   - Skyline framing
   - Decorative consistency
   - Contact badge refinement

## Validation Checklist

- Desktop screenshot at full page: no large dead zones.
- 8.5x11 print preview: no clipping and readable type.
- First 5-second scan test:
  - Name/title instantly legible
  - Contact quickly discoverable
  - Experience and projects easy to skim
