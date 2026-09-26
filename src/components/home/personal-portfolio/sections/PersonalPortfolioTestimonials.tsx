"use client";
import PersonalPortfolioTestimonialItem from "../components/PersonalPortfolioTestimonialItem";
import { testimonial_slide_active } from "@/constant/swiper";
import { testimonialItems } from "@/data/testimonial-data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useEffect, useRef } from "react";
import { useIsDarkRoute } from "@/hooks";

const PersonalPortfolioTestimonials = () => {
    // Retrieve seo agency testimonial items for rendering
    const testimonials = testimonialItems[4].personalPortfolio || [];

    const progressRef = useRef<HTMLSpanElement | null>(null);
    const swiperConfig = testimonial_slide_active;

    useEffect(() => {
        // safe DOM access ONLY after render
        return () => { };
    }, []);

    const handleAutoplayTimeLeft = (
        _swiper: SwiperType,
        _time: number,
        progress: number
    ) => {
        if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${1 - progress})`;
        }
    };

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const testimonialStyles = {
        text: isDark ? "tp-text-common-white" : "tp-text-common-black",
    };
    // -------------------------------

    return (
        <div className="tp-testimonial-area pt-120 pb-140">
            <div className="container">
                {/* Title */}
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-7">
                        <div className="tp-testimonial-2-title-wrap text-center mb-50 tp_fade_anim">
                            <h2 className={`fw-700 fs-70 fs-xs-50 ${testimonialStyles.text} mb-15`}>
                                Testimonials
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="col-xl-8 col-lg-9 mx-auto">
                    <div className="tp-testimonial-2-content-wrap tp-testimonial-pp-content p-relative">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            {...swiperConfig}
                            onAutoplayTimeLeft={handleAutoplayTimeLeft}
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <PersonalPortfolioTestimonialItem {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Pagination */}
                        <div className="fraction-wrapper">
                            <div id="paginations"></div>
                            <div className="shop-slider-progress-bar">
                                <span ref={progressRef}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioTestimonials;