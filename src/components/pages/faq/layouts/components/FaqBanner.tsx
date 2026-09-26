"use client";

import React from "react";

const FaqBanner = () => {
    return (
        <div className="tp-banner-thumb scale-up-img">
            {/* Standard img for GSAP compatibility */}
            <img
                className="img-cover scale-up"
                data-speed="0.8"
                src="/assets/img/breadcrumb/thumb-9.jpg"
                alt="About Thumbnail"
            />
        </div>
    );
};

export default FaqBanner;
