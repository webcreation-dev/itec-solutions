"use client";

import React from "react";
import { useIsDarkRoute } from "@/hooks";
import SmartLink from "@/components/common/SmartLink";
import HeroScribbleArrow from "@/components/common/HeroScribbleArrow";

const AboutCreativeHero = () => {
    const isDark = useIsDarkRoute();
    const titleClass = isDark ? "fs-70 fs-lg-60 fs-xs-40 tp-text-common-white" : "fs-70 fs-lg-60 fs-xs-40";
    const descClass = isDark ? "fs-20 lh-140-per tp-text-grey-2" : "fs-20 lh-140-per";

    return <><div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1"><span className="tp-service-hero-shape-2 p-absolute"><svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="413.5" cy="413.5" r="353.5" transform="matrix(-1 0 0 1 820 0)" stroke={isDark ? "#D9D9D9" : "#F0F0F0"} strokeOpacity={isDark ? 0.05 : undefined} strokeWidth="120" /></svg></span><div className="container"><div className="row pb-45"><div className="col-lg-7"><div className="tp-service-hero-left p-relative z-index-1 mb-40"><h2 className={titleClass}>Notre<br />vision</h2><div className="tp-service-details-icon"><img className="tp-live-anim-spin" src="/assets/img/breadcrumb/icon.png" alt="" /></div></div></div><div className="col-lg-5"><div className="tp-service-hero-right mt-55 p-relative"><HeroScribbleArrow strokeColor={isDark ? "#fff" : "#030303"} /><p className={descClass}>ITEC Solutions réunit ingénierie, construction<br />et développement immobilier autour d’une même ambition :<br />faire progresser des projets utiles et durables.</p></div></div></div></div><div className="tp-breadcrumb-wrap"><div className="container"><div className="row"><div className="col-12"><div className="tp-breadcrumb-list"><ul><li><SmartLink href="/">Accueil</SmartLink></li><li><span></span></li><li>Vision</li></ul></div></div></div></div></div></div><div className="tp-about-me-banner scale-up-img"><img className="img-cover scale-up" data-speed="0.4" src="/assets/img/video/thumb.jpg" alt="ITEC Solutions" /></div></>;
};

export default AboutCreativeHero;
