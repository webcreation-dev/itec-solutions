"use client";

import React, { useRef } from "react";
import { SmartLink } from "@/components/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Observer);
}

interface SlideItem {
    id: number;
    title: string;
    img: string;
    bigImg: string;
    link: string;
}

const sliderData: SlideItem[] = [
    {
        id: 1,
        title: "Branding",
        img: "/assets/img/portfolio/swipe-gallery/thumb.jpg",
        bigImg: "/assets/img/portfolio/swipe-gallery/thumb-big.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 2,
        title: "Design",
        img: "/assets/img/portfolio/swipe-gallery/thumb-2.jpg",
        bigImg: "/assets/img/portfolio/swipe-gallery/thumb-big-2.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 3,
        title: "Agency",
        img: "/assets/img/portfolio/swipe-gallery/thumb-3.jpg",
        bigImg: "/assets/img/portfolio/swipe-gallery/thumb-big-3.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 4,
        title: "Website",
        img: "/assets/img/portfolio/swipe-gallery/thumb-4.jpg",
        bigImg: "/assets/img/portfolio/swipe-gallery/thumb-big-4.jpg",
        link: "/portfolio-details-creative",
    },
];
const PortfolioSwipeGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animatingRef = useRef(false);
    const currentIndexRef = useRef(0);

    useGSAP(() => {
        if (!containerRef.current) return;

        const sections = gsap.utils.toArray<HTMLElement>(".slide", containerRef.current);
        const images = gsap.utils.toArray<HTMLElement>(".image", containerRef.current).reverse();
        const slideImages = gsap.utils.toArray<HTMLElement>(".slide__img", containerRef.current);
        const outerWrappers = gsap.utils.toArray<HTMLElement>(".slide__outer", containerRef.current);
        const innerWrappers = gsap.utils.toArray<HTMLElement>(".slide__inner", containerRef.current);
        const countEl = containerRef.current.querySelector(".count");

        if (!sections.length) return;

        const wrap = gsap.utils.wrap(0, sections.length);

        // Set initial states
        gsap.set(outerWrappers, { xPercent: 100 });
        gsap.set(innerWrappers, { xPercent: -100 });

        const firstOuter = sections[0].querySelector(".slide__outer");
        const firstInner = sections[0].querySelector(".slide__inner");
        if (firstOuter) gsap.set(firstOuter, { xPercent: 0 });
        if (firstInner) gsap.set(firstInner, { xPercent: 0 });

        // Set initial visibility/zIndex matching HTML template defaults
        gsap.set(sections, { zIndex: 0, autoAlpha: 0 });
        gsap.set(images, { zIndex: 0, autoAlpha: 0 });
        gsap.set(sections[0], { zIndex: 1, autoAlpha: 1 });
        gsap.set(images[0], { zIndex: 1, autoAlpha: 1 });

        function gotoSection(index: number, direction: number) {
            if (animatingRef.current) return;
            animatingRef.current = true;
            const targetIndex = wrap(index);

            const tl = gsap.timeline({
                defaults: { duration: 1, ease: "expo.inOut" },
                onComplete: () => {
                    animatingRef.current = false;
                }
            });

            const currentIdx = currentIndexRef.current;
            const currentSection = sections[currentIdx];
            const heading = currentSection?.querySelector(".slide__heading");
            const nextSection = sections[targetIndex];
            const nextHeading = nextSection?.querySelector(".slide__heading");

            // Update z-index and visibility
            gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
            gsap.set([sections[currentIdx], images[targetIndex]], { zIndex: 1, autoAlpha: 1 });
            gsap.set([sections[targetIndex], images[currentIdx]], { zIndex: 2, autoAlpha: 1 });

            // Safely update slide counter text content inside timeline callback
            tl.call(() => {
                if (countEl) countEl.textContent = (targetIndex + 1).toString();
            }, [], 0.32)
                .fromTo(
                    outerWrappers[targetIndex],
                    { xPercent: 100 * direction },
                    { xPercent: 0 },
                    0
                )
                .fromTo(
                    innerWrappers[targetIndex],
                    { xPercent: -100 * direction },
                    { xPercent: 0 },
                    0
                )
                .to(
                    heading,
                    {
                        scaleX: 2,
                        xPercent: 20 * direction,
                        duration: 1
                    },
                    0
                )
                .fromTo(
                    nextHeading,
                    { scaleX: 2, xPercent: -10 * direction },
                    { scaleX: 1, xPercent: 0, duration: 1 },
                    0
                )
                .fromTo(
                    images[targetIndex],
                    { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
                    { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
                    0
                )
                .fromTo(
                    images[currentIdx],
                    { xPercent: 0, scaleX: 1, scaleY: 1 },
                    { xPercent: -125 * direction, scaleX: 1.5, scaleY: 1.3 },
                    0
                )
                .fromTo(
                    slideImages[targetIndex],
                    { scale: 2 },
                    { scale: 1 },
                    0
                )
                .timeScale(0.8);

            currentIndexRef.current = targetIndex;
        }

        // Initialize GSAP Observer
        const obs = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            preventDefault: true,
            wheelSpeed: -1,
            onUp: () => {
                if (!animatingRef.current) gotoSection(currentIndexRef.current + 1, 1);
            },
            onDown: () => {
                if (!animatingRef.current) gotoSection(currentIndexRef.current - 1, -1);
            },
            tolerance: 10
        });

        // Keyboard navigation
        const handleKeyDown = (e: KeyboardEvent) => {
            if (animatingRef.current) return;
            if (e.code === "ArrowUp" || e.code === "ArrowLeft") {
                gotoSection(currentIndexRef.current - 1, -1);
            }
            if (
                e.code === "ArrowDown" ||
                e.code === "ArrowRight" ||
                e.code === "Space" ||
                e.code === "Enter"
            ) {
                gotoSection(currentIndexRef.current + 1, 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            obs.kill();
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, { scope: containerRef });

    return (
        <main ref={containerRef}>
            <div className="tp-portfolio-swipe-gallery">
                {sliderData.map((item) => (
                    <div key={item.id} className="slide">
                        <div className="slide__outer">
                            <div className="slide__inner">
                                <div className="slide__content">
                                    <div className="slide__container">
                                        <h2 className="slide__heading">
                                            <SmartLink href={item.link}>{item.title}</SmartLink>
                                        </h2>
                                        <SmartLink href={item.link} className="slide__img-cont">
                                            <img className="slide__img" src={item.img} alt={item.title} />
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="overlay">
                    <div className="overlay__content">
                        <p className="overlay__count">
                            0<span className="count">1</span>
                        </p>
                        <figure className="overlay__img-cont">
                            {[...sliderData].reverse().map((item) => (
                                <SmartLink
                                    key={item.id}
                                    href={item.link}
                                    className="cursor-hide"
                                    data-cursor="View<br>Demo"
                                >
                                    <img className="image" src={item.bigImg} alt={item.title} />
                                </SmartLink>
                            ))}
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioSwipeGallery;
