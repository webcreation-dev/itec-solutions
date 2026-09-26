"use client";
import ConstructionPortfolioCard from "../components/ConstructionPortfolioCard";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconThree } from "@/svg";

// Data
const portfolioCards = [
    {
        id: 1,
        year: "Construction",
        title: "Piloter la réalisation avec rigueur.",
        description: "Préparation, coordination et suivi des travaux pour sécuriser qualité, délais et budget.",
        bg: "#DDF4F5",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-1.jpg",
    },
    {
        id: 2,
        year: "Promotion immobilière",
        title: "Faire émerger des programmes utiles.",
        description: "Des opérations pensées à partir du site, des usages, du marché et de leur valeur durable.",
        bg: "#43BBC2",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-2.jpg",
    },
    {
        id: 3,
        year: "Développement",
        title: "Transformer une intention en projet viable.",
        description: "Faisabilité, montage et coordination des acteurs pour faire avancer chaque étape avec cohérence.",
        bg: "#263D4A",
        img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-3.jpg",
    },
];

const locationCards = [
    { id: 1, year: "France", flag: "🇫🇷", title: "Un socle d’expertise et de références.", description: "Études de structure, calculs, dimensionnement et maîtrise d’œuvre pour des projets menés avec exigence.", bg: "#DDF4F5", img: "/assets/projets/annecy.jpg" },
    { id: 2, year: "Sénégal", flag: "🇸🇳", title: "Étudier et réaliser au plus près du terrain.", description: "Des études techniques complétées par la réalisation de travaux, selon les besoins de chaque opération.", bg: "#43BBC2", img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-2.jpg" },
    { id: 3, year: "Bénin", flag: "🇧🇯", title: "Une filiale en préparation.", description: "Le Bénin s’inscrit dans la trajectoire de développement d’ITEC Solutions en Afrique de l’Ouest.", bg: "#C6E3E6", img: "/assets/img/update-2/portfolio/home-2/portfolio-thumb-3.jpg" },
];

const ConstructionPortfolio = ({ variant = "projects" }: { variant?: "projects" | "locations" }) => {
    const isDarkTheme = useIsDarkRoute();
    const isLocations = variant === "locations";
    const sectionBackground = isLocations ? "#FFFFFF" : (isDarkTheme ? "#1b1b1d" : "#EBEAE7");
    const cards = isLocations ? locationCards : portfolioCards;

    return (
        <div
            className={`cnt-portfolio-ptb cnt-bg-clip ${isLocations ? "pt-0" : "pt-120"}`}
            style={{ backgroundColor: sectionBackground }}
        >
            {/* Header */}
            <div className={isLocations ? "d-none" : "container"}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cnt-portfolio-heading text-center pb-80">
                            <span
                                className="cnt-section-subtitle mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                {isLocations ? "Nos filiales" : "Réalisations & savoir-faire"}
                            </span>

                            <h3
                                className="tp-section-title-clash-600 fs-60 fw-500 mb-0 pb-15 tp_fade_anim"
                                data-delay=".4"
                            >
                                {isLocations ? <>Une présence construite<br />territoire par territoire.</> : <>Des projets conçus <br /> pour s’inscrire dans leur territoire</>}
                            </h3>

                            {!isLocations && <div
                                className="cnt-portfolio-text tp_fade_anim"
                                data-delay=".5"
                            >
                                <p>
                                    ITEC accompagne la construction et le développement immobilier, de la définition
                                    du programme jusqu’à la livraison, en réunissant les compétences utiles au projet.
                                </p>
                            </div>}
                            {!isLocations && <div
                                className="cnt-portfolio-btn tp_fade_anim"
                                data-delay=".6"
                            >
                                <SmartLink
                                    className="upd-btn-black-square cnt-btn-style style-2 btn-transparent"
                                    href="/portfolio-col-3"
                                >
                                    <i>
                                        <ArrowIconThree />
                                        <ArrowIconThree />
                                    </i>

                                    <span>
                                        <span className="text-1">Voir nos références</span>
                                        <span className="text-2">Voir nos références</span>
                                    </span>
                                </SmartLink>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* Video */}
            <div className="cnt-portfolio-video-wrapper">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    ref={(el) => {
                        if (el) {
                            el.muted = true;
                        }
                    }}
                >
                    <source
                        src="https://html.aqlova.com/videos/agntix/cnt.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* Cards */}
            <div className="cnt-portfolio-video-card-wrapper d-flex flex-column justify-content-center">
                {cards.map((item) => (
                    <ConstructionPortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ConstructionPortfolio;
