"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ProductDT } from "@/types/product-d";
import { products } from "@/data/product-data";
import ProductItem from "@/components/home/shop-modern/components/ProductItem";
import { useIsDarkRoute } from "@/hooks";

interface ShopDetailsProps {
    product?: ProductDT;
}

const ShopDetails: React.FC<ShopDetailsProps> = ({ product: initialProduct }) => {
    const router = useRouter();
    const isDark = useIsDarkRoute();

    // Fallback to first product if none provided
    const product = initialProduct || products.find(p => p.id === 2) || products[0];

    // Main image gallery state
    const [activeImg, setActiveImg] = useState<string>(product.images[0]);

    // Quantity state
    const [quantity, setQuantity] = useState<number>(1);

    // Active color variation state
    const [activeColor, setActiveColor] = useState<string>(
        product.colors && product.colors.length > 0 ? product.colors[0] : ""
    );

    // Bottom tab selection state: 'desc' | 'addInfo' | 'reviews'
    const [activeTab, setActiveTab] = useState<string>("addInfo");

    // Review form state
    const [reviewRating, setReviewRating] = useState<number>(5);
    const [reviewMessage, setReviewMessage] = useState<string>("");
    const [reviewName, setReviewName] = useState<string>("");
    const [reviewEmail, setReviewEmail] = useState<string>("");
    const [saveRemember, setSaveRemember] = useState<boolean>(false);

    // Sync state when product changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveImg(product.images[0]);
        setQuantity(1);
        setActiveColor(product.colors && product.colors.length > 0 ? product.colors[0] : "");
    }, [product]);

    const handleQuantityChange = (val: number) => {
        if (val < 1) return;
        setQuantity(val);
    };

    const handleAddToCart = () => {
        toast.success(`${quantity} x ${product.title} added to cart!`);
    };

    const handleBuyNow = () => {
        toast.success(`Proceeding to checkout with ${quantity} x ${product.title}!`);
        router.push("/checkout");
    };

    const handleCompare = () => {
        toast.success(`${product.title} added to compare list!`);
    };

    const handleWishlist = () => {
        toast.success(`${product.title} added to wishlist!`);
    };

    const handleReviewSubmit = (e: React.ChangeEvent) => {
        e.preventDefault();
        if (!reviewName || !reviewEmail || !reviewMessage) {
            toast.error("Please fill out all required fields.");
            return;
        }
        toast.success("Thank you! Your review has been submitted successfully.");
        // Reset review form
        setReviewMessage("");
        setReviewName("");
        setReviewEmail("");
    };

    // Related products (retrieve products in same category, up to 4 items, excluding current)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    // If less than 4, pad with other products
    if (relatedProducts.length < 4) {
        const remaining = products
            .filter(p => p.id !== product.id && !relatedProducts.some(rp => rp.id === p.id))
            .slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...remaining);
    }

    const renderStars = (ratingVal: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
                <i className={`${i < ratingVal ? "fa-solid" : "fa-regular"} fa-star`}></i>
            </span>
        ));
    };

    const bgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-sugar";

    return (
        <main>
            {/* tp-product-hero-area-start */}
            <div className={`tp-product-hero pre-header ${bgClass}`}>
                <div className="container containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-product-hero-content text-center">
                                <h2 className={`mb-15 tp-ff-dm ${isDark ? "tp-text-common-white" : ""}`}>Shop Details</h2>
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list">
                                    <ul className="justify-content-center">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li><span></span></li>
                                        <li>Shop Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-product-hero-area-end */}

            {/* product details area start */}
            <div className="tp-product-details-area pre-header pt-120">
                <div className="tp-product-details-top pb-115">
                    <div className="container">
                        <div className="row">
                            {/* Left: Product Images Gallery */}
                            <div className="col-xl-7 col-lg-6">
                                <div className="tp-product-details-thumb-wrapper tp-tab d-md-flex">
                                    <div className="tab-content m-img" id="productDetailsNavContent2">
                                        <div className="tab-pane fade show active" role="tabpanel" tabIndex={0}>
                                            <div className="tp-product-details-nav-main-thumb p-relative">
                                                <img
                                                    src={activeImg}
                                                    alt={product.title}
                                                    className="rounded"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <nav>
                                        <div className="nav nav-tab flex-md-column" id="productDetailsNavThumb2" role="tablist">
                                            {product.images.map((img, index) => (
                                                <button
                                                    key={index}
                                                    className={`nav-links ${activeImg === img ? "active" : ""}`}
                                                    type="button"
                                                    onClick={() => setActiveImg(img)}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${product.title} thumb ${index + 1}`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </div> {/* col end */}

                            {/* Right: Product Details Info */}
                            <div className="col-xl-5 col-lg-6">
                                <div className="tp-product-details-wrapper">
                                    <div className="tp-product-details-category">
                                        <span>{product.category}</span>
                                    </div>
                                    <h3 className="tp-product-details-title">{product.title}</h3>

                                    {/* Inventory & Ratings */}
                                    <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                                        <div className="tp-product-details-stock mb-10">
                                            <span className={product.stock ? "text-success" : "text-danger"}>
                                                {product.stock ? "In Stock" : "Out of Stock"}
                                            </span>
                                        </div>
                                        <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                                            <div className="tp-product-details-rating">
                                                {renderStars(product.rating)}
                                            </div>
                                            <div className="tp-product-details-reviews">
                                                <span>({product.reviews} Reviews)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sort description */}
                                    <div className="tp-product-details-sort-desc">
                                        <p>{product.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="tp-product-details-price-wrapper mb-20">
                                        {product.oldPrice && product.oldPrice > 0 && (
                                            <span className="tp-product-details-price old-price">${product.oldPrice.toFixed(2)}</span>
                                        )}
                                        <span className="tp-product-details-price new-price">${product.price.toFixed(2)}</span>
                                    </div>

                                    {/* Variations (Color) */}
                                    {product.colors && product.colors.length > 0 && (
                                        <div className="tp-product-details-variation">
                                            <div className="tp-product-details-variation-item">
                                                <h4 className="tp-product-details-variation-title">Color :</h4>
                                                <div className="tp-product-details-variation-list">
                                                    {product.colors.map((color, idx) => (
                                                        <button
                                                            key={idx}
                                                            type="button"
                                                            className={`color tp-color-variation-btn ${activeColor === color ? "active" : ""}`}
                                                            onClick={() => setActiveColor(color)}
                                                        >
                                                            <span style={{ backgroundColor: color }}></span>
                                                            <span className="tp-color-variation-tootltip">{color}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Quantity & Actions */}
                                    <div className="tp-product-details-action-wrapper">
                                        <h3 className="tp-product-details-action-title">Quantity</h3>
                                        <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
                                            <div className="tp-product-details-quantity">
                                                <div className="tp-product-quantity mb-15 mr-15">
                                                    <button type="button" className="tp-cart-minus" onClick={() => handleQuantityChange(quantity - 1)} aria-label="Decrease quantity">
                                                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <input
                                                        className="tp-cart-input"
                                                        type="text"
                                                        value={quantity}
                                                        onChange={(e) => {
                                                            const num = parseInt(e.target.value);
                                                            if (!isNaN(num)) handleQuantityChange(num);
                                                        }}
                                                    />
                                                    <button type="button" className="tp-cart-plus" onClick={() => handleQuantityChange(quantity + 1)} aria-label="Increase quantity">
                                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M5.5 10.5V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="tp-product-details-add-to-cart mb-15 w-100">
                                                <button type="button" className="tp-product-details-add-to-cart-btn w-100" onClick={handleAddToCart}>
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                        <button type="button" className="tp-product-details-buy-now-btn w-100" onClick={handleBuyNow}>
                                            Buy Now
                                        </button>
                                    </div>

                                    {/* Action Buttons Sm */}
                                    <div className="tp-product-details-action-sm">
                                        <button type="button" className="tp-product-details-action-sm-btn" onClick={handleCompare}>
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.16431H10.8622C12.0451 3.16431 12.9999 4.08839 12.9999 5.23315V7.52268" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.25177 0.985168L1 3.16433L3.25177 5.34354" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.9999 12.5983H3.13775C1.95486 12.5983 1 11.6742 1 10.5295V8.23993" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.748 14.7774L12.9998 12.5983L10.748 10.4191" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Compare
                                        </button>
                                        <button type="button" className="tp-product-details-action-sm-btn" onClick={handleWishlist}>
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.33541 7.54172C3.36263 10.6766 7.42094 13.2113 8.49945 13.8387C9.58162 13.2048 13.6692 10.6421 14.6635 7.5446C15.3163 5.54239 14.7104 3.00621 12.3028 2.24514C11.1364 1.8779 9.77578 2.1014 8.83648 2.81432C8.64012 2.96237 8.36757 2.96524 8.16974 2.81863C7.17476 2.08487 5.87499 1.86999 4.69024 2.24514C2.28632 3.00549 1.68259 5.54167 2.33541 7.54172ZM8.50115 15C8.4103 15 8.32018 14.9784 8.23812 14.9346C8.00879 14.8117 2.60674 11.891 1.29011 7.87081C1.28938 7.87081 1.28938 7.8701 1.28938 7.8701C0.462913 5.33895 1.38316 2.15812 4.35418 1.21882C5.7492 0.776121 7.26952 0.97088 8.49895 1.73195C9.69029 0.993159 11.2729 0.789057 12.6401 1.21882C15.614 2.15956 16.5372 5.33966 15.7115 7.8701C14.4373 11.8443 8.99571 14.8088 8.76492 14.9332C8.68286 14.9777 8.592 15 8.50115 15Z" fill="currentColor" />
                                            </svg>
                                            Add Wishlist
                                        </button>
                                        <button type="button" className="tp-product-details-action-sm-btn" onClick={() => toast("Ask a question feature is coming soon!")}>
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.575 12.6927C8.775 12.6927 8.94375 12.6249 9.08125 12.4895C9.21875 12.354 9.2875 12.1878 9.2875 11.9907C9.2875 11.7937 9.21875 11.6275 9.08125 11.492C8.94375 11.3565 8.775 11.2888 8.575 11.2888C8.375 11.2888 8.20625 11.3565 8.06875 11.492C7.93125 11.6275 7.8625 11.7937 7.8625 11.9907C7.8625 12.1878 7.93125 12.354 8.06875 12.4895C8.20625 12.6249 8.375 12.6927 8.575 12.6927ZM8.55625 5.0638C8.98125 5.0638 9.325 5.17771 9.5875 5.40553C9.85 5.63335 9.98125 5.92582 9.98125 6.28294C9.98125 6.52924 9.90625 6.77245 9.75625 7.01258C9.60625 7.25272 9.3625 7.5144 9.025 7.79763C8.7 8.08087 8.44063 8.3795 8.24688 8.69352C8.05313 9.00754 7.95625 9.29385 7.95625 9.55246C7.95625 9.68792 8.00938 9.79567 8.11563 9.87572C8.22188 9.95576 8.34375 9.99578 8.48125 9.99578C8.63125 9.99578 8.75625 9.94653 8.85625 9.84801C8.95625 9.74949 9.01875 9.62635 9.04375 9.47857C9.08125 9.23228 9.16562 9.0137 9.29688 8.82282C9.42813 8.63195 9.63125 8.42568 9.90625 8.20402C10.2812 7.89615 10.5531 7.58829 10.7219 7.28042C10.8906 6.97256 10.975 6.62775 10.975 6.246C10.975 5.59333 10.7594 5.06996 10.3281 4.67589C9.89688 4.28183 9.325 4.0848 8.6125 4.0848C8.1375 4.0848 7.7 4.17716 7.3 4.36187C6.9 4.54659 6.56875 4.81751 6.30625 5.17463C6.20625 5.31009 6.16563 5.44863 6.18438 5.59025C6.20313 5.73187 6.2625 5.83962 6.3625 5.91351C6.5 6.01202 6.64688 6.04281 6.80313 6.00587C6.95937 5.96892 7.0875 5.88272 7.1875 5.74726C7.35 5.5256 7.54688 5.35627 7.77813 5.23929C8.00938 5.1223 8.26875 5.0638 8.55625 5.0638ZM8.5 15.7775C7.45 15.7775 6.46875 15.5897 5.55625 15.2141C4.64375 14.8385 3.85 14.3182 3.175 13.6532C2.5 12.9882 1.96875 12.2062 1.58125 11.3073C1.19375 10.4083 1 9.43547 1 8.38873C1 7.35431 1.19375 6.38762 1.58125 5.48866C1.96875 4.58969 2.5 3.80772 3.175 3.14273C3.85 2.47775 4.64375 1.95438 5.55625 1.57263C6.46875 1.19088 7.45 1 8.5 1C9.5375 1 10.5125 1.19088 11.425 1.57263C12.3375 1.95438 13.1313 2.47775 13.8063 3.14273C14.4813 3.80772 15.0156 4.58969 15.4094 5.48866C15.8031 6.38762 16 7.35431 16 8.38873C16 9.43547 15.8031 10.4083 15.4094 11.3073C15.0156 12.2062 14.4813 12.9882 13.8063 13.6532C13.1313 14.3182 12.3375 14.8385 11.425 15.2141C10.5125 15.5897 9.5375 15.7775 8.5 15.7775ZM8.5 14.6692C10.2625 14.6692 11.7656 14.0534 13.0094 12.822C14.2531 11.5905 14.875 10.1128 14.875 8.38873C14.875 6.6647 14.2531 5.18695 13.0094 3.95549C11.7656 2.72404 10.2625 2.10831 8.5 2.10831C6.7125 2.10831 5.20312 2.72404 3.97188 3.95549C2.74063 5.18695 2.125 6.6647 2.125 8.38873C2.125 10.1128 2.74063 11.5905 3.97188 12.822C5.20312 14.0534 6.7125 14.6692 8.5 14.6692Z" fill="currentColor" />
                                            </svg>
                                            Ask a question
                                        </button>
                                    </div>

                                    {/* SKU, Category, Tag */}
                                    <div className="tp-product-details-query">
                                        <div className="tp-product-details-query-item d-flex align-items-center">
                                            <span>SKU: </span>
                                            <p>{product.sku}</p>
                                        </div>
                                        <div className="tp-product-details-query-item d-flex align-items-center">
                                            <span>Category: </span>
                                            <p>{product.category}</p>
                                        </div>
                                        <div className="tp-product-details-query-item d-flex align-items-center">
                                            <span>Tag: </span>
                                            <p>{product.tags.join(", ")}</p>
                                        </div>
                                    </div>

                                    {/* Social Share */}
                                    <div className="tp-product-details-social">
                                        <span>Share: </span>
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                                    </div>

                                    {/* Shipping details */}
                                    <div className="tp-product-details-msg mb-15">
                                        <ul>
                                            <li>30 days easy returns</li>
                                            <li>Order yours before 2.30pm for same day dispatch</li>
                                        </ul>
                                    </div>

                                    {/* Payment methods */}
                                    <div className="tp-product-details-payment d-inline-flex align-items-center flex-wrap justify-content-between">
                                        <p>Guaranteed safe <br /> & secure checkout</p>
                                        <Image src="/assets/img/product/shop/payment-option.png" alt="Payment Options" width="186" height="30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom tabs: Description, Additional Info, Reviews */}
                <div className="tp-product-details-bottom pb-140">
                    <div className="container container-1230">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tp-product-details-tab-nav tp-tab">
                                    <nav>
                                        <div className="nav nav-tabs justify-content-center p-relative tp-product-tab" role="tablist">
                                            <button
                                                className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                                                type="button"
                                                onClick={() => setActiveTab("description")}
                                            >
                                                Description
                                            </button>
                                            <button
                                                className={`nav-link ${activeTab === "addInfo" ? "active" : ""}`}
                                                type="button"
                                                onClick={() => setActiveTab("addInfo")}
                                            >
                                                Additional information
                                            </button>
                                            <button
                                                className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                                                type="button"
                                                onClick={() => setActiveTab("reviews")}
                                            >
                                                Reviews ({product.reviews})
                                            </button>
                                        </div>
                                    </nav>

                                    <div className="tab-content" id="navPresentationTabContent">
                                        {/* TAB: Description */}
                                        {activeTab === "description" && (
                                            <div className="tab-pane fade show active" role="tabpanel" tabIndex={0}>
                                                <div className="tp-product-details-desc-wrapper pt-50">
                                                    <div className="row justify-content-center">
                                                        <div className="col-xl-10">
                                                            <div className="tp-product-details-desc-item">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="tp-product-details-desc-content pt-25">
                                                                            <h3 className="tp-product-details-desc-title">Product Description</h3>
                                                                            <p>{product.description}</p>
                                                                            <p>Thick knitted fabric. Short design. Straight design. Rounded neck. Sleeveless. Straps. Unclosed. Cable knit finish. Co-ord.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* TAB: Additional Information */}
                                        {activeTab === "addInfo" && (
                                            <div className="tab-pane fade show active" role="tabpanel" tabIndex={0}>
                                                <div className="tp-product-details-additional-info">
                                                    <div className="row justify-content-center">
                                                        <div className="col-xl-10">
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Brand</td>
                                                                        <td>Comfort Pointe</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Color</td>
                                                                        <td>{activeColor || "Sea Oat"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Product Dimensions</td>
                                                                        <td>34D x 30W x 42.5H</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Size</td>
                                                                        <td>unspecified</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Product Care Instructions</td>
                                                                        <td>Wipe Clean</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Unit Count</td>
                                                                        <td>1.0 Count</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Finish Type</td>
                                                                        <td>Fabric</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Theme</td>
                                                                        <td>unspecified</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Arm Style</td>
                                                                        <td>Contoured</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Surface Recommendation</td>
                                                                        <td>Hard Floor</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Furniture base movement</td>
                                                                        <td>Rock</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Indoor/Outdoor Usage</td>
                                                                        <td>Indoor</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Furniture Finish</td>
                                                                        <td>Beige</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Item Weight</td>
                                                                        <td>59 pounds</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* TAB: Reviews */}
                                        {activeTab === "reviews" && (
                                            <div className="tab-pane fade show active" role="tabpanel" tabIndex={0}>
                                                <div className="tp-product-details-review-wrapper pt-60">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="tp-product-details-review-statics">
                                                                <div className="tp-product-details-review-number d-inline-block mb-50">
                                                                    <h3 className="tp-product-details-review-number-title">Customer reviews</h3>
                                                                    <div className="tp-product-details-review-summery d-flex align-items-center">
                                                                        <div className="tp-product-details-review-summery-value">
                                                                            <span>4.5</span>
                                                                        </div>
                                                                        <div className="tp-product-details-review-summery-rating d-flex align-items-center">
                                                                            {renderStars(5)}
                                                                            <p>({product.reviews} Reviews)</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tp-product-details-review-rating-list">
                                                                        <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                                                            <span>5 Star</span>
                                                                            <div className="tp-product-details-review-rating-bar">
                                                                                <span className="tp-product-details-review-rating-bar-inner" style={{ width: "82%" }}></span>
                                                                            </div>
                                                                            <div className="tp-product-details-review-rating-percent">
                                                                                <span>82%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                                                            <span>4 Star</span>
                                                                            <div className="tp-product-details-review-rating-bar">
                                                                                <span className="tp-product-details-review-rating-bar-inner" style={{ width: "30%" }}></span>
                                                                            </div>
                                                                            <div className="tp-product-details-review-rating-percent">
                                                                                <span>30%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                                                            <span>3 Star</span>
                                                                            <div className="tp-product-details-review-rating-bar">
                                                                                <span className="tp-product-details-review-rating-bar-inner" style={{ width: "15%" }}></span>
                                                                            </div>
                                                                            <div className="tp-product-details-review-rating-percent">
                                                                                <span>15%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                                                            <span>2 Star</span>
                                                                            <div className="tp-product-details-review-rating-bar">
                                                                                <span className="tp-product-details-review-rating-bar-inner" style={{ width: "6%" }}></span>
                                                                            </div>
                                                                            <div className="tp-product-details-review-rating-percent">
                                                                                <span>6%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tp-product-details-review-rating-item d-flex align-items-center">
                                                                            <span>1 Star</span>
                                                                            <div className="tp-product-details-review-rating-bar">
                                                                                <span className="tp-product-details-review-rating-bar-inner" style={{ width: "10%" }}></span>
                                                                            </div>
                                                                            <div className="tp-product-details-review-rating-percent">
                                                                                <span>10%</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="tp-product-details-review-list pr-110">
                                                                    <h3 className="tp-product-details-review-title">Rating & Review</h3>
                                                                    <div className="tp-product-details-review-avater d-flex align-items-start mb-30">
                                                                        <div className="tp-product-details-review-avater-thumb mr-15">
                                                                            <Image src="/assets/img/product/details/user-3.jpg" alt="User Avatar" width="60" height="60" className="rounded-circle" />
                                                                        </div>
                                                                        <div className="tp-product-details-review-avater-content">
                                                                            <div className="tp-product-details-review-avater-rating d-flex align-items-center">
                                                                                {renderStars(5)}
                                                                            </div>
                                                                            <h3 className="tp-product-details-review-avater-title">Harun Rashid</h3>
                                                                            <span className="tp-product-details-review-avater-meta">06 March, 2025</span>
                                                                            <div className="tp-product-details-review-avater-comment">
                                                                                <p>Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tp-product-details-review-avater d-flex align-items-start mb-30">
                                                                        <div className="tp-product-details-review-avater-thumb mr-15">
                                                                            <Image src="/assets/img/product/details/user-4.jpg" alt="User Avatar" width="60" height="60" className="rounded-circle" />
                                                                        </div>
                                                                        <div className="tp-product-details-review-avater-content">
                                                                            <div className="tp-product-details-review-avater-rating d-flex align-items-center">
                                                                                {renderStars(4)}
                                                                            </div>
                                                                            <h3 className="tp-product-details-review-avater-title">Salim Rana</h3>
                                                                            <span className="tp-product-details-review-avater-meta">06 March, 2025</span>
                                                                            <div className="tp-product-details-review-avater-comment">
                                                                                <p>This review is for the Samsung Tab S6 Lite, 64gb wifi in blue. purchased this product performed.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Review submission form */}
                                                        <div className="col-lg-6">
                                                            <div className="tp-product-details-review-form">
                                                                <h3 className="tp-product-details-review-form-title">Review this product</h3>
                                                                <p>Your email address will not be published. Required fields are marked *</p>
                                                                <form onSubmit={handleReviewSubmit}>
                                                                    <div className="tp-product-details-review-form-rating d-flex align-items-center mb-15">
                                                                        <p className="mb-0 mr-10">Your Rating :</p>
                                                                        <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
                                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                                <span
                                                                                    key={i}
                                                                                    style={{ cursor: "pointer" }}
                                                                                    onClick={() => setReviewRating(i + 1)}
                                                                                    className="mr-5"
                                                                                >
                                                                                    <i className={`${i < reviewRating ? "fa-solid text-warning" : "fa-regular"} fa-star`}></i>
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div className="tp-product-details-review-input-wrapper">
                                                                        <div className="tp-product-details-review-input-box">
                                                                            <div className="tp-product-details-review-input-title">
                                                                                <label htmlFor="reviewMessage">Your Message *</label>
                                                                            </div>
                                                                            <div className="tp-product-details-review-input">
                                                                                <textarea
                                                                                    id="reviewMessage"
                                                                                    placeholder="Write your review here..."
                                                                                    value={reviewMessage}
                                                                                    onChange={(e) => setReviewMessage(e.target.value)}
                                                                                    required
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tp-product-details-review-input-box">
                                                                            <div className="tp-product-details-review-input-title">
                                                                                <label htmlFor="reviewName">Your Name *</label>
                                                                            </div>
                                                                            <div className="tp-product-details-review-input">
                                                                                <input
                                                                                    id="reviewName"
                                                                                    type="text"
                                                                                    placeholder="Md Harun"
                                                                                    value={reviewName}
                                                                                    onChange={(e) => setReviewName(e.target.value)}
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="tp-product-details-review-input-box">
                                                                            <div className="tp-product-details-review-input-title">
                                                                                <label htmlFor="reviewEmail">Your Email *</label>
                                                                            </div>
                                                                            <div className="tp-product-details-review-input">
                                                                                <input
                                                                                    id="reviewEmail"
                                                                                    type="email"
                                                                                    placeholder="aleric@mail.com"
                                                                                    value={reviewEmail}
                                                                                    onChange={(e) => setReviewEmail(e.target.value)}
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tp-product-details-review-suggetions mb-20">
                                                                        <div className="tp-product-details-review-remeber d-flex align-items-center">
                                                                            <input
                                                                                id="remeber"
                                                                                type="checkbox"
                                                                                checked={saveRemember}
                                                                                onChange={(e) => setSaveRemember(e.target.checked)}
                                                                            />
                                                                            <label htmlFor="remeber" className="mb-0 ml-5">Save my name, email, and website in this browser for the next time I comment.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tp-product-details-review-btn-wrapper">
                                                                        <button type="submit" className="tp-product-details-review-btn">Submit</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product details area end */}

            {/* related products area start */}
            <div className="tp-product-ptb pt-120 pb-90">
                <div className="container containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-40">
                                <h2 className="tp-ff-dm">Related Product</h2>
                            </div>
                        </div>
                        {relatedProducts.map(item => (
                            <ProductItem key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
            {/* related products area end */}
        </main>
    );
};

export default ShopDetails;