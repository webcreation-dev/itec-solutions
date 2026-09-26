"use client";
import { BusinessConsultingBlogDt } from "@/types";
import { SmartLink } from "@/components/common";
import BlogCard from "../components/BlogCard";
import { ArrowIcon } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

const blogData: BusinessConsultingBlogDt[] = [
    {
        id: 1,
        img: "/assets/img/blog/cst/thumb.jpg",
        title: "In short, businesses\nchoose consulting gain",
        day: "10",
        monthYear: "February 2026",
        fadeFrom: "left",
    },
    {
        id: 2,
        img: "/assets/img/blog/cst/thumb-2.jpg",
        title: "Mastering customer\njourneys with marketing.",
        day: "10",
        monthYear: "February 2026",
        fadeFrom: "right",
    },
];

const BusinessConsultingBlog = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const blogSectionStyles = {
        sectionBg: isDark ? "tp-bg-grey-8" : "tp-bg-grey",
        headingColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyTextColor: isDark ? "tp-text-grey-2" : "",
        subtitleTextColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        buttonHoverTextColor: isDark ? "hover-text-white" : "hover-text-black",
    };
    // -------------------------------
    return (
        <div className={`tp-blog-area ${blogSectionStyles.sectionBg} pt-115 pb-130`}>
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="tp-portfolio-cst-subtitle-wrap d-flex justify-content-between align-items-center mb-50 tp_fade_anim"
                            data-delay=".3"
                        >
                            <span className={`tp-section-subtitle mb-15 d-inline-block tp-section-cst-subtitle tp-ff-dm fw-500 ${blogSectionStyles.subtitleTextColor} fs-16`}>
                                <span className="borders d-inline-block"></span>Latest Blog
                            </span>

                            <SmartLink
                                href="/blog-grid-2"
                                className={`mb-15 d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation ${blogSectionStyles.headingColor} ${blogSectionStyles.buttonHoverTextColor} fw-700 tp-ff-dm`}
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">All Articles</span>
                                    <span className="btn-icon">
                                        <ArrowIcon />
                                    </span>
                                    <span className="btn-icon">
                                        <ArrowIcon />
                                    </span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div
                            className="tp-blog-cst-section-title mb-45 tp_fade_anim"
                            data-delay=".5"
                        >
                            <h2 className={`tp-ff-dm lh-120-per fw-600 fs-50 fs-sm-40 fs-xs-35 text-capitalize ${blogSectionStyles.headingColor}`}>
                                Expert perspectives
                                <br /> to power your next move.
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5 mb-35">
                        <div
                            className="tp-blog-cst-para d-flex justify-content-end align-items-end h-100 tp_fade_anim"
                            data-delay=".7"
                        >
                            <p className={`tp-ff-dm fs-18 lh-140-per ${blogSectionStyles.bodyTextColor}`}>
                                With a passion for innovation and a results- driven approach, we help
                                businesses stand out in a crowded marketplace.
                            </p>
                        </div>
                    </div>
                    {blogData.map((item) => (
                        <BlogCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default BusinessConsultingBlog;