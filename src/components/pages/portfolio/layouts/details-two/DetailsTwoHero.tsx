"use client";

import React from "react";
import { SmartLink } from "@/components/common";

const DetailsTwoHero = () => {
    return (
        <div 
            className="tp-breadcrumb-4-area pre-header tp-breadcrumb-4-spacing bg-position" 
            style={{ backgroundImage: "url('/assets/img/breadcrumb/thumb-14.jpg')" }}
        >
            <div className="container-fluid container-1524 containers">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-9">
                        <div className="tp-breadcrumb-4-title-wrap">
                            <h2 className="tp-section-ai-title mb-25 fs-70 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 tp-text-common-white">
                                We Provide<br /> Smart Solutions.
                            </h2>
                            <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-white pt-35">
                                <ul>
                                    <li><SmartLink href="/">Home</SmartLink></li>
                                    <li><span></span></li>
                                    <li>Our Portfolio</li>
                                </ul>
                            </div>
                            <span className="tp-breadcrumb-4-shape d-inline-block pt-180">
                                <svg width="73" height="91" viewBox="0 0 73 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.566569 29.466C7.77131 35.2041 31.1423 47.9628 43.3637 36.1385C49.5346 29.9339 56.5481 15.3999 37.6176 2.96977C30.4764 -1.71931 21.9677 2.94104 22.6628 18.5624C23.0639 27.5751 23.7409 49.2844 37.2119 63.2805C44.3216 70.6674 60.5436 80.029 72.5379 80.4321M72.5379 80.4321C66.8384 79.8262 55.244 81.0548 54.4627 90.8165M72.5379 80.4321C68.8193 79.9364 60.7516 75.2205 58.2299 60.3229M17.2422 46.4888C17.7827 50.166 21.4368 62.4083 31.5082 69.1587" stroke="#F3F1F2" strokeWidth="1.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsTwoHero;
