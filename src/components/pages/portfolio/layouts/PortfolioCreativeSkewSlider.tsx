"use client";

import React, { useRef, useState } from "react";
import { SmartLink } from "@/components/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";

// Register Observer on client-side
if (typeof window !== "undefined") {
    gsap.registerPlugin(Observer);
}

interface SliderItem {
    id: number;
    category: string;
    title: React.ReactNode;
    img: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        category: "Digital platform",
        title: <>simple<br /> <span>logistics</span></>,
        img: "/assets/img/portfolio/skew/skew-1.jpg",
    },
    {
        id: 2,
        category: "Digital platform",
        title: <>Smart <br /> platform</>,
        img: "/assets/img/portfolio/skew/skew-2.jpg",
    },
    {
        id: 3,
        category: "Digital platform",
        title: <>Royal <br /> Benz</>,
        img: "/assets/img/portfolio/skew/skew-3.jpg",
    },
    {
        id: 4,
        category: "Digital platform",
        title: <>World’s <br /> Relays</>,
        img: "/assets/img/portfolio/skew/skew-4.jpg",
    },
    {
        id: 5,
        category: "Digital platform",
        title: <>Bright <br /> Captive</>,
        img: "/assets/img/portfolio/skew/skew-5.jpg",
    },
    {
        id: 6,
        category: "Interactive Mind",
        title: <>Bright <br /> Mind</>,
        img: "/assets/img/portfolio/skew/skew-6.jpg",
    },
];

const PortfolioCreativeSkewSlider = () => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const isAnimatingRef = useRef(false);
    const currentRef = useRef(0);

    const navigate = (direction: number) => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        const previous = currentRef.current;
        const total = sliderData.length;
        const nextIndex = direction === 1
            ? (previous < total - 1 ? previous + 1 : 0)
            : (previous > 0 ? previous - 1 : total - 1);

        currentRef.current = nextIndex;
        setCurrent(nextIndex);

        const prevSlide = slidesRef.current[previous];
        const nextSlide = slidesRef.current[nextIndex];
        const nextInner = imagesRef.current[nextIndex];

        if (!prevSlide || !nextSlide || !nextInner) {
            isAnimatingRef.current = false;
            return;
        }

        // Run GSAP transition
        gsap.killTweensOf([prevSlide, nextSlide, nextInner]);

        if (containerRef.current) {
            gsap.set(containerRef.current, { perspective: 1000 });
        }

        nextSlide.classList.add("slide--current");
        gsap.set(nextSlide, { zIndex: 99 });

        gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: "power3.inOut",
            },
            onComplete: () => {
                prevSlide.classList.remove("slide--current");
                gsap.set(nextSlide, { zIndex: 1 });
                // Reset prev slide position
                gsap.set(prevSlide, { clearProps: "yPercent" });
                isAnimatingRef.current = false;
            }
        })
            .addLabel("start", 0)
            .to(prevSlide, {
                yPercent: -direction * 100,
            }, "start")
            .fromTo(nextSlide, {
                yPercent: 0,
                autoAlpha: 0,
                rotationX: 140,
                scale: 0.1,
                z: -1000
            }, {
                autoAlpha: 1,
                rotationX: 0,
                z: 0,
                scale: 1,
                clearProps: "scale,rotationX,z"
            }, "start+=0.1")
            .fromTo(nextInner, {
                scale: 1.8
            }, {
                scale: 1,
                clearProps: "scale"
            }, "start+=0.17");
    };

    useGSAP(() => {
        // Initialize GSAP Observer
        const obs = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            onDown: () => navigate(-1), // scroll down -> prev (matching original index.js)
            onUp: () => navigate(1),     // scroll up -> next (matching original index.js)
            wheelSpeed: -1,
            tolerance: 10
        });

        return () => {
            obs.kill();
        };
    }, { scope: containerRef });

    const handlePrev = () => navigate(-1);
    const handleNext = () => navigate(1);

    const addLeadingZero = (num: number) => {
        return num < 10 ? `${num}` : num.toString();
    };

    return (
        <main ref={containerRef}>
            <div className="skew-slider-area tp-portfolio-skew-wrap">
                <div className="skew-slider-wrap">
                    {sliderData.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`skew-slider-item slide ${idx === 0 ? "slide--current" : ""}`}
                            ref={(el) => {
                                slidesRef.current[idx] = el;
                            }}
                        >
                            <div
                                className="slide__img"
                                style={{ backgroundImage: `url(${item.img})` }}
                                ref={(el) => {
                                    imagesRef.current[idx] = el;
                                }}
                            ></div>
                            <div className="skew-slider-content">
                                <span>{item.category}</span>
                                <h4>
                                    <SmartLink href="/portfolio-details-creative">
                                        {item.title}
                                    </SmartLink>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tp-portfolio-slider__copyright">
                    <p>Have a project in mind? <SmartLink href="/contact-us">{"Let's"} Talk.</SmartLink></p>
                </div>
                <div className="tp-portfolio-slider__social">
                    <a href="#">Fb</a>
                    <a href="#">In</a>
                    <a href="#">Be</a>
                </div>
                <div className="skew-slider-arrow slides-nav">
                    <button className="skew-slider-prev d-flex align-items-center" onClick={handlePrev}>
                        <span className="icon-1">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="ml-5">Prev</span>
                    </button>
                    <button className="skew-slider-next d-flex align-items-center" onClick={handleNext}>
                        <span className="mr-5">Next</span>
                        <span className="icon-2">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="slides-numbers-wrap">
                    <div className="slides-numbers">
                        <span className="active text-1">{addLeadingZero(current + 1)}</span>
                        <span className="text-2">/</span>
                        <span className="text-3">{addLeadingZero(sliderData.length)}</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioCreativeSkewSlider;
