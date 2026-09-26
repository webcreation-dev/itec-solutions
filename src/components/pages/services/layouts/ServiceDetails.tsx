"use client";

import React, { useEffect, useRef } from "react";
import { useIsDarkRoute } from "@/hooks";
import SmartLink from "@/components/common/SmartLink";
import AboutCreativeTextSlider from "@/components/pages/about/layouts/about-creative/AboutCreativeTextSlider";

const ServiceDetails = () => {
    const isDark = useIsDarkRoute();
    const accordionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const accordion = accordionRef.current;
        if (!accordion) return;

        const handleShow = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && target.classList.contains("accordion-collapse")) {
                const item = target.closest(".accordion-item");
                if (item) {
                    item.classList.add("tp-faq-active");
                }
            }
        };

        const handleHide = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && target.classList.contains("accordion-collapse")) {
                const item = target.closest(".accordion-item");
                if (item) {
                    item.classList.remove("tp-faq-active");
                }
            }
        };

        accordion.addEventListener("show.bs.collapse", handleShow);
        accordion.addEventListener("hide.bs.collapse", handleHide);

        return () => {
            accordion.removeEventListener("show.bs.collapse", handleShow);
            accordion.removeEventListener("hide.bs.collapse", handleHide);
        };
    }, []);

    // Theme values
    const heroCircleStroke = isDark ? "#D9D9D9" : "#F0F0F0";
    const heroCircleOpacity = isDark ? 0.05 : undefined;
    const heroTitleClass = isDark ? "fs-70 fs-lg-60 fs-xs-40 tp-text-common-white" : "fs-70 fs-lg-60 fs-xs-40";
    const heroDescClass = isDark ? "fs-20 lh-140-per tp-text-grey-2" : "fs-20 lh-140-per";

    const overviewTitleClass = isDark ? "fs-500 fs-50 mb-5 tp-text-common-white" : "fs-500 fs-50 mb-5";
    const overviewDividerColor = isDark ? "rgba(255, 255, 255, 0.1)" : "#EEEEEE";
    const overviewDescClass = isDark ? "fs-18 lh-140-per tp-text-grey-2" : "fs-18 lh-140-per";
    const overviewHeadingClass = isDark ? "fs-25 mb-25 tp-text-common-white" : "fs-25 mb-25";

    const offerTitleClass = isDark ? "tp-section-title fw-500 tp-text-common-white" : "tp-section-title fw-500";
    const offerCardH4Class = isDark
        ? "fs-35 fw-500 fs-lg-30 tp-text-common-white lh-130-per mb-10"
        : "fs-35 fw-500 fs-lg-30 tp-text-common-black-3 lh-130-per mb-10";
    const offerSvgStroke = isDark ? "#fff" : "#030303";
    const offerSvgOpacity = isDark ? "0.1" : undefined;
    const offerSvgFill = isDark ? "#fff" : "#030303";

    const faqSubtitleClass = isDark
        ? "tp-section-subtitle tp-ff-heading fw-500 tp-text-common-white fs-16 mb-20"
        : "tp-section-subtitle tp-ff-heading fw-500 tp-text-common-black fs-16 mb-20";
    const faqTitleClass = isDark
        ? "tp-section-title fs-70 fs-xl-60 fs-lg-50 fs-xs-40 tp-text-common-white"
        : "tp-section-title fs-70 fs-xl-60 fs-lg-50 fs-xs-40";
    const faqSpanClass = isDark ? "text-white" : "text-black";

    const faqItems = [
        {
            question: "En quoi consistent les études techniques ?",
            answer: (
                <>
                    <p>Branding is the process of creating a unique identity for your business, <span className={faqSpanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                    <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                    <ul>
                        <li>1. Brand Strategy & Positioning.</li>
                        <li>2. Logo & Visual Identity</li>
                        <li>3. Marketing & Collateral Design</li>
                    </ul>
                </>
            )
        },
        {
            question: "Quel est le rôle de la maîtrise d’œuvre ?",
            answer: (
                <>
                    <p>Branding is the process of creating a unique identity for your business, <span className={faqSpanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                    <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                    <ul>
                        <li>1. Brand Strategy & Positioning.</li>
                        <li>2. Logo & Visual Identity</li>
                        <li>3. Marketing & Collateral Design</li>
                    </ul>
                </>
            )
        },
        {
            question: "Comment ITEC suit-il les travaux ?",
            answer: (
                <>
                    <p>Branding is the process of creating a unique identity for your business, <span className={faqSpanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                    <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                    <ul>
                        <li>1. Brand Strategy & Positioning.</li>
                        <li>2. Logo & Visual Identity</li>
                        <li>3. Marketing & Collateral Design</li>
                    </ul>
                </>
            )
        },
        {
            question: "Intervenez-vous en génie civil ?",
            answer: (
                <>
                    <p>Branding is the process of creating a unique identity for your business, <span className={faqSpanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                    <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                    <ul>
                        <li>1. Brand Strategy & Positioning.</li>
                        <li>2. Logo & Visual Identity</li>
                        <li>3. Marketing & Collateral Design</li>
                    </ul>
                </>
            )
        },
        {
            question: "Comment démarre un projet avec ITEC ?",
            answer: (
                <>
                    <p>Branding is the process of creating a unique identity for your business, <span className={faqSpanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                    <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                    <ul>
                        <li>1. Brand Strategy & Positioning.</li>
                        <li>2. Logo & Visual Identity</li>
                        <li>3. Marketing & Collateral Design</li>
                    </ul>
                </>
            )
        },
        {
            question: "Peut-on demander un accompagnement sur mesure ?",
            answer: (
                <>
                    <p>Branding is the process of creating a unique identity for your business, <span className={faqSpanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                    <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                    <ul>
                        <li>1. Brand Strategy & Positioning.</li>
                        <li>2. Logo & Visual Identity</li>
                        <li>3. Marketing & Collateral Design</li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <main className={isDark ? "tp-bg-common-black" : ""}>
            {/* tp-service-hero-area-start */}
            <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">
                <span className="tp-service-hero-shape-2 p-absolute">
                    <svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="413.5"
                            cy="413.5"
                            r="353.5"
                            transform="matrix(-1 0 0 1 820 0)"
                            stroke={heroCircleStroke}
                            strokeOpacity={heroCircleOpacity}
                            strokeWidth="120"
                        />
                    </svg>
                </span>
                <div className="container">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative z-index-1 mb-40">
                                <h2 className={heroTitleClass}>Ingénierie &<br /> maîtrise d’œuvre</h2>
                                <div className="tp-service-details-icon">
                                    <img className="tp-live-anim-spin" src="/assets/img/breadcrumb/icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-55">
                                <p className={heroDescClass}>
                                    Nous accompagnons les projets dès les premières études<br />
                                    pour transformer les besoins en solutions techniques fiables,<br />
                                    coordonnées et adaptées aux réalités du terrain.
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
                                            <SmartLink href="/architecture">Accueil</SmartLink>
                                        </li>
                                        <li>
                                            <span></span>
                                        </li>
                                        <li>Ingénierie</li>
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
                <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/breadcrumb/thumb-5.jpg" alt="About Thumbnail" />
            </div>
            {/* tp-banner-area-end */}

            {/* tp-service-details-area-start */}
            <div className="tp-service-details-area pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-service-details-title-wrap mb-50">
                                <h2 className={overviewTitleClass}>Notre expertise</h2>
                                <span className="tp-service-details-border">
                                    <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill={overviewDividerColor} />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-details-content mr-105 mb-40">
                                <p className={`${overviewDescClass} mb-20`}>
                                    L&apos;ingénierie ITEC vise à sécuriser chaque étape du projet : compréhension du besoin, études de faisabilité, choix techniques et organisation de l&apos;exécution.
                                </p>
                                <p className={overviewDescClass}>
                                    Nous faisons dialoguer maîtrise d&apos;ouvrage, architectes, bureaux d&apos;études et entreprises afin de conserver une vision cohérente des objectifs de coût, qualité et délai.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-details-content mb-40">
                                <h5 className={overviewHeadingClass}>Notre méthode de travail</h5>
                                <ul>
                                    <li className="d-flex align-items-start mb-15">
                                        <i className="fa-regular fa-circle-check mr-15 mt-5"></i>
                                        <p className="mb-0"><b>Analyse du besoin –</b> Clarifier le programme, les usages et les contraintes.</p>
                                    </li>
                                    <li className="d-flex align-items-start mb-15">
                                        <i className="fa-regular fa-circle-check mr-15 mt-5"></i>
                                        <p className="mb-0"><b>Études et conception –</b> Définir les options techniques pertinentes.</p>
                                    </li>
                                    <li className="d-flex align-items-start mb-15">
                                        <i className="fa-regular fa-circle-check mr-15 mt-5"></i>
                                        <p className="mb-0"><b>Coordination –</b> Organiser les interfaces entre les intervenants.</p>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <i className="fa-regular fa-circle-check mr-15 mt-5"></i>
                                        <p className="mb-0"><b>Suivi d&apos;exécution –</b> Contrôler l&apos;avancement et accompagner les décisions.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-details-area-end */}

            {/* tp-about-process-area */}
            <div className="tp-about-process-area pt-20 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-55">
                                <h2 className={offerTitleClass}>Nos interventions</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-about-process-item tp-about-process-2-item tp-bg-common-white-2 mb-40">
                                <span className="tp-about-process-icon d-inline-block mb-60">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31 14H15C13.8954 14 13 14.8954 13 16V32C13 33.1046 13.8954 34 15 34H31C32.1046 34 33 33.1046 33 32V16C33 14.8954 32.1046 14 31 14Z" fill={offerSvgFill} />
                                        <path d="M9 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H9C9.55228 10 10 9.55228 10 9V3C10 2.44772 9.55228 2 9 2Z" fill={offerSvgFill} />
                                        <path d="M12 5H48V7H12V5Z" fill={offerSvgFill} />
                                        <path d="M9 50H3C2.44772 50 2 50.4477 2 51V57C2 57.5523 2.44772 58 3 58H9C9.55228 58 10 57.5523 10 57V51C10 50.4477 9.55228 50 9 50Z" fill={offerSvgFill} />
                                        <path d="M5 12H7V48H5V12Z" fill={offerSvgFill} />
                                        <path d="M57 2H51C50.4477 2 50 2.44772 50 3V9C50 9.55228 50.4477 10 51 10H57C57.5523 10 58 9.55228 58 9V3C58 2.44772 57.5523 2 57 2Z" fill={offerSvgFill} />
                                        <path d="M53 12H55V48H53V12Z" fill={offerSvgFill} />
                                        <path d="M57 50H51C50.4477 50 50 50.4477 50 51V57C50 57.5523 50.4477 58 51 58H57C57.5523 58 58 57.5523 58 57V51C58 50.4477 57.5523 50 57 50Z" fill={offerSvgFill} />
                                        <path d="M28 46H44C44.5304 46 45.0391 45.7893 45.4142 45.4142C45.7893 45.0391 46 44.5304 46 44V28C46 27.4696 45.7893 26.9609 45.4142 26.5858C45.0391 26.2107 44.5304 26 44 26H35V32C35 33.0609 34.5786 34.0783 33.8284 34.8284C33.0783 35.5786 32.0609 36 31 36H26V44C26 44.5304 26.2107 45.0391 26.5858 45.4142C26.9609 45.7893 27.4696 46 28 46ZM12 53H48V55H12V53Z" fill={offerSvgFill} />
                                    </svg>
                                </span>
                                <h4 className={offerCardH4Class}>Brand Strategy & Positioning</h4>
                                <span className="tp-about-process-2-border d-block mb-20">
                                    <svg viewBox="0 0 354 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM349 3.5L354 5.88675V0.113249L349 2.5V3.5ZM4.5 3.5H349.5V2.5H4.5V3.5Z" fill={offerSvgStroke} fillOpacity={offerSvgOpacity} />
                                    </svg>
                                </span>
                                <ul>
                                    <li>+ Brand Discovery</li>
                                    <li>+ Brand Voice & Messaging</li>
                                    <li>+ Brand Positioning Strategy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-about-process-item tp-about-process-2-item tp-bg-common-white-2 mb-40">
                                <span className="tp-about-process-icon d-inline-block mb-60">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_708_3326)">
                                            <path d="M48.5684 19.7699H38.4103C44.7064 22.6675 49.1318 28.6017 49.4867 35.5382C52.2195 35.9822 54.3308 38.3664 54.3308 41.2191C54.3308 44.3833 51.7313 46.9828 48.5671 46.9828C45.403 46.9828 42.8041 44.3833 42.8041 41.2191C42.8041 38.3853 44.8902 36.0138 47.5977 35.5445C47.1916 28.5386 42.1447 22.6858 35.2784 20.5941C34.8988 21.7438 34.1662 22.7445 33.1849 23.4536C32.2036 24.1628 31.0235 24.5443 29.8128 24.5439C27.2638 24.5439 25.0824 22.8513 24.3283 20.5436C17.3728 22.5848 12.2433 28.4817 11.8378 35.5445C14.5453 36.0138 16.6314 38.3853 16.6314 41.2191C16.6314 44.3833 14.0312 46.9828 10.8677 46.9828C7.70419 46.9828 5.10403 44.3833 5.10403 41.2191C5.10403 38.3664 7.21535 35.9822 9.94814 35.5382C10.3037 28.6017 14.7291 22.6669 21.0252 19.7699H11.445C10.989 22.4837 8.61112 24.5445 5.76402 24.5445C2.59987 24.5445 0.000976562 21.9892 0.000976562 18.8251C0.000976562 15.6609 2.6005 13.062 5.76402 13.062C8.61112 13.062 10.989 15.1601 11.445 17.8809H24.1268C24.5638 15.1348 26.9543 13.0178 29.8141 13.0178C32.6731 13.0178 35.0636 15.1348 35.5013 17.8809H48.5495C48.9871 15.1348 51.3776 13.0178 54.2367 13.0178C57.4009 13.0178 60.0004 15.6104 60.0004 18.7809C60.0004 21.9892 57.4009 24.5439 54.2367 24.5439C51.4092 24.5439 49.044 22.4717 48.5684 19.7699Z" fill={offerSvgFill} />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_708_3326">
                                                <rect width="60" height="60" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <h4 className={offerCardH4Class}>Logo & Visual Identity</h4>
                                <span className="tp-about-process-2-border d-block mb-20">
                                    <svg viewBox="0 0 354 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM349 3.5L354 5.88675V0.113249L349 2.5V3.5ZM4.5 3.5H349.5V2.5H4.5V3.5Z" fill={offerSvgStroke} fillOpacity={offerSvgOpacity} />
                                    </svg>
                                </span>
                                <ul>
                                    <li>+ Brand Discovery</li>
                                    <li>+ Brand Voice & Messaging</li>
                                    <li>+ Brand Positioning Strategy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-about-process-item tp-about-process-2-item tp-bg-common-white-2 mb-40">
                                <span className="tp-about-process-icon d-inline-block mb-60">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 30V54.2578H22.6172V37.3828H6.79688V30H30ZM15.2344 44.7656H6.79688V54.2578H15.2344V44.7656ZM53.2031 30V22.6172H37.3828V5.74219H30V30H53.2031ZM44.7656 15.2344H53.2031V5.74219H44.7656V15.2344Z" fill={offerSvgFill} />
                                    </svg>
                                </span>
                                <h4 className={offerCardH4Class}>Études de faisabilité<br /> & programmation</h4>
                                <span className="tp-about-process-2-border d-block mb-20">
                                    <svg viewBox="0 0 354 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM349 3.5L354 5.88675V0.113249L349 2.5V3.5ZM4.5 3.5H349.5V2.5H4.5V3.5Z" fill={offerSvgStroke} fillOpacity={offerSvgOpacity} />
                                    </svg>
                                </span>
                                <ul>
                                    <li>+ Brand Discovery</li>
                                    <li>+ Brand Voice & Messaging</li>
                                    <li>+ Brand Positioning Strategy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-process-img fix scale-up-img mt-30 mb-40">
                                <img className="img-cover scale-up" src="/assets/img/service/service-details/thumb.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-process-img fix scale-up-img mt-30 mb-40">
                                <img className="img-cover scale-up" src="/assets/img/service/service-details/thumb-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-about-process-end */}

            {/* tp-process-area-start */}
            <div className={`tp-process-area pt-110 pb-100 ${isDark ? 'tp-bg-grey-8' : 'tp-bg-common-black'} p-relative z-index-1`}>
                <img className="tp-awards-bg-shape" src="/assets/img/awards/grid-shape.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-process-pp-title-inner mb-30 text-center tp_fade_anim" data-delay=".3">
                                <span className="tp-section-subtitle tp-section-subtitle-white tp-ff-heading fw-500 tp-text-common-white fs-16 mb-20">
                                    <span className="borders d-inline-block"></span>Working Process
                                </span>
                                <h2 className="fs-70 fs-sm-40 tp-text-common-white">Une méthode claire<br /> à chaque étape</h2>
                            </div>
                        </div>
                        <div className="col-12 d-none d-lg-block">
                            <div className="tp-process-pp-border">
                                <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill="white" fillOpacity={0.1} />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-process-pp-item text-center mb-30 tp_fade_anim" data-delay=".3" data-fade-from="left">
                                <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block tp-bg-theme-primary">01</span>
                                <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">Research &<br /> Analysis</h3>
                                <p className="fs-18 lh-140-per tp-text-grey-2">Conduct user research (interviews, surveys, analytics).</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-process-pp-item text-center mb-30 tp_fade_anim" data-delay=".5" data-fade-from="left">
                                <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block tp-bg-theme-primary">02</span>
                                <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">Études &<br /> coordination</h3>
                                <p className="fs-18 lh-140-per tp-text-grey-2">Transform wireframes into high-fidelity UI designs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-process-pp-item text-center mb-30 tp_fade_anim" data-delay=".7" data-fade-from="left">
                                <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block tp-bg-theme-primary">03</span>
                                <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">Testing &<br /> Iteration</h3>
                                <p className="fs-18 lh-140-per tp-text-grey-2">Conduct usability testing to gather user feedback.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-process-pp-item text-center mb-30 tp_fade_anim" data-delay=".9" data-fade-from="left">
                                <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block tp-bg-theme-primary">04</span>
                                <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">Prepare for<br /> Delivery</h3>
                                <p className="fs-18 lh-140-per tp-text-grey-2">Track performance using analytics and user feedback.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tp-skill-wd-bottom text-center mt-35 tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                                <p className="tp-skill-wd-para tp-ff-heading fw-500 fs-18 tp-text-common-white">
                                    Don’t hesitate collaborate with expertise-{" "}
                                    <SmartLink
                                        href="/contact"
                                        className="ml-40 d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation tp-text-theme-primary tp-ff-heading fw-500"
                                    >
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Let’s Talk</span>
                                            <span className="btn-icon">
                                                <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span className="btn-icon">
                                                <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </span>
                                    </SmartLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-process-area-end */}

            {/* tp-faq-area-start */}
            <div className={`tp-faq-area pt-140 pb-115 ${isDark ? "tp-faq-5-wrap" : ""}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tp-faq-wrap">
                                <div className="text-center mb-45 tp_fade_anim" data-delay=".3">
                                    <span className={faqSubtitleClass}>
                                        <span className="borders d-inline-block"></span>Questions fréquentes
                                    </span>
                                    <h2 className={faqTitleClass}>Ask & Question</h2>
                                </div>
                                <div className="tp-custom-accordion">
                                    <div className="accordion" id="general_faqaccordion" ref={accordionRef}>
                                        {faqItems.map((item, idx) => {
                                            const isOpen = idx === 0;
                                            const headingId = `heading_${idx}`;
                                            const collapseId = `collapse_${idx}`;
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`accordion-item ${isOpen ? "tp-faq-active" : ""} mb-25 tp_fade_anim`}
                                                    data-delay=".3"
                                                >
                                                    <h2 className="accordion-header p-relative" id={headingId}>
                                                        <button
                                                            className={`accordion-button tp-faq-btn ${isOpen ? "" : "collapsed"}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${collapseId}`}
                                                            aria-expanded={isOpen ? "true" : "false"}
                                                            aria-controls={collapseId}
                                                        >
                                                            {item.question}
                                                            <span className="accordion-btn">
                                                                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={collapseId}
                                                        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                        aria-labelledby={headingId}
                                                        data-bs-parent="#general_faqaccordion"
                                                    >
                                                        <div className="accordion-body tp-faq-details-para">
                                                            {item.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-faq-area-end */}

            {/* tp-text-slider-area-start */}
            <AboutCreativeTextSlider />
            {/* tp-text-slider-area-end */}
        </main>
    );
};

export default ServiceDetails;
