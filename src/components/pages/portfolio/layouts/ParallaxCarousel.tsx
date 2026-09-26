"use client";

import React, { useEffect, useRef } from "react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const carouselData = [
    {
        id: 1,
        tag: "Photography",
        title: "Brand promotion",
        img: "/assets/img/portfolio/parallax-carousel/port-1.jpg",
    },
    {
        id: 2,
        tag: "Fashion",
        title: "Commercial",
        img: "/assets/img/portfolio/parallax-carousel/port-2.jpg",
    },
    {
        id: 3,
        tag: "Fashion",
        title: "Wedding",
        img: "/assets/img/portfolio/parallax-carousel/port-3.jpg",
    },
    {
        id: 4,
        tag: "Fashion",
        title: "Portrait",
        img: "/assets/img/portfolio/parallax-carousel/port-4.jpg",
    },
    {
        id: 5,
        tag: "Fashion",
        title: "Perspective",
        img: "/assets/img/portfolio/parallax-carousel/port-5.jpg",
    },
    {
        id: 6,
        tag: "Wedding",
        title: "DS Freelance",
        img: "/assets/img/portfolio/parallax-carousel/port-6.jpg",
    },
    {
        id: 7,
        tag: "Collections",
        title: "Perspective",
        img: "/assets/img/portfolio/parallax-carousel/port-7.jpg",
    },
];

const ParallaxCarousel = () => {
    const isDark = useIsDarkRoute();
    const sliderRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const slider = sliderRef.current;
        const images = imagesRef.current.filter((img): img is HTMLDivElement => img !== null);
        if (!slider || images.length === 0) return;

        // Store original body height to restore on cleanup
        const originalBodyHeight = document.body.style.height;

        let sliderWidth = 0;
        let imageWidth = 0;
        let current = 0;
        let target = 0;
        const ease = 0.05;
        let animationFrameId: number;

        function lerp(start: number, end: number, t: number) {
            return start * (1 - t) + end * t;
        }

        function setTransform(el: HTMLElement | null, transform: string) {
            if (el) el.style.transform = transform;
        }

        function initSize() {
            if (!slider) return;
            sliderWidth = slider.getBoundingClientRect().width;
            imageWidth = sliderWidth / images.length;
            // Map horizontal scrolling to page height
            document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
        }

        function animate() {
            current = parseFloat(lerp(current, target, ease).toFixed(2));
            target = window.scrollY;
            setTransform(slider, `translateX(-${current}px)`);

            // Animate individual images for parallax offset
            const ratio = current / imageWidth;
            images.forEach((image, idx) => {
                const intersectionRatioValue = ratio - idx * 0.7;
                setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        // Initialize sizing and start animation loop
        initSize();
        // Delay slightly to ensure layout completed
        const initTimeout = setTimeout(initSize, 100);

        animate();

        window.addEventListener("resize", initSize);

        // Cleanup
        return () => {
            clearTimeout(initTimeout);
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", initSize);
            // Restore body style height
            document.body.style.height = originalBodyHeight;
        };
    }, []);

    const headingColor = isDark ? "tp-text-common-white" : "";

    return (
        <main>
            {/* parallax-slider-area-start */}
            <div className="tp-portfolio-parallax-slider-wrapper pre-header">
                <div className="parallax-slider" ref={sliderRef}>
                    <div className="parallax-slider-inner">
                        {carouselData.map((item, idx) => (
                            <div
                                key={item.id}
                                className="parallax-item not-hide-cursor"
                                data-cursor="View<br>Demo"
                            >
                                <SmartLink
                                    className="cursor-hide"
                                    href="/portfolio-details-creative"
                                >
                                    <div className="parallax-content">
                                        <span>{item.tag}</span>
                                        <h4 className={headingColor}>{item.title}</h4>
                                    </div>
                                    <div
                                        ref={(el) => {
                                            imagesRef.current[idx] = el;
                                        }}
                                        className="parallax-img"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    ></div>
                                </SmartLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* parallax-slider-area-end */}
        </main>
    );
};

export default ParallaxCarousel;
