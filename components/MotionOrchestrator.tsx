"use client";

import { useEffect } from "react";
import {
  createSceneMotion,
  useMotionSettings,
  wireReactiveOverlays,
  wireSfxTriggers
} from "@/lib/motion";

export default function MotionOrchestrator() {
  const settings = useMotionSettings();

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));

    const controllerByScene = new Map<
      HTMLElement,
      { play: () => void; pause: () => void; cleanup: () => void }
    >();
    const visibleScenes = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scene = entry.target as HTMLElement;
          let controller = controllerByScene.get(scene);
          if (!controller) {
            controller = createSceneMotion({ root: scene, settings });
            controllerByScene.set(scene, controller);
          }

          if (entry.isIntersecting) {
            visibleScenes.add(scene);
            controller.play();
          } else {
            visibleScenes.delete(scene);
            controller.pause();
          }
        });
      },
      {
        rootMargin: "25% 0px -10% 0px",
        threshold: 0.05
      }
    );

    scenes.forEach((scene) => observer.observe(scene));

    const cleanupSfx = wireSfxTriggers({ root: document, settings });
    const cleanupOverlays = wireReactiveOverlays({ root: document, settings });

    const handleVisibility = () => {
      if (document.hidden) {
        controllerByScene.forEach((controller) => controller.pause());
      } else {
        visibleScenes.forEach((scene) => controllerByScene.get(scene)?.play());
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      controllerByScene.forEach((controller) => controller.cleanup());
      cleanupSfx();
      cleanupOverlays();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [settings]);

  return null;
}
