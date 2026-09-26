"use client";
import { ArrowIconFive, HalfCircleShape, HeaderButtonArrow, HorizontalArrowLineIcon, RingCircleIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Atropos from "atropos/react";
import Image from "next/image";
import Link from "next/link";
import 'atropos/css'

const socialLinks = [
    { icon: "fa-dribbble", href: "#" },
    { icon: "fa-pinterest-p", href: "#" },
    { icon: "fa-behance", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
];

const StartupAgencyHero = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const heroClasses = {
        heroBgClass: isDark ? "" : "tp-bg-theme-primary",
        titleColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        subtitleColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        paragraphHighlightColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        paragraphColor: isDark ? "tp-text-grey-2" : "",
        customerTextColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
        customerHighlight: isDark ? "tp-text-common-white" : "tp-text-common-black",
        buttonClass: isDark
            ? "tp-bg-common-white tp-text-common-black hover-text-black"
            : "tp-bg-common-black tp-text-common-white hover-text-white",
        followLineFill: isDark ? "currentColor" : "#030303",
        subtitleSeparatorFill: isDark ? "#999" : "#030303",
        ringStroke: isDark ? "#999999" : "black",
        ringStrokeOpacity: isDark ? "0.1" : "0.06",
        shapeOneFill: isDark ? "#fff" : "#030303",
        shapeTwoFill: isDark ? "#C4EE18" : "#7D5DFF",
    }
    // added avatarSrc to heroClasses for easier management of theme-based image source
    const avatarSrc = isDark ? "/assets/img/hero/avatar-dark.png" : "/assets/img/hero/avatar.png";

    return (
        <div className={`tp-hero-area pre-header tp-hero-sa-spacing ${heroClasses.heroBgClass} p-relative fix`}>
            <span className="tp-hero-sa-shape-3">
                <RingCircleIcon ringStroke={heroClasses.ringStroke} ringStrokeOpacity={heroClasses.ringStrokeOpacity} />
            </span>
            <div className="container-fluid container-1800 containers">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1 d-none d-md-block">
                        <div className={`tp-hero-social ${isDark ? "" : "tp-hero-sa-social"} d-flex align-items-center mt-20 ${heroClasses.titleColor}`}>
                            <span className="d-flex align-items-center mb-55">Follow
                                <ArrowIconFive followLineFill={heroClasses.followLineFill} />
                            </span>
                            {socialLinks.map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                    <i className={`fa-brands ${item.icon}`}></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-11">
                        <div className="tp-hero-content ml-75">
                            <div className="tp-hero-sa-subtitle mb-35">
                                <div className="tp-hero-sa-subtitle-inner">
                                    <span className={`tp-ff-heading fw-500 fs-18 ${heroClasses.subtitleColor}`}>Accelerate,<br /> Scale, Dominate</span>
                                    <span className="d-block">
                                        <HorizontalArrowLineIcon fillColor={heroClasses.subtitleSeparatorFill} />
                                    </span>
                                </div>
                            </div>
                            <h2 className={`tp-hero-sa-title fs-100 fs-xl-80 fs-sm-60 fs-xs-40 lh-1 ls-m-0 ${heroClasses.titleColor} mb-45`}> We Build<br /> Startups That<br /> Win.</h2>
                            <div className="tp-hero-sa-bottom-content">
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 d-none d-md-inline-block">
                                        <div className="tp-hero-sa-shape mt-10 mb-30">
                                            <Image src="/assets/img/hero/sa/shape.png" alt="shape" width={138} height={138} />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-9">
                                        <div className="tp-hero-sa-customer-text mb-30 ml-35">
                                            <p className={`fs-20 lh-28 mb-60 ${heroClasses.paragraphColor}`}>Helping ambitious startups accelerate growth<br /> with <span className={heroClasses.paragraphHighlightColor}>cutting-edge marketing, branding &<br /> fundraising strategies.</span></p>
                                            <div className="tp-hero-sa-btn-wrap d-flex align-items-center">
                                                <div className="tp-hero-sa-btn mb-20 mr-40">
                                                    <SmartLink href="/about-creative" className={`tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation tp-ff-heading fw-500 ${heroClasses.buttonClass}`}>
                                                        <span className="d-flex align-items-center justify-content-center">
                                                            <span className="btn-text">Start the Journey</span>
                                                            <span className="btn-icon">
                                                                <HeaderButtonArrow />
                                                            </span>
                                                            <span className="btn-icon">
                                                                <HeaderButtonArrow />
                                                            </span>
                                                        </span>
                                                    </SmartLink>
                                                </div>
                                                <div className="tp-hero-customer d-flex align-items-center mb-20">
                                                    <Image className="mr-20 img-fluid" src={avatarSrc} alt="avatar" width={109} height={45} />
                                                    <p className={`fw-500 fs-16 lh-130-per mb-0 d-inline-block ${heroClasses.customerTextColor}`}>We have <b className={heroClasses.customerHighlight}>24K+</b><br />
                                                        customers in world-wide.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-hero-sa-thumb mb-30 mt-90 p-relative">
                            <Atropos
                                shadow={false}
                                highlight={false}
                                rotate={true}
                            >
                                <div className="app-stack-thumb-box p-relative text-lg-end">
                                    <div className="my-atropos">
                                        <div className="atropos">
                                            <div className="atropos-scale">
                                                <div className="atropos-rotate">
                                                    <div className="atropos-inner">
                                                        <Image className="img-fluid" data-atropos-offset="-4.5" src="/assets/img/hero/sa/thumb.png" alt="thumb" width={600} height={600} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Atropos>
                            <div className="tp-hero-sa-shape-2">
                                <span className="shape-1 mb-5">
                                    <HalfCircleShape fillColor={heroClasses.shapeOneFill} />
                                </span>
                                <span className="shape-2">
                                    <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M67 0.250122H0V44.0002L67 0.250122Z" fill={heroClasses.shapeTwoFill} />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyHero;
