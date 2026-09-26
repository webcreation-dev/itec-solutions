"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const teamMembers = [
    {
        id: 1,
        name: "France",
        role: "Études de structure, calculs et dimensionnement",
        img: "/assets/projets/annecy.jpg",
        speed: ".9",
    },
    {
        id: 2,
        name: "Sénégal",
        role: "Études techniques et réalisation de travaux",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-2.jpg",
        speed: ".-9",
    },
    {
        id: 3,
        name: "Bénin",
        role: "Filiale en préparation · activités à préciser",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-3.jpg",
        speed: ".9",
    },
];

const TeamGrid = () => {
    const isDark = useIsDarkRoute();

    const sectionTitleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const nameColor = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const roleColor = isDark ? "tp-text-grey-2" : "tp-text-common-black-4";
    const detailLink = isDark ? "/dark/contact" : "/contact";

    return (
        <div className="tp-team-area pt-115 pb-40">
            <div className="container-fluid container-1524">
                <div className="row gx-15">
                    {/* Section Title */}
                    <div className="col-lg-10">
                        <div className="tp-team-details-title mb-80 tp_fade_anim" data-delay=".3">
                            <h2 className={`tp-section-ai-title fs-72 fs-xl-60 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm ${sectionTitleColor}`}>
                                Des expertises adaptées aux réalités<br /> de chaque territoire.
                            </h2>
                        </div>
                    </div>

                    {/* Team Members List */}
                    {teamMembers.map((member, i) => (
                        <div className="col-lg-3 col-md-6" key={member.id}>
                            <div className="tp-team-it-item mb-90 tp_fade_anim" data-delay={`.${3 + i * 2}`} data-speed={member.speed}>
                                <Link className="tp-team-it-thumb" href={detailLink}>
                                    <img src={member.img} alt={member.name} />
                                </Link>
                                <div className="tp-team-it-content p-relative">
                                    <h3 className={`fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter ${nameColor}`}>
                                        <Link href={detailLink} className={isDark ? "underline-white" : "underline-black"}>
                                            {member.name}
                                        </Link>
                                    </h3>
                                    <span className={`${roleColor} ls-m-2 tp-ff-inter`}>
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamGrid;
