"use client";
import { testimonial_slide_active } from "@/constant/swiper";
import { useVideoModal } from "@/providers/VideoProvider";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { VideoPlayIconThree } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const testimonialData = [
    {
        text: "Awesome! Working with Aelirc has transformed our operations. The team is truly exceptional!",
        name: "John Doe",
        designation: "CEO, InnovateTech",
    },
    {
        text: "The collaboration with Aelirc exceeded our expectations. Their expertise is unmatched.",
        name: "Jane Smith",
        designation: "CTO, TechSolutions",
    },
    {
        text: "Professional, innovative, and reliable. Aelirc has been a game-changer for us.",
        name: "Michael Johnson",
        designation: "Founder, CreativeLabs",
    },
];

const DigitalAgencyTestimonial = () => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();

    // Section main title (e.g., "Testimonials", agent number)
    const testimonialTitleClass = isDark ? "tp-text-common-white" : "";

    // Section subtitle / highlighted text
    const testimonialSubtitleClass = isDark
        ? "tp-text-common-white"
        : "tp-text-common-black";

    // Paragraph / description text color
    const testimonialContentClass = isDark
        ? "tp-text-grey-2"
        : "tp-text-grey-1";

    return (
        <div className="tp-testimonial-area pt-140 pb-110">
            <div className="container">
                <div className="row">
                    {/* Left Title */}
                    <div className="col-lg-6">
                        <div
                            className="tp-service-title-wrap mb-60 tp_fade_anim"
                            data-delay=".4"
                            data-fade-from="left"
                        >
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 ${testimonialSubtitleClass} fs-16 mb-35`}>
                                <span className="borders d-inline-block"></span>What&apos;re They Says
                            </span>
                            <p className={`tp-ff-heading fs-25 fw-500 ${testimonialContentClass} tp-service-para`}>
                                We pride ourselves on delivering
                                <br /> innovative, impactful, and results-
                                <br /> driven projects.
                            </p>
                        </div>
                    </div>

                    {/* Right Title */}
                    <div className="col-lg-6">
                        <div className="mb-45 tp_fade_anim" data-delay=".4" data-fade-from="right">
                            <h2 className={`tp-section-title fs-70 fs-xs-40 fw-700 text-uppercase ${testimonialTitleClass}`}>Testimonials</h2>
                        </div>
                    </div>

                    {/* Left Thumbnail / Video */}
                    <div className="col-xl-6">
                        <div className="tp-testimonial-thumb-wrap">
                            <div className="row align-items-end">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="tp-testimonial-agents mb-90 tp_fade_anim" data-delay=".4">
                                        <h3 className={`fs-70 fw-500 ${testimonialTitleClass}`}>208</h3>
                                        <span className={`tp-ff-heading fw-700 fs-18 ${testimonialSubtitleClass}`}>
                                            Total Contract Agents
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7">
                                    <div
                                        className="tp-testimonial-thumb p-relative d-inline-block mb-30 ml-10 tp_fade_anim"
                                        data-delay=".5"
                                    >
                                        <Image width={312} height={412} src="/assets/img/testimonial/thumb.jpg" alt="testimonial thumb" />
                                        <div className="tp-video-main tp-testimonial-video">
                                            <button
                                                onClick={() => playVideo("go7QYaQR494")}
                                                className="tp-hero-video-btn popup-video"
                                            >
                                                <span>
                                                    <VideoPlayIconThree />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Testimonial Slider */}
                    <div className="col-xl-6 mb-30">
                        <div className="tp-testimonial-slider-wrap mt-40 p-relative h-100">
                            <div className="tp-testimonial-slider-active">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    {...testimonial_slide_active}
                                >
                                    {testimonialData.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="tp-testimonial-slider-item">
                                                <p className={`tp-ff-heading fs-35 fs-sm-25 fw-500 ${testimonialSubtitleClass} lh-120-per mb-30`}>
                                                    {item.text}
                                                </p>
                                                <div>
                                                    <h5 className={`fs-25 mb-0 ${testimonialTitleClass}`}>{item.name}</h5>
                                                    <span className={`fs-18 fw-400 ${testimonialContentClass}`}>{item.designation}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Slider Pagination & Progress */}
                            <div className="fraction-wrapper">
                                <div id="paginations"></div>
                                <div className="shop-slider-progress-bar">
                                    <span></span>
                                </div>
                            </div>

                            {/* Bottom Thumbnail */}
                            <div className="tp-testimonial-thumb-2 tp_fade_anim" data-delay=".7">
                                <Image width={164} height={180} src="/assets/img/testimonial/thumb-2.jpg" alt="testimonial thumb 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyTestimonial;