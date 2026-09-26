"use client";
import TestimonialRight from "../components/TestimonialRight";
import { tp_testimonial_cst_slider } from "@/constant/swiper";
import TestimonialLeft from "../components/TestimonialLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

const testimonialData = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO, InnovateTech",
        img: "/assets/img/testimonial/cst/thumb.jpg",
    },
    {
        id: 2,
        name: "John Doe",
        role: "CEO, InnovateTech",
        img: "/assets/img/testimonial/cst/thumb.jpg",
    },
    {
        id: 3,
        name: "John Doe",
        role: "CEO, InnovateTech",
        img: "/assets/img/testimonial/cst/thumb.jpg",
    },
    {
        id: 4,
        name: "John Doe",
        role: "CEO, InnovateTech",
        img: "/assets/img/testimonial/cst/thumb.jpg",
    },
];

const BusinessConsultingTestimonial = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const testimonialSectionStyle = {
        cardBackgroundColor: isDark ? "tp-bg-common-black" : "tp-bg-common-white",
    };
    // -------------------------------
    return (
        <div className="tp-testimonial-area pb-155">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-testimonial-cst-slider">
                            <Swiper
                                modules={[Pagination]}
                                {...tp_testimonial_cst_slider}
                            >
                                {testimonialData.map((item) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className={testimonialSectionStyle.cardBackgroundColor}
                                    >
                                        <div className={`row ${testimonialSectionStyle.cardBackgroundColor}`}>
                                            <TestimonialLeft item={item} />
                                            <TestimonialRight />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="tp-testimonial-cst-pagenation mt-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingTestimonial;