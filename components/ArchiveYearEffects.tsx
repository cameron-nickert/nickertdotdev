"use client";

import { useEffect } from "react";

export default function ArchiveYearEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dividers = document.querySelectorAll<HTMLElement>(".work-all-year-divider");
    const timers = new Map<HTMLElement, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const divider = entry.target as HTMLElement;
          if (!entry.isIntersecting) {
            divider.dataset.inView = "false";
            continue;
          }
          if (divider.dataset.inView === "true") continue;
          divider.dataset.inView = "true";
          divider.dataset.burst = "false";
          requestAnimationFrame(() => { divider.dataset.burst = "true"; });
          window.clearTimeout(timers.get(divider));
          timers.set(divider, window.setTimeout(() => { divider.dataset.burst = "false"; }, 1100));
        }
      },
      { rootMargin: "-15% 0px -35% 0px", threshold: 0.1 }
    );
    dividers.forEach((divider) => observer.observe(divider));
    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}
