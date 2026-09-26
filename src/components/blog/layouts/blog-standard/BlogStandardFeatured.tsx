"use client";

import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const BlogStandardFeatured = () => {
    const isDark = useIsDarkRoute();

    return (
        <div className="tp-blog-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-blog-top-content">
                            <div className="tp-blog-content text-center">
                                <div className="tp-blog-meta mb-15">
                                    <span>AI Trends</span>
                                    <span className="borders"></span>
                                    <span>02 Feb, 2025</span>
                                </div>
                                <h3 className={`tp-blog-top-title fs-35 fs-xs-25 lh-130-per mb-10 ${isDark ? "tp-text-common-white" : ""}`}>
                                    <Link href="/blog-details">
                                        Behind the Scenes: Our Creative Process for<br /> High-Impact Branding
                                    </Link>
                                </h3>
                                <p className={`lh-150-per fs-18 fw-300 ${isDark ? "tp-text-grey-2" : ""}`}>
                                    Branding is more than just design—it&apos;s about crafting a story, experience, and identity that makes a lasting impression. Our creative process is designed to build brands that not only stand out visually but also resonate with the right audience and drive business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardFeatured;
