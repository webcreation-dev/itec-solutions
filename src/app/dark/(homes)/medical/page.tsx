import {
    MedicalAbout,
    MedicalBlog,
    MedicalCounter,
    MedicalFaq,
    MedicalFeature,
    MedicalFunfact,
    MedicalHero,
    MedicalPortfolio,
    MedicalService,
    MedicalTestimonial,
    MedicalTextSlider,
    MedicalVideo,
} from "@/components/home/medical/sections";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical - Digital Agency & Creative Portfolio Nextjs Template",
};

const MedicalPage = () => {
    return (
        <main>
            <MedicalHero />
            <MedicalFeature />
            <MedicalAbout />
            <MedicalService />
            <MedicalPortfolio />
            <MedicalFaq />
            <MedicalTextSlider />
            <MedicalVideo />
            <MedicalTestimonial />
            <MedicalCounter />
            <MedicalFunfact />
            <MedicalBlog />
        </main>
    );
};

export default MedicalPage;
