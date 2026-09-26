"use client";
import PlumbingTestimonialItem from "../components/PlumbingTestimonialItem";
import { testimonial_pb_slider_active } from "@/constant/swiper";
import { testimonialItems } from "@/data/testimonial-data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PlumbingServiceTestimonial = () => {
    // Retrieve plumbing testimonial items for rendering
    const testimonials = testimonialItems[7].plumbing;

    return (
        <div className="tp-testimonial-area">
            <div className="container-fluid container-1646">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-testimonial-pb-wrap tp-bg-common-black-5 p-relative">
                            <div className="tp-testimonial-pb-slider">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    {...testimonial_pb_slider_active}
                                >
                                    {testimonials?.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <PlumbingTestimonialItem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="tp-testimonial-pb-pagenation"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceTestimonial;