import BrandLogoSlider from "@/components/shared/components/BrandLogoSlider";
import { dgm_brand_active } from "@/constant/swiper";
import { brand_logo_items } from "@/data/brand-data";
import React from "react";

const BrandLogo: React.FC = () => {
    return (
        <div className="dgm-brand-area fix">
            <div className="dgm-brand-wrapper cst-border-b">
                <div className="dgm-brand-active">
                    <BrandLogoSlider
                        data={brand_logo_items[0]?.itConsultingItems ?? []}
                        swiperOptions={dgm_brand_active}
                        itemClass="dgm-brand-item"
                    />
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;