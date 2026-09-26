"use client";

import React, { useRef } from "react";
import { SmartLink } from "@/components/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger on client-side
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface SliderItem {
    id: number;
    numText: string;
    bigImg: string;
    thumbImg: string;
    title: string;
    subtitles: string[];
    link: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        numText: "001",
        bigImg: "/assets/img/portfolio/ai/thumb.jpg",
        thumbImg: "/assets/img/portfolio/ai/thumb-sm.jpg",
        title: "Architecture",
        subtitles: ["Branding", "Ai Agency", "Website"],
        link: "/portfolio-details-creative",
    },
    {
        id: 2,
        numText: "002",
        bigImg: "/assets/img/portfolio/ai/thumb-2.jpg",
        thumbImg: "/assets/img/portfolio/ai/thumb-sm-2.jpg",
        title: "Data Intelligence",
        subtitles: ["Branding", "Ai Agency", "Website"],
        link: "/portfolio-details-creative",
    },
    {
        id: 3,
        numText: "003",
        bigImg: "/assets/img/portfolio/ai/thumb-3.jpg",
        thumbImg: "/assets/img/portfolio/ai/thumb-sm-3.jpg",
        title: "Intelligent Stack",
        subtitles: ["Branding", "Ai Agency", "Website"],
        link: "/portfolio-details-creative",
    },
    {
        id: 4,
        numText: "004",
        bigImg: "/assets/img/portfolio/ai/thumb-4.jpg",
        thumbImg: "/assets/img/portfolio/ai/thumb-sm-4.jpg",
        title: "Intelligent Stack",
        subtitles: ["Branding", "Ai Agency", "Website"],
        link: "/portfolio-details-creative",
    },
];

const PortfolioParalaxSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (typeof window === "undefined") return;

        const snapSliderHolder = containerRef.current?.querySelector(".tp-snap-slider-holder");
        const snapSlides = gsap.utils.toArray(".tp-snap-slide") as HTMLElement[];
        const snapSlidesImgMask = gsap.utils.toArray(".tp-snap-slide .img-mask") as HTMLElement[];
        const snapCaptionWrapper = containerRef.current?.querySelector(".tp-snap-slider-captions");
        const snapCaptions = gsap.utils.toArray(".tp-snap-slide-caption") as HTMLElement[];
        const snapThumbsWrapper = containerRef.current?.querySelector(".tp-snap-slider-thumbs");
        const snapThumbs = gsap.utils.toArray(".thumb-slide") as HTMLElement[];

        if (!snapSliderHolder || snapSlides.length === 0) return;

        // Opacity on enter
        gsap.fromTo(snapSlidesImgMask,
            { opacity: 0.1 },
            {
                duration: 1,
                opacity: 1,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: snapSliderHolder,
                    start: "top 100%",
                    end: "+=100%",
                    scrub: true,
                },
            }
        );

        // Opacity on exit
        gsap.fromTo(snapSlidesImgMask,
            { opacity: 1 },
            {
                duration: 1,
                opacity: 0.1,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: snapSliderHolder,
                    start: "bottom 100%",
                    end: "+=100%",
                    scrub: true,
                },
            }
        );

        // Pin and animate thumbnails
        ScrollTrigger.create({
            trigger: snapSlides,
            start: "top top",
            end: () => "+=" + window.innerHeight * (snapSlides.length - 1),
            pin: snapThumbsWrapper,
            scrub: true,
        });

        if (snapThumbs.length > 0) {
            gsap.fromTo(
                snapThumbs,
                { y: 0 },
                {
                    y: () => -snapThumbs[0].offsetHeight * (snapThumbs.length - 1),
                    scrollTrigger: {
                        trigger: snapSliderHolder,
                        scrub: true,
                        start: "top top",
                        end: () => "+=" + window.innerHeight * (snapSlides.length - 1),
                    },
                    ease: "none",
                }
            );
        }

        // Pin and animate captions
        ScrollTrigger.create({
            trigger: snapCaptionWrapper,
            start: "top top",
            end: () => "+=" + window.innerHeight * (snapSlides.length - 1),
            pin: true,
            scrub: true,
        });

        if (snapCaptions.length > 0) {
            gsap.fromTo(
                snapCaptions,
                { y: 0 },
                {
                    y: () => -snapCaptions[0].offsetHeight * (snapCaptions.length - 1),
                    scrollTrigger: {
                        trigger: snapSliderHolder,
                        scrub: true,
                        start: "top top",
                        end: () => "+=" + window.innerHeight * (snapSlides.length - 1),
                    },
                    ease: "none",
                }
            );
        }

        // Animate image transitions within slides
        snapSlides.forEach((slide, i) => {
            const imageWrappers = slide.querySelectorAll(".img-mask");
            const isLastSlide = i === snapSlides.length - 1;
            const isFirstSlide = i === 0;

            gsap.fromTo(
                imageWrappers,
                { y: isFirstSlide ? 0 : -window.innerHeight },
                {
                    y: isLastSlide ? 0 : window.innerHeight,
                    scrollTrigger: {
                        trigger: slide,
                        scrub: true,
                        start: isFirstSlide ? "top top" : "top bottom",
                        end: isLastSlide ? "top top" : undefined,
                    },
                    ease: "none",
                }
            );
        });

    }, { scope: containerRef });

    return (
        <main ref={containerRef}>
            {/* tp-portfolio-area-start */}
            <div className="tp-portfolio-area">
                <div className="content-row p-relative">
                    <div className="tp-snap-slider-holder">
                        <div className="tp-snap-slider-images">
                            <div className="tp-snap-slider-images-wrapper">
                                {sliderData.map((item) => (
                                    <div key={item.id} className="tp-snap-slide trigger-item change-header-color">
                                        <div className="img-mask p-relative">
                                            <div className="section-image trigger-item-link">
                                                <img src={item.bigImg} className="item-image grid__item-img" alt={item.title} />
                                            </div>
                                            <h3 className="tp-snap-slide-bigtext mb-0">{item.numText}</h3>
                                            <img src={item.bigImg} className="grid__item-img grid__item-img--large" alt={item.title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tp-snap-slider-thumbs">
                            <div className="tp-snap-slider-thumbs-wrapper">
                                {sliderData.map((item) => (
                                    <div key={item.id} className="thumb-slide" data-cursor="OPEN">
                                        <SmartLink href={item.link} className="thumb-slide-img cursor-hide">
                                            <img src={item.thumbImg} className="item-image grid__item-img" alt={item.title} />
                                        </SmartLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tp-snap-slider-captions">
                            <div className="tp-snap-slider-captions-wrapper content-full-width">
                                {sliderData.map((item) => (
                                    <div key={item.id} className="tp-snap-slide-caption">
                                        <div className="slide-title">
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="slide-subtitle d-flex align-items-center">
                                            {item.subtitles.map((sub, index) => (
                                                <span key={index}>{sub}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-portfolio-area-end */}
        </main>
    );
};

export default PortfolioParalaxSlider;
