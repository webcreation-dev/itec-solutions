"use client";
import { blogData } from "@/data/blog-data";
import BlogItem from "../components/BlogItem";
import { SquareOverlapIcon } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

const DigitalAgencyBlog = () => {
    // Retrieve Digital Agency blog items for rendering
    const blogs = blogData.digitalAgency;

    const isDark = useIsDarkRoute();

    // Blog section subtitle (e.g., "Latest Journal")
    const blogSectionSubtitleClass = isDark
        ? "tp-text-common-white"
        : "tp-text-common-black";

    // Blog section main title (e.g., "Updated Blog")
    const blogSectionTitleClass = isDark
        ? "tp-text-common-white"
        : "";

    // Blog section paragraph / description text
    const blogSectionContentClass = isDark
        ? "tp-text-grey-2"
        : "tp-text-grey-1";

    // Blog section icon color
    const blogSectionIconColor = isDark ? "white" : "#030303";


    return (
        <div className="tp-blog-area pt-140 pb-95">
            <div className="container">
                <div className="row">
                    {/* Title / Intro */}
                    <div className="col-lg-4">
                        <div className="tp-blog-subtitle mb-30 tp_fade_anim" data-delay=".3">
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 ${blogSectionSubtitleClass} fs-16 mb-35`}>
                                <span className="borders d-inline-block"></span>Latest Journal
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-blog-title-wrap ml-20 mb-45">
                            <h2
                                className={`tp-section-title ${blogSectionTitleClass} fs-70 fs-lg-50 fs-xs-40 fw-700 text-uppercase mb-50 tp_fade_anim`}
                                data-delay=".5"
                            >
                                Updated Blog
                            </h2>
                            <div className="d-flex align-items-start tp_fade_anim" data-delay=".7">
                                <span className="mr-40 tp-service-shape d-inline-block">
                                    <SquareOverlapIcon fillColor={blogSectionIconColor} />
                                </span>
                                <p className={`fs-18 ${blogSectionContentClass} lh-28`}>
                                    Strategists dedicated to creating stunning,
                                    <br /> functional websites that align with your unique
                                    <br /> business goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Items */}
                    {blogs.map((blog, idx) => (
                        <BlogItem key={idx} {...blog} type="digitalAgency" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyBlog;