/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function useScrollSmooth() {
  const [isScrollSmooth] = useState<boolean>(true);
  const pathname = usePathname();

  useGSAP(() => {
    // Register plugins properly
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Clean up existing smoother immediately on route change
    const existing = ScrollSmoother.get();
    if (existing) {
      existing.kill();
    }

    let smoother: any = null;
    let timerId: any = null;

    const initSmoother = () => {
      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");
      const isParallaxCarousel = pathname === "/parallax-carousel" || pathname === "/dark/parallax-carousel";

      if (smoothWrapper && smoothContent && isScrollSmooth && !isParallaxCarousel) {
        gsap.config({
          nullTargetWarn: false,
        });

        // create the smooth scroller FIRST
        smoother = ScrollSmoother.create({
          wrapper: smoothWrapper,
          content: smoothContent,
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });

        // example ScrollTrigger (you can remove if not needed)
        ScrollTrigger.create({
          trigger: ".shape",
          pin: true,
          start: "center center",
          end: "+=300",
          markers: false,
        });
      }
    };

    // Delay creation to let the DOM settle on route change
    timerId = setTimeout(initSmoother, 100);

    return () => {
      clearTimeout(timerId);
      if (smoother) {
        smoother.kill();
      }
      const finalCheck = ScrollSmoother.get();
      if (finalCheck) {
        finalCheck.kill();
      }
    };
  }, [isScrollSmooth, pathname]);
}

