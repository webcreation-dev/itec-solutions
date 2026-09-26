"use client";
import StartupAgencyBlogItem from "../components/StartupAgencyBlogItem";
import { SmartLink } from "@/components/common";
import { blogData } from "@/data/blog-data";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconEleven } from "@/svg";

const StartupAgencyBlog = () => {
    // Retrieve Startup Agency blog items for rendering
    const blogs = blogData.startupAgency;

    const isDark = useIsDarkRoute();
    const titleColor = isDark ? "tp-text-common-white" : "";
    const paraColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <div className="tp-blog-area tp-blog-sa-border tp-fixed-title-wrap pb-75 pt-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="tp-blog-sa-title-wrap mb-40 tp-fixed-title">
                            <h2 className={`fs-70 fs-xs-45 lh-1 mb-30 tp_fade_anim ${titleColor}`} data-delay=".3">News & Insight</h2>
                            <div className="tp_fade_anim" data-delay=".5">
                                <p className={`fs-18 ${paraColor}`}>Strategists dedicated to creating stunning, functional websites<br /> that align with your unique business goals.</p>
                            </div>
                            <div className="tp-rounded-btn-wrap tp-blog-sa-btn ml-110 tp-about-wd-btn tp-rounded-btn-wd mt-75 tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <div className="btn_wrapper d-inline-block">
                                    <SmartLink href="/blog-grid" className="tp-btn-rounded tp-ff-teko btn-item">
                                        <span className="d-block mb-10">
                                            <ArrowIconEleven />
                                        </span>
                                        View All<br /> Insights
                                        <i className="tp-btn-circle-dot"></i>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {blogs.map((blog, idx) => (
                            <StartupAgencyBlogItem key={idx} {...blog} type="startupAgency" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyBlog;
