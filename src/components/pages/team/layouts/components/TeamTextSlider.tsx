"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useIsDarkRoute } from "@/hooks";

const TeamTextSlider = () => {
    const isDark = useIsDarkRoute();
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-1";

    const slideItems = [
        "France",
        "Sénégal",
        "Bénin",
    ];

    return (
        <div className="tp-text-slider-area pb-110">
            <div className="tp-text-cst-slide-active tp-slider-transition">
                <Marquee speed={60} gradient={false} autoFill={true}>
                    {slideItems.map((text, idx) => (
                        <div className="tp-text-cst-content" key={idx} style={{ paddingRight: "80px" }}>
                            <h2 className={`tp-text-cst-title fw-700 text-capitalize tp-ff-dm ${titleColor} d-flex align-items-center`}>
                                {text}
                                <span className="ml-35" style={{ display: "inline-block", verticalAlign: "middle" }}>
                                    <svg width="54" height="56" viewBox="0 0 54 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M49.5531 52.3138L30.8331 1.64509C30.5027 0.658035 29.6218 0 28.5206 0H25.4373C24.4462 0 23.4552 0.658035 23.1248 1.53542L4.29461 52.3138C3.96425 53.3008 2.97319 53.8492 1.98213 53.8492H0V55.3846H10.1309V53.8492H9.58027C7.9285 53.8492 6.7172 52.2041 7.2678 50.559L17.9493 21.1668C18.7201 18.9733 21.8034 19.083 22.5742 21.1668L32.4848 50.559C33.0354 52.0944 31.8241 53.7395 30.1724 53.7395V55.2749H53.0769V53.7395H51.8656C50.7644 53.9589 49.8835 53.3008 49.5531 52.3138Z" fill="#43BBC2" />
                                    </svg>
                                </span>
                            </h2>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TeamTextSlider;
