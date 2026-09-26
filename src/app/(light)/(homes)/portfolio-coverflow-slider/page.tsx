import PortfolioCoverflowSliderArea from "@/app/dark/(homes)/portfolio-coverflow-slider/_components/portfolio-coverflow-slider-area";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Coverflow Slider - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioCoverflowSliderArea />
        </main>
    );
};

export default page;