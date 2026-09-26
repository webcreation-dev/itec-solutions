"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useIsDarkRoute, useRevealOnHover } from "@/hooks";

const leftAwards = [
    { id: 1, name: "Awwwards", year: "2025", delay: ".3" },
    { id: 2, name: "CSS Design Awards", year: "2024", delay: ".5" },
    { id: 3, name: "Webby Awards", year: "2023", delay: ".7" },
    { id: 4, name: "Webby Awards", year: "2023", delay: ".7", noBorder: true }
];

const rightAwards = [
    { id: 5, name: "UX Design Awards", year: "2022", delay: ".3" },
    { id: 6, name: "Interaction Awards", year: "2021", delay: ".5" },
    { id: 7, name: "DesignRush Agency Awards", year: "2020", delay: ".7" },
    { id: 8, name: "DesignRush Agency Awards", year: "2020", delay: ".7", noBorder: true }
];

const TeamAwards = () => {
    const isDark = useIsDarkRoute();
    const containerRef = useRef<HTMLDivElement>(null);

    useRevealOnHover(containerRef);

    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const strokeColor = isDark ? "rgba(255, 255, 255, 0.2)" : "#111112";
    const shapeFill = isDark ? "#fff" : "#333333";
    const descColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const itemTextColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const awardLink = isDark ? "/dark/awwwards" : "/awwwards";

    return (
        <div ref={containerRef} className="tp-awareds-area pb-90">
            <div className="container-fluid container-1524">
                <div className="row">
                    {/* Header */}
                    <div className="col-lg-10">
                        <div className="tp-service-wd-title-wrap d-md-flex align-items-end">
                            <span className={`fw-500 tp-ff-dm fs-25 mb-40 ${titleColor}`}>
                                (05 Award We’ve Wined!)
                            </span>
                        </div>
                    </div>
                    {/* Border SVG */}
                    <div className="col-lg-12">
                        <div className="tp-service-wd-border mb-55">
                            <svg viewBox="0 0 1499 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M0 1L1499 1.00013" stroke={strokeColor} />
                            </svg>
                        </div>
                    </div>
                    {/* Para/Intro block */}
                    <div className="col-xl-7 col-lg-6"></div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="tp-awards-wd-para d-flex mb-55">
                            <span className="mr-20 mt-5">
                                <svg width="36" height="70" viewBox="0 0 36 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M18 17.5C27.9411 17.5 36 25.3351 36 35C36 44.6649 27.9411 52.5 18 52.5C8.05891 52.5 0 44.6649 0 35C0 25.3351 8.05891 17.5 18 17.5ZM36 70C36 60.3351 27.9411 52.5 18 52.5C8.05891 52.5 0 60.3351 0 70H36ZM0 0C0 9.66495 8.05891 17.5 18 17.5C27.9411 17.5 36 9.66495 36 0H0Z" fill={shapeFill} />
                                </svg>
                            </span>
                            <p className={`fs-24 lh-28 mb-0 ls-m-2 tp-ff-dm opacity-8 ${descColor}`}>
                                Winning or being nominated for these<br />
                                awards can showcase an agency’s excellence<br />
                                and creativity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Left Awards Wrap */}
                    <div className="col-lg-6">
                        <div className="tp-awards-wd-wrap tp-awards-wd-2-wrap mr-85 mb-40">
                            <div className="tp-awards-wd-top tp_fade_anim" data-delay=".2" data-fade-from="left">
                                <span className="tp-ff-dm">Award</span>
                                <span className="tp-ff-dm">Year</span>
                            </div>
                            <div className="tp-awards-wd-item-inner">
                                {leftAwards.map((award) => (
                                    <div
                                        key={award.id}
                                        className="tp-reveal-item p-relative active tp_fade_anim"
                                        data-delay={award.delay}
                                        data-fade-from="left"
                                    >
                                        <Link
                                            href={awardLink}
                                            className={`tp-awards-wd-item d-flex justify-content-between ${award.noBorder ? "" : "borders"}`}
                                        >
                                            <span className={`${itemTextColor} tp-ff-dm`}>{award.name}</span>
                                            <span className={`${itemTextColor} tp-ff-dm`}>{award.year}</span>
                                        </Link>
                                        <div
                                            className="tp-reveal-bg"
                                            style={{ backgroundImage: "url(/assets/img/awards/awards-2/item.png)" }}
                                            data-background="assets/img/awards/awards-2/item.png"
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Awards Wrap */}
                    <div className="col-lg-6">
                        <div className="tp-awards-wd-wrap tp-awards-wd-2-wrap ml-85 mb-40">
                            <div className="tp-awards-wd-top tp_fade_anim" data-delay=".2" data-fade-from="right">
                                <span className="tp-ff-dm">Award</span>
                                <span className="tp-ff-dm">Year</span>
                            </div>
                            <div className="tp-awards-wd-item-inner">
                                {rightAwards.map((award) => (
                                    <div
                                        key={award.id}
                                        className="tp-reveal-item p-relative active tp_fade_anim"
                                        data-delay={award.delay}
                                        data-fade-from="right"
                                    >
                                        <Link
                                            href={awardLink}
                                            className={`tp-awards-wd-item d-flex justify-content-between ${award.noBorder ? "" : "borders"}`}
                                        >
                                            <span className={`${itemTextColor} tp-ff-dm`}>{award.name}</span>
                                            <span className={`${itemTextColor} tp-ff-dm`}>{award.year}</span>
                                        </Link>
                                        <div
                                            className="tp-reveal-bg"
                                            style={{ backgroundImage: "url(/assets/img/awards/awards-2/item.png)" }}
                                            data-background="assets/img/awards/awards-2/item.png"
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamAwards;
