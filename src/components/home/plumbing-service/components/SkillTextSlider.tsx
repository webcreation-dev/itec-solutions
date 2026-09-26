"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const SkillTextSlider = ({ titleColor = "tp-text-common-white", subTitle = "tp-text-common-white" }) => {
    return (
        <div className="tp-skill-pb-slider-active mb-30 tp-slider-transition">
            <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={true}
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides={true}
                allowTouchMove={false}
                speed={8000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="tp-skill-pb-top-text">
                        <h2 className={`tp-skill-pb-title tp-ff-sora ls-m-3 ${titleColor} mb-0`}>
                            Aleric <span className="tp-text-theme-secondary">World</span>
                        </h2>
                        <span className={`tp-skill-pb-small tp-ff-inter text-italic fw-700 fs-42 ls-m-4 ${subTitle} ml-20 mr-20 mt-30`}>
                            The
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tp-skill-pb-top-text">
                        <h2 className={`tp-skill-pb-title tp-ff-sora ls-m-3 ${titleColor} mb-0`}>
                            Old <span className="tp-text-theme-secondary">World</span>
                        </h2>
                        <span className={`tp-skill-pb-small tp-ff-inter text-italic fw-700 fs-42 ls-m-4 ${subTitle} ml-20 mr-20 mt-30`}>
                            The
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tp-skill-pb-top-text">
                        <h2 className={`tp-skill-pb-title tp-ff-sora ls-m-3 ${titleColor} mb-0`}>
                            Aleric <span className="tp-text-theme-secondary">World</span>
                        </h2>
                        <span className={`tp-skill-pb-small tp-ff-inter text-italic fw-700 fs-42 ls-m-4 ${subTitle} ml-20 mr-20 mt-30`}>
                            The
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tp-skill-pb-top-text">
                        <h2 className={`tp-skill-pb-title tp-ff-sora ls-m-3 ${titleColor} mb-0`}>
                            Old <span className="tp-text-theme-secondary">World</span>
                        </h2>
                        <span className={`tp-skill-pb-small tp-ff-inter text-italic fw-700 fs-42 ls-m-4 ${subTitle} ml-20 mr-20 mt-30`}>
                            The
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SkillTextSlider;