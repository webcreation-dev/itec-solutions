"use client";

import React, { useState } from "react";
import { SmartLink } from "@/components/common";

interface InteractiveScrollItem {
    id: number;
    rel: string;
    title: string;
    img: string;
    link: string;
}

const portfolioData: InteractiveScrollItem[] = [
    {
        id: 1,
        rel: "tp-port-1",
        title: "Milo",
        img: "/assets/img/portfolio/interactive-img/port-1.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 2,
        rel: "tp-port-2",
        title: "FASTWIRE",
        img: "/assets/img/portfolio/interactive-img/port-2.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 3,
        rel: "tp-port-3",
        title: "MEDIABION",
        img: "/assets/img/portfolio/interactive-img/port-3.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 4,
        rel: "tp-port-4",
        title: "Spruce",
        img: "/assets/img/portfolio/interactive-img/port-4.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 5,
        rel: "tp-port-5",
        title: "PSDMockup",
        img: "/assets/img/portfolio/interactive-img/port-5.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 6,
        rel: "tp-port-6",
        title: "JQ Wine",
        img: "/assets/img/portfolio/interactive-img/port-6.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 7,
        rel: "tp-port-7",
        title: "Diseño",
        img: "/assets/img/portfolio/interactive-img/port-4.jpg", // uses port-4.jpg in HTML template
        link: "/portfolio-details-gallery",
    },
    {
        id: 8,
        rel: "tp-port-8",
        title: "Photoshoot",
        img: "/assets/img/portfolio/interactive-img/port-5.jpg", // uses port-5.jpg in HTML template
        link: "/portfolio-details-gallery",
    },
    {
        id: 9,
        rel: "tp-port-9",
        title: "Gráfico",
        img: "/assets/img/portfolio/interactive-img/port-6.jpg", // uses port-6.jpg in HTML template
        link: "/portfolio-details-gallery",
    },
];

const PortfolioInteractiveScroll = () => {
    // Defaulting to "tp-port-1" as specified by class="active" in static HTML
    const [activeRel, setActiveRel] = useState("tp-port-1");

    return (
        <main>
            {/* portfolio area start */}
            <div className="tp-port-slider-area">
                <div className="tp-port-slider-main p-relative">
                    <div id="tp-port-slider-wrap" className={`tp-port-slider-wrap p-relative ${activeRel}`}>
                        {portfolioData.map((item) => (
                            <div key={item.id} className={`tp-port-slider-thumb ${item.rel}`}>
                                <img src={item.img} alt={item.title} />
                            </div>
                        ))}
                    </div>
                    <div className="tp-port-slider-content-wrap z-index-5">
                        <div className="tp-port-slider-content">
                            {portfolioData.map((item) => (
                                <h4
                                    key={item.id}
                                    className={`tp-port-slider-title ${activeRel === item.rel ? "active" : ""}`}
                                    rel={item.rel}
                                    onMouseEnter={() => setActiveRel(item.rel)}
                                >
                                    <SmartLink href={item.link}>
                                        {item.title}
                                    </SmartLink>
                                </h4>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* portfolio area end */}
        </main>
    );
};

export default PortfolioInteractiveScroll;
