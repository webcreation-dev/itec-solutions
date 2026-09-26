"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CreativeDetailsHero from "./details-creative/CreativeDetailsHero";
import CreativeDetailsOverview from "./details-creative/CreativeDetailsOverview";
import CreativeDetailsGallery from "./details-creative/CreativeDetailsGallery";
import CreativeDetailsPinned from "./details-creative/CreativeDetailsPinned";
import CreativeDetailsGalleryTwo from "./details-creative/CreativeDetailsGalleryTwo";
import CreativeDetailsNavigation from "./details-creative/CreativeDetailsNavigation";
import CreativeDetailsFooter from "./details-creative/CreativeDetailsFooter";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PortfolioDetailsCreative = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (typeof window === "undefined" || !containerRef.current) return;

        const mm = gsap.matchMedia();
        mm.add("(min-width: 1200px)", () => {
            const wrapElements = containerRef.current?.querySelectorAll(".tp-pd-3-portfolio-item-wrap");
            wrapElements?.forEach((group) => {
                const panels = group.querySelectorAll(".tp-pd-3-portfolio-item");
                const pinTarget = group.querySelector(".tp-pd-3-content-pin");
                
                if (pinTarget) {
                    panels.forEach((section) => {
                        ScrollTrigger.create({
                            trigger: section,
                            pin: pinTarget,
                            start: "top 20%",
                            end: "bottom center",
                            scrub: 1,
                            pinSpacing: false,
                            markers: false,
                        });
                    });
                }
            });
        });

        return () => {
            mm.revert();
        };
    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <CreativeDetailsHero />
            <CreativeDetailsOverview />
            <CreativeDetailsGallery />
            <CreativeDetailsPinned />
            <CreativeDetailsGalleryTwo />
            <CreativeDetailsNavigation />
            <CreativeDetailsFooter />
        </div>
    );
};

export default PortfolioDetailsCreative;
