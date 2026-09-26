"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { ArrowIconTen } from "@/svg";

const slideItems = [
    { first: "Design", second: "development" },
    { first: "Research", second: "development" },
    { first: "Design", second: "Wireframe" },
    { first: "High Fidelity", second: "Design" },
    { first: "Design", second: "development" },
];

const AboutCreativeTextSlider = () => {
    return (
        <div className="tp-text-slider-area pt-25 pb-25 tp-bg-theme-primary">
            <div className="tp-text-slider-active tp-slider-transition">
                <Marquee speed={80} gradient={false} autoFill={true}>
                    {slideItems.map((item, idx) => (
                        <div
                            className="tp-text-slider-item"
                            key={idx}
                            style={{ display: "inline-flex", alignItems: "center" }}
                        >
                            <span>{item.first}</span>
                            <span className="icons">
                                <ArrowIconTen />
                            </span>
                            <span>{item.second}</span>
                            <span className="borders"></span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default AboutCreativeTextSlider;
