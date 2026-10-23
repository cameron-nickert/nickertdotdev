"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, type MouseEvent } from "react";

const RETURN_KEY = "nickert-resume-return";
const DURATION = 920;

function makeBook(cover: HTMLAnchorElement, bounds: DOMRect) {
  const backdrop = document.createElement("div");
  backdrop.className = "resume-opening-backdrop";
  backdrop.setAttribute("aria-hidden", "true");

  const book = document.createElement("div");
  book.className = "resume-opening-book";
  book.setAttribute("aria-hidden", "true");
  book.style.left = `${bounds.left}px`;
  book.style.top = `${bounds.top}px`;
  book.style.width = `${bounds.width}px`;
  book.style.height = `${bounds.height}px`;

  const inside = document.createElement("div");
  inside.className = "resume-opening-inside";
  inside.innerHTML = '<span class="resume-opening-kicker">The collected experience · Vol. 01</span><strong>Cameron Nickert.</strong><span>Senior Software Engineer</span><div class="resume-opening-preview"><b>01 / EXPERIENCE</b><span>Shopify · Payments Platform</span><i></i><i></i><b>02 / SELECTED WORK</b><span>Refunds · Orchestration · Reliability</span><i></i><i></i></div><small>Payments · Platforms · Merchant trust</small>';

  const leaf = document.createElement("div");
  leaf.className = "resume-opening-leaf";
  const front = cover.cloneNode(true) as HTMLAnchorElement;
  front.classList.add("resume-opening-front");
  front.removeAttribute("href");
  front.tabIndex = -1;
  const back = document.createElement("div");
  back.className = "resume-opening-back";
  leaf.append(front, back);
  book.append(inside, leaf);

  return { backdrop, book, leaf };
}

function bookDestination(bounds: DOMRect) {
  const scale = Math.min(
    1.45,
    (window.innerWidth - 24) / (bounds.width * 1.9),
    (window.innerHeight - 40) / bounds.height
  );
  const x = window.innerWidth / 2 - bounds.left;
  const y = (window.innerHeight - bounds.height * scale) / 2 - bounds.top;
  return `translate(${x}px, ${y}px) scale(${scale})`;
}

export default function ResumeCoverLink() {
  const coverRef = useRef<HTMLAnchorElement>(null);
  const opening = useRef(false);
  const transitioning = useRef(false);
  const overlay = useRef<{ backdrop: HTMLDivElement; book: HTMLDivElement } | null>(null);
  const transitionTimer = useRef<number | null>(null);
  const returnFrame = useRef<number | null>(null);

  const clearTransition = useCallback(() => {
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    if (returnFrame.current !== null) window.cancelAnimationFrame(returnFrame.current);
    transitionTimer.current = null;
    returnFrame.current = null;
    overlay.current?.backdrop.remove();
    overlay.current?.book.remove();
    overlay.current = null;
    opening.current = false;
    transitioning.current = false;
  }, []);

  const closeResume = useCallback(() => {
    const cover = coverRef.current;
    if (!cover || !cover.isConnected || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clearTransition();
      return;
    }

    let bounds = cover.getBoundingClientRect();
    if (bounds.bottom < 40 || bounds.top > window.innerHeight - 40) {
      const scrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      cover.scrollIntoView({ block: "center", behavior: "auto" });
      document.documentElement.style.scrollBehavior = scrollBehavior;
      bounds = cover.getBoundingClientRect();
    }

    const { backdrop, book, leaf } = makeBook(cover, bounds);
    const destination = bookDestination(bounds);
    backdrop.style.opacity = "0.92";
    book.style.transform = destination;
    leaf.style.transform = "rotateY(-164deg)";
    document.body.append(backdrop, book);
    overlay.current = { backdrop, book };

    backdrop.animate([{ opacity: 0.92 }, { opacity: 0 }], { duration: DURATION, fill: "forwards" });
    book.animate(
      [{ transform: destination }, { transform: "translate(0, 0) scale(1)" }],
      { duration: DURATION, easing: "cubic-bezier(.2,.75,.2,1)", fill: "forwards" }
    );
    leaf.animate(
      [
        { transform: "rotateY(-164deg)" },
        { transform: "rotateY(-96deg)", offset: 0.42 },
        { transform: "rotateY(-12deg)", offset: 0.8 },
        { transform: "rotateY(0deg)" }
      ],
      { duration: DURATION, easing: "cubic-bezier(.5,.06,.2,1)", fill: "forwards" }
    );
    transitionTimer.current = window.setTimeout(clearTransition, DURATION);
  }, [clearTransition]);

  useEffect(() => {
    const restoreCover = () => {
      if (transitioning.current) return;
      clearTransition();
      let openedAt = 0;
      try {
        openedAt = Number(window.sessionStorage.getItem(RETURN_KEY));
        window.sessionStorage.removeItem(RETURN_KEY);
      } catch {
        return;
      }
      if (!openedAt || Date.now() - openedAt > 120_000) return;
      transitioning.current = true;
      returnFrame.current = window.requestAnimationFrame(() => {
        returnFrame.current = window.requestAnimationFrame(() => {
          returnFrame.current = null;
          closeResume();
        });
      });
    };

    restoreCover();
    window.addEventListener("pagehide", clearTransition);
    window.addEventListener("pageshow", restoreCover);
    return () => {
      window.removeEventListener("pagehide", clearTransition);
      window.removeEventListener("pageshow", restoreCover);
      clearTransition();
    };
  }, [clearTransition, closeResume]);

  function openResume(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    event.preventDefault();
    if (opening.current || transitioning.current) return;
    opening.current = true;
    transitioning.current = true;

    const cover = event.currentTarget;
    const bounds = cover.getBoundingClientRect();
    const { backdrop, book, leaf } = makeBook(cover, bounds);
    document.body.append(backdrop, book);
    overlay.current = { backdrop, book };

    backdrop.animate([{ opacity: 0 }, { opacity: 0.92 }], { duration: DURATION, fill: "forwards" });
    book.animate(
      [{ transform: "translate(0, 0) scale(1)" }, { transform: bookDestination(bounds) }],
      { duration: DURATION, easing: "cubic-bezier(.2,.75,.2,1)", fill: "forwards" }
    );
    leaf.animate(
      [
        { transform: "rotateY(0deg)" },
        { transform: "rotateY(-12deg)", offset: 0.2 },
        { transform: "rotateY(-96deg)", offset: 0.58 },
        { transform: "rotateY(-164deg)" }
      ],
      { duration: DURATION, easing: "cubic-bezier(.5,.06,.2,1)", fill: "forwards" }
    );
    transitionTimer.current = window.setTimeout(() => {
      transitionTimer.current = null;
      try { window.sessionStorage.setItem(RETURN_KEY, String(Date.now())); } catch { /* Navigation still works. */ }
      window.location.assign(cover.href);
    }, DURATION);
  }

  return (
    <Link ref={coverRef} href="/resume/fullscreen" className="resume-issue" aria-label="Read Cameron Nickert’s résumé" onClick={openResume}>
      <div className="resume-issue-bar"><span>THE COLLECTED EXPERIENCE</span><span>VOL. 01</span></div>
      <img src="/images/scene-05-resume/resume-cover.png" alt="Comic-book cover for Cameron Nickert’s résumé" loading="lazy" />
      <div className="resume-issue-bottom"><span>Engineer. Builder. Collaborator.</span><strong>Read the résumé <span aria-hidden="true">↗</span></strong></div>
    </Link>
  );
}
