"use client";

import { useThrowable } from "@/hooks/useThrowable";
import { techItems } from "@/data/tech-data";
import { useIsDarkRoute } from "@/hooks";
import { HalfCircleShape } from "@/svg";
import Image from "next/image";

const StartupAgencyTechnology = () => {
    const sceneRef = useThrowable({ scrollGravity: false });

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const technologyStyles = {
        titleColor: isDark ? "tp-text-common-white" : "",
        paraColor: isDark ? "tp-text-grey-2" : "",
        shapeOneFill: isDark ? "#fff" : "#030303",
    };

    return (
        <div className="tp-techonolgy-area pt-100 tp-techonolgy-capsule-wrapper tp-bg-common-white-2" data-tp-throwable-scene="true" ref={sceneRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8">
                        <div className="tp-techonolgy-title-wrap">
                            <h2 className={`fs-50 fs-xs-40 lh-120-per mb-60 tp_fade_anim ${technologyStyles.titleColor}`} data-delay=".3">We Use Awesome<br /> Technology.</h2>
                            <div className="tp-service-2-para tp-techonolgy-para tp_fade_anim" data-delay=".5">
                                <p className={`fs-18 ${technologyStyles.paraColor}`}>A high-growth startup agency relies on the best<br /> technologies to deliver branding, marketing, and<br /> product development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="tp-techonolgy-ratings-inner mt-30 p-relative">
                            <div className="tp-techonolgy-ratings-wrap tp_fade_anim" data-delay=".7" data-fade-from="top">
                                <div className="mr-15">
                                    <span className="fw-600 fs-12 tp-ff-heading d-block lh-1">REVIEWED</span>
                                    <Image src="/assets/img/techonolgy/logo.png" alt="reviewed logo" width={74} height={21} />
                                </div>
                                <div className="tp-techonolgy-ratings-right">
                                    <span className="tp-techonolgy-ratings mb-5">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </span>
                                    <span className="fw-600 fs-12 tp-text-grey-1 d-block">50 REVIEWS</span>
                                </div>
                            </div>
                            <div className="tp-hero-sa-shape-2 tp-techonolgy-shape tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                <span className="shape-1 mb-5">
                                    <HalfCircleShape fillColor={technologyStyles.shapeOneFill} />
                                </span>
                                <span className="shape-2">
                                    <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M67 0.25H0V44L67 0.25Z" fill="#7D5DFF" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-techonolgy-capsule-item-wrapper">
                {techItems.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                        <p key={idx} data-tp-throwable-el="">
                            <span className={item.className}>
                                {Icon && <Icon />
                                }
                                {item.name}
                            </span>
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default StartupAgencyTechnology;
