"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import SmartLink from "@/components/common/SmartLink";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const capabilities = [
    {
        title: "Design",
        services: [
            { name: "UI/UX Design", link: "/service-details-2" },
            { name: "Branding Design", link: "/service-details-2" },
            { name: "Web Design", link: "/service-details-2" },
            { name: "Graphics Design", link: "/service-details-2" },
            { name: "3D Art", link: "/service-details-2" },
        ]
    },
    {
        title: "Tech",
        services: [
            { name: "Web Development", link: "/service-details-2" },
            { name: "Software Development", link: "/service-details-2" },
            { name: "Quality Assurance", link: "/service-details-2" },
            { name: "Mobile App", link: "/service-details-2" },
            { name: "iOS App Development", link: "/service-details-2" },
            { name: "Technical Support", link: "/service-details-2" },
            { name: "Quality Assurance", link: "/service-details-2" },
        ]
    },
    {
        title: "Marketing",
        services: [
            { name: "Digital Marketing", link: "/service-details-2" },
            { name: "Email Marketing", link: "/service-details-2" },
            { name: "Content Marketing", link: "/service-details-2" },
            { name: "Video Production", link: "/service-details-2" },
            { name: "Marketing Automation", link: "/service-details-2" },
            { name: "Affiliate Marketing", link: "/service-details-2" },
            { name: "SEO Optimized", link: "/service-details-2" },
        ]
    }
];

const testimonials = [
    {
        thumb: "/assets/img/testimonial/cst/thumb.jpg",
        avatar: "/assets/img/testimonial/sa/avatar.png",
        name: "John Doe",
        designation: "CEO, InnovateTech",
        quote: "Awesome! Working with Aelirc has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.",
        videoUrl: "go7QYaQR494",
        resultsTitle: "Clients’ Results",
        resultsDesc: "We are a creative agency passionate about crafting bold, innovative, and strategic.",
    },
    {
        thumb: "/assets/img/testimonial/cst/thumb.jpg",
        avatar: "/assets/img/testimonial/sa/avatar.png",
        name: "John Doe",
        designation: "CEO, InnovateTech",
        quote: "Awesome! Working with Aelirc has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.",
        videoUrl: "go7QYaQR494",
        resultsTitle: "Clients’ Results",
        resultsDesc: "We are a creative agency passionate about crafting bold, innovative, and strategic.",
    },
    {
        thumb: "/assets/img/testimonial/cst/thumb.jpg",
        avatar: "/assets/img/testimonial/sa/avatar.png",
        name: "John Doe",
        designation: "CEO, InnovateTech",
        quote: "Awesome! Working with Aelirc has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.",
        videoUrl: "go7QYaQR494",
        resultsTitle: "Clients’ Results",
        resultsDesc: "We are a creative agency passionate about crafting bold, innovative, and strategic.",
    },
    {
        thumb: "/assets/img/testimonial/cst/thumb.jpg",
        avatar: "/assets/img/testimonial/sa/avatar.png",
        name: "John Doe",
        designation: "CEO, InnovateTech",
        quote: "Awesome! Working with Aelirc has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.",
        videoUrl: "go7QYaQR494",
        resultsTitle: "Clients’ Results",
        resultsDesc: "We are a creative agency passionate about crafting bold, innovative, and strategic.",
    }
];

const ServiceFour = () => {
    const isDark = useIsDarkRoute();
    const { playVideo } = useVideoModal();

    const logoList = isDark
        ? [
              "/assets/img/brands/white/logo.png",
              "/assets/img/brands/white/logo-2.png",
              "/assets/img/brands/white/logo-3.png",
              "/assets/img/brands/white/logo-4.png",
              "/assets/img/brands/white/logo-5.png",
              "/assets/img/brands/white/logo-3.png",
              "/assets/img/brands/white/logo-4.png",
              "/assets/img/brands/white/logo-5.png",
              "/assets/img/brands/white/logo-3.png",
          ]
        : [
              "/assets/img/brands/logo.png",
              "/assets/img/brands/logo-2.png",
              "/assets/img/brands/logo-3.png",
              "/assets/img/brands/logo-4.png",
              "/assets/img/brands/logo-5.png",
              "/assets/img/brands/logo-3.png",
              "/assets/img/brands/logo-4.png",
              "/assets/img/brands/logo-5.png",
              "/assets/img/brands/logo-3.png",
          ];

    // Theme based styles/classes
    const heroTitleClass = isDark
        ? "fs-70 fs-lg-60 fs-xs-40 fw-700 ls-m-3 lh-110-per tp-ff-dm tp-text-common-white"
        : "fs-70 fs-lg-60 fs-xs-40 fw-700 ls-m-3 lh-110-per tp-ff-dm tp-text-common-black-1";
    const heroStrokeColor = isDark ? "#fff" : "#10302A";
    const heroDescClass = isDark
        ? "tp-section-3-para tp-text-grey-2 fs-20 lh-140-per tp-ff-dm"
        : "tp-section-3-para fs-20 lh-140-per tp-ff-dm";

    const capabilitiesSubtitleClass = isDark
        ? "tp-section-subtitle tp-section-subtitle-cst tp-ff-dm fw-500 tp-text-common-white fs-16"
        : "tp-section-subtitle tp-section-subtitle-cst tp-ff-dm fw-500 tp-text-common-black-1 fs-16";
    const capabilitiesTitleClass = isDark
        ? "tp-section-title mb-25 tp-ff-dm fs-72 fs-xl-60 fs-lg-50 fw-600 tp-text-common-white"
        : "tp-section-title mb-25 tp-ff-dm fs-72 fs-xl-60 fs-lg-50 fw-600 tp-text-common-black-1";
    const capabilitiesDescClass = isDark
        ? "tp-section-3-para tp-ff-dm tp-text-common-white opacity-8 fs-18 lh-150-per"
        : "tp-section-3-para tp-ff-dm tp-text-common-black-5 opacity-8 fs-18 lh-150-per";
    const capabilitiesCardH4Class = isDark
        ? "tp-ff-dm fw-600 fs-35 lh-130-per ls-m-4 tp-text-common-white mb-25"
        : "tp-ff-dm fw-600 fs-35 lh-130-per ls-m-4 tp-text-common-black mb-25";

    const testimonialSlideBgClass = isDark ? "swiper-slide tp-bg-common-black" : "swiper-slide tp-bg-common-white";
    const testimonialRowBgClass = isDark ? "row tp-bg-common-black" : "row tp-bg-common-white";
    const brandBgClass = isDark ? "" : "tp-bg-common-white";

    return (
        <main>
            {/* tp-service-hero-area-start */}
            <div className="tp-service-hero-area pre-header tp-service-hero-spacing p-relative z-index-1">
                <div className="container-fluid container-1524 containers">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative mb-40">
                                <h2 className={heroTitleClass}>
                                    We Provide<br /> Smart Solutions.
                                </h2>
                                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                    <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                                            stroke={heroStrokeColor}
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-130">
                                <p className={heroDescClass}>
                                    We craft digital experiences that engage, convert,<br /> and grow your business. From branding to development,<br /> we provide end-to-end solutions tailored.
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
                                        <li>
                                            <SmartLink href="/">Home</SmartLink>
                                        </li>
                                        <li>
                                            <span></span>
                                        </li>
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
                style={{ backgroundImage: "url(/assets/img/breadcrumb/thumb-11.jpg)" }}
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
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-10 mt-5">
                                            <path d="M18.7503 0.276674L7.8072 14.7403C7.57495 15.0311 7.22607 15.0888 6.93501 14.8568C6.87645 14.799 6.87645 14.799 6.81763 14.7403L0.0258056 5.79766C-0.032257 5.7399 0.0258056 5.68214 0.0258056 5.68214C0.083618 5.62438 0.141681 5.68214 0.141681 5.68214L7.23308 10.8441L18.4597 0.0438828C18.5175 -0.0146276 18.6341 -0.0146276 18.6919 0.0438828C18.7503 0.101393 18.7503 0.217914 18.7503 0.276674Z" fill="#F3F1F2" />
                                        </svg>
                                        Association of Trusted Business Consultants
                                    </span>
                                    <span className="tp-ff-dm fw-500 fs-20 lh-140-per ls-m-4 tp-text-grey-5 mb-10 d-flex">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-10 mt-5">
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
            <div className="tp-service-area pt-160 pb-130">
                <div className="container-fluid container-1524">
                    <div className="row mb-30">
                        <div className="col-lg-6">
                            <div className="tp-service-title-wrap mb-45">
                                <span className={capabilitiesSubtitleClass}>
                                    <span className="borders d-inline-block"></span>Smart Solutions
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-45">
                                <h2 className={capabilitiesTitleClass}>Our capabilities</h2>
                                <p className={capabilitiesDescClass}>
                                    We specialize in delivering cutting-edge strategies, unparalleled creativity,<br /> and seamless execution.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-45">
                        {capabilities.map((cat, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="tp-service-item tp-service-3-item p-relative mb-30">
                                    <h4 className={capabilitiesCardH4Class}>{cat.title}</h4>
                                    <ul>
                                        {cat.services.map((ser, sIdx) => (
                                            <li key={sIdx}>
                                                <SmartLink href={ser.link}>{ser.name}</SmartLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* tp-service-area-end */}

            {/* tp-video-area-start */}
            <div className="tp-video-area p-relative z-index-1 fix">
                <div className="tp-video-thumb scale-up-img">
                    <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/video/cst/thumb.png" alt="" />
                </div>
                <div className="tp-video-cst-2-content">
                    <div className="container-fluid container-1524">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-5 col-lg-6">
                                <div className="tp-video-content tp-bg-common-black tp-round-20 mr-60">
                                    <h4 className="tp-text-common-white tp-ff-dm fw-500 fs-25 fs-xs-20 lh-140-per mb-50">
                                        We empower brands to scale, innovate, and thrive in an ever-changing digital landscape.
                                    </h4>
                                    <span className="tp-hero-bottom-border mb-40">
                                        <svg viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1L324 1.00003" stroke="white" strokeOpacity="0.15" />
                                        </svg>
                                    </span>
                                    <div className="tp-video-main tp-hero-video d-flex align-items-center">
                                        <button
                                            className="tp-hero-video-btn popup-video mr-20"
                                            type="button"
                                            onClick={() => playVideo("go7QYaQR494")}
                                        >
                                            <span>
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.2595 11.3877C15.9455 10.276 15.9455 7.79857 14.2595 6.68685L4.82854 0.468212C2.95139 -0.769576 0.455619 0.592952 0.476139 2.84432L0.588819 15.2073C0.609123 17.4355 3.08348 18.7571 4.94126 17.5321L14.2595 11.3877Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </button>
                                        <p className="tp-ff-dm lh-110-per mb-0 fw-700 fs-18 tp-text-common-white">
                                            We’re Global Brand<br /> Digital Agency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-video-area-end */}

            {/* tp-testimonial-area-start */}
            <div className="tp-testimonial-area pt-160">
                <div className="container-fluid container-1524">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper tp-testimonial-cst-slider">
                                <Swiper
                                    modules={[Pagination]}
                                    slidesPerView={1}
                                    speed={1000}
                                    spaceBetween={24}
                                    loop={true}
                                    pagination={{
                                        el: ".tp-testimonial-cst-pagenation",
                                        clickable: true,
                                    }}
                                >
                                    {testimonials.map((item, index) => (
                                        <SwiperSlide key={index} className={testimonialSlideBgClass}>
                                            <div className={testimonialRowBgClass}>
                                                <div className="col-lg-6 mb-25">
                                                    <div className="tp-testimonial-cst-wrap p-relative">
                                                        <div className="tp-testimonial-cst-thumb">
                                                            <img src={item.thumb} alt="" />
                                                        </div>
                                                        <div className="tp-testimonial-cst-item tp-bg-common-green-2">
                                                            <div className="tp-video-main tp-testimonial-sa-video mb-40">
                                                                <button
                                                                    className="tp-hero-video-btn popup-video"
                                                                    type="button"
                                                                    onClick={() => playVideo(item.videoUrl)}
                                                                >
                                                                    <span>
                                                                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z" fill="#F3F1F2" />
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <p className="tp-text-common-black-1 lh-140-per fs-24 fs-lg-20 fs-xs-20 fw-500 tp-ff-dm mb-40">
                                                                {item.quote}
                                                            </p>
                                                            <div className="tp-testimonial-sa-avatar d-flex">
                                                                <div className="tp-testimonial-sa-qoute mr-20">
                                                                    <span className="qoute">
                                                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M22.2325 16.2511C21.8909 18.3984 19.2068 20.6921 17.1082 20.7409C16.9618 20.7409 16.8154 20.7898 16.7178 20.8874C16.6202 20.9362 16.5226 20.985 16.4738 21.1314C15.7418 22.4978 16.1322 23.5715 17.3522 24.45C18.7675 25.4748 21.0125 24.45 22.1349 23.5227C24.9655 21.1802 27.8448 17.1296 27.6984 13.2741C28.1865 10.6875 28.0888 7.90583 27.3568 5.61211C26.8688 4.14802 25.4535 3.41598 23.9894 3.31838C22.5253 3.22069 19.4996 2.78155 18.1819 3.65992C16.8642 4.53845 16.7666 6.24654 16.6202 7.71054C16.4738 9.32103 16.0346 12.3469 17.4011 13.6158C18.7675 14.8358 22.6717 13.5181 22.2325 16.2511ZM6.12762 16.2511C5.78601 18.3984 3.10194 20.6921 1.00334 20.7409C0.856932 20.7409 0.710524 20.7898 0.612919 20.8874C0.515234 20.9362 0.417707 20.985 0.368824 21.1314C-0.363216 22.4978 0.0272045 23.5715 1.24727 24.45C2.66255 25.4748 4.90748 24.45 6.03002 23.5227C8.86057 21.1802 11.7399 17.1295 11.5935 13.2741C12.0816 10.6875 11.9839 7.90583 11.252 5.61211C10.764 4.14802 9.34868 3.41598 7.88452 3.31838C6.42044 3.22069 3.39467 2.78155 2.077 3.65992C0.759405 4.53845 0.661722 6.24654 0.515314 7.71054C0.368906 9.32103 -0.0703201 12.3469 1.29616 13.6158C2.66263 14.8358 6.61565 13.5181 6.12762 16.2511Z" fill="white" />
                                                                        </svg>
                                                                    </span>
                                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                                </div>
                                                                <div>
                                                                    <h5 className="fw-600 fs-28 mb-0 tp-text-common-black-1 tp-ff-dm">{item.name}</h5>
                                                                    <span className="fs-20 tp-ff-dm tp-text-common-black-1">{item.designation}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb-25">
                                                    <div className="tp-testimonial-cst-result fix tp-bg-common-black-1 h-100 p-relative">
                                                        <img className="tp-testimonial-cst-shape tp-live-anim-spin" src="/assets/img/testimonial/cst/shape.png" alt="" />
                                                        <div className="tp-testimonial-cst-result-top d-flex justify-content-between">
                                                            <div>
                                                                <h3 className="tp-ff-dm tp-text-common-white fs-42 lh-120-per mb-15">
                                                                    Our <span className="tp-text-common-green-2">{item.resultsTitle}</span><br /> Speak for Themselves
                                                                </h3>
                                                                <p className="tp-ff-dm fs-18 lh-140-per tp-text-grey-5">
                                                                    {item.resultsDesc}
                                                                </p>
                                                            </div>
                                                            <span className="tp-testimonial-cst-network">
                                                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.25 0C21.495 0 22.5 1.005 22.5 2.25V21.75C22.5 22.995 21.495 24 20.25 24C19.005 24 18 22.995 18 21.75V2.25C18 1.005 19.005 0 20.25 0ZM2.25 15C3.495 15 4.5 16.005 4.5 17.25V21.75C4.5 22.995 3.495 24 2.25 24C1.005 24 0 22.995 0 21.75V17.25C0 16.005 1.005 15 2.25 15ZM11.25 7.5C12.495 7.5 13.5 8.505 13.5 9.75V21.75C13.5 22.995 12.495 24 11.25 24C10.005 24 9 22.995 9 21.75V9.75C9 8.505 10.005 7.5 11.25 7.5Z" fill="#1D1D1D" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <SmartLink
                                                            href="/contact-us"
                                                            className="tp-btn-cst tp-testimonial-cst-btn d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm"
                                                        >
                                                            <span className="d-flex align-items-center justify-content-center">
                                                                <span className="btn-text">View All Testimonial</span>
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
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="tp-testimonial-cst-pagenation mt-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-testimonial-area-end */}

            {/* tp-brands-area-start */}
            <div className={`tp-brand-area tp-brand-cst-spacing ${brandBgClass} z-index-1 p-relative`}>
                <div className="container-fluid container-1524">
                    <div className="row">
                        <div className="tp-brand-wrap">
                            <div className="tp-brand-slide-active tp-slider-transition">
                                <Marquee speed={60} gradient={false} autoFill={true}>
                                    {logoList.map((logo, idx) => (
                                        <div className="tp-brand-item" key={idx} style={{ paddingRight: "80px" }}>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <img src={logo} alt="" />
                                            </a>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-brands-area-end */}
        </main>
    );
};

export default ServiceFour;