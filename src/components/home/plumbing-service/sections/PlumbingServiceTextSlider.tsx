"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlumbingTextArrow } from "@/svg";
import { Autoplay } from "swiper/modules";

// data
const sliderItems = [
    "Reliable",
    "Affordable",
    "Electrical",
    "Plumbing",
    "Carpentry",
    "Lock Repair",
    "Painting",
    "Smart Home Setup",
    "Fast Service",
    "Gutter Cleaning",
];

// duplicate for loop effect 
const loopItems = [...sliderItems, ...sliderItems];

const PlumbingServiceTextSlider = () => {
    return (
        <div className="tp-text-slider-area tp-text-pb-slider tp-bg-theme-secondary">
            <div className="tp-text-slider-active tp-slider-transition">
                <Swiper
                    modules={[Autoplay]}
                    {...tp_brand_slide_active}
                >
                    {loopItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="tp-text-slider-item">
                                <span>{item}</span>
                                <span className="icons">
                                    <PlumbingTextArrow />
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PlumbingServiceTextSlider;