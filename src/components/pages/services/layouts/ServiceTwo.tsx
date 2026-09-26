"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";
import SmartLink from "@/components/common/SmartLink";
import StartupAgencyTechnology from "@/components/home/startup-agency/sections/StartupAgencyTechnology";
import StartupAgencyTestimonial from "@/components/home/startup-agency/sections/StartupAgencyTestimonial";
import AboutCreativeTextSlider from "@/components/pages/about/layouts/about-creative/AboutCreativeTextSlider";

const brandingIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.9744 20.88C26.804 20.88 24.21 18.288 24.21 15.12V0H35.6909V15.12C35.7389 18.288 33.1929 20.88 29.9744 20.88Z" fill="currentColor" />
        <path d="M29.9744 39.1201C26.804 39.1201 24.21 41.7121 24.21 44.8801V60.0001H35.6909V44.8801C35.7389 41.6641 33.1929 39.1201 29.9744 39.1201Z" fill="currentColor" />
        <path d="M23.5357 23.5677C21.2779 25.8237 17.6751 25.8237 15.4174 23.5677L4.70508 12.8637L12.8234 4.75171L23.5357 15.4557C25.7934 17.6637 25.7934 21.3117 23.5357 23.5677Z" fill="currentColor" />
        <path d="M36.458 36.4315C34.2002 38.6875 34.2002 42.2875 36.458 44.5435L47.1703 55.2475L55.2886 47.1355L44.5763 36.4315C42.3185 34.1755 38.6677 34.1755 36.458 36.4315Z" fill="currentColor" />
        <path d="M20.8962 29.9996C20.8962 33.1676 18.3022 35.7596 15.1317 35.7596H0V24.2876H15.1317C18.3022 24.2396 20.8962 26.8316 20.8962 29.9996Z" fill="currentColor" />
        <path d="M39.1035 29.9996C39.1035 33.1676 41.6975 35.7596 44.868 35.7596H59.9997V24.2876H44.868C41.6975 24.2396 39.1035 26.8316 39.1035 29.9996Z" fill="currentColor" />
        <path d="M23.5357 36.4315C25.7934 38.6875 25.7934 42.2875 23.5357 44.5435L12.8234 55.2475L4.70508 47.1355L15.4174 36.4315C17.6751 34.1755 21.2779 34.1755 23.5357 36.4315Z" fill="currentColor" />
        <path d="M36.458 23.5677C38.7157 25.8237 42.3185 25.8237 44.5763 23.5677L55.2886 12.8637L47.1703 4.75171L36.458 15.4557C34.2002 17.6637 34.2002 21.3117 36.458 23.5677Z" fill="currentColor" />
    </svg>
);

const uiuxIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.632 0.0479736H30.048H29.904H13.68H0C0 15.888 12.288 28.848 27.84 30C12.288 31.152 0 44.112 0 59.952H13.68H29.952H30.096H43.632H60V43.584V30.096V29.904V16.416V0.0479736H43.632ZM30.048 57.168V43.632V30.144V29.952V16.416V2.87997C31.392 17.424 43.104 28.944 57.744 30C43.152 31.104 31.44 42.624 30.048 57.168Z" fill="currentColor" />
    </svg>
);

const webDevIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.8153 23.7751C52.2892 23.7751 50.8434 24.3373 49.7189 25.3012C49.6386 25.3815 49.4779 25.4618 49.3976 25.6225C48.1928 26.6667 39.5984 29.7189 30.0402 29.9598C30.0402 29.9598 30.0402 29.9598 29.9598 29.8795C38.3133 22.008 47.3092 19.2771 47.3092 19.2771C48.755 19.1968 50.2008 18.5542 51.245 17.51C53.6546 15.1004 53.6546 11.1647 51.245 8.75502C48.8353 6.34538 44.8996 6.34538 42.49 8.75502C41.3655 9.87952 40.8032 11.245 40.7229 12.6908C40.7229 12.8514 40.7229 13.012 40.7229 13.1727C40.6426 14.6988 36.7068 23.0522 30.0402 29.9598C30.2811 18.5542 34.6988 10.2811 34.6988 10.2811C35.6627 9.15663 36.2249 7.79116 36.2249 6.18474C36.2249 2.73092 33.4137 0 30.0402 0C26.6667 0 23.8554 2.81125 23.8554 6.18474C23.8554 7.71084 24.4177 9.15663 25.3815 10.2811C25.4618 10.3614 25.5422 10.5221 25.7028 10.6024C26.747 11.8072 29.7992 20.4016 30.0402 29.9598C30.0402 29.9598 30.0402 29.9598 29.9598 30.0402C22.008 21.7671 19.2771 12.7711 19.2771 12.7711C19.1968 11.3253 18.5542 9.87952 17.51 8.83534C15.1004 6.4257 11.1647 6.4257 8.75502 8.83534C6.34538 11.245 6.34538 15.1807 8.75502 17.5904C9.87952 18.7149 11.245 19.2771 12.6908 19.3574C12.8514 19.3574 13.012 19.3574 13.1727 19.3574C14.6988 19.4377 23.0522 23.3735 29.9598 30.0402C18.5542 29.7992 10.2811 25.3815 10.2811 25.3815C9.15663 24.4177 7.79116 23.8554 6.18474 23.8554C2.73092 23.8554 0 26.6667 0 30.0402C0 33.494 2.81125 36.2249 6.18474 36.2249C7.71084 36.2249 9.15663 35.6627 10.2811 34.6988C10.3614 34.6185 10.5221 34.5382 10.6024 34.3775C11.8072 33.3333 20.4016 30.2811 29.9598 30.0402C21.6064 37.8313 12.6908 40.5622 12.6908 40.5622C11.245 40.6426 9.7992 41.2851 8.75502 42.3293C6.34538 44.739 6.34538 48.6747 8.75502 51.0843C11.1647 53.494 15.1004 53.494 17.51 51.0843C18.6345 49.9598 19.1968 48.5944 19.2771 47.1486C19.2771 46.9879 19.2771 46.8273 19.2771 46.6667C19.3574 45.1406 23.2932 36.8675 29.8795 29.8795C29.8795 29.8795 29.8795 29.8795 29.9598 29.8795C29.7189 41.4458 25.3012 49.7189 25.3012 49.7189C24.3373 50.8434 23.7751 52.2088 23.7751 53.8153C23.7751 57.2691 26.5863 60 29.9598 60C33.4137 60 36.1446 57.1888 36.1446 53.8153C36.1446 52.2892 35.5823 50.8434 34.6185 49.7189C34.5382 49.6386 34.4578 49.4779 34.2972 49.3976C33.253 48.1928 30.2008 39.5984 29.9598 29.9598C37.8313 38.2329 40.5622 47.1486 40.5622 47.1486C40.6426 48.5944 41.2851 50.0402 42.3293 51.0843C44.739 53.494 48.6747 53.494 51.0843 51.0843C53.494 48.6747 53.494 44.739 51.0843 42.3293C49.9598 41.2048 48.5944 40.6426 47.1486 40.5622C46.9879 40.5622 46.8273 40.5622 46.6667 40.5622C45.1406 40.4819 36.8675 36.5462 29.9598 29.9598C41.5261 30.2811 49.7189 34.6988 49.7189 34.6988C50.8434 35.6627 52.2088 36.2249 53.8153 36.2249C57.2691 36.2249 60 33.4137 60 30.0402C60 26.6667 57.2691 23.7751 53.8153 23.7751ZM30.0402 29.9598C29.9598 29.9598 29.9598 29.9598 30.0402 29.9598V29.9598Z" fill="currentColor" />
    </svg>
);

const serviceSlides = [
    {
        title: "Branding Design",
        icon: brandingIcon,
        description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        link: "/service-details",
    },
    {
        title: "UI/UX Design",
        icon: uiuxIcon,
        description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        link: "/service-details",
    },
    {
        title: "Web Development",
        icon: webDevIcon,
        description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        link: "/service-details",
    },
    {
        title: "Web Development",
        icon: webDevIcon,
        description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        link: "/service-details",
    },
    {
        title: "Branding Design",
        icon: brandingIcon,
        description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        link: "/service-details",
    },
];

const ServiceTwo = () => {
    const isDark = useIsDarkRoute();

    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const strokeColor = isDark ? "#ffffff" : "#030303";
    const circleStroke = isDark ? "#D9D9D9" : "#F0F0F0";
    const circleOpacity = isDark ? 0.05 : undefined;
    const borderFill = isDark ? "#5c5c5c" : "#EEEEEE";
    const slideBorderFill = isDark ? "#fff" : "#030303";
    const slideBorderOpacity = isDark ? 0.1 : 0.1;
    const slideLinkColor = isDark ? "tp-text-common-white hover-text-white" : "tp-text-common-black";

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
                                        <li>Service 02</li>
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
                <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/breadcrumb/thumb-3.jpg" alt="About Thumbnail" />
            </div>
            {/* tp-banner-area-end */}

            {/* tp-service-area-start */}
            <div className="tp-service-area pt-140 pb-135">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="tp-service-sa-title-wrap mb-30 tp_fade_anim" data-delay=".3">
                                <span className={`tp-section-subtitle tp-ff-heading fw-500 ${textColor} fs-16`}>
                                    <span className="borders d-inline-block"></span>
                                    Our Smart Solutions
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="tp-service-sa-title-wrap mb-30">
                                <h3 className={`fs-50 fs-lg-40 fs-xs-30 lh-120-per tp_text_invert ${isDark ? "" : "invert-black-2"}`}>
                                    From branding to funding, we provide the tools & strategies startups need to succeed in a competitive market.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <span className="tp-service-sa-border mt-10 d-inline-block">
                        <svg height="6" viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill={borderFill} />
                        </svg>
                    </span>
                    <div className="tp-service-sa-bottom">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pt-20 pb-50 tp_fade_anim" data-delay=".3">
                                    <h5 className={`fs-25 fw-500 ${descColor}`}>
                                        We helped Caleric raise $2M in funding &<br /> scale to 50K+ users.
                                    </h5>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="tp-service-sa-slider-wrapper">
                                    <Swiper
                                        modules={[Pagination]}
                                        slidesPerView={1}
                                        speed={1000}
                                        spaceBetween={24}
                                        loop={true}
                                        pagination={{
                                            el: ".tp-service-sa-slider-wrapper .tp-service-sa-pagenation",
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            1200: { slidesPerView: 3 },
                                            992: { slidesPerView: 2 },
                                            768: { slidesPerView: 2 },
                                            576: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                        className="tp-service-sa-slider p-relative"
                                    >
                                        {serviceSlides.map((slide, index) => {
                                            const IconComponent = slide.icon;

                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="tp-service-sa-item tp-bg-common-white-2 mb-30">
                                                        <span className="tp-service-sa-item-icon d-inline-block mb-30">
                                                            <IconComponent />
                                                        </span>
                                                        <h4 className={`tp-service-sa-item-title mb-20 ${isDark ? "tp-text-common-white" : ""}`}>
                                                            <SmartLink href={slide.link}>{slide.title}</SmartLink>
                                                        </h4>
                                                        <p className={`tp-service-sa-item-text mb-130 ${descColor}`}>
                                                            {slide.description}
                                                        </p>
                                                        <span className="tp-service-sa-border mb-10 d-inline-block">
                                                            <svg height="6" viewBox="0 0 354 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM349 3.5L354 5.88675V0.113249L349 2.5V3.5ZM4.5 3.5H349.5V2.5H4.5V3.5Z"
                                                                    fill={slideBorderFill}
                                                                    fillOpacity={slideBorderOpacity}
                                                                />
                                                            </svg>
                                                        </span>
                                                        <SmartLink
                                                            href={slide.link}
                                                            className={`tp-left-right fw-500 hover-text-grey fs-15 text-uppercase ${slideLinkColor}`}
                                                        >
                                                            <span className="mr10 td-text d-inline-block mr-5">View Details</span>
                                                            <span className="tp-arrow-angle">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </SmartLink>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                    <div className="tp-service-sa-pagenation mt-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-area-end */}

            {/* tp-techonolgy-area-start  */}
            <StartupAgencyTechnology />
            {/* tp-techonolgy-area-end  */}

            {/* tp-testimonial-area-start */}
            <StartupAgencyTestimonial />
            {/* tp-testimonial-area-end */}

            {/* tp-text-slider-area-start */}
            <AboutCreativeTextSlider />
            {/* tp-text-slider-area-end */}
        </main>
    );
};

export default ServiceTwo;