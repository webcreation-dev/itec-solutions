"use client";

import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useIsDarkRoute } from "@/hooks";

interface PricingPlan {
    id: string;
    name: string;
    description: string;
    features: string[];
    price: string;
    period?: string;
    isPrimary?: boolean;
}

const pricingPlans: PricingPlan[] = [
    {
        id: "basic",
        name: "Basic Plan",
        description: "Great For Private Individuals",
        features: [
            "Email Notifications",
            "Access to Core AI Features",
            "Limited Data Processing",
            "Basic API Access",
        ],
        price: "Free",
    },
    {
        id: "standard",
        name: "Standard Plan",
        description: "Great For Private Individuals",
        features: [
            "Email Notifications",
            "Access to Core AI Features",
            "Limited Data Processing",
            "Basic API Access",
        ],
        price: "$89",
        period: "/Mo",
        isPrimary: true,
    },
    {
        id: "advanced",
        name: "Advanced Plan",
        description: "Great For Private Individuals",
        features: [
            "Email Notifications",
            "Access to Core AI Features",
            "Limited Data Processing",
            "Basic API Access",
        ],
        price: "$99",
        period: "/Mo",
    },
];

interface FaqItem {
    id: string;
    count: string;
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        id: "one",
        count: "01",
        question: "What industries do you serve?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "two",
        count: "02",
        question: "How do you protect client data and privacy?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "three",
        count: "03",
        question: "Do you provide support after the project is done?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "four",
        count: "04",
        question: "How long does an average AI project take?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "five",
        count: "05",
        question: "Is my data safe and secure?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
];

const Pricing = () => {
    const isDark = useIsDarkRoute();

    const pricingSectionBgClass = isDark ? "tp-bg-common-black" : "pricing-bg";
    const pricingSectionLabelClass = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const pricingTitleTextClass = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const pricingCardBgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-white";
    const faqSubtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const faqTitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const buttonTextClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";

    const portfolioLink = isDark ? "/dark/portfolio" : "/portfolio-col-2";
    const contactLink = isDark ? "/dark/contact" : "/contact";

    const logos = isDark
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

    return (
        <main>
            {/* tp-pricing-area-start */}
            <div className={`tp-pricing-area pre-header tp-pricing-2-spacing bg-position pb-160 ${pricingSectionBgClass}`}>
                <div className="container-fluid container-1524 containers">
                    <div className="row">
                        {/* Title block */}
                        <div className="col-xl-6 col-lg-9">
                            <div className="tp-pricing-ai-title-wrap mb-40">
                                <span className={`tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${pricingSectionLabelClass}`}>/ Our Pricing /</span>
                                <h2 className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-30 ${pricingTitleTextClass}`}>
                                    Discover the<br /> Perfect Plan to Power<br /> Your AI Vision
                                </h2>
                                <p className={`tp-section-ai-para tp-ff-dm mb-55 fw-400 fs-22 ls-m-2 lh-150-per ${pricingTitleTextClass}`}>
                                    From strategy to deployment, we fuse cutting- technology<br />
                                    with creative thinking to craft digital.
                                </p>
                                <Link href={portfolioLink} className={`tp-btn-ai-xl mb-15 tp-btn-md-border d-inline-block text-uppercase lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation ${buttonTextClass} fw-700 tp-ff-dm`}>
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">See All Portfolio</span>
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
                                </Link>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="col-xl-6">
                            {pricingPlans.map((plan) => {
                                const btnClass = plan.isPrimary
                                    ? "tp-btn-ai-xl mb-15 tp-bg-theme-primary d-inline-block text-uppercase lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm"
                                    : `tp-btn-ai-xl mb-15 tp-btn-md-border d-inline-block text-uppercase lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation ${buttonTextClass} fw-700 tp-ff-dm`;

                                return (
                                    <div key={plan.id} className={`tp-pricing-ai-item tp-round-24 ${pricingCardBgClass} mb-30`}>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="tp-pricing-ai-head">
                                                    <h5 className={`tp-ff-dm fs-20 ls-m-4 ${pricingSectionLabelClass}`}>{plan.name}</h5>
                                                    <p className={`tp-ff-dm fw-500 fs-16 ls-m-2 ${pricingSectionLabelClass}`}>{plan.description}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="tp-pricing-ai-list">
                                                    <ul>
                                                        {plan.features.map((feature, idx) => (
                                                            <li key={idx}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="tp-pricing-ai-btn text-md-center">
                                                    <h3 className={`tp-pricing-ai-price tp-ff-dm fs-52 ls-m-2 mb-15 ${pricingSectionLabelClass}`}>
                                                        {plan.price}
                                                        {plan.period && <span>{plan.period}</span>}
                                                    </h3>
                                                    <Link href={contactLink} className={btnClass}>
                                                        <span className="d-flex align-items-center justify-content-center">
                                                            <span className="btn-text">Get Started</span>
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
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Brand Marquee Slider */}
                        <div className="col-12">
                            <div className="tp-brand-wrap pt-130">
                                <div className="tp-brand-slide-active tp-slider-transition">
                                    <Marquee speed={50} gradient={false} autoFill={true}>
                                        {logos.map((logo, idx) => (
                                            <div className="tp-brand-item" key={idx} style={{ paddingRight: "80px" }}>
                                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                                    <img src={logo} alt={`brand logo ${idx + 1}`} />
                                                </Link>
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-pricing-area-end */}

            {/* tp-faq-area-start */}
            <div className="tp-faq-area p-relative z-index-1 pt-155 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3">
                            <div className="tp-faq-ai-title-wrap mb-50">
                                <span className={`text-anim tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${faqSubtitleClass}`}>/ FAQ /</span>
                                <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm ${faqTitleClass}`}>
                                    Explore Answers to<br /> Our Most Asked Questions
                                </h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-cst-tab-content-2 tp-faq-ai-tab-content">
                                <div className="accordion mb-60" id="general_faqaccordion">
                                    {faqData.map((item, index) => {
                                        const isOpen = index === 0;
                                        const headingId = `order_${item.id}`;
                                        const collapseId = `order__collapse_${item.id}`;

                                        return (
                                            <div key={item.id} className="accordion-item tp_fade_anim" data-delay=".3">
                                                <h2 className="accordion-header p-relative" id={headingId}>
                                                    <button
                                                        className={`tp-faq-btn ${isOpen ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isOpen ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        <span className="tp-faq-ai-count">{item.count}</span>
                                                        {item.question}
                                                        <span className="accordion-btn"></span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#general_faqaccordion"
                                                >
                                                    <div className="accordion-body tp-faq-details-para">
                                                        <p>{item.answer}</p>
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
            {/* tp-faq-area-end */}
        </main>
    );
};

export default Pricing;