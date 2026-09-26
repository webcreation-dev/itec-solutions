"use client";
import ItSolutionBlogItem from "../components/ItSolutionBlogItem";
import { SmartLink } from "@/components/common";
import { ServiceArrowIconThree } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

const blogData = [
    {
        img: "/assets/img/blog/it/thumb.jpg",
        category: "Web Design",
        date: "02 Feb, 2025",
        title: "Mastering customer journeys with marketing.",
        delay: ".3",
        extraClass: "",
    },
    {
        img: "/assets/img/blog/it/thumb-2.jpg",
        category: "AI Trends",
        date: "02 Feb, 2025",
        title: "How to build work culture for young office?",
        delay: ".5",
        extraClass: "mt-45",
    },
];

const ITSolutionBlog = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const blogStyles = {
        headingText: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyText: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
    };
    // -------------------------------
    return (
        <div className="tp-blog-area pt-110 p-relative pb-120">
            <div className="container-fluid container-1524">
                <div className="row gx-50">
                    <div className="col-12">
                        <div
                            className="tp-team-it-big-title tp-text-perspective"
                            data-delay=".5"
                            data-fade-from="top"
                            data-ease="bounce"
                        >
                            <h2 className="tp-ff-inter ls-m-2 lh-1">Our Blog</h2>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="tp-team-it-title-wrap mb-40 p-relative">
                            <span className="tp-about-it-blur"></span>

                            <span className={`tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 fs-18 mb-30 ${blogStyles.headingText}`}>
                                {" "}
                                Our blog
                            </span>

                            <h2 className={`tp-text-revel-anim fix fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter ${blogStyles.headingText} mb-30`}>
                                Our Experts Team
                                <br /> Is Always Ready To
                                <br /> Help You
                            </h2>

                            <p className={`tp-section-it-para tp-text-common-black-4 tp-ff-inter lh-150-per ${blogStyles.bodyText} fs-18 mb-35`}>
                                “Aleric delivered exactly what we needed — efficient, reliable,
                                <br /> and results- driven solutions. We&apos;ve seen measurable.
                            </p>

                            <SmartLink
                                href="/blog-grid-2"
                                className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">See All Blog</span>
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

                    {/* Right Blog Items */}
                    <div className="col-xl-7">
                        <div className="tp-blog-it-item-right">
                            <div className="row gx-50">
                                {blogData.map((item, index) => (
                                    <ItSolutionBlogItem key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionBlog;