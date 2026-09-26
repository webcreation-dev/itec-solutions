"use client";
import { testimonial_shop_slider_active } from "@/constant/swiper";
import { testimonialItems } from "@/data/testimonial-data";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopTestimonialArrow } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const ShopModernTestimonial = () => {
    // Retrieve shop modern testimonial items for rendering
    const testimonials = testimonialItems[5].shopModern;

    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const testimonialSliderStyles = {
        backgroundColor: !isDarkTheme ? "#f6f6f6" : "",
        backgroundClass: isDarkTheme ? "tp-bg-grey-8" : "",
    };

    return (
        <div
            className={`al-testimonial-shop-area pt-130 pb-135 ${testimonialSliderStyles.backgroundClass}`}
            style={{ backgroundColor: testimonialSliderStyles.backgroundColor }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="al-testimonial-shop-slider p-relative z-index-1">
                            <div className="al-testimonial-shop-shape">
                                <span className="al-testimonial-shop-shape-gradient"></span>
                            </div>

                            <h3 className="al-testimonial-shop-section-title text-center">
                                The Review Are In
                            </h3>

                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-8 col-md-10">
                                    <div className="al-testimonial-shop-slider-active">
                                        <Swiper
                                            modules={[Pagination, Navigation]}
                                            {...testimonial_shop_slider_active}
                                        >
                                            {testimonials?.map((item) => (
                                                <SwiperSlide
                                                    key={item.id}
                                                    className="al-testimonial-shop-item text-center mb-20"
                                                >
                                                    <div className="al-testimonial-shop-rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} style={{ marginRight: "4px" }}>
                                                                <i className="fa-solid fa-star"></i>
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="al-testimonial-shop-content">
                                                        <p>{item.message}</p>
                                                    </div>

                                                    <div className="al-testimonial-shop-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div className="al-testimonial-shop-user d-flex align-items-center">
                                                            <div className="al-testimonial-shop-avater mr-10">
                                                                <Image
                                                                    src={item.avatar}
                                                                    alt={item.name}
                                                                    width={60}
                                                                    height={60}
                                                                />
                                                            </div>
                                                            <div className="al-testimonial-shop-user-info al-testimonial-shop-user-translate">
                                                                <h3 className="al-testimonial-shop-user-title">
                                                                    {item.name}
                                                                </h3>
                                                                <span className="al-testimonial-shop-designation">
                                                                    {item.designation}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                            <div className="al-testimonial-shop-arrow d-none d-md-block">
                                <button className="al-testimonial-shop-prev">
                                    <ShopTestimonialArrow direction="left" />
                                </button>
                                <button className="al-testimonial-shop-next">
                                    <ShopTestimonialArrow direction="right" />
                                </button>
                            </div>

                            <div className="al-testimonial-shop-slider-dot tp-swiper-dot text-center mt-30 d-md-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernTestimonial;