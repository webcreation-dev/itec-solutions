"use client";
import { ShopBorderShape } from "@/svg/BorderLine";
import ProductItem from "../components/ProductItem";
import { products } from "@/data/product-data";
import { useState } from "react";

// tab items
const tabs = [
    { label: "All Collection", value: "all" },
    { label: "Shoes", value: "shoes" },
    { label: "Clothing", value: "clothing" },
    { label: "Bags", value: "bags" },
];

const ShopModernProduct = () => {
    const [filteredProducts, setFilteredProducts] = useState(products.slice(0, 26));
    const [visibleCount, setVisibleCount] = useState(8);
    const [activeTab, setActiveTab] = useState("all");

    // handle tab product
    const handleTabProduct = (value: string) => {
        setActiveTab(value);
        setVisibleCount(8);

        switch (value) {
            case "shoes":
                setFilteredProducts(products.filter((p) => p.shoes));
                break;

            case "clothing":
                setFilteredProducts(products.filter((p) => p.clothing));
                break;

            case "bags":
                setFilteredProducts(products.filter((p) => p.bags));
                break;

            default:
                setFilteredProducts(products);
        }
    };
    return (
        <div className="tp-product-area pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-section-shop-title-wrapper text-center mb-35">
                            <span className="al-section-shop-subtitle">
                                All Product Shop
                                <ShopBorderShape />
                            </span>
                            <h3 className="al-section-shop-title">Customer Favorite Style Product</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-product-tab tp-tab mb-50 text-center">
                            <nav>
                                <div className="nav nav-tabs justify-content-center">
                                    {tabs.map((tab, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleTabProduct(tab.value)}
                                            className={`nav-link ${activeTab === tab.value ? "active" : ""}`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active">
                                <div className="row">
                                    {filteredProducts.slice(0, visibleCount).map((product, index) => (
                                        <ProductItem product={product} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {filteredProducts.length > visibleCount && (
                            <div className="al-seller-more text-center mt-10">
                                <button onClick={() => setVisibleCount((prev) => prev + 4)} className="al-shop-btn al-shop-btn-border">Load More</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernProduct;