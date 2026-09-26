
"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import SmartLink from "@/components/common/SmartLink";
import AboutMeTestimonial from "@/components/pages/about/layouts/about-me/AboutMeTestimonial";
import AboutCreativeTextSlider from "@/components/pages/about/layouts/about-creative/AboutCreativeTextSlider";

const servicePanels = [
    {
        num: "01.",
        title: "UI/UX Design",
        desc: "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
        tags: ["UX Design", "User Testing", "Motion Design"],
        img: "/assets/img/service/pp/pp.jpg",
        link: "/service-details",
    },
    {
        num: "02.",
        title: "User Research",
        desc: "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
        tags: ["UX Design", "User Testing", "Motion Design"],
        img: "/assets/img/service/pp/pp-2.jpg",
        link: "/service-details",
    },
    {
        num: "03.",
        title: "Branding",
        desc: "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
        tags: ["UX Design", "User Testing", "Motion Design"],
        img: "/assets/img/service/pp/pp-3.jpg",
        link: "/service-details",
    },
    {
        num: "04.",
        title: "3D & Motion",
        desc: "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
        tags: ["UX Design", "User Testing", "Motion Design"],
        img: "/assets/img/service/pp/pp-4.jpg",
        link: "/service-details",
    },
];

const processSteps = [
    {
        num: "01",
        title: (
            <>
                Research &<br /> Analysis
            </>
        ),
        desc: "Conduct user research (interviews, surveys, analytics).",
    },
    {
        num: "02",
        title: (
            <>
                Design &<br /> Prototyping
            </>
        ),
        desc: "Transform wireframes into high-fidelity UI designs.",
    },
    {
        num: "03",
        title: (
            <>
                Testing &<br /> Iteration
            </>
        ),
        desc: "Conduct usability testing to gather user feedback.",
    },
    {
        num: "04",
        title: (
            <>
                Prepare for<br /> Delivery
            </>
        ),
        desc: "Track performance using analytics and user feedback.",
    },
];

const ServiceThree = () => {
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
                                <h2 className={`fs-70 fs-lg-60 fs-xs-40 ${textColor}`}>Create Brand with Having Fun.</h2>
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
                                    We craft digital experiences that engage,
                                    <br /> convert, and grow your business. From branding
                                    <br /> to development, we provide end-to-end
                                    <br /> solutions tailored to your needs.
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
                                        <li>Service 03</li>
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
                <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/breadcrumb/thumb-4.jpg" alt="About Thumbnail" />
            </div>
            {/* tp-banner-area-end */}

            {/* tp-service-area-start */}
            <div className="tp-service-area pt-110 pb-200">
                <div className="container-fluid p-0">
                    <div className="tp-service-pp-title-box">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="tp-about-pp-title-wrap mb-40">
                                    <span className={`tp-section-subtitle mb-15 tp-ff-heading fw-500 fs-18 d-inline-block ${textColor}`}>What I Do</span>
                                    <div className="tp-hero-sa-shape-2 tp-techonolgy-shape mr-140">
                                        <span className="shape-1 mb-5">
                                            <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.6209 4.29153e-05C7.77239 4.29153e-05 0.599251 6.84014 0.599251 15.2778H32.6426C32.6426 6.84014 25.4694 4.29153e-05 16.6209 4.29153e-05Z" fill={strokeColor} />
                                            </svg>
                                        </span>
                                        <span className="shape-2">
                                            <svg width="53" height="35" viewBox="0 0 53 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M52.6426 0.625H0V35L52.6426 0.625Z" fill="#C4EE18" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="tp-about-pp-title-wrap mb-40">
                                    <h2 className={`tp-section-pp-title fw-400 fs-50 fs-lg-42 fs-xs-30 lh-120-per tp_text_invert ${isDark ? "" : "invert-black"}`}>
                                        I help brands build intuitive and user-friendly digital products through a strategic design approach.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-service-pp-pin">
                        {servicePanels.map((item, index) => (
                            <div key={index} className={`tp-service-pp-item ${isDark ? "" : "tp-service-inner-item"} tp-service-pp-panel`}>
                                <div className="row">
                                    <div className="col-xxl-3 col-xl-2 col-lg-1 col-md-1">
                                        <div className="tp-service-pp-number">
                                            <span className={`fw-500 fs-20 ${isDark ? "tp-text-common-white" : "tp-text-common-black"} text-uppercase`}>
                                                {item.num}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-7">
                                        <div className="tp-service-pp-content">
                                            <h4 className="tp-section-title text-uppercase tp-text-common-white fs-80 fs-xl-65 fs-md-40 fw-500 mb-55">
                                                <SmartLink className={`tp_text_invert ${isDark ? "" : "invert-black"}`} href={item.link}>
                                                    {item.title}
                                                </SmartLink>
                                            </h4>
                                            <p className={`fs-18 mb-55 ${descColor}`}>{item.desc}</p>
                                            <div className="tp-service-pp-btn pb-90">
                                                <SmartLink
                                                    href={item.link}
                                                    className="tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-black text-uppercase ls-0 tp-btn-switch-animation tp-text-common-white hover-text-white tp-ff-heading fw-500"
                                                >
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <span className="btn-text">See Our Services</span>
                                                        <span className="btn-icon">
                                                            <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="btn-icon">
                                                            <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </SmartLink>
                                            </div>
                                            <div className="tp-service-pp-category">
                                                {item.tags.map((tag, idx) => (
                                                    <span key={idx}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="tp-service-pp-thumb text-end">
                                            <img className="tp_fade_anim" data-fade-from="right" data-delay=".2" src={item.img} alt={item.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* tp-service-area-end */}

            {/* tp-process-area-start */}
            <div className="tp-process-area pt-110 pb-100 tp-bg-common-black p-relative z-index-1">
                <img className="tp-awards-bg-shape" src="/assets/img/awards/grid-shape.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="tp-process-pp-video-wrap mb-35 tp_fade_anim" data-delay=".3">
                                <div className="d-flex mb-30">
                                    <span>
                                        <svg width="104" height="208" viewBox="0 0 104 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M104 104C104 161.438 57.4376 208 0 208V0C57.4376 0 104 46.5624 104 104Z" fill="#C4EE18" />
                                        </svg>
                                    </span>
                                    <div className="tp-process-pp-video-inner p-relative d-inline-block">
                                        <img className="tp-process-pp-video-img" src="/assets/img/process/pp/bg.jpg" alt="" />
                                        <div className="tp-video-main tp-process-pp-video">
                                            <button
                                                className="tp-hero-video-btn popup-video"
                                                type="button"
                                                onClick={() => playVideo("go7QYaQR494")}
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
                                <p className="tp-ff-heading fw-500 fs-25 tp-text-grey-2 lh-130-per">
                                    Understand the problem, users,
                                    <br /> and business objectives.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="tp-process-pp-title-inner pt-30 mb-35 tp_fade_anim" data-delay=".5">
                                <h2 className="fs-70 fs-sm-40 tp-text-common-white">
                                    Design Process
                                    <br /> What I Do
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 d-none d-lg-block">
                            <div className="tp-process-pp-border">
                                <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill="white" fillOpacity={0.1} />
                                </svg>
                            </div>
                        </div>
                        {processSteps.map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-process-pp-item text-center mb-30 tp_fade_anim" data-delay={`.${3 + idx * 2}`} data-fade-from="left">
                                    <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block tp-bg-theme-primary">{item.num}</span>
                                    <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">{item.title}</h3>
                                    <p className="fs-18 lh-140-per tp-text-grey-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12">
                            <div className="tp-skill-wd-bottom text-center mt-35 tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                                <p className="tp-skill-wd-para tp-ff-heading fw-500 fs-18 tp-text-common-white">
                                    Don’t hesitate collaborate with expertise-{" "}
                                    <SmartLink href="/contact-us" className="ml-40 d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation tp-text-theme-primary tp-ff-heading fw-500">
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

            {/* tp-testimonial-area-start */}
            <AboutMeTestimonial />
            {/* tp-testimonial-area-end */}

            {/* tp-text-slider-area-start */}
            <AboutCreativeTextSlider />
            {/* tp-text-slider-area-end */}
        </main>
    );
};

export default ServiceThree;