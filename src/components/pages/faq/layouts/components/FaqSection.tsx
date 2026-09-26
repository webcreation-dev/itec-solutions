"use client";

import React, { useEffect, useRef } from "react";
import { useIsDarkRoute } from "@/hooks";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
    listTitle: string;
    listItems: string[];
}

const faqData: FaqItem[] = [
    {
        id: "one",
        question: "Éditeur du site",
        answer: "Le site est édité par ITEC Solutions. Les informations d’identification complètes de l’éditeur seront renseignées avant la mise en ligne définitive.",
        listTitle: "Informations à compléter :",
        listItems: ["Dénomination sociale et forme juridique", "Adresse du siège social", "Téléphone et adresse e-mail de contact"],
    },
    {
        id: "two",
        question: "Directeur de la publication",
        answer: "Le directeur de la publication est le représentant légal d’ITEC Solutions ou toute personne désignée par l’entreprise.",
        listTitle: "Information à compléter :",
        listItems: ["Nom et qualité du directeur de la publication"],
    },
    {
        id: "three",
        question: "Hébergement du site",
        answer: "Le site est hébergé par un prestataire technique choisi par ITEC Solutions. Ses coordonnées seront affichées ici avant publication.",
        listTitle: "Information à compléter :",
        listItems: ["Nom, adresse et coordonnées de l’hébergeur"],
    },
    {
        id: "four",
        question: "Propriété intellectuelle",
        answer: "Les contenus du site — textes, visuels, marques, logos, documents et éléments graphiques — sont protégés. Toute reproduction ou utilisation doit faire l’objet d’une autorisation préalable d’ITEC Solutions.",
        listTitle: "Sont notamment concernés :",
        listItems: ["Le logo et l’identité visuelle ITEC", "Les textes et images publiés", "La structure et les éléments graphiques du site"],
    },
    {
        id: "five",
        question: "Responsabilité",
        answer: "ITEC Solutions s’efforce de diffuser des informations exactes et actualisées. Leur consultation ne dispense toutefois pas l’utilisateur de vérifier les informations utiles à son projet auprès de l’entreprise.",
        listTitle: "L’utilisateur est invité à :",
        listItems: ["Vérifier les informations avant toute décision", "Nous signaler toute erreur constatée", "Utiliser le site dans le respect de la réglementation applicable"],
    },
    {
        id: "six",
        question: "Liens externes",
        answer: "Le site peut contenir des liens vers des sites tiers. ITEC Solutions ne contrôle pas leur contenu ni leurs pratiques et ne peut être tenue responsable de leur utilisation.",
        listTitle: "Avant de consulter un site tiers :",
        listItems: ["Prenez connaissance de ses conditions d’utilisation", "Vérifiez sa politique de confidentialité"],
    },
    {
        id: "saven",
        question: "Mise à jour des mentions",
        answer: "Ces mentions légales peuvent être mises à jour en fonction de l’évolution du site, de l’activité d’ITEC Solutions ou des informations réglementaires à compléter.",
        listTitle: "Dernière mise à jour :",
        listItems: ["À renseigner avant mise en ligne définitive"],
    },
];

const FaqSection = () => {
    const isDark = useIsDarkRoute();
    const accordionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const accordion = accordionRef.current;
        if (!accordion) return;

        const handleShow = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && target.classList.contains("accordion-collapse")) {
                const item = target.closest(".accordion-item");
                if (item) {
                    item.classList.add("tp-faq-active");
                }
            }
        };

        const handleHide = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && target.classList.contains("accordion-collapse")) {
                const item = target.closest(".accordion-item");
                if (item) {
                    item.classList.remove("tp-faq-active");
                }
            }
        };

        accordion.addEventListener("show.bs.collapse", handleShow);
        accordion.addEventListener("hide.bs.collapse", handleHide);

        return () => {
            accordion.removeEventListener("show.bs.collapse", handleShow);
            accordion.removeEventListener("hide.bs.collapse", handleHide);
        };
    }, []);

    const containerClass = isDark
        ? "tp-faq-area tp-faq-5-wrap pre-header tp-faq-spacing pb-140"
        : "tp-faq-area pre-header tp-faq-spacing pb-140";
    const subtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const titleClass = isDark ? "tp-text-common-white" : "";

    return (
        <div className={containerClass}>
            <div className="container containers">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-faq-wrap">
                            <div className="text-center mb-45">
                                <span className={`tp-section-subtitle tp-ff-heading fw-500 fs-16 mb-20 ${subtitleClass}`}>
                                    <span className="borders d-inline-block"></span>Informations du site
                                </span>
                                <h2 className={`tp-section-title fs-70 fs-xl-60 fs-lg-50 fs-xs-40 ${titleClass}`}>
                                    Mentions légales
                                </h2>
                            </div>
                            <div className="tp-custom-accordion">
                                <div className="accordion" id="general_faqaccordion" ref={accordionRef}>
                                    {faqData.map((item, index) => {
                                        const isOpen = index === 0;
                                        const headingId = `order_${item.id}`;
                                        const collapseId = `order__collapse_${item.id}`;

                                        return (
                                            <div
                                                key={item.id}
                                                className={`accordion-item mb-25 ${isOpen ? "tp-faq-active" : ""}`}
                                            >
                                                <h2 className="accordion-header p-relative" id={headingId}>
                                                    <button
                                                        className={`accordion-button tp-faq-btn ${isOpen ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isOpen ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        {item.question}
                                                        <span className="accordion-btn" aria-hidden="true"></span>
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
                                                        <span className="tp-faq-list-title d-inline-block mb-15">
                                                            {item.listTitle}
                                                        </span>
                                                        <ul>
                                                            {item.listItems.map((listItem, listIndex) => (
                                                                <li key={listIndex}>{listIndex + 1}. {listItem}</li>
                                                            ))}
                                                        </ul>
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
        </div>
    );
};

export default FaqSection;
