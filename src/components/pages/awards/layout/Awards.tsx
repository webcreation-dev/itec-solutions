"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const Awards = () => {
    const isDark = useIsDarkRoute();

    const pricingSectionBgClass = isDark ? "tp-bg-common-black" : "";
    const titleTextClass = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const paraTextClass = isDark ? "tp-text-grey-2" : "tp-text-common-black-6";

    return (
        <main>
            {/* tp-pricing-area-start */}
            <div className={`tp-pricing-area pre-header tp-pricing-2-spacing bg-position pb-140 ${pricingSectionBgClass}`}>
                <div className="container-fluid container-1800 containers">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-9">
                            <div className="tp-pricing-ai-title-wrap">
                                <h2 className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 ${titleTextClass}`}>
                                    Our Awwwards
                                </h2>
                                <p className={`tp-section-ai-para tp-ff-dm mb-55 fw-400 fs-22 ls-m-2 lh-150-per ${paraTextClass}`}>
                                    We craft digital experiences that engage, convert, and grow<br /> your business. From branding.
                                </p>
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-border pt-25">
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <span></span>
                                        </li>
                                        <li>Awwwards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-pricing-area-end */}

            {/* tp-awards-vp-area-start */}
            <div id="awards" className="tp-awards-vp-content-row text-align-center pb-120" data-bgcolor="#0c0c0c">
                <div className="tp-awards-vp-move-thumbs-wrapper">
                    <div className="tp-awards-vp-start-thumbs-wrapper">
                        <div className="tp-awards-vp-start-move-thumb" data-start="top 120%" data-stop="600%">
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img src="/assets/img/awards/vp/aw01.jpg" className="item-image" alt="Award 1" />
                                </div>
                            </div>
                        </div>
                        <div className="tp-awards-vp-start-move-thumb" data-start="top 90%" data-stop="1100%">
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img src="/assets/img/awards/vp/aw02.jpg" className="item-image" alt="Award 2" />
                                </div>
                            </div>
                        </div>
                        <div className="tp-awards-vp-start-move-thumb" data-start="top 90%" data-stop="400%">
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img src="/assets/img/awards/vp/aw03.jpg" className="item-image" alt="Award 3" />
                                </div>
                            </div>
                        </div>
                        <div className="tp-awards-vp-start-move-thumb" data-start="top 120%" data-stop="600%">
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img src="/assets/img/awards/vp/aw04.jpg" className="item-image" alt="Award 4" />
                                </div>
                            </div>
                        </div>
                        <div className="tp-awards-vp-start-move-thumb" data-start="top 100%" data-stop="750%">
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img src="/assets/img/awards/vp/aw05.jpg" className="item-image" alt="Award 5" />
                                </div>
                            </div>
                        </div>
                        <div className="tp-awards-vp-start-move-thumb" data-start="top 40%" data-stop="300%">
                            <div className="tp-awards-vp-move-thumb-inner">
                                <div className="tp-awards-vp-section-image">
                                    <img src="/assets/img/awards/vp/aw06.jpg" className="item-image" alt="Award 6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-awards-vp-end-thumbs-wrapper">
                        <div className="tp-awards-vp-end-move-thumb"></div>
                        <div className="tp-awards-vp-end-move-thumb"></div>
                        <div className="tp-awards-vp-end-move-thumb"></div>
                        <div className="tp-awards-vp-end-move-thumb"></div>
                        <div className="tp-awards-vp-end-move-thumb"></div>
                        <div className="tp-awards-vp-end-move-thumb"></div>
                    </div>
                </div>
            </div>
            {/* tp-awards-vp-area-end */}
        </main>
    );
};

export default Awards;
