import { ConstructionAbout, ConstructionBrandSlide, ConstructionFaq, ConstructionFunFact, ConstructionHero, ConstructionPortfolio, ConstructionService, ConstructionTextPlan, ConstructionTextTeam, ConstructionTextBlog } from "@/components/home/construction/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Construction & développement | ITEC Solutions",
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
