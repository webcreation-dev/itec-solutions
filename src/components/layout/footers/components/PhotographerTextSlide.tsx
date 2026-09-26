"use client";
import { al_footer_slide_pg } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = Array(6).fill("Went to reach out");

const PhotographerTextSlide = () => {
    return (
        <div className="al-footer-pg-text-slide">
            <div className="al-footer-pg-slide-active tp-slider-transition">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...al_footer_slide_pg}
                >
                    {slides.map((text, index) => (
                        <SwiperSlide key={index}>
                            <div className="al-footer-pg-text-wrap">
                                <span className="al-footer-pg-text">{text}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PhotographerTextSlide;