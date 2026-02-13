# Proposed Repo Structure

```
/app
  /(site)
    layout.tsx
    page.tsx                # Home (scene scroller)
    about/page.tsx          # Optional redirect to /#about
    story/page.tsx          # Optional redirect to /#story
    work/page.tsx           # Optional redirect to /#work
    work/[slug]/page.tsx
    resume/page.tsx         # Optional redirect to /#resume
    contact/page.tsx        # Optional redirect to /#contact
  api/
  globals.css
/scenes
  home/
    HeroScene.tsx
    AboutScene.tsx
    StoryScene.tsx
    WorkScene.tsx
    ContactScene.tsx
  timeline/
    TimelineScene.tsx
/components
  layout/
    AppShell.tsx
    SiteNav.tsx
    Footer.tsx
  ui/
    MotionToggle.tsx
    SkipAnimation.tsx
    LowPowerToggle.tsx
    SceneProgress.tsx
  work/
    CaseHero.tsx
    CaseSummary.tsx
    CaseImpact.tsx
    CaseRole.tsx
    CaseTechStack.tsx
    CaseGallery.tsx
    CaseChallenges.tsx
    CaseLinks.tsx
    CaseNav.tsx
/lib
  scenes/
    SceneRoot.tsx
    SceneBoundary.tsx
    sceneRegistry.ts
  motion/
    useReducedMotion.ts
    useScrollModel.ts
    useViewport.ts
  flags/
    featureFlags.ts
    useFeatureFlags.ts
  metrics/
    perfBudgets.ts
    lighthouse.config.js
/content
  projects/
    project-a.mdx
    project-b.mdx
    project-c.mdx
  projects.ts            # index + typed schema
/public/assets
  /img
    case-hero-project-a.jpg
    case-panel-01.jpg
  /video
    case-demo-project-a.mp4
```

## Naming conventions
- Use kebab-case for asset files: `case-hero-project-a.jpg`.
- Prefer descriptive prefixes: `case-`, `scene-`, `thumb-`.
- Keep `content/projects.ts` as the single index of all projects.
