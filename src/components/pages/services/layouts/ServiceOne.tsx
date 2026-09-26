"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import SmartLink from "@/components/common/SmartLink";
import AboutCreativeTestimonial from "@/components/pages/about/layouts/about-creative/AboutCreativeTestimonial";
import AboutCreativeTextSlider from "@/components/pages/about/layouts/about-creative/AboutCreativeTextSlider";

const ServiceOne = () => {
    const isDark = useIsDarkRoute();
    const { playVideo } = useVideoModal();

    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const strokeColor = isDark ? "#ffffff" : "#030303";
    const circleStroke = isDark ? "#D9D9D9" : "#F0F0F0";
    const circleOpacity = isDark ? 0.05 : undefined;

    return (
        <main>
            {/* tp-service-hero-area-start */}
            <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">
                <span className="tp-service-hero-shape-2 p-absolute">
                    <svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="413.5"
                            cy="413.5"
                            r="353.5"
                            transform="matrix(-1 0 0 1 820 0)"
                            stroke={circleStroke}
                            strokeOpacity={circleOpacity}
                            strokeWidth="120"
                        />
                    </svg>
                </span>
                <div className="container">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative mb-40">
                                <h2 className={`fs-70 fs-lg-60 fs-xs-40 ${textColor}`}>We Provide Smart Solutions.</h2>
                                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                    <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                                            stroke={strokeColor}
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-130">
                                <p className={`fs-20 lh-140-per ${descColor}`}>
                                    We craft digital experiences that engage,<br />
                                    convert, and grow your business. From branding<br />
                                    to development, we provide end-to-end<br />
                                    solutions tailored to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-breadcrumb-list">
                                    <ul>
                                        <li>
                                            <SmartLink href="/">Home</SmartLink>
                                        </li>
                                        <li>
                                            <span></span>
                                        </li>
                                        <li>Service 01</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-hero-area-end */}

            {/* tp-banner-area-start */}
            <div className="tp-about-me-banner scale-up-img">
                <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/breadcrumb/thumb-2.jpg" alt="About Me Banner" />
            </div>
            {/* tp-banner-area-end */}

            {/* tp-service-area-start */}
            <div className="tp-service-area pt-125 mb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-service-title-wrap mb-45">
                                <span className={`tp-section-subtitle tp-ff-heading fw-500 ${textColor} fs-16 mb-80 tp_fade_anim`} data-delay=".3">
                                    <span className="borders d-inline-block"></span>Smart Solutions
                                </span>
                                <div className="d-sm-flex align-items-start tp_fade_anim" data-delay=".5">
                                    <img className="mr-40 tp-service-shape" src="/assets/img/service/shape.png" alt="Service Shape" />
                                    <p className={`tp-ff-heading fs-25 fw-500 ${descColor} tp-service-para`}>
                                        We specialize in delivering cutting-edge strategies, unparalleled creativity, and seamless execution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-45 tp_fade_anim" data-delay=".4">
                                <h2 className={`tp-section-title fs-70 fs-xl-60 fs-lg-50 fw-700 text-uppercase ${textColor}`}>Our capabilities</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-service-item p-relative mb-30 tp_fade_anim" data-delay=".6" data-fade-from="left">
                                <img className="tp-service-item-bg" src="/assets/img/service/grid-shape.png" alt="Grid BG" />
                                <h4 className="tp-service-item-title">Design</h4>
                                <ul>
                                    <li>
                                        <SmartLink href="/service-details">UI/UX Design</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Branding Design</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Web Design</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Graphics Design</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">3D Art</SmartLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-service-item p-relative mb-30 tp_fade_anim" data-delay=".7" data-fade-from="left">
                                <img className="tp-service-item-bg" src="/assets/img/service/grid-shape.png" alt="Grid BG" />
                                <h4 className="tp-service-item-title">Tech</h4>
                                <ul>
                                    <li>
                                        <SmartLink href="/service-details">Web Development</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Software Development</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Quality Assurance</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Mobile App</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">iOS App Development</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Technical Support</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Quality Assurance</SmartLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-service-item p-relative mb-30 tp_fade_anim" data-delay=".8" data-fade-from="left">
                                <img className="tp-service-item-bg" src="/assets/img/service/grid-shape.png" alt="Grid BG" />
                                <h4 className="tp-service-item-title">Marketing</h4>
                                <ul>
                                    <li>
                                        <SmartLink href="/service-details">Digital Marketing</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Email Marketing</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Content Marketing</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Video Production</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Marketing Automation</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">Affiliate Marketing</SmartLink>
                                    </li>
                                    <li>
                                        <SmartLink href="/service-details">SEO Optimized</SmartLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-area-end */}

            {/* tp-video-area-start */}
            <div className="tp-video-area tp-video-spacing p-relative z-index-1 fix">
                <div className="tp-video-thumb scale-up-img">
                    <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/video/thumb.jpg" alt="Video Thumbnail" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-5 col-lg-6">
                            <div className="tp-video-content tp-bg-common-black">
                                <h4 className="tp-text-common-white fw-500 fs-25 fs-xs-20 lh-36 mb-50">
                                    We empower brands to scale, innovate, and thrive in an ever-changing digital landscape.
                                </h4>
                                <span className="tp-hero-bottom-border mb-40">
                                    <svg height="6" viewBox="0 0 344 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM339 3.5L344 5.88675V0.113249L339 2.5V3.5ZM4.5 3.5H339.5V2.5H4.5V3.5Z" fill="white" fillOpacity={0.15} />
                                    </svg>
                                </span>
                                <div className="tp-video-main tp-hero-video d-flex align-items-center">
                                    <button
                                        onClick={() => playVideo("go7QYaQR494")}
                                        className="tp-hero-video-btn popup-video mr-20"
                                        type="button"
                                    >
                                        <span>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.2595 11.3877C15.9455 10.276 15.9455 7.79857 14.2595 6.68685L4.82854 0.468212C2.95139 -0.769576 0.455619 0.592952 0.476139 2.84432L0.588819 15.2073C0.609123 17.4355 3.08348 18.7571 4.94126 17.5321L14.2595 11.3877Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </button>
                                    <p className="tp-ff-heading lh-110-per mb-0 fw-700 fs-18 tp-text-common-white">
                                        We’re Global Brand<br />
                                        Digital Agency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-video-area-end */}

            {/* tp-testimonial-area-start */}
            <AboutCreativeTestimonial />
            {/* tp-testimonial-area-end */}

            {/* tp-text-slider-area-start */}
            <AboutCreativeTextSlider />
            {/* tp-text-slider-area-end */}
        </main>
    );
};

export default ServiceOne;