"use client";
import { trending_shop_slider_active } from "@/constant/swiper";
import { ShopBorderShape } from "@/svg/BorderLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmartLink } from "@/components/common";
import { Pagination } from "swiper/modules";
import TrendingItem from "./TrendingItem";
import { BannerArrowIcon } from "@/svg";

// data
const trendingProducts = [
    {
        id: 1,
        title: "Double-Breasted Trench Coat",
        image: "/assets/img/product/product-8.jpg",
        price: 260,
        tags: ["Trench Coat", "Outerwear"],
        badge: "HOT",
    },
    {
        id: 2,
        title: "Polarized Sunglasses",
        image: "/assets/img/product/product-1.jpg",
        price: 220,
        tags: ["Sunglasses", "Accessories"],
        badge: "HOT",
    },
    {
        id: 3,
        title: "V-Neck Pure Cotton T-shirt",
        image: "/assets/img/product/product-2.jpg",
        price: 190,
        tags: ["T-shirt", "Cotton", "Casual"],
    },
    {
        id: 4,
        title: "Polarized Sunglasses",
        image: "/assets/img/product/product-1.jpg",
        price: 220,
        tags: ["Sunglasses", "Accessories"],
        badge: "HOT",
    },
];

// main component
const ShopModernTrending = () => {
    return (
        <div className="al-trending-shop-area pt-140 pb-150">
            <div className="container">
                <div className="row justify-content-center">
                    {/* left */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="al-trending-shop-wrapper">
                            <div className="al-section-shop-title-wrapper mb-50">
                                <span className="al-section-shop-subtitle">
                                    More to Discover
                                    <ShopBorderShape />
                                </span>
                                <h3 className="al-section-shop-title">
                                    Trending Arrivals
                                </h3>
                            </div>

                            <div className="al-trending-shop-slider">
                                <div className="al-trending-shop-slider-active">
                                    <Swiper
                                        modules={[Pagination]}
                                        {...trending_shop_slider_active}
                                    >
                                        {trendingProducts.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <TrendingItem {...item} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className="al-trending-shop-slider-dot text-center mt-45"></div>
                            </div>
                        </div>
                    </div>
                    {/* right banner */}
                    <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10">
                        <div className="al-trending-shop-banner p-relative ml-35">
                            <div
                                className="al-trending-shop-banner-thumb w-img bg-position"
                                style={{
                                    backgroundImage: `url(/assets/img/update/product/traending/trending-banner.jpg)`,
                                }}
                            ></div>

                            <div className="al-trending-shop-banner-content">
                                <h3 className="al-trending-shop-banner-title">
                                    <SmartLink href="/shop">
                                        Short Sleeve Tunic <br /> Tops Casual Swing
                                    </SmartLink>
                                </h3>
                                <div className="al-trending-shop-banner-btn">
                                    <SmartLink
                                        href="/shop"
                                        className="al-shop-btn al-shop-btn-border al-shop-btn-border-white-sm"
                                    >
                                        Explore More{" "} <BannerArrowIcon />
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernTrending;