"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconEleven } from "@/svg";

const StartupAgencyCta = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const ctaStyles = {
        sectionBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-white-2",
        titleColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        subtitleColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        lineStroke: isDark ? "#999999" : "white",
        lineOpacity: isDark ? "0.1" : "1",
    };
    const dataBg = isDark ? undefined : "/assets/img/awards/grid-shape.png";

    return (
        <div
            className={`tp-cta-area p-relative pb-80 pt-100 ${ctaStyles.sectionBg} fix ${isDark ? "" : "bg-position"}`}
            data-background={dataBg}
        >
            <div className="tp-cta-wd-shape">
                <svg viewBox="0 0 733 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="line-1" d="M31.5 466.5L259 55.5L456 222L772.5 34" stroke={ctaStyles.lineStroke} strokeOpacity={ctaStyles.lineOpacity} strokeWidth="71" />
                </svg>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="tp-cta-wd-content text-center p-relative mb-30">
                            <span className={`tp-footer-top-subtitle fw-500 fs-18 mb-10 d-inline-block tp_fade_anim ${ctaStyles.subtitleColor}`} data-delay=".3">Get&apos;s Started a Projects?</span>
                            <h2 className={`tp-footer-top-title text-uppercase fw-600 mb-40 rotate-text-anim ${ctaStyles.titleColor}`}>Let&apos;s Talk</h2>
                            <div className="tp_fade_anim" data-delay=".5">
                                <a className="tp-cta-wd-email d-inline-block fs-35 fs-xs-25 fw-600 tp-text-common-white" href="#">infoexample@gmail.com</a>
                            </div>
                            <div className="tp-rounded-btn-wrap tp-cta-sa-btn text-lg-end mb-30 tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                <div className="btn_wrapper d-inline-block">
                                    <SmartLink href="/contact" className="tp-btn-rounded btn-item">
                                        <span className="d-block mb-10">
                                            <ArrowIconEleven />
                                        </span>
                                        Start the Journey
                                        <i className="tp-btn-circle-dot"></i>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyCta;
