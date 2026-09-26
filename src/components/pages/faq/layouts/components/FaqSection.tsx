"use client";

import React, { useEffect, useRef } from "react";
import { useIsDarkRoute } from "@/hooks";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
    listTitle: string;
    listItems: string[];
}

const faqData: FaqItem[] = [
    {
        id: "one",
        question: "What is branding, and why is it important?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
    {
        id: "two",
        question: "What’s included in your branding design services?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
    {
        id: "three",
        question: "How long does the branding process take?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
    {
        id: "four",
        question: "Will I receive all the necessary logo file formats?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
    {
        id: "five",
        question: "What are brand guidelines, and why do I need them?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
    {
        id: "six",
        question: "Do you provide ongoing brand support?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
    {
        id: "saven",
        question: "Do you offer custom solutions or only predefined packages?",
        answer: "We specialize in branding, web design, UI/UX, digital marketing, SEO, PPC, content creation, and social media management.",
        listTitle: "Our branding packages typically include:",
        listItems: ["UI/UX Design", "Web & Branding", "Digital Marketing"],
    },
];

const FaqSection = () => {
    const isDark = useIsDarkRoute();
    const accordionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const accordion = accordionRef.current;
        if (!accordion) return;

        const handleShow = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && target.classList.contains("accordion-collapse")) {
                const item = target.closest(".accordion-item");
                if (item) {
                    item.classList.add("tp-faq-active");
                }
            }
        };

        const handleHide = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && target.classList.contains("accordion-collapse")) {
                const item = target.closest(".accordion-item");
                if (item) {
                    item.classList.remove("tp-faq-active");
                }
            }
        };

        accordion.addEventListener("show.bs.collapse", handleShow);
        accordion.addEventListener("hide.bs.collapse", handleHide);

        return () => {
            accordion.removeEventListener("show.bs.collapse", handleShow);
            accordion.removeEventListener("hide.bs.collapse", handleHide);
        };
    }, []);

    const containerClass = isDark
        ? "tp-faq-area tp-faq-5-wrap pre-header tp-faq-spacing pb-140"
        : "tp-faq-area pre-header tp-faq-spacing pb-140";
    const subtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const titleClass = isDark ? "tp-text-common-white" : "";

    return (
        <div className={containerClass}>
            <div className="container containers">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-faq-wrap">
                            <div className="text-center mb-45">
                                <span className={`tp-section-subtitle tp-ff-heading fw-500 fs-16 mb-20 ${subtitleClass}`}>
                                    <span className="borders d-inline-block"></span>General Questions
                                </span>
                                <h2 className={`tp-section-title fs-70 fs-xl-60 fs-lg-50 fs-xs-40 ${titleClass}`}>
                                    Ask & Question
                                </h2>
                            </div>
                            <div className="tp-custom-accordion">
                                <div className="accordion" id="general_faqaccordion" ref={accordionRef}>
                                    {faqData.map((item, index) => {
                                        const isOpen = index === 0;
                                        const headingId = `order_${item.id}`;
                                        const collapseId = `order__collapse_${item.id}`;

                                        return (
                                            <div
                                                key={item.id}
                                                className={`accordion-item mb-25 ${isOpen ? "tp-faq-active" : ""}`}
                                            >
                                                <h2 className="accordion-header p-relative" id={headingId}>
                                                    <button
                                                        className={`accordion-button tp-faq-btn ${isOpen ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isOpen ? "true" : "false"}
                                                        aria-controls={collapseId}
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
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#general_faqaccordion"
                                                >
                                                    <div className="accordion-body tp-faq-details-para">
                                                        <p>{item.answer}</p>
                                                        <span className="tp-faq-list-title d-inline-block mb-15">
                                                            {item.listTitle}
                                                        </span>
                                                        <ul>
                                                            {item.listItems.map((listItem, listIndex) => (
                                                                <li key={listIndex}>{listIndex + 1}. {listItem}</li>
                                                            ))}
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

export default FaqSection;
