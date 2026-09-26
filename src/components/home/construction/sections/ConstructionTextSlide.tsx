"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// export default ConstructionTextSlide;
const slides = [
    {
        id: 1,
        text: "savings since 2008",
        stroke: true,
    },
    {
        id: 2,
        text: "Aleric has generated $250M",
        stroke: false,
    },
    {
        id: 3,
        text: "savings since 2008",
        stroke: true,
    },
    {
        id: 4,
        text: "Aleric has generated $250M",
        stroke: false,
    },
    {
        id: 5,
        text: "savings since 2008",
        stroke: true,
    },
    {
        id: 6,
        text: "Aleric has generated $250M",
        stroke: false,
    },
];

const ConstructionTextSlide = () => {
    return (
        <div className="crp-text-slider-wrap p-relative text_slide_overflow">
            {/* Shapes */}
            <div className="crp-text-shape-wrap app">
                <Image
                    width={180}
                    height={180}
                    className="crp-text-shape-1"
                    src="/assets/img/update-2/text-slider/text-slide-2.png"
                    alt="shape"
                />
                <Image
                    width={150}
                    height={149}
                    className="crp-text-shape-2 tp-live-anim-spin"
                    src="/assets/img/update-2/text-slider/text-slider-shape-1.png"
                    alt="shape"
                />
            </div>

            {/* Slider */}
            <div className="app-text-slider-color crp-text-slider-active pb-0 tp-slider-transition">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={40}
                    {...tp_brand_slide_active}
                >
                    {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className={`crp-text-slider-item ${item.stroke ? "stroke-text" : ""
                                    }`}
                            >
                                <span>{item.text}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ConstructionTextSlide;