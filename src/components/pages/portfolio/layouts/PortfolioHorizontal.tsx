"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard, Parallax } from "swiper/modules";
import { SmartLink } from "@/components/common";

interface SliderItem {
    id: number;
    tag?: string;
    title: string;
    description: React.ReactNode;
    img: string;
    link: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        tag: "OUR VISION",
        title: "DESIGN",
        description: (
            <>
                Credibly leverage existing business experiences through
                <br />
                magnetic mindshare. Synergistically exploit efficient
                <br />
                partnerships world-class applications.
            </>
        ),
        img: "/assets/img/portfolio/portfolio-horizontal/thumb.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 2,
        tag: "INSPIRATION",
        title: "MOTION",
        description: (
            <>
                Credibly leverage existing business experiences through
                <br />
                magnetic mindshare. Synergistically exploit efficient
                <br />
                partnerships world-class applications.
            </>
        ),
        img: "/assets/img/portfolio/portfolio-horizontal/thumb-2.jpg",
        link: "/portfolio-details-gallery",
    },
    {
        id: 3,
        title: "ENGINE",
        description: (
            <>
                Credibly leverage existing business experiences through
                <br />
                magnetic mindshare. Synergistically exploit efficient
                <br />
                partnerships world-class applications.
            </>
        ),
        img: "/assets/img/portfolio/portfolio-horizontal/thumb-3.jpg",
        link: "/portfolio-details-gallery",
    },
];

const PortfolioHorizontal = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <main>
            <div className="tp-portfolio-horizontal-slider">
                <div className="banner-horizental">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard, Parallax]}
                        direction="horizontal"
                        effect="slide"
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        parallax={true}
                        speed={1600}
                        dir="rtl"
                        loop={true}
                        mousewheel={true}
                        keyboard={{
                            enabled: true,
                            onlyInViewport: true,
                        }}
                        navigation={{
                            nextEl: ".tp-portfolio-horizontal-button-next",
                            prevEl: ".tp-portfolio-horizontal-button-prev",
                        }}
                        pagination={{
                            el: ".tp-portfolio-horizontal-pagination-area .swiper-pagination",
                            type: "progressbar",
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex + 1);
                        }}
                        className="swiper tp-portfolio-horizontal-active"
                    >
                        {sliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className="tp-portfolio-horizontal-inner bg-position"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                    data-swiper-parallax="1000"
                                >
                                    <div className="tp-portfolio-horizontal-content" data-swiper-parallax="2000">
                                        <div className="tp-portfolio-horizontal-title-wrap">
                                            {item.tag && (
                                                <span className="tp-portfolio-horizontal-tag">
                                                    {item.tag}
                                                </span>
                                            )}
                                            <h2 className="tp-portfolio-horizontal-title">
                                                <SmartLink href={item.link}>
                                                    {item.title}
                                                </SmartLink>
                                            </h2>
                                        </div>
                                        <p className="tp-portfolio-horizontal-disc">
                                            {item.description}
                                        </p>
                                        <div className="tp-portfolio-horizontal-btn-wrap">
                                            <SmartLink className="tp-portfolio-horizontal-btn" href={item.link}>
                                                <div className="tp-portfolio-horizontal-btn-circle">
                                                    <div className="circle">
                                                        <div className="circle-fill"></div>
                                                        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                            <circle cx="25" cy="25" r="23"></circle>
                                                        </svg>
                                                        <div className="circle-icon">
                                                            <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tp-portfolio-horizontal-btn-label">
                                                    <div className="tp-portfolio-horizontal-btn-text">Take A Look</div>
                                                    <div className="tp-portfolio-horizontal-btn-border"></div>
                                                </div>
                                            </SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-button-wrapper tp-portfolio-horizontal-button-wrapper">
                            <div className="tp-portfolio-horizontal-button-next">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="tp-portfolio-horizontal-button-prev">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                        </div>

                        <div className="tp-portfolio-horizontal-pagination-area">
                            <h5 className="slide-range one">0{activeIndex}</h5>
                            <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
                            <h5 className="slide-range three">0{sliderData.length}</h5>
                        </div>
                    </Swiper>
                </div>
            </div>
        </main>
    );
};

export default PortfolioHorizontal;
