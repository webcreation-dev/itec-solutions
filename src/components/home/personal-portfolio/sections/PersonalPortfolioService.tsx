"use client";
import PersonalPortfolioServiceItem from "../components/PersonalPortfolioServiceItem";
import { serviceData } from "@/data/service-data";
import { useIsDarkRoute } from "@/hooks";

const PersonalPortfolioService = () => {
    // Retrieve personal portfolio service items for rendering
    const services = serviceData.personalPortfolio;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const serviceStyles = {
        sectionBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-black",
    };
    // -------------------------------
    return (
        <div className={`tp-service-area ${serviceStyles.sectionBg} pt-110 pb-200`}>
            <div className="container-fluid p-0">

                {/* Title Section */}
                <div className="tp-service-pp-title-box">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="tp-about-pp-title-wrap mb-40">
                                <span className="tp-section-pp-subtitle mb-15 tp-ff-heading fw-500 fs-18 tp-text-common-white d-inline-block">
                                    What I Do
                                </span>

                                <div className="tp-hero-sa-shape-2 tp-techonolgy-shape mr-140">
                                    <span className="shape-1 mb-5">
                                        <svg width="33" height="16" viewBox="0 0 33 16" fill="none">
                                            <path d="M16.6209 4.29153e-05C7.77239 4.29153e-05 0.599251 6.84014 0.599251 15.2778H32.6426C32.6426 6.84014 25.4694 4.29153e-05 16.6209 4.29153e-05Z" fill="white" />
                                        </svg>
                                    </span>

                                    <span className="shape-2">
                                        <svg width="67" height="44" viewBox="0 0 67 44" fill="none">
                                            <path d="M67 0.25H0V44L67 0.25Z" fill="#7D5DFF" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="tp-about-pp-title-wrap mb-40">
                                <h2 className="tp-section-pp-title fw-400 fs-50 fs-lg-42 fs-xs-30 lh-120-per tp_text_invert">
                                    I help brands build intuitive and user-friendly digital products through a strategic design approach.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services List */}
                <div className="tp-service-pp-pin">
                    {services.map((service) => (
                        <PersonalPortfolioServiceItem key={service.id} {...service} type="personalPortfolio" />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PersonalPortfolioService;