"use client";
import MedicalBlogItem from "../components/MedicalBlogItem";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { blogData } from "@/data/blog-data";
import { MedicalButtonArrow } from "@/svg";

const blogs = blogData.medical ?? [];

const MedicalBlog = () => {
    const isDark = useIsDarkRoute();
    const subtitleColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";

    return (
        <div className="tp-blog-area pt-155 section-m-spacing pb-130">
            <div className="container-fluid container-1824">
                <div className="row align-items-end mb-20">
                    <div className="col-lg-8">
                        <div className="tp-testimonial-ai-title-wrap mb-30">
                            <span className={`tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 d-inline-block mb-10 ${subtitleColor}`}>Our Latest Blog</span>
                            <h2 className={`tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 mb-20 ${titleColor}`}>Insights from medical<br /> health experts.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-blog-md-btn mb-40 text-lg-end tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <SmartLink href="/blog-grid-2" className="tp-btn-md tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                                <span className="td-text d-inline-block mr-5">See All Blog</span>
                                <span className="tp-arrow-angle">
                                    <MedicalButtonArrow/>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((item) => (
                        <MedicalBlogItem key={item.id} {...item} type="medical" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicalBlog;
