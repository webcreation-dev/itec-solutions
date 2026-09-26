import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsDarkRoute } from "@/hooks";

const testimonials = [
    {
        quote: "He’s a phenomenal designer! Their UX insights & pixel-perfect UI work helped us increase our user engagement by 30%. Highly recommended for any product team!",
        avatar: "/assets/img/testimonial/sa/avatar.png",
        name: "John Doe",
        company: "CEO at ",
        companyName: "StartupHub",
    },
    {
        quote: "He’s a phenomenal designer! Their UX insights & pixel-perfect UI work helped us increase our user engagement by 30%. Highly recommended for any product team!",
        avatar: "/assets/img/testimonial/sa/avatar-3.png",
        name: "John Doe",
        company: "CEO at ",
        companyName: "StartupHub",
    },
    {
        quote: "He’s a phenomenal designer! Their UX insights & pixel-perfect UI work helped us increase our user engagement by 30%. Highly recommended for any product team!",
        avatar: "/assets/img/testimonial/sa/avatar-4.png",
        name: "John Doe",
        company: "CEO at ",
        companyName: "StartupHub",
    },
];

const AboutMeTestimonial = () => {
    const progressRef = useRef<HTMLSpanElement | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);
    const isDark = useIsDarkRoute();

    const onSwiperInit = (swiper: SwiperClass): void => {
        swiperRef.current = swiper;

        swiper.on(
            "autoplayTimeLeft",
            (_swiper: SwiperClass, _time: number, progress: number) => {
                if (progressRef.current) {
                    progressRef.current.style.transform = `scaleX(${1 - progress})`;
                }
            }
        );
    };

    const headingColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const quoteColor = isDark ? "tp-text-grey-2" : "tp-text-common-black";
    const nameColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const companyColor = isDark ? "tp-text-grey-2" : "tp-text-grey-1";
    const quoteSvgFill = isDark ? "#ffffff" : "#030303";

    return (
        <div className="tp-testimonial-area pt-125 pb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-7">
                        <div className="tp-testimonial-2-title-wrap text-center mb-50">
                            <h2 className={`fw-700 fs-70 fs-xs-50 ${headingColor} mb-15`}>Testimonials</h2>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-9">
                        <div className="tp-testimonial-2-content-wrap tp-testimonial-pp-content p-relative">
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
                                        <div className="tp-testimonial-2-content text-center">
                                            <h5 className={`fs-35 fs-lg-30 fs-xs-25 ${quoteColor} fw-500 lh-130-per mb-35`}>
                                                {item.quote}
                                            </h5>
                                            <div className="d-flex align-items-center text-start justify-content-center">
                                                <div className="tp-testimonial-sa-qoute tp-testimonial-qoute mr-15">
                                                    <span className="qoute">
                                                        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M28.5847 16.895C28.1454 19.6558 24.6944 22.6049 21.9963 22.6676C21.8081 22.6676 21.6198 22.7304 21.4943 22.8559C21.3688 22.9186 21.2433 22.9814 21.1806 23.1696C20.2394 24.9265 20.7414 26.3069 22.31 27.4364C24.1297 28.754 27.016 27.4364 28.4592 26.2442C32.0985 23.2323 35.8005 18.0245 35.6123 13.0674C36.2397 9.74178 36.1142 6.16534 35.173 3.21626C34.5456 1.33387 32.7259 0.392675 30.8435 0.267183C28.9611 0.141588 25.0709 -0.423025 23.3767 0.706306C21.6826 1.83584 21.5571 4.03197 21.3688 5.91425C21.1806 7.98488 20.6159 11.8753 22.3728 13.5067C24.1297 15.0753 29.1494 13.3812 28.5847 16.895ZM7.87837 16.895C7.43915 19.6558 3.9882 22.6049 1.29001 22.6676C1.10177 22.6676 0.913532 22.7304 0.78804 22.8559C0.662445 22.9186 0.537052 22.9814 0.474205 23.1696C-0.466991 24.9265 0.034977 26.3069 1.60364 27.4364C3.42328 28.754 6.30961 27.4364 7.75288 26.2442C11.3922 23.2323 15.0942 18.0244 14.906 13.0674C15.5334 9.74178 15.4079 6.16534 14.4668 3.21626C13.8394 1.33387 12.0197 0.392675 10.1372 0.267183C8.25485 0.141588 4.36458 -0.423025 2.67043 0.706306C0.976379 1.83584 0.850784 4.03197 0.662548 5.91425C0.474308 7.98488 -0.0904121 11.8753 1.66649 13.5067C3.42339 15.0753 8.50584 13.3812 7.87837 16.895Z" fill={quoteSvgFill} />
                                                        </svg>
                                                    </span>
                                                    <div className="qoute-img">
                                                        <img className="rounded-circle" src={item.avatar} alt="avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className={`fw-700 fs-25 ${nameColor} mb-0`}>{item.name}</h5>
                                                    <span className={`fs-18 ${companyColor}`}>
                                                        {item.company}
                                                        <span className="text-italic">{item.companyName}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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
    );
};

export default AboutMeTestimonial;
