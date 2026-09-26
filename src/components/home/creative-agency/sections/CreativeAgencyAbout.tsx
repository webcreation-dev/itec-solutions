"use client";
import { AbstractLineIcon, ArrowIconEleven, PartialCircleShape, PartialCircleShapeTwo, ShapeIcon, ShapeIconTwo } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const CreativeAgencyAbout = () => {
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

    // Theme-based UI configuration for About section
    const aboutThemeConfig = {
        titleTextClass: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-5",
        descriptionTextClass: isDarkTheme ? "tp-text-grey-2" : "",
        iconFillColor: isDarkTheme ? "white" : "#030303",
        circleShapeComponent: isDarkTheme ? PartialCircleShapeTwo : PartialCircleShape
    };

    const CircleShape = aboutThemeConfig.circleShapeComponent;

    return (
        <>
            <div className="tp-about-area section-m-spacing p-relative z-index-1 pt-130 pb-70">
                <div className="tp-portfolio-2-shape">
                    <span>
                        <CircleShape />
                    </span>
                </div>``
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-about-2-title-wrap mb-50">
                                <h2 className={`tp-about-2-title ${aboutThemeConfig.titleTextClass} tp-ff-funnel fw-500 fs-50 fs-md-30 lh-120-per tp_fade_anim`} data-delay=".3"><span className="space"></span>We don&apos;t just create—we transform. We are a <br />
                                    team of visionary designers, strategists, & storytellers dedicated to building brands that captivate and<br /> connect.</h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2">
                            <div className="text-center mb-30 tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <div className="tp-hero-right-shape pt-30">
                                    <span className="shape-1" data-speed="0.9">
                                        <ShapeIcon />
                                    </span>
                                    <span className="shape-2">
                                        <ShapeIconTwo fillColor={aboutThemeConfig.iconFillColor} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="tp-about-2-content mb-30">
                                <div className="tp_fade_anim" data-delay=".7">
                                    <p className={`fs-18 lh-28 mb-25 ${aboutThemeConfig.descriptionTextClass}`}>We are a creative agency passionate about crafting bold, innovative, and strategic brand experiences. From branding and design to digital marketing and content creation, we bring ideas to life with creativity, precision, and impact.</p>
                                    <p className={`fs-18 lh-28 mb-60 ${aboutThemeConfig.descriptionTextClass}`}>With a passion for innovation and a results-driven approach, we help businesses stand out in a crowded marketplace.</p>
                                </div>
                                <div className="tp-about-2-btn">
                                    <div className="tp-rounded-btn-wrap mb-30 mr-125 tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                                        <div className="btn_wrapper d-inline-block">
                                            <SmartLink href="/about-me" className="tp-btn-rounded btn-item">
                                                Start the Journey
                                                <span className="d-block mt-10">
                                                    <ArrowIconEleven />
                                                </span>
                                                <i className="tp-btn-circle-dot"></i>
                                            </SmartLink>
                                        </div>
                                    </div>
                                    <span className="upslide">
                                        <AbstractLineIcon fillColor={aboutThemeConfig.iconFillColor} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="tp-about-2-thumb text-lg-end mb-30 tp_fade_anim" data-delay=".9">
                                <Image className="img-fluid" width={424} height={395} src="/assets/img/about/about/thumb.png" alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-about-2-border p-relative z-index-1"></div>
        </>
    );
};

export default CreativeAgencyAbout;