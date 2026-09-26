"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { brand_slider } from "@/constant/swiper";

const brandLogos = [
    "brand-1.png",
    "brand-2.png",
    "brand-3.png",
    "brand-4.png",
    "brand-5.png",
    "brand-6.png",
    "brand-3.png",
    "brand-1.png",
    "brand-2.png",
    "brand-3.png",
    "brand-4.png",
    "brand-5.png",
    "brand-6.png",
    "brand-3.png",
    "brand-1.png",
    "brand-2.png",
    "brand-3.png",
    "brand-4.png",
    "brand-5.png",
    "brand-6.png",
    "brand-3.png",
];

const ConstructionBrandLogoSlider = () => {
    return (
        <div className="ar-brand-area">
            <div
                className="ar-brand-bg"
                style={{ backgroundImage: `url(/assets/img/update-2/hero/hero-2/hero-bg-shape.png)` }}>
                <div className="ar-brand-active tp-slider-transition">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...brand_slider}
                    >
                        {brandLogos?.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="ar-brand-item">
                                    <img
                                        src={`/assets/img/update-2/brand/cns/${logo}`}
                                        alt={`brand-${index}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ConstructionBrandLogoSlider;