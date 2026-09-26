"use client";

import React from "react";
import AboutCreativeHero from "./about-creative/AboutCreativeHero";
import AboutCreativeIntro from "./about-creative/AboutCreativeIntro";
import AboutCreativeBrands from "./about-creative/AboutCreativeBrands";
import AboutCreativeCommitment from "./about-creative/AboutCreativeCommitment";
import AboutCreativeVideo from "./about-creative/AboutCreativeVideo";
import AboutCreativeCounter from "./about-creative/AboutCreativeCounter";
import AboutCreativeTestimonial from "./about-creative/AboutCreativeTestimonial";
import AboutCreativeTextSlider from "./about-creative/AboutCreativeTextSlider";

const AboutCreative = () => {
    return (
        <main>
            <AboutCreativeHero />
            <AboutCreativeIntro />
            <AboutCreativeBrands />
            <AboutCreativeCommitment />
            <AboutCreativeVideo />
            <AboutCreativeCounter />
            <AboutCreativeTestimonial />
            <AboutCreativeTextSlider />
        </main>
    );
};

export default AboutCreative;