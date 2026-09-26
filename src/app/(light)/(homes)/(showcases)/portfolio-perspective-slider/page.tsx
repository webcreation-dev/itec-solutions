import PortfolioPerspectiveSliderArea from "@/app/dark/(homes)/(showcases)/portfolio-perspective-slider/_components/portfolio-perspective-slider-area";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Perspective Slider - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioPerspectiveSliderArea />
        </main>
    );
};

export default page;