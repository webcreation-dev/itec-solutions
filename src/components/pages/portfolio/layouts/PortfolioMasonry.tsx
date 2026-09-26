"use client";

import React from "react";
import portfolioData from "@/data/portfolio-data";
import PortfolioItem from "@/components/home/digital-agency/components/PortfolioItem";
import BlogGridTextSlider from "@/components/blog/layouts/BlogGridTextSlider";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { DirectionalArrow } from "@/svg";

const PortfolioMasonry = () => {
    const isDark = useIsDarkRoute();
    const portfolios = portfolioData.digitalAgency;

    const headingColor = isDark ? "tp-text-common-white" : "";
    const bodyTextClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <main>
            {/* tp-portfolio-area-start */}
            <div className="tp-portfolio-masonary-spacing pre-header tp-portfolio-area pb-140">
                <div className="container containers">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="tp-portfolio-title-wrap mb-110">
                                <h2 className={`tp-portfolio-sectitle tp-ff-heading text-uppercase d-flex align-items-center ${headingColor}`}>
                                    Work <span className="borders ml-40"></span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tp-portfolio-para">
                                <p className={`fs-18 ${bodyTextClass} lh-28`}>
                                    We pride ourselves on delivering innovative, impactful, and results-driven projects that exceed expectations.
                                </p>
                                <div className="tp-portfolio-tag">
                                    <span>Dribbble</span>
                                    <span>Behance</span>
                                    <span>GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {portfolios.map((item) => (
                            <PortfolioItem
                                key={item.id}
                                {...item}
                                showButton={false}
                                type="digitalAgency"
                            />
                        ))}

                        <div className="col-12">
                            <div className="tp-portfolio-masonary-btn tp-rounded-btn-wrap text-center mt-65">
                                <div className="btn_wrapper d-inline-block">
                                    <SmartLink
                                        href="/portfolio-col-4"
                                        className="tp-btn-rounded btn-item"
                                    >
                                        <span className="d-block mb-10">
                                            <DirectionalArrow />
                                        </span>
                                        <i className="tp-btn-circle-dot"></i>
                                        Load more<br /> work
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-portfolio-area-end */}

            <BlogGridTextSlider />
        </main>
    );
};

export default PortfolioMasonry;
