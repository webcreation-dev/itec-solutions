"use client";
import BrandLogoSlider from "@/components/shared/components/BrandLogoSlider";
import { tp_brand_slide_active } from "@/constant/swiper";
import { brand_logo_items } from "@/data/brand-data";
import { Autoplay, FreeMode } from "swiper/modules";
import { useIsDarkRoute } from "@/hooks";

const BusinessConsultingBrand = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const brandSectionStyles = {
        sectionBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-white",
    };
    // -------------------------------

    return (
        <div className={`tp-brand-area tp-brand-cst-spacing ${brandSectionStyles.sectionBg} z-index-1 p-relative`}>
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="tp-brand-wrap">
                        <div className="tp-brand-slide-active tp-slider-transition">
                            <BrandLogoSlider
                                data={brand_logo_items[1]?.digitalAgencyItems ?? []}
                                swiperOptions={tp_brand_slide_active}
                                itemClass="tp-brand-item"
                                useLink={true}
                                modules={[Autoplay, FreeMode]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingBrand;