import React from "react";
import { Metadata } from "next";
import PortfolioSlicerArea from "@/app/dark/(portfolios)/portfolio-slicer/_components/portfolio-slicer-area";

export const metadata: Metadata = {
    title: "Portfolio Slicer - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioSlicerArea />
        </main>
    );
};

export default page;