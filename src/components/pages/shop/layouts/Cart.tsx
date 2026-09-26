"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import { products } from "@/data/product-data";
import toast from "react-hot-toast";

interface CartItem {
   id: number;
   title: string;
   price: number;
   image: string;
   quantity: number;
}

const Cart = () => {
   const isDark = useIsDarkRoute();

   // Default cart items from product-data
   const [cartItems, setCartItems] = useState<CartItem[]>([
      {
         id: 1,
         title: products[0]?.title || "Polarized Sunglasses",
         price: products[0]?.price || 120.00,
         image: products[0]?.images[0] || "/assets/img/product/product-1.jpg",
         quantity: 1,
      },
      {
         id: 2,
         title: products[1]?.title || "Cotton T-shirt",
         price: products[1]?.price || 340.00,
         image: products[1]?.images[0] || "/assets/img/product/product-2.jpg",
         quantity: 1,
      },
      {
         id: 3,
         title: products[2]?.title || "Ramie Shirt",
         price: products[2]?.price || 420.00,
         image: products[2]?.images[0] || "/assets/img/product/product-3.jpg",
         quantity: 1,
      },
      {
         id: 4,
         title: products[3]?.title || "Fitted Top",
         price: products[3]?.price || 93.00,
         image: products[3]?.images[0] || "/assets/img/product/product-4.jpg",
         quantity: 1,
      },
   ]);

   const [couponCode, setCouponCode] = useState("");
   const [discount, setDiscount] = useState(0);
   const [shippingOption, setShippingOption] = useState<"flat" | "pickup" | "free">("flat");

   const handleQuantityChange = (id: number, type: "inc" | "dec") => {
      setCartItems(prev =>
         prev.map(item => {
            if (item.id === id) {
               const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
               return { ...item, quantity: newQty > 0 ? newQty : 1 };
            }
            return item;
         })
      );
   };

   const handleRemove = (id: number, title: string) => {
      setCartItems(prev => prev.filter(item => item.id !== id));
      toast.error(`${title} removed from cart`);
   };

   const handleApplyCoupon = (e: React.FormEvent) => {
      e.preventDefault();
      if (couponCode.toUpperCase() === "ALERIC20") {
         setDiscount(0.20); // 20% discount
         toast.success("Coupon code 'ALERIC20' applied successfully! 20% Discount active.");
      } else {
         toast.error("Invalid coupon code! Try 'ALERIC20'");
      }
   };

   const getSubtotal = () => {
      return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
   };

   const getShippingCost = () => {
      if (shippingOption === "flat") return 20;
      if (shippingOption === "pickup") return 25;
      return 0;
   };

   const getTotal = () => {
      const sub = getSubtotal();
      const disc = sub * discount;
      return sub - disc + getShippingCost();
   };

   const themeClasses = {
      heroBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-sugar",
      heroTitle: isDark ? "tp-text-common-white" : "",
      tableText: isDark ? "text-white" : "",
      itemTitle: isDark ? "text-white" : "",
      checkoutBg: isDark ? "tp-bg-grey-8" : "",
      formLabel: isDark ? "text-white" : "",
   };

   return (
      <main>
         {/* tp-product-hero-area-start */}
         <div className={`tp-product-hero pre-header ${themeClasses.heroBg}`}>
            <div className="container containers">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-product-hero-content text-center">
                        <h2 className={`mb-15 tp-ff-dm ${themeClasses.heroTitle}`}>Shopping Cart</h2>
                        <div className="tp-breadcrumb-list tp-breadcrumb-2-list">
                           <ul className="justify-content-center">
                              <li><Link href={isDark ? "/dark/shop" : "/shop"}>Home</Link></li>
                              <li><span></span></li>
                              <li className={isDark ? "text-white" : ""}>Shopping Cart</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* tp-product-hero-area-end */}

         {/* cart area start */}
         <div className="tp-cart-area pre-header pb-120 pt-140">
            <div className="container">
               {cartItems.length === 0 ? (
                  <div className="text-center py-5">
                     <h3 className="mb-4">Your cart is empty</h3>
                     <Link href={isDark ? "/dark/shop" : "/shop"} className="tp-product-details-add-to-cart-btn px-5 py-3 rounded text-uppercase" style={{ display: "inline-block" }}>
                        Go to Shop
                     </Link>
                  </div>
               ) : (
                  <div className="row">
                     <div className="col-xl-9 col-lg-8">
                        <div className="tp-cart-list mb-25 mr-30" style={{ overflowX: "auto" }}>
                           <table className="table align-middle">
                              <thead>
                                 <tr>
                                    <th colSpan={2} className="tp-cart-header-product">Product</th>
                                    <th className="tp-cart-header-price">Price</th>
                                    <th className="tp-cart-header-quantity">Quantity</th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {cartItems.map((item) => (
                                    <tr key={item.id}>
                                       {/* img */}
                                       <td className="tp-cart-img" style={{ width: "120px" }}>
                                          <Link href={isDark ? `/dark/shop-details/${item.id}` : `/shop-details/${item.id}`}>
                                             <img src={item.image} alt={item.title} className="rounded" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                          </Link>
                                       </td>
                                       {/* title */}
                                       <td className="tp-cart-title">
                                          <Link href={isDark ? `/dark/shop-details/${item.id}` : `/shop-details/${item.id}`} className={themeClasses.itemTitle}>
                                             {item.title}
                                          </Link>
                                       </td>
                                       {/* price */}
                                       <td className="tp-cart-price">
                                          <span className={isDark ? "text-white" : ""}>${item.price.toFixed(2)}</span>
                                       </td>
                                       {/* quantity */}
                                       <td className="tp-cart-quantity tp-product-details-quantity">
                                          <div className="tp-product-quantity mt-10 mb-10">
                                             <button type="button" className="tp-cart-minus" onClick={() => handleQuantityChange(item.id, "dec")} aria-label="Decrease quantity">
                                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M1 1H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </button>
                                             <input className="tp-cart-input" type="text" value={item.quantity} readOnly />
                                             <button type="button" className="tp-cart-plus" onClick={() => handleQuantityChange(item.id, "inc")} aria-label="Increase quantity">
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                   <path d="M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                             </button>
                                          </div>
                                       </td>
                                       {/* action */}
                                       <td className="tp-cart-action">
                                          <button className="tp-cart-action-btn border-0 bg-transparent text-danger d-flex align-items-center gap-1" onClick={() => handleRemove(item.id, item.title)}>
                                             <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor" />
                                             </svg>
                                             <span>Remove</span>
                                          </button>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        <div className="tp-cart-bottom">
                           <div className="row align-items-end">
                              <div className="col-xl-6 col-md-8">
                                 <div className="tp-cart-coupon">
                                    <form onSubmit={handleApplyCoupon}>
                                       <div className="tp-cart-coupon-input-box">
                                          <label className={themeClasses.formLabel}>Coupon Code:</label>
                                          <div className="tp-cart-coupon-input d-flex align-items-center">
                                             <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter Coupon (ALERIC20)" />
                                             <button type="submit">Apply</button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-md-4">
                                 <div className="tp-cart-update text-md-end">
                                    <button type="button" className="tp-cart-update-btn" onClick={() => toast.success("Cart updated successfully!")}>Update Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className={`tp-cart-checkout-wrapper ${isDark ? "tp-bg-grey-8 border border-secondary" : ""}`}>
                           <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                              <span className={`tp-cart-checkout-top-title ${isDark ? "text-white" : ""}`}>Subtotal</span>
                              <span className={`tp-cart-checkout-top-price ${isDark ? "text-white" : ""}`}>${getSubtotal().toFixed(2)}</span>
                           </div>
                           {discount > 0 && (
                              <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between border-bottom pb-2">
                                 <span className="text-success">Discount (20%)</span>
                                 <span className="text-success">-${(getSubtotal() * discount).toFixed(2)}</span>
                              </div>
                           )}
                           <div className="tp-cart-checkout-shipping">
                              <h4 className={`tp-cart-checkout-shipping-title ${isDark ? "text-white" : ""}`}>Shipping</h4>
                              <div className="tp-cart-checkout-shipping-option-wrapper">
                                 <div className="tp-cart-checkout-shipping-option d-flex align-items-center gap-2 mb-2">
                                    <input id="flat_rate" type="radio" name="shipping" checked={shippingOption === "flat"} onChange={() => setShippingOption("flat")} />
                                    <label htmlFor="flat_rate" className={isDark ? "text-white" : ""}>Flat rate: <span>$20.00</span></label>
                                 </div>
                                 <div className="tp-cart-checkout-shipping-option d-flex align-items-center gap-2 mb-2">
                                    <input id="local_pickup" type="radio" name="shipping" checked={shippingOption === "pickup"} onChange={() => setShippingOption("pickup")} />
                                    <label htmlFor="local_pickup" className={isDark ? "text-white" : ""}>Local pickup: <span>$25.00</span></label>
                                 </div>
                                 <div className="tp-cart-checkout-shipping-option d-flex align-items-center gap-2 mb-2">
                                    <input id="free_shipping" type="radio" name="shipping" checked={shippingOption === "free"} onChange={() => setShippingOption("free")} />
                                    <label htmlFor="free_shipping" className={isDark ? "text-white" : ""}>Free shipping</label>
                                 </div>
                              </div>
                           </div>
                           <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                              <span className={isDark ? "text-white" : ""}>Total</span>
                              <span className={isDark ? "text-white" : ""}>${getTotal().toFixed(2)}</span>
                           </div>
                           <div className="tp-cart-checkout-proceed">
                              <Link href={isDark ? "/dark/checkout" : "/checkout"} className="tp-cart-checkout-btn w-100 text-center text-uppercase py-3 d-block">
                                 Proceed to Checkout
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
         {/* cart area end */}
      </main>
   );
};

export default Cart;