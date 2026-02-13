# Spacing Rhythm Internal Notes

Status check (post-update)
- Loud blocks now removed on left; overall density improved but spacing values remain highly granular.
- Multiple near-adjacent values still used (0.34/0.36/0.38/0.4/0.42/0.44/0.46/0.5) causing micro jitter.
- The vertical stack is still tight: header 152px + grid padding + left/right gaps + endcap height leaves little slack for any increases.

Spacing inventory (screen)
- Micro: 0.02, 0.03, 0.06, 0.07, 0.08
- Small: 0.12, 0.14, 0.16, 0.18
- Medium: 0.2, 0.22, 0.24
- Panel: 0.28, 0.3, 0.32, 0.34, 0.36, 0.38
- Larger: 0.4, 0.42, 0.44, 0.46, 0.5, 0.64, 0.65, 0.7

Takeaways
- Header/grid paddings can be aligned to a smaller set without affecting layout density.
- Any increase to .grid gap, .left/.right gap, or card padding risks overflow and print clipping.
