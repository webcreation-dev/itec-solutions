"use client"
import { ArrowShapeBottomIcon, ArrowShapeTopIcon, SeoAgencyShapeIcon } from "@/svg";
import { al_text_slider_seo_active } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SlideItem = {
    title: string;
    arrow: "top" | "bottom";
};
const slides: SlideItem[] = [
    { title: "Text Editor", arrow: "bottom" },
    { title: "Grow your UX", arrow: "top" },
    { title: "Optimisation", arrow: "bottom" },
    { title: "SEO Analytics", arrow: "top" },
];
const SeoAgencyTextSlider = () => {
    // Duplicate slides to maintain infinite effect (instead of hardcoding twice)
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="al-text-slider-seo-area p-relative pt-80 pb-70 tp_fade_anim">
            {/* Wave Shapes */}
            <div className="al-text-slider-seo-wave-shape-1">
                <span>
                    <SeoAgencyShapeIcon />
                </span>
            </div>

            <div className="al-text-slider-seo-wave-shape-2">
                <span>
                    <SeoAgencyShapeIcon />
                </span>
            </div>

            {/* Slider */}
            <div className="al-text-slider-seo-wrap">
                <div className="al-text-slider-seo-active tp-slider-transition">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...al_text_slider_seo_active}
                    >
                        {duplicatedSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="al-text-slider-seo-item d-flex align-items-center">
                                    <h4 className="al-text-slider-seo-title">
                                        {slide.title}
                                    </h4>
                                    <span>
                                        {slide.arrow === "top" ? (
                                            <ArrowShapeTopIcon />
                                        ) : (
                                            <ArrowShapeBottomIcon />
                                        )}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SeoAgencyTextSlider;