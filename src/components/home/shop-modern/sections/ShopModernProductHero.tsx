"use client";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "The Clothing Collection",
        image: "/assets/img/update/hero/shop/slider-1.png",
        bg: "#fffbf5",
    },
    {
        id: 2,
        title: "The Summer Collection",
        image: "/assets/img/update/hero/shop/slider-2.png",
        bg: "#fffbf5",
    },
    {
        id: 3,
        title: "Amazing New designs",
        image: "/assets/img/update/hero/shop/slider-3.png",
        bg: "#fffbf5",
    },
];

const ShopModernProductHero = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const heroStyles = {
        bgColor: isDarkTheme ? "tp-bg-grey-8" : "",
    }
    // -------------------------------

    return (
        <div className="al-hero-area al-hero-shop-spacing fix p-relative z-index-1">
            <div className="al-hero-shop-active">
                <Swiper
                    modules={[Pagination, EffectFade]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    effect='fade'
                    pagination={{
                        el: ".al-hero-shop-dot",
                        clickable: true,
                    }}
                >
                    {slides.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className={`al-hero-shop-item p-relative d-flex align-items-end ${heroStyles.bgColor}`}
                            style={{ backgroundColor: !isDarkTheme ? item.bg : "" }}
                        >
                            {/* shape */}
                            <div className="al-hero-shop-shape">
                                <Image
                                    width={231}
                                    height={100}
                                    className="al-hero-shop-shape-1"
                                    src="/assets/img/update/hero/shop/shape-1.png"
                                    alt="shape"
                                />
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* content */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="al-hero-shop-content">
                                            <span>New Arrivals 2025</span>
                                            <h3 className="al-hero-shop-title">{item.title}</h3>
                                            <div className="al-hero-shop-btn">
                                                <SmartLink
                                                    href="/shop"
                                                    className="al-shop-btn al-shop-btn-border"
                                                >
                                                    Shop Collection
                                                </SmartLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="al-hero-shop-thumb-wrapper p-relative">
                                            <div className="al-hero-shop-thumb-shape">
                                                <Image
                                                    width={43}
                                                    height={41}
                                                    className="al-hero-shop-thumb-shape-1"
                                                    src="/assets/img/update/hero/shop/shape-2.png"
                                                    alt="shape"
                                                />
                                                <Image
                                                    width={24}
                                                    height={24}
                                                    className="al-hero-shop-thumb-shape-2"
                                                    src="/assets/img/update/hero/shop/shape-3.png"
                                                    alt="shape"
                                                />
                                            </div>

                                            <div className="al-hero-shop-thumb text-end">
                                                <span className="al-hero-shop-thumb-gradient"></span>
                                                <Image
                                                    className="img-fluid w-auto h-auto"
                                                    width={500}
                                                    height={740}
                                                    src={item.image}
                                                    alt="hero slide image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="al-hero-shop-dot-wrap">
                    <div className="al-hero-shop-dot"></div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernProductHero;