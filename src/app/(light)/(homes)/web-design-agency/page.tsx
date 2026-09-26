import { WebDesignAgencyAbout, WebDesignAgencyAward, WebDesignAgencyBanner, WebDesignAgencyBannerTwo, WebDesignAgencyBlog, WebDesignAgencyCta, WebDesignAgencyHero, WebDesignAgencyPortfolio, WebDesignAgencyService, WebDesignAgencySkill, WebDesignAgencyTestimonial, WebDesignAgencyTextSlider } from "@/components/home/web-design-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Design Agency - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <WebDesignAgencyHero />
            <WebDesignAgencyAbout />
            <WebDesignAgencySkill />
            <WebDesignAgencyTextSlider />
            <WebDesignAgencyService />
            <WebDesignAgencyBanner/>
            <WebDesignAgencyPortfolio/>
            <WebDesignAgencyTestimonial/>
            <WebDesignAgencyAward/>
            <WebDesignAgencyBannerTwo/>
            <WebDesignAgencyBlog/>
            <WebDesignAgencyCta/>
        </main>
    );
};

export default page;