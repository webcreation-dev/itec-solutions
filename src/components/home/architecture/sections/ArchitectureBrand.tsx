"use client";
import { BrandIconEight, BrandIconFive, BrandIconFour, BrandIconNine, BrandIconOne, BrandIconSeven, BrandIconSix, BrandIconThree, BrandIconTwo } from "@/svg";
import { architecture_brand_slider } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";

const brands = [
    { icon: <BrandIconOne /> },
    { icon: <BrandIconTwo /> },
    { icon: <BrandIconThree /> },
    { icon: <BrandIconFour /> },
    { icon: <BrandIconFive /> },
    { icon: <BrandIconSix /> },
    { icon: <BrandIconSeven /> },
    { icon: <BrandIconEight /> },
    { icon: <BrandIconNine /> },
    { icon: <BrandIconOne /> },
    { icon: <BrandIconTwo /> },
    { icon: <BrandIconThree /> },
    { icon: <BrandIconFour /> },
    { icon: <BrandIconFive /> },
    { icon: <BrandIconSix /> },
    { icon: <BrandIconSeven /> },
    { icon: <BrandIconEight /> },
    { icon: <BrandIconNine /> },
];
const ArchitectureBrand = () => {
    const isDarkTheme = useIsDarkRoute();

    const brandClassesName = {
        sectionBgColor: isDarkTheme ? "#121212" : "#fff0e0",
    }

    return (
        <div
            className="al-brands-archi-area pt-85 pb-85"
            style={{ backgroundColor: brandClassesName.sectionBgColor }}
        >
            <div className="container container-1750">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="al-brands-archi-wrapper">
                            <div className="al-brands-archi-title mb-45 text-center">
                                <span>Des partenariats construits dans la durée</span>
                            </div>

                            <div className="al-brands-archi-slider">
                                <div className="al-brand-archi-slider tp-slider-transition">
                                    <Swiper
                                        modules={[Autoplay, FreeMode]}
                                        {...architecture_brand_slider}
                                    >
                                        {brands.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="tp-brand-item">
                                                    <Link href="#">
                                                        {item.icon}
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureBrand;
