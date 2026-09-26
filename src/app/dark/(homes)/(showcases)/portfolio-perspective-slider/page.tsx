import PortfolioPerspectiveSliderArea from "./_components/portfolio-perspective-slider-area";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Perspective Slider Dark - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioPerspectiveSliderArea />
        </main>
    );
};

export default page;