import { PhotographerAbout, PhotographerHero, PhotographerInstagram, PhotographerPrice, PhotographerProject, PhotographerProjectTwo, PhotographerTextSlider, PhotographerVideo } from "@/components/home/photographer/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photographer - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PhotographerHero />
            <PhotographerProject />
            <PhotographerAbout />
            <PhotographerTextSlider />
            <PhotographerProjectTwo />
            <PhotographerVideo />
            <PhotographerPrice />
            <PhotographerInstagram />
        </main>
    );
};

export default page;