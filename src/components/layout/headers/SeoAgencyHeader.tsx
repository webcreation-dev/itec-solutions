"use client";
import useStickyHeader from "@/hooks/useStickyHeader";
import { PrimaryOffcanvas } from "@/components/common";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import Link from "next/link";
import Image from "next/image";
import { useIsDarkRoute } from "@/hooks";

const SeoAgencyHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute();
    const logoSrc = isDark ?
        "/assets/img/logo/logo-white.png" :
        "/assets/img/logo/logo-black.png";
    const headerBtnClass = isDark ? "tp-bg-common-white" : "tp-bg-common-black-1 tp-text-grey-5";
    const headerStickyBgClass = isDark ? "sticky-black-bg" : "sticky-white-bg";
    const headerDropdownBgClass = isDark ? "dropdown-dark-bg" : "dropdown-white-bg";

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area pre-header al-header-seo tp-header-it-wrap ${headerStickyBgClass} tp-header-blur header-transparent tp-header-lg-spacing ${isSticky ? "header-sticky" : ""}`}>
                    <div className="container-fluid container-1524">
                        <div className="tp-header-it-bg tp-header-seo-bg">
                            <div className="row align-items-center">
                                <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="tp-header-logo">
                                        <Image
                                            src={logoSrc}
                                            alt="logo"
                                            width={150}
                                            height={37}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                                    <div className={`tp-main-menu tp-main-menu-it tp-header-dropdown  d-flex justify-content-center ${headerDropdownBgClass}`}>
                                        <nav className="tp-mobile-menu-active">
                                            <HeaderMenus />
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-8 col-sm-8 col-6">
                                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                                        <div className="tp-header-btn d-none d-sm-inline-block">
                                            <Link href="/register" className={`tp-btn-lg tp-header-it-btn d-inline-block ${headerBtnClass} lh-1 tp-round-26 fs-16 fw-600 tp-ff-inter`}>Sign Up</Link>
                                        </div>
                                        <button onClick={toggleMainSidebar} className="tp-menu-bar tp-header-sidebar-btn tp-header-2-menu-btn tp-header-it-menu-btn ml-20">
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
        </>
    );
};

export default SeoAgencyHeader;