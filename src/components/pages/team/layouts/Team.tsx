"use client";

import React from "react";
import TeamHero from "./components/TeamHero";
import TeamFeatured from "./components/TeamFeatured";
import TeamGrid from "./components/TeamGrid";
import TeamTextSlider from "./components/TeamTextSlider";
import TeamAwards from "./components/TeamAwards";

const Team = () => {
    return (
        <main>
            <TeamHero />
            <TeamFeatured />
            <TeamGrid />
            <TeamTextSlider />
            <TeamAwards />
        </main>
    );
};

export default Team;