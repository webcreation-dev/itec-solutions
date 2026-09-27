"use client";

import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconThree } from "@/svg";

const ConstructionHero = () => {
    const isDark = useIsDarkRoute();
    const titleClass = isDark ? "fs-70 fs-lg-60 fs-xs-40 tp-text-common-white" : "fs-70 fs-lg-60 fs-xs-40";
    const descClass = isDark ? "fs-20 lh-140-per tp-text-grey-2" : "fs-20 lh-140-per";
    const heroPatternColor = isDark ? "#D9D9D9" : "#ffffff";

    return (
        <>
            <div className="tp-service-hero-area itec-construction-service-hero tp-service-hero-spacing p-relative z-index-1" style={{ backgroundColor: isDark ? undefined : "#F1F1F0" }}>
                <span className="tp-service-hero-shape-2 p-absolute">
                    <svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="413.5"
                            cy="413.5"
                            r="353.5"
                            transform="matrix(-1 0 0 1 820 0)"
                            stroke={heroPatternColor}
                            strokeOpacity={isDark ? 0.05 : 0.8}
                            strokeWidth="120"
                        />
                    </svg>
                </span>

                <div className="container">
                    <div className="row pb-45">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-left p-relative z-index-1 mb-40">
                                <h2 className={titleClass}>Construction &<br />promotion immobilière</h2>
                                <div className="tp-service-details-icon">
                                    <img className="tp-live-anim-spin" src="/assets/img/breadcrumb/icon.png" alt="" style={{ filter: "brightness(0) invert(1)" }} />
                                </div>
                                <div className="cnt-hero-btn mt-35 tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <SmartLink className="upd-btn-black-square cnt-btn-style style-2" href="/contact">
                                        <i>
                                            <ArrowIconThree />
                                            <ArrowIconThree />
                                        </i>
                                        <span>
                                            <span className="text-1">Parler de votre projet</span>
                                            <span className="text-2">Parler de votre projet</span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="tp-service-hero-right mt-55 p-relative">
                                <span className="tp-service-hero-shape d-none d-sm-inline-block" style={{ top: "-80px", left: "-205px" }}>
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/update-2/hero/hero-2/vector.png"
                                        alt=""
                                        style={{ filter: isDark ? "brightness(0) invert(1)" : undefined }}
                                    />
                                </span>
                                <p className={descClass}>
                                    Nous accompagnons les opérations de construction<br />
                                    et de développement immobilier, de la faisabilité<br />
                                    jusqu’à la livraison, avec une coordination exigeante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-breadcrumb-wrap itec-construction-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-breadcrumb-list">
                                    <ul>
                                        <li><SmartLink href="/">Accueil</SmartLink></li>
                                        <li><span></span></li>
                                        <li>Construction</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-about-me-banner scale-up-img">
                <img
                    className="img-cover scale-up"
                    data-speed="0.4"
                    data-scale-to="1.02"
                    src="/assets/img/update-2/portfolio/home-2/banner.jpg"
                    alt="Projet de construction ITEC"
                />
            </div>
        </>
    );
};

export default ConstructionHero;
