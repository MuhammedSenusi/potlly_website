"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal, done once for the whole page instead of per-component state.
 *
 * The hiding rule lives behind `html.js-reveal`, which is only added here — so
 * without JS, or with `prefers-reduced-motion`, every section renders visible
 * from the first paint and nothing is ever stranded off-screen.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    root.classList.add("js-reveal");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    for (const el of targets) {
      // Anything already on screen at load reveals immediately, no flash.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("is-revealed");
      } else {
        io.observe(el);
      }
    }

    return () => {
      io.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
