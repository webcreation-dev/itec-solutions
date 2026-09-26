"use client";

import React from "react";
import TeamDetailsHero from "./components/TeamDetailsHero";
import TeamDetailsBanner from "./components/TeamDetailsBanner";
import TeamDetailsGrid from "./components/TeamDetailsGrid";
import TeamDetailsValues from "./components/TeamDetailsValues";
import TeamDetailsCounter from "./components/TeamDetailsCounter";
import TeamDetailsCareer from "./components/TeamDetailsCareer";
import TeamDetailsTextSlider from "./components/TeamDetailsTextSlider";

const TeamDetails = () => {
    return (
        <main>
            <TeamDetailsHero />
            <TeamDetailsBanner imgSrc="/assets/img/breadcrumb/thumb-6.jpg" altText="About Thumbnail" />
            <TeamDetailsGrid />
            <div className="tp-about-2-border p-relative z-index-1"></div>
            <TeamDetailsValues />
            <TeamDetailsCounter />
            <TeamDetailsBanner imgSrc="/assets/img/banner/thumb-2.jpg" altText="" />
            <TeamDetailsCareer />
            <TeamDetailsTextSlider />
        </main>
    );
};

export default TeamDetails;