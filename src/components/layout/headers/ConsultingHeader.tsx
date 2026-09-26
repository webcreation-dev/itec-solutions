"use client";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import { PrimaryOffcanvas } from "@/components/common";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import { ArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const ConsultingHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isSticky = useStickyHeader(20);
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const headerClasses = {
        stickyBg: isDark ? "sticky-black-bg" : "sticky-white-bg",
        dropdownBg: isDark ? "dropdown-black-bg" : "dropdown-white-bg",
        btnBg: isDark ? "tp-bg-common-white" : "tp-bg-common-black",
        btnText: isDark ? "tp-text-common-black" : "tp-text-common-white",
        btnHoverText: isDark ? "hover-text-black" : "hover-text-white",
    };

    const brandLogo = isDark
        ? "/assets/img/logo/logo-white-2.png"
        : "/assets/img/logo/logo-black.png";

    // -------------------------------
    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area pre-header tp-header-cst-wrap sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing ${headerClasses.stickyBg} ${isSticky ? "header-sticky" : ""}`}>
                    <div className="container-fluid container-1800">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div className="tp-header-logo">
                                    <Link href="/"><Image width={150} height={36} src={brandLogo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="tp-main-menu tp-main-menu-cst tp-header-dropdown dropdown-white-bg d-flex justify-content-center">
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenus />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-8 col-md-8 col-sm-8 col-6">
                                <div className="tp-header-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-btn d-none d-sm-inline-block">
                                        <Link href="/contact-us" className="tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">Contact Us</span>
                                                <span className="btn-icon">
                                                    <ArrowIcon />
                                                </span>
                                                <span className="btn-icon">
                                                    <ArrowIcon />
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                    <button onClick={toggleMainSidebar} className="tp-menu-bar tp-header-sidebar-btn tp-header-2-menu-btn tp-header-cst-menu-btn ml-10">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
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

export default ConsultingHeader;