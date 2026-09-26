"use client";
import { DirectionalArrow, RingCircleIconTwo } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const StartupAgencyAbout = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const serviceClasses = {
        titleClass: isDark ? "tp-text-common-white" : "tp_text_invert invert-black-2",
        paragraphColor: isDark ? "tp-text-grey-2" : "",
        counterColor: isDark ? "tp-text-common-white" : "",
        counterLabelColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        ringStroke: isDark ? "#999999" : "#F0F0F0",
        ringStrokeOpacity: isDark ? "0.1" : "1",
        shapeFill: isDark ? "#fff" : "#030303"
    };

    return (
        <div className="tp-about-area pt-120 pb-110 p-relative z-index-1">
            <span className="tp-about-sa-shape3 d-none d-sm-inline-block">
                <RingCircleIconTwo ringStroke={serviceClasses.ringStroke} ringStrokeOpacity={serviceClasses.ringStrokeOpacity} />
            </span>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-10">
                        <div className="tp-about-wd-title-wrap mb-50">
                            <h2 className={`tp-about-wd-title fs-50 fs-sm-35 lh-120-per ${serviceClasses.titleClass}`}>We adapt to market changes, ensuring your startup stays ahead.</h2>
                        </div>
                        <div className="tp-about-wd-para-wrap mb-35">
                            <div className="row">
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                    <div className="tp-about-wd-para mb-30 tp_fade_anim" data-delay=".3">
                                        <p className={`fs-18 ${serviceClasses.paragraphColor}`}>We&apos;re a team of passionate designers, developers, and strategists dedicated to creating stunning, functional websites that align with your unique business goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-2 col-md-2">
                        <div className="tp-about-wd-shape tp-about-sa-shape tp_fade_anim" data-delay=".4" data-fade-from="top" data-ease="bounce">
                            <span className="shape-1 d-inline-block mr-10">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill="#7D5DFF" />
                                </svg>
                            </span>
                            <span className="shape-1 mb-15" data-speed=".9">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill={serviceClasses.shapeFill} />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-about-wd-thumb-wrap fix mb-30">
                            <Image data-speed=".9" className="my-img img-fluid" src="/assets/img/about/sa/thumb.jpg" alt="about thumb" width={312} height={328} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-rounded-btn-wrap tp-about-sa-btn tp-rounded-btn-wd mb-30">
                            <div className="tp-about-expreance d-flex align-items-end mb-55 tp_fade_anim" data-delay=".5">
                                <h2 className={`fw-500 fs-100 p-relative d-inline-block mb-0 lh-1 ${serviceClasses.counterColor}`}>08 <span className="plus fs-25">+</span></h2>
                                <span className={`fs-18 fw-500 lh-22 mb-15 ml-35 ${serviceClasses.counterLabelColor}`}>Years of<br /> Experience</span>
                            </div>
                            <div className="btn_wrapper d-inline-block tp_fade_anim" data-delay=".6" data-fade-from="top" data-ease="bounce">
                                <SmartLink href="/about-creative" className="tp-btn-rounded tp-ff-teko btn-item">
                                    <span className="d-block mb-10">
                                        <DirectionalArrow />
                                    </span>
                                    About more<br /> Aleric
                                    <i className="tp-btn-circle-dot"></i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div className="tp-about-wd-thumb2 tp-about-sa-thumb2 p-relative mb-30">
                            <div className="tp-about-wd-thumb3 z-index-1">
                                <Image className="myimg" src="/assets/img/about/sa/thumb-3.jpg" alt="about thumb-3" width={312} height={304} />
                            </div>
                            <div className="tp-about-wd-thumb4" data-speed=".9">
                                <Image className="myimg" src="/assets/img/about/sa/thumb-2.jpg" alt="about thumb-2" width={204} height={198} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyAbout;
