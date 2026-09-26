"use client";

import { useState } from "react";
import { SmartLink } from "@/components/common";
import { ServiceArrowIconThree } from "@/svg";
import Link from "next/link";

const portfolioItems = [
    { title: "Restaurant Ordering App", rel: "service-img-1" },
    { title: "Crafting Digital Experiences", rel: "service-img-2" },
    { title: "LMS for Virtual Learning", rel: "service-img-3" },
    { title: "E-commerce Platform", rel: "service-img-4" },
];

const bgImages = [
    "/assets/img/portfolio/it/bg-1.jpg",
    "/assets/img/portfolio/it/bg.jpg",
    "/assets/img/portfolio/it/bg-2.jpg",
    "/assets/img/portfolio/it/bg-3.jpg",
];

const ITSolutionPortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeBgClass, setActiveBgClass] = useState("service-img-1");

    const handleHover = (index: number, rel: string) => {
        setActiveIndex(index);
        setActiveBgClass(rel);
    };

    return (
        <div className="tp-portfolio-it-area fix bg-position p-relative">
            <div className="container-fluid g-0">

                {/* Background Images */}
                <div className="service__slider-8">
                    <div
                        id="service-bg-img"
                        className={`tp-portfolio-it-thumb ${activeBgClass}`}
                    >
                        {bgImages.map((img, i) => (
                            <div
                                key={i}
                                className={`service-bg service-img-${i + 1}`}
                                style={{ backgroundImage: `url(${img})` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Portfolio Items */}
                <div className="row gx-0 row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className={`col service__item-8 ${activeIndex === index ? "active" : ""
                                }`}
                            rel={item.rel}
                            onMouseEnter={() => handleHover(index, item.rel)}
                        >
                            <div className="tp-portfolio-it-wrap p-relative">
                                <div className="tp-portfolio-it-content">
                                    <div className="tp-portfolio-it-content-inner mb-115">
                                        <h4 className="tp-portfolio-it-title tp-ff-inter tp-text-grey-5 fw-600 fs-28 mb-25">
                                            <SmartLink href="/portfolio-details-two" className="underline-white">
                                                {item.title}
                                            </SmartLink>
                                        </h4>

                                        <div className="tp-portfolio-it-tag">
                                            <Link href="#">UI/UX Design</Link>
                                            <Link href="#">Development</Link>
                                        </div>
                                    </div>

                                    <div className="tp-portfolio-it-btn">
                                        <SmartLink
                                            href="/portfolio-details-two"
                                            className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter"
                                        >
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">View More</span>
                                                <span className="btn-icon">
                                                    <ServiceArrowIconThree />
                                                </span>
                                                <span className="btn-icon">
                                                    <ServiceArrowIconThree />
                                                </span>
                                            </span>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITSolutionPortfolio;