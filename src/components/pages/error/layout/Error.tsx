"use client";
import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import BlogGridTextSlider from "@/components/blog/layouts/BlogGridTextSlider";

const Error = () => {
    const isDark = useIsDarkRoute();

    return (
        <main>
            {/* error area start */}
            <div className="tp-error-area pt-190 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-error-wrapper text-center">
                                <h4 className="tp-error-title">Oops!</h4>
                                <img src="/assets/img/error/error.png" alt="error" />
                                <div className="tp-error-content">
                                    <h4 className="tp-error-title-sm">Something went Wrong...</h4>
                                    <p>Sorry, we couldn&apos;t find your page.</p>
                                    <Link className="tp-btn" href={isDark ? "/dark" : "/"}>
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* error area end */}

            <BlogGridTextSlider />
        </main>
    );
};

export default Error;
