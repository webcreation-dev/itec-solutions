import { CreativeAgencyAbout, CreativeAgencyAwards, CreativeAgencyBanner, CreativeAgencyBlog, CreativeAgencyBrands, CreativeAgencyCounter, CreativeAgencyHero, CreativeAgencyPortfolio, CreativeAgencyServices, CreativeAgencyTestimonial } from "@/components/home/creative-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creative Agency - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return (
        <main>
            <CreativeAgencyHero />
            <CreativeAgencyAbout/>
            <CreativeAgencyPortfolio />
            <CreativeAgencyServices />
            <CreativeAgencyBanner />
            <CreativeAgencyTestimonial />
            <CreativeAgencyCounter />
            <CreativeAgencyAwards />
            <CreativeAgencyBrands />
            <CreativeAgencyBlog />
        </main>
    );
};

export default page;