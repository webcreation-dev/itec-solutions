"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIcon } from "@/svg";

const TeamFeatured = () => {
    const isDark = useIsDarkRoute();

    const subtitleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-common-black-6";
    const servicesUrl = isDark ? "/dark/service-details" : "/service-details";

    return (
        <div className="tp-team-details-area pre-header pt-160">
            <div className="container-fluid container-1524">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-team-details-thumb mb-30 tp_fade_anim" data-delay=".3">
                            <img className="w-100 tp-round-20" src="/assets/projets/lovagny-persp-1-min.jpg" alt="Projet de construction ITEC" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-team-details-title-wrap ml-35 mb-40 tp_fade_anim" data-delay=".5">
                            <span className={`tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${subtitleColor}`}>
                                ITEC Solutions · France, Sénégal, Bénin
                            </span>
                            <p className={`tp-section-ai-para tp-ff-dm mb-35 fw-400 fs-22 ls-m-2 lh-150-per ${descColor}`}>
                                Les références développées en France nourrissent l’expertise ITEC en Afrique.
                                Chaque filiale mobilise les métiers les plus adaptés aux besoins locaux,
                                de l’étude de structure à la réalisation des travaux.
                            </p>
                            <Link href={servicesUrl} className="tp-btn-lg tp-bg-theme-primary d-inline-block text-uppercase lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">Nos expertises</span>
                                    <span className="btn-icon">
                                        <ArrowIcon />
                                    </span>
                                    <span className="btn-icon">
                                        <ArrowIcon />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamFeatured;
