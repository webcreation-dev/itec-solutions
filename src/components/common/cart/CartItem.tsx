import SmartLink from '../SmartLink';
import Image from 'next/image';

interface cartItemProps {
    id: number,
    title: string,
    price: number,
    quantity: number,
    img: string,
}

const CartItem: React.FC<cartItemProps> = ({ img, title, price, quantity }) => {
    return (
        <div className="cartmini__widget-item">

            <div className="cartmini__thumb">
                <SmartLink href="/shop-details">
                    <Image width={70} height={77} src={img} alt={title} />
                </SmartLink>
            </div>

            <div className="cartmini__content">
                <h5 className="cartmini__title">
                    <SmartLink href="/shop-details">{title}</SmartLink>
                </h5>

                <div className="cartmini__price-wrapper">
                    <span className="cartmini__price">
                        ${price.toFixed(2)}
                    </span>
                    <span className="cartmini__quantity">
                        x{quantity}
                    </span>
                </div>
            </div>

            <button className="cartmini__del">
                <i className="fa-regular fa-xmark"></i>
            </button>

        </div>
    );
};

export default CartItem;