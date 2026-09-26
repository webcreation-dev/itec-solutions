"use client";

import { testimonialItems } from "@/data/testimonial-data";
import TestimonialItem from "../components/TestimonialItem";
import { testimonial_active } from "@/constant/swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCircleDot } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

const Testimonial = () => {
    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute()

    // Retrieve IT Consulting testimonial items for rendering
    const testimonials = testimonialItems[0].itConsulting;

    // Helper classes based on dark mode
    const textColor = isDark ? "tp-text-common-white" : "";
    const circleColor = isDark ? "#fff" : "#10302A";

    return (
        <div
            className="tp-testimonial-area cst-testimonial-wrap pt-140 pb-130 tp-section-bg">
            <div className="container container-1524">
                {/* Header */}
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="cst-testimonial-heading mb-40">
                            <h3 className="cst-section-title">“Clients Testimonials”</h3>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="d-flex justify-content-lg-end">
                            <div className="tp-testimonial-it-ratings-wrap d-flex align-items-center mb-20">
                                <span className="mr-15">
                                    <TestimonialCircleDot fillColor={circleColor} />
                                </span>
                                <div>
                                    <div className="tp-testimonial-it-icon d-flex align-items-center">
                                        <span className={`tp-ff-inter fw-600 fs-16 lh-1 ls-m-4 text-uppercase mr-10 ${textColor}`}>
                                            4.9/5
                                        </span>
                                        <div className="tp-testimonial-it-star">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star-sharp"></i>
                                            ))}
                                        </div>
                                    </div>
                                    <span className={`tp-ff-inter fw-500 fs-13 ls-m-1 lh-1 ${textColor}`}>
                                        Based on 24 reviews on Clutch
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="row">
                    <div className="col-12">
                        <div className="cst-testimonial-slider-wrapper">
                            <div className="tp-testimonial-it-slider">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    {...testimonial_active}
                                >
                                    {testimonials?.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <TestimonialItem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="tp-testimonial-it-pagenation mt-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;