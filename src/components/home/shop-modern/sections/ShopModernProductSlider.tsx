"use client";
import { featured_shop_slider } from "@/constant/swiper";
import ProductSliderItem from "../components/ProductSliderItem";
import { ShopBorderShape } from "@/svg/BorderLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopCategoryArrowIcon } from "@/svg";
import { Navigation } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

// data
const featuredProducts = [
  {
    id: 1,
    title: ["Clothing", "Collection 2025"],
    image: "/assets/img/update/product/slider/clothing-9.png",
    price: 102,
    oldPrice: 226,
    rating: 5,
  },
  {
    id: 2,
    title: ["Boys Graphic", "T-Shirt"],
    image: "/assets/img/update/product/slider/clothing-13.png",
    price: 85,
    oldPrice: 140,
    rating: 4,
  },
  {
    id: 3,
    title: ["Mens Jacket", "Premium Cotton"],
    image: "/assets/img/update/product/slider/clothing-5.png",
    price: 180,
    oldPrice: 260,
    rating: 5,
  },
  {
    id: 4,
    title: ["Vera Bradley", "Straw Tote Bag"],
    image: "/assets/img/update/product/slider/bag-5.png",
    price: 140,
    oldPrice: 200,
    rating: 4,
  },
];

// main component
const ShopModernProductSlider = () => {
    const isDarkTheme = useIsDarkRoute();

    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const featuredSliderStyles  = {
        backgroundColor: !isDarkTheme ? "#eff1f5" : "",
        backgroundClass: isDarkTheme ? "tp-bg-grey-8" : "",
    };

    return (
        <div
            className={`al-featured-slider-area fix pt-95 pb-120 ${featuredSliderStyles .backgroundClass}`}
            style={{ backgroundColor:featuredSliderStyles .backgroundColor }}
        >
            <div className="container">
                {/* title */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-section-shop-title-wrapper mb-50">
                            <span className="al-section-shop-subtitle">
                                Shop by Category <ShopBorderShape />
                            </span>
                            <h3 className="al-section-shop-title">
                                This {"Week's"} Featured
                            </h3>
                        </div>
                    </div>
                </div>

                {/* slider */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-featured-shop-slider">
                            <div className="al-featured-shop-slider-active">
                                <Swiper
                                    modules={[Navigation]}
                                    {...featured_shop_slider}
                                >
                                    {featuredProducts.map((item) => (
                                        <SwiperSlide key={item.id} className="al-featured-shop-item p-relative z-index-1" style={{ backgroundColor: "#fff" }}>
                                            <ProductSliderItem item={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* arrows */}
                            <div className="al-featured-shop-slider-arrow mt-45">
                                <button className="al-featured-shop-slider-button-prev">
                                    <ShopCategoryArrowIcon direction="left" />
                                </button>
                                <button className="al-featured-shop-slider-button-next">
                                    <ShopCategoryArrowIcon direction="right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernProductSlider;