"use client";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import { ArrowIconFourteen } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const VideoProductionHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isSticky = useStickyHeader(20);
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const headerClassNames = {
        stickyBg: isDark ? "sticky-black-bg" : "sticky-white-bg",
        dropdownBg: isDark ? "dropdown-black-bg" : "dropdown-white-bg",
    };
    const brandLogo = isDark
        ? "/assets/img/logo/logo-white-2.png"
        : "/assets/img/logo/logo-black-3.png";
    // -------------------------------
    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area tp-header-vp-spacing pre-header ${headerClassNames.stickyBg} tp-header-blur header-transparent ${isSticky ? "header-sticky" : ""}`}>
                    <div className="container-fluid container-1824">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div className="tp-header-logo">
                                    <Link href="/"><Image width={150} height={36} src={brandLogo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                                <div className={`tp-main-menu tp-main-menu-vp tp-header-dropdown ${headerClassNames.dropdownBg} d-flex justify-content-center`}>
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenus />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-8 col-sm-8 col-6">
                                <div className="tp-header-right d-flex align-items-center justify-content-end">
                                    <div className="d-none d-sm-inline-block">
                                        <div className="tp-btn-group tp-btn-vp-group">
                                            <SmartLink className="tp-btn-circle" href="/contact-us">
                                                <ArrowIconFourteen />
                                            </SmartLink>
                                            <SmartLink className="tp-btn-2 tp-btn-primary" href="contact-us">Download Now</SmartLink>
                                            <SmartLink className="tp-btn-circle" href="/contact-us">
                                                <ArrowIconFourteen />
                                            </SmartLink>
                                        </div>
                                    </div>
                                    <button onClick={toggleMainSidebar} className="tp-menu-bar tp-header-sidebar-btn ml-20 d-xl-none">
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

export default VideoProductionHeader;