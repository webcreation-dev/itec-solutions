"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const TeamHero = () => {
    const isDark = useIsDarkRoute();

    const bgClass = isDark ? "tp-bg-grey-8" : "pricing-bg";
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-common-black-6";

    return (
        <div className={`tp-pricing-area pre-header tp-pricing-2-spacing bg-position pb-140 ${bgClass}`}>
            <div className="container-fluid container-1524 containers">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-9">
                        <div className="tp-pricing-ai-title-wrap">
                            <h2 className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 ${titleColor}`}>
                                Nos filiales
                            </h2>
                            <p className={`tp-section-ai-para tp-ff-dm mb-55 fw-400 fs-22 ls-m-2 lh-150-per ${descColor}`}>
                                Une organisation appelée à accompagner les projets ITEC<br /> au plus près des territoires et des partenaires.
                            </p>
                            <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-border pt-25">
                                <ul>
                                    <li>
                                        <Link href={isDark ? "/dark" : "/architecture"}>Accueil</Link>
                                    </li>
                                    <li>
                                        <span></span>
                                    </li>
                                    <li className={isDark ? "tp-text-common-white" : ""}>Nos filiales</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamHero;
