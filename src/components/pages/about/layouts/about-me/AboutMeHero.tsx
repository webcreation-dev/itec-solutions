"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";

const AboutMeHero = () => {
    const isDark = useIsDarkRoute();
    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const strokeColor = isDark ? "#ffffff" : "#030303";

    return (
        <>
            {/* about area start */}
            <div className="tp-about-area pre-header tp-about-top-spacing fix pb-20">
                <div className="container-fluid container-1800 containers">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-about-me-wrap p-relative">
                                <div className="tp-about-top-content d-flex justify-content-between align-items-end mb-55">
                                    <p className={`fs-20 lh-140-per ${descColor}`}>
                                        I’m <b className={`${textColor} fw-500`}>Gabriel Mathiwes</b>, a passionate Product<br /> Designer with a deep focus on creating user-<br /> centric digital experiences. With a blend of<br /> design thinking, UX/UI expertise, and problem-<br /> solving skills, I craft intuitive and aesthetically<br /> pleasing products that drive engagement and<br /> business success.
                                    </p>
                                    <span className="tp-about-me-shape d-none d-sm-inline-block tpswing">
                                        <svg width="53" height="94" viewBox="0 0 53 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.999985 16.1314C5.66665 24.1314 23 44.6315 39 38.1314C47.1667 34.6314 59.2542 23.6875 46 5.13144C41.0001 -1.86853 31.2001 -0.668564 26.0001 14.1314C23 22.6703 15.4999 43.1315 23.0001 61.1314C26.9585 70.6315 38.8001 85.3314 50.0001 90.1314M50.0001 90.1314C44.8334 87.4648 33.4001 84.3314 29.0001 93.1314M50.0001 90.1314C46.6668 88.2981 40.8001 80.9314 44.0001 66.1314M10.398 38.1314C9.53065 41.7543 8.39801 54.5 15.398 64.5" stroke={strokeColor} strokeWidth="1.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="tp-about-expreance d-flex align-items-end mb-30">
                                    <h2 className={`fw-500 fs-100 p-relative d-inline-block mb-0 lh-1 ${textColor}`}>
                                        08 <span className={`plus fs-25 ${textColor}`}>+</span>
                                    </h2>
                                    <span className={`tp-ff-heading fs-18 fw-700 ${textColor} mb-15 ml-35`}>
                                        Years of<br /> Experience
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-top-title-wrap ml-70 mb-30">
                                <h2 className={`tp-about-top-title tp-about-me-title text-uppercase fs-70 lh-110-per mb-100 ${textColor}`}>
                                    <span></span>A Passionate User-Centric Product Designer.
                                </h2>
                                <span className={`tp-about-me-email tp-ff-heading fw-500 fs-25 ${textColor}`}>
                                    Email: <a className="hover-text-grey" href="mailto:info@example.com">info@example.com</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}


            {/* tp-banner-area-start */}
            <div className="tp-about-me-banner scale-up-img">
                <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/breadcrumb/thumb.jpg" alt="About Thumbnail" />
            </div>
            {/* tp-banner-area-end */}
        </>
    );
};

export default AboutMeHero;
