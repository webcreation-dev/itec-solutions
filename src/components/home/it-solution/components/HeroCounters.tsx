import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const counters = [
    {
        value: 99,
        suffix: "%",
        text: (
            <>
                Clients Satisfied And <br /> Repeating.
            </>
        ),
    },
    {
        value: 152,
        suffix: "+",
        text: (
            <>
                Project Completed In <br /> 25 Countries.
            </>
        ),
    },
];

const HeroCounters = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Styles
    // -------------------------------
    const counterStyle = {
        textColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
    };
    // -------------------------------

    return (
        <div className="tp-hero-it-counter-wrap d-flex">
            {counters.map((item, index) => (
                <div key={index} className="tp-hero-it-counter mb-50">
                    <h2 className={`tp-ff-inter fs-72 fs-xs-55 ls-m-2 ${counterStyle.textColor} mb-10`}>
                        <AnimatedCounter min={0} max={item.value} />
                        {item.suffix}
                    </h2>
                    <span className="tp-ff-poppins fw-500 fs-18 fs-xs-14 subtitle">
                        {item.text}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default HeroCounters;