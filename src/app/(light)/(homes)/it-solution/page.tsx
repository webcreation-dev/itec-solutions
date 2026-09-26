import { ITSolutionHero, ITSolutionBanner, ITSolutionAbout, ITSolutionCounter, ITSolutionService, ITSolutionProcess, ITSolutionPortfolio, ITSolutionTeam, ITSolutionTestimonial, ITSolutionGallery, ITSolutionBlog, ITSolutionCta } from "@/components/home/it-solution/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IT Solution - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ITSolutionHero />
            <ITSolutionBanner />
            <ITSolutionAbout />
            <ITSolutionCounter />
            <ITSolutionService />
            <ITSolutionProcess />
            <ITSolutionPortfolio />
            <ITSolutionTeam />
            <ITSolutionTestimonial />
            <ITSolutionGallery />
            <ITSolutionBlog />
            <ITSolutionCta/>
        </main>
    );
};

export default page;