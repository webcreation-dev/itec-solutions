"use client";
import { useIsDarkRoute } from "@/hooks";
import SkillItem from "../components/SkillItem";

const skills = [
    {
        type: "figma",
        name: "Figma",
        value: 100,
    },
    {
        type: "adobe-xd",
        name: "Adobe XD",
        value: 98,
    },
    {
        type: "webflow",
        name: "Webflow",
        value: 90,
    },
    {
        type: "framer",
        name: "Framer",
        value: 95,
    },
];

const PersonalPortfolioAbout = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const aboutStyles = {
        bg: isDark ? "tp-bg-grey-8" : "tp-bg-common-black",
    };
    // -------------------------------
    return (
        <div className={`tp-about-area ${aboutStyles.bg} pt-110 pb-80`}>
            <div className="container">
                {/* Title */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-about-pp-title-wrap text-center mb-40">
                            <span className="tp-section-pp-subtitle mb-15 tp-ff-heading fw-500 fs-18 tp-text-common-white d-inline-block">
                                About Me
                            </span>

                            <h2 className="tp-section-pp-title fw-400 fs-50 fs-xl-45 fs-sm-28 lh-120-per tp-text-common-white tp_text_invert">
                                I follow a user-centered, iterative design process to create impactful digital experiences.
                                I start with research & ideation, turning insights into wireframes and high-fidelity prototypes.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="tp-about-pp-border mb-60">
                    <span>
                        <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill="white" fillOpacity="0.1" />
                        </svg>
                    </span>
                </div>

                {/* Skills */}
                <div className="row">
                    {skills.map((item, index) => (
                        <SkillItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAbout;