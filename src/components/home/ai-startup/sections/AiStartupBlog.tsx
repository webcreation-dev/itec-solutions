import { SmartLink } from "@/components/common";
import { blogData } from "@/data/blog-data";
import AiBlogItem from "./AiBlogItem";
import { ArrowIcon } from "@/svg";
import Image from "next/image";

const AiStartupBlog = () => {
    // Retrieve Ai Startup blog items for rendering
    const blogs = blogData.aiStartup;

    return (
        <div className="tp-blog-area pt-155 tp-bg-common-black-5 section-m-spacing p-relative z-index-1 pb-130">
            <Image
                width={1351}
                height={1074}
                className="tp-faq-ai-noise"
                src="/assets/img/body/noise.png"
                alt="noise image"
            />

            <div className="container-fluid container-1524">

                {/* Header */}
                <div className="row align-items-end mb-40">
                    <div className="col-lg-8">
                        <div className="tp-testimonial-ai-title-wrap mb-30">
                            <span className="text-anim tp-ff-inter fw-500 fs-18 ls-m-4 tp-text-grey-5 mb-10 d-inline-block">
                                / Our Blog /
                            </span>

                            <h2 className="text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-jakarta tp-text-grey-5">
                                Your Guide to All Things Artificial Intelligence.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className="tp-service-ai-btn mb-40 text-lg-end tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="top"
                            data-ease="bounce"
                        >
                            <SmartLink
                                href="/blog-grid-2"
                                className="tp-btn-ai tp-btn-ai-black tp-btn-switch-2-animation p-relative hover-text-white d-inline-block text-uppercase tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">See All Blog</span>
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
                </div>

                {/* Blog List */}
                <div className="row">
                    {blogs.map((blog, index) => (
                        <AiBlogItem key={index} {...blog} type="aiStartup" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiStartupBlog;