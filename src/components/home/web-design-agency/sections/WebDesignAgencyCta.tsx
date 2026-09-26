"use client";
import { ArrowIconEleven, ArrowIconTwelve } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Link from "next/link";

const WebDesignAgencyCta = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        sectionBgClass: isDarkTheme ? "tp-bg-grey-8" : "tp-bg-common-black",
    };
    const ctaBgImage = !isDarkTheme
        ? "/assets/img/awards/grid-shape.png"
        : null;
    // -------------------------------
    return (
        <div className={`tp-cta-area bg-position p-relative pb-80 pt-100 ${themeClasses.sectionBgClass} fix`}
            style={{ backgroundImage: `url(${ctaBgImage})` }}>
            <div className="tp-cta-wd-shape">
                <svg viewBox="0 0 733 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="line-1" d="M31.5 466.5L259 55.5L456 222L772.5 34" stroke="#1E1E1E" strokeWidth="71" />
                </svg>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="tp-cta-wd-content mb-30">
                            <span className="tp-footer-top-subtitle tp-text-common-white fw-500 fs-18 tp-ff-p mb-20 tp_fade_anim" data-delay=".3">Get&apos;s Started a Projects?
                                <ArrowIconTwelve fillColor="white" />
                            </span>
                            <h2 className="tp-footer-top-title rotate-text-anim tp-ff-teko tp-text-common-white text-uppercase fw-600">Let&apos;s Talk</h2>
                            <div className="tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                                <Link className="tp-cta-wd-email d-inline-block fs-35 fs-xs-25 fw-600 tp-text-common-white" href="mailto:infoexample@gmail.com">infoexample@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="tp-rounded-btn-wrap tp-footer-btn text-lg-end mb-30 tp_fade_anim" data-delay=".6" data-fade-from="top" data-ease="bounce">
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
    );
};

export default WebDesignAgencyCta;