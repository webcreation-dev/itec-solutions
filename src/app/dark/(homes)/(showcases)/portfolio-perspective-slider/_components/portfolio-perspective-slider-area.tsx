/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SmartLink } from "@/components/common";
import { Ripples } from "@/utils/ripples";
import React from "react";

const portfolioData = [
    {
        id: 1,
        img: "/assets/img/portfolio/perspective-slider/slider-3.jpg",
        category: "Branding",
        title: "Keepgrading",
        link: "/portfolio-details-gallery"
    },
    {
        id: 2,
        img: "/assets/img/portfolio/perspective-slider/slider-1.jpg",
        category: "Branding",
        title: "Stickers Pack",
        link: "/portfolio-details-gallery"
    },
    {
        id: 3,
        img: "/assets/img/portfolio/perspective-slider/slider-4.jpg",
        category: "Branding",
        title: "Diseño",
        link: "/portfolio-details-gallery"
    },
    {
        id: 4,
        img: "/assets/img/portfolio/perspective-slider/slider-5.jpg",
        category: "Branding",
        title: "Keepgrading",
        link: "/portfolio-details-gallery"
    },
    {
        id: 5,
        img: "/assets/img/portfolio/perspective-slider/slider-2.jpg",
        category: "Branding",
        title: "Gráfico",
        link: "/portfolio-details-gallery"
    },
    {
        id: 6,
        img: "/assets/img/portfolio/perspective-slider/slider-6.jpg",
        category: "Branding",
        title: "Dinámica",
        link: "/portfolio-details-gallery"
    }
];

const PortfolioPerspectiveSliderArea = () => {
    React.useEffect(() => {
        const rippleElements = document.querySelectorAll<HTMLElement>(".ripple-image");
        const rippleInstances: any[] = [];

        rippleElements.forEach((el) => {
            const img = el.querySelector<HTMLImageElement>("img");
            if (!img) return;

            const initRipple = () => {
                const imgURL = img.getAttribute("src") || "";
                el.style.backgroundImage = `url(${imgURL})`;
                el.style.backgroundSize = "cover";
                el.style.backgroundPosition = "center center";
                el.style.width = "100%";
                el.style.height = "100%";
                el.style.position = "relative";
                el.style.display = "inline-block";

                try {
                    const instance = new (Ripples as any)(el, {
                        resolution: 400,
                        perturbance: 0.03
                    });
                    rippleInstances.push(instance);
                    img.style.display = "none";
                } catch (err) {
                    console.error("Failed to initialize ripples:", err);
                }
            };

            if (img.complete) {
                initRipple();
            } else {
                img.addEventListener("load", initRipple);
            }
        });

        return () => {
            rippleInstances.forEach((inst) => {
                if (inst && typeof inst.destroy === "function") {
                    inst.destroy();
                }
            });
        };
    }, []);

    return (
        <>
            {/* PERSPECTIVE PORTFOLIO */}
            <div className="tp-perspective-area">
                <div className="container container-1646">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-perspective-slider">
                                {portfolioData.map((item) => (
                                    <div key={item.id} className="tp-perspective-main">
                                        <div className="tp-perspective-inner">
                                            <div className="tp-perspective-image">
                                                <div className="ripple-image px-hero-bg-img">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                                <div className="tp-perspective-content">
                                                    <span className="tp-perspective-category tp_reveal_anim">{item.category}</span>
                                                    <h1 className="tp-perspective-title tp_reveal_anim not-hide-cursor" data-cursor="View<br>Demo">
                                                        <SmartLink className="cursor-hide" href={item.link}>{item.title}</SmartLink>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PERSPECTIVE PORTFOLIO */}

            {/* Custom Footer */}
            <div className="tp-perspective-social-wrap pb-40">
                <div className="container container-1800">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                            <div className="tp-perspective-social-info">
                                <span>© {new Date().getFullYear()} | ALERIC</span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                            <div className="tp-perspective-scroll text-end smooth">
                                <a href="#">(Scroll)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioPerspectiveSliderArea;
