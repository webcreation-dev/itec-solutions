"use client";
import { initFadeReveal, initScrollScaleUp } from "@/hooks";
import { animationConfig } from "@/config/animationConfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        // Delay animation until DOM fully rendered + hydrated
        const runAnimations = () => {
            // Global animations
            initFadeReveal();
            initScrollScaleUp();

            //Route-based animations
            Object.entries(animationConfig).forEach(([route, animations]) => {
                if (pathname === route || pathname.startsWith(`${route}/`)) {
                    animations.forEach((fn) => fn());
                }
            });

            //Refresh ScrollTrigger
            ScrollTrigger.refresh();
        };

        // Run with a delay to ensure route DOM is mounted and ScrollSmoother is created
        const timerId = setTimeout(runAnimations, 200);

        return () => {
            clearTimeout(timerId);
            //kill all scroll triggers before rerun
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [pathname]);

    return <>{children}</>;
};

export default AnimationWrapper;