"use client";

import React, { useState } from "react";
import { useIsDarkRoute } from "@/hooks";

const faqData = [
    {
        id: "one",
        question: "What is branding, and why is it important?",
    },
    {
        id: "two",
        question: "What’s included in your branding design services?",
    },
    {
        id: "three",
        question: "How long does the branding process take?",
    },
    {
        id: "four",
        question: "Will I receive all the necessary logo file formats?",
    },
    {
        id: "five",
        question: "What are brand guidelines, and why do I need them?",
    },
    {
        id: "six",
        question: "Do you provide ongoing brand support?",
    },
];

const StandardDetailsFaq = () => {
    const isDark = useIsDarkRoute();
    const [openId, setOpenId] = useState<string>("one");

    const toggleOpen = (id: string) => {
        setOpenId(openId === id ? "" : id);
    };

    const spanClass = isDark ? "text-white" : "text-black";

    return (
        <div className="tp-faq-area pt-140 pb-115">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-faq-wrap">
                            <div className="text-center mb-45 tp_fade_anim" data-delay=".3">
                                <span className="tp-section-subtitle tp-ff-heading fw-500 tp-text-common-black fs-16 mb-20">
                                    <span className="borders d-inline-block"></span>General Questions
                                </span>
                                <h2 className="tp-section-title fs-70 fs-xl-60 fs-lg-50 fs-xs-40">Ask & Question</h2>
                            </div>
                            <div className="tp-custom-accordion">
                                <div className="accordion" id="general_faqaccordion">
                                    {faqData.map((item) => {
                                        const isOpen = openId === item.id;
                                        return (
                                            <div 
                                                className={`accordion-item mb-25 tp_fade_anim ${isOpen ? "tp-faq-active" : ""}`} 
                                                data-delay=".3"
                                                key={item.id}
                                            >
                                                <h2 className="accordion-header p-relative" id={`order_${item.id}`}>
                                                    <button 
                                                        className={`accordion-button tp-faq-btn ${isOpen ? "" : "collapsed"}`} 
                                                        type="button" 
                                                        onClick={() => toggleOpen(item.id)}
                                                        aria-expanded={isOpen ? "true" : "false"}
                                                        aria-controls={`order__collapse_${item.id}`}
                                                    >
                                                        {item.question}
                                                        <span className="accordion-btn">
                                                            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div 
                                                    id={`order__collapse_${item.id}`} 
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`} 
                                                    aria-labelledby={`order_${item.id}`} 
                                                    data-bs-parent="#general_faqaccordion"
                                                >
                                                    <div className="accordion-body tp-faq-details-para">
                                                        <p>Branding is the process of creating a unique identity for your business, <span className={spanClass}>including visuals, messaging, and positioning.</span> It helps build trust, recognition, and emotional connections with your audience.</p>
                                                        <span className="tp-faq-list-title d-inline-block mb-10">Our branding packages typically include:</span>
                                                        <ul>
                                                            <li>1. Brand Strategy & Positioning.</li>
                                                            <li>2. Logo & Visual Identity</li>
                                                            <li>3. Marketing & Collateral Design</li>
                                                        </ul>
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
        </div>
    );
};

export default StandardDetailsFaq;
