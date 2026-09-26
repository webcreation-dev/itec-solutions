import { AIAgencyHero,AIAgencyBrand, AIAgencyFeature, AIAgencyExpense, AIAgencyService, AiAgencyList, AiAgencyTestimonial, AiAgencyBlog, AiAgencyCta } from "@/components/home/ai-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Agency - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return (
        <main>
            <AIAgencyHero/>
            <AIAgencyBrand/>
            <AIAgencyFeature/>
            <AIAgencyExpense/>
            <AIAgencyService/>
            <AiAgencyList/>
            <AiAgencyTestimonial/>
            <AiAgencyBlog/>
            <AiAgencyCta/>
        </main>
    );
};

export default page;