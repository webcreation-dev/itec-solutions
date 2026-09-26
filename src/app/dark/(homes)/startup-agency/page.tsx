
import { Metadata } from "next";
import {
    StartupAgencyAbout,
    StartupAgencyBanner,
    StartupAgencyBlog,
    StartupAgencyBrand,
    StartupAgencyCta,
    StartupAgencyHero,
    StartupAgencyPortfolio,
    StartupAgencyProcess,
    StartupAgencyService,
    StartupAgencyTeam,
    StartupAgencyTechnology,
    StartupAgencyTestimonial,
} from "@/components/home/startup-agency/sections";

export const metadata: Metadata = {
    title: "Startup Agency - Digital Agency & Creative Portfolio Nextjs Template",
};

const StartupAgencyDarkPage = () => {
    return (
        <main>
            <StartupAgencyHero />
            <StartupAgencyBrand />
            <StartupAgencyService />
            <StartupAgencyAbout />
            <StartupAgencyProcess />
            <StartupAgencyPortfolio />
            <StartupAgencyTechnology />
            <StartupAgencyTeam />
            <StartupAgencyBanner />
            <StartupAgencyTestimonial />
            <StartupAgencyBlog />
            <StartupAgencyCta />
        </main>
    );
};

export default StartupAgencyDarkPage;
