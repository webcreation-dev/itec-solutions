import { ProductCompareIcon, ProductWishlistIcon, QuickViewIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { ProductDT } from "@/types/product-d";
import Image from "next/image";
import Link from "next/link";

const BestSellerItem: React.FC<ProductDT> = ({ id, title, images, badge, tags, price }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="tp-product-item mb-50">
                <div className="tp-product-thumb mb-15 fix p-relative z-index-1">
                    <SmartLink href={`/shop-details/${id}`}>
                        <Image width={312} height={416} className="w-100" src={images[0]} alt="product image" />
                    </SmartLink>

                    {badge && (
                        <div className="tp-product-badge">
                            <span className={badge.className}>{badge.text}</span>
                        </div>
                    )}

                    {/* actions */}
                    <div className="tp-product-action tp-product-action-blackStyle">
                        <div className="tp-product-action-item d-flex flex-column">
                            <button type="button" className="tp-product-action-btn">
                                <ProductCompareIcon />
                                <span className="tp-product-tooltip">Add To Compare</span>
                            </button>

                            <button type="button" className="tp-product-action-btn">
                                <QuickViewIcon />
                                <span className="tp-product-tooltip">Quick View</span>
                            </button>

                            <button type="button" className="tp-product-action-btn">
                                <ProductWishlistIcon />
                                <span className="tp-product-tooltip">Wishlist</span>
                            </button>
                        </div>
                    </div>

                    <div className="tp-product-add-cart-btn-large-wrapper">
                        <button type="button" className="tp-product-add-cart-btn-large">
                            Add To Cart
                        </button>
                    </div>
                </div>

                <div className="tp-product-content">
                    <div className="al-product-tag">
                        {tags.map((tag, i) => (
                            <Link key={i} href="#">
                                {tag}{i !== tags.length - 1 ? ", " : ""}
                            </Link>
                        ))}
                    </div>

                    <h3 className="tp-product-title">
                        <SmartLink href={`/shop-details/${id}`}>{title}</SmartLink>
                    </h3>

                    <div className="tp-product-price-wrapper">
                        <span className="tp-product-price">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellerItem;