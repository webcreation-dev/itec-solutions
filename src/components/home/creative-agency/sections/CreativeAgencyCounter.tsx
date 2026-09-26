"use client";
import { CountryIconFour, CustomerIconFive, ExperienceIconFive, ProjectIconFive } from "@/svg";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const counterData = [
    {
        type: "project",
        end: 34,
        suffix: "K",
        label: "Project Completed",
        colClass: "",
        iconClass: "mt-10",
    },
    {
        type: "country",
        end: 12,
        suffix: "",
        label: "Country Office",
        colClass: "ml-20",
        iconClass: "mt-10",
    },
    {
        type: "experience",
        end: 12,
        suffix: "+",
        label: "Year of Experience",
        colClass: "ml-30",
        iconClass: "mt-10",
    },
    {
        type: "customer",
        end: 98,
        suffix: "%",
        label: "Happy Customer",
        colClass: "ml-50",
        iconClass: "mt-20",
    },
];

const CreativeAgencyCounter = () => {
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

    // -------------------------------
    // styles 
    // -------------------------------
    const counterStyles = {
        textColor: isDarkTheme ? "tp-text-common-white" : "",
        bodyColor: isDarkTheme ? "tp-text-grey-2" : "tp-text-common-black-1",
        svgIconFillColor: isDarkTheme ? "white" : "#030303",
    };

    return (
        <div className="tp-counter-area pt-125 pb-95">
            <div className="container">
                <div className="row bounce_animation">
                    {counterData.map((item, index) => (
                        <div key={index}
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 bounce__anim">
                            <div className={`tp-counter-2-item d-flex mb-40 ${item.colClass}`}>
                                <span className={`tp-counter-2-icon ${item.iconClass} d-inline-block mr-25`}>
                                    {
                                        item.type === "project" ? <ProjectIconFive fillColor={counterStyles.svgIconFillColor} /> :
                                            item.type === "country" ? <CountryIconFour fillColor={counterStyles.svgIconFillColor} /> :
                                                item.type === "experience" ? <ExperienceIconFive fillColor={counterStyles.svgIconFillColor} /> :
                                                    item.type === "customer" ? <CustomerIconFive fillColor={counterStyles.svgIconFillColor} /> : null
                                    }
                                </span>
                                <div>
                                    <h2 className={`tp-ff-funnel fw-500 fs-70 text-uppercase ${counterStyles.textColor}`}>
                                        <AnimatedCounter min={0} max={item.end} />
                                        {item.suffix}
                                    </h2>
                                    <span className={`fs-500 fs-18 ${counterStyles.bodyColor}`}>
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyCounter;