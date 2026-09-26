"use client";

import React from "react";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const AboutCreativeCounter = () => {
    const isDark = useIsDarkRoute();
    const counterColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const labelColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <div className="tp-counter-area pt-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-counter-wrap">
                            <div className="tp-counter-wrap-box bounce_animation">
                                
                                {/* 34K Project Completed */}
                                <div className="tp-counter-item bounce__anim">
                                    <h3 className={`fw-500 fs-70 fs-md-50 text-uppercase ${counterColor}`}>
                                        <AnimatedCounter min={0} max={34} />K
                                    </h3>
                                    <span className={`fw-500 fs-18 fs-md-15 lh-22 ${labelColor}`}>
                                        Project Completed
                                    </span>
                                </div>

                                {/* 16 Country Office */}
                                <div className="tp-counter-item bounce__anim">
                                    <h3 className={`fw-500 fs-70 fs-md-50 text-uppercase ${counterColor}`}>
                                        <AnimatedCounter min={0} max={16} />
                                    </h3>
                                    <span className={`fw-500 fs-18 fs-md-15 lh-22 ${labelColor}`}>
                                        Country Office
                                    </span>
                                </div>

                                {/* 12+ Year of Experience */}
                                <div className="tp-counter-item bounce__anim">
                                    <h3 className={`fw-500 fs-70 fs-md-50 text-uppercase ${counterColor}`}>
                                        <AnimatedCounter min={0} max={12} />+
                                    </h3>
                                    <span className={`fw-500 fs-18 fs-md-15 lh-22 ${labelColor}`}>
                                        Year of Experience
                                    </span>
                                </div>

                                {/* 98% Happy Customer */}
                                <div className="tp-counter-item bounce__anim">
                                    <h3 className={`fw-500 fs-70 fs-md-50 text-uppercase ${counterColor}`}>
                                        <AnimatedCounter min={0} max={98} />%
                                    </h3>
                                    <span className={`fw-500 fs-18 fs-md-15 lh-22 ${labelColor}`}>
                                        Happy Customer
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCreativeCounter;
