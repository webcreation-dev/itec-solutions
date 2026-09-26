"use client";
import React, { useRef } from "react";
import { tp_testimonial_ai_slide_active } from "@/constant/swiper";
import { ArrowIcon, QuoteIcon, TestimonialCircleDot } from "@/svg";
import { testimonialItems } from "@/data/testimonial-data";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const AiStartupTestimonial = () => {
    // Retrieve ai startup testimonial items for rendering
    const testimonials = testimonialItems[2].aiStartup;

    const isDarkRoute = useIsDarkRoute();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    // Background for pricing section
    const testimonialSectionBgClass = isDarkRoute
        ? "tp-bg-common-black"
        : "tp-bg-common-white";

    // Small section label text (/ Our Pricing /)
    const testiSectionLabelClass = isDarkRoute
        ? "tp-text-common-white"
        : "tp-text-common-black-5";
    // Main heading + paragraph text
    const testiTitleTextClass = isDarkRoute
        ? "tp-text-common-white"
        : "tp-text-common-black-6";
    const quoteContentCls = isDarkRoute ? "tp-text-grey-2" : "tp-text-border-2";
    const svgColor = isDarkRoute ? "#fff" : "#111112";
    const btnBgColor = isDarkRoute ? "tp-bg-common-white" : "tp-bg-common-black-5";
    const counterCls = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black";
    const smallTextclass = isDarkRoute ? "tp-text-grey-2" : "tp-text-common-black-5";
    const circleCls = isDarkRoute ? "#fff" : "#10302A";
    const circleTextColor = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-1";

    return (
        <div className={`tp-testimonial-area pt-155 ${testimonialSectionBgClass} pb-120 p-relative z-index-1`}>
            <Image width={257} height={339} className="tp-testimonial-ai-shape p-absolute" src="/assets/img/pricing/shape.png" alt="shape" />
            <div className="container-fluid container-1524">
                <div className="row align-items-end mb-35">
                    <div className="col-lg-7">
                        <div className="tp-testimonial-ai-title-wrap mb-40">
                            <span className={`tp-ff-inter fw-500 fs-18 ls-m-4 ${testiSectionLabelClass} mb-10 d-inline-block tp_fade_anim`} data-delay=".3">/ Our Testimonial /</span>
                            <h2 className={`tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-jakarta ${testiTitleTextClass} tp_fade_anim`} data-delay=".5">Resonance is trusted by <span className="title-slide-gradient">1,1000+</span> Customers.</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="d-flex justify-content-lg-end tp_fade_anim" data-delay=".7" data-fade-from="bottom" data-ease="bounce">
                            <div className="tp-testimonial-it-ratings-wrap d-flex align-items-center mb-50">
                                <span className="mr-15">
                                    <TestimonialCircleDot fillColor={circleCls} />
                                </span>
                                <div>
                                    <div className="tp-testimonial-it-icon d-flex align-items-center">
                                        <span className={`tp-ff-inter fw-600 fs-16 lh-1 ls-m-4 text-uppercase ${circleTextColor} mr-10`}>4.9/5</span>
                                        <div className="tp-testimonial-it-star lh-1">
                                            <i className="fa-solid fa-star-sharp"></i>
                                            <i className="fa-solid fa-star-sharp"></i>
                                            <i className="fa-solid fa-star-sharp"></i>
                                            <i className="fa-solid fa-star-sharp"></i>
                                            <i className="fa-solid fa-star-sharp"></i>
                                        </div>
                                    </div>
                                    <span className={`tp-ff-inter fw-500 fs-13 ls-m-1 ${circleTextColor} lh-1`}>Based on 24 reviews on Clutch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-relative">
                        <div>
                            <Swiper
                                className="tp-testimonial-ai-slide-active"
                                modules={[EffectFade]}
                                {...tp_testimonial_ai_slide_active}
                                navigation={false}
                                fadeEffect={{ crossFade: true }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {testimonials?.map((item, index) => (
                                    <SwiperSlide key={index} className={testimonialSectionBgClass}>

                                        {index === 0 && (
                                            <img
                                                className="tp-faq-ai-noise"
                                                src="/assets/img/body/noise.png"
                                                alt="noice image"
                                            />
                                        )}

                                        <div className="row">
                                            {/* AVATAR */}
                                            <div className="col-xxl-5 col-xl-4">
                                                <div className="tp-testimonial-ai-avatar mb-30">
                                                    <Image
                                                        src={item.avatar}
                                                        width={120}
                                                        height={120}
                                                        className="rounded-circle mb-25"
                                                        alt={item.name}
                                                    />

                                                    <h3 className={`tp-ff-jakarta fw-600 fs-28 ls-m-3 ${testiSectionLabelClass} mb-20`}>
                                                        {item.name}
                                                    </h3>

                                                    <span className={`tp-testimonial-ai-profeson d-inline-block tp-round-36 ${btnBgColor} tp-ff-dm fw-500 fs-18 ls-m-2 ${isDarkRoute ? 'tp-text-common-black' : 'tp-text-common-white'}`}>
                                                        {item.designation}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* CONTENT */}
                                            <div className="col-xxl-7 col-xl-8">
                                                <div className="tp-testimonial-ai-content ml-35 mr-60">
                                                    <div className="d-sm-flex">
                                                        <span className="mr-30">
                                                            <QuoteIcon svgFillColor={svgColor} />
                                                        </span>
                                                        <div>
                                                            <p className={`pt-20 tp-ff-dm fw-400 fs-32 fs-sm-25 fs-xs-20 ls-m-4 lh-150-per ${quoteContentCls}`}>
                                                                {item.message}{" "}
                                                                <span className={`fw-500 opacity-100 ${testiSectionLabelClass}`}>
                                                                    {item.highlight}
                                                                </span>{" "}
                                                                customer segmentation but also significantly boosted
                                                            </p>
                                                            <div className="tp-testimonial-ai-expreance d-flex justify-content-between">
                                                                <div className="d-sm-flex align-items-end mb-30 mr-30">
                                                                    <h2 className={`tp-ff-jakarta fw-600 fs-52 ls-m-6 ${counterCls} mb-0 mr-10`}>
                                                                        {item.growth}
                                                                    </h2>
                                                                    <span className={`tp-ff-jakarta fw-500 fs-18 ls-m-4 ${smallTextclass} mb-5`}>
                                                                        Renegue Growth After Expansion
                                                                    </span>
                                                                </div>
                                                                <span className="mb-30">
                                                                    <QuoteIcon svgFillColor={svgColor} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="tp-testimonial-ai-navigation">
                            <button type="button" className="tp-testimonial-ai-prev" onClick={handlePrev} style={{ cursor: "pointer" }} aria-label="Previous testimonial">
                                <ArrowIcon />
                            </button>
                            <button type="button" className="tp-testimonial-ai-next" onClick={handleNext} style={{ cursor: "pointer" }} aria-label="Next testimonial">
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupTestimonial;