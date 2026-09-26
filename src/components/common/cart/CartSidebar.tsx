import useGlobalContext from "@/hooks/useContext";
import SmartLink from "../SmartLink";
import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    title: "Woven Chair",
    price: 120,
    quantity: 2,
    img: "/assets/img/product/shop/shop-thumb-1.png",
  },
  {
    id: 2,
    title: "Paxous Chair",
    price: 120,
    quantity: 2,
    img: "/assets/img/product/shop/shop-thumb-2.png",
  },
  {
    id: 3,
    title: "Plush White Chair",
    price: 120,
    quantity: 2,
    img: "/assets/img/product/shop/shop-thumb-3.png",
  },
];

const CartSidebar = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const { isMiniCartOpen, toggleMiniCart } = useGlobalContext();

  return (
    <>
      <div className={`cartmini__area ${isMiniCartOpen ? "cartmini-opened" : ""}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">

          {/* TOP */}
          <div className="cartmini__top-wrapper">

            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Shopping cart</h4>
              </div>

              <div className="cartmini__close">
                <button onClick={toggleMiniCart} type="button" className="cartmini__close-btn cartmini-close-btn">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>

            {/* SHIPPING */}
            <div className="cartmini__shipping">
              <p>
                Free Shipping for all orders over <span>$50</span>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            {/* CART ITEMS */}
            <div className="cartmini__widget">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* CHECKOUT */}
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Subtotal:</h4>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="cartmini__checkout-btn">
              <SmartLink
                href="/cart"
                className="tp-bg-theme-secondary tp-btn-pb-cart no-border tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 mb-10 w-100 d-block text-center hover-text-black"
              >
                View Cart
              </SmartLink>

              <SmartLink
                href="/checkout"
                className="tp-btn-border-white tp-round-36 tp-btn-pb-spacing tp-btn-pb-cart pb-border lh-1 tp-ff-inter fw-700 fs-16 tp-text-common-black-5 w-100 d-block text-center hover-text-white"
              >
                Checkout
              </SmartLink>
            </div>
          </div>

        </div>
      </div>
      {/* overlay */}
      <div
        onClick={toggleMiniCart}
        className={`body-overlay ${isMiniCartOpen ? "apply" : ""}`}
      />
    </>
  );
};

export default CartSidebar;