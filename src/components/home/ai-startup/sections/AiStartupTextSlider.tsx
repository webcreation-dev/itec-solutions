"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import { aiSliderOne, aisliderTwo } from "@/data/brand-data";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AiStartupTextSlider = () => {
    return (
        <div className="tp-text-ai-slider-wrap pb-50">
            {/* Slider 1 */}
            <div className="tp-text-ai-slider-single tp-bg-common-angry">
                <div className="tp-text-ai-slider-active tp-slider-transition">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...tp_brand_slide_active}
                    >
                        {aiSliderOne.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="tp-text-ai-slider-content text-center tp-bg-common-angry">
                                    <p className="mb-0 tp-ff-jakarta fw-500 fs-52 fs-md-40 ls-m-4 tp-text-common-white">
                                        {item.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Slider 2 */}
            <div className="tp-text-ai-slider-single tp-text-ai-slider-single-2 tp-bg-common-black-5">
                <div className="tp-text-ai-slider-active tp-slider-transition">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        dir="rtl"
                        {...tp_brand_slide_active}
                    >
                        {aisliderTwo.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="tp-text-ai-slider-content text-center tp-bg-common-black-5">
                                    <p className="mb-0 tp-ff-jakarta fw-500 fs-52 fs-md-40 ls-m-4 tp-text-grey-5">
                                        {item.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AiStartupTextSlider;