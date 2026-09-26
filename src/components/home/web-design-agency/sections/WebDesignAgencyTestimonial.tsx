"use client";
import WebDesignAgencyTestimonialItem from "../components/WebDesignAgencyTestimonialItem";
import { testimonial_slide_active } from "@/constant/swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, InnovateTech",
        text: "Awesome!",
        highlight:
            "Working with Aelirc has transformed our operations.",
        end: "The team is truly exceptional!",
        videoUrl: "go7QYaQR494",
    },
    {
        name: "John Doe",
        role: "CEO, InnovateTech",
        text: "Awesome!",
        highlight:
            "Working with Aelirc has transformed our operations.",
        end: "The team is truly exceptional!",
        videoUrl: "go7QYaQR494",
    },
    {
        name: "Sophia Martinez",
        role: "Product Manager, NexaSoft",
        text: "Amazing!",
        highlight:
            "Their design and development process is smooth and efficient.",
        end: "We loved working with such a talented team!",
        videoUrl: "go7QYaQR494",
    },
];

const WebDesignAgencyTestimonial = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        testimonialBgClass: isDarkTheme ? "tp-bg-grey-8" : "tp-bg-common-black"
    };
    // -------------------------------

    return (
        <div className="tp-testimonial-wd-spacing section-triger p-relative">
            <div className="tp-testimonial-wd-shape d-none d-xl-block">
                <svg height="452" viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="-5.56625" cy="465.95" r="405.95" stroke="#0C0C0C" strokeWidth="120" />
                </svg>
            </div>
            <div className={`tp-testimonial-area ${themeClasses.testimonialBgClass} p-relative pt-90 pb-100`}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-7">
                            <div className="tp-testimonial-wd-title-wrap mb-45">
                                <h2 className="tp-about-wd-title tp-text-perspective tp-ff-teko tp-text-common-white fw-600 fs-70 text-uppercase mb-15">Stories of<br /> Satisfaction</h2>
                                <div className="tp-testimonial-wd-para d-flex ml-110">
                                    <span className="mr-25 mt-5 d-inline-block">
                                        <Image width={50} height={50} src="/assets/img/testimonial/wd/shape.png" alt="shape" />
                                    </span>
                                    <p className="fs-18 tp-text-grey-2 tp-text-perspective">Strategists dedicated to creating stunning,<br /> functional websites that align with your unique<br /> business goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="tp-testimonial-wd-ratings-wrap mb-65 tp_fade_anim" data-delay=".4" data-fade-from="top" data-ease="bounce">
                                <div className="tp-testimonial-wd-ratings-inner d-flex align-content-center">
                                    <span className="mr-10 mt-5">
                                        <Image width={44} height={44} src="/assets/img/testimonial/wd/google.png" alt="google icon" />
                                    </span>
                                    <div className="tp-testimonial-wd-ratings">
                                        <span className="tp-text-common-white fw-500 fs-18 tp-text-common-white">Google Rating</span>
                                        <div>
                                            <span className="fw-600 fs-25 tp-text-common-white tp-ff-teko mr-10">4.5</span>
                                            <span>
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <i key={i} className="fa-solid fa-star"></i>
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="tp-testimonial-agents mb-50 p-relative z-index-2 tp_fade_anim" data-delay=".4">
                                <span className="tp-ff-heading fw-400 fs-22 tp-text-grey-2 mb-10 d-inline-block">Annual Success Rate</span>
                                <h3 className="fs-70 fw-600 tp-text-common-white tp-ff-teko">98% <span className="fs-35">{`>2X`}</span></h3>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-8 mb-60">
                            <div className="tp-testimonial-slider-wrap tp-testimonial-wd-slider-item p-relative h-100">
                                <div className="tp-testimonial-slider-active">
                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        {...testimonial_slide_active}
                                    >
                                        {testimonials.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <WebDesignAgencyTestimonialItem {...item} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="fraction-wrapper">
                                    <div id="paginations"></div>
                                    <div className="shop-slider-progress-bar">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-testimonial-wd-thumb ml-70">
                                <div className="box">
                                    <img data-speed=".8" className="img-cover myimg" src="/assets/img/testimonial/wd/thumb.jpg" alt="thumb" />
                                    <div className="uncover">
                                        <div className="uncover_slice"></div>
                                        <div className="uncover_slice"></div>
                                        <div className="uncover_slice"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyTestimonial;