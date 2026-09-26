"use client";
import CreativeAgencyPortfolioItem from "../components/CreativeAgencyPortfolioItem";
import { portfolio_2_slider_active } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioData from "@/data/portfolio-data";
import { SmartLink } from "@/components/common";
import { ArrowIconFourteen } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

const CreativeAgencyPortfolio = () => {
    // Retrieve creative agency portfolio items for rendering
    const portfolios = portfolioData.creativeAgency;

    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

        // Theme-based style tokens for portfolio section
    const portfolioTheme = {
        headingClass: isDarkTheme ? "tp-text-common-white" : "",
        labelClass: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        bodyTextClass: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-3",
        hoverClass: isDarkTheme ? "hover-text-white" : "hover-text-grey",
    };

    return (
        <div className="tp-portfolio-area tp-item-anime-area pt-110 pb-130">
            <div className="container">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-lg-7">
                        <div className="tp-text-perspective">
                            <h2 className={`tp-portfolio-sectitle tp-ff-funnel text-uppercase d-flex align-items-center mb-35 ${portfolioTheme.headingClass}`}>
                                Work
                            </h2>
                            <span className={`fw-500 fs-18 ${portfolioTheme.labelClass}`}>
                                Selected Work{" "}
                                <span className="tp-text-grey-1">(2015-2025)</span>
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-5">
                        <div className="tp-portfolio-2-para pt-200">
                            <div
                                className="tp-portfolio-tag mb-30 tp_fade_anim"
                                data-delay=".5"
                                data-fade-from="top"
                                data-ease="bounce"
                            >
                                <span>Dribbble</span>
                                <span>99Design</span>
                                <span>GitHub</span>
                            </div>

                            <div className="tp_fade_anim" data-delay=".5">
                                <p className={`tp-ff-funnel fw-600 fs-25 ${portfolioTheme.bodyTextClass} lh-1 mb-30`}>
                                    We bring ideas to life with creativity, precision, and impact.
                                </p>
                                <SmartLink
                                    href="/portfolio-col-4"
                                    className={`tp-left-right fw-500 fs-15 ${portfolioTheme.labelClass} ${portfolioTheme.hoverClass} text-uppercase`}
                                >
                                    <span className="mr10 td-text d-inline-block mr-5">
                                        View All Work
                                    </span>
                                    <span className="tp-arrow-angle">
                                        <ArrowIconFourteen />
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SLIDER */}
            <div className="col-12">
                <div className="tp-portfolio-2-slider-active pt-60">
                    <Swiper
                        {...portfolio_2_slider_active}
                    >
                        {portfolios.map((item, i) => (
                            <SwiperSlide key={i}>
                                <CreativeAgencyPortfolioItem key={i} {...item} type="creativeAgency" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyPortfolio;