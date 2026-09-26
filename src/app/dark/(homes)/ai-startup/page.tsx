import { AiStartupAbout, AiStartupBanner, AiStartupBlog, AiStartupCta, AiStartupFaq, AiStartupHero, AiStartupPortfolio, AiStartupPricing, AiStartupService, AiStartupTestimonial, AiStartupTextSlider } from "@/components/home/ai-startup/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Startup - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <AiStartupHero />
            <AiStartupAbout />
            <AiStartupBanner />
            <AiStartupService />
            <AiStartupTextSlider />
            <AiStartupPortfolio />
            <AiStartupPricing />
            <AiStartupTestimonial />
            <AiStartupFaq />
            <AiStartupCta />
            <AiStartupBlog />
        </main>
    );
};

export default page;