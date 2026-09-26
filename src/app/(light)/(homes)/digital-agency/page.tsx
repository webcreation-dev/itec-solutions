import { DigitalAgencyAbout, DigitalAgencyAward, DIgitalAgencyBanner, DigitalAgencyBlog, DigitalAgencyBrand, DigitalAgencyCounter, DigitalAgencyHero, DigitalAgencyPortfolio, DigitalAgencyService, DigitalAgencyTestimonial, DigitalAgencyTextSlide, DigitalAgencyVideo } from "@/components/home/digital-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Agency - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <DigitalAgencyHero />
            <DigitalAgencyAbout />
            <DigitalAgencyBrand />
            <DigitalAgencyService />
            <DigitalAgencyVideo />
            <DigitalAgencyPortfolio/>
            <DigitalAgencyCounter/>
            <DigitalAgencyAward/>
            <DigitalAgencyTextSlide/>
            <DigitalAgencyTestimonial/>
            <DIgitalAgencyBanner/>
            <DigitalAgencyBlog/>
        </main>
    );
};

export default page;