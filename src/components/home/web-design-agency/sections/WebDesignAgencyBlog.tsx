"use client";
import WebDesignAgencyBlogItem from "../components/WebDesignAgencyBlogItem";
import { SmartLink } from "@/components/common";
import { blogData } from "@/data/blog-data";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconEleven } from "@/svg";

const WebDesignAgencyBlog = () => {
    // Retrieve web design agency blog items for rendering
    const blogs = blogData.webDesignAgency;

    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-common-black-5",
        shapeFill: isDarkTheme ? "#fff" : "#030303",
    };
    // -------------------------------

    return (
        <div className="tp-blog-area section-triger pt-130 pb-100">
            <div className="container">
                {/* header */}
                <div className="row align-items-end mb-30">
                    <div className="col-xl-3 col-lg-2 d-none d-lg-block">
                        <div className="tp-blog-wd-shape tp-about-wd-shape mb-40 tp_fade_anim">
                            <span className="shape-1 mb-5 d-inline-block">
                                <svg width="29" height="15" viewBox="0 0 29 15" fill="none">
                                    <path
                                        d="M14.5 0C22.5081 0 29 6.71573 29 15H0C0 6.71573 6.49187 0 14.5 0Z"
                                        fill="#C4EE18"
                                    />
                                </svg>
                            </span>
                            <span className="shape-1">
                                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                                    <path
                                        d="M30 30C46.5685 30 60 16.5685 60 0H0C0 16.5685 13.4315 30 30 30Z"
                                        fill={themeClasses.shapeFill}
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-service-wd-title-wrap mb-30">
                            <h2 className={`tp-about-wd-title tp-ff-teko tp-text-perspective fw-600 fs-70 fs-xs-50 lh-1 text-uppercase mb-15 ${themeClasses.textPrimary}`}>
                                We Provide Smart <br /> Solution.
                            </h2>
                            <p className={`fs-18 ml-110 tp-text-perspective ${themeClasses.textBody}`}>
                                Strategists dedicated to creating stunning, <br />
                                functional websites that align with your unique <br />
                                business goals.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3">
                        <div className="tp-rounded-btn-wrap tp-rounded-btn-wd text-lg-end mb-30 tp_fade_anim">
                            <SmartLink
                                href="/blog-grid"
                                className="tp-btn-rounded tp-ff-teko btn-item"
                            >
                                View <br /> Our Blog
                                <span className="d-block mt-10">
                                    <ArrowIconEleven />
                                </span>
                                <i className="tp-btn-circle-dot"></i>
                            </SmartLink>
                        </div>
                    </div>
                </div>

                {/* blogs */}
                <div className="row">
                    {blogs.map((blog, i) => (
                        <div className="col-lg-6" key={i}>
                            <WebDesignAgencyBlogItem {...blog} type="webDesignAgency" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyBlog;