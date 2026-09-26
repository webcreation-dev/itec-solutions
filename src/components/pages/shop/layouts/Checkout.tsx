"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import toast from "react-hot-toast";
import NiceSelect, { NiceSelectOption } from "@/components/ui/NiceSelect";

const stateOptions: NiceSelectOption[] = [
   { value: "New York US", text: "New York US" },
   { value: "Berlin Germany", text: "Berlin Germany" },
   { value: "Paris France", text: "Paris France" },
   { value: "Tokyo Japan", text: "Tokyo Japan" },
];

const Checkout = () => {
   const isDark = useIsDarkRoute();

   const [showLogin, setShowLogin] = useState(false);
   const [showCoupon, setShowCoupon] = useState(false);
   const [couponCode, setCouponCode] = useState("");
   const [discount, setDiscount] = useState(0);

   // Form inputs state
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      country: "United States (US)",
      address1: "",
      address2: "",
      city: "",
      state: "New York US",
      postcode: "",
      phone: "",
      email: "",
      orderNotes: "",
   });

   const [paymentMethod, setPaymentMethod] = useState("bank");
   const [shippingOption, setShippingOption] = useState("flat");
   const [agree, setAgree] = useState(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleLoginSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toast.success("Successfully logged in!");
      setShowLogin(false);
   };

   const handleCouponSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (couponCode.toUpperCase() === "ALERIC20") {
         setDiscount(0.20);
         toast.success("Coupon code 'ALERIC20' applied! 20% discount applied to your order.");
         setShowCoupon(false);
      } else {
         toast.error("Invalid coupon code! Try 'ALERIC20'");
      }
   };

   const handlePlaceOrder = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.address1) {
         toast.error("Please fill in all required fields (*)");
         return;
      }
      if (!agree) {
         toast.error("You must agree to the website terms and conditions");
         return;
      }
      toast.success("Order placed successfully! Thank you for your purchase.");
   };

   const items = [
      { name: "Xiaomi Redmi Note 9", qty: 2, price: 137.00 },
      { name: "Office Chair", qty: 1, price: 74.00 },
      { name: "Apple Watch Series 6", qty: 3, price: 120.67 },
   ];

   const getSubtotal = () => {
      return items.reduce((acc, item) => acc + item.price * item.qty, 0);
   };

   const getShipping = () => {
      if (shippingOption === "flat") return 20.00;
      if (shippingOption === "pickup") return 25.00;
      return 0.00;
   };

   const getTotal = () => {
      const sub = getSubtotal();
      const disc = sub * discount;
      return sub - disc + getShipping();
   };

   const themeClasses = {
      heroBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-sugar",
      heroTitle: isDark ? "tp-text-common-white" : "",
   };

   return (
      <main>
         {/* tp-product-hero-area-start */}
         <div className={`tp-product-hero pre-header ${themeClasses.heroBg}`}>
            <div className="container containers">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-product-hero-content text-center">
                        <h2 className={`mb-15 tp-ff-dm ${themeClasses.heroTitle}`}>Checkout</h2>
                        <div className="tp-breadcrumb-list tp-breadcrumb-2-list">
                           <ul className="justify-content-center">
                              <li><Link href={isDark ? "/dark/shop" : "/shop"}>Home</Link></li>
                              <li><span></span></li>
                              <li className={isDark ? "text-white" : ""}>Checkout</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* tp-product-hero-area-end */}

         {/* checkout area start */}
         <div className="tp-checkout-area pre-header pb-120 pt-160">
            <div className="container containers">
               <div className="row">
                  {/* Verification forms */}
                  <div className="col-xl-7 col-lg-7">
                     <div className="tp-checkout-verify">
                        <div className="tp-checkout-verify-item">
                           <p className="tp-checkout-verify-reveal">
                              Returning customer?{" "}
                              <button type="button" className="tp-checkout-login-form-reveal-btn" onClick={() => setShowLogin(!showLogin)}>
                                 Click here to login
                              </button>
                           </p>

                           {showLogin && (
                              <div className="tp-return-customer" style={{ display: "block" }}>
                                 <form onSubmit={handleLoginSubmit}>
                                    <div className="tp-return-customer-input">
                                       <label>Email</label>
                                       <input type="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="tp-return-customer-input">
                                       <label>Password</label>
                                       <input type="password" placeholder="Password" required />
                                    </div>

                                    <div className="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                                       <div className="tp-return-customer-remeber">
                                          <input id="remember" type="checkbox" />
                                          <label htmlFor="remember">Remember me</label>
                                       </div>
                                       <div className="tp-return-customer-forgot">
                                          <a href="#">Forgot Password?</a>
                                       </div>
                                    </div>
                                    <button type="submit" className="tp-return-customer-btn tp-checkout-btn">Login</button>
                                 </form>
                              </div>
                           )}
                        </div>
                        <div className="tp-checkout-verify-item">
                           <p className="tp-checkout-verify-reveal">
                              Have a coupon?{" "}
                              <button type="button" className="tp-checkout-coupon-form-reveal-btn" onClick={() => setShowCoupon(!showCoupon)}>
                                 Click here to enter your code
                              </button>
                           </p>

                           {showCoupon && (
                              <div className="tp-return-customer" style={{ display: "block" }}>
                                 <form onSubmit={handleCouponSubmit}>
                                    <div className="tp-return-customer-input">
                                       <label>Coupon Code :</label>
                                       <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Coupon" required />
                                    </div>
                                    <button type="submit" className="tp-return-customer-btn tp-checkout-btn">Apply</button>
                                 </form>
                              </div>
                           )}
                        </div>
                     </div>

                     {/* Billing details form */}
                     <div className="tp-checkout-bill-area">
                        <h3 className="tp-checkout-bill-title">Billing Details</h3>
                        <div className="tp-checkout-bill-form">
                           <div className="tp-checkout-bill-inner">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>First Name <span>*</span></label>
                                       <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>Last Name <span>*</span></label>
                                       <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Company name (optional)</label>
                                       <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Example LTD." />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Country / Region </label>
                                       <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="United States (US)" />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Street address <span>*</span></label>
                                       <input type="text" name="address1" value={formData.address1} onChange={handleInputChange} placeholder="House number and street name" required />
                                    </div>
                                    <div className="tp-checkout-input">
                                       <input type="text" name="address2" value={formData.address2} onChange={handleInputChange} placeholder="Apartment, suite, unit, etc. (optional)" />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Town / City <span>*</span></label>
                                       <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Town / City" required />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>State / County</label>
                                       <NiceSelect
                                          options={stateOptions}
                                          placeholder={formData.state}
                                          onChange={(item) => setFormData(prev => ({ ...prev, state: String(item.value) }))}
                                       />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>Postcode ZIP <span>*</span></label>
                                       <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} placeholder="Postcode" required />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Phone <span>*</span></label>
                                       <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number" required />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Email address <span>*</span></label>
                                       <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Order notes (optional)</label>
                                       <textarea name="orderNotes" value={formData.orderNotes} onChange={handleInputChange} placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Order details panel */}
                  <div className="col-xl-5 col-lg-5">
                     <div className="tp-checkout-place white-bg">
                        <h3 className="tp-checkout-place-title">Your Order</h3>

                        <div className="tp-order-info-list">
                           <ul>
                              {/* header */}
                              <li className="tp-order-info-list-header">
                                 <h4>Product</h4>
                                 <h4>Total</h4>
                              </li>

                              {/* item list */}
                              {items.map((item, idx) => (
                                 <li key={idx} className="tp-order-info-list-desc">
                                    <p>{item.name} <span> x {item.qty}</span></p>
                                    <span>${(item.price * item.qty).toFixed(2)}</span>
                                 </li>
                              ))}

                              {/* subtotal */}
                              <li className="tp-order-info-list-subtotal">
                                 <span>Subtotal</span>
                                 <span>${getSubtotal().toFixed(2)}</span>
                              </li>

                              {discount > 0 && (
                                 <li className="tp-order-info-list-desc text-success">
                                    <p>Discount (20%)</p>
                                    <span>-${(getSubtotal() * discount).toFixed(2)}</span>
                                 </li>
                              )}

                              {/* shipping */}
                              <li className="tp-order-info-list-shipping">
                                 <span>Shipping</span>
                                 <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                                    <span>
                                       <input id="flat_rate" type="radio" name="shipping" checked={shippingOption === "flat"} onChange={() => setShippingOption("flat")} />
                                       <label htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                                    </span>
                                    <span>
                                       <input id="local_pickup" type="radio" name="shipping" checked={shippingOption === "pickup"} onChange={() => setShippingOption("pickup")} />
                                       <label htmlFor="local_pickup">Local pickup: <span>$25.00</span></label>
                                    </span>
                                    <span>
                                       <input id="free_shipping" type="radio" name="shipping" checked={shippingOption === "free"} onChange={() => setShippingOption("free")} />
                                       <label htmlFor="free_shipping">Free shipping</label>
                                    </span>
                                 </div>
                              </li>

                              {/* total */}
                              <li className="tp-order-info-list-total">
                                 <span>Total</span>
                                 <span>${getTotal().toFixed(2)}</span>
                              </li>
                           </ul>
                        </div>

                        {/* Payment selector */}
                        <div className="tp-checkout-payment">
                           <div className="tp-checkout-payment-item">
                              <input type="radio" id="back_transfer" name="payment" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} />
                              <label htmlFor="back_transfer">Direct Bank Transfer</label>
                              <div className="tp-checkout-payment-desc direct-bank-transfer" style={{ display: paymentMethod === "bank" ? "block" : "none" }}>
                                 <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                              </div>
                           </div>
                           <div className="tp-checkout-payment-item">
                              <input type="radio" id="cheque_payment" name="payment" checked={paymentMethod === "cheque"} onChange={() => setPaymentMethod("cheque")} />
                              <label htmlFor="cheque_payment">Cheque Payment</label>
                              <div className="tp-checkout-payment-desc cheque-payment" style={{ display: paymentMethod === "cheque" ? "block" : "none" }}>
                                 <p>Please send a physical check to our corporate office. Your order will ship once the check has been cleared.</p>
                              </div>
                           </div>
                           <div className="tp-checkout-payment-item">
                              <input type="radio" id="cod" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                              <label htmlFor="cod">Cash on Delivery</label>
                              <div className="tp-checkout-payment-desc cash-on-delivery" style={{ display: paymentMethod === "cod" ? "block" : "none" }}>
                                 <p>Pay with cash upon delivery of your items to your door.</p>
                              </div>
                           </div>
                           <div className="tp-checkout-payment-item paypal-payment">
                              <input type="radio" id="paypal" name="payment" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} />
                              <label htmlFor="paypal">
                                 PayPal <img src="/assets/img/login/payment-option.png" alt="paypal" /> <a href="#">What is PayPal?</a>
                              </label>
                           </div>
                        </div>

                        <div className="tp-checkout-agree">
                           <div className="tp-checkout-option">
                              <input id="read_all" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                              <label htmlFor="read_all">I have read and agree to the website. <span>*</span></label>
                           </div>
                        </div>

                        <div className="tp-checkout-btn-wrapper">
                           <button type="submit" onClick={handlePlaceOrder} className="tp-checkout-btn w-100">
                              Place Order
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* checkout area end */}
      </main>
   );
};

export default Checkout;