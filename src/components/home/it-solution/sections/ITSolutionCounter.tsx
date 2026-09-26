"use client";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";
import {
    CountryIconTwo,
    CustomerIconTwo,
    ExperienceIconTwo,
    ProjectIconTwo,
} from "@/svg";

type CounterItem = {
    type: "project" | "country" | "experience" | "customer";
    value: number;
    suffix?: string;
    label: string;
    align?: "left" | "center" | "right";
    extraClass?: string;
};

const counters: CounterItem[] = [
    {
        type: "project",
        value: 34,
        suffix: "K",
        label: "Project Completed",
        align: "left",
    },
    {
        type: "country",
        value: 16,
        suffix: "K",
        label: "Country Office",
        align: "center",
    },
    {
        type: "experience",
        value: 12,
        suffix: "+",
        label: "Year of Experience",
        align: "center",
        extraClass: "ml-100",
    },
    {
        type: "customer",
        value: 98,
        suffix: "%",
        label: "Happy Customer",
        align: "right",
    },
];

const alignMap = {
    left: "",
    center: "justify-content-center",
    right: "justify-content-end",
};

const ITSolutionCounter = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const counterStyles = {
        textColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyColor: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
        svgIconFillColor: isDark ? "#fff" : "#10302A",
    };
    // -------------------------------
    return (
        <div className="tp-counter-area pt-70 pb-110">
            <div className="container-fluid container-1524">
                <div className="row bounce_animation">
                    {counters.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 bounce__anim"
                        >
                            <div className={`tp-counter-cst-item mb-40 ${item.extraClass ?? ""}`}>
                                <div
                                    className={`tp-counter-cst-item-inner d-flex ${alignMap[item.align ?? "left"]}`}
                                >
                                    <span className="tp-counter-2-icon mt-10 d-inline-block mr-25">
                                       {
                                            item.type === "project" ? <ProjectIconTwo fillColor={counterStyles.svgIconFillColor} /> :
                                                item.type === "country" ? <CountryIconTwo fillColor={counterStyles.svgIconFillColor} /> :
                                                    item.type === "experience" ? <ExperienceIconTwo fillColor={counterStyles.svgIconFillColor} /> :
                                                        item.type === "customer" ? <CustomerIconTwo fillColor={counterStyles.svgIconFillColor} /> : null
                                        }
                                    </span>
                                    <div>
                                        <h2 className={`${counterStyles.textColor} tp-ff-inter fw-600 fs-70 text-uppercase mb-0`}>
                                            <AnimatedCounter min={0} max={item.value} />
                                            {item.suffix}
                                        </h2>
                                        <span className={`fs-500 fs-18 tp-ff-inter ${counterStyles.bodyColor}`}>
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

export default ITSolutionCounter;