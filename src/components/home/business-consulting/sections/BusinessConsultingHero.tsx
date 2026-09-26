"use client";
import { ArrowIcon, HeroScrollArrow, HeroShapeIconTwo, LetterAIcon, MessageIcon } from "@/svg";
import { ScrollLink } from "@/components/common/ScrollLink";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { useState } from "react";
import Image from "next/image";

const BusinessConsultingHero = () => {
    const [activeService, setActiveService] = useState(1);
    const handleServiceHover = (imgClass: string, index: number) => {
        setActiveService(index);
        const bg = document.getElementById("service-bg-img");
        if (!bg) return;
        bg.className = imgClass;
    };

    const isDarkRoute = useIsDarkRoute();
    // -------------------------------
    // Classes
    // -------------------------------
    const heroClasses = {
        textColor: isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-1",
        paragraphTextClass: isDarkRoute ? "tp-text-grey-2" : "tp-text-common-black-1",
        btnBackground: isDarkRoute ? "tp-bg-common-white" : "tp-bg-common-black-1",
        btnTextClass: isDarkRoute ? "tp-text-common-black-1" : "tp-text-common-white",
        btnHoverTextClass: isDarkRoute ? "" : "hover-text-white",
        svgLetterAColor: isDarkRoute ? "#1A1B1E" : "#10302A",
        scrollArrowIconColor: isDarkRoute ? "currentColor" : "#030303"
    };
    const circleShapeImage = isDarkRoute ? "/assets/img/hero/cst/shape-black.png" : "/assets/img/hero/cst/shape.png";
    // -------------------------------

    return (
        <>
            <div className="tp-hero-area pre-header tp-hero-cst-spacing p-relative">
                <div className="container-fluid container-1800 containers">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="tp-hero-cst-content mb-30">
                                <div className="tp-hero-cst-btp d-none d-xl-block mb-20">
                                    <ScrollLink target="#about" className="tp-smooth">
                                        <HeroScrollArrow fillColor={heroClasses.scrollArrowIconColor} />
                                    </ScrollLink>
                                </div>
                                <div>
                                    <h2 className={`fw-800 mb-15 tp-ff-dm fs-60 fs-md-50 fs-xs-37 lh-120-per ls-m-2 ${heroClasses.textColor}`}>Real Results,<br /> Reliable Consulting
                                        <LetterAIcon fillColor={heroClasses.svgLetterAColor} />
                                    </h2>
                                    <p className={`fs-18 tp-ff-dm ${heroClasses.paragraphTextClass}`}>Building lasting partnerships through strategic insight, innovation, and trust.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tp-hero-cst-right mb-35">
                                <div className="tp-hero-cst-impact-wrap p-relative d-flex align-items-center mb-50">
                                    <div className="mr-15">
                                        <Image width={50} height={50} src={circleShapeImage} alt="shape" />
                                    </div>
                                    <div className="tp-hero-cst-impact-text lh-1">
                                        <span className={`tp-hero-cst-impact-border fs-15 tp-text-black-1 ${heroClasses.textColor} tp-ff-dm ls-0`}>We Build Unique</span>
                                        <span className={`fs-15 ls-0 d-inline-block  tp-ff-dm mr-30 ${heroClasses.textColor}`}>Strategy + Creativity = <span className="fw-600">Impact</span></span>
                                    </div>
                                </div>
                                <div className="tp-hero-cst-btn-inner">
                                    <SmartLink href="/service-4" className={`tp-btn-cst mb-15 d-inline-block mr-5 lh-0 tp-round-26 fs-15 ${heroClasses.btnBackground} ls-0 tp-btn-switch-2-animation ${heroClasses.btnTextClass} ${heroClasses.btnHoverTextClass} fw-700 tp-ff-dm`}>
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Free Consulting</span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                        </span>
                                    </SmartLink>{" "}
                                    <SmartLink href="/service-4" className={`tp-btn-cst mb-15 tp-btn-border d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation fw-700 tp-ff-dm ${heroClasses.textColor}`}>
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Schedule a Consultation</span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-cst-bottom pre-header p-relative z-index-1 fix">
                <div className="containers">
                    <span className="tp-hero-cst-bottom-shape">
                        <HeroShapeIconTwo />
                    </span>
                    <div className="tp-hero-cst-bottom-slider service__item-8">
                        <div id="service-bg-img" className="service-img-2">
                            <div className="service-bg service-img-1"
                                style={{ backgroundImage: `url(/assets/img/hero/cst/bg.jpg)` }}>
                            </div>
                            <div className="service-bg service-img-2"
                                style={{ backgroundImage: `url(/assets/img/hero/cst/bg-2.jpg)` }}></div>
                            <div className="service-bg service-img-3"
                                style={{ backgroundImage: `url(/assets/img/hero/cst/bg-3.jpg)` }}></div>
                        </div>
                    </div>
                    <div className="tp-hero-cst-bottom-content">
                        <div className="container-fluid container-1800">
                            <div className="tp-hero-cst-bottom-border">
                                <div className="row">
                                    <div className="col-xxl-8 col-xl-7">
                                        <div className="tp-hero-cst-bottom-btn">
                                            <ul>
                                                <li className={`service__item-8 ${activeService === 1 ? "active" : ""}`}
                                                    onMouseEnter={() => handleServiceHover("service-img-1", 1)}
                                                    rel="service-img-1">01. Strategic Consulting</li>
                                                <li className={`service__item-8 ${activeService === 2 ? "active" : ""}`}
                                                    onMouseEnter={() => handleServiceHover("service-img-2", 2)}
                                                    rel="service-img-1">02. Market Analysis</li>
                                                <li className={`service__item-8 ${activeService === 3 ? "active" : ""}`}
                                                    onMouseEnter={() => handleServiceHover("service-img-3", 3)}
                                                    rel="service-img-1">03. Investment Solutions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-5">
                                        <div className="tp-hero-cst-bottom-right text-xl-end">
                                            <span className="tp-ff-dm fw-600 tp-text-common-white text-capitalize ">
                                                <MessageIcon /> {" "}
                                                Effective Business Consulting ? -   <SmartLink className="tp-text-common-green-2 fw-800 ml-5" href="/contact-us">Get Started Now</SmartLink></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessConsultingHero;