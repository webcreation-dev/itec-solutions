"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";

interface ValueItem {
    title: string;
    description: string;
}

const valueItems: ValueItem[] = [
    {
        title: "Creativity & Innovation",
        description: "We push boundaries and think outside the box to create unique, cutting-edge solutions. Every project is an opportunity to explore new ideas and elevate brands.",
    },
    {
        title: "Collaboration & Teamwork",
        description: "Great ideas don’t happen in isolation. We thrive on teamwork, open communication, and a shared vision, working closely with clients and colleagues to bring ideas to life.",
    },
    {
        title: "Excellence & Quality",
        description: "We are committed to delivering high-quality work with attention to detail. Every project reflects our passion for design, strategy, and craftsmanship.",
    },
];

const TeamDetailsValues = () => {
    const isDark = useIsDarkRoute();

    const titleClass = isDark ? "tp-text-common-white" : "";
    const itemTitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const pClass = isDark ? "tp-text-grey-2" : "";

    return (
        <div className="tp-team-value-area pt-135">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="tp-team-value-title mb-30">
                            <h2 className={`fw-500 fs-50 fs-xs-40 ${titleClass}`}>Our Core Values</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="tp-team-value-list mb-30">
                            {valueItems.map((item, index) => {
                                const isLast = index === valueItems.length - 1;
                                return (
                                    <div
                                        key={index}
                                        className={`tp-team-value-item ${isLast ? "" : "borders"}`}
                                    >
                                        <h6 className={`tp-team-value-title fs-25 mb-20 ${itemTitleClass} d-flex align-items-start`}>
                                            <svg className="mr-10" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 0C4.93453 0 0 4.93462 0 11C0 17.0654 4.93453 22 11 22C17.0655 22 22 17.0654 22 11C22 4.93462 17.0655 0 11 0ZM11 19.871C6.10857 19.871 2.12902 15.8915 2.12902 11C2.12902 6.10852 6.10857 2.12902 11 2.12902C15.8914 2.12902 19.871 6.10857 19.871 11C19.871 15.8914 15.8914 19.871 11 19.871Z" fill="#525252" />
                                                <path d="M14.86 7.05371L9.58038 12.3332L6.78466 9.5376L5.2793 11.043L9.58038 15.3441L16.3653 8.55908L14.86 7.05371Z" fill="#525252" />
                                            </svg>
                                            {item.title}
                                        </h6>
                                        <p className={`fs-18 lh-140-per ${pClass}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsValues;
