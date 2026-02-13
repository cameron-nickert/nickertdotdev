# Synthesizer Notes

## Conflicts found

1. **Anchor naming mismatch**
   - Agent 01 uses `#scene-*`.
   - Agent 02 uses canonical content anchors: `#home`, `#who-i-am`, `#story`, `#work`, `#resume`, `#contact`.
   - Agent 04 includes `#about` and places `#work` before `#about` in one section.

2. **Section ordering mismatch**
   - Agent 02 final IA places `Who I Am` before `Work` in the global scene order.
   - Some architecture snippets still show `Work` before `Who I Am`.

3. **MVP section wording mismatch in PM docs**
   - Agent 05 uses six sections but names them as `Home, My Story, Work (index), Work (detail), Resume, Contact`, which can hide the explicit `Who I Am` requirement.

4. **Scene nomenclature mismatch**
   - Agent 07 still uses `scene-02-about` wording while other docs use `scene-02-who-i-am`.

## Resolution rationale

1. **Canonical scene order and IDs**
   - Enforced:
     - `scene-01-hero` -> `#home`
     - `scene-02-who-i-am` -> `#who-i-am`
     - `scene-03-story` -> `#story`
     - `scene-04-work` -> `#work`
     - `scene-05-resume` -> `#resume`
     - `scene-06-contact` -> `#contact`
   - This preserves required content clarity and matches the latest UX normalization.

2. **Backward compatibility**
   - Keep `#about` as an optional alias redirect to `#who-i-am` to avoid broken internal links.

3. **MVP scope correction**
   - Master plan explicitly requires six must-have sections plus `/work/[slug]` as a supporting route, not as a substitute for `Who I Am`.

4. **Animation stack lock**
   - Chosen stack: DOM/SVG + WAAPI + light GSAP timelines.
   - No mixed animation paradigms in MVP.

5. **Acceptance criteria source of truth**
   - Agent 06 performance/a11y budgets are treated as final pass/fail guardrails and applied to MUST interactions.
