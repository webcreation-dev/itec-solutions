import BestSellerItem from "../components/BestSellerItem";
import { products } from "@/data/product-data";
import { SmartLink } from "@/components/common";

const ShopModernBestSeller = () => {
    const bestSellerProducts = products.slice(26, 30);

    return (
        <div className="al-seller-area pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-section-shop-title-wrapper mb-50">
                            <span className="al-section-shop-subtitle">
                                Best Seller This {`Week’s`}
                            </span>
                            <h3 className="al-section-shop-title">This {`Week's`} Featured</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {bestSellerProducts.map((item) => (
                        <BestSellerItem key={item.id} {...item} />
                    ))}
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-seller-more text-center mt-10">
                            <SmartLink href="/shop" className="al-shop-btn al-shop-btn-border">
                                Shop All Product
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernBestSeller;