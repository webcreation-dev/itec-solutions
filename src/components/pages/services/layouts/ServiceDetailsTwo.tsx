"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import SmartLink from "@/components/common/SmartLink";
import { tp_service_slider_active } from "@/constant/swiper";

const services = [
    {
        img: "/assets/img/service/cst/thumb.jpg",
        title: "Finance consulting",
        link: "/service-details-2",
        desc: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
    },
    {
        img: "/assets/img/service/cst/thumb-2.jpg",
        title: "Marketing consulting",
        link: "/service-details-2",
        desc: "Marketing consulting involves providing expert advice and strategies to businesses to improve",
    },
    {
        img: "/assets/img/service/cst/thumb-3.jpg",
        title: "Business consulting",
        link: "/service-details-2",
        desc: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
    },
    {
        img: "/assets/img/service/cst/thumb-2.jpg",
        title: "Branding Design",
        link: "/service-details-2",
        desc: "Branding is more than just a logo—it's the foundation of your startup's identity.",
    },
];

const processItems = [
    { num: "{ 01 }", title: "Design\n& Prototyping", delay: ".3" },
    { num: "{ 02 }", title: "Research\n& Analysis", delay: ".5" },
    { num: "{ 03 }", title: "Testing\n& Iteration", delay: ".7" },
    { num: "{ 04 }", title: "Prepare\nfor Delivery", delay: ".9" },
];

const faqItems = [
    {
        id: "order__collapse_one",
        headingId: "order_one",
        num: "01",
        question: "What industries do you serve?",
        isOpen: true,
    },
    {
        id: "order__collapse_two",
        headingId: "order_two",
        num: "02",
        question: "How do you protect client data and privacy?",
        isOpen: false,
    },
    {
        id: "order__collapse_three",
        headingId: "order_three",
        num: "03",
        question: "Do you provide support after the project is done?",
        isOpen: false,
    },
    {
        id: "order__collapse_four",
        headingId: "order_four",
        num: "04",
        question: "How long does an average AI project take?",
        isOpen: false,
    },
    {
        id: "order__collapse_five",
        headingId: "order_five",
        num: "05",
        question: "Is my data safe and secure?",
        isOpen: false,
    },
];

const ArrowSvg = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z" fill="currentColor" />
    </svg>
);

const ServiceDetailsTwo = () => {
    const isDark = useIsDarkRoute();
    const { playVideo } = useVideoModal();
    const accordionRef = useRef<HTMLDivElement>(null);

    // Accordion Bootstrap integration
    useEffect(() => {
        const accordion = accordionRef.current;
        if (!accordion) return;

        const handleShow = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target?.classList.contains("accordion-collapse")) {
                target.closest(".accordion-item")?.classList.add("tp-faq-active");
            }
        };
        const handleHide = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target?.classList.contains("accordion-collapse")) {
                target.closest(".accordion-item")?.classList.remove("tp-faq-active");
            }
        };

        accordion.addEventListener("show.bs.collapse", handleShow);
        accordion.addEventListener("hide.bs.collapse", handleHide);

        return () => {
            accordion.removeEventListener("show.bs.collapse", handleShow);
            accordion.removeEventListener("hide.bs.collapse", handleHide);
        };
    }, []);

    // Theme-based class values
    const titleClass = isDark
        ? "fs-70 fs-lg-60 fs-xs-40 fw-700 ls-m-3 lh-110-per tp-ff-dm tp-text-common-white"
        : "fs-70 fs-lg-60 fs-xs-40 fw-700 ls-m-3 lh-110-per tp-ff-dm tp-text-common-black-1";

    const descClass = isDark
        ? "tp-section-3-para fs-20 lh-140-per tp-ff-dm tp-text-grey-2"
        : "tp-section-3-para fs-20 lh-140-per tp-ff-dm";

    const sectionTitleClass = isDark
        ? "tp-section-title mb-65 tp-ff-dm fs-72 fs-xl-60 fs-lg-50 fw-600 tp-text-common-white"
        : "tp-section-title mb-65 tp-ff-dm fs-72 fs-xl-60 fs-lg-50 fw-600 tp-text-common-black-1";

    const overviewTitleClass = isDark
        ? "tp-section-title mb-0 tp-ff-dm fs-72 fs-xl-60 fs-lg-50 fw-600 tp-text-common-white"
        : "tp-section-title mb-0 tp-ff-dm fs-72 fs-xl-60 fs-lg-50 fw-600 tp-text-common-black-1";

    const overviewDescClass = isDark
        ? "fs-18 tp-ff-dm ls-m-2 lh-140-per mb-50 tp-text-grey-2"
        : "fs-18 tp-ff-dm ls-m-2 lh-140-per mb-50";

    const approachHeadingClass = isDark
        ? "fs-25 mb-25 tp-ff-dm tp-text-common-white"
        : "fs-25 mb-25 tp-ff-dm";


    const processParaClass = isDark
        ? "tp-section-it-para fs-24 fs-xs-18 tp-ff-dm lh-150-per tp-text-grey-2"
        : "tp-section-it-para fs-24 fs-xs-18 tp-ff-dm lh-150-per";

    const processItemClass = isDark
        ? "tp-process-it-item tp-process-it-item-2 text-center mb-30 tp_fade_anim"
        : "tp-process-it-item tp-process-it-item-2 text-center mb-30 tp_fade_anim";

    const processItemTitleClass = isDark
        ? "tp-process-it-title tp-ff-dm fs-28 lh-120-per tp-text-common-white mb-20"
        : "tp-process-it-title tp-ff-dm fs-28 lh-120-per tp-text-common-black-5 mb-20";

    const processItemPositionClass = isDark
        ? "tp-process-it-position tp-ff-dm fs-24 fw-600 tp-text-common-white mb-110 d-inline-block"
        : "tp-process-it-position tp-ff-dm fs-24 fw-600 tp-text-common-black-5 mb-110 d-inline-block";

    const processItemParaClass = isDark
        ? "tp-process-it-para tp-ff-dm fs-16 lh-150-per tp-text-common-white opacity-8"
        : "tp-process-it-para tp-ff-dm fs-16 lh-150-per tp-text-common-black-5 opacity-8";

    const faqSubtitleClass = isDark
        ? "text-anim tp-ff-dm fw-500 fs-18 ls-m-4 tp-text-common-white mb-10 d-inline-block"
        : "text-anim tp-ff-dm fw-500 fs-18 ls-m-4 tp-text-common-black-1 mb-10 d-inline-block";

    const faqTitleClass = isDark
        ? "text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm tp-text-common-white"
        : "text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm tp-text-common-black-1";

    const breadcrumbBgStyle = {
        backgroundImage: "url(/assets/img/breadcrumb/thumb-12.jpg)",
    };

    return (
        <main className={isDark ? "tp-bg-common-black" : ""}>
            {/* tp-service-hero-area-start */}
            <div className="tp-service-hero-area pre-header fix tp-service-hero-spacing p-relative z-index-1">
                <div className="container-fluid container-1524 containers">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative mb-40">
                                <h2 className={titleClass}>
                                    We Provide<br /> Smart Solutions.
                                </h2>
                                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                    <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                                            stroke={isDark ? "#D9D9D9" : "#10302A"}
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-130">
                                <p className={descClass}>
                                    We craft digital experiences that engage, convert,<br />
                                    and grow your business. From branding to development,<br />
                                    we provide end-to-end solutions tailored.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-breadcrumb-wrap">
                    <div className="container-fluid container-1524 containers">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list">
                                    <ul>
                                        <li><SmartLink href="/">Home</SmartLink></li>
                                        <li><span></span></li>
                                        <li>Business Consulting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-hero-area-end */}

            {/* tp-breadcrumb-banner-area-start */}
            <div
                className="tp-breadcrumb-banner-spacing pre-header bg-position"
                style={breadcrumbBgStyle}
            >
                <div className="tp-breadcrumb-banner-content tp-bg-common-black-1">
                    <div className="container-fluid container-1524">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-10">
                                    <span className="tp-ff-dm fw-500 fs-20 lh-140-per ls-m-4 tp-text-grey-5">
                                        We are a proud member, of the :
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="tp-breadcrumb-banner-list d-flex flex-wrap">
                                    <span className="tp-ff-dm fw-500 fs-20 lh-140-per ls-m-4 tp-text-grey-5 mr-30 mb-10 d-flex">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-1">
                                            <path d="M18.7503 0.276674L7.8072 14.7403C7.57495 15.0311 7.22607 15.0888 6.93501 14.8568C6.87645 14.799 6.87645 14.799 6.81763 14.7403L0.0258056 5.79766C-0.032257 5.7399 0.0258056 5.68214 0.0258056 5.68214C0.083618 5.62438 0.141681 5.68214 0.141681 5.68214L7.23308 10.8441L18.4597 0.0438828C18.5175 -0.0146276 18.6341 -0.0146276 18.6919 0.0438828C18.7503 0.101393 18.7503 0.217914 18.7503 0.276674Z" fill="#F3F1F2" />
                                        </svg>
                                        Association of Trusted Business Consultants
                                    </span>
                                    <span className="tp-ff-dm fw-500 fs-20 lh-140-per ls-m-4 tp-text-grey-5 mb-10 d-flex">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-1">
                                            <path d="M18.7503 0.276674L7.8072 14.7403C7.57495 15.0311 7.22607 15.0888 6.93501 14.8568C6.87645 14.799 6.87645 14.799 6.81763 14.7403L0.0258056 5.79766C-0.032257 5.7399 0.0258056 5.68214 0.0258056 5.68214C0.083618 5.62438 0.141681 5.68214 0.141681 5.68214L7.23308 10.8441L18.4597 0.0438828C18.5175 -0.0146276 18.6341 -0.0146276 18.6919 0.0438828C18.7503 0.101393 18.7503 0.217914 18.7503 0.276674Z" fill="#F3F1F2" />
                                        </svg>
                                        A+ BBB Rated – Arkansas
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-breadcrumb-banner-area-end */}

            {/* tp-service-area-start */}
            <div className="tp-service-area pt-145">
                <div className="container-fluid container-1524">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-service-cst-3-wrap">
                                <h2 className={sectionTitleClass}>What We Offer</h2>
                                <div className="tp-service-cst-slider">
                                    <Swiper modules={[Autoplay]} {...tp_service_slider_active}>
                                        {services.map((service, idx) => (
                                            <SwiperSlide key={idx}>
                                                <div className="tp-service-cst-item p-relative">
                                                    <div className="tp-service-cst-thumb">
                                                        <img
                                                            className="w-100"
                                                            src={service.img}
                                                            alt={service.title}
                                                        />
                                                    </div>
                                                    <div className="tp-service-cst-content tp-bg-common-white">
                                                        <h5 className="fw-600 fs-28 tp-ff-dm tp-text-common-black-1 mb-15">
                                                            <SmartLink className="underline-black" href={service.link}>
                                                                {service.title}
                                                            </SmartLink>
                                                        </h5>
                                                        <p className="tp-service-cst-item-border tp-ff-dm fs-18 lh-140-per tp-text-common-black-1">
                                                            {service.desc}
                                                        </p>
                                                        <SmartLink
                                                            href={service.link}
                                                            className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
                                                        >
                                                            <span className="mr10 td-text d-inline-block mr-5">View Details</span>
                                                            <span className="tp-arrow-angle">
                                                                <ArrowSvg />
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
                    </div>
                </div>
            </div>
            {/* tp-service-area-end */}

            {/* tp-service-details-area-start */}
            <div className="tp-service-details-area pt-145">
                <div className="container-fluid container-1524">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-service-details-title-wrap mb-45">
                                <h2 className={overviewTitleClass}>Service Overview</h2>
                                <span className="tp-service-details-border">
                                    <svg viewBox="0 0 1498 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" d="M0 1L1498 1.00013" stroke={isDark ? "#ffffff" : "#10302A"} />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-details-content mr-100 mb-40">
                                <p className={overviewDescClass}>
                                    Branding design is the process of creating a unique identity that visually
                                    and strategically represents a business. It includes logo design, color schemes,
                                    typography, and brand messaging to ensure consistency across all platforms.
                                </p>
                                <p className={isDark ? "fs-18 tp-ff-dm ls-m-2 lh-140-per tp-text-grey-2" : "fs-18 tp-ff-dm ls-m-2 lh-140-per"}>
                                    Branding design is the visual and strategic identity of a business,
                                    shaping how it is perceived by customers. It includes elements like the
                                    logo, color palette, typography, imagery, and messaging, all working together
                                    to create a strong and memorable brand presence.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-details-content tp-service-details-content-2 mr-85 mb-40">
                                <h5 className={approachHeadingClass}>Our Approach to Branding</h5>
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <p><b>Discovery &amp; Research –</b> Understanding your business, audience, and competition.</p>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <p><b>Concept Development</b> Creating initial branding concepts and design ideas.</p>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <p><b>Refinement &amp; Testing –</b> Perfecting the visuals and ensuring they resonate with your audience.</p>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <p><b>Final Implementation –</b> Delivering all branding assets with a detailed style guide.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-details-area-end */}

            {/* tp-about-process-area */}
            <div className="tp-about-process-area pb-120">
                <div className="container-fluid container-1524">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-service-process-img fix scale-up-img tp-round-20 mt-30 mb-40">
                                <img
                                    className="img-cover scale-up tp-round-20"
                                    src="/assets/img/service/service-details/thumb-3.jpg"
                                    alt="Service Process"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-service-process-img fix scale-up-img tp-round-20 mt-30 mb-40">
                                <img
                                    className="img-cover scale-up tp-round-20"
                                    src="/assets/img/service/service-details/thumb-4.jpg"
                                    alt="Service Process 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-about-process-end */}

            {/* tp-process-area-start */}
            <div className="tp-process-area pb-140 p-relative z-index-1">
                <div className="container-fluid container-1524">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="tp-process-pp-video-wrap tp-process-it-video-thumb d-flex mb-50">
                                <span className="tp-process-it-icon d-none d-xl-block">
                                    <svg width="155" height="310" viewBox="0 0 155 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M155 155C155 240.604 85.6041 310 0 310V0C85.6041 0 155 69.3959 155 155Z" fill="#B4E717" />
                                    </svg>
                                </span>
                                <div className="tp-process-pp-video-inner tp-process-it-wrap p-relative d-inline-block">
                                    <img
                                        className="tp-process-pp-video-img"
                                        src="/assets/img/process/it/thumb.png"
                                        alt="Process Video"
                                    />
                                    <div className="tp-video-main tp-process-it-video">
                                        {/* Video popup button */}
                                        <button
                                            onClick={() => playVideo("go7QYaQR494")}
                                            className="tp-hero-video-btn popup-video"
                                            type="button"
                                            aria-label="Play video"
                                        >
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5645 10.1224C15.0631 9.1342 15.0631 6.93206 13.5645 5.94387L5.18141 0.416189C3.51284 -0.684068 1.29437 0.527069 1.31261 2.52828L1.41277 13.5176C1.43082 15.4982 3.63024 16.673 5.2816 15.5841L13.5645 10.1224Z" fill="#030303" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="tp-process-it-title-wrap mb-50">
                                {/* tp-text-revel-anim triggers initTextRevealAnim which adds .tp-revel-line */}
                                <h2 className="tp-text-revel-anim fix tp-ff-dm fw-600 fs-60 fs-xs-40 lh-120-per ls-m-4 tp-text-common-black-1 mb-20" style={isDark ? { color: "#fff" } : undefined}>
                                    Guided by Process,<br /> Driven by Results.
                                </h2>
                                <p className={processParaClass}>
                                    We follow a streamlined, intelligent workflow designed<br />
                                    to eliminate friction and deliver consistent results.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-30 pt-30">
                        {processItems.map((item, idx) => (
                            <div key={idx} className="col-xl-3 col-lg-6 col-md-6">
                                <div className={processItemClass} data-delay={item.delay}>
                                    <span className={processItemPositionClass}>{item.num}</span>
                                    <h4 className={processItemTitleClass} style={{ whiteSpace: "pre-line" }}>
                                        {item.title}
                                    </h4>
                                    <p className={processItemParaClass}>
                                        Conduct user research (interviews, surveys, analytics).
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12">
                            <div
                                className="tp-skill-wd-bottom text-center mt-30 tp_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <p className={`tp-process-it-para-2 tp-process-it-para-3 tp-skill-wd-para tp-ff-dm fw-500 fs-16 ${isDark ? "tp-text-common-white" : "tp-text-common-black-5"}`}>
                                    {`Don't hesitate collaborate with expertise- `}
                                    <SmartLink
                                        href="/contact"
                                        className="ml-20 d-inline-block lh-0 tp-round-26 fs-16 ls-m-3 text-uppercase ls-0 tp-btn-switch-animation tp-text-common-black tp-ff-dm fw-700"
                                    >
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">{"Let's Talk"}</span>
                                            <span className="btn-icon">
                                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className="btn-icon">
                                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="tp-faq-area p-relative z-index-1 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3">
                            <div className="tp-faq-ai-title-wrap mb-50">
                                {/* text-anim class triggers initTextAnim (character-level scroll animation) */}
                                <span className={faqSubtitleClass}>/ FAQ /</span>
                                <h2 className={faqTitleClass}>
                                    Explore Answers to<br /> Our Most Asked Questions
                                </h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-cst-tab-content-2 tp-faq-ai-tab-content">
                                <div className="accordion mb-60" id="general_faqaccordion" ref={accordionRef}>
                                    {faqItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`accordion-item tp_fade_anim${item.isOpen ? " tp-faq-active" : ""}`}
                                            data-delay=".3"
                                        >
                                            <h2 className="accordion-header p-relative" id={item.headingId}>
                                                <button
                                                    className={`tp-faq-btn${item.isOpen ? "" : " collapsed"}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${item.id}`}
                                                    aria-expanded={item.isOpen ? "true" : "false"}
                                                    aria-controls={item.id}
                                                >
                                                    <span className="tp-faq-ai-count">{item.num}</span>
                                                    {item.question}
                                                    <span className="accordion-btn"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={item.id}
                                                className={`accordion-collapse collapse${item.isOpen ? " show" : ""}`}
                                                aria-labelledby={item.headingId}
                                                data-bs-parent="#general_faqaccordion"
                                            >
                                                <div className="accordion-body tp-faq-details-para">
                                                    <p>
                                                        Partnering with this AI agency was one of the best decisions {`we've`} made.
                                                        From the very first call, their team demonstrated deep technical knowledge
                                                        and a strong understanding.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-faq-area-end */}
        </main>
    );
};

export default ServiceDetailsTwo;