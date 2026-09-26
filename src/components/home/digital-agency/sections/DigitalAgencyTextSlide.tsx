"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowIconTen } from "@/svg";

const slideItems = [
    { first: "Design", second: "development" },
    { first: "Design", second: "development" },
    { first: "Research", second: "development" },
    { first: "Design", second: "Wireframe" },
    { first: "High Fidelity", second: "Design" },
    { first: "Design", second: "development" },
    { first: "Design", second: "development" },
    { first: "Design", second: "development" },
    { first: "Research", second: "development" },
    { first: "Design", second: "Wireframe" },
    { first: "High Fidelity", second: "Design" },
    { first: "Design", second: "development" },
];

const DigitalAgencyTextSlide = () => {
    return (
        <div className="tp-text-slider-area pt-25 pb-25 tp-bg-theme-primary">
            <div className="tp-text-slider-active tp-slider-transition">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...tp_brand_slide_active}
                >
                    {slideItems.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="tp-text-slider-item">
                                <span>{item.first}</span>
                                <span className="icons">
                                    <ArrowIconTen />
                                </span>
                                <span>{item.second}</span>
                                <span className="borders"></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DigitalAgencyTextSlide;