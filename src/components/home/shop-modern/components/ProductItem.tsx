import { ProductCompareIcon, ProductWishlistIcon, QuickViewIcon } from '@/svg';
import { SmartLink } from '@/components/common';
import { ProductDT } from '@/types/product-d';
import Link from 'next/link';
import useGlobalContext from '@/hooks/useContext';

interface productItemProps {
    product: ProductDT;
}

const ProductItem: React.FC<productItemProps> = ({ product }) => {
    const { setActiveProduct } = useGlobalContext();

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="tp-product-item mb-50">

                <div className="tp-product-thumb mb-15 fix p-relative z-index-1">
                    <SmartLink href={`/shop-details/${product.id}`}>
                        <img src={product?.images[0]} alt="product image" />
                    </SmartLink>
                    {/* Badge */}
                    {product?.badge && (
                        <div className="tp-product-badge">
                            <span className={product.badge.className}>
                                {product.badge.text}
                            </span>
                        </div>
                    )}
                    {/* Actions */}
                    <div className="tp-product-action tp-product-action-blackStyle">
                        <div className="tp-product-action-item d-flex flex-column">
                            <button type="button" className="tp-product-action-btn tp-product-add-cart-btn">
                                <ProductCompareIcon />
                                <span className="tp-product-tooltip">Add To Compare</span>
                            </button>
                            <button
                                type="button"
                                className="tp-product-action-btn tp-product-quick-view-btn"
                                onClick={() => setActiveProduct && setActiveProduct(product)}
                            >
                                <QuickViewIcon />
                                <span className="tp-product-tooltip">Quick View</span>
                            </button>

                            <button type="button" className="tp-product-action-btn tp-product-add-to-wishlist-btn">
                                <ProductWishlistIcon />
                                <span className="tp-product-tooltip">Add To Wishlist</span>
                            </button>

                        </div>
                    </div>
                    {/* Add to cart large */}
                    <div className="tp-product-add-cart-btn-large-wrapper">
                        <button type="button" className="tp-product-add-cart-btn-large">
                            Add To Cart
                        </button>
                    </div>
                </div>
                {/* Content */}
                <div className="tp-product-content">
                    <div className="al-product-tag">
                        {product?.tags.map((tag, i) => (
                            <Link key={i} href="#">
                                {tag}
                                {i !== product.tags.length - 1 && ", "}
                            </Link>
                        ))}
                    </div>
                    <h3 className="tp-product-title">
                        <SmartLink href={`/shop-details/${product.id}`}>
                            {product?.title}
                        </SmartLink>
                    </h3>
                    <div className="tp-product-price-wrapper">
                        <span className="tp-product-price">
                            ${product?.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;