import { ConstructionAbout, ConstructionBrandSlide, ConstructionFaq, ConstructionFunFact, ConstructionHero, ConstructionPortfolio, ConstructionService, ConstructionTestimonial, ConstructionTextSlide, ConstructionTextBanner, ConstructionTextPlan, ConstructionTextTeam, ConstructionTextBlog, ConstructionBrandLogoSlider } from "@/components/home/construction/sections";
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
        <ConstructionTestimonial/>
        <ConstructionTextSlide/>
        <ConstructionTextBanner/>
        <ConstructionTextPlan/>
        <ConstructionTextTeam/>
        <ConstructionTextBlog/>
        <ConstructionBrandLogoSlider/>
     </main>
    );
};

export default page;
