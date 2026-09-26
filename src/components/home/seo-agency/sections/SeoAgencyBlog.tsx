import { blogData } from "@/data/blog-data";
import BlogItem from "../components/BlogItem";

const SeoAgencyBlog = () => {
    // Retrieve Seo Agency blog items for rendering
    const blogs = blogData.seoAgency;

    return (
        <section
            className="al-blog-seo-area grey-bg-3 pt-120 pb-90 tp-al-bg-section">
            <div className="container">
                {/* Section Title */}
                <div className="row">
                    <div className="col-xl-4">
                        <div className="al-blog-seo-title-box mb-40">
                            <span className="al-section-subtitle fs-12 sky-bg mb-20">
                                Blog
                            </span>
                            <h4 className="al-section-title mb-0 tp-text-revel-anim fix">
                                Latest News
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="row">
                    {blogs.map((blog, index) => (
                        <BlogItem key={index} {...blog} type="seoAgency" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeoAgencyBlog;