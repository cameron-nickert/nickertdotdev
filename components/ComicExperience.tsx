"use client";

import { useEffect, useRef, useState } from "react";
import { timelineMilestones } from "@/content/profile";

type StoryMoment = { id: string; label: string; title: string; caption: string; cue: string; image: string; skills?: string[]; year?: string };

const personalMoments: StoryMoment[] = [
  { id: "builder", label: "At work", title: "Built on curiosity.", caption: "I build payment systems for merchants and small businesses, bringing ownership, reliability, and clear communication to the work.", cue: "First, the engineer.", image: "/images/story-origin-v2.webp", skills: ["Systems design & reliability", "Performance & observability", "Technical leadership & mentorship"] },
  { id: "father", label: "Fatherhood", title: "The everyday adventure.", caption: "Building small moments, stories, and routines that matter.", cue: "Then, the moments that matter.", image: "/assets/scene-02-who-i-am/activity-father.png" },
  { id: "hiking", label: "Hiking", title: "Take the scenic route.", caption: "Trail time, fresh perspective, and a little distance from the screen.", cue: "Beyond the next switchback…", image: "/assets/scene-02-who-i-am/activity-hiking.png" },
  { id: "camping", label: "Camping", title: "A different kind of glow.", caption: "A campfire, a quiet night, and nowhere else to be.", cue: "Under a Michigan sky…", image: "/assets/scene-02-who-i-am/activity-camping.png" },
  { id: "boating", label: "Boating", title: "Find a slower current.", caption: "Time on the water. My favorite change of pace.", cue: "Back on the water.", image: "/assets/scene-02-who-i-am/activity-boating.png" },
  { id: "sports", label: "Sports", title: "Always a Detroit fan.", caption: "Year-round conversation. Win or lose, I’m in.", cue: "On game day…", image: "/assets/scene-02-who-i-am/activity-sports.png" },
  { id: "boardgames", label: "Board games", title: "One more round.", caption: "Friendly competition, co-op strategy, and a good tabletop night.", cue: "When the whole crew gets together.", image: "/assets/scene-02-who-i-am/activity-boardgames.png" }
];

const originScenes = [
  { label: "The first spark", cue: "From custom pages to moving parts.", image: "/images/origin/myspace-robotics.webp" },
  { label: "Finding my stride", cue: "From learning to leading.", image: "/images/origin/ford.webp" },
  { label: "Building after hours", cue: "Keep learning. Keep making.", image: "/images/origin/studio.webp" },
  { label: "Building trust", cue: "Every connection starts with trust.", image: "/images/origin/identity.webp" },
  { label: "Making it matter", cue: "Real systems. Real people.", image: "/images/origin/commerce.webp" }
];
const originMoments: StoryMoment[] = timelineMilestones.map((milestone, index) => ({
  ...originScenes[index], id: milestone.id, year: milestone.year,
  title: milestone.title, caption: milestone.detail
}));

export function ComicOrigin() {
  return <ComicMoments origin />;
}

export function ComicMoments({ origin = false }: { origin?: boolean }) {
  const moments = origin ? originMoments : personalMoments;
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const steps = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const narrow = window.matchMedia("(max-width: 767px)");
    const update = () => {
      frame = 0;
      if (!root.current || !stage.current) return;
      const bounds = root.current.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      // Follow ordinary page scrolling: no wheel interception or forced snapping.
      const stageBounds = stage.current.getBoundingClientRect();
      // Lead the next paragraph by 80px once pinned, keeping the first scene on entry.
      const sceneLead = Math.min(80, Math.max(0, stageBounds.top - bounds.top));
      const probe = narrow.matches
        ? Math.min(window.innerHeight - 60, stageBounds.bottom + 85 + sceneLead)
        : Math.max(92, stageBounds.top) + Math.min(window.innerHeight * 0.2, 180) + sceneLead;
      let closest = 0;
      let distance = Infinity;
      steps.current.forEach((step, index) => {
        if (!step) return;
        const box = step.getBoundingClientRect();
        const delta = Math.abs(box.top + Math.min(box.height / 2, 110) - probe);
        if (delta < distance) { closest = index; distance = delta; }
      });
      setActive(closest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(schedule);
    if (root.current) resize.observe(root.current);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className={`scroll-story${origin ? " origin-scroll" : ""}`} ref={root}>
      <div className="scroll-story-stage" ref={stage} aria-hidden="true">
        <div className="scroll-story-frames">
          {moments.map((moment, index) => (
            <div key={moment.id} className={`scroll-story-frame scroll-frame-${moment.id}`} data-active={active === index}>
              <img src={moment.image} alt="" loading="lazy" width={1264} height={848} />
              <p className="scroll-story-cue">{moment.cue}</p>
            </div>
          ))}
          <div className="scroll-story-caption">
            <span>{String(active + 1).padStart(2, "0")} / {String(moments.length).padStart(2, "0")}</span>
            <strong>{moments[active].label}</strong>
          </div>
        </div>
        <div className="scroll-story-meter">
          <span>{origin ? `${moments[active].year} · Keep scrolling through the years` : "Scroll to change the scene"} <b>↓</b></span>
          <div style={{ gridTemplateColumns: `repeat(${moments.length}, 1fr)` }}>{moments.map((moment, index) => <i key={moment.id} data-active={active === index} />)}</div>
        </div>
      </div>
      <div className="scroll-story-copy" aria-label={origin ? "Career milestones" : "The person behind the work"}>
        {moments.map((moment, index) => (
          <article key={moment.id} ref={(element) => { steps.current[index] = element; }} className="scroll-story-step" data-active={active === index}>
            <span className="scroll-step-label">{String(index + 1).padStart(2, "0")} / {moment.year ?? moment.label}</span>
            <h3>{moment.title}</h3>
            <p>{moment.caption}</p>
            {moment.skills && <ul>{moment.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>}
          </article>
        ))}
      </div>
    </div>
  );
}

export function ComicReader() {
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState("01 — The introduction");
  const [chapterIndex, setChapterIndex] = useState(0);
  const chapterIds = ["home", "resume", "who-i-am", "story", "work", "contact"];

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".immersive-comic");
    if (!root) return;
    root.dataset.motionPaused = String(paused);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: fine)");
    const scenes = Array.from(root.querySelectorAll<HTMLElement>("[data-nav-section]"));
    const names = ["The introduction", "The collected experience", "The person behind the work", "The origin story", "The work", "Your next chapter"];
    const panels = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (!paused && !reduce.matches) entry.target.classList.add("comic-enter");
        panels.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    root.querySelectorAll(".chapter-card, .timeline-item, .work-card, .panel-resume-intro, .panel-contact-intro").forEach((panel) => panels.observe(panel));
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    function update() {
      frame = 0;
      if (!root) return;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
      let index = 0;
      scenes.forEach((scene, i) => { if (scene.getBoundingClientRect().top < window.innerHeight * 0.45) index = i; });
      setChapter(`0${index + 1} — ${names[index]}`);
      setChapterIndex(index);
      const canMove = !paused && !reduce.matches;
      root.style.setProperty("--pointer-x", canMove ? `${pointerX}px` : "0px");
      root.style.setProperty("--pointer-y", canMove ? `${pointerY}px` : "0px");
      root.style.setProperty("--cover-shift", canMove ? `${Math.min(window.scrollY * 0.18, 180)}px` : "0px");
    }
    function schedule() { if (!frame) frame = window.requestAnimationFrame(update); }
    function move(event: PointerEvent) {
      if (!pointer.matches || paused || reduce.matches) return;
      pointerX = (event.clientX / window.innerWidth - 0.5) * 18;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 12;
      schedule();
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pointermove", move, { passive: true });
    reduce.addEventListener("change", schedule);
    return () => {
      panels.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointermove", move);
      reduce.removeEventListener("change", schedule);
    };
  }, [paused]);

  return <aside className="comic-reader" aria-label="Comic reading controls">
    <span className="reader-issue">CN / ISSUE 01</span>
    <nav className="reader-navigation" aria-label="Read chapter by chapter">
      <a href={`#${chapterIds[Math.max(0, chapterIndex - 1)]}`} aria-label="Previous chapter" aria-disabled={chapterIndex === 0} tabIndex={chapterIndex === 0 ? -1 : 0}>←</a>
      <span className="reader-chapter">{chapter}</span>
      <a href={`#${chapterIds[Math.min(chapterIds.length - 1, chapterIndex + 1)]}`} aria-label="Next chapter" aria-disabled={chapterIndex === chapterIds.length - 1} tabIndex={chapterIndex === chapterIds.length - 1 ? -1 : 0}>→</a>
    </nav>
    <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Resume motion" : "Pause motion"}</button>
    <div className="reader-progress" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}><span style={{ transform: `scaleX(${progress})` }} /></div>
  </aside>;
}
