"use client";
import ProductCategoryItem from "../components/ProductCategoryItem";
import { category_shop_slider } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopBorderShape } from "@/svg/BorderLine";
import { Scrollbar } from "swiper/modules";

// Data
const categories = [
    { img: "/assets/img/update/cetagory/category-1.jpg" },
    { img: "/assets/img/update/cetagory/category-2.jpg" },
    { img: "/assets/img/update/cetagory/category-3.jpg" },
    { img: "/assets/img/update/cetagory/category-4.jpg" },
    { img: "/assets/img/update/cetagory/category-5.jpg" },
    { img: "/assets/img/update/cetagory/category-6.jpg" },
];

const ShopModernProductCategory = () => {
    return (
        <div className="al-category-shop-area pb-95 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-section-shop-title-wrapper text-center mb-50">
                            <span className="al-section-shop-subtitle">
                                Shop by Category
                                <ShopBorderShape />
                            </span>
                            <h3 className="al-section-shop-title">
                                Popular on the aleric store.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-category-shop-slider">
                            <div className="al-category-shop-slider-active mb-50">
                                <Swiper
                                    modules={[Scrollbar]}
                                    {...category_shop_slider}
                                >
                                    {categories.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductCategoryItem item={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="swiper-scrollbar al-swiper-shop-scrollbar al-swiper-scrollbar-drag"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernProductCategory;