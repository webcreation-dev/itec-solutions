"use client";
import MedicalTestimonialItem from "../components/MedicalTestimonialItem";
import { tp_testimonial_md_slide_active } from "@/constant/swiper";
import { testimonialItems } from "@/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonials = testimonialItems.find((item) => "medical" in item)?.medical ?? [];

const MedicalTestimonial = () => {
    return (
        <div className="tp-testimonial-area pb-130 pt-160 p-relative z-index-1">
            <Image className="tp-testimonial-md-map p-absolute" src="/assets/img/testimonial/md/map.png" alt="map" width={750} height={664} />
            <div className="container">
                <div className="col-12">
                    <div className="tp-testimonial-md-slide-active">
                        <Swiper {...tp_testimonial_md_slide_active} modules={[Autoplay]}>
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <MedicalTestimonialItem {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MedicalTestimonial;
