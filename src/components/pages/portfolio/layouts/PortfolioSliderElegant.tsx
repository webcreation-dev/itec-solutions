"use client";

import React from "react";
import Image from "next/image";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

interface PortfolioItem {
    id: number;
    title: string;
    img: string;
}

const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        title: "Brand promotion",
        img: "/assets/img/portfolio/elegent/thumb.jpg",
    },
    {
        id: 2,
        title: "Commercial",
        img: "/assets/img/portfolio/elegent/thumb-2.jpg",
    },
    {
        id: 3,
        title: "Wedding",
        img: "/assets/img/portfolio/elegent/thumb-3.jpg",
    },
    {
        id: 4,
        title: "Portrait",
        img: "/assets/img/portfolio/elegent/thumb-4.jpg",
    },
];

const PortfolioSliderElegant = () => {
    const isDark = useIsDarkRoute();
    const textClass = isDark ? "tp-text-common-white" : "tp-text-common-black-5";

    return (
        <main>
            {/* tp-portfolio-area-start */}
            <div className="tp-portfolio-area tp-portfolio-md-border tp-portfolio-elegant pt-10 fix">
                <div className="container-fluid">
                    <div className="tp-portfolio-md-wrapper">
                        <div className="tp-portfolio-md-inner-wrap">
                            {portfolioData.map((item) => (
                                <div key={item.id} className="tp-portfolio-md-item">
                                    <div
                                        className="tp-portfolio-md-thumb not-hide-cursor mb-40"
                                        data-cursor="View<br>Demo"
                                    >
                                        <SmartLink
                                            className="cursor-hide"
                                            href="/portfolio-details-gallery"
                                        >
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={800}
                                                height={1000}
                                                className="w-100 h-100 object-fit-cover"
                                                priority={item.id === 1}
                                            />
                                        </SmartLink>
                                    </div>
                                    <div className="tp-portfolio-content">
                                        <span className={`text-uppercase tp-ff-dm fw-600 ls-m-2 mb-10 d-inline-block ${textClass}`}>
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-portfolio-area-end */}
        </main>
    );
};

export default PortfolioSliderElegant;
