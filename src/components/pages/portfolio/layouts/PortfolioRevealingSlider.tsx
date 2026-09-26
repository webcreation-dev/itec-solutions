"use client";

import React, { useState, useEffect, useRef } from "react";
import { SmartLink } from "@/components/common";
import gsap from "gsap";

interface RevealingItem {
    id: number;
    text: string;
    heading: string;
    img: string;
    link: string;
}

const sliderData: RevealingItem[] = [
    {
        id: 1,
        text: "Digital platform",
        heading: "Royal Benz",
        img: "/assets/img/portfolio/revealing/webgl-1.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 2,
        text: "Greetings, Traveler!",
        heading: "Smart platform",
        img: "/assets/img/portfolio/revealing/webgl-2.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 3,
        text: "Interactive Mind",
        heading: "World’s Relays",
        img: "/assets/img/portfolio/revealing/webgl-3.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 4,
        text: "Greetings, Traveler!",
        heading: "Bright Captive",
        img: "/assets/img/portfolio/revealing/webgl-4.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 5,
        text: "[ UI, Web Design ]",
        heading: "Top Paddock",
        img: "/assets/img/portfolio/revealing/webgl-5.jpg",
        link: "/portfolio-details-creative",
    },
];

const PortfolioRevealingSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isSlidingBackward, setIsSlidingBackward] = useState(false);
    const [leftRotation, setLeftRotation] = useState(false);
    const [rightRotation, setRightRotation] = useState(false);

    const activeIndexRef = useRef(1);
    const slidingBlocked = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const numOfSlides = sliderData.length;
    const slidingAT = 1300;

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const getPrevIndex = (index: number) => {
        const prev = index - 1;
        return prev < 1 ? numOfSlides : prev;
    };

    const changeSlide = (isRight: boolean, isControlLeftClick = false) => {
        if (slidingBlocked.current) return;
        slidingBlocked.current = true;

        if (isControlLeftClick) {
            setLeftRotation(true);
        } else if (!isRight) {
            // Means scrolling up or clicking left/prev
            setLeftRotation(false);
        } else {
            setRightRotation(true);
        }

        const currentIndex = activeIndexRef.current;
        let nextIndex = isRight ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex < 1) nextIndex = numOfSlides;
        if (nextIndex > numOfSlides) nextIndex = 1;

        setIsSlidingBackward(!isRight);

        // Heading animation using GSAP
        const currentSlideEl = containerRef.current?.querySelector(`.tp-portfolio-revealing-slide-${currentIndex}`);
        const nextSlideEl = containerRef.current?.querySelector(`.tp-portfolio-revealing-slide-${nextIndex}`);
        const currentHeading = currentSlideEl?.querySelector(".tp-portfolio-revealing-slide-heading");
        const nextHeading = nextSlideEl?.querySelector(".tp-portfolio-revealing-slide-heading");

        if (currentHeading && nextHeading) {
            const direction = isRight ? 1 : -1;
            gsap.timeline()
                .to(currentHeading, {
                    scaleX: 2,
                    xPercent: 20 * direction,
                    duration: 1,
                    ease: "power3.inOut"
                }, 0)
                .fromTo(nextHeading, {
                    scaleX: 2,
                    xPercent: -10 * direction
                }, {
                    scaleX: 1,
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.inOut"
                }, 0);
        }

        setActiveIndex(nextIndex);

        setTimeout(() => {
            setLeftRotation(false);
            setRightRotation(false);
            slidingBlocked.current = false;
        }, slidingAT * 0.75);
    };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (slidingBlocked.current) return;

            if (e.deltaY > 0) {
                changeSlide(true);
            } else if (e.deltaY < 0) {
                changeSlide(false);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    const prevIndexValue = getPrevIndex(activeIndex);

    return (
        <main ref={containerRef}>
            <div className="tp-portfolio-revealing-slider">
                <div className="tp-portfolio-revealing-slider-slides">
                    {sliderData.map((item) => {
                        const isCurrentActive = activeIndex === item.id;
                        const isPrevActive = prevIndexValue === item.id;

                        let slideClass = `tp-portfolio-revealing-slide tp-portfolio-revealing-slide-${item.id}`;
                        if (isCurrentActive) {
                            slideClass += " s-active";
                            if (isSlidingBackward) {
                                slideClass += " s-active-prev";
                            }
                        }
                        if (isPrevActive) {
                            slideClass += " s-prev";
                        }

                        return (
                            <div key={item.id} className={slideClass} data-slide={item.id}>
                                <div
                                    className="tp-portfolio-revealing-slide-inner bg-position"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tp-portfolio-revealing-slide-content">
                                                    <span className="tp-portfolio-revealing-slide-text">{item.text}</span>
                                                    <h2 className="tp-portfolio-revealing-slide-heading">
                                                        <SmartLink href={item.link}>{item.heading}</SmartLink>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div
                    className={`tp-portfolio-revealing-slider-control ${leftRotation ? "a-rotation" : ""}`}
                    onClick={() => changeSlide(false, true)}
                    style={{ cursor: "pointer" }}
                >
                    <div className="tp-portfolio-revealing-slider-control-line"></div>
                    <div className="tp-portfolio-revealing-slider-control-line"></div>
                </div>

                <div
                    className={`tp-portfolio-revealing-slider-control tp-portfolio-revealing-slider-control-right m-right ${rightRotation ? "a-rotation" : ""}`}
                    onClick={() => changeSlide(true)}
                    style={{ cursor: "pointer" }}
                >
                    <div className="tp-portfolio-revealing-slider-control-line"></div>
                    <div className="tp-portfolio-revealing-slider-control-line"></div>
                </div>

                <div className="tp-portfolio-revealing-slider-social">
                    <a className="tp-hover-btn-item" href="#">Fb</a>
                    <a className="tp-hover-btn-item" href="#">In</a>
                    <a className="tp-hover-btn-item" href="#">Be</a>
                </div>
            </div>
        </main>
    );
};

export default PortfolioRevealingSlider;
