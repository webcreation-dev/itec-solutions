import Image from 'next/image';
import Link from 'next/link';

interface categoryItemProps {
    item: {
        img: string;
    }
}

const ProductCategoryItem: React.FC<categoryItemProps> = ({ item }) => {
    return (
        <div
            className="swiper-slide al-category-shop-item p-relative z-index-1 text-center"
        >
            <div className="al-category-shop-thumb">
                <Link href="#">
                    <Image className='img-fluid' width={224} height={260} src={item.img} alt="category image" />
                </Link>
            </div>

            <div className="al-category-shop-content">
                <span>From $34.95</span>

                <h3 className="al-category-shop-title">
                    <Link href="/shop-details">
                        Crew Neck T-shirt
                    </Link>
                </h3>

                <div className="al-category-shop-btn">
                    <Link
                        href="/shop-details"
                        className="tal-shop-btn al-shop-btn-border"
                    >
                        Add to Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryItem;