"use client";

import React from "react";
import AboutModernHero from "./about-modern/AboutModernHero";
import AboutModernIntro from "./about-modern/AboutModernIntro";
import AboutModernTextSlider from "./about-modern/AboutModernTextSlider";
import AboutModernFeature from "./about-modern/AboutModernFeature";

const AboutModern = () => {
    return (
        <main>
            <AboutModernHero />
            <AboutModernIntro />
            <AboutModernTextSlider />
            <AboutModernFeature />
        </main>
    );
};

export default AboutModern;
