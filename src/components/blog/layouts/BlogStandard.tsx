"use client";

import React from "react";
import BlogGridTextSlider from "./BlogGridTextSlider";
import BlogStandardBanner from "./blog-standard/BlogStandardBanner";
import BlogStandardFeatured from "./blog-standard/BlogStandardFeatured";
import BlogStandardHero from "./blog-standard/BlogStandardHero";
import BlogStandardPagination from "./blog-standard/BlogStandardPagination";
import BlogStandardPosts from "./blog-standard/BlogStandardPosts";
import BlogStandardSidebar from "./blog-standard/BlogStandardSidebar";
import { postboxItems } from "./blog-standard/data";

const BlogStandard = () => {
    return (
        <main>
            <BlogStandardHero />
            <BlogStandardBanner />
            <BlogStandardFeatured />

            <div className="tp-blog-standard-area pt-50 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tp-postbox-wrapper mr-90 mb-50">
                                <BlogStandardPosts posts={postboxItems} />
                                <BlogStandardPagination />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogStandardSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <BlogGridTextSlider />
        </main>
    );
};

export default BlogStandard;
