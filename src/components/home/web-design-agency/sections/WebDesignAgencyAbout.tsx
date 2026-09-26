"use client";
import { AboutCircularArcShape, AboutDarkCircularArcShape, ArrowIconEleven } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const WebDesignAgencyAbout = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-grey-1",
        shapeFill: isDarkTheme ? "#fff" : "#030303",
    };
    const aboutShape = isDarkTheme ? "/assets/img/about/wd/shape-white.png" : "/assets/img/about/wd/shape.png";
    const CircularArcShapeComponent = isDarkTheme ? AboutDarkCircularArcShape : AboutCircularArcShape
    // -------------------------------

    return (
        <div id="about" className="tp-about-area pt-130 pb-110 p-relative z-index-1">
            <span className="tp-about-wd-shape-2">
                <CircularArcShapeComponent />
            </span>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10">
                        <div className="tp-about-wd-title-wrap mb-50 tp_fade_anim" data-delay=".3">
                            <h2 className={`tp-about-wd-title tp-ff-teko fw-600 fs-70 fs-sm-60 fs-xs-43 text-uppercase ${themeClasses.textPrimary}`}>We&apos;re Global Brand<br />
                                <Image width={180} height={44} src={aboutShape} alt="shape" />{" "}
                                Design Agency.</h2>
                        </div>
                        <div className="tp-about-wd-para-wrap mb-75">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="tp-about-wd-para mb-30 tp_fade_anim" data-delay=".5">
                                        <p className={`fs-18 fw-500 ${themeClasses.textBody}`}>We believe a website isn&apos;t just a<br /> digital presence— <span className={themeClasses.textPrimary}>it&apos;s a powerful tool<br /> that tells your story.</span></p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tp-about-wd-para mb-30 tp_fade_anim" data-delay=".7">
                                        <p className={`fs-18 ${themeClasses.textBody}`}>We&apos;re a team of passionate designers, developers, and strategists dedicated to creating stunning, functional websites that align with your unique business goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                        <div className="tp-about-wd-shape tp_fade_anim" data-delay=".4" data-fade-from="top" data-ease="bounce">
                            <span className="shape-1 mb-10 d-inline-block">
                                <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35 0V33H0L35 0Z" fill="#C4EE18" />
                                </svg>
                            </span>
                            <span className="shape-1">
                                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 40C62.0914 40 80 22.0914 80 0H0C0 22.0914 17.9086 40 40 40Z" fill={themeClasses.shapeFill} />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="tp-about-wd-thumb-wrap mb-30 fix">
                            <img className="myimg w-100" data-speed=".9" src="/assets/img/about/wd/thumb.jpg" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="tp-rounded-btn-wrap tp-about-wd-btn tp-rounded-btn-wd mt-100 text-md-end mr-40 mb-30 tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                            <div className="btn_wrapper d-inline-block">
                                <SmartLink href="/about-modern" className="tp-btn-rounded tp-ff-teko btn-item">
                                    Discover<br /> More Today
                                    <span className="d-block mt-10">
                                        <ArrowIconEleven />
                                    </span>
                                    <i className="tp-btn-circle-dot"></i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="tp-about-expreance tp-about-wd-expreance d-flex align-items-end mb-30 tp_fade_anim" data-delay=".9">
                            <h2 className="tp-ff-teko fw-600 fs-100 p-relative d-inline-block mb-0 lh-1">12 <span className="plus fs-25">+</span></h2>
                            <span className="fs-18 fw-500 lh-22 tp-text-common-black mb-15 ml-35">Years of<br /> Experience</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-about-wd-thumb2 p-relative mb-30">
                            <div className="tp-about-wd-thumb3 z-index-1" data-speed=".9">
                                <Image width={200} height={300} className="myimg img-fluid" src="/assets/img/about/wd/thumb-2.jpg" alt="thumb" />
                            </div>
                            <div className="tp-about-wd-thumb4">
                                <Image width={312} height={260} className="myimg img-fluid" src="/assets/img/about/wd/thumb-3.jpg" alt="thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyAbout;