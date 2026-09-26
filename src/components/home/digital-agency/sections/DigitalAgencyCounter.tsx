"use client";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const counterData = [
    {
        id: 1,
        end: 34,
        suffix: "K",
        label: "Project Completed",
    },
    {
        id: 2,
        end: 16,
        suffix: "",
        label: "Country Office",
    },
    {
        id: 3,
        end: 12,
        suffix: "+",
        label: "Year of Experience",
    },
    {
        id: 4,
        end: 98,
        suffix: "%",
        label: "Happy Customer",
    },
];

const DigitalAgencyCounter = () => {
    const isDark = useIsDarkRoute();

    // Heading text color (counter numbers)
    const counterHeadingClass = isDark ? "tp-text-common-white" : "";
    // Counter label text color
    const counterLabelClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <div className="tp-counter-area pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-counter-wrap">
                            <div className="tp-counter-wrap-box bounce_animation">
                                {counterData.map((item) => (
                                    <div key={item.id} className="tp-counter-item bounce__anim">
                                        <h3 className={`fw-500 fs-70 fs-md-50 text-uppercase ${counterHeadingClass}`}>
                                            <AnimatedCounter min={0} max={item.end} />
                                            {item.suffix}
                                        </h3>
                                        <span className={`fw-500 fs-18 fs-md-15 lh-22 ${counterLabelClass}`}>
                                            {item.label}
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

export default DigitalAgencyCounter;