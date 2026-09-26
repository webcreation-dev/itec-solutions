"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Controller, EffectCoverflow, Mousewheel, Keyboard, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { SmartLink } from "@/components/common";

const sliderData = [
    {
        id: 1,
        img: "/assets/img/portfolio/coverflow/portfolio-1.jpg",
        title: "AvoSculpt",
        link: "/portfolio-details/creative/avosculpt"
    },
    {
        id: 2,
        img: "/assets/img/portfolio/coverflow/portfolio-2.jpg",
        title: "SliceMaster",
        link: "/portfolio-details/creative/slicemaster"
    },
    {
        id: 3,
        img: "/assets/img/portfolio/coverflow/portfolio-3.jpg",
        title: "AvoEdge",
        link: "/portfolio-details/creative/avoedge"
    },
    {
        id: 4,
        img: "/assets/img/portfolio/coverflow/portfolio-4.jpg",
        title: "GreenGrip Cutter",
        link: "/portfolio-details/creative/greengrip-cutter"
    },
    {
        id: 5,
        img: "/assets/img/portfolio/coverflow/portfolio-5.jpg",
        title: "AvoSlice Pro",
        link: "/portfolio-details/creative/avoslice-pro"
    },
    {
        id: 6,
        img: "/assets/img/portfolio/coverflow/portfolio-6.jpg",
        title: "AvoSculpt",
        link: "/portfolio-details/creative/avosculpt"
    },
    {
        id: 7,
        img: "/assets/img/portfolio/coverflow/portfolio-7.jpg",
        title: "SliceMaster",
        link: "/portfolio-details/creative/slicemaster"
    },
    {
        id: 8,
        img: "/assets/img/portfolio/coverflow/portfolio-3.jpg",
        title: "AvoEdge",
        link: "/portfolio-details/creative/avoedge"
    },
    {
        id: 9,
        img: "/assets/img/portfolio/coverflow/portfolio-4.jpg",
        title: "GreenGrip Cutter",
        link: "/portfolio-details/creative/greengrip-cutter"
    },
    {
        id: 10,
        img: "/assets/img/portfolio/coverflow/portfolio-5.jpg",
        title: "AvoSlice Pro",
        link: "/portfolio-details/creative/avoslice-pro"
    }
];

const PortfolioCoverflowSliderArea = () => {
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className="coverflow-slider-main tp-portfolio-coverflow-main fix">
            <div className="coverflow-slider-wrap">
                <Swiper
                    modules={[Controller, EffectCoverflow, Mousewheel, Keyboard, Autoplay, Navigation]}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    loop={true}
                    effect="coverflow"
                    autoHeight={true}
                    mousewheel={true}
                    speed={1500}
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".tp-portfolio-mix-button-next",
                        prevEl: ".tp-portfolio-mix-button-prev",
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                    className="swiper coverflow-slider-active fix"
                >
                    {sliderData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="coverflow-slider-item">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            <div className="coverflow-slider-text-wrap">
                <Swiper
                    modules={[Controller]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    spaceBetween={30}
                    slidesPerView={1}
                    direction="vertical"
                    loop={true}
                    touchRatio={0.2}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    speed={1500}
                    className="swiper coverflow-slider-text-active fix"
                >
                    {sliderData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="coverflow-slider-item">
                                <div className="coverflow-slider-content text-center">
                                    <h4 className="coverflow-slider-title-sm">
                                        <SmartLink className="tp-line-white" href={item.link}>
                                            {item.title}
                                        </SmartLink>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="tp-portfolio-mix-slider-navigation navigation-white overflow-hidden">
                <div className="container-fluid container-1800">
                    <div className="slider-nav">
                        <div className="tp-portfolio-mix-button-prev nav-icon">
                            <i className="fa-solid fa-angle-left"></i>Prev
                        </div>
                        <div className="tp-portfolio-mix-button-next nav-icon">
                            Next<i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCoverflowSliderArea;