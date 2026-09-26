"use client";
import { creative_brand_slider_active } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brandImages = [
    "brand-1.png",
    "brand-6.png",
    "brand-3.png",
    "brand-4.png",
    "brand-5.png",
    "brand-6.png",
    "brand-1.png",
    "brand-3.png",
    "brand-5.png",
    "brand-3.png",
    "brand-4.png",
    "brand-5.png",
];

const AIAgencyBrand = () => {
    return (
        <div className="creative-brand-area pb-100">
            <div className="creative-brand-wrapper ais-brand-blur">
                <div className="creative-brand-active tp-slider-transition">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...creative_brand_slider_active}
                    >
                        {brandImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="creative-brand-item">
                                    <img
                                        src={`/assets/img/update-2/brand/${img}`}
                                        alt={`brand-${index + 1}`}
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

export default AIAgencyBrand;