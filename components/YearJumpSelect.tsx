"use client";

import { useEffect, useState } from "react";

type YearSection = {
  year: string;
  id: string;
};

type YearJumpSelectProps = {
  sections: YearSection[];
};

export default function YearJumpSelect({ sections }: YearJumpSelectProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    const updateActive = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const probeY = (header?.offsetHeight ?? 0) + 32;

      let nextId = sections[0]?.id ?? "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= probeY) {
          nextId = section.id;
        } else {
          break;
        }
      }

      setActiveId((current) => (current === nextId ? current : nextId));
    };

    let frame = 0;
    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateActive();
        frame = 0;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  const onSelectYear = (targetId: string) => {
    setActiveId(targetId);
    const element = document.getElementById(targetId);
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({
      block: "start",
      behavior: reduceMotion ? "instant" : "smooth"
    });
  };

  if (!sections.length) {
    return null;
  }

  return (
    <div className="work-all-year-jump-wrap">
      <div className="work-all-year-jump" aria-label="Jump to project year">
        <label className="work-all-year-jump-label" htmlFor="work-all-year-jump-select">
          Jump to year
        </label>
        <select
          id="work-all-year-jump-select"
          className="work-all-year-jump-select"
          value={activeId}
          onChange={(event) => onSelectYear(event.target.value)}
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
