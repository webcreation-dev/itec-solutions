"use client";

import React from "react";
import DetailsTwoHero from "./details-two/DetailsTwoHero";
import DetailsTwoContent from "./details-two/DetailsTwoContent";
import DetailsTwoNavigation from "./details-two/DetailsTwoNavigation";
import DetailsTwoRelated from "./details-two/DetailsTwoRelated";
import { FooterScrollArrow } from "@/svg";
import { scrollToSection } from "@/utils";

const PortfolioDetailsTwo = () => {
    return (
        <main>
            <DetailsTwoHero />
            <DetailsTwoContent />
            <DetailsTwoNavigation />
            <DetailsTwoRelated />

            {/* tp-footer-cst-banner wrapper */}
            <div
                className="tp-footer-cst-banner bg-position z-index-1 text-center p-relative"
                style={{ backgroundImage: `url(/assets/img/footer/bg.jpg)` }}
            >
                <img
                    className="tp-footer-cst-banner-shape"
                    src="/assets/img/footer/shape.png"
                    alt="shape"
                />
                <div
                    className="d-inline-block mb-10 tp_fade_anim"
                    data-delay=".4"
                    data-fade-from="top"
                    data-ease="bounce"
                >
                    <button onClick={() => scrollToSection(0)} className="tp-footer-cst-btp" type="button">
                        <FooterScrollArrow />
                    </button>
                </div>
                <h2 className="tp-ff-dm tp-text-common-white fw-600 fs-52 fs-sm-40">Schedule a Demo</h2>
            </div>
        </main>
    );
};

export default PortfolioDetailsTwo;
