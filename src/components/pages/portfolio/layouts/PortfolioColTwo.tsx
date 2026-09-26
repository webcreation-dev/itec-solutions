"use client";

import BlogGridTextSlider from "@/components/blog/layouts/BlogGridTextSlider";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const portfolioItems = [
    {
        image: "/assets/img/portfolio/sa/thumb.jpg",
        title: "Crafting Digital Experiences",
        tag: "UI/UX Design",
        thumbClass: "mover",
    },
    {
        image: "/assets/img/portfolio/sa/thumb-2.jpg",
        title: "Made Logistics",
        tag: "Web Design",
    },
    {
        image: "/assets/img/portfolio/sa/thumb-3.jpg",
        title: "Innovation in Every Swipe",
        tag: "Development",
    },
    {
        image: "/assets/img/portfolio/sa/thumb-4.jpg",
        title: "Turning Clicks Into Conversions",
        tag: "Digital Marketing",
    },
    {
        image: "/assets/img/portfolio/sa/thumb.jpg",
        title: "Web Development",
        tag: "UI/UX Design",
        thumbClass: "mover",
    },
    {
        image: "/assets/img/portfolio/sa/thumb-2.jpg",
        title: "Product Design",
        tag: "Web Design",
    },
];

const PortfolioColTwo = () => {
    const isDark = useIsDarkRoute();
    const headingColor = isDark ? "tp-text-common-white" : "";
    const titleLinkClass = isDark ? "underline-white" : "underline-black";
    const tagBgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-white-2";
    const bodyTextClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <main>
            <div className="tp-portfolio-masonary-spacing tp-portfolio-area pb-140">
                <div className="container">
                    <div className="row align-items-end pb-120 pre-header">
                        <div className="col-lg-8">
                            <div className="tp-portfolio-title-wrap mb-105">
                                <h2 className={`tp-portfolio-sectitle tp-ff-heading text-uppercase d-flex align-items-center ${headingColor}`}>
                                    Work <span className="borders ml-40"></span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tp-portfolio-para">
                                <p className={`fs-18 lh-28 ${bodyTextClass}`}>
                                    We pride ourselves on delivering innovative, impactful, and results-driven projects that exceed expectations.
                                </p>
                                <div className="tp-portfolio-tag">
                                    <span>Dribbble</span>
                                    <span>Behance</span>
                                    <span>GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-50">
                        {portfolioItems.map((item) => (
                            <div className="col-lg-6" key={`${item.title}-${item.image}`}>
                                <div className="tp-portfolio-sa-item mb-50 not-hide-cursor portfolio__item" data-cursor="View<br>Demo">
                                    <div className="tp-portfolio-sa-thumb mb-25">
                                        <SmartLink href="/portfolio-details" className="cursor-hide">
                                            <img className={`w-100 ${item.thumbClass ?? ""}`} src={item.image} alt={item.title} />
                                        </SmartLink>
                                    </div>
                                    <div className="tp-portfolio-sa-content">
                                        <h4 className={`tp-portfolio-sa-item-title fs-25 lh-1 mb-15 ${headingColor}`}>
                                            <SmartLink className={titleLinkClass} href="/portfolio-details">
                                                {item.title}
                                            </SmartLink>
                                        </h4>
                                        <span className={`tp-portfolio-sa-item-tag fw-700 fs-16 tp-text-grey-1 tp-ff-heading d-inline-block ${tagBgClass}`}>
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BlogGridTextSlider />
        </main>
    );
};

export default PortfolioColTwo;
