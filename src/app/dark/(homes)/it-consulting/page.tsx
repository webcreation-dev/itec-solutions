import { ItConsultingHero, ItConsultingAbout, ItConsultingFeature, ItConsultingVideo, ItConsultingPortfolio, ItConsultingService, ItConsultingTeam, ItConsultingBrandLogo, ItConsultingTestimonial, ItConsultingFaq, ItConsultingCta } from "@/components/home/it-consulting/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IT Consulting - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ItConsultingHero />
            <ItConsultingAbout />
            <ItConsultingFeature />
            <ItConsultingVideo />
            <ItConsultingService />
            <ItConsultingPortfolio />
            <ItConsultingTeam />
            <ItConsultingBrandLogo />
            <ItConsultingTestimonial />
            <ItConsultingFaq />
            <ItConsultingCta />
        </main>
    );
};

export default page;