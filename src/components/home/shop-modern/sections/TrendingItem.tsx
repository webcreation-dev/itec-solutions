import { ProductCompareIcon, ProductWishlistIcon, QuickViewIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/useContext";
import { products } from "@/data/product-data";

interface trendingItemProps {
    id: number;
    title: string;
    image: string;
    price: number;
    badge?: string;
    tags: string[];
}

const TrendingItem: React.FC<trendingItemProps> = ({ id, title, image, price, badge, tags }) => {
    const { setActiveProduct } = useGlobalContext();

    const handleQuickView = () => {
        const fullProduct = products.find(p => p.title.toLowerCase() === title.toLowerCase()) || products.find(p => p.id === id);
        if (fullProduct && setActiveProduct) {
            setActiveProduct(fullProduct);
        }
    };

    return (
        <div className="tp-product-item">
            <div className="tp-product-thumb mb-15 fix p-relative z-index-1">
                <SmartLink href="/shop-details">
                    <Image width={312} height={416} className="w-100 img-fluid" src={image} alt="thumb" />
                </SmartLink>

                {badge && (
                    <div className="tp-product-badge">
                        <span className="product-discount">{badge}</span>
                    </div>
                )}
                {/* -- product action -- */}
                <div className="tp-product-action tp-product-action-blackStyle">
                    <div className="tp-product-action-item d-flex flex-column">
                        <button
                            type="button"
                            className="tp-product-action-btn tp-product-add-cart-btn"
                        >
                            <ProductCompareIcon />
                            <span className="tp-product-tooltip">Add To Compare</span>
                        </button>

                        <button
                            type="button"
                            className="tp-product-action-btn tp-product-quick-view-btn"
                            onClick={handleQuickView}
                        >
                            <QuickViewIcon />
                            <span className="tp-product-tooltip">Quick View</span>
                        </button>

                        <button
                            type="button"
                            className="tp-product-action-btn tp-product-add-to-wishlist-btn"
                        >
                            <ProductWishlistIcon />
                            <span className="tp-product-tooltip">Add To Wishlist</span>
                        </button>
                    </div>
                </div>
                <div className="tp-product-add-cart-btn-large-wrapper">
                    <button
                        type="button"
                        className="tp-product-add-cart-btn-large"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
            <div className="tp-product-content">
                <div className="al-product-tag">
                    {tags.map((tag: string, i: number) => (
                        <Link href="#" key={i}>
                            {tag}
                            {i !== tags.length - 1 && ", "}
                        </Link>
                    ))}
                </div>
                <h3 className="tp-product-title">
                    <SmartLink href="/shop-details">{title}</SmartLink>
                </h3>
                <div className="tp-product-price-wrapper">
                    <span className="tp-product-price">
                        ${price.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TrendingItem;