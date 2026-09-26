"use client";

import React, { useRef, useState, useEffect } from "react";
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
    title: string;
    bgImg: string;
    fgImg: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        title: "Jon Piterson",
        bgImg: "/assets/img/portfolio/creative/cr-slider-6.jpg",
        fgImg: "/assets/img/portfolio/creative/cr-slider-small-6.jpg",
    },
    {
        id: 2,
        title: "Jean Gomez",
        bgImg: "/assets/img/portfolio/creative/cr-slider-7.jpg",
        fgImg: "/assets/img/portfolio/creative/cr-slider-small-7.jpg",
    },
    {
        id: 3,
        title: "Katia Ivanova",
        bgImg: "/assets/img/portfolio/creative/cr-slider-8.jpg",
        fgImg: "/assets/img/portfolio/creative/cr-slider-small-8.jpg",
    },
    {
        id: 4,
        title: "Adaora Musa",
        bgImg: "/assets/img/portfolio/creative/cr-slider-9.jpg",
        fgImg: "/assets/img/portfolio/creative/cr-slider-small-9.jpg",
    },
    {
        id: 5,
        title: "Mia Tobez",
        bgImg: "/assets/img/portfolio/creative/cr-slider-10.jpg",
        fgImg: "/assets/img/portfolio/creative/cr-slider-small-10.jpg",
    },
    {
        id: 6,
        title: "Anni Marire",
        bgImg: "/assets/img/portfolio/creative/cr-slider-1.jpg",
        fgImg: "/assets/img/portfolio/creative/cr-slider-small-1.jpg",
    },
];

const PortfolioCreativeThumbSlider = () => {
    const [current, setCurrent] = useState(0);
    const currentRef = useRef(current);
    const isAnimating = useRef(false);

    const bgItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const bgInnersRef = useRef<(HTMLDivElement | null)[]>([]);
    const fgItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const fgInnersRef = useRef<(HTMLDivElement | null)[]>([]);
    const titleItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        currentRef.current = current;
    }, [current]);

    useGSAP(() => {
        // Initialize will-change and initial GSAP states
        gsap.set([bgItemsRef.current, bgInnersRef.current, fgItemsRef.current, fgInnersRef.current, titleItemsRef.current], {
            willChange: "transform, opacity",
        });
    });

    const navigate = (direction: "next" | "prev") => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const previous = currentRef.current;
        const itemsTotal = sliderData.length;
        let nextIndex = 0;
        if (direction === "next") {
            nextIndex = previous < itemsTotal - 1 ? previous + 1 : 0;
        } else {
            nextIndex = previous > 0 ? previous - 1 : itemsTotal - 1;
        }

        const dirMultiplier = direction === "next" ? 1 : -1;

        // Elements for previous
        const prevBgItem = bgItemsRef.current[previous];
        const prevBgInner = bgInnersRef.current[previous];
        const prevFgItem = fgItemsRef.current[previous];
        const prevFgInner = fgInnersRef.current[previous];
        const prevTitle = titleItemsRef.current[previous];
        const prevChars = prevTitle?.querySelectorAll(".char");

        // Elements for next
        const nextBgItem = bgItemsRef.current[nextIndex];
        const nextBgInner = bgInnersRef.current[nextIndex];
        const nextFgItem = fgItemsRef.current[nextIndex];
        const nextFgInner = fgInnersRef.current[nextIndex];
        const nextTitle = titleItemsRef.current[nextIndex];
        const nextChars = nextTitle?.querySelectorAll(".char");

        if (nextTitle) {
            nextTitle.classList.add("type__item--current");
        }

        const tl = gsap.timeline({
            defaults: { duration: 1.1, ease: "power3.inOut" },
            onComplete: () => {
                if (prevBgItem) prevBgItem.classList.remove("current");
                if (nextBgItem) nextBgItem.classList.add("current");
                if (prevFgItem) prevFgItem.classList.remove("current");
                if (nextFgItem) nextFgItem.classList.add("current");

                if (prevTitle) {
                    prevTitle.classList.remove("type__item--current");
                    gsap.set(prevTitle, { opacity: 0 });
                }

                setCurrent(nextIndex);
                isAnimating.current = false;
            },
        });

        // 1. sliderBG (reverseDirection = false)
        if (prevBgItem && prevBgInner && nextBgItem && nextBgInner) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            tl.to(prevBgItem, {
                xPercent: -dirMultiplier * 100,
                onComplete: () => gsap.set(prevBgItem, { opacity: 0 }),
            }, 0)
                .to(prevBgInner, {
                    xPercent: dirMultiplier * 30,
                    startAt: { rotation: 0 },
                    rotation: -dirMultiplier * 20,
                    scaleX: 2.8,
                }, 0)
                .to(nextBgItem, {
                    startAt: { opacity: 1, xPercent: dirMultiplier * 80 },
                    xPercent: 0,
                }, 0)
                .to(nextBgInner, {
                    startAt: {
                        xPercent: -dirMultiplier * 30,
                        scaleX: 2.8,
                        rotation: dirMultiplier * 20,
                    },
                    xPercent: 0,
                    scaleX: 1,
                    rotation: 0,
                }, 0);
        }

        // 2. sliderFG (reverseDirection = true)
        if (prevFgItem && prevFgInner && nextFgItem && nextFgInner) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            tl.to(prevFgItem, {
                xPercent: dirMultiplier * 100,
                onComplete: () => gsap.set(prevFgItem, { opacity: 0 }),
            }, 0)
                .to(prevFgInner, {
                    xPercent: -dirMultiplier * 30,
                    startAt: { rotation: 0 },
                    rotation: -dirMultiplier * 20,
                    scaleX: 2.8,
                }, 0)
                .to(nextFgItem, {
                    startAt: { opacity: 1, xPercent: -dirMultiplier * 80 },
                    xPercent: 0,
                }, 0)
                .to(nextFgInner, {
                    startAt: {
                        xPercent: dirMultiplier * 30,
                        scaleX: 2.8,
                        rotation: dirMultiplier * 20,
                    },
                    xPercent: 0,
                    scaleX: 1,
                    rotation: 0,
                }, 0);
        }

        // 3. Titles text split char animations
        if (prevTitle && nextTitle) {
            tl.to(prevTitle, { xPercent: dirMultiplier * 40 }, 0)
                .to(prevTitle, { opacity: 0, duration: 1.1 }, 0);

            if (prevChars && prevChars.length > 0) {
                tl.to(prevChars, { xPercent: dirMultiplier * 103 }, 0);
            }

            const inLabelTime = 1.1 * 0.15;
            tl.addLabel("in", inLabelTime);

            tl.to(nextTitle, { opacity: 1, duration: 0.8 }, "in")
                .to(nextTitle, {
                    startAt: { xPercent: dirMultiplier * -40 },
                    xPercent: 0,
                }, "in");

            if (nextChars && nextChars.length > 0) {
                tl.to(nextChars, {
                    startAt: { xPercent: dirMultiplier * -103 },
                    xPercent: 0,
                }, "in");
            }
        }
    };

    useGSAP(() => {
        if (typeof window === "undefined") return;

        const obs = Observer.create({
            target: window,
            type: "wheel,touch,scroll,pointer",
            onUp: () => navigate("next"),
            onDown: () => navigate("prev"),
            wheelSpeed: -1,
        });

        return () => {
            obs.kill();
        };
    }, { dependencies: [current] });

    return (
        <div className="tp-portfolio-slider__main fix">
            <div className="tp-portfolio-slider__copyright d-none d-lg-block">
                <p>
                    Have a project in mind?{" "}
                    <SmartLink href="/contact">{"Let's"} Talk.</SmartLink>
                </p>
            </div>
            <div className="tp-portfolio-slider__mail d-none d-sm-block">
                <a href="mailto:aleric@gmail.com">aleric@gmail.com</a>
            </div>
            <div className="tp-portfolio-slider__social d-none d-sm-block">
                <a href="#">Fb</a>
                <a href="#">In</a>
                <a href="#">Be</a>
            </div>

            {/* Slider BG */}
            <div className="tp-portfolio-slider__wrap slider slider--bg">
                {sliderData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`tp-portfolio-slider__item ${index === 0 ? "current" : ""}`}
                        ref={(el) => { bgItemsRef.current[index] = el; }}
                        style={{ opacity: index === 0 ? 1 : 0 }}
                    >
                        <div
                            className="tp-portfolio-slider__item-inner"
                            ref={(el) => { bgInnersRef.current[index] = el; }}
                            style={{ backgroundImage: `url(${item.bgImg})` }}
                        />
                    </div>
                ))}
            </div>

            {/* Slider FG */}
            <div className="tp-portfolio-slider__wrap tp-portfolio-slider-small__wrap slider slider--fg">
                {sliderData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`tp-portfolio-slider__item ${index === 0 ? "current" : ""}`}
                        ref={(el) => { fgItemsRef.current[index] = el; }}
                        style={{ opacity: index === 0 ? 1 : 0 }}
                    >
                        <div
                            className="tp-portfolio-slider__item-inner"
                            ref={(el) => { fgInnersRef.current[index] = el; }}
                            style={{ backgroundImage: `url(${item.fgImg})` }}
                        />
                    </div>
                ))}
            </div>

            {/* Titles */}
            <div className="tp-portfolio-slider-type">
                {sliderData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`type__item ${index === 0 ? "type__item--current" : ""}`}
                        ref={(el) => { titleItemsRef.current[index] = el; }}
                        style={{ opacity: index === 0 ? 1 : 0 }}
                    >
                        <h4 className="tp-portfolio-slider-type-title">
                            <SmartLink href="/portfolio-details-gallery">
                                {item.title.split("").map((char, idx) => (
                                    <span key={idx} className="char-wrap">
                                        <span className="char" style={{ display: "inline-block" }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    </span>
                                ))}
                            </SmartLink>
                        </h4>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="tp-portfolio-mix-slider-navigation overflow-hidden">
                <div className="container-fluid container-1800">
                    <div className="slider-nav">
                        <div
                            className="tp-portfolio-mix-button-prev nav-icon"
                            onClick={() => navigate("prev")}
                        >
                            <i className="fa-solid fa-angle-left"></i>Prev
                        </div>
                        <div
                            className="tp-portfolio-mix-button-next nav-icon"
                            onClick={() => navigate("next")}
                        >
                            Next<i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCreativeThumbSlider;
