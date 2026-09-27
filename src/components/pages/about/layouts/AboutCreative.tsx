"use client";

import React from "react";
import AboutCreativeCommitment from "./about-creative/AboutCreativeCommitment";
import AboutCreativeHero from "./about-creative/AboutCreativeHero";
import AboutCreativeVideo from "./about-creative/AboutCreativeVideo";
import AboutCreativeTextSlider from "./about-creative/AboutCreativeTextSlider";
import AboutModernIntro from "./about-modern/AboutModernIntro";
import TeamDetailsGrid from "../../team/layouts/components/TeamDetailsGrid";

const AboutCreative = () => {
    return (
        <main className="itec-vision-page">
            <AboutCreativeHero />
            <AboutModernIntro compact />
            <TeamDetailsGrid variant="leadership" />
            <AboutCreativeCommitment />
            <AboutCreativeVideo />
            <AboutCreativeTextSlider />
        </main>
    );
};

export default AboutCreative;
