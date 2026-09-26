"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

interface FaqItem {
    id: string;
    count: string;
    question: string;
    answer: string;
}

const commonQuestions: FaqItem[] = [
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

const servicesQuestions: FaqItem[] = [
    {
        id: "one-1",
        count: "01",
        question: "What industries do you serve?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "two-2",
        count: "02",
        question: "How do you protect client data and privacy?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "three-3",
        count: "03",
        question: "Do you provide support after the project is done?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "four-4",
        count: "04",
        question: "How long does an average AI project take?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
    {
        id: "five-5",
        count: "05",
        question: "Is my data safe and secure?",
        answer: "Partnering with this AI agency was one of the best decisions we’ve made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
    },
];

const FaqTwo = () => {
    const isDark = useIsDarkRoute();
    
    const subtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const titleClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const homeLink = isDark ? "/dark" : "/";

    return (
        <main>
            {/* tp-faq-hero-area-start */}
            <div className="tp-faq-hero-area pre-header tp-faq-hero-spacing bg-position p-relative">
                <div className="bg-position" data-background="/assets/img/breadcrumb/thumb-13.jpg" style={{ backgroundImage: "url(/assets/img/breadcrumb/thumb-13.jpg)" }}>
                    <div className="container-fluid container-1524 containers">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-9">
                                <div className="tp-faq-hero-title-wrap">
                                    <h2 className="tp-section-ai-title mb-45 fs-70 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 tp-text-common-white">Frequently Asked<br /> Questions.</h2>
                                    <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-white pt-35">
                                        <ul>
                                            <li><Link href={homeLink}>Home</Link></li>
                                            <li><span></span></li>
                                            <li>Our Faq</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-faq-hero-area-end */}

            {/* tp-faq-area-start */}
            <div className="tp-faq-area p-relative z-index-1 pt-155 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Common Questions */}
                            <div className="tp-faq-wrap mb-150 tp-faq-cst-tab-content tp-faq-cst-tab-content-2 tp-faq-ai-tab-content">
                                <div className="tp-faq-ai-title-wrap mb-25">
                                    <span className={`text-anim tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${subtitleClass}`}>/ FAQ /</span>
                                    <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm ${titleClass}`}>Common Questions.</h2>
                                </div>
                                <div className="accordion mb-60" id="general_faqaccordion">
                                    {commonQuestions.map((item, index) => {
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

                            {/* Services Questions */}
                            <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-cst-tab-content-2 tp-faq-ai-tab-content">
                                <div className="tp-faq-ai-title-wrap mb-25">
                                    <span className={`text-anim tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${subtitleClass}`}>/ FAQ /</span>
                                    <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm ${titleClass}`}>Services Questions.</h2>
                                </div>
                                <div className="accordion mb-60" id="general_faqaccordiontwo">
                                    {servicesQuestions.map((item, index) => {
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
                                                    data-bs-parent="#general_faqaccordiontwo"
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

export default FaqTwo;