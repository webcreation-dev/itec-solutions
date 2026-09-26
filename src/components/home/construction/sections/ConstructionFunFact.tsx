import AnimatedCounterTwo from "@/components/shared/Counter/AnimatedCounterTwo";

const funFacts = [
    {
        value: 4,
        suffix: "k+",
        label: "Projects completed",
        delay: ".3",
    },
    {
        value: 91,
        suffix: "+",
        label: "Renovation experts",
        delay: ".5",
    },
    {
        value: 42,
        suffix: "+",
        label: "Renovation experts",
        delay: ".7",
    },
    {
        value: 24,
        suffix: "+",
        label: "Projects completed",
        delay: ".8",
    },
];

const ConstructionFunFact = () => {
    return (
        <div
            className="ar-funfact-area ar-funfact-bg mt-85 mb-110"
            style={{ backgroundImage: `url(/assets/img/update-2/hero/hero-2/hero-bg-shape.png)` }}>
            <div className="container container-1350">
                <div className="row">
                    {funFacts.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-4">
                            <div
                                className="ar-funfact-item text-center mb-45 tp_fade_anim"
                                data-delay={item.delay}
                            >
                                <h4>
                                    <AnimatedCounterTwo min={0} max={item.value} />
                                    {item.suffix}
                                </h4>
                                <span>{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConstructionFunFact;