"use client";
import {
    ArchitectureAwardShapeIcon,
    ArchitectureCustomerIcon,
    ArchitectureProjectShapeIcon,
} from "@/svg";
import ArchitectureFactItem from "../components/ArchitectureFactItem";
import Image from "next/image";
import { useIsDarkRoute } from "@/hooks";


const ArchitectureFact = () => {
    const isDarkTheme = useIsDarkRoute();
    const factClassesName = {
        sectionBg: !isDarkTheme ? "/assets/img/update/fact/bg.jpg" : undefined,
        sectionBgColor: isDarkTheme ? "#121212" : undefined,
        shapeFill: isDarkTheme ? "currentColor" : "#1C1D21",
    }

    const facts = [
        {
            icon: <ArchitectureProjectShapeIcon fillColor={factClassesName.shapeFill} />,
            title: "Pôles d&apos;expertise",
            value: 3,
        },
        {
            icon: <ArchitectureCustomerIcon fillColor={factClassesName.shapeFill} />,
            title: "Métiers réunis",
            value: 3,
        },
        {
            icon: <ArchitectureAwardShapeIcon fillColor={factClassesName.shapeFill} />,
            title: "Vision de groupe",
            value: 1,
        },
    ];

    return (
        <div
            className="al-fact-archi-area bg-position pt-150 pb-120"
            style={{ backgroundImage: `url(${factClassesName.sectionBg})`, backgroundColor: factClassesName.sectionBgColor }}
        >
            <div className="container">
                <div className="row">

                    {/* Left */}
                    <div className="col-lg-6 mb-30">
                        <div className="al-section-archi-title-wrapper mb-60">
                            <h2 className="al-section-archi-title mb-20 tp_fade_anim">
                                <span className="ml-30"> Notre</span> <br /> approche
                            </h2>

                            <span className="al-section-archi-subtitle tp_fade_anim">
                                02 - Nos repères
                            </span>
                        </div>

                        <div className="al-fact-archi-thumb tp_fade_anim">
                            <Image
                                width={736}
                                height={822}
                                className="w-100 img-fluid"
                                src="/assets/img/update/fact/bitmap.png"
                                alt="bitmap"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-lg-6 mb-30">
                        <div className="al-fact-archi-wrapper ml-90">
                            <div className="al-fact-archi-content">

                                <p className="al-about-archi-para mr-100 mb-75">
                                    Une organisation conçue pour répondre aux enjeux techniques, opérationnels et immobiliers de chaque projet.
                                </p>

                                <div className="al-fact-archi-wrap">
                                    {facts.map((item, i) => (
                                        <ArchitectureFactItem
                                            key={i}
                                            item={item}
                                            index={i}
                                            total={facts.length}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureFact;
