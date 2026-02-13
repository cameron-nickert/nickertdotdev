"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export default function FullscreenResumeLayout({
  children
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("resume-fullscreen-mode");

    return () => {
      document.body.classList.remove("resume-fullscreen-mode");
    };
  }, []);

  return children;
}
