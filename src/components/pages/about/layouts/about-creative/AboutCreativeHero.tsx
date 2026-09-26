"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";

const AboutCreativeHero = () => {
    const isDark = useIsDarkRoute();
    const { playVideo } = useVideoModal();

    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const strokeColor = isDark ? "#ffffff" : "#030303";

    return (
        <div className="tp-about-area pre-header tp-about-top-spacing fix">
            <div className="container-fluid container-1800 containers">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-about-top-content d-flex justify-content-between align-items-end mb-30">
                            <p className={`fs-20 lh-140-per ${descColor}`}>
                                ITEC Solutions réunit les compétences nécessaires<br />
                                pour accompagner des projets d&apos;ingénierie, de construction<br />
                                et de développement immobilier avec une vision commune.<br />
                                Nous transformons les ambitions en réalisations<br />
                                structurées, utiles et durables.
                            </p>
                            <span className="tp-about-top-shape tpswing d-none d-sm-inline-block mb-20 mr-35">
                                <svg width="53" height="94" viewBox="0 0 53 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.999985 16.1314C5.66665 24.1314 23 44.6315 39 38.1314C47.1667 34.6314 59.2542 23.6875 46 5.13144C41.0001 -1.86853 31.2001 -0.668564 26.0001 14.1314C23 22.6703 15.4999 43.1315 23.0001 61.1314C26.9585 70.6315 38.8001 85.3314 50.0001 90.1314M50.0001 90.1314C44.8334 87.4648 33.4001 84.3314 29.0001 93.1314M50.0001 90.1314C46.6668 88.2981 40.8001 80.9314 44.0001 66.1314M10.398 38.1314C9.53065 41.7543 8.39801 54.5 15.398 64.5" stroke={strokeColor} strokeWidth="1.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-about-top-title-wrap ml-70 mb-30">
                            <h2 className={`tp-about-top-title text-uppercase fs-70 lh-110-per ${textColor}`}>
                                <span></span>Une culture de projet, de rigueur et de collaboration.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-about-bottom-wrap containers mt-30 d-flex align-items-end justify-content-between">
                <div className="tp-about-bottom-thumb">
                    <img src="/assets/img/about/about-main/thumb.png" alt="Creative Agency 1" />
                </div>
                <div className="tp-about-bottom-thumb">
                    <img src="/assets/img/about/about-main/shape.png" alt="Shape Layout" />
                </div>
                <div className="tp-about-bottom-thumb">
                    <img className="rounded-circle" src="/assets/img/about/about-main/thumb-2.png" alt="Creative Agency 2" />
                </div>
                <div className="tp-about-bottom-thumb p-relative">
                    <img src="/assets/img/about/about-main/shape-2.png" alt="Creative Shape 2" />
                    <div className="tp-about-bottom-video">
                        <button onClick={() => playVideo("go7QYaQR494")} className="tp-hero-video-btn popup-video">
                            <span>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2595 11.3877C15.9455 10.276 15.9455 7.79857 14.2595 6.68685L4.82854 0.468212C2.95139 -0.769576 0.455619 0.592952 0.476139 2.84432L0.588819 15.2073C0.609123 17.4355 3.08348 18.7571 4.94126 17.5321L14.2595 11.3877Z" fill="currentColor" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="tp-about-bottom-thumb">
                    <img src="/assets/img/about/about-main/thumb-3.png" alt="Creative Agency 3" />
                </div>
            </div>
        </div>
    );
};

export default AboutCreativeHero;
