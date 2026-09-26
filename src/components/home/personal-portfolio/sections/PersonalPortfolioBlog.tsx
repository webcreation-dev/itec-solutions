"use client";
import PersonalPortfolioBlogItem from "../components/PersonalPortfolioBlogItem";
import { blogData } from "@/data/blog-data";
import { useIsDarkRoute } from "@/hooks";

const PersonalPortfolioBlog = () => {
    // Retrieve personal portfolio blog items for rendering
    const blogs = blogData.personalPortfolio;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const blogStyles = {
        text: isDark ? "tp-text-common-white" : "tp-text-common-black",
        descriptionColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
    };
    // -------------------------------

    return (
        <div className="tp-blog-area pt-150 pb-95">
            <div className="container">
                <div className="row">
                    {/* SUBTITLE */}
                    <div className="col-lg-5">
                        <div
                            className="tp-blog-subtitle mb-30 tp_fade_anim"
                            data-delay=".3"
                        >
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 ${blogStyles.text} fs-16`}>
                                <span className="borders d-inline-block"></span>
                                Latest Journal
                            </span>
                        </div>
                    </div>

                    {/* TITLE */}
                    <div className="col-lg-5">
                        <div
                            className="tp-blog-pp-title-wrap mb-60 tp_fade_anim"
                            data-delay=".5"
                        >
                            <h2 className={`tp-section-pp-title fs-70 fs-lg-50 fs-xs-40 fw-700 mb-10 ${blogStyles.text}`}>
                                My Blog
                            </h2>
                            <p className={`fs-18 lh-150-per ${blogStyles.descriptionColor}`}>
                                Strategists dedicated to creating stunning,
                                <br />
                                functional websites that align with your unique
                                <br />
                                business goals.
                            </p>
                        </div>
                    </div>

                    {/* BLOG ITEMS */}
                    {blogs.map((item, index) => (
                        <PersonalPortfolioBlogItem key={index} {...item} type="personalPortfolio" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioBlog;