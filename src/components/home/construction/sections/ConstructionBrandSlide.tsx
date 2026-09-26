import BrandTextSlider from "@/components/shared/components/BrandTextSlider";
import { tp_brand_slide_active } from "@/constant/swiper";
import { brand_text_items } from "@/data/brand-data";

const ConstructionTextSlide = () => {
    return (
        <div className="ar-brand-area cnt-brand-style ar-brand-style">
            <div className="tp-brand-wrapper red-bg z-index-1 p-relative">
                <div className="swiper-container tp-brand-active">
                    <div className="swiper-wrapper slide-transtion">
                        <BrandTextSlider items={brand_text_items[4]?.construction ?? []} titleClass="tp-brand-title" wrapperClass="tp-brand-active" slideItemClass="tp-brand-item" swiperOptions={tp_brand_slide_active} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTextSlide;