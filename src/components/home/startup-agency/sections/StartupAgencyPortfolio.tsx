"use client";
import StartupAgencyPortfolioItem from "../components/StartupAgencyPortfolioItem";
import { ArrowIconEleven, PortfolioLineIcon } from "@/svg";
import portfolioData from "@/data/portfolio-data";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const StartupAgencyPortfolio = () => {
    // Retrieve startup agency portfolio items for rendering
    const portfolios = portfolioData.startupAgency;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const portfolioStyles = {
        headingColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        yearColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
        dividerFill: isDark ? "#fff" : "#030303",
    };

    return (
        <div className="tp-portfolio-area portfolio__area pt-110 pb-135 p-relative">
            <Image className="tp-portfolio-sa-shape img-fluid" src="/assets/img/portfolio/sa/shape.png" alt="shape" width={635} height={474} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-portfolio-sa-title-wrap pb-70 d-lg-flex align-items-end justify-content-center text-center">
                            <span className={`fw-500 fs-35 text-uppercase mb-40 mr-35 d-inline-block text-end ${portfolioStyles.headingColor}`}>
                                <PortfolioLineIcon dividerFill={portfolioStyles.dividerFill} />
                                <span className="d-block">Selected</span>
                            </span>
                            <h2 className={`tp-portfolio-sa-title text-uppercase portfolio__text ${portfolioStyles.headingColor}`}>Work</h2>
                            <span className={`tp-ff-heading fw-500 fs-35 mb-40 ml-35 ${portfolioStyles.yearColor}`}>(2018-2025)</span>
                        </div>
                    </div>
                </div>
                <div className="row gx-50">
                    {portfolios.map((item, idx) => (
                        <StartupAgencyPortfolioItem key={idx} {...item} type="startupAgency" />
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-rounded-btn-wrap mt-30 text-center tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                            <div className="btn_wrapper d-inline-block">
                                <SmartLink href="/portfolio-col-4" className="tp-btn-rounded tp-ff-teko btn-item">
                                    <span className="d-block mb-10">
                                        <ArrowIconEleven />
                                    </span>
                                    View All<br /> Works
                                    <i className="tp-btn-circle-dot"></i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyPortfolio;
