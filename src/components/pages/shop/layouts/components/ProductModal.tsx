/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import toast from "react-hot-toast";
import { ProductDT } from "@/types/product-d";
import Modal from "react-bootstrap/Modal";

interface ContentProps {
    product: ProductDT;
    handleClose: () => void;
}

const ProductModalContent: React.FC<ContentProps> = ({ product, handleClose }) => {
    const validImages = product.images.filter(img => !/-\d+-\d+/.test(img));
    const [activeImg, setActiveImg] = useState<string>(validImages[0] || product.images[0]);
    const [quantity, setQuantity] = useState<number>(1);
    const [activeColor, setActiveColor] = useState<string>(
        product.colors && product.colors.length > 0 ? product.colors[0] : ""
    );

    // Reset local state when product changes
    useEffect(() => {
        const validImgs = product.images.filter(img => !/-\d+-\d+/.test(img));
        setActiveImg(validImgs[0] || product.images[0]);
        setQuantity(1);
        setActiveColor(
            product.colors && product.colors.length > 0 ? product.colors[0] : ""
        );
    }, [product]);

    const handleAddToCart = () => {
        toast.success(`${quantity} x ${product.title} added to cart!`);
        handleClose();
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left: Image gallery */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="tp-product-details-thumb-wrapper d-flex flex-column align-items-center">
                        <div className="tp-product-details-nav-main-thumb mb-15 fix p-relative w-100" style={{ height: "380px", overflow: "hidden" }}>
                            <Image
                                src={activeImg || product.images[0]}
                                alt={product.title}
                                fill
                                style={{ objectFit: "cover" }}
                                className="img-fluid rounded"
                            />
                        </div>
                        {validImages.length > 1 && (
                            <div className="d-flex justify-content-center gap-2 flex-wrap">
                                {validImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImg(img)}
                                        className={`border rounded p-1 ${activeImg === img ? "border-primary" : "border-light"}`}
                                        style={{ width: "60px", height: "60px", position: "relative", overflow: "hidden" }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.title} thumb ${index}`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Product details */}
                <div className="col-md-6">
                    <div className="tp-product-details-wrapper ps-md-3">
                        <span className="tp-product-details-category text-uppercase fs-12 fw-600 text-muted mb-2 d-block">
                            {product.category}
                        </span>
                        <h3 className="tp-product-details-title fw-700 mb-15">
                            {product.title}
                        </h3>

                        {/* Rating */}
                        <div className="d-flex align-items-center gap-2 mb-15">
                            <div className="text-warning">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fa-star ${i < product.rating ? "fa-solid" : "fa-regular"}`}
                                    ></i>
                                ))}
                            </div>
                            <span className="fs-14 text-muted">({product.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="tp-product-details-price-wrapper mb-20">
                            {product.oldPrice && (
                                <span className="tp-product-details-price old-price text-decoration-line-through me-2 text-muted fs-18">
                                    ${product.oldPrice.toFixed(2)}
                                </span>
                            )}
                            <span className="tp-product-details-price new-price fw-700 text-success fs-24">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>

                        <p className="text-muted mb-20 fs-14">
                            {product.description}
                        </p>

                        {/* Variation Colors */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="mb-20">
                                <h4 className="fs-14 fw-600 mb-10">Color:</h4>
                                <div className="d-flex gap-2">
                                    {product.colors.map((color, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveColor(color)}
                                            className="rounded-circle border-0"
                                            style={{
                                                backgroundColor: color,
                                                width: "25px",
                                                height: "25px",
                                                outline: activeColor === color ? "2px solid var(--tp-theme-primary, #10302A)" : "none",
                                                outlineOffset: "2px",
                                                cursor: "pointer"
                                            }}
                                            title={color}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="tp-product-details-action-item-wrapper d-flex align-items-center mb-20">
                            <div className="tp-product-details-quantity">
                                <div className="tp-product-quantity mb-15 mr-15">
                                    <button type="button" className="tp-cart-minus" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} aria-label="Decrease quantity">
                                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <input className="tp-cart-input" type="text" value={quantity} readOnly />
                                    <button type="button" className="tp-cart-plus" onClick={() => setQuantity(q => q + 1)} aria-label="Increase quantity">
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.5 10.5V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="tp-product-details-add-to-cart mb-15 w-100">
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="tp-product-details-add-to-cart-btn w-100"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div className="fs-14 mb-10">
                            <span className="fw-600">Availability: </span>
                            <span className={product.stock ? "text-success fw-600" : "text-danger fw-600"}>
                                {product.stock ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        <div className="fs-14">
                            <span className="fw-600">SKU: </span>
                            <span className="text-muted">{product.sku}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductModal = () => {
    const { activeProduct, setActiveProduct } = useGlobalContext();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleClose = () => {
        if (setActiveProduct) {
            setActiveProduct(null);
        }
    };

    return (
        <Modal
            show={!!activeProduct}
            onHide={handleClose}
            centered
            size="lg"
            contentClassName="border-0"
        >
            <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>
            <Modal.Body className="pt-0">
                {activeProduct && (
                    <ProductModalContent product={activeProduct} handleClose={handleClose} />
                )}
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
