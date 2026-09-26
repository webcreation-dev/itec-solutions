"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useIsDarkRoute } from "@/hooks";

const AboutCreativeBrands = () => {
    const isDark = useIsDarkRoute();

    const bgClass = isDark ? "tp-bg-common-black" : "tp-bg-common-white";
    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const borderClass = isDark ? "tp-brand-bottom-border dark" : "tp-brand-bottom-border";

    const logos = isDark
        ? [
              "/assets/img/brands/white/logo.png",
              "/assets/img/brands/white/logo-2.png",
              "/assets/img/brands/white/logo-3.png",
              "/assets/img/brands/white/logo-4.png",
              "/assets/img/brands/white/logo-5.png",
              "/assets/img/brands/white/logo-3.png",
              "/assets/img/brands/white/logo-4.png",
              "/assets/img/brands/white/logo-5.png",
              "/assets/img/brands/white/logo-3.png",
          ]
        : [
              "/assets/img/brands/logo.png",
              "/assets/img/brands/logo-2.png",
              "/assets/img/brands/logo-3.png",
              "/assets/img/brands/logo-4.png",
              "/assets/img/brands/logo-5.png",
              "/assets/img/brands/logo-3.png",
              "/assets/img/brands/logo-4.png",
              "/assets/img/brands/logo-5.png",
              "/assets/img/brands/logo-3.png",
          ];

    return (
        <div className={`tp-brand-area tp-brand-spacing ${bgClass} z-index-1 p-relative`}>
            <span className={borderClass}></span>
            <div className="tp-brand-customer-wrap">
                <span className={`tp-brand-customer tp-ff-heading fs-18 fs-xs-15 fw-700 ${textColor}`}>
                    We’ve 5,000+ Happiest Customer
                </span>
            </div>
            <div className="tp-brand-wrap">
                <div className="tp-brand-slide-active tp-slider-transition">
                    <Marquee speed={60} gradient={false} autoFill={true}>
                        {logos.map((logo, idx) => (
                            <div className="tp-brand-item" key={idx} style={{ paddingRight: "80px" }}>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src={logo} alt={`brand logo ${idx + 1}`} />
                                </a>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default AboutCreativeBrands;
