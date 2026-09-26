"use client";
import ITSolutionTestimonialItem from "../components/ITSolutionTestimonialItem";
import { testimonialItems } from "@/data/testimonial-data";
import { testimonial_active } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCircleIcon } from "@/svg";
import { Pagination } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

const ITSolutionTestimonial = () => {
    // Retrieve IT solution testimonial items for rendering
    const testimonials = testimonialItems[3].iTSolution;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const testimonialStyles = {
        cardBg: isDark ? "tp-bg-grey-8" : "tp-bg-grey",
        titleText: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        circleFill: isDark ? "#fff" : "#10302A",
    };
    // -------------------------------

    return (
        <div className={`tp-testimonial-area ${testimonialStyles.cardBg} pt-140 pb-130`}>
            <div className="container-fluid container-1524">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="tp-testimonial-it-title">
                            <h2 className={`tp-text-revel-anim fix ${testimonialStyles.titleText} tp-ff-inter fw-600 ls-m-2`}>
                                “Clients Testimonials”
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="d-flex justify-content-lg-end">
                            <div
                                className="tp-testimonial-it-ratings-wrap d-flex align-items-center mb-20 tp_fade_anim"
                                data-delay=".5"
                                data-fade-from="top"
                                data-ease="bounce"
                            >
                                <span className="mr-15">
                                    <TestimonialCircleIcon fillColor={testimonialStyles.circleFill} />
                                </span>

                                <div>
                                    <div className="tp-testimonial-it-icon d-flex align-items-center">
                                        <span className={`tp-ff-inter fw-600 fs-16 lh-1 ls-m-4 text-uppercase ${testimonialStyles.titleText} mr-10`}>
                                            4.9/5
                                        </span>

                                        <div className="tp-testimonial-it-star lh-1">
                                            <i className="fa-solid fa-star-sharp"></i>{" "}
                                            <i className="fa-solid fa-star-sharp"></i>{" "}
                                            <i className="fa-solid fa-star-sharp"></i>{" "}
                                            <i className="fa-solid fa-star-sharp"></i>{" "}
                                            <i className="fa-solid fa-star-sharp"></i>
                                        </div>
                                    </div>

                                    <span className={`tp-ff-inter fw-500 fs-13 ls-m-1 lh-15 ${testimonialStyles.titleText}`}>
                                        Based on 24 reviews on Clutch
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="tp-testimonial-it-slider">
                            <Swiper
                                modules={[Pagination]}
                                {...testimonial_active}
                            >
                                {testimonials?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <ITSolutionTestimonialItem item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="tp-testimonial-it-pagenation mt-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionTestimonial;