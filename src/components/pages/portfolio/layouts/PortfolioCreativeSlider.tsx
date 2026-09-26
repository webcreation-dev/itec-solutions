"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard, EffectCreative } from "swiper/modules";
import { SmartLink } from "@/components/common";

interface SliderItem {
    id: number;
    category: string;
    title: string;
    img: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        category: "Development",
        title: "Minimalist",
        img: "/assets/img/portfolio/mix/thumb.jpg",
    },
    {
        id: 2,
        category: "Branding",
        title: "Showcase",
        img: "/assets/img/portfolio/mix/thumb-2.jpg",
    },
    {
        id: 3,
        category: "Design",
        title: "Geometric",
        img: "/assets/img/portfolio/mix/thumb-3.jpg",
    },
    {
        id: 4,
        category: "Branding",
        title: "Nature",
        img: "/assets/img/portfolio/mix/thumb-4.jpg",
    },
];

const PortfolioCreativeSlider = () => {
    return (
        <main>
            <div className="tp-portfolio-creative-wrap fix p-relative">
                <div className="tp-portfolio-creative-slider-main">
                    <div className="container-fluid container-1800">
                        <div className="row">
                            <div className="col-12">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard, EffectCreative]}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    autoHeight={true}
                                    effect="creative"
                                    creativeEffect={{
                                        prev: {
                                            translate: [0, 0, -400],
                                        },
                                        next: {
                                            translate: ["100%", 0, 0],
                                        },
                                    }}
                                    speed={1500}
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    mousewheel={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    navigation={{
                                        nextEl: ".tp-portfolio-mix-button-next",
                                        prevEl: ".tp-portfolio-mix-button-prev",
                                    }}
                                    pagination={{
                                        el: ".tp-portfolio-creative-slider-main .swiper-pagination",
                                        clickable: true,
                                        renderBullet: (index, className) => {
                                            return `<span class="${className}">
                                                <svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">
                                                    <circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#000" stroke-opacity="1" stroke-width="1px"></circle> 
                                                    <circle cx="8" cy="8" r="3" fill="#000"></circle>
                                                </svg>
                                            </span>`;
                                        },
                                    }}
                                    className="swiper tp-portfolio-creative-slider-active"
                                >
                                    {sliderData.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div
                                                className="tp-portfolio-creative-item bg-position"
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            >
                                                <div className="tp-portfolio-creative-content">
                                                    <span className="tp-portfolio-slicer-category">{item.category}</span>
                                                    <h2 className="tp-portfolio-slicer-title">
                                                        <SmartLink href="/portfolio-details-creative">
                                                            {item.title}
                                                        </SmartLink>
                                                    </h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
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
                    
                    <div className="swiper-pagination"></div>
                    
                    <div className="tp-portfolio-revealing-slider-social tp-portfolio-creative-social">
                        <a className="tp-hover-btn-item" href="#">Fb</a>
                        <a className="tp-hover-btn-item" href="#">In</a>
                        <a className="tp-hover-btn-item" href="#">Be</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioCreativeSlider;
