"use client";
import PlumbingBlogItem from "../components/PlumbingBlogItem";
import PlumbingBlogHeader from "../components/PlumbingBlogHeader";
import { blogData } from "@/data/blog-data";

const PlumbingServiceBlog = () => {
    // Retrieve plumbing blog items for rendering
    const blogs = blogData.plumbing;

    return (
        <div className="tp-blog-area pt-160 pb-130 p-relative z-index-1">

            {/* Shape */}
            <div className="tp-blog-pb-shape d-none d-xl-inline-block">
                <img
                    className="has_fade_anim"
                    data-fade-from="left"
                    data-duration="2"
                    data-delay="0.3"
                    data-fade-offset="80"
                    data-ease="bounce"
                    src="/assets/img/blog/pb/shape.png"
                    alt="blog shape"
                />
            </div>

            <div className="container-fluid container-1646">
                <div className="row">

                    {/* Left */}
                    <div className="col-xl-5">
                        <PlumbingBlogHeader />
                    </div>

                    {/* Right */}
                    <div className="col-xl-7">
                        <div className="tp-blog-pb-item-wrap ml-60">
                            {blogs.map((item, i) => (
                                <PlumbingBlogItem
                                    key={item.id}
                                    {...item}
                                    delay={`.${3 + i * 2}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceBlog;