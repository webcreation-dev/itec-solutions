import BrandTextSlider from "@/components/shared/components/BrandTextSlider";
import { al_brand_slide } from "@/constant/swiper";
import { brand_text_items } from "@/data/brand-data";

const SeoAgencyBrand = () => {
    return (
        <div className="al-brand-area">
            <div className="al-brand-wrapper">
                <BrandTextSlider items={brand_text_items[1]?.seoAgencyBrandItems ?? []} titleClass="al-brand-title" wrapperClass="al-brand-active" slideItemClass="al-brand-item" swiperOptions={al_brand_slide} />
            </div>
        </div>
    );
};

export default SeoAgencyBrand;