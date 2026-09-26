"use client";

import React from "react";
import AboutCreativeCommitment from "./about-creative/AboutCreativeCommitment";
import AboutCreativeHero from "./about-creative/AboutCreativeHero";
import AboutCreativeVideo from "./about-creative/AboutCreativeVideo";
import AboutCreativeTextSlider from "./about-creative/AboutCreativeTextSlider";
import AboutModernIntro from "./about-modern/AboutModernIntro";

const AboutCreative = () => {
    return (
        <main>
            <AboutCreativeHero />
            <AboutModernIntro compact />
            <AboutCreativeCommitment />
            <AboutCreativeVideo />
            <AboutCreativeTextSlider />
        </main>
    );
};

export default AboutCreative;
