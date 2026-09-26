import { SeoAgencyTrustedBrand, SeoAgencyHero, SeoAgencyStep, SeoAgencyBrand, SeoAgencyVideo, SeoAgencyService, SeoAgencyProject, SeoAgencyPrice, SeoAgencyFaq, SeoAgencyTextSlider, SeoAgencyTestimonial, SeoAgencyBlog } from "@/components/home/seo-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Agency - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return (
        <main>
            <SeoAgencyHero />
            <SeoAgencyTrustedBrand />
            <SeoAgencyStep />
            <SeoAgencyBrand />
            <SeoAgencyVideo />
            <SeoAgencyService />
            <SeoAgencyProject />
            <SeoAgencyPrice />
            <SeoAgencyFaq />
            <SeoAgencyTextSlider />
            <SeoAgencyTestimonial />
            <SeoAgencyBlog />
        </main>
    );
};

export default page;

