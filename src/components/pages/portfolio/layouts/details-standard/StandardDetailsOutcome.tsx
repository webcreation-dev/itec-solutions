"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";

const StandardDetailsOutcome = () => {
    const isDark = useIsDarkRoute();
    const lineFill = isDark ? "#2a2a2a" : "#EEEEEE";
    const statColor = isDark ? "tp-text-common-white" : "tp-text-common-black";

    return (
        <div className="tp-portfolio-outcome-area pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-outcome-title mb-65">
                            <h2 className="fw-500 fs-50 fs-xs-38 lh-120-per mb-20">Project Outcome</h2>
                            <div className="tp-portfolio-details-line">
                                <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill={lineFill} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-5">
                        <div className="tp-portfolio-outcome-content mr-115 mb-60">
                            <p className="fw-300 fs-18 lh-150-per">After launching the new brand and website, XYZ Tech saw a 45% boost in conversions and a 30% increase in organic traffic within three months. Their sales team also reported improved customer engagement and higher-quality leads.</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7">
                        <div className="tp-portfolio-outcome-bost mb-60">
                            <span className="tp-ff-heading fs-25 lh-140-per tp-text-grey-1 fw-500">
                                <b className={statColor}>45%</b> increase in<br /> conversion
                            </span>
                            <span className="tp-ff-heading fs-25 lh-140-per tp-text-grey-1 fw-500">
                                <b className={statColor}>30%</b> boost <br />in organic traffic
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-portfolio-outcome-thumb mb-25">
                            <img className="w-100" src="/assets/img/portfolio/details/thumb-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-portfolio-outcome-thumb mb-25">
                            <img className="w-100" src="/assets/img/portfolio/details/thumb-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardDetailsOutcome;
