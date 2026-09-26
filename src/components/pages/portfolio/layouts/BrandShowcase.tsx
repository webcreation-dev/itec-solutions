"use client";
import React from "react";
import { useIsDarkRoute } from "@/hooks";

const BrandShowcase = () => {
    const isDark = useIsDarkRoute();

    const brandImages = Array.from({ length: 15 }, (_, i) => `/assets/img/brands/brand-${i + 1}.jpg`);

    return (
        <>
            {/* tp-service-hero-area-start */}
            <div className="tp-service-hero-area fix tp-service-hero-spacing pb-70 p-relative z-index-1">
                <div className="container">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative mb-40">
                                <h2 className={`fs-70 fs-lg-60 fs-xs-40 fw-700 ls-m-3 lh-110-per tp-ff-dm ${isDark ? "tp-text-common-white" : "tp-text-common-black-1"}`}>
                                    Our Sponsors
                                </h2>
                                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                    <svg width="52" height="94" viewBox="0 0 52 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                                            stroke={isDark ? "#fff" : "#10302A"}
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-130">
                                <p className={`fs-20 lh-140-per tp-ff-dm ${isDark ? "tp-text-grey-2" : "tp-section-3-para"}`}>
                                    Aleric is a beacon of best innovation and the<br />
                                    dynamic parent a company of wealcoder and many<br />
                                    other subsidiaries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-service-hero-area-end */}

            {/* brand area start */}
            <div className="tp-brand-inner-area pb-80">
                <div className="container">
                    <div className="row gx-70 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {brandImages.map((src, index) => (
                            <div key={index} className="col">
                                <div className="tp-brand-inner-item mb-65">
                                    <img src={src} alt={`brand ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* brand area end */}
        </>
    );
};

export default BrandShowcase;
