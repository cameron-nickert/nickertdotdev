# UX Layout Internal Notes

Focus: macro layout composition, column balance, section weight hierarchy, visual rhythm.

Updated observations
- Experience is now the only loud block, but column imbalance remains; left column still feels compressed vs its stack.
- Header is still fixed-height with overflow hidden, which constrains breathing room and risks clipping on long lines.
- Rotations remain on experience/project cards while column wrappers are overflow hidden; this can clip and adds jitter.
- Projects still read close to experience in weight; need a clearer secondary treatment (lighter, flatter, no rotation).
- Issue bar and contact pills still pull attention before the name/role, softening the intended scan path.

Intent
- Improve column balance without altering one-page structure.
- Calm top-of-page competing elements while preserving comic identity.
- Smooth vertical rhythm by reducing rotation noise and weight in secondary panels.
