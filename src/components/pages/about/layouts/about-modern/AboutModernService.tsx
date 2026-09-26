"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const serviceSlides = [
    {
        thumb: "/assets/img/service/cst/thumb.jpg",
        title: "Finance consulting",
        desc: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
        link: "/service-details",
    },
    {
        thumb: "/assets/img/service/cst/thumb-2.jpg",
        title: "Marketing consulting",
        desc: "Marketing consulting involves providing expert advice and strategies to businesses to improve",
        link: "/service-details",
    },
    {
        thumb: "/assets/img/service/cst/thumb-3.jpg",
        title: "Business consulting",
        desc: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
        link: "/service-details",
    },
    {
        thumb: "/assets/img/service/cst/thumb-2.jpg",
        title: "Branding Design",
        desc: "Branding is more than just a logo—it’s the foundation of your startup’s identity.",
        link: "/service-details",
    },
];

const AboutModernService = () => {
    const isDark = useIsDarkRoute();

    const titleColorLeft = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const titleColorRight = isDark ? "tp-text-common-white" : "tp-text-grey-5";
    const textCommonColor = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const descColor = isDark ? "tp-text-grey-2" : "";
    const listColor = isDark ? "tp-text-grey-2" : "";

    return (
        <div className="tp-service-area pt-110">
            <div className="container-fluid container-1524 pb-35">
                <div className="row">
                    {/* Left Header */}
                    <div className="col-lg-5">
                        <div className="tp-service-cst-top-content mb-45 tp_fade_anim" data-delay=".4">
                            <h4 className={`tp-ff-dm fs-28 lh-130-per ${titleColorLeft} mb-15`}>
                                From branding to funding.
                            </h4>
                            <p className={`tp-ff-dm fs-18 lh-150-per mb-25 ${descColor}`}>
                                Building lasting partnerships through strategic insight,<br />
                                innovation, and trust.
                            </p>
                            <SmartLink
                                href="/service-4"
                                className="tp-btn-cst d-inline-block lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">See All Services</span>
                                    <span className="btn-icon">
                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <span className="btn-icon">
                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>

                    {/* Right Header (Text Invert) */}
                    <div className="col-lg-7">
                        <div className="tp-service-cst-title-wrap ml-25 mr-155 mb-45">
                            <h2 className={`tp-service-cst-title tp_text_invert invert-black-3 tp-ff-dm fw-600 fs-50 fs-lg-40 fs-xs-30 lh-120-per ${titleColorRight}`}>
                                From branding to funding, we
                                provide the tools & strategies
                                start-ups need to succeed in
                                a competitive market.
                            </h2>
                        </div>
                    </div>

                    {/* Service Swiper Slider */}
                    <div className="col-12">
                        <div className="tp-service-cst-slider-wrap tp-service-cst-2-wrap mb-80">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={6}
                                spaceBetween={27}
                                loop={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3 },
                                    992: { slidesPerView: 2 },
                                    768: { slidesPerView: 1 },
                                    576: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                                className="tp-service-cst-slider"
                            >
                                {serviceSlides.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="tp-service-cst-item p-relative">
                                            <div className="tp-service-cst-thumb">
                                                <img className="w-100" src={item.thumb} alt={item.title} />
                                            </div>
                                            <div className="tp-service-cst-content tp-bg-common-white">
                                                <h5 className="fw-600 fs-28 tp-ff-dm tp-text-common-black-1 mb-15">
                                                    <SmartLink className="underline-black" href={item.link}>
                                                        {item.title}
                                                    </SmartLink>
                                                </h5>
                                                <p className="tp-service-cst-item-border tp-ff-dm fs-18 lh-140-per tp-text-common-black-1">
                                                    {item.desc}
                                                </p>
                                                <SmartLink
                                                    href={item.link}
                                                    className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
                                                >
                                                    <span className="td-text d-inline-block mr-5">View Details</span>
                                                    <span className="tp-arrow-angle">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </SmartLink>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* Bottom Segment */}
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className={`tp-service-cst-shape ${isDark ? "inner" : ""} mb-40 d-none d-lg-block tp_fade_anim`} data-delay=".4" data-fade-from="left" data-ease="bounce">
                                <img src="/assets/img/service/cst/shape-2.png" alt="Service Shape" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="tp-service-cst-info tp-service-cst-2-info ml-70 mb-40">
                                <h2 className={`fw-600 fs-35 lh-110-per tp-ff-dm ${textCommonColor} mb-20 tp_fade_anim`} data-delay=".3" data-fade-from="right">
                                    Transform your business today<br /> with expert digital solutions.
                                </h2>
                                <div className="tp_fade_anim" data-delay=".4" data-fade-from="right">
                                    <p className={`tp-ff-dm fs-18 lh-140-per mb-30 ${descColor}`}>
                                        Leverage cutting-edge technology and strategic insights to<br />
                                        streamline operations, boost efficiency.
                                    </p>
                                </div>
                                <div className={`tp-service-cst-info-list mb-35 tp_fade_anim ${listColor}`} data-delay=".5" data-fade-from="right">
                                    <ul>
                                        <li>
                                            <span>
                                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7503 0.276674L7.8072 14.7403C7.57495 15.0311 7.22607 15.0888 6.93501 14.8568C6.87645 14.799 6.87645 14.799 6.81763 14.7403L0.0258056 5.79766C-0.032257 5.7399 0.0258056 5.68214 0.0258056 5.68214C0.083618 5.62438 0.141681 5.68214 0.141681 5.68214L7.23308 10.8441L18.4597 0.0438828C18.5175 -0.0146276 18.6341 -0.0146276 18.6919 0.0438828C18.7503 0.101393 18.7503 0.217914 18.7503 0.276674Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            Digital Strategy Consulting
                                        </li>
                                        <li>
                                            <span>
                                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7503 0.276674L7.8072 14.7403C7.57495 15.0311 7.22607 15.0888 6.93501 14.8568C6.87645 14.799 6.87645 14.799 6.81763 14.7403L0.0258056 5.79766C-0.032257 5.7399 0.0258056 5.68214 0.0258056 5.68214C0.083618 5.62438 0.141681 5.68214 0.141681 5.68214L7.23308 10.8441L18.4597 0.0438828C18.5175 -0.0146276 18.6341 -0.0146276 18.6919 0.0438828C18.7503 0.101393 18.7503 0.217914 18.7503 0.276674Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            AI & Machine Learning Solutions
                                        </li>
                                        <li>
                                            <span>
                                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7503 0.276674L7.8072 14.7403C7.57495 15.0311 7.22607 15.0888 6.93501 14.8568C6.87645 14.799 6.87645 14.799 6.81763 14.7403L0.0258056 5.79766C-0.032257 5.7399 0.0258056 5.68214 0.0258056 5.68214C0.083618 5.62438 0.141681 5.68214 0.141681 5.68214L7.23308 10.8441L18.4597 0.0438828C18.5175 -0.0146276 18.6341 -0.0146276 18.6919 0.0438828C18.7503 0.101393 18.7503 0.217914 18.7503 0.276674Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            Data Analytics & Insights
                                        </li>
                                    </ul>
                                </div>
                                <h2 className={`fw-600 fs-35 lh-110-per tp-ff-dm ${textCommonColor} mb-20 tp_fade_anim`} data-delay=".6" data-fade-from="right">
                                    Technology Stack Evaluation.
                                </h2>
                                <div className="tp_fade_anim" data-delay=".7" data-fade-from="right">
                                    <p className={`tp-ff-dm fs-18 lh-140-per mb-45 ${descColor}`}>
                                        Strategists dedicated to creating stunning, functional websites<br />
                                        that align with your unique business goals. and strategic insights to<br />
                                        streamline operations, boost efficiency.
                                    </p>
                                </div>
                                <div className="tp_fade_anim" data-delay=".8" data-fade-from="right">
                                    <SmartLink
                                        href="/service-details"
                                        className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm"
                                    >
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">View More</span>
                                            <span className="btn-icon">
                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span className="btn-icon">
                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </span>
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

export default AboutModernService;
