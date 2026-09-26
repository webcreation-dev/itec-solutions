"use client";
import { HeaderButtonArrow, HeaderSearchIcon } from "@/svg";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";

const StartupAgencyHeader = () => {
    const { toggleSearchModal, toggleMainSidebar } = useGlobalContext();
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
        : "/assets/img/logo/logo.png";

    // -------------------------------
    return (
        <>
            <header>
                <div
                    id="header-sticky"
                    className={`tp-header-area pre-header tp-header-blur ${headerClasses.stickyBg} header-transparent tp-header-lg-spacing ${isSticky ? "header-sticky" : ""
                        }`}
                >
                    <div className="container-fluid container-1800">
                        <div className="row align-items-center">
                            {/* Logo */}
                            <div className="col-xl-8 col-5">
                                <div className="tp-header-sa-wrap d-lg-flex align-items-center">
                                    <div className="tp-header-logo tp-header-sa-logo mr-50">
                                        <Link href="/">
                                            <Image width={150} height={36} src={brandLogo} alt="logo" />
                                        </Link>
                                    </div>
                                    {/* Menu */}
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <div
                                            className={`tp-main-menu tp-header-dropdown ${headerClasses.dropdownBg} d-none d-xl-block`}
                                        >
                                            <nav className="tp-mobile-menu-active">
                                                <HeaderMenus />
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Actions */}
                            <div className="col-xl-4 col-7">
                                <div className="tp-header-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-search">
                                        <button
                                            onClick={toggleSearchModal}
                                            className="tp-header-search-btn tp-search-click"
                                        >
                                            <HeaderSearchIcon />
                                        </button>
                                    </div>

                                    <div className="tp-header-btn tp-header-btn-spacing d-none d-md-inline-block ml-20">
                                        <SmartLink
                                            href="/contact"
                                            className={`tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 ${headerClasses.btnBg} text-uppercase ls-0 tp-btn-switch-animation ${headerClasses.btnText} ${headerClasses.btnHoverText} tp-ff-heading fw-500`}
                                        >
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">Let&apos;s Talk</span>
                                                <span className="btn-icon">
                                                    <HeaderButtonArrow />
                                                </span>
                                                <span className="btn-icon">
                                                    <HeaderButtonArrow />
                                                </span>
                                            </span>
                                        </SmartLink>
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

export default StartupAgencyHeader;