import { SmartLink } from '@/components/common';
import { BannerArrowIcon } from '@/svg';

interface productItemProps {
    item: {
        image: string;
        title: string[];
        price: number;
        oldPrice: number;
        rating: number;
    };
}
const ProductSliderItem: React.FC<productItemProps> = ({ item }) => {
    return (
        <>
            <div
                className="al-featured-shop-thumb bg-position"
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="al-featured-shop-content">
                <h3 className="al-featured-shop-title">
                    <SmartLink href="/shop-details">
                        {item.title.map((line: string, i: number) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </SmartLink>
                </h3>
                <div className="al-featured-shop-price-wrapper">
                    <span className="al-featured-shop-price new-price"> ${item.price.toFixed(2)}</span>
                    <span className="al-featured-shop-price old-price"> ${item.oldPrice.toFixed(2)}</span>
                </div>
                <div className="al-featured-shop-rating-icon mb-20">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>
                            <i
                                className={`fa-solid fa-star ${i < item.rating ? "" : "text-muted"
                                    }`}
                            ></i>
                        </span>
                    ))}
                </div>
                <div className="al-featured-shop-btn">
                    <SmartLink
                        href="/shop-details"
                        className="al-shop-btn al-shop-btn-border al-shop-btn-border-sm"
                    >
                        Shop Now <BannerArrowIcon />
                    </SmartLink>
                </div>
            </div>
        </>
    );
};

export default ProductSliderItem;