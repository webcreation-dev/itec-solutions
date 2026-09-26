"use client";

import { brand_text_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

interface BrandTextSliderProps {
    items: string[];
    wrapperClass?: string;      // outer div class
    slideItemClass?: string;    // slide inner item class
    titleClass?: string;        // h3 class
    swiperOptions?: SwiperOptions; // override swiper params
}

const BrandTextSlider: React.FC<BrandTextSliderProps> = ({
    items,
    wrapperClass = "tp-brand-active",
    slideItemClass = "cst-hero-item",
    titleClass = "cst-hero-item-title",
    swiperOptions = {},
}) => {

    // Merge default params + custom params
    const mergedSwiperOptions: SwiperOptions = {
        ...brand_text_slider_params,
        ...swiperOptions,
    };

    return (
        <div className={`${wrapperClass} tp-slider-transition`}>
            <Swiper modules={[FreeMode, Autoplay]} {...mergedSwiperOptions}>
                {items.map((text, index) => (
                    <SwiperSlide key={index}>
                        <div className={slideItemClass}>
                            <h3 className={titleClass}>{text}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandTextSlider;