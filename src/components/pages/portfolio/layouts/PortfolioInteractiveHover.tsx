"use client";

import React, { useState } from "react";
import { SmartLink } from "@/components/common";

interface InteractiveItem {
    id: number;
    rel: string;
    title: string;
    category: string;
    img: string;
    link: string;
}

const portfolioData: InteractiveItem[] = [
    {
        id: 1,
        rel: "tp-porfolio-10-bg-1",
        title: "Silkvision",
        category: "/ Visual",
        img: "/assets/img/portfolio/interactive-img/port-1.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 2,
        rel: "tp-porfolio-10-bg-2",
        title: "Disefio Gräfico",
        category: "/ Creative",
        img: "/assets/img/portfolio/interactive-img/port-2.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 3,
        rel: "tp-porfolio-10-bg-3",
        title: "PSD Mockup",
        category: "/ Branding",
        img: "/assets/img/portfolio/interactive-img/port-3.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 4,
        rel: "tp-porfolio-10-bg-4",
        title: "Fastwire",
        category: "/ Branding",
        img: "/assets/img/portfolio/interactive-img/port-4.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 5,
        rel: "tp-porfolio-10-bg-5",
        title: "Tesla",
        category: "/ Mobile Application",
        img: "/assets/img/portfolio/interactive-img/port-5.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 6,
        rel: "tp-porfolio-10-bg-6",
        title: "Ecommerce",
        category: "/ Digital Design",
        img: "/assets/img/portfolio/interactive-img/port-6.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 7,
        rel: "tp-porfolio-10-bg-7",
        title: "Cosmetic",
        category: "/ Visual",
        img: "/assets/img/portfolio/interactive-img/port-7.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 8,
        rel: "tp-porfolio-10-bg-8",
        title: "Waves",
        category: "/ UI Design",
        img: "/assets/img/portfolio/interactive-img/port-5.jpg", // uses port-5.jpg in HTML template
        link: "/portfolio-details-gallery",
    },
];

const PortfolioInteractiveHover = () => {
    // Defaulting to "tp-porfolio-10-bg-4" as specified by class="active" in static HTML
    const [activeRel, setActiveRel] = useState("tp-porfolio-10-bg-4");

    return (
        <main>
            {/* porfolio-slider-area */}
            <div className="tp-porfolio-10-area tp-porfolio-10-height p-relative fix">
                <div className="tp-porfolio-10-bg-wrap">
                    <div id="tp-porfolio-10-bg-box" className={activeRel}>
                        {portfolioData.map((item) => (
                            <img
                                key={item.id}
                                className={item.rel}
                                src={item.img}
                                alt={item.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="container container-1380">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-porfolio-10-title-wrap z-index-5">
                                <ul>
                                    {portfolioData.map((item) => (
                                        <li
                                            key={item.id}
                                            className={activeRel === item.rel ? "active" : ""}
                                            rel={item.rel}
                                            onMouseEnter={() => setActiveRel(item.rel)}
                                        >
                                            <SmartLink href={item.link}>
                                                <div className="tp-porfolio-10-title-box d-flex align-items-end">
                                                    <h2 className="tp-porfolio-10-title">{item.title}</h2>
                                                    <span className="tp-porfolio-10-category">{item.category}</span>
                                                </div>
                                            </SmartLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* porfolio-slider-area */}
        </main>
    );
};

export default PortfolioInteractiveHover;
