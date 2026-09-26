"use client";
import { PlumbingButtonArrow, PlumbingPipeIcon, RepairToolIcon, WaterTapIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Link from "next/link";

const PlumbingServiceTextAbout = () => {
    const isDarkTheme = useIsDarkRoute();

    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const aboutStyles = {
        backgroundColor: isDarkTheme ? "tp-bg-grey-8" : "tp-bg-common-white",
        headingColor: isDarkTheme ? "tp-bg-grey-8" : "",
        textColor: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-5",
        svgFill:isDarkTheme ? "#fff":"#111112"
    };

    return (
        <div className={`tp-about-area pt-150 pb-105 ${aboutStyles.backgroundColor}`}>
            <div className="container-fluid container-1646">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-about-pb-title-wrap mb-30">
                            <h2 className="tp-section-pb-title tp_text_invert invert-black-5 tp-ff-sora fs-48 fs-lg-40 fs-xs-34 ls-m-2 lh-120-per">Aleric delivered exactly<br />
                                what we needed — efficient,
                                reliable, and results-driven
                                solutions.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-about-pb-para ml-140 p-relative z-index-1">
                            <div className="tp_fade_anim" data-delay=".4" data-fade-from="right">
                                <p className={`tp-ff-inter ${aboutStyles.textColor} opacity-8 mr-40 mb-30`}>We bring the same commitment to every plumbing design project. Our team
                                    specializes in creating tailored plumbing systems that prioritize performance,
                                    sustainability, and long-term reliability. Whether it&apos;s a new build, a renovation,
                                    pressure regulation, and compliance with local building codes.</p>
                            </div>
                            <div className="tp_fade_anim" data-delay=".4" data-fade-from="right">
                                <p className={`tp-ff-inter ${aboutStyles.textColor} opacity-8 mr-30 mb-50`}>From kitchens and bathrooms to full-scale mechanical rooms, we design systems
                                    that integrate seamlessly with your overall layout. Our approach reduces installation
                                    costs, minimizes future maintenance, and supports eco-conscious water use.
                                    expertise, innovation, and peace of mind.</p>
                            </div>
                            <div className="tp_fade_anim" data-delay=".4" data-fade-from="right" data-ease="bounce">
                                <SmartLink href="/about-me" className="tp-left-right d-inline-block tp-left-right-pb tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 hover-text-white">
                                    <span className="td-text d-inline-block mr-5">About Us</span>
                                    <span className="tp-arrow-angle tp-arrow-angle-pb">
                                        <PlumbingButtonArrow />
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-about-pb-shape">
                <img className="has_fade_anim w-100" data-fade-from="left" data-duration="2" data-delay="0.3"
                    data-fade-offset="80" data-ease="bounce" src="/assets/img/about/pb/shape.png" alt="shape" />
            </div>
            <div className="tp-about-pb-feature-wrap">
                <div className="container-fluid container-1646">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="tp-about-pb-feature-list mb-40 tp_fade_anim" data-delay=".3">
                                <ul>
                                    <li><Link href="#">+ General Repairs</Link></li>
                                    <li><Link href="#">+ Assembly & Installation</Link></li>
                                    <li><Link href="#">+ Maintenance & Exterior</Link></li>
                                    <li><Link href="#">+ Plumbing Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tp-about-pb-feature-right ml-70">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="tp-about-pb-feature-item mb-50 tp_fade_anim" data-delay=".5">
                                            <span className="tp-about-pb-feature-icon mb-25">
                                                <PlumbingPipeIcon fillColor={aboutStyles.svgFill}/>
                                            </span>
                                            <h5 className={`tp-about-pb-feature-title tp-ff-inter fw-600 fs-28 ls-m-5 ${aboutStyles.textColor} mb-15`}>IT Consulting & Strategy.</h5>
                                            <p className={`tp-about-pb-feature-para tp-ff-inter lh-160-per ${aboutStyles.textColor} opacity-8`}>help businesses align their technology long-term goals<br />
                                                through expert consulting smart strategy.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6"></div>
                                    <div className="col-lg-6 col-md-6"></div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="tp-about-pb-feature-item mb-50 tp_fade_anim" data-delay=".5">
                                            <span className="tp-about-pb-feature-icon mb-25">
                                                <RepairToolIcon fillColor={aboutStyles.svgFill}/>
                                            </span>
                                            <h5 className={`tp-about-pb-feature-title tp-ff-inter fw-600 fs-28 ls-m-5 ${aboutStyles.textColor} mb-15`}>IT Consulting & Strategy.</h5>
                                            <p className={`tp-about-pb-feature-para tp-ff-inter lh-160-per ${aboutStyles.textColor} opacity-8`}>help businesses align their technology long-term goals<br />
                                                through expert consulting smart strategy.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="tp-about-pb-feature-item mb-50 tp_fade_anim" data-delay=".5">
                                            <span className="tp-about-pb-feature-icon mb-25">
                                                <WaterTapIcon fillColor={aboutStyles.svgFill}/>
                                            </span>
                                            <h5 className={`tp-about-pb-feature-title tp-ff-inter fw-600 fs-28 ls-m-5 ${aboutStyles.textColor} mb-15`}>IT Consulting & Strategy.</h5>
                                            <p className={`tp-about-pb-feature-para tp-ff-inter lh-160-per ${aboutStyles.textColor} opacity-8`}>help businesses align their technology long-term goals<br />
                                                through expert consulting smart strategy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceTextAbout;