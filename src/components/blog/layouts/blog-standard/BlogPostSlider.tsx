"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface BlogPostSliderProps {
    images: string[];
    postId: number;
}

const BlogPostSlider = ({ images, postId }: BlogPostSliderProps) => {
    const prevClass = `tp-postbox-arrow-prev-${postId}`;
    const nextClass = `tp-postbox-arrow-next-${postId}`;

    return (
        <div className="p-relative">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={images.length > 1}
                navigation={{
                    prevEl: `.${prevClass}`,
                    nextEl: `.${nextClass}`,
                }}
                className="tp-postbox-thumb-slider-active mb-30 fix"
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <img className="w-100" src={image} alt="Blog post slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="tp-postbox-slider-arrow-wrap d-none d-sm-block">
                <button className={`tp-postbox-arrow-prev ${prevClass}`} type="button" aria-label="Previous slide">
                    <i className="fa-sharp fa-solid fa-arrow-left"></i>
                </button>
                <button className={`tp-postbox-arrow-next ${nextClass}`} type="button" aria-label="Next slide">
                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default BlogPostSlider;
