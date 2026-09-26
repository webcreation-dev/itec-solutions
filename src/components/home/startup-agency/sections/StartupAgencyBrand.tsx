"use client";
import BrandLogoSlider from "@/components/shared/components/BrandLogoSlider";
import { tp_brand_slide_active } from "@/constant/swiper";
import { useIsDarkRoute } from "@/hooks";
import { BrandLineShape } from "@/svg";

const brandLogos = [
    { src: "/assets/img/brands/white/logo.png", width: 112, height: 30 },
    { src: "/assets/img/brands/white/logo-2.png", width: 190, height: 30 },
    { src: "/assets/img/brands/white/logo-3.png", width: 112, height: 30 },
    { src: "/assets/img/brands/white/logo-4.png", width: 64, height: 30 },
    { src: "/assets/img/brands/white/logo-5.png", width: 70, height: 30 },
    { src: "/assets/img/brands/white/logo-6.png", width: 77, height: 30 },
    { src: "/assets/img/brands/white/logo-7.png", width: 174, height: 30 },
    { src: "/assets/img/brands/white/logo-4.png", width: 64, height: 30 },
    { src: "/assets/img/brands/white/logo-3.png", width: 112, height: 30 },
    { src: "/assets/img/brands/white/logo.png", width: 112, height: 30 },
    { src: "/assets/img/brands/white/logo-2.png", width: 190, height: 30 },
    { src: "/assets/img/brands/white/logo-3.png", width: 112, height: 30 },
    { src: "/assets/img/brands/white/logo-4.png", width: 64, height: 30 },
];

const StartupAgencyBrand = () => {
    const isDark = useIsDarkRoute();
    const sectionBg = isDark ? "tp-bg-grey-8" : "tp-bg-common-black";

    return (
        <div className={`tp-brands-area pt-65 pb-65 fix ${sectionBg}`}>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-sm-flex justify-content-center">
                            <span className="d-none d-sm-inline-block">
                                <BrandLineShape direction="left" />
                            </span>
                            <h5 className="tp-text-common-white fw-500 fs-25 mr-35 ml-35">
                                They Trust Us Always
                            </h5>
                            <span className="d-none d-sm-inline-block">
                                <BrandLineShape direction="right" />
                            </span>
                        </div>
                        <div className="tp-brand-wrap pt-40">
                            <div className="tp-brand-slide-active tp-slider-transition">
                                <BrandLogoSlider
                                    data={brandLogos}
                                    swiperOptions={tp_brand_slide_active}
                                    itemClass="tp-brand-item"
                                    useLink={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyBrand;
