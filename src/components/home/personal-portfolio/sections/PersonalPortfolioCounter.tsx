"use client";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";
import {
    AchievementIcon,
    CustomerIconThree,
    ExperienceIconThree,
    ProjectIconThree,
} from "@/svg";

const counters = [
    {
        id: 1,
        end: 2,
        suffix: "K",
        label: "Project Completed",
        type: "project",
    },
    {
        id: 2,
        end: 16,
        label: "My Achievement",
        type: "achievement",
    },
    {
        id: 3,
        end: 12,
        suffix: "+",
        label: "Year of Experience",
        type: "experience",
    },
    {
        id: 4,
        end: 98,
        suffix: "%",
        label: "Happy Customer",
        type: "customer",
    },
];

const PersonalPortfolioCounter = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const counterStyles = {
        textColor: isDark
            ? "tp-text-common-white"
            : "tp-text-common-black",

        labelColor: isDark
            ? "tp-text-grey-2"
            : "tp-text-grey-1",

        iconColor: isDark ? "#ffffff" : "#030303",
    };
    // -------------------------------
    return (
        <div className="tp-counter-area pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-counter-wrap">
                            <div className="tp-counter-wrap-box tp-counter-pp-wrap-box bounce_animation">
                                {counters.map(({ id, end, suffix, label, type }) => (
                                    <div key={id} className="tp-counter-item bounce__anim">
                                        <h3 className={`fw-500 fs-70 fs-md-50 text-uppercase ${counterStyles.textColor}`}>
                                            <AnimatedCounter min={0} max={end} />
                                            {suffix}
                                        </h3>

                                        <span className={`fw-500 fs-18 fs-md-15 lh-22 ${counterStyles.labelColor} d-inline-block mb-30`}>
                                            {label}
                                        </span>
                                        <span>
                                            {
                                                type === "project" ? <ProjectIconThree fillColor={counterStyles.iconColor} /> :
                                                    type === "achievement" ? <AchievementIcon fillColor={counterStyles.iconColor} /> :
                                                        type === "experience" ? <ExperienceIconThree fillColor={counterStyles.iconColor} /> :
                                                            type === "customer" ? <CustomerIconThree fillColor={counterStyles.iconColor} /> : null
                                            }
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioCounter;