"use client";

import { useEffect, useState } from "react";

export type MotionSettings = {
  reducedMotion: boolean;
  lowPowerMode: boolean;
  condensedMode: boolean;
  performanceTier: MotionPerformanceTier;
  wackyMode: boolean;
};

export type MotionPerformanceTier = "full" | "lite" | "minimal";

type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
};

type NavigatorPerformance = {
  deviceMemory?: number;
  hardwareConcurrency?: number;
};

const DEFAULT_SETTINGS: MotionSettings = {
  reducedMotion: false,
  lowPowerMode: false,
  condensedMode: false,
  performanceTier: "full",
  wackyMode: false
};

const isLowPowerConnection = () => {
  if (typeof navigator === "undefined") {
    return false;
  }

  const connection = (navigator as Navigator & { connection?: NavigatorConnection })
    .connection;
  const saveData = connection?.saveData ?? false;
  const effectiveType = connection?.effectiveType ?? "";

  return saveData || effectiveType === "2g" || effectiveType === "slow-2g";
};

const readWackyMode = () => {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.dataset.wacky === "extra";
};

const getPerformanceTier = (): MotionPerformanceTier => {
  if (typeof navigator === "undefined") {
    return "full";
  }

  const { deviceMemory, hardwareConcurrency } = navigator as Navigator & NavigatorPerformance;
  const memory = typeof deviceMemory === "number" ? deviceMemory : 8;
  const cores = typeof hardwareConcurrency === "number" ? hardwareConcurrency : 8;

  if (memory <= 2 || cores <= 2) {
    return "minimal";
  }

  if (memory <= 4 || cores <= 4) {
    return "lite";
  }

  return "full";
};

export const useMotionSettings = (): MotionSettings => {
  const [settings, setSettings] = useState<MotionSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dataQuery = window.matchMedia("(prefers-reduced-data: reduce)");

    const readDensity = () =>
      document.documentElement.dataset.density === "condensed";

    let forcedTier: MotionPerformanceTier | null = null;
    let longTaskCount = 0;
    let longTaskTimer: number | undefined;

    const update = () => {
      const performanceTier = forcedTier ?? getPerformanceTier();
      document.documentElement.dataset.motionPerformance = performanceTier;

      setSettings({
        reducedMotion: motionQuery.matches,
        lowPowerMode: dataQuery.matches || isLowPowerConnection(),
        condensedMode: readDensity(),
        performanceTier,
        wackyMode: readWackyMode()
      });
    };

    update();

    motionQuery.addEventListener("change", update);
    dataQuery.addEventListener("change", update);

    const connection = (navigator as Navigator & { connection?: NavigatorConnection })
      .connection;

    connection?.addEventListener?.("change", update);

    const densityObserver = new MutationObserver(update);
    densityObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-density", "data-wacky"]
    });

    let performanceObserver: PerformanceObserver | null = null;
    if ("PerformanceObserver" in window) {
      const supported = PerformanceObserver.supportedEntryTypes ?? [];
      if (!supported.includes("longtask")) {
        return () => {
          motionQuery.removeEventListener("change", update);
          dataQuery.removeEventListener("change", update);
          connection?.removeEventListener?.("change", update);
          densityObserver.disconnect();
        };
      }
      performanceObserver = new PerformanceObserver((list) => {
        if (!list.getEntries().length) {
          return;
        }

        longTaskCount += list.getEntries().length;
        if (!longTaskTimer) {
          longTaskTimer = window.setTimeout(() => {
            longTaskCount = 0;
            longTaskTimer = undefined;
          }, 7000);
        }

        if (longTaskCount >= 2 && forcedTier !== "lite") {
          forcedTier = "lite";
          update();
        }
        if (longTaskCount >= 4 && forcedTier !== "minimal") {
          forcedTier = "minimal";
          update();
        }
      });
      performanceObserver.observe({ type: "longtask", buffered: true });
    }

    return () => {
      motionQuery.removeEventListener("change", update);
      dataQuery.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
      densityObserver.disconnect();
      performanceObserver?.disconnect();
      if (longTaskTimer) {
        window.clearTimeout(longTaskTimer);
      }
    };
  }, []);

  return settings;
};

type SceneMotionOptions = {
  root: HTMLElement;
  settings: MotionSettings;
};

export const createSceneMotion = ({ root, settings }: SceneMotionOptions) => {
  const performanceTier = settings.performanceTier;
  const reduceMotion =
    settings.reducedMotion || settings.lowPowerMode || performanceTier === "minimal";
  const limitMotion = settings.lowPowerMode || performanceTier !== "full";
  const wackyMode = settings.wackyMode && !reduceMotion && performanceTier === "full";
  const baseDistance = settings.condensedMode ? 8 : 14;
  const baseDuration = settings.condensedMode ? 360 : 520;
  const staggerStep = reduceMotion ? 55 : settings.condensedMode ? 90 : 130;
  const wackyBoost = wackyMode ? 1.35 : 1;
  const revealLimit =
    performanceTier === "minimal" ? 6 : performanceTier === "lite" ? 12 : 999;

  const applyWillChange = (item: HTMLElement) => {
    item.style.willChange = "transform, opacity";
  };

  const clearWillChange = (item: HTMLElement) => {
    item.style.willChange = "";
  };

  const limitTargets = (targets: HTMLElement[]) => targets.slice(0, revealLimit);

  const animateRevealTargets = (targets: HTMLElement[], stagger = false) => {
    if (!targets.length) {
      return [] as Animation[];
    }

    return limitTargets(targets).map((item, index) => {
      applyWillChange(item);
      const tilt = wackyMode ? (Math.random() * 6 - 3) : -1.2;
      const keyframes = reduceMotion
        ? [
            { opacity: 0.6, transform: "translate3d(0, 0, 0) scale(0.985)" },
            { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }
          ]
        : [
            {
              opacity: 0,
              transform: `translate3d(0, ${baseDistance + 6}px, 0) scale(0.92) rotate(${tilt}deg)`
            },
            {
              opacity: 1,
              transform: `translate3d(0, -${8 * wackyBoost}px, 0) scale(1.06) rotate(${
                tilt * -0.6
              }deg)`
            },
            {
              opacity: 1,
              transform: "translate3d(0, 2px, 0) scale(0.99) rotate(-0.3deg)"
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)"
            }
          ];

      const animation = item.animate(keyframes, {
        duration: reduceMotion ? 240 : baseDuration + 260,
        delay: stagger ? index * staggerStep : 0,
        easing: reduceMotion ? "ease-out" : "cubic-bezier(0.18, 0.95, 0.22, 1.18)",
        fill: "both"
      });

      animation.finished.finally(() => clearWillChange(item));
      return animation;
    });
  };

  const animateImpactTargets = (targets: HTMLElement[]) => {
    if (!targets.length) {
      return [] as Animation[];
    }

    return limitTargets(targets).map((item, index) => {
      applyWillChange(item);
      const wobble = wackyMode ? 1.2 : 0.6;
      const keyframes = reduceMotion
        ? [
            { opacity: 0.85, transform: "translate3d(0, 0, 0) scale(0.99)" },
            { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }
          ]
        : [
            {
              opacity: 0,
              transform: `translate3d(0, ${10 * wobble}px, 0) scale(0.9) rotate(${
                -2.5 * wobble
              }deg)`
            },
            {
              opacity: 1,
              transform: `translate3d(0, -${8 * wobble}px, 0) scale(1.08) rotate(${
                2.4 * wobble
              }deg)`
            },
            {
              opacity: 1,
              transform: `translate3d(0, ${4 * wobble}px, 0) scale(0.98) rotate(${
                -1.8 * wobble
              }deg)`
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)"
            }
          ];

      const animation = item.animate(keyframes, {
        duration: reduceMotion ? 260 : 640,
        delay: index * 90,
        easing: reduceMotion ? "ease-out" : "cubic-bezier(0.18, 1.2, 0.35, 1)",
        fill: "both"
      });

      animation.finished.finally(() => clearWillChange(item));
      return animation;
    });
  };

  const staggerContainers = Array.from(
    root.querySelectorAll<HTMLElement>("[data-motion='stagger']")
  );
  const staggerChildren = new Set<HTMLElement>();
  const staggerGroups = staggerContainers.map((container) => {
    let targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-motion='reveal']")
    );
    if (!targets.length) {
      targets = Array.from(container.children) as HTMLElement[];
    }

    targets.forEach((target) => staggerChildren.add(target));
    return targets;
  });

  const revealTargets = Array.from(
    root.querySelectorAll<HTMLElement>("[data-motion='reveal'], [data-motion='item']")
  ).filter((target) => !staggerChildren.has(target));

  const impactTargets = Array.from(
    root.querySelectorAll<HTMLElement>("[data-impact='true'], .impact-frame")
  );

  const floatTargets = Array.from(
    root.querySelectorAll<HTMLElement>("[data-motion='float']")
  );

  let revealAnimations: Animation[] = [];
  let floatAnimations: Animation[] = [];
  let sceneAnimations: Animation[] = [];
  let surpriseAnimations: Animation[] = [];
  let revealPlayed = false;
  let surprisePlayed = false;

  if (!reduceMotion && floatTargets.length && !limitMotion) {
    const floatDistance = settings.condensedMode ? 8 : 14;
    const floatDuration = settings.condensedMode ? 2200 : 2800;
    floatAnimations = floatTargets.map((target) => {
      const drift = wackyMode ? Math.random() * 6 - 3 : Math.random() * 3 - 1.5;
      const animation = target.animate(
        [
          { transform: "translate3d(0, 0, 0) rotate(-0.3deg)" },
          {
            transform: `translate3d(${drift}px, -${floatDistance}px, 0) rotate(${
              0.4 * wackyBoost
            }deg)`
          }
        ],
        {
          duration: floatDuration + Math.abs(drift) * 40,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
      animation.pause();
      return animation;
    });
  }

  const sceneId = root.dataset.scene ?? "";

  const addSceneAnimation = (
    element: HTMLElement | null,
    keyframes: Keyframe[],
    options: KeyframeAnimationOptions
  ) => {
    if (!element) {
      return;
    }
    const animation = element.animate(keyframes, {
      ...options,
      fill: "both"
    });
    animation.pause();
    sceneAnimations.push(animation);
  };

  if (!reduceMotion && !limitMotion) {
    if (sceneId === "scene-01-hero") {
      addSceneAnimation(
        root.querySelector<HTMLElement>(".hero-bg-orb"),
        [
          { transform: "translate3d(0, 0, 0) scale(1)" },
          { transform: `translate3d(${18 * wackyBoost}px, -14px, 0) scale(1.05)` }
        ],
        {
          duration: 9000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
      addSceneAnimation(
        root.querySelector<HTMLElement>(".hero-bg-grid"),
        [
          { transform: "rotate(0deg) scale(1)" },
          { transform: `rotate(${wackyMode ? 2.5 : 1.2}deg) scale(1.02)` }
        ],
        {
          duration: 11000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
      addSceneAnimation(
        root.querySelector<HTMLElement>(".hero-fg-accent"),
        [
          { transform: "rotate(-8deg) translate3d(0, 0, 0)" },
          { transform: `rotate(${wackyMode ? -2 : -4}deg) translate3d(0, -10px, 0)` }
        ],
        {
          duration: 5200,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    }

    if (sceneId === "scene-02-who-i-am") {
      addSceneAnimation(
        root.querySelector<HTMLElement>(".who-bg-halo"),
        [
          { transform: "translate3d(0, 0, 0) scale(1)" },
          { transform: `translate3d(12px, 18px, 0) scale(1.06)` }
        ],
        {
          duration: 10000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
      addSceneAnimation(
        root.querySelector<HTMLElement>(".who-fg-card"),
        [
          { transform: "rotate(6deg) translate3d(0, 0, 0)" },
          { transform: `rotate(${wackyMode ? 11 : 8}deg) translate3d(0, -12px, 0)` }
        ],
        {
          duration: 4600,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    }
  }

  const runSurpriseBeats = () => {
    if (surprisePlayed) {
      return;
    }
    surprisePlayed = true;

    const allowSurprise = !reduceMotion;
    if (!allowSurprise) {
      return;
    }

    const addSurprise = (
      element: HTMLElement | null,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions
    ) => {
      if (!element) {
        return;
      }
      const animation = element.animate(keyframes, options);
      surpriseAnimations.push(animation);
    };

    if (sceneId === "scene-01-hero") {
      addSurprise(
        root.querySelector<HTMLElement>(".headline"),
        [
          { transform: "translate3d(0, 0, 0) scale(1)" },
          { transform: `translate3d(0, -6px, 0) scale(${1.03 * wackyBoost})` },
          { transform: "translate3d(0, 0, 0) scale(1)" }
        ],
        {
          duration: 520,
          delay: 220,
          easing: "cubic-bezier(0.2, 1.1, 0.3, 1)"
        }
      );
    }

    if (sceneId === "scene-03-story") {
      const marker = root.querySelector<HTMLElement>(".timeline-marker");
      addSurprise(
        marker,
        [
          { transform: "scale(1)" },
          { transform: `scale(${1.3 * wackyBoost})` },
          { transform: "scale(1)" }
        ],
        {
          duration: 480,
          delay: 280,
          easing: "cubic-bezier(0.18, 1.2, 0.3, 1)"
        }
      );
    }

    if (sceneId === "scene-04-work") {
      const card = root.querySelector<HTMLElement>(".work-card");
      addSurprise(
        card,
        [
          { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          { transform: `translate3d(0, -8px, 0) rotate(${wackyMode ? 2.4 : 1}deg)` },
          { transform: "translate3d(0, 0, 0) rotate(0deg)" }
        ],
        {
          duration: 560,
          delay: 240,
          easing: "cubic-bezier(0.2, 1.1, 0.3, 1)"
        }
      );
    }

    if (sceneId === "scene-05-resume") {
      addSurprise(
        root.querySelector<HTMLElement>(".resume-embed-wrap"),
        [
          { transform: "scale(1)" },
          { transform: `scale(${1.02 * wackyBoost})` },
          { transform: "scale(1)" }
        ],
        {
          duration: 420,
          delay: 260,
          easing: "ease-out"
        }
      );
    }

    if (sceneId === "scene-06-contact") {
      addSurprise(
        root.querySelector<HTMLElement>(".contact-card"),
        [
          { transform: "translate3d(0, 0, 0) scale(1)" },
          { transform: `translate3d(0, -6px, 0) scale(${1.02 * wackyBoost})` },
          { transform: "translate3d(0, 0, 0) scale(1)" }
        ],
        {
          duration: 520,
          delay: 220,
          easing: "cubic-bezier(0.2, 1.1, 0.3, 1)"
        }
      );
    }
  };

  const play = () => {
    if (!revealPlayed) {
      revealPlayed = true;
      revealAnimations = [
        ...animateRevealTargets(revealTargets),
        ...staggerGroups.flatMap((group) => animateRevealTargets(group, true)),
        ...animateImpactTargets(impactTargets)
      ];
      runSurpriseBeats();
    }
    floatAnimations.forEach((animation) => animation.play());
    sceneAnimations.forEach((animation) => animation.play());
  };

  const pause = () => {
    floatAnimations.forEach((animation) => animation.pause());
    sceneAnimations.forEach((animation) => animation.pause());
  };

  const cleanup = () => {
    revealAnimations.forEach((animation) => animation.cancel());
    floatAnimations.forEach((animation) => animation.cancel());
    sceneAnimations.forEach((animation) => animation.cancel());
    surpriseAnimations.forEach((animation) => animation.cancel());
  };

  return { play, pause, cleanup };
};

type SfxTriggerOptions = {
  root: ParentNode;
  settings: MotionSettings;
};

export const wireSfxTriggers = ({ root, settings }: SfxTriggerOptions) => {
  const triggers = Array.from(
    root.querySelectorAll<HTMLElement>("[data-sfx-trigger], a, button")
  );

  if (!triggers.length) {
    return () => {};
  }

  const lastPlayed = new WeakMap<HTMLElement, number>();
  const lastBurstFrame = new WeakMap<HTMLElement, number>();
  const emitters = new WeakMap<HTMLElement, number>();
  const hideTimers = new WeakMap<HTMLElement, number>();

  const ensureSfxElement = (trigger: HTMLElement): HTMLElement => {
    const existing = trigger.querySelector<HTMLElement>("[data-sfx]");
    if (existing) {
      return existing;
    }

    const sfxEl = document.createElement("span");
    sfxEl.className = "sfx-pop";
    sfxEl.setAttribute("aria-hidden", "true");
    sfxEl.dataset.sfx = "BURST";
    sfxEl.dataset.sfxAsset = "burst";
    sfxEl.dataset.sfxFrames = "12";
    sfxEl.dataset.sfxFps = "12";
    sfxEl.dataset.sfxCols = "4";
    sfxEl.dataset.sfxRows = "3";

    const burstSprite = document.createElement("span");
    burstSprite.className = "sfx-burst";
    burstSprite.setAttribute("aria-hidden", "true");
    sfxEl.append(burstSprite);
    trigger.append(sfxEl);

    return sfxEl;
  };

  const spawnBurstBubble = (trigger: HTMLElement, sfxEl: HTMLElement) => {
    const frames = Number(sfxEl.dataset.sfxFrames ?? 12);
    let cols = Number(sfxEl.dataset.sfxCols ?? frames);
    let rows = Number(sfxEl.dataset.sfxRows ?? 1);

    if (!Number.isFinite(cols) || cols <= 0) {
      cols = frames;
    }
    if (!Number.isFinite(rows) || rows <= 0) {
      rows = 1;
    }
    if (cols * rows < frames) {
      cols = frames;
      rows = 1;
    }

    let randomIndex = Math.floor(Math.random() * Math.max(1, frames));
    const previousIndex = lastBurstFrame.get(sfxEl);
    if (typeof previousIndex === "number" && frames > 1 && randomIndex === previousIndex) {
      randomIndex = (randomIndex + 1) % frames;
    }
    lastBurstFrame.set(sfxEl, randomIndex);

    const col = cols > 0 ? randomIndex % cols : 0;
    const row = cols > 0 ? Math.floor(randomIndex / cols) : 0;
    const xStep = cols > 1 ? 100 / (cols - 1) : 0;
    const yStep = rows > 1 ? 100 / (rows - 1) : 0;

    const burstBubble = document.createElement("span");
    burstBubble.className = "sfx-pop sfx-pop-bubble";
    burstBubble.setAttribute("aria-hidden", "true");
    burstBubble.dataset.sfxAsset = "burst";
    burstBubble.dataset.sfxPlaying = "true";
    burstBubble.style.setProperty("--sfx-burst-cols", String(cols));
    burstBubble.style.setProperty("--sfx-burst-rows", String(rows));
    burstBubble.style.setProperty("--sfx-burst-pos-x", `${xStep * col}%`);
    burstBubble.style.setProperty("--sfx-burst-pos-y", `${yStep * row}%`);

    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 44;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius - 4;
    const sizeRem = 3.6 + Math.random() * 2.8;
    burstBubble.style.left = `calc(50% + ${offsetX.toFixed(1)}px)`;
    burstBubble.style.top = `calc(50% + ${offsetY.toFixed(1)}px)`;
    burstBubble.style.transform = "translate3d(-50%, -50%, 0)";
    burstBubble.style.setProperty("--sfx-burst-size", `${sizeRem.toFixed(2)}rem`);

    const burstSprite = document.createElement("span");
    burstSprite.className = "sfx-burst";
    burstSprite.setAttribute("aria-hidden", "true");
    burstBubble.append(burstSprite);
    trigger.append(burstBubble);

    const lifetimeMs = 3000;
    burstBubble.animate(
      [
        { opacity: 0, transform: "translate3d(-50%, -50%, 0) scale(0.4)" },
        { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" },
        { opacity: 0.8, transform: "translate3d(-50%, -50%, 0) scale(1.02)" },
        { opacity: 0, transform: "translate3d(-50%, -50%, 0) scale(0.95)" }
      ],
      {
        duration: lifetimeMs,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );

    window.setTimeout(() => {
      burstBubble.remove();
    }, lifetimeMs + 80);
  };

  const runSfx = (trigger: HTMLElement) => {
    const sfxEl = ensureSfxElement(trigger);

    const now = performance.now();
    const last = lastPlayed.get(sfxEl) ?? 0;
    if (now - last < 350) {
      return;
    }
    lastPlayed.set(sfxEl, now);

    const reduceMotion =
      settings.reducedMotion ||
      settings.lowPowerMode ||
      settings.performanceTier === "minimal";
    const allowBurst = !reduceMotion;
    const previousTimer = hideTimers.get(sfxEl);
    if (previousTimer) {
      window.clearTimeout(previousTimer);
    }

    const burst = sfxEl.querySelector<HTMLElement>(".sfx-burst");
    const burstDurationMs = burst ? 3000 : reduceMotion ? 240 : 520;
    if (burst && allowBurst) {
      spawnBurstBubble(trigger, sfxEl);
      return;
    }

    sfxEl.dataset.sfxPlaying = "true";
    const hideTimer = window.setTimeout(() => {
      delete sfxEl.dataset.sfxPlaying;
    }, burstDurationMs);
    hideTimers.set(sfxEl, hideTimer);
  };

  const teardown = triggers.map((trigger) => {
    const startEmitter = () => {
      runSfx(trigger);

      if (emitters.has(trigger)) {
        return;
      }

      const emitterTimer = window.setInterval(() => {
        if (!trigger.matches(":hover")) {
          return;
        }
        runSfx(trigger);
      }, 260);
      emitters.set(trigger, emitterTimer);
    };

    const stopEmitter = () => {
      const emitterTimer = emitters.get(trigger);
      if (emitterTimer) {
        window.clearInterval(emitterTimer);
        emitters.delete(trigger);
      }
    };

    trigger.addEventListener("pointerenter", startEmitter);
    trigger.addEventListener("pointerdown", startEmitter);
    trigger.addEventListener("focus", startEmitter);
    trigger.addEventListener("pointerleave", stopEmitter);
    trigger.addEventListener("blur", stopEmitter);

    return () => {
      stopEmitter();
      trigger.removeEventListener("pointerenter", startEmitter);
      trigger.removeEventListener("pointerdown", startEmitter);
      trigger.removeEventListener("focus", startEmitter);
      trigger.removeEventListener("pointerleave", stopEmitter);
      trigger.removeEventListener("blur", stopEmitter);
    };
  });

  return () => {
    teardown.forEach((fn) => fn());
    triggers.forEach((trigger) => {
      trigger.querySelectorAll(".sfx-pop-bubble").forEach((bubble) => bubble.remove());
      const sfxEl = trigger.querySelector<HTMLElement>("[data-sfx]");
      if (sfxEl) {
        const hideTimer = hideTimers.get(sfxEl);
        if (hideTimer) {
          window.clearTimeout(hideTimer);
        }
      }
    });
  };
};

type ReactiveOverlayOptions = {
  root: ParentNode;
  settings: MotionSettings;
};

export const wireReactiveOverlays = ({ root, settings }: ReactiveOverlayOptions) => {
  const targets = Array.from(
    root.querySelectorAll<HTMLElement>(
      "[data-reactive], .panel, .comic-panel, .activity-card, .work-card"
    )
  );

  if (!targets.length) {
    return () => {};
  }

  const lastPlayed = new WeakMap<HTMLElement, number>();
  const activeAnimations = new WeakMap<HTMLElement, Animation[]>();

  const ensureOverlay = (
    target: HTMLElement,
    type: "overlay" | "ring"
  ): HTMLElement => {
    const selector = type === "overlay" ? "[data-reactive-overlay]" : "[data-reactive-ring]";
    let element = target.querySelector<HTMLElement>(selector);
    if (!element) {
      element = document.createElement("span");
      element.className = type === "overlay" ? "reactive-overlay" : "reactive-ring";
      element.setAttribute(type === "overlay" ? "data-reactive-overlay" : "data-reactive-ring", "");
      element.setAttribute("aria-hidden", "true");
      target.prepend(element);
    }
    return element;
  };

  const runOverlay = (target: HTMLElement) => {
    const overlay = ensureOverlay(target, "overlay");
    const ring = ensureOverlay(target, "ring");

    const now = performance.now();
    const last = lastPlayed.get(target) ?? 0;
    if (now - last < 400) {
      return;
    }
    lastPlayed.set(target, now);

    activeAnimations.get(target)?.forEach((animation) => animation.cancel());

    const reduceMotion =
      settings.reducedMotion ||
      settings.lowPowerMode ||
      settings.performanceTier === "minimal";
    const wackyMode = settings.wackyMode && !reduceMotion && settings.performanceTier === "full";
    const duration = reduceMotion ? 260 : settings.condensedMode ? 420 : 620;
    const tilt = wackyMode ? Math.random() * 18 - 9 : Math.random() * 8 - 4;
    const offsetX = wackyMode ? Math.random() * 22 - 11 : Math.random() * 12 - 6;

    const animations: Animation[] = [];

    if (overlay) {
      const overlayFrames = reduceMotion
        ? [
            { opacity: 0, transform: "translate3d(0, 0, 0) scale(0.98)" },
            { opacity: 0.5, transform: "translate3d(0, 0, 0) scale(1)" },
            { opacity: 0, transform: "translate3d(0, 0, 0) scale(1.02)" }
          ]
        : [
            {
              opacity: 0,
              transform: "translate3d(-16%, 12%, 0) rotate(-6deg) scale(0.9)"
            },
            {
              opacity: 0.85,
              transform: `translate3d(${offsetX}%, -8%, 0) rotate(${tilt}deg) scale(1.05)`
            },
            {
              opacity: 0,
              transform: `translate3d(${offsetX + 12}%, -30%, 0) rotate(${
                tilt * -0.6
              }deg) scale(1.08)`
            }
          ];

      animations.push(
        overlay.animate(overlayFrames, {
          duration,
          easing: reduceMotion ? "ease-out" : "cubic-bezier(0.2, 1.05, 0.3, 1)",
          fill: "both"
        })
      );
    }

    if (ring) {
      const ringFrames = reduceMotion
        ? [
            { opacity: 0, transform: "scale(0.96)" },
            { opacity: 0.4, transform: "scale(1)" },
            { opacity: 0, transform: "scale(1.04)" }
          ]
        : [
            { opacity: 0, transform: "scale(0.88) rotate(0deg)" },
            { opacity: 0.5, transform: `scale(1) rotate(${tilt * 0.2}deg)` },
            { opacity: 0, transform: `scale(1.12) rotate(${tilt * -0.4}deg)` }
          ];

      animations.push(
        ring.animate(ringFrames, {
          duration: duration + 120,
          easing: reduceMotion ? "ease-out" : "cubic-bezier(0.2, 1, 0.3, 1)",
          fill: "both"
        })
      );
    }

    activeAnimations.set(target, animations);
  };

  const teardown = targets.map((target) => {
    const handler = () => runOverlay(target);
    target.addEventListener("pointerenter", handler);
    target.addEventListener("pointerdown", handler);
    target.addEventListener("focus", handler);

    return () => {
      target.removeEventListener("pointerenter", handler);
      target.removeEventListener("pointerdown", handler);
      target.removeEventListener("focus", handler);
    };
  });

  return () => {
    teardown.forEach((fn) => fn());
    targets.forEach((target) => {
      activeAnimations.get(target)?.forEach((animation) => animation.cancel());
    });
  };
};
