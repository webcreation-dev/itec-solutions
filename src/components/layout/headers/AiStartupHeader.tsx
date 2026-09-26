"use client";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import Image from "next/image";
import Link from "next/link";

const AiStartupHeader = () => {
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
        btnText: isDark ? "tp-text-common-white" : "tp-text-common-black-6",
    };
    const brandLogo = isDark ? "/assets/img/logo/logo-white-2.png" : "/assets/img/logo/logo-black-2.png";

    // -------------------------------
    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area pre-header ${headerClasses.stickyBg} tp-header-ai-wrap header-transparent ${isSticky ? "header-sticky" : ""}`}>
                    <div className="container-fluid container-1824">
                        <div className="tp-header-ai-bg">
                            <div className="row align-items-center">
                                <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="tp-header-logo">
                                        <Link href="/"><Image width={150} height={37} src={brandLogo} alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                                    <div className={`tp-main-menu tp-main-menu-ai tp-header-dropdown ${headerClasses.dropdownBg} d-flex justify-content-center`}>
                                        <nav className="tp-mobile-menu-active">
                                            <HeaderMenus />
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-8 col-sm-8 col-6">
                                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                                        <div className="tp-header-btn d-none d-sm-inline-block">
                                            <SmartLink href="/contact-us" className={`tp-btn-ai p-relative hover-text-white d-inline-block text-uppercase ${headerClasses.btnText} lh-1 fs-16 fw-700 tp-ff-dm`}>Contact Us</SmartLink>
                                        </div>
                                        <button onClick={toggleMainSidebar} className="tp-menu-bar tp-header-sidebar-btn tp-header-2-menu-btn tp-header-ai-menu-btn ml-20">
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

export default AiStartupHeader;