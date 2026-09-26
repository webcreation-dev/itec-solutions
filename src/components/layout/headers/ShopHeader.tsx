"use client";
import CartSidebar from "@/components/common/cart/CartSidebar";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import { PrimaryOffcanvas } from "@/components/common";
import { shopSocialLinks } from "@/data/social-data";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import { CallIcon, CartIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const ShopHeader = () => {
    const { toggleMainSidebar, toggleMiniCart } = useGlobalContext();
    const isSticky = useStickyHeader(20);
    const isDarkTheme = useIsDarkRoute();

    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const headerClasses = {
        stickyBg: isDarkTheme ? "sticky-black-bg" : "sticky-white-bg",
        dropdownBg: isDarkTheme ? "dropdown-black-bg" : "dropdown-white-bg",
        textColor: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-1",
        hoverTextColor: isDarkTheme ? "hover-text-grey" : "",
        cartFill: isDarkTheme ? "currentColor" : "#10302A"
    };

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area pre-header tp-header-pb-wrap ${headerClasses.stickyBg} tp-header-blur header-transparent ${isSticky ? "header-sticky" : ""
                    }`}>
                    <div className="tp-header-pb-top d-none d-lg-block">
                        <div className="container-fluid container-1800">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="tp-header-pb-contact">
                                        <ul>
                                            <li>welcome to Handyman & Services Template</li>
                                            <li>Office Hours: Mon - Friday 6.00 AM - 12.00 PM</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="tp-header-pb-social">
                                        <ul>
                                            {shopSocialLinks.map((item, index) => {
                                                const Icon = item.icon;
                                                return (
                                                    <li key={index}>
                                                        <Link href={item.href}>
                                                            {typeof Icon === "string" ? (
                                                                <i className={Icon}></i>
                                                            ) : (
                                                                <Icon />
                                                            )}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-header-pb-bottom p-relative z-index-1">
                        <span className="tp-header-pb-logobg"></span>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-4 col-md-4 col-7">
                                    <div className="tp-header-logo tp-header-pb-logo pl-60">
                                        <Link href="/"><Image width={150} height={37} src="/assets/img/logo/logo-white-2.png" alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 d-none d-xl-block">
                                    <div className={`tp-main-menu tp-main-menu-pb tp-header-dropdown ${headerClasses.dropdownBg} ml-35 d-flex`}>
                                        <nav className="tp-mobile-menu-active">
                                            <HeaderMenus />
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-8 col-md-8 col-5">
                                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                                        <div className="cartmini-open-btn tp-header-pb-cart p-relative d-inline-block">
                                            <button onClick={toggleMiniCart} className="tp-header-pb-cart-icon">
                                                <CartIcon fillColor={headerClasses.cartFill} />
                                                <span className="tp-header-pb-cart-count tp-ff-funnel fw-600 fs-14 tp-text-grey-5">3</span>
                                            </button>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <div className="tp-header-pb-helpline ml-40 pl-35 d-flex align-content-center">
                                                <span className="tp-header-pb-helpline-icon mr-15">
                                                    <CallIcon />
                                                </span>
                                                <div className="tp-header-pb-helpline-numbar">
                                                    <span className={`tp-ff-inter fw-500 fs-14 text-uppercase ${headerClasses.textColor} d-block lh-1`}>Need Help</span>
                                                    <Link href="tel:+5(250)125865" className={`tp-ff-inter fw-700 fs-16 ${headerClasses.textColor} ${headerClasses.hoverTextColor}`}>+5 (250) 125 865</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={toggleMainSidebar} className="tp-menu-bar tp-header-sidebar-btn tp-header-pb-sidebar ml-45">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* off canvas */}
            <PrimaryOffcanvas />
            {/* off canvas */}
            {/* cart sidebar */}
            <CartSidebar />
            {/* cart sidebar */}
        </>
    );
};

export default ShopHeader;