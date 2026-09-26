import { VideoProductionAward, VideoProductionBlog, VideoProductionHero, VideoProductionPortfolio, VideoProductionService, VideoVPArea } from "@/components/home/video-production/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Production - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return (
        <main>
            <VideoProductionHero />
            <VideoVPArea />
            <VideoProductionAward />
            <VideoProductionService />
            <VideoProductionPortfolio />
            <VideoProductionBlog />
        </main>
    );
};

export default page;