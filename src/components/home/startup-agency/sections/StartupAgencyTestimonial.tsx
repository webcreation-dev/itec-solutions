"use client";
import StartupAgencyTestimonialItem from "../components/StartupAgencyTestimonialItem";
import { startup_agency_testimonial_slider } from "@/constant/swiper";
import { testimonialItems } from "@/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

const StartupAgencyTestimonial = () => {
    // Retrieve startup agency testimonial items for rendering
    const testimonials = testimonialItems[9].startupAgency || [];

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const testimonialStyles = {
        titleColor: isDark ? "tp-text-common-white" : "tp-text-common-black-3",
        paraColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1"
    }
    return (
        <div className="tp-testimonial-area pt-125 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="tp-testimonial-sa-title-wrap text-center mb-65">
                            <h2 className={`fs-70 fs-xs-50 mb-15 tp_fade_anim ${testimonialStyles.titleColor}`} data-delay=".3">Testimonials</h2>
                            <div className="tp_fade_anim" data-delay=".5">
                                <p className={`fs-18 ${testimonialStyles.paraColor}`}>A high-growth startup agency relies on the best technologies to deliver branding, marketing, and product development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-testimonial-sa-slider">
                            <Swiper
                                modules={[Pagination]}
                                {...startup_agency_testimonial_slider}
                                pagination={{
                                    el: ".tp-testimonial-sa-slider .tp-service-sa-pagenation",
                                    clickable: true,
                                }}
                            >
                                {testimonials?.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <StartupAgencyTestimonialItem key={idx} {...item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="tp-service-sa-pagenation mt-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyTestimonial;
