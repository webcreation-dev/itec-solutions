"use client";
import React, { useState } from "react";
import { useIsDarkRoute } from "@/hooks";
import NiceSelect, { NiceSelectOption } from "@/components/ui/NiceSelect";
import ProductItem from "@/components/home/shop-modern/components/ProductItem";
import { products } from "@/data/product-data";
import Link from "next/link";

const Shop = () => {
    const isDarkTheme = useIsDarkRoute();
    const [sortType, setSortType] = useState<string>("default");

    // theme classes
    const themeClasses = {
        heroBg: isDarkTheme ? "tp-bg-grey-8" : "tp-bg-common-sugar",
        heroTitle: isDarkTheme ? "tp-text-common-white" : "",
        countText: isDarkTheme ? "tp-text-grey-2" : "",
    };

    const sortOptions: NiceSelectOption[] = [
        { value: "default", text: "Default Sorting" },
        { value: "low-high", text: "Low to High" },
        { value: "high-low", text: "High to Low" },
        { value: "new-added", text: "New Added" },
        { value: "on-sale", text: "On Sale" },
    ];

    const handleSortChange = (item: NiceSelectOption) => {
        setSortType(item.value as string);
    };

    // Sort products
    const getSortedProducts = () => {
        const list = [...products.slice(0, 26)];
        if (sortType === "low-high") {
            return list.sort((a, b) => a.price - b.price);
        }
        if (sortType === "high-low") {
            return list.sort((a, b) => b.price - a.price);
        }
        if (sortType === "new-added") {
            return list.sort((a, b) => b.id - a.id);
        }
        if (sortType === "on-sale") {
            return list.sort((a, b) => {
                const aSale = a.badge?.text.toLowerCase().includes("sale") || a.badge?.text.includes("%") || a.oldPrice;
                const bSale = b.badge?.text.toLowerCase().includes("sale") || b.badge?.text.includes("%") || b.oldPrice;
                return (bSale ? 1 : 0) - (aSale ? 1 : 0);
            });
        }
        return list;
    };

    const sortedProducts = getSortedProducts().slice(0, 12);

    return (
        <main>
            {/* tp-product-hero-area-start */}
            <div className={`tp-product-hero pre-header ${themeClasses.heroBg}`}>
                <div className="container containers">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-product-hero-content text-center">
                                <h2 className={`mb-15 tp-ff-dm ${themeClasses.heroTitle}`}>Our products</h2>
                                <div className="tp-breadcrumb-list tp-breadcrumb-2-list">
                                    <ul className="justify-content-center">
                                        <li><Link href="/">Home</Link></li>
                                        <li><span></span></li>
                                        <li>Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-product-hero-area-end */}

            {/* tp-product-area-start */}
            <div className="tp-product-ptb pre-header pt-120 pb-60">
                <div className="container containers">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="tp-shop-top-left mb-25 mt-10">
                                <p className={`mb-0 tp-ff-dm ${themeClasses.countText}`}>
                                    Showing 1–{sortedProducts.length} of {products.slice(0, 26).length} results
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="tp-product-top-select d-flex justify-content-sm-end mb-30">
                                <NiceSelect
                                    options={sortOptions}
                                    placeholder="Default Sorting"
                                    onChange={handleSortChange}
                                    className="tp-select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {sortedProducts.map((product, idx) => (
                            <ProductItem key={product.id || idx} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            {/* tp-product-area-end */}
        </main>
    );
};

export default Shop;