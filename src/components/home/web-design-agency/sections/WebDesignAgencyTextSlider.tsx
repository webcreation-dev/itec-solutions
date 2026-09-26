"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderArrowRight } from "@/svg";

const slides = [
    { left: "Design", right: "development" },
    { left: "Design", right: "development" },
    { left: "Research", right: "development" },
    { left: "Design", right: "Wireframe" },
    { left: "High Fidelity", right: "Design" },
    { left: "Design", right: "development" },
    { left: "Design", right: "development" },
    { left: "Design", right: "development" },
    { left: "Research", right: "development" },
    { left: "Design", right: "Wireframe" },
];

const WebDesignAgencyTextSlider = () => {
    return (
        <div className="tp-text-slider-area pt-25 pb-25 tp-bg-theme-primary">
            <div className="tp-text-slider-active tp-slider-transition">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...tp_brand_slide_active}
                >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="tp-text-slider-item">
                                <span>{item.left}</span>
                                <span className="icons">
                                    <SliderArrowRight />
                                </span>
                                <span>{item.right}</span>
                                <span className="borders"></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default WebDesignAgencyTextSlider;