"use client";

import React from "react";
import AnimatedCounterTwo from "@/components/shared/Counter/AnimatedCounterTwo";
import { useIsDarkRoute } from "@/hooks";

const TeamDetailsCounter = () => {
    const isDark = useIsDarkRoute();

    const dividerColor = isDark ? "#fff" : "#999999";
    const dividerOpacity = isDark ? "0.2" : "0.6";
    const countTextClass = isDark ? "tp-text-common-white" : "";
    const subtitleClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <div className="tp-counter-area pt-80 pb-90">
            <div className="container">
                <div className="row">
                    {/* Item 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tp-counter-team-wrap d-flex align-items-center mb-30 p-relative">
                            <span className="tp-counter-team-dvdr">
                                <svg width="6" height="59" viewBox="0 0 6 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 54L0.113249 59H5.88675L3.5 54H2.5ZM2.5 4.5V54.5H3.5V4.5H2.5Z"
                                        fill={dividerColor}
                                        fillOpacity={dividerOpacity}
                                    />
                                </svg>
                            </span>
                            <h2 className={`tp-counter-team-count fw-500 fs-70 lh-120-per ${countTextClass}`}>
                                <AnimatedCounterTwo min={0} max={258} customTag='div' /> <span>+</span>
                            </h2>
                            <span className={`tp-counter-team-subtitle fw-400 fs-18 lh-140-per ${subtitleClass}`}>
                                Creative Team<br /> Member
                            </span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tp-counter-team-wrap d-flex align-items-center justify-content-md-center mb-30">
                            <h2 className={`tp-counter-team-count fw-500 fs-70 lh-120-per ${countTextClass}`}>
                                <AnimatedCounterTwo min={0} max={1} customTag='div' />M<span>+</span>
                            </h2>
                            <span className={`tp-counter-team-subtitle fw-400 fs-18 lh-140-per ${subtitleClass}`}>
                                Accumulated<br /> over $1M
                            </span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tp-counter-team-wrap d-flex align-items-center justify-content-lg-end mb-30 p-relative">
                            <span className="tp-counter-team-dvdr-2">
                                <svg width="6" height="59" viewBox="0 0 6 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 54L0.113249 59H5.88675L3.5 54H2.5ZM2.5 4.5V54.5H3.5V4.5H2.5Z"
                                        fill={dividerColor}
                                    />
                                </svg>
                            </span>
                            <h2 className={`tp-counter-team-count fw-500 fs-70 lh-120-per ${countTextClass}`}>
                                <AnimatedCounterTwo min={0} max={3} customTag='div' />X <span>+</span>
                            </h2>
                            <span className={`tp-counter-team-subtitle fw-400 fs-18 lh-140-per ${subtitleClass}`}>
                                3X Faster Growth<br /> Business
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsCounter;
