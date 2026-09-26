import AiAgencyBlogItem from "../components/AiAgencyBlogItem";
import { blogData } from "@/data/blog-data";

const AiAgencyBlog = () => {
    // Retrieve Ai Agency blog items for rendering
    const blogs = blogData.aiAgency;

    return (
        <div className="ais-blog-ptb pt-120 pb-80">
            <div className="container container-1350">
                {/* HEADING */}
                <div className="row">
                    <div className="ais-blog-heaidng text-center mb-30">
                        <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">
                            Latest Blog
                        </span>
                        <h4 className="ais-section-title tp_fade_anim" data-delay=".5">
                            The latest from our design studio <br /> creative stories
                        </h4>
                    </div>
                </div>
                {/* BLOG LIST */}
                <div className="ais-blog-item-wrapper">
                    <div className="row">
                        {blogs.map((item) => (
                            <AiAgencyBlogItem key={item.id} {...item} type="aiAgency" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgencyBlog;