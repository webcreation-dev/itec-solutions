
"use client";
import Image from "next/image";
import { useState } from "react";

const services = [
    {
        title: "Construction BTP",
        bg: "/assets/img/update-2/service/ar/service-4.jpg",
    },
    {
        title: "Génie civil",
        bg: "/assets/img/update-2/service/ar/service-2.jpg",
    },
    {
        title: "Développement immobilier",
        bg: "/assets/img/update-2/service/ar/service-3.jpg",
    },
    {
        title: "Maîtrise d’œuvre",
        bg: "/assets/img/update-2/service/ar/service-1.jpg",
    },
];

const ConstructionService = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="cnt-service-mlr">
            <div className="ar-service-area ar-service-height p-relative fix">
                <div className="ar-service-title-box">
                    <span
                        className="cnt-section-subtitle text-white mb-20 tp_fade_anim"
                        data-delay=".3"
                    >
                        Services ITEC
                    </span>

                    <h3
                        className="tp-section-title-clash-600 text-white fs-60 mb-0 tp_fade_anim"
                        data-delay=".4"
                    >
                        Construire avec <br /> exigence
                    </h3>
                </div>

                {services.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`ar-service-item d-flex align-items-end justify-content-end ${activeIndex === index ? "active" : ""}`}
                    >
                        <div
                            className="ar-service-bg"
                            style={{ backgroundImage: `url(${item.bg})` }}
                        ></div>

                        <span className="ar-service-title">{item.title}</span>
                    </div>
                ))}
            </div>

            <div className="ar-scroll-image">
                <div className="ar-banner-shape d-flex align-items-center">
                    <Image
                        className="img-fluid"
                        width={1785}
                        height={25}
                        src="/assets/img/update-2/service/ar/banner-shape.png"
                        alt="banner shape"
                    />
                    <Image
                        className="img-fluid"
                        width={1785}
                        height={25}
                        src="/assets/img/update-2/service/ar/banner-shape.png"
                        alt="banner shape"
                    />
                </div>
            </div>
        </div>
    );
};

export default ConstructionService;
