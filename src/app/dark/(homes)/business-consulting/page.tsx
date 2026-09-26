import { BusinessConsultingAbout, BusinessConsultingBlog, BusinessConsultingBrand, BusinessConsultingFaq, BusinessConsultingHero, BusinessConsultingPortfolio, BusinessConsultingService, BusinessConsultingTestimonial, BusinessConsultingTextSlider, BusinessConsultingVideo } from "@/components/home/business-consulting/sections";
import BusinessConsultingBanner from "@/components/home/business-consulting/sections/BusinessConsultingBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Consulting - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <BusinessConsultingHero />
            <BusinessConsultingService />
            <BusinessConsultingAbout />
            <BusinessConsultingTextSlider />
            <BusinessConsultingPortfolio />
            <BusinessConsultingVideo />
            <BusinessConsultingFaq />
            <BusinessConsultingTestimonial />
            <BusinessConsultingBlog />
            <BusinessConsultingBanner />
            <BusinessConsultingBrand />
        </main>
    );
};

export default page;