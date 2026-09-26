"use client";
import PortfolioItem from "../components/PortfolioItem";
import portfolioData from "@/data/portfolio-data";
import { SmartLink } from "@/components/common";
import { HeaderButtonArrow } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

const DigitalAgencyPortfolio = () => {
    // Retrieve IT Consulting portfolio items for rendering
    const portfolios = portfolioData.digitalAgency;
    const isDark = useIsDarkRoute();

    // Section heading (e.g., "Work") text color
    const portfolioSectionHeadingClass = isDark ? "tp-text-common-white" : "";

    // Section paragraph/content text color
    const portfolioContentClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <div className="tp-portfolio-area pt-110 pb-70">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="tp-portfolio-title-wrap mb-110 tp-text-perspective">
                            <h2 className={`tp-portfolio-sectitle ${portfolioSectionHeadingClass} tp-ff-heading text-uppercase d-flex align-items-center`}>
                                Work <span className="borders ml-40"></span>
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tp-portfolio-para">
                            <div className="tp_fade_anim" data-delay=".4">
                                <p className={`fs-18 ${portfolioContentClass} lh-28`}>
                                    We pride ourselves on delivering innovative, impactful, and
                                    results-driven projects that exceed expectations.
                                </p>
                            </div>

                            <div
                                className="tp-portfolio-tag tp_fade_anim"
                                data-delay=".5"
                                data-ease="bounce">
                                <span>Dribbble</span>
                                <span>Behance</span>
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {portfolios.map((item) => (
                        <PortfolioItem key={item.id} {...item} type="digitalAgency" />
                    ))}

                    <div className="col-12 d-lg-none">
                        <div
                            className="tp-portfolio-btn mb-40 text-center tp_fade_anim"
                            data-delay=".5"
                            data-ease="bounce"
                        >
                            <SmartLink
                                href="/portfolio-masonary"
                                className="tp-btn-xl d-inline-block lh-0 tp-round-36 fs-15 tp-bg-theme-primary text-uppercase ls-0 tp-btn-switch-animation tp-text-common-black hover-text-black tp-ff-heading fw-600"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">View All Work</span>

                                    <span className="btn-icon">
                                        <HeaderButtonArrow />
                                    </span>

                                    <span className="btn-icon">
                                        <HeaderButtonArrow />
                                    </span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyPortfolio;