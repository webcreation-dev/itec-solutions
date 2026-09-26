"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import { products } from "@/data/product-data";
import toast from "react-hot-toast";

interface WishlistItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

const Wishlist = () => {
    const isDark = useIsDarkRoute();

    // Default wishlist items from product-data
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
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
    ]);

    const handleQuantityChange = (id: number, type: "inc" | "dec") => {
        setWishlistItems(prev =>
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
        setWishlistItems(prev => prev.filter(item => item.id !== id));
        toast.error(`${title} removed from wishlist`);
    };

    const themeClasses = {
        heroBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-sugar",
        heroTitle: isDark ? "tp-text-common-white" : "",
        itemTitle: isDark ? "text-white" : "",
    };

    return (
        <main>
            {/* tp-product-hero-area-start */}
            <div className={`tp-product-hero pre-header ${themeClasses.heroBg}`}>
                <div className="container containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-product-hero-content text-center">
                                <h2 className={`mb-15 tp-ff-dm ${themeClasses.heroTitle}`}>Wishlist</h2>
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list">
                                    <ul className="justify-content-center">
                                        <li><Link href={isDark ? "/dark/shop" : "/shop"}>Home</Link></li>
                                        <li><span></span></li>
                                        <li className={isDark ? "text-white" : ""}>Wishlist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-product-hero-area-end */}

            {/* wishlist area start */}
            <div className="tp-cart-area pre-header pb-120 pt-140">
                <div className="container containers">
                    {wishlistItems.length === 0 ? (
                        <div className="text-center py-5">
                            <h3 className="mb-4">Your wishlist is empty</h3>
                            <Link href={isDark ? "/dark/shop" : "/shop"} className="tp-product-details-add-to-cart-btn px-5 py-3 rounded text-uppercase" style={{ display: "inline-block" }}>
                                Back to Shop
                            </Link>
                        </div>
                    ) : (
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-8">
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
                                            {wishlistItems.map((item) => (
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
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* wishlist area end */}
        </main>
    );
};

export default Wishlist;