"use client";

import { useState } from "react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import BlogGridTextSlider from "@/components/blog/layouts/BlogGridTextSlider";

const categories = [
    { id: "all", name: "All Projects" },
    { id: "Marketing", name: "Marketing" },
    { id: "Agency", name: "Agency" },
    { id: "Branding", name: "Branding" },
    { id: "Design", name: "Design" },
    { id: "Development", name: "Development" },
];

const portfolioItems = [
    {
        image: "/assets/img/portfolio/grid/thumb.jpg",
        title: "Innovation in Every Swipe",
        tag: "Development",
        category: "Development",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-2.jpg",
        title: "Building Visual Identities",
        tag: "Web Design",
        category: "Design",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-3.jpg",
        title: "Innovation in Every Swipe",
        tag: "Development",
        category: "Development",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-4.jpg",
        title: "Turning Clicks Into Conversions",
        tag: "Digital Marketing",
        category: "Marketing",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-5.jpg",
        title: "Elevating Brand Websites",
        tag: "UI/UX Design",
        category: "Branding",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-6.jpg",
        title: "Turning Clicks Into Conversions",
        tag: "Web Design",
        category: "Design",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-7.jpg",
        title: "Venus Rebrand",
        tag: "Digital Marketing",
        category: "Marketing",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-8.jpg",
        title: "Electro Hub",
        tag: "Design",
        category: "Design",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-9.jpg",
        title: "Simple Logistics",
        tag: "Agency",
        category: "Agency",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-10.jpg",
        title: "Simple Logistics",
        tag: "Digital Marketing",
        category: "Marketing",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-11.jpg",
        title: "Simple Logistics",
        tag: "Design",
        category: "Design",
    },
    {
        image: "/assets/img/portfolio/grid/thumb-12.jpg",
        title: "Corporate Branding",
        tag: "Agency",
        category: "Agency",
    },
];

const PortfolioColFour = () => {
    const isDark = useIsDarkRoute();
    const [activeTab, setActiveTab] = useState("all");

    const headingColor = isDark ? "tp-text-common-white" : "";
    const titleLinkClass = isDark ? "underline-white" : "underline-black";
    const tagBgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-white-2";
    const bodyTextClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const strokeColor = isDark ? "#ffffff" : "#030303";

    const filteredItems =
        activeTab === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeTab);

    return (
        <main>
            {/* tp-portfolio-area-start */}
            <div className="tp-portfolio-colum-spacing pre-header tp-portfolio-area">
                <div className="container containers">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative mb-40">
                                <h2 className={`fs-70 fs-lg-60 fs-xs-40 ${headingColor}`}>
                                    We Make Digital Beautiful
                                </h2>
                                <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                                    <svg
                                        width="52"
                                        height="94"
                                        viewBox="0 0 52 94"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
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
                                <p className={`fs-20 lh-140-per ${bodyTextClass}`}>
                                    We craft digital experiences that engage,<br />
                                    convert, and grow your business. From branding<br />
                                    to development, we provide end-to-end<br />
                                    solutions tailored to your needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tp-portfolio-inner-tab-wrap mt-40">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        {categories.map((tab) => (
                                            <button
                                                key={tab.id}
                                                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                                type="button"
                                                onClick={() => setActiveTab(tab.id)}
                                            >
                                                {tab.name}
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-portfolio-area-end */}

            {/* portfolio grid area start */}
            <div className="tp-portfolio-inner-ptb pre-header pb-100">
                <div className="container container-1800 containers">
                    <div className="tp-portfolio-tab-content-wrap">
                        <div className="row">
                            {filteredItems.map((item, idx) => (
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6"
                                    key={`${item.title}-${idx}`}
                                >
                                    <div
                                        className="tp-portfolio-grid-item mb-50 not-hide-cursor portfolio__item"
                                        data-cursor="View<br>Demo"
                                    >
                                        <div className="tp-portfolio-sa-thumb mb-25 fix">
                                            <SmartLink href="/portfolio-details" className="cursor-hide">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                            </SmartLink>
                                        </div>
                                        <div className="tp-portfolio-sa-content">
                                            <h4
                                                className={`tp-portfolio-sa-item-title fs-25 lh-1 mb-15 ${headingColor}`}
                                            >
                                                <SmartLink
                                                    className={titleLinkClass}
                                                    href="/portfolio-details"
                                                >
                                                    {item.title}
                                                </SmartLink>
                                            </h4>
                                            <span
                                                className={`tp-portfolio-sa-item-tag fw-700 fs-16 tp-text-grey-1 tp-ff-heading d-inline-block ${tagBgClass}`}
                                            >
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* portfolio grid area end */}

            <BlogGridTextSlider />
        </main>
    );
};

export default PortfolioColFour;
