"use client";

import React from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

interface FaqItem {
    id: string;
    count: string;
    question: string;
    answer: string;
}

const commonQuestions: FaqItem[] = [
    {
        id: "one",
        count: "01",
        question: "Quelles données peuvent être collectées ?",
        answer: "Lorsque vous utilisez le formulaire de contact, nous pouvons recevoir les informations que vous choisissez de communiquer, telles que votre nom, votre adresse e-mail, votre téléphone et le message relatif à votre projet.",
    },
    {
        id: "two",
        count: "02",
        question: "Pourquoi ces données sont-elles utilisées ?",
        answer: "Elles sont utilisées pour répondre à votre demande, vous recontacter si nécessaire et améliorer l’accompagnement proposé par ITEC Solutions.",
    },
    {
        id: "three",
        count: "03",
        question: "Les données sont-elles partagées ?",
        answer: "Les informations transmises sont destinées aux équipes habilitées d’ITEC Solutions et, lorsque cela est nécessaire au fonctionnement du site, à ses prestataires techniques. Elles ne sont pas cédées à des tiers à des fins commerciales.",
    },
    {
        id: "four",
        count: "04",
        question: "Combien de temps les données sont-elles conservées ?",
        answer: "Les données sont conservées uniquement pendant la durée nécessaire au traitement de la demande et au respect des obligations applicables. Les durées précises seront définies avant la mise en ligne définitive.",
    },
    {
        id: "five",
        count: "05",
        question: "Comment nous contacter au sujet de vos données ?",
        answer: "Pour toute question concernant vos informations, vous pouvez utiliser le formulaire de contact du site. Les coordonnées dédiées seront ajoutées lorsque l’organisation interne sera confirmée.",
    },
];

const servicesQuestions: FaqItem[] = [
    {
        id: "one-1",
        count: "01",
        question: "Quels sont vos droits ?",
        answer: "Selon la réglementation applicable, vous pouvez demander l’accès à vos données, leur rectification, leur suppression ou exercer toute autre demande relative à leur traitement.",
    },
    {
        id: "two-2",
        count: "02",
        question: "Le site utilise-t-il des cookies ?",
        answer: "Des cookies techniques peuvent être utilisés afin d’assurer le bon fonctionnement du site. Si des outils de mesure ou de services tiers sont ajoutés, leur utilisation sera précisée dans cette politique.",
    },
    {
        id: "three-3",
        count: "03",
        question: "Comment les données sont-elles sécurisées ?",
        answer: "ITEC Solutions met en œuvre des mesures organisationnelles et techniques raisonnables pour limiter les accès non autorisés, la perte ou l’altération des informations transmises.",
    },
    {
        id: "four-4",
        count: "04",
        question: "Cette politique peut-elle évoluer ?",
        answer: "Oui. Elle pourra être mise à jour si le site, les services proposés ou les règles applicables évoluent. La date de mise à jour sera indiquée sur cette page.",
    },
    {
        id: "five-5",
        count: "05",
        question: "À qui s’adresser en cas de demande ?",
        answer: "Vous pourrez écrire à ITEC Solutions via les coordonnées publiées sur la page Contact. Une adresse dédiée à la confidentialité pourra être ajoutée avant la mise en ligne définitive.",
    },
];

const FaqTwo = () => {
    const isDark = useIsDarkRoute();
    
    const subtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const titleClass = isDark ? "tp-text-common-white" : "tp-text-common-black-1";
    const homeLink = isDark ? "/dark" : "/architecture";

    return (
        <main>
            {/* tp-faq-hero-area-start */}
            <div className="tp-faq-hero-area pre-header tp-faq-hero-spacing bg-position p-relative">
                <div className="bg-position" data-background="/assets/img/breadcrumb/thumb-13.jpg" style={{ backgroundImage: "url(/assets/img/breadcrumb/thumb-13.jpg)" }}>
                    <div className="container-fluid container-1524 containers">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-9">
                                <div className="tp-faq-hero-title-wrap">
                                    <h2 className="tp-section-ai-title mb-45 fs-70 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm mb-15 tp-text-common-white">Politique de<br /> confidentialité</h2>
                                    <div className="tp-breadcrumb-list tp-breadcrumb-2-list tp-breadcrumb-3-white pt-35">
                                        <ul>
                                            <li><Link href={homeLink}>Accueil</Link></li>
                                            <li><span></span></li>
                                            <li>Confidentialité</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-faq-hero-area-end */}

            {/* tp-faq-area-start */}
            <div className="tp-faq-area p-relative z-index-1 pt-155 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Common Questions */}
                            <div className="tp-faq-wrap mb-150 tp-faq-cst-tab-content tp-faq-cst-tab-content-2 tp-faq-ai-tab-content">
                                <div className="tp-faq-ai-title-wrap mb-25">
                                    <span className={`text-anim tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${subtitleClass}`}>/ DONNÉES PERSONNELLES /</span>
                                    <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm ${titleClass}`}>Collecte et utilisation.</h2>
                                </div>
                                <div className="accordion mb-60" id="general_faqaccordion">
                                    {commonQuestions.map((item, index) => {
                                        const isOpen = index === 0;
                                        const headingId = `order_${item.id}`;
                                        const collapseId = `order__collapse_${item.id}`;

                                        return (
                                            <div key={item.id} className="accordion-item tp_fade_anim" data-delay=".3">
                                                <h2 className="accordion-header p-relative" id={headingId}>
                                                    <button
                                                        className={`tp-faq-btn ${isOpen ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isOpen ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        <span className="tp-faq-ai-count">{item.count}</span>
                                                        {item.question}
                                                        <span className="accordion-btn"></span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#general_faqaccordion"
                                                >
                                                    <div className="accordion-body tp-faq-details-para">
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Services Questions */}
                            <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-cst-tab-content-2 tp-faq-ai-tab-content">
                                <div className="tp-faq-ai-title-wrap mb-25">
                                    <span className={`text-anim tp-ff-dm fw-500 fs-18 ls-m-4 mb-10 d-inline-block ${subtitleClass}`}>/ VOS DROITS /</span>
                                    <h2 className={`text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-dm ${titleClass}`}>Cookies et sécurité.</h2>
                                </div>
                                <div className="accordion mb-60" id="general_faqaccordiontwo">
                                    {servicesQuestions.map((item, index) => {
                                        const isOpen = index === 0;
                                        const headingId = `order_${item.id}`;
                                        const collapseId = `order__collapse_${item.id}`;

                                        return (
                                            <div key={item.id} className="accordion-item tp_fade_anim" data-delay=".3">
                                                <h2 className="accordion-header p-relative" id={headingId}>
                                                    <button
                                                        className={`tp-faq-btn ${isOpen ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isOpen ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        <span className="tp-faq-ai-count">{item.count}</span>
                                                        {item.question}
                                                        <span className="accordion-btn"></span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#general_faqaccordiontwo"
                                                >
                                                    <div className="accordion-body tp-faq-details-para">
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-faq-area-end */}
        </main>
    );
};

export default FaqTwo;
