import { PlumbingServiceHero, PlumbingServiceTextAbout, PlumbingServiceArea, PlumbingServiceTextSlider, PlumbingServiceMapArea, PlumbingServiceCounter, PlumbingServicePortfolio, PlumbingServiceTextMoving, PlumbingServiceSkill, PlumbingServiceFaq, PlumbingServiceTestimonial, PlumbingServiceBannerThumb, PlumbingServiceBlog, PlumbingServiceCta } from "@/components/home/plumbing-service/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plumbing Service - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return (
        <main>
            <PlumbingServiceHero />
            <PlumbingServiceTextSlider />
            <PlumbingServiceTextAbout />
            <PlumbingServiceArea />
            <PlumbingServiceMapArea />
            <PlumbingServiceCounter />
            <PlumbingServicePortfolio />
            <PlumbingServiceTextMoving />
            <PlumbingServiceSkill />
            <PlumbingServiceFaq />
            <PlumbingServiceTestimonial />
            <PlumbingServiceBannerThumb />
            <PlumbingServiceBlog />
            <PlumbingServiceCta />
        </main>
    );
};

export default page;