"use client";
import CreativeAgencyBlogItem from "../components/CreativeAgencyBlogItem";
import { SquareOverlapIcon, SquareOverlapIconTwo } from "@/svg";
import { blogData } from "@/data/blog-data";
import { useIsDarkRoute } from "@/hooks";

const blogs = blogData.creativeAgency ?? [];

const CreativeAgencyBlog = () => {
    // Check if current route uses dark theme
    const isDark = useIsDarkRoute();

    // Theme-based class 
    const theme = {
        titleClass: isDark ? "tp-text-common-white" : "",
        textClass: isDark ? "tp-text-common-white" : "tp-text-common-black",
        descClass: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
    };

    const icon = isDark
        ? <SquareOverlapIconTwo />
        : <SquareOverlapIcon fillColor="#030303" />;

    return (
        <div className="tp-blog-area pb-95">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4">
                        <div className="tp-blog-subtitle mb-30 tp_fade_anim" data-delay=".3">
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 fs-16 mb-35 ${theme.textClass}`}>
                                <span className="borders d-inline-block"></span>
                                Latest Journal
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="tp-blog-title-wrap ml-20 mb-45">
                            <h2
                                className={`tp-section-title tp-ff-funnel fs-60 fs-lg-50 fs-xs-30 fw-700 text-uppercase mb-50 tp_fade_anim ${theme.titleClass}`}
                                data-delay=".5"
                            >
                                Updated Journal
                            </h2>

                            <div className="d-flex align-items-start tp_fade_anim" data-delay=".7">
                                <span className="mr-40 tp-service-shape d-inline-block">
                                    {icon}
                                </span>

                                <p className={`tp-blog-2-para fs-18 ${theme.descClass} lh-28`}>
                                    Strategists dedicated to creating stunning,<br />
                                    functional websites that align with your unique<br />
                                    business goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {blogs.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <CreativeAgencyBlogItem {...item} type="creativeAgency" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyBlog;