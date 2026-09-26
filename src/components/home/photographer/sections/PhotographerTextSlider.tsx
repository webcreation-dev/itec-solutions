"use client";
import { al_text_slide_pg } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brand_text_items } from "@/data/brand-data";
import Image from "next/image";

const PhotographerTextSlider = () => {
    const sliderItems = brand_text_items.find(item => item.id === 3)?.photographer || [];
    return (
        <section className="al-text-pg-slider-area fix">
            <div className="al-text-pg-slider-wrap">
                <div className="al-text-pg-slider-active tp-slider-transition">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...al_text_slide_pg}
                    >
                        {sliderItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="al-text-pg-slider-item d-flex align-items-center">
                                    <span>{item}</span>
                                    <Image
                                        src="/assets/img/update/text/shape.png"
                                        alt="shape"
                                        width={28}
                                        height={28}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PhotographerTextSlider;