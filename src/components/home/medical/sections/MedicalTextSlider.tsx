"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { tp_text_md_slider_active } from "@/constant/swiper";
import { useIsDarkRoute } from "@/hooks";

const slides = [
    "Health Questions Find Your Clarity Here",
    "Health Questions Find Your Clarity Here",
    "Health Questions Find Your Clarity Here",
];

const MedicalTextSlider = () => {
    const isDark = useIsDarkRoute();
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";

    return (
        <div className="tp-text-md-slider-area pb-95">
            <div className="tp-text-md-slider-active tp-slider-transition">
                <Swiper
                    {...tp_text_md_slider_active}
                    modules={[Autoplay, FreeMode]}>
                    {slides.map((text, i) => (
                        <SwiperSlide key={i}>
                            <div className="tp-text-md-top-text">
                                <h2 className={`tp-text-md-title tp-ff-familjen ls-m-3 mb-0 ${titleColor}`}>{text}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default MedicalTextSlider;
