"use client";

import StandardDetailsHero from "./details-standard/StandardDetailsHero";
import StandardDetailsContent from "./details-standard/StandardDetailsContent";
import StandardDetailsOutcome from "./details-standard/StandardDetailsOutcome";
import StandardDetailsNavigation from "./details-standard/StandardDetailsNavigation";
import StandardDetailsFaq from "./details-standard/StandardDetailsFaq";
import BlogGridTextSlider from "@/components/blog/layouts/BlogGridTextSlider";

const PortfolioDetails = () => {
    return (
        <div>
            <StandardDetailsHero />
            <StandardDetailsContent />
            <StandardDetailsOutcome />
            <StandardDetailsNavigation />
            {/* tp-portfolio-banner-area-start */}
            <div className="tp-about-me-banner scale-up-img">
                <img data-speed="0.4" className="img-cover scale-up" src="/assets/img/portfolio/details/banner.jpg" alt="" />
            </div>
            {/* tp-portfolio-banner-area-start */}
            <StandardDetailsFaq />
            <BlogGridTextSlider />
        </div>
    );
};

export default PortfolioDetails;
