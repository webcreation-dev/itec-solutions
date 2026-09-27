"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const useScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToPageStart = () => {
      const smoother = ScrollSmoother.get();

      if (smoother) {
        smoother.scrollTop(0);
      }

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // ScrollSmoother is recreated just after a navigation. Run once now and
    // once after it is ready so links clicked from the footer land at the top.
    scrollToPageStart();
    const animationFrame = requestAnimationFrame(scrollToPageStart);
    const timer = window.setTimeout(scrollToPageStart, 160);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(timer);
    };
  }, [pathname]);
};

export default useScrollToTop;
