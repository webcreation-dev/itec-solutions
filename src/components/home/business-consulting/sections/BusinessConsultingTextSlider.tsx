"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import TextSlideItem from "../components/TextSlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const textSliderData = [
    "Your Growth",
    "Our Expertise",
    "Your Growth",
    "Our Expertise",
    "Your Growth",
    "Our Expertise",
    "Your Growth",
    "Our Expertise",
];

const BusinessConsultingTextSlider = () => {
    return (
        <div className="tp-text-slider-area pb-110">
            <div className="tp-text-cst-slide-active tp-slider-transition">
                <Swiper
                    modules={[Autoplay]}
                    {...tp_brand_slide_active}
                >
                    {textSliderData.map((title, index) => (
                        <SwiperSlide key={index}>
                            <TextSlideItem key={index} title={title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BusinessConsultingTextSlider;