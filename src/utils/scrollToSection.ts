"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (
  target: string | Element | number,
  duration: number = 1
): void => {
  if (typeof window === "undefined") return;

  let scrollTarget: string | Element | number = target;

  // string selector
  if (typeof target === "string") {
    const el = document.querySelector(target);
    if (!el) return; // prevent error
    scrollTarget = el;
  }

  gsap.to(window, {
    duration,
    scrollTo: scrollTarget,
    ease: "power2.out",
  });
};