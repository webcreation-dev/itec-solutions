"use client";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const counters = [
    { id: 1, icon: "/assets/img/counter/icon.png", end: 34, suffix: "K", label: "Operation Complete", align: "", extraClass: "" },
    { id: 2, icon: "/assets/img/counter/icon-2.png", end: 16, suffix: "K", label: "Country Hospital", align: "justify-content-center", extraClass: "ml-40" },
    { id: 3, icon: "/assets/img/counter/icon-3.png", end: 12, suffix: "+", label: "Year of Experience", align:"justify-content-center", extraClass: "ml-80" },
    { id: 4, icon: "/assets/img/counter/icon-4.png", end: 98, suffix: "%", label: "Happy Customer", align: "justify-content-xxl-end", extraClass: "" },
];
const MedicalCounter = () => {
    const isDark = useIsDarkRoute();
    const numberColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const labelColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";

    return (
        <div className="tp-counter-area pb-110">
            <div className="container">
                <div className="row bounce_animation">
                    {counters.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 bounce__anim">
                            <div className={`tp-counter-cst-item tp-counter-md-item tpshake-wrap mb-40 ${item.extraClass}`}>
                                <div className={`tp-counter-cst-item-inner d-flex ${item.align}`}>
                                    <span className="tp-counter-2-icon mt-10 d-inline-block mr-25">
                                        <img src={item.icon} alt={item.label} />
                                    </span>
                                    <div>
                                        <h2 className={`tp-ff-familjen fw-600 fs-72 text-uppercase mb-0 ${numberColor}`}>
                                            <AnimatedCounter min={0} max={item.end} />
                                            {item.suffix}
                                        </h2>
                                        <span className={`fs-500 fs-18 fs-xl-16 tp-ff-dm opacity-8 ${labelColor}`}>{item.label}</span>
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

export default MedicalCounter;
