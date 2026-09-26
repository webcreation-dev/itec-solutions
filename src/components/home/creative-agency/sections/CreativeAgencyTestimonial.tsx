"use client";
import CreativeATestimonialsItem from "../components/CreativeATestimonialsItem";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useIsDarkRoute } from "@/hooks";

const testimonials = [
    {
        id: 1,
        text: (
            <>
                <span className="fw-400">Awesome!</span> <br />
                Working with Aelirc has transformed our operations. The team is truly exceptional!
                Really we&apos;re grateful & {`we're`} closing{" "}
                <span className="fw-400">40% on cold traffic.</span>
            </>
        ),
        img: "/assets/img/testimonial/sa/avatar.png",
        name: "John Doe",
        role: "CEO, InnovateTech",
    },
    {
        id: 2,
        text: (
            <>
                <b className="fw-400">Awesome!</b> <br />
                Working with Aelirc has transformed our operations. The team is truly exceptional!
                Really we&apos;re grateful & {`we're`} closing{" "}
                <b className="fw-400">40% on cold traffic.</b>
            </>
        ),
        img: "/assets/img/testimonial/sa/avatar-2.png",
        name: "John Doe",
        role: "CEO, InnovateTech",
    },
    {
        id: 3,
        text: (
            <>
                <b className="fw-400">Awesome!</b> <br />
                Working with Aelirc has transformed our operations. The team is truly exceptional!
                Really we&apos;re grateful & {`we're`} closing{" "}
                <b className="fw-400">40% on cold traffic.</b>
            </>
        ),
        img: "/assets/img/testimonial/sa/avatar-4.png",
        name: "John Doe",
        role: "CEO, InnovateTech",
    },
];

const CreativeAgencyTestimonial = () => {
    const progressRef = useRef<HTMLSpanElement | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);

    const onSwiperInit = (swiper: SwiperClass): void => {
        swiperRef.current = swiper;

        swiper.on(
            "autoplayTimeLeft",
            (_swiper: SwiperClass, _time: number, progress: number) => {
                if (progressRef.current) {
                    progressRef.current.style.transform =
                        `scaleX(${1 - progress})`;
                }
            }
        );
    };
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

    // Theme-based style tokens for testimonial section
    const testimonialTheme = {
        headingClass: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-3",
        bodyTextClass: isDarkTheme ? "tp-text-grey-2" : "tp-text-grey-1",
    };
    // Determine shape image based on theme
    const shapeSrc = isDarkTheme ? "/assets/img/testimonial/testimonial-2/shape-black.png" : "/assets/img/testimonial/testimonial-2/shape.png";

    return (
        <>
            <div className="tp-testimonial-area pt-130 pb-140">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* TITLE */}
                        <div className="col-xl-6 col-md-7">
                            <div className="tp-testimonial-2-title-wrap text-center mb-50 tp_fade_anim" data-delay=".3">
                                <h2 className={`tp-ff-funnel fw-500 fs-70 fs-xs-50 ${testimonialTheme.headingClass} mb-15`}>
                                    Testimonials
                                </h2>
                                <p className={`fs-18 ${testimonialTheme.bodyTextClass}`} >
                                    Clients of Aleric AdOutreach, have shared positive experiences
                                    regarding their Marketing advertising strategies.
                                </p>
                            </div>
                        </div>

                        {/* SLIDER */}
                        <div className="col-xl-8 col-lg-9">
                            <div className="tp-testimonial-2-content-wrap p-relative">
                                <img
                                    className="tp-testimonial-2-shape d-none d-xl-block tp_fade_anim"
                                    data-delay=".5"
                                    data-fade-from="top"
                                    data-ease="bounce"
                                    src={shapeSrc}
                                    alt="Shape"
                                />
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={1}
                                    loop={true}
                                    spaceBetween={0}
                                    speed={1000}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={{
                                        prevEl: ".tp-shop-prev",
                                        nextEl: ".tp-shop-next",
                                    }}
                                    pagination={{
                                        el: "#paginations",
                                        type: "custom",
                                        renderCustom: function (swiper, current, total) {
                                            const zero = total > 9 ? "" : "0";
                                            return `
                                        <div class="shop-slider-pagination">
                                        <span>${zero + current}</span>
                                        <span>${zero + total}</span>
                                        </div>
                                    `;
                                        },
                                    }}
                                    onSwiper={onSwiperInit}
                                >
                                    {testimonials.map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <CreativeATestimonialsItem {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* pagination */}
                                <div className="fraction-wrapper">
                                    <div id="paginations"></div>
                                    <div className="shop-slider-progress-bar">
                                        <span ref={progressRef}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-about-2-border p-relative z-index-1"></div>
        </>
    );
};

export default CreativeAgencyTestimonial;