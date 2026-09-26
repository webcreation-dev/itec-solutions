"use client";
import { businessConsultingPortfolios } from "@/data/portfolio-data-two";
import PortfolioItem from "../components/PortfolioItem";
import { SmartLink } from "@/components/common";
import { PortfolioArrowIcon } from "@/svg";
import { useState } from "react";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const portfolioImages = [
    "/assets/img/portfolio/cst/graph.png",
    "/assets/img/portfolio/cst/graph-2.png",
    "/assets/img/portfolio/cst/graph-3.png",
    "/assets/img/portfolio/cst/graph-4.png",
];

const BusinessConsultingPortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const portfolioSectionStyles = {
        sectionBg: isDark ? "tp-bg-grey-8" : "tp-bg-grey",
        headingColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        highlightTextColor: isDark ? "tp-text-common-white" : "#B4E717",
        subtitleTextColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        bodyTextColor: isDark ? "tp-text-grey-2" : "",
    };
    // -------------------------------

    return (
        <div className={`${portfolioSectionStyles.sectionBg} tp-portfolio-area  pt-115 pb-80`}>
            <div className="container-fluid container-1524">
                <div className="row">
                    {/* subtitle */}
                    <div className="col-12">
                        <div className="tp-portfolio-cst-subtitle-wrap mb-50">
                            <span className={`tp-section-subtitle mb-15 d-inline-block tp-section-cst-subtitle tp-ff-dm fw-500 ${portfolioSectionStyles.subtitleTextColor} fs-16`}>
                                <span className="borders d-inline-block"></span>
                                Latest Portfolio
                            </span>
                        </div>
                    </div>
                    {/* left content */}
                    <div className="col-lg-5 mb-40">
                        <div className="tp-portfolio-cst-content h-100">
                            <h2 className={`tp-ff-dm fw-600 ${portfolioSectionStyles.headingColor} mb-15 fs-lg-45`}>
                                Our Latest Portfolio
                            </h2>

                            <p className={`${portfolioSectionStyles.bodyTextColor} fs-18 lh-140-per tp-ff-dm mb-70`}>
                                With a passion for innovation and a results-driven approach,
                                we help businesses stand out in a crowded marketplace.
                            </p>

                            <div className="tp-portfolio-cst-sales-wrap fix p-relative h-100">
                                <div className="tp-portfolio-cst-img-wrapper image-container">
                                    {portfolioImages.map((img, i) => (
                                        <div key={i} className={`hover-image ${i === activeIndex ? "active" : ""}`}>
                                            <Image width={556} height={439} className="img-fluid thumb" src={img} alt="portfolio image" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right list */}
                    <div className="col-lg-7 mb-40">
                        <div className="tp-portfolio-cst-list-wrap pt-10 ml-40">
                            {businessConsultingPortfolios.map((item, index) => (
                                <PortfolioItem
                                    key={index}
                                    {...item}
                                    onHover={() => setActiveIndex(index)}
                                    isActive={index === activeIndex}
                                />
                            ))}
                            {/* button */}
                            <div className="pt-30">
                                <SmartLink
                                    href="/portfolio-col-4"
                                    className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black fw-700 tp-ff-dm"
                                >
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">View All Features Project</span>
                                        <span className="btn-icon">
                                            <PortfolioArrowIcon />
                                        </span>
                                        <span className="btn-icon">
                                            <PortfolioArrowIcon />
                                        </span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingPortfolio;