"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { SmartLink } from "@/components/common";
import { PhotoProviderWrapper } from "@/components/wrappers";
import { PhotoView } from "react-photo-view";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SwiperGL from "./swiper-gl.js";

interface SlicerItem {
    id: number;
    text: string;
    heading: string;
    img: string;
    link: string;
}

const sliderData: SlicerItem[] = [
    {
        id: 1,
        text: "Greetings, Traveler",
        heading: "Smart platform",
        img: "/assets/img/portfolio/mix/thumb.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 2,
        text: "Interactive Mind",
        heading: "World’s Relays",
        img: "/assets/img/portfolio/mix/thumb-2.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 3,
        text: "Greetings, Traveler!",
        heading: "Bright Captive",
        img: "/assets/img/portfolio/mix/thumb-3.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 4,
        text: "[ UI, Web Design ]",
        heading: "Top Paddock",
        img: "/assets/img/portfolio/mix/thumb-4.jpg",
        link: "/portfolio-details-creative",
    },
    {
        id: 5,
        text: "Digital platform",
        heading: "Royal Benz",
        img: "/assets/img/portfolio/mix/thumb-5.jpg",
        link: "/portfolio-details-creative",
    },
];

const PortfolioMixSlicer = () => {
    return (
        <main>
            <div className="tp-portfolio-mix-slider-wrap mix p-relative">
                <PhotoProviderWrapper>
                    <Swiper
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, SwiperGL]}
                        loop={false}
                        speed={1200}
                        effect="gl"
                        mousewheel={true}
                        keyboard={{
                            enabled: true,
                        }}
                        navigation={{
                            nextEl: ".tp-portfolio-mix-button-next",
                            prevEl: ".tp-portfolio-mix-button-prev",
                        }}
                        pagination={{
                            el: ".tp-portfolio-slicer-pagination",
                            clickable: true,
                        }}
                        className="swiper tp-portfolio-mix-slider"
                    >
                        {sliderData.map((item) => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                                <div className="tp-portfolio-mix-slider-item">
                                    <div className="tp-portfolio-mix-slider-image">
                                        <img className="swiper-gl-image" src={item.img} alt={item.heading} />
                                        <PhotoView src={item.img}>
                                            <span className="popup-image" style={{ cursor: "pointer" }}>
                                                <i className="fa-regular fa-arrows-maximize"></i>
                                            </span>
                                        </PhotoView>
                                    </div>
                                    <div className="tp-portfolio-mix-slider-content">
                                        <span className="tp-portfolio-revealing-slide-text">{item.text}</span>
                                        <h2 className="tp-portfolio-revealing-slide-heading">
                                            <SmartLink href={item.link}>{item.heading}</SmartLink>
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </PhotoProviderWrapper>

                <div className="tp-portfolio-mix-slider-navigation overflow-hidden">
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
                <div className="tp-portfolio-slicer-pagination has_fade_anim" data-fade-from="bottom" data-fade-offset="0"
                    data-on-scroll="0" data-delay="0.45"></div>
            </div>
        </main>
    );
};

export default PortfolioMixSlicer;
