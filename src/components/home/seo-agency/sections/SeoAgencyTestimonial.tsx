"use client";
import { al_testimonial_seo_active } from "@/constant/swiper";
import { testimonialItems } from "@/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowIconTwo } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const SeoAgencyTestimonial = () => {
    // Retrieve seo agency testimonial items for rendering
    const testimonials = testimonialItems[1].seoAgency;

    return (
        <div className="al-testimonial-seo-area pt-135 pb-120">
            <div className="container">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <div className="al-testimonial-seo-title-box mb-55">
                            <span className="al-section-subtitle fs-12 mb-20">
                                Testimonials
                            </span>
                            <h4 className="al-section-title tp-text-revel-anim fix">
                                What clients said about us
                            </h4>
                        </div>

                        <div className="al-testimonial-seo-btn">
                            <div className="tp-rounded-btn-wrap mb-30">
                                <div className="btn_wrapper d-inline-block">
                                    <Link href="/portfolio-details-light" className="tp-btn-rounded btn-item">
                                        <span className="d-block mb-10">
                                            <ArrowIconTwo />
                                        </span>
                                        See More <br /> Testimonials
                                        <i className="tp-btn-circle-dot"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Slider */}
                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="al-testimonial-seo-slider-wrap">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                {...al_testimonial_seo_active}
                                className="al-testimonial-seo-active"
                            >
                                {testimonials?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="al-testimonial-seo-slider-item">
                                            <div className="al-testimonial-seo-author">
                                                <div className="al-testimonial-seo-avater">
                                                    <Image
                                                        src={item.avatar}
                                                        alt={item.name}
                                                        width={60}
                                                        height={60}
                                                    />
                                                </div>

                                                <div className="al-testimonial-seo-avater-info">
                                                    <h4 className="al-testimonial-seo-avater-title">
                                                        {item.name}
                                                    </h4>
                                                    <span>{item.designation}</span>
                                                </div>

                                                <div className="al-testimonial-seo-text">
                                                    <p>{item.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                                <div className="al-testimonial-seo-dot mt-15"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoAgencyTestimonial;