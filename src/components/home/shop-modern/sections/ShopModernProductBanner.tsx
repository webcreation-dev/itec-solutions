import { SmartLink } from "@/components/common";
import { BannerArrowIcon } from "@/svg";

const banners = [
    {
        id: 1,
        title: (
            <>
                T-Shirt Tunic <br /> Tops Blouse
            </>
        ),
        image: "/assets/img/update/banner/banner-1.jpg",
        link: "/shop",
    },
    {
        id: 2,
        title: (
            <>
                Satchel Tote <br /> Crossbody Bags
            </>
        ),
        image: "/assets/img/update/banner/banner-2.jpg",
        link: "/shop",
    },
    {
        id: 3,
        title: (
            <>
                Men&apos;s Tennis <br /> Walking Shoes
            </>
        ),
        image: "/assets/img/update/banner/banner-3.jpg",
        link: "/shop",
    },
];

const ShopModernProductBanner = () => {
    return (
        <div className="al-banner-shop-area mt-20">
            <div className="container-fluid gx-40">
                <div className="row gx-20">
                    {banners.map((item) => (
                        <div key={item.id} className="col-xxl-4 col-lg-6">
                            <div className="al-banner-shop-item p-relative z-index-1 mb-20 fix">
                                {/* thumb */}
                                <div
                                    className="al-banner-shop-thumb bg-position transition-3"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                {/* title */}
                                <h3 className="al-banner-shop-title">
                                    <SmartLink href={item.link}>{item.title}</SmartLink>
                                </h3>
                                {/* button */}
                                <div className="al-banner-shop-btn">
                                    <SmartLink
                                        href={item.link}
                                        className="al-shop-btn al-shop-btn-border al-shop-btn-border-sm"
                                    >
                                        Shop Now <BannerArrowIcon />
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopModernProductBanner;