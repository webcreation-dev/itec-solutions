"use client";

import { useState } from "react";
import Link from "next/link";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeaderButtonArrow } from "@/svg";

const socialLinks = [
    { icon: "fa-linkedin", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-facebook", href: "#" },
];

// Images provisoires du template : elles seront remplacées par les visuels ITEC.
const heroSlides = [
    {
        image: "/assets/projets/umami.webp",
        title: "Umami",
        detail: "Genève · Une adresse de goût, du studio au 5 pièces",
        href: "/references",
    },
    {
        image: "/assets/projets/st%20joriz.jpg",
        title: "TAO",
        detail: "Saint-Jorioz, 377 route du Berlet · 25 logements du 2 au 4 pièces",
        href: "/references",
    },
    {
        image: "/assets/projets/annemmasse.jpg",
        title: "Luminence Garden",
        detail: "Annemasse, 18 rue de Valeury · 75 logements du 2 au 5 pièces",
        href: "/references",
    },
    {
        image: "/assets/projets/ayze%20bonneville.jpg",
        title: "Privilège",
        detail: "Ayze / Bonneville, impasse de Pertus · 54 appartements du studio au 4 pièces duplex",
        href: "/references",
    },
];

const ArchitectureHero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const currentProject = heroSlides[activeSlide];

    return (
        <div className="al-hero-archi-area al-hero-archi-ptb tp-section-spacing bg-position bg-position-md-left p-relative z-index-1">
            <Swiper
                className="itec-architecture-hero-slider"
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={850}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                allowTouchMove={false}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.image}>
                        <div
                            className="itec-architecture-hero-slide"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="itec-architecture-hero-caption">
                <span className="itec-architecture-hero-project-title">{currentProject.title}</span>
                <p className="itec-architecture-hero-project-detail">{currentProject.detail}</p>
                <Link className="itec-architecture-hero-project-link tp-btn-switch-animation" href={currentProject.href}>
                    <span className="d-flex align-items-center justify-content-center">
                        <span className="btn-text">Voir le projet</span>
                        <span className="btn-icon"><HeaderButtonArrow /></span>
                        <span className="btn-icon"><HeaderButtonArrow /></span>
                    </span>
                </Link>
            </div>
            <div className="container-fluid container-1750">
                <div className="row">
                    <div className="col-lg-12">
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
