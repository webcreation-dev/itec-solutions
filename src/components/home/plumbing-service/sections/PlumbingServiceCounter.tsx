"use client";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";
import {
    CountryIconThree,
    CustomerIconFour,
    ExperienceIconFour,
    ProjectIconFour,
} from "@/svg";

const counters = [
    {
        id: 1,
        type: "project",
        end: 34,
        suffix: "K",
        label: "Project Completed",
        align: "",
        extraClass: "",
    },
    {
        id: 2,
        type: "country",
        end: 16,
        suffix: "K",
        label: "Country Office",
        align: "justify-content-center",
        extraClass: "",
    },
    {
        id: 3,
        type: "experience",
        end: 12,
        suffix: "+",
        label: "Year of Experience",
        align: "justify-content-center",
        extraClass: "ml-100",
    },
    {
        id: 4,
        type: "customer",
        end: 98,
        suffix: "%",
        label: "Happy Customer",
        align: "justify-content-end",
        extraClass: "",
    },
];

const PlumbingServiceCounter = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const counterStyles = {
        textColor: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-5",
        svgIconFillColor: isDarkTheme ? "#fff" : "#111112",
    };

    return (
        <div className="tp-counter-area pb-110">
            <div className="container-fluid container-1646">
                <div className="row bounce_animation">
                    {counters.map((item) => (
                        <div
                            key={item.id}
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 bounce__anim"
                        >
                            <div className={`tp-counter-cst-item mb-40 ${item.extraClass}`}>
                                <div
                                    className={`tp-counter-cst-item-inner d-flex ${item.align}`}
                                >
                                    <span className="tp-counter-2-icon mt-10 d-inline-block mr-25">
                                        {
                                            item.type === "project" ? <ProjectIconFour fillColor={counterStyles.svgIconFillColor} /> :
                                                item.type === "country" ? <CountryIconThree fillColor={counterStyles.svgIconFillColor} /> :
                                                    item.type === "experience" ? <ExperienceIconFour fillColor={counterStyles.svgIconFillColor} /> :
                                                        item.type === "customer" ? <CustomerIconFour fillColor={counterStyles.svgIconFillColor} /> : null
                                        }
                                    </span>

                                    <div>
                                        <h2 className={`tp-ff-inter ${counterStyles.textColor} fw-600 fs-70 text-uppercase mb-0`}>
                                            <AnimatedCounter min={0} max={item.end} />
                                            {item.suffix}
                                        </h2>

                                        <span className={`fs-500 fs-18 tp-ff-inter ${counterStyles.textColor}`}>
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceCounter;