import { PortfolioShowcaseHero, PortfolioShowcasePortfolio } from "@/components/home/portfolio-showcase-full/sections";
import { PortfolioShowcaseFooter } from "@/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Showcase Full - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <>
            <main>
                <PortfolioShowcaseHero />
                <PortfolioShowcasePortfolio />
            </main>
            <PortfolioShowcaseFooter />
        </>
    );
};

export default page;