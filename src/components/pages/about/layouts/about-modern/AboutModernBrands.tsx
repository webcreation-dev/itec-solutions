"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useIsDarkRoute } from "@/hooks";

const AboutModernBrands = () => {
    const isDark = useIsDarkRoute();

    const bgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-white";

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
        <div className={`tp-brand-area tp-brand-cst-spacing ${bgClass} z-index-1 p-relative`}>
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="tp-brand-wrap">
                        <div className="tp-brand-slide-active tp-slider-transition">
                            <Marquee speed={50} gradient={false} autoFill={true}>
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
            </div>
        </div>
    );
};

export default AboutModernBrands;
