"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const TeamDetailsHero = () => {
    const isDark = useIsDarkRoute();

    const titleClass = isDark ? "tp-text-common-white" : "";
    const pClass = isDark ? "tp-text-grey-2" : "";
    const btnClass = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const circleStroke = isDark ? "#d9d9d9" : "#F0F0F0";
    const circleOpacity = isDark ? "0.05" : "1";
    const swingStroke = isDark ? "#fff" : "#030303";

    return (
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
                            <h2 className={`fs-70 fs-lg-60 fs-xs-40 ${titleClass}`}>Meet Our Strong Creators Hub.</h2>
                            <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                                        stroke={swingStroke}
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="tp-service-hero-right mt-130 mb-20">
                            <p className={`fs-20 lh-140-per mb-30 ${pClass}`}>
                                We craft digital experiences that engage,<br /> convert, and grow your business. From branding<br /> to development, we provide end-to-end<br /> solutions tailored to your needs.
                            </p>
                            <Link href={isDark ? "/dark/contact" : "/contact"} className={`d-inline-block lh-0 fs-15 text-uppercase ls-0 tp-btn-switch-animation ${btnClass} tp-ff-heading fw-500`}>
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">Open Position</span>
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
                            </Link>
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
                                        <Link href={isDark ? "/dark" : "/"}>Home</Link>
                                    </li>
                                    <li>
                                        <span></span>
                                    </li>
                                    <li>Our Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsHero;
