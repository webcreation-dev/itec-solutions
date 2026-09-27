import { ConstructionAbout, ConstructionBrandSlide, ConstructionFaq, ConstructionFunFact, ConstructionHero, ConstructionPortfolio, ConstructionService, ConstructionTextPlan, ConstructionTextTeam, ConstructionTextBlog } from "@/components/home/construction/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Construction - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
     <main>
        <ConstructionHero/>
        <ConstructionBrandSlide/>
        <ConstructionAbout/>
        <ConstructionService/>
        <ConstructionFaq/>
        <ConstructionPortfolio/>
        <ConstructionFunFact/>
        <ConstructionTextPlan/>
        <ConstructionTextTeam/>
        <ConstructionTextBlog/>
     </main>
    );
};

export default page;
