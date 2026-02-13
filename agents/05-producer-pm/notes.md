# Producer / PM Notes

## Assumptions
- Solo dev + AI assistance; asset creation done by user.
- Core sections: Home, About, Work, Contact.
- Comic issue framing with scene-based navigation and motion.
- Performance and accessibility are non-negotiable (reduced motion, mobile).
- Target deploy can be static or Next.js; stack is flexible.

## Dependencies
- Visual direction and style guide locked early (palette, type, texture).
- Asset list and naming pipeline (panels, SFX, characters, props).
- Motion language and scene choreography reference (animatic/prototype).
- Content inventory (projects, bio, CTA copy) before layout polish.

## Risk thinking
- Scope creep from too many scenes or unique assets; must reuse.
- Animation complexity can inflate dev time and hurt performance.
- Asset pipeline delays block integration and testing.
- Mobile UX could suffer if panels are too dense or interactions too small.
- QA time must include reduced motion, low-end devices, and scroll edge cases.
