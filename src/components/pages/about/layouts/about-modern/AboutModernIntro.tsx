"use client";

import React, { useState } from "react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const AboutModernIntro = ({ compact = false }: { compact?: boolean }) => {
    const isDark = useIsDarkRoute();
    const [activeTab, setActiveTab] = useState<"vision" | "expansion">("vision");
    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const descColor = isDark ? "tp-text-grey-2" : "";

    const content = activeTab === "vision"
        ? ["ITEC Solutions veut apporter aux projets une lecture globale : ingénierie, construction et développement immobilier travaillent ensemble pour produire des réponses cohérentes et durables.", "L’ambition est de faire de la technicité un levier de confiance, de qualité et de transformation des territoires."]
        : ["Les références développées en France constituent un socle d’exigence pour accompagner les marchés africains et construire des collaborations locales solides.", "ITEC est aujourd’hui présent en France et au Sénégal ; le Bénin fait partie de sa trajectoire de développement."];

    if (compact) {
        return <div className="tp-about-area pt-100 pb-20"><div className="container-fluid container-1524"><div className="row"><div className="col-lg-12"><div className="tp-about-cst-title-wrap mb-0"><h2 className={`tp-about-2-title fs-md-40 fs-xs-30 tp_text_invert invert-black-3 tp-ff-dm fw-600 ${textColor}`}>Construire une expertise ancrée dans les territoires,<br />capable d’accompagner des projets ambitieux<br />en France comme en Afrique de l’Ouest.</h2></div></div></div></div></div>;
    }

    return <div className="tp-about-area pt-150 pb-100"><div className="container-fluid container-1524"><div className="row">
        <div className="col-lg-12"><div className="tp-about-cst-title-wrap mb-80"><h2 className={`tp-about-2-title fs-md-40 fs-xs-30 tp_text_invert invert-black-3 tp-ff-dm fw-600 ${textColor}`}>Construire une expertise ancrée dans les territoires,<br />capable d’accompagner des projets ambitieux<br />en France comme en Afrique de l’Ouest.</h2></div></div>
        <div className="col-xl-3 col-lg-5"><div className="tp-about-cst-thumb-wrap mb-30"><div className="tp-about-cst-thumb pb-60"><img className="mr-30" src="/assets/projets/annecy.jpg" alt="Projet ITEC Solutions" /></div><div className={`tp-about-expreance d-flex align-items-end mb-30 ${textColor}`}><h2 className="fw-600 fs-100 tp-ff-dm p-relative d-inline-block mb-0 lh-1">3</h2><span className="tp-ff-dm fs-18 fw-700 mb-10 ml-15">pays au cœur<br />de la trajectoire ITEC</span></div></div></div>
        <div className="col-xl-4 col-lg-7"><div className="tp-about-cst-tab-wrap ml-35 mb-30"><div className="tp-about-cst-tab mb-25"><ul role="tablist"><li className="nav-tab-item" role="presentation"><button onClick={() => setActiveTab("vision")} className={`nav-link border-0 bg-transparent ${activeTab === "vision" ? "active" : ""}`}>01. Notre vision</button></li><li className="nav-tab-item" role="presentation"><button onClick={() => setActiveTab("expansion")} className={`nav-link border-0 bg-transparent ${activeTab === "expansion" ? "active" : ""}`}>02. Notre développement</button></li></ul></div><div className="tab-content p-relative mb-45"><div className="tab-pane active show" role="tabpanel"><p className={`fs-18 tp-ff-dm lh-140-per mb-30 ${descColor}`}>{content[0]}</p><p className={`fs-18 tp-ff-dm lh-140-per mb-40 ${descColor}`}>{content[1]}</p><SmartLink href="/team" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm"><span className="d-flex align-items-center justify-content-center"><span className="btn-text">Nos implantations</span></span></SmartLink></div></div></div></div>
        <div className="col-xl-5"><div className="tp-about-cst-list-wrap ml-30 p-relative mb-30"><div className="tp-about-cst-list-thumb text-end fix ml-150 tp-round-20"><img data-speed="0.9" className="tp-round-20" src="/assets/projets/lovagny-persp-1-min.jpg" alt="Référence ITEC Solutions" /></div><div className="tp-about-cst-list tp-bg-common-green-2 tp-round-8 d-inline-block" data-speed="0.9"><div className="tp-about-cst-list-inner"><h4 className="tp-text-common-black-3 tp-ff-dm fw-600 fs-18 mb-5">Une ambition progressive</h4><ul><li>France · expertise structurelle et références</li><li>Sénégal · études techniques et réalisation</li><li>Bénin · implantation en préparation</li></ul><SmartLink className="tp-about-cst-list-btn tp-bg-common-black-1 text-capitalize d-flex justify-content-between align-items-center tp-text-grey-5 fw-700 fs-14 tp-ff-dm" href="/contact">Échanger avec ITEC</SmartLink></div></div></div></div>
    </div></div></div>;
};

export default AboutModernIntro;
