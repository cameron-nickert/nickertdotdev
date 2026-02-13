"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", href: "/#home", label: "Home" },
  { id: "who-i-am", href: "/#who-i-am", label: "Who I Am" },
  { id: "story", href: "/#story", label: "Story" },
  { id: "work", href: "/#work", label: "Work" },
  { id: "resume", href: "/#resume", label: "Resume" },
  { id: "contact", href: "/#contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeId, setActiveId] = useState<string | null>(navItems[0]?.id ?? "home");

  useEffect(() => {
    if (isHomePage) {
      return;
    }

    setActiveId(null);

    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      history.replaceState(null, "", cleanUrl);
    }
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const aliasMap: Record<string, string> = {
      "#about": "#who-i-am",
      "#scene-01-hero": "#home",
      "#scene-02-who-i-am": "#who-i-am",
      "#scene-03-story": "#story",
      "#scene-04-work": "#work",
      "#scene-05-resume": "#resume",
      "#scene-06-contact": "#contact"
    };

    const syncHash = () => {
      const currentHash = window.location.hash;
      const aliasHash = aliasMap[currentHash];

      if (aliasHash) {
        history.replaceState(null, "", aliasHash);
        const aliasTarget = document.getElementById(aliasHash.replace("#", ""));
        if (aliasTarget) {
          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
          aliasTarget.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start"
          });
        }
      }

      const resolvedHash = aliasHash ?? currentHash;
      const resolvedId = resolvedHash.replace("#", "");
      if (resolvedId && navItems.some((item) => item.id === resolvedId)) {
        setActiveId(resolvedId);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return undefined;
    }

    let frame = 0;
    const updateActiveSection = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const headerOffset = (header?.offsetHeight ?? 0) + 24;
      const scrollProbeY = window.scrollY + headerOffset;

      let nextId = sections[0]?.id ?? "home";
      for (const section of sections) {
        if (section.offsetTop <= scrollProbeY) {
          nextId = section.id;
        } else {
          break;
        }
      }

      const nextHash = `#${nextId}`;
      if (window.location.hash !== nextHash) {
        history.replaceState(null, "", nextHash);
      }

      setActiveId((current) => (current === nextId ? current : nextId));
      frame = 0;
    };

    const onScrollOrResize = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [isHomePage]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/#home">
          nickert.dev
        </Link>
        <div className="header-actions">
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="nav-link"
                    href={item.href}
                    data-active={activeId === item.id ? "true" : "false"}
                    aria-current={activeId === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
