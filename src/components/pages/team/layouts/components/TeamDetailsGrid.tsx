"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

interface TeamMember {
    name: string;
    role: string;
    img: string;
    speed: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Daniel Scoot",
        role: "Product Designer",
        img: "/assets/img/team/thumb.jpg",
        speed: ".9",
    },
    {
        name: "Katherine Victoria",
        role: "WordPress Developer",
        img: "/assets/img/team/thumb-2.jpg",
        speed: ".-9",
    },
    {
        name: "Robertson Crushe",
        role: "React Developer",
        img: "/assets/img/team/thumb-3.jpg",
        speed: ".9",
    },
    {
        name: "Zoey Harper",
        role: "Senior Developer",
        img: "/assets/img/team/thumb-4.jpg",
        speed: ".-9",
    },
];

const TeamDetailsGrid = () => {
    const isDark = useIsDarkRoute();

    const shape1Color = isDark ? "#7D5DFF" : "#C4EE18";
    const shape2Color = isDark ? "#fff" : "#030303";
    const titleClass = isDark ? "tp-text-common-white" : "";
    const pClass = isDark ? "tp-text-grey-2" : "";
    const nameClass = isDark ? "tp-text-common-white" : "";
    const roleClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const linkPath = isDark ? "/dark/team-details" : "/team-details";

    return (
        <div className="tp-team-area pt-110 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-md-3 d-none d-md-block">
                        <div className="tp-about-wd-shape tp-team-sa-shape tp-about-sa-shape">
                            <span className="shape-1 d-inline-block mr-10" data-speed=".9">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill={shape1Color} />
                                </svg>
                            </span>
                            <span className="shape-1 mb-15">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill={shape2Color} />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 col-md-9">
                        <div className="tp-team-sa-title-wrap">
                            <h2 className={`tp-team-sa-title mb-25 tp_fade_anim ${titleClass}`} data-delay=".3">Team</h2>
                            <div className="tp-service-2-para tp-techonolgy-para tp-team-sa-para tp_fade_anim" data-delay=".5">
                                <p className={`fs-18 ${pClass}`}>
                                    We’re a team of experienced startup strategists, designers, marketers, and growth hackers committed to helping founders turn ideas into high-growth businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="tp-team-sa-item mb-90" data-speed={member.speed}>
                                <div className="tp-team-sa-thumb mb-20 tp--hover-item p-relative">
                                    <div
                                        className="tp--hover-img"
                                        data-displacement={member.img}
                                        data-intensity="0.6"
                                        data-speedin="1"
                                        data-speedout="1"
                                    >
                                        {/* Using standard img element for WebGL hover-effect compatibility */}
                                        <img className="w-100" src={member.img} alt={member.name} />
                                    </div>
                                </div>
                                <div className="tp-team-sa-content text-center">
                                    <h5 className={`tp-ff-heading fw-500 fs-25 mb-5 ${nameClass}`}>
                                        <Link href={linkPath} className="underline-black">
                                            {member.name}
                                        </Link>
                                    </h5>
                                    <span className={`fs-16 ${roleClass}`}>{member.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsGrid;
