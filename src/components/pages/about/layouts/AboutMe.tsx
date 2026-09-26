"use client";

import React from "react";
import AboutMeHero from "./about-me/AboutMeHero";
import AboutMeSkills from "./about-me/AboutMeSkills";
import AboutMeServices from "./about-me/AboutMeServices";
import AboutMeTestimonial from "./about-me/AboutMeTestimonial";
import AboutMeCounter from "./about-me/AboutMeCounter";
import BlogGridTextSlider from "@/components/blog/layouts/BlogGridTextSlider";

const AboutMe = () => {
    return (
        <main>
            <AboutMeHero />
            <AboutMeSkills />
            <AboutMeServices />
            <AboutMeTestimonial />
            <AboutMeCounter />
            <BlogGridTextSlider />
        </main>
    );
};

export default AboutMe;