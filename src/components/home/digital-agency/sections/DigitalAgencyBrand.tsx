"use client";
import { tp_brand_slide_active } from "@/constant/swiper";
import { brand_logo_items } from "@/data/brand-data";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const DigitalAgencyBrand = () => {
    const isDark = useIsDarkRoute();

    // Section background color for dark/light
    const brandSectionBgClass = isDark ? "tp-bg-common-black" : "tp-bg-common-white";

    // Section main text color for dark/light
    const brandSectionTextClass = isDark ? "tp-text-common-white" : "tp-text-common-black";

    return (
        <div className={`tp-brand-area tp-brand-spacing ${brandSectionBgClass} z-index-1 p-relative`}>
            <span className="tp-brand-bottom-border"></span>
            <div className="tp-brand-customer-wrap">
                <span className={`tp-brand-customer tp-ff-heading fs-18 fs-xs-15 fw-700 ${brandSectionTextClass}`}>
                    We&apos;ve 5,000+ Happiest Customer
                </span>
            </div>
            <div className="tp-brand-wrap">
                <div className="tp-brand-slide-active tp-slider-transition">
                    <Swiper modules={[Autoplay, FreeMode]}
                        {...tp_brand_slide_active}>
                        {brand_logo_items[1]?.digitalAgencyItems?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="tp-brand-item">
                                    <Link href="#">
                                        <Image
                                            src={`${item.src}`}
                                            width={item.width}
                                            height={item.height}
                                            alt={`Brand ${index + 1}`}
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyBrand;