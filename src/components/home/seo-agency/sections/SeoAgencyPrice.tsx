"use client";

import { monthlyPlans, yearlyPlans } from "@/data/price-data";
import PrivePlanItem from "../components/PrivePlanItem";
import { useState } from "react";
import Image from "next/image";

const SeoAgencyPrice = () => {
    const [isYearly, setIsYearly] = useState(true);
    const plans = isYearly ? yearlyPlans : monthlyPlans;

    return (
        <section className="al-price-area pt-110 pb-90">
            <div className="container">
                {/* Title */}
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="al-price-title-box mb-60 text-center">
                            <span className="al-section-subtitle fs-12 sky-bg mb-20">
                                Choose Price
                            </span>
                            <h4 className="al-section-title mb-0 tp-text-revel-anim fix">
                                Choose the plan that is right for your needs.
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Toggle */}
                <div className="row justify-content-center mb-50">
                    <div className="col-xl-4 col-lg-6 col-md-8">
                        <div className="al-price-nav-wrapper p-relative mb-50">
                            <div className="al-price-offer d-none d-md-block">
                                <Image width={108} height={73} src="/assets/img/update/price/price-offer.png" alt="Price Offer" />
                            </div>
                            {/* Monthly Label */}
                            <label
                                className={`al-toggler-pre ${!isYearly ? "is-active" : ""}`}
                                onClick={() => setIsYearly(false)}
                                style={{ cursor: "pointer" }}
                            >
                                Pay Monthly
                            </label>

                            {/* Toggle Switch */}
                            <div
                                className="al-toggle-input-wrap"
                                onClick={() => setIsYearly(!isYearly)}
                                style={{ cursor: "pointer" }}
                            >
                                <input
                                    className="al-input-check"
                                    id="al-switcher-input"
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={(e) => setIsYearly(e.target.checked)}
                                    readOnly
                                />
                                <b className="al-switch-toggle"></b>
                            </div>

                            {/* Yearly Label */}
                            <label
                                className={`al-toggler-post ${isYearly ? "is-active" : ""}`}
                                onClick={() => setIsYearly(true)}
                                style={{ cursor: "pointer" }}
                            >
                                Annually
                            </label>
                        </div>
                    </div>
                    {/* Plans */}
                    <div className="al-tab-item">
                        <div className="row">
                            {plans.map((plan, index) => (
                                <PrivePlanItem key={index} {...plan} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAgencyPrice;