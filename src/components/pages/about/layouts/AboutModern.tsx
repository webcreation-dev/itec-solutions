"use client";

import React from "react";
import AboutModernHero from "./about-modern/AboutModernHero";
import AboutModernIntro from "./about-modern/AboutModernIntro";
import AboutModernTextSlider from "./about-modern/AboutModernTextSlider";
import AboutModernFeature from "./about-modern/AboutModernFeature";
import AboutModernService from "./about-modern/AboutModernService";
import AboutModernCounter from "./about-modern/AboutModernCounter";
import AboutModernBanner from "./about-modern/AboutModernBanner";
import AboutModernBrands from "./about-modern/AboutModernBrands";

const AboutModern = () => {
    return (
        <main>
            <AboutModernHero />
            <AboutModernIntro />
            <AboutModernTextSlider />
            <AboutModernFeature />
            <AboutModernService />
            <AboutModernCounter />
            <AboutModernBanner />
            <AboutModernBrands />
        </main>
    );
};

export default AboutModern;
