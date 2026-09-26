"use client";

import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";

const testimonials = [
    {
        quote: "Une direction qui coordonne les expertises du groupe afin de donner aux projets un cadre clair, fiable et durable.",
        name: "Direction ITEC Solutions",
        company: "Pilotage et coordination du groupe",
    },
    {
        quote: "Notre développement repose sur l’écoute des territoires, la transmission des savoir-faire et des partenariats de confiance.",
        name: "Direction ITEC Solutions",
        company: "Une ambition partagée",
    },
    {
        quote: "Les projets sont pilotés avec la même exigence : qualité technique, cohérence d’ensemble et respect des engagements.",
        name: "Direction ITEC Solutions",
        company: "Exigence et responsabilité",
    },
];

const AboutCreativeTestimonial = () => {
    const progressRef = useRef<HTMLSpanElement | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);
    const isDark = useIsDarkRoute();
    const { playVideo } = useVideoModal();

    const onSwiperInit = (swiper: SwiperClass): void => {
        swiperRef.current = swiper;

        swiper.on(
            "autoplayTimeLeft",
            (_swiper: SwiperClass, _time: number, progress: number) => {
                if (progressRef.current) {
                    progressRef.current.style.transform = `scaleX(${1 - progress})`;
                }
            }
        );
    };

    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const descColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const quoteColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const nameColor = isDark ? "tp-text-common-white" : ""; // light mode default color
    const companyColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    return (
        <div className="tp-testimonial-area pt-140 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-service-title-wrap mb-60 tp_fade_anim" data-delay=".4" data-fade-from="left">
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 ${textColor} fs-16 mb-35`}>
                                <span className="borders d-inline-block"></span>Équipe dirigeante
                            </span>
                            <p className={`tp-ff-heading fs-25 fw-500 ${descColor} tp-service-para`}>
                                Une équipe dirigeante engagée au service<br />
                                d’une vision commune et de projets<br />
                                menés avec responsabilité.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-45 tp_fade_anim" data-delay=".4" data-fade-from="right">
                            <h2 className={`tp-section-title fs-70 fs-xs-40 fw-700 text-uppercase ${textColor}`}>Équipe dirigeante</h2>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-testimonial-thumb-wrap">
                            <div className="row align-items-end">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="tp-testimonial-agents mb-90 tp_fade_anim" data-delay=".4">
                                        <h3 className={`fs-70 fw-500 ${textColor}`}>01</h3>
                                        <span className={`tp-ff-heading fw-700 fs-18 ${textColor}`}>vision commune</span>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7">
                                    <div className="tp-testimonial-thumb p-relative d-inline-block mb-30 ml-10 tp_fade_anim" data-delay=".5">
                                        <img src="/assets/img/testimonial/thumb.jpg" alt="Testimonial Agency Thumbnail" />
                                        <div className="tp-video-main tp-testimonial-video">
                                            <button onClick={() => playVideo("go7QYaQR494")} className="tp-hero-video-btn popup-video">
                                                <span>
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.875 4.75L4.67498 0.625C4.29998 0.4 3.84998 0.25 3.39998 0.25C1.97498 0.25 0.849976 1.375 0.849976 2.8V11.2C0.849976 12.625 1.97498 13.75 3.39998 13.75C3.84998 13.75 4.29998 13.6 4.67498 13.375L11.95 9.175C12.325 8.95 12.625 8.65 12.85 8.275C13.525 7.075 13.15 5.5 11.875 4.75Z" fill="#030303" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                        <div className="tp-testimonial-slider-wrap mt-40 p-relative h-100">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={1}
                                loop={true}
                                spaceBetween={0}
                                speed={1000}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    el: "#paginations",
                                    type: "custom",
                                    renderCustom: function (swiper, current, total) {
                                        const zero = total > 9 ? "" : "0";
                                        return `
                                            <div class="shop-slider-pagination">
                                                <span>${zero + current}</span>
                                                <span>${zero + total}</span>
                                            </div>
                                        `;
                                    },
                                }}
                                onSwiper={onSwiperInit}
                                className="tp-testimonial-slider-active"
                            >
                                {testimonials.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="tp-testimonial-slider-item">
                                            <p className={`tp-ff-heading fs-35 fs-sm-25 fw-500 ${quoteColor} lh-120-per mb-30`}>
                                                {item.quote}
                                            </p>
                                            <div>
                                                <h5 className={`fs-25 mb-0 ${nameColor}`}>{item.name}</h5>
                                                <span className={`fs-18 fw-400 ${companyColor}`}>{item.company}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="fraction-wrapper">
                                <div id="paginations"></div>
                                <div className="shop-slider-progress-bar">
                                    <span ref={progressRef}></span>
                                </div>
                            </div>
                            <div className="tp-testimonial-thumb-2 tp_fade_anim" data-delay=".7">
                                <img src="/assets/img/testimonial/thumb-2.jpg" alt="Author Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCreativeTestimonial;
