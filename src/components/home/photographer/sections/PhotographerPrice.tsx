"use client";
import { useIsDarkRoute } from "@/hooks";
import PricePlanItem from "../components/PricePlanItem";
import { pricingPlans } from "@/data/price-data";

const PhotographerPrice = () => {
    // Determine if the current route is a dark route
    const isdark = useIsDarkRoute();
    const wrapperClass = isdark ? "black-bg-6 section-m-spacing" : "";

    return (
        <section className={`al-price-pg-area pt-150 pb-120 ${wrapperClass}`}>
            <div className="container container-1320">
                {/* Title Section */}
                <div className="al-price-pg-title-wrap mb-90">
                    <div className="row align-items-end">
                        <div className="col-xl-2">
                            <div className="al-about-pg-subtitle-box">
                                <span className="al-section-pg-subtitle">EXPERTISE</span>
                            </div>
                        </div>
                        <div className="col-xl-10">
                            <div className="al-about-pg-title-box">
                                <h2 className="al-section-pg-title mb-20 tp_text_invert invert-black-7">
                                    Our <br /> pricing plans
                                </h2>
                                <p className="tp_text_invert invert-black-7">
                                    [ Pricing that suits your needs ]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="row">
                    {pricingPlans.map((plan, index) => (
                        <PricePlanItem key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotographerPrice;