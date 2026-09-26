"use client";
import AiCustomButton from "../components/AiCustomButton";
import { aiPricingPlans } from "@/data/price-data";
import { useIsDarkRoute } from "@/hooks";

const features = [
    "Email Notifications",
    "Access to Core AI Features",
    "Limited Data Processing",
    "Basic API Access",
];

const AiStartupPricing = () => {
    const isDarkRoute = useIsDarkRoute();

    // Background image for pricing section
    const pricingSectionBgImage = isDarkRoute
        ? "/assets/img/pricing/pricing-black.png"
        : "/assets/img/pricing/pricing.png";

    // Small section label text (/ Our Pricing /)
    const pricingSectionLabelClass = isDarkRoute
        ? "tp-text-common-white"
        : "tp-text-common-black-5";

    // Main heading + paragraph text
    const pricingTitleTextClass = isDarkRoute
        ? "tp-text-common-white"
        : "tp-text-common-black-6";

    // Pricing card background
    const pricingCardBgClass = isDarkRoute
        ? "tp-bg-grey-8"
        : "tp-bg-common-white";

    return (
        <div className="tp-pricing-area bg-position pt-150 pb-130"
            style={{ backgroundImage: `url(${pricingSectionBgImage})` }}>
            <div className="container-fluid container-1524">
                <div className="row">
                    {/* LEFT CONTENT */}
                    <div className="col-xl-6 col-lg-9">
                        <div className="tp-pricing-ai-title-wrap mb-40">
                            <span
                                className={`tp-ff-inter fw-500 fs-18 ls-m-4 ${pricingSectionLabelClass} mb-10 d-inline-block tp_fade_anim`}
                                data-delay=".3"
                            >
                                / Our Pricing /
                            </span>
                            <h2
                                className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-jakarta mb-30 ${pricingTitleTextClass} tp_fade_anim`}
                                data-delay=".5"
                            >
                                Discover the <br />
                                <span className="title-slide-gradient">Perfect Plan</span> to
                                Power Your AI Vision
                            </h2>
                            <div className="tp_fade_anim" data-delay=".7">
                                <p className={`
                                    tp-section-ai-para tp-ff-dm mb-55 fw-400 fs-22 ls-m-2 lh-150-per ${pricingTitleTextClass}
                                    `}>
                                    From strategy to deployment, we fuse cutting- technology
                                    <br />
                                    with creative thinking to craft digital.
                                </p>
                            </div>
                            <div
                                className="tp_fade_anim"
                                data-delay=".7"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <AiCustomButton buttonText="See All Plan" href="/pricing" className="tp-btn-ai-transparent" />
                            </div>
                        </div>
                    </div>
                    {/* RIGHT PRICING */}
                    <div className="col-xl-6">
                        {aiPricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`tp-pricing-ai-item tp-round-24 ${pricingCardBgClass} mb-30 tp_fade_anim`}
                                data-delay={plan.delay}
                                data-fade-from="right"
                            >
                                <div className="row">
                                    {/* PLAN INFO */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="tp-pricing-ai-head">
                                            <h5 className={`tp-ff-jakarta fs-20 ls-m-4  ${pricingSectionLabelClass}`}>
                                                {plan.title}
                                            </h5>
                                            <p className={`tp-ff-dm fw-500 fs-16 ls-m-2 ${pricingSectionLabelClass}`}>
                                                {plan.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {/* FEATURES */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="tp-pricing-ai-list">
                                            <ul>
                                                {features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* PRICE + BUTTON */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="tp-pricing-ai-btn text-md-center">
                                            <h3 className={`tp-pricing-ai-price tp-ff-jakarta fs-52 ls-m-2 mb-15 ${pricingSectionLabelClass}`}>
                                                {plan.price}
                                                {plan.period && <span>{plan.period}</span>}
                                            </h3>
                                            <AiCustomButton buttonText="Get Started" href="/contact-us" className="tp-btn-ai-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupPricing;