"use client";

import React from "react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const StandardDetailsContent = () => {
    const isDark = useIsDarkRoute();
    const btnTextClass = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const lineFill = isDark ? "#2a2a2a" : "#EEEEEE";

    return (
        <>
            {/* banner image start */}
            <div className="tp-about-me-banner scale-up-img">
                <img data-speed="0.4" className="img-cover scale-up" src="/assets/img/portfolio/details/thumb.jpg" alt="" />
            </div>
            {/* banner image end */}

            {/* tp-portfolio-details-area-start */}
            <div className="tp-portfolio-details-shedule-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-7 col-lg-6">
                            <div className="tp-portfolio-details-shedule-title h-100 d-flex align-items-end">
                                <h2 className="fw-500 fs-50 fs-xs-38 lh-120-per mb-20">Setting the Stage</h2>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6">
                            <div className="tp-portfolio-details-shedule">
                                <ul>
                                    <li>
                                        <span>Category</span>
                                        UI/UX Design
                                    </li>
                                    <li>
                                        <span>Client Name</span>
                                        Mr. Daniel Shami
                                    </li>
                                    <li>
                                        <span>Industry</span>
                                        Technology & Software
                                    </li>
                                    <li>
                                        <span>Launch Date</span>
                                        02 March, 2024
                                    </li>
                                </ul>
                                <SmartLink href="#" className={`tp-portfolio-details-shedule-btn tp-left-right fw-500 tp-ff-heading fs-15 text-uppercase ${btnTextClass}`}>
                                    <span className="td-text d-inline-block mr-5">View This Project</span>
                                    <span className="tp-arrow-angle">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-portfolio-details-line mb-55">
                                <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill={lineFill} />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-portfolio-details-content mr-110">
                                <p className="fs-18 fw-300 lh-150-per mb-20">XYZ Tech, a fast-growing SaaS company, approached us to refresh their brand identity and digital presence to attract enterprise clients. Our goal was to create a modern, scalable, and visually striking brand that resonated with their target audience.</p>
                                <p className="fs-18 fw-300 lh-150-per">Branding design is the visual and strategic identity of a business, shaping how it is perceived by customers. It includes elements like the logo, color palette, typography, imagery, and messaging, all working together to create a strong and memorable brand presence.</p>
                                <div className="tp-service-details-content mt-55 mb-40">
                                    <h5 className="fs-25 mb-25">Our Approach & Process</h5>
                                    <ul>
                                        <li>
                                            <i className="fa-regular fa-circle-check"></i>
                                            <p><b>Research & Strategy –</b> How the project was planned and insights gathered.</p>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check"></i>
                                            <p><b>Design & Development – </b> Key design decisions, wireframes, mockups, prototypes, or tech stacks used.</p>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check"></i>
                                            <p><b>Branding Elements –</b>  Logo, color palette, typography, and visual identity.</p>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check"></i>
                                            <p><b>User Experience Considerations – </b> Accessibility, responsiveness, usability improvements.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-portfolio-details-content-right">
                                <h5 className="fs-25 mb-25">Challenge We Faced.</h5>
                                <p className="fs-18 fw-300 lh-150-per mb-160">XYZ Tech struggled with an inconsistent visual identity and a website that wasn’t converting leads effectively. Their brand didn’t reflect their position as a leading SaaS provider. Our mission was to redefine their brand with a fresh identity, intuitive UX, and high-converting website design.</p>
                                <div className="tp-portfolio-details-thumb">
                                    <img src="/assets/img/portfolio/details/thumb-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-portfolio-details-area-end */}
        </>
    );
};

export default StandardDetailsContent;
