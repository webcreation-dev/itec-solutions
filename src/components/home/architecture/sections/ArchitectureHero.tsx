"use client";

import Link from "next/link";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const socialLinks = [
    { icon: "fa-linkedin", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-facebook", href: "#" },
];

// Images provisoires du template : elles seront remplacées par les visuels ITEC.
const heroSlides = [
    {
        image: "/assets/img/update/hero/archi/bg.jpg",
        title: "Les Gets Écolodge",
        detail: "Ensemble résidentiel de chalets · Livré en 2022",
    },
    {
        image: "/assets/img/update-2/portfolio/home-2/banner.jpg",
        title: "Résidence Horizon",
        detail: "Conception et réalisation d’un programme résidentiel",
    },
    {
        image: "/assets/img/portfolio/details/banner.jpg",
        title: "Domaine des Palmiers",
        detail: "Développement immobilier · Études en cours",
    },
];

const ArchitectureHero = () => {
    return (
        <div className="al-hero-archi-area al-hero-archi-ptb tp-section-spacing bg-position bg-position-md-left p-relative z-index-1">
            <Swiper
                className="itec-architecture-hero-slider"
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                effect="fade"
                speed={1100}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                allowTouchMove={false}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.image}>
                        <div
                            className="itec-architecture-hero-slide"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="itec-architecture-hero-caption">
                                <span>{slide.title}</span>
                                <p>{slide.detail}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container-fluid container-1750">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="al-hero-archi-shape d-none d-xl-block" data-lag="0.2" data-stagger="0.08" src="/assets/img/update/hero/archi/shape.png" alt="shape" />
                        <div className="al-hero-archi-social d-none d-xxl-block">
                            <ul>
                                <li>
                                    {socialLinks.map((item, i) => (
                                        <Link key={i} href={item.href}>
                                            <i className={`fa-brands ${item.icon}`}></i>
                                        </Link>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureHero;
