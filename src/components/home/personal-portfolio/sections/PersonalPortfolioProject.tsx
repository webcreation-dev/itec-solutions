"use client";
import PersonalPortfolioProjectItem from "../components/PortfolioProjectItem";
import portfolioData from "@/data/portfolio-data";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const PersonalPortfolioProject = () => {
    // Retrieve IT Consulting portfolio items for rendering
    const portfolios = portfolioData.personalPortfolio;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const projectStyles = {
        text: isDark ? "tp-text-common-white" : "tp-text-common-black-3",
    };
    // -------------------------------
    return (
        <div className="tp-portfolio-area pt-135 pb-70 tp-panel-pin-area">
            <div className="container">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-lg-5">
                        <div className="tp-portfolio-sa-title-wrap mb-40 tp-panel-pin">
                            <span
                                className={`fw-500 fs-25 mb-5 ${projectStyles.text} d-flex align-items-center tp_fade_anim`}
                                data-delay=".3"
                            >
                                <svg
                                    className="mr-35"
                                    width="110"
                                    height="12"
                                    viewBox="0 0 110 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect y="10" width="110" height="2" rx="1" fill="#030303" />
                                    <rect x="60" width="50" height="2" rx="1" fill="#999999" />
                                </svg>
                                <span className="d-block">Featured</span>
                            </span>
                            <h2
                                className={`tp-portfolio-sa-title fw-500 text-uppercase ${projectStyles.text} mb-20 tp_fade_anim`}
                                data-delay=".5"
                            >
                                Work
                            </h2>
                            <div
                                className="tp-portfolio-tag tp_fade_anim"
                                data-delay=".7"
                                data-fade-from="top"
                                data-ease="bounce"
                            >
                                <span>Dribbble</span>
                                <span>99Design</span>
                                <span>Behance</span>
                            </div>

                            <div className="tp-portfolio-pp-border mt-30 mb-60">
                                <span>
                                    <svg viewBox="0 0 424 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM419 3.5L424 5.88675V0.113249L419 2.5V3.5ZM4.5 3.5H419.5V2.5H4.5V3.5Z" fill="#EEEEEE" />
                                    </svg>
                                </span>
                            </div>
                            <div
                                className="tp-rounded-btn-wrap tp-about-wd-btn tp_fade_anim"
                                data-delay=".5"
                                data-fade-from="top"
                                data-ease="bounce"
                            >
                                <div className="btn_wrapper d-inline-block">
                                    <SmartLink
                                        href="/portfolio-col-4"
                                        className="tp-btn-rounded btn-item"
                                    >
                                        <span className="d-block mb-10">
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        View All <br /> Works
                                        <i className="tp-btn-circle-dot"></i>
                                    </SmartLink>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Items */}
                    <div className="col-lg-7">
                        <div className="tp-portfolio-pp-item-wrap">
                            {portfolios.map((item, index) => (
                                <PersonalPortfolioProjectItem key={index} {...item} type="personalPortfolio" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioProject;