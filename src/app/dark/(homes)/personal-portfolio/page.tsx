import { PersonalPortfolioAbout, PersonalPortfolioBlog, PersonalPortfolioCounter, PersonalPortfolioHero, PersonalPortfolioProcess, PersonalPortfolioProject, PersonalPortfolioService, PersonalPortfolioTestimonials } from "@/components/home/personal-portfolio/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Portfolio - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PersonalPortfolioHero />
            <PersonalPortfolioAbout />
            <PersonalPortfolioProject />
            <PersonalPortfolioService />
            <PersonalPortfolioTestimonials />
            <PersonalPortfolioCounter />
            <PersonalPortfolioProcess />
            <PersonalPortfolioBlog />
        </main>
    );
};

export default page;