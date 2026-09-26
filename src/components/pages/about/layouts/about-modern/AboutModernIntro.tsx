"use client";

import React, { useState } from "react";
import { SmartLink } from "@/components/common";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const AboutModernIntro = () => {
    const isDark = useIsDarkRoute();
    const [activeTab, setActiveTab] = useState<"growth" | "market">("growth");

    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const experienceTextColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const descColor = isDark ? "tp-text-grey-2" : "";
    const strokeColor = isDark ? "#ffffff" : "#030303";

    return (
        <div className="tp-about-area pt-150 pb-100">
            <div className="container-fluid container-1524">
                <div className="row">
                    {/* Header Text Invert */}
                    <div className="col-lg-12">
                        <div className="tp-about-cst-title-wrap mb-80">
                            <h2 className={`tp-about-2-title fs-md-40 fs-xs-30 tp_text_invert invert-black-3 tp-ff-dm fw-600 ${textColor}`}>
                                We don’t just create—we transform. We are a <br />
                                team of visionary designers, strategists, & storytellers<br />
                                dedicated to building brands that captivate and connect.
                            </h2>
                        </div>
                    </div>

                    {/* Left Column: Experience */}
                    <div className="col-xl-3 col-lg-5">
                        <div className="tp-about-cst-thumb-wrap mb-30">
                            <div className="tp-about-cst-thumb pb-60">
                                <img className="mr-30" src="/assets/img/about/cst/thumb.jpg" alt="About Main Thumbnail" />
                            </div>
                            <div className="tp-about-expreance d-flex align-items-end mb-30">
                                <h2 className={`fw-600 fs-100 tp-ff-dm p-relative d-inline-block mb-0 lh-1 ${experienceTextColor}`}>
                                    <AnimatedCounter min={0} max={12} /> <span className="plus fs-25">+</span>
                                </h2>
                                <span className={`tp-ff-dm fs-18 fw-700 ${experienceTextColor} mb-10 ml-15`}>
                                    Years of<br /> Experience
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Tabs */}
                    <div className="col-xl-4 col-lg-7">
                        <div className="tp-about-cst-tab-wrap ml-35 mb-30">
                            <div className="tp-about-cst-tab mb-25">
                                <ul role="tablist">
                                    <li className="nav-tab-item" role="presentation">
                                        <button
                                            onClick={() => setActiveTab("growth")}
                                            className={`nav-link border-0 bg-transparent ${activeTab === "growth" ? "active" : ""}`}
                                            style={{ color: activeTab === "growth" ? "var(--tp-theme-primary, #B4E717)" : "inherit" }}
                                        >
                                            01. Growth Strategies
                                        </button>
                                    </li>
                                    <li className="nav-tab-item" role="presentation">
                                        <button
                                            onClick={() => setActiveTab("market")}
                                            className={`nav-link border-0 bg-transparent ${activeTab === "market" ? "active" : ""}`}
                                            style={{ color: activeTab === "market" ? "var(--tp-theme-primary, #B4E717)" : "inherit" }}
                                        >
                                            02. Market Analysis
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content p-relative mb-45">
                                {activeTab === "growth" && (
                                    <div className="tab-pane active show" role="tabpanel">
                                        <div className="tp-about-cst-tab-content">
                                            <p className={`fs-18 tp-ff-dm lh-140-per mb-30 ${descColor}`}>
                                                We are a creative agency passionate about
                                                crafting bold, innovative, and strategic brand
                                                experiences. From branding and design to digital
                                                marketing and content creation, we bring ideas
                                                to life with creativity, precision, and impact.
                                            </p>
                                            <p className={`fs-18 tp-ff-dm lh-140-per mb-40 ${descColor}`}>
                                                With a passion for innovation and a results- driven approach, we help businesses stand
                                                out in a crowded marketplace.
                                            </p>
                                            <SmartLink
                                                href="/about-modern"
                                                className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm"
                                            >
                                                <span className="d-flex align-items-center justify-content-center">
                                                    <span className="btn-text">About Us</span>
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
                                )}
                                {activeTab === "market" && (
                                    <div className="tab-pane active show" role="tabpanel">
                                        <div className="tp-about-cst-tab-content">
                                            <p className={`fs-18 tp-ff-dm lh-140-per mb-30 ${descColor}`}>
                                                We are a creative agency passionate about
                                                crafting bold, innovative, and strategic brand
                                                experiences. From branding and design to digital
                                                marketing and content creation, we bring ideas
                                                to life with creativity, precision, and impact.
                                            </p>
                                            <p className={`fs-18 tp-ff-dm lh-140-per mb-40 ${descColor}`}>
                                                Strategists dedicated to creating stunning, functional websites
                                                that align with your unique business goals. and strategic insights to
                                                streamline operations, boost efficiency.
                                            </p>
                                            <SmartLink
                                                href="/about-modern"
                                                className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm"
                                            >
                                                <span className="d-flex align-items-center justify-content-center">
                                                    <span className="btn-text">About Us</span>
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
                                )}
                            </div>
                            <span className="tp-about-cst-shape text-center d-block ml-100 tpswing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="55" viewBox="0 0 97 55" fill="none">
                                    <path d="M83.9847 54C78.6511 51.5322 68.0674 44.655 61.7108 35.7342M61.7108 35.7342C57.5824 29.9403 55.2371 23.2843 57.2715 16.4144C60.0986 7.49032 70.2847 -6.31124 90.9344 5.6788C98.7241 10.2019 98.4556 20.6021 83.5646 27.5777C79.0031 29.7146 71.0686 33.5275 61.7108 35.7342ZM61.7108 35.7342C53.4442 37.6836 44.0668 38.3795 34.9229 35.559C25.1202 32.5353 9.6859 22.4932 2.95683 11.8205M2.95683 11.8205C2.62313 11.2912 2.31083 10.7604 2.02169 10.2288M2.95683 11.8205C2.64312 11.2405 2.3276 10.7065 2.02169 10.2288M2.95683 11.8205C6.02114 17.4865 8.91304 27.5524 1 32.5592M2.02169 10.2288C4.26447 13.5357 12.5228 18.93 27.614 14.0517M60.1349 46.4081C56.4491 47.6903 43.2901 50.1894 32.1762 43.8776" stroke={strokeColor} strokeWidth="1.5" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Parallax Lists and Data Card */}
                    <div className="col-xl-5">
                        <div className="tp-about-cst-list-wrap ml-30 p-relative mb-30">
                            <div className="tp-about-cst-list-thumb text-end fix ml-150 tp-round-20">
                                <img data-speed="0.9" className="tp-round-20" src="/assets/img/about/cst/thumb-2.jpg" alt="Parallax Thumb" />
                            </div>
                            <div className="tp-about-cst-list tp-bg-common-green-2 tp-round-8 d-inline-block" data-speed="0.9">
                                <img className="w-100" src="/assets/img/about/cst/graph.png" alt="Graph" />
                                <div className="tp-about-cst-list-inner">
                                    <h4 className="tp-text-common-black-3 tp-ff-dm fw-600 fs-18 mb-5">Data - driven insights</h4>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5002 0.18445L5.2048 9.82684C5.04997 10.0207 4.81738 10.0592 4.62334 9.90452C4.5843 9.86601 4.5843 9.86601 4.54509 9.82684L0.0172037 3.86511C-0.0215047 3.8266 0.0172037 3.78809 0.0172037 3.78809C0.0557453 3.74959 0.0944537 3.78809 0.0944537 3.78809L4.82205 7.22938L12.3065 0.0292552C12.345 -0.00975174 12.4228 -0.00975174 12.4613 0.0292552C12.5002 0.0675954 12.5002 0.145276 12.5002 0.18445Z" fill="#10302A" />
                                                </svg>
                                            </span>
                                            Digital Strategy Consulting
                                        </li>
                                        <li>
                                            <span>
                                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5002 0.18445L5.2048 9.82684C5.04997 10.0207 4.81738 10.0592 4.62334 9.90452C4.5843 9.86601 4.5843 9.86601 4.54509 9.82684L0.0172037 3.86511C-0.0215047 3.8266 0.0172037 3.78809 0.0172037 3.78809C0.0557453 3.74959 0.0944537 3.78809 0.0944537 3.78809L4.82205 7.22938L12.3065 0.0292552C12.345 -0.00975174 12.4228 -0.00975174 12.4613 0.0292552C12.5002 0.0675954 12.5002 0.145276 12.5002 0.18445Z" fill="#10302A" />
                                                </svg>
                                            </span>
                                            AI & Machine Learning Solutions
                                        </li>
                                        <li>
                                            <span>
                                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5002 0.18445L5.2048 9.82684C5.04997 10.0207 4.81738 10.0592 4.62334 9.90452C4.5843 9.86601 4.5843 9.86601 4.54509 9.82684L0.0172037 3.86511C-0.0215047 3.8266 0.0172037 3.78809 0.0172037 3.78809C0.0557453 3.74959 0.0944537 3.78809 0.0944537 3.78809L4.82205 7.22938L12.3065 0.0292552C12.345 -0.00975174 12.4228 -0.00975174 12.4613 0.0292552C12.5002 0.0675954 12.5002 0.145276 12.5002 0.18445Z" fill="#10302A" />
                                                </svg>
                                            </span>
                                            Data Analytics & Insights
                                        </li>
                                    </ul>
                                    <SmartLink
                                        className="tp-about-cst-list-btn tp-bg-common-black-1 text-capitalize d-flex justify-content-between align-items-center tp-text-grey-5 fw-700 fs-14 tp-ff-dm"
                                        href="/service-4"
                                    >
                                        Learn more
                                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8 4.00047C10.5066 3.11428 7.66113 1.60168 5.89705 0L7.12686 3.54162H0.440804C0.353649 3.54164 0.268309 3.56806 0.195839 3.61849C0.123344 3.66894 0.0671054 3.74115 0.033736 3.82504C0.000415994 3.90889 -0.00860368 4.00106 0.00837916 4.09007C0.025379 4.17914 0.0676362 4.26117 0.129277 4.3254C0.211785 4.41135 0.323646 4.45959 0.440351 4.4598H7.12641L5.89705 8C7.66083 6.39798 10.5065 4.88609 12.8 4.00047Z" fill="currentColor" />
                                        </svg>
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

export default AboutModernIntro;
