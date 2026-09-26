"use client";
import { ItHeroDarkShapeIcon, ItHeroShapeIcon } from "@/svg";
import { tp_brand_slide_active } from "@/constant/swiper";
import HeroCounters from "../components/HeroCounters";
import { brand_text_items } from "@/data/brand-data";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsDarkRoute } from "@/hooks";
import Link from "next/link";

const ITSolutionHero = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // hero styles 
    // -------------------------------
    const heroStyles = {
        textColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        arrowFillColor: isDark ? "#fff" : "#030303",
    };
    const sectionBg = isDark ? "/assets/img/hero/it/bg-black.png" : "/assets/img/hero/it/bg.png";
    const shapeIcon = isDark ? ItHeroDarkShapeIcon : ItHeroShapeIcon;
    // -------------------------------

    return (
        <div className="tp-hero-area pre-header tp-hero-it-spacing fix bg-position p-relative"
            style={{ backgroundImage: `url(${sectionBg})` }}>
            <span className="tp-hero-it-shape">
                {shapeIcon()}
            </span>
            <div className="tp-hero-social tp-hero-it-social d-flex align-items-center">
                <span className="d-flex align-items-center mb-5">Follow
                    <svg className="mt-15" width="6" height="41" viewBox="0 0 6 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 41L5.88675 36H0.113249L3 41ZM2.5 1L2.5 36.5H3.5L3.5 1H2.5Z" fill={heroStyles.arrowFillColor} />
                    </svg>
                </span>
                <Link href="#"><i className="fa-brands fa-dribbble"></i></Link>
                <Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                <Link href="#"><i className="fa-brands fa-behance"></i></Link>
                <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
            </div>
            <div className="container-fluid container-1524 containers">
                <div className="row align-items-end">
                    <div className="col-xxl-8 col-xl-7 col-lg-6">
                        <div className="tp-hero-it-content mb-40">
                            <h2 className={`tp-hero-it-title tp-ff-inter fs-72 fs-sm-60 fs-xs-50 ls-m-4 ${heroStyles.textColor}`}>Developing<br /> Future-Ready <br /> <span className="tp-ff-playfair text-italic">It Solutions</span></h2>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                        <HeroCounters />
                    </div>
                    <div className="col-12">
                        <div className="tp-hero-it-bigtitle-wrap pt-95 tp_fade_anim" data-fade-from="top" data-delay=".7" data-ease="bounce">
                            <h2 className={`text tp-hero-it-bigtitle hero-display-big-title  ${heroStyles.textColor} tp-ff-inter ls-m-4`}>IT Solution.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-text-slider-area pt-25 pb-40">
                <div className="tp-text-it-slider-active tp-slider-transition">
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        {...tp_brand_slide_active}
                    >
                        {brand_text_items[3]?.itSolution?.map((item, index) => (
                            <SwiperSlide key={index} className="mr-5">
                                <div className="tp-text-it-slider-item">
                                    <span>{item}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionHero;