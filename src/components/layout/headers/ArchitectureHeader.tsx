"use client";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import HeaderMenus from "./components/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import { HeaderButtonArrow, HeaderSearchIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const ArchitectureHeader = () => {
    const { toggleMainSidebar, toggleSearchModal } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const headerClassNames = {
        stickyBg: isDarkTheme ? "sticky-black-bg" : "sticky-white-bg",
        dropdownBg: isDarkTheme ? "dropdown-black-bg" : "dropdown-white-bg",
    };
    // -------------------------------

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area pre-header al-header-archi ${headerClassNames.stickyBg} tp-header-blur header-transparent tp-header-lg-spacing ${isSticky ? "header-sticky" : ""
                    }`}>
                    <div className="container-fluid container-1750">
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-5">
                                <div className="tp-header-sa-wrap d-lg-flex align-items-center">
                                    <div className="tp-header-logo tp-header-sa-logo mr-50">
                                        <Link href="/">
                                            {isDarkTheme ? (
                                                <>
                                                    <Image
                                                        className="logo-1"
                                                        width={150}
                                                        height={36}
                                                        src="/assets/img/logo/logo.png"
                                                        alt="logo"
                                                    />
                                                    <Image
                                                        className="logo-2 d-none"
                                                        width={150}
                                                        height={36}
                                                        src="/assets/img/logo/logo-white.png"
                                                        alt="logo"
                                                    />
                                                </>
                                            ) : (
                                                <Image
                                                    width={150}
                                                    height={36}
                                                    src="/assets/img/logo/logo.png"
                                                    alt="logo"
                                                />
                                            )}
                                        </Link>
                                    </div>
                                    <div className={`tp-main-menu al-main-menu-archi tp-header-dropdown ${headerClassNames.dropdownBg} d-none d-xl-block`}>
                                        <nav className="tp-mobile-menu-active">
                                            <HeaderMenus />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-7">
                                <div className="tp-header-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-search">
                                        <button onClick={toggleSearchModal} className="tp-header-search-btn tp-search-click" aria-label="Rechercher">
                                            <HeaderSearchIcon />
                                        </button>
                                    </div>
                                    <div className="tp-header-btn tp-header-btn-spacing d-none d-md-inline-block ml-20">
                                        <SmartLink href="/contact" className="itec-header-talk tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-black text-uppercase ls-0 tp-btn-switch-animation tp-text-common-white hover-text-white tp-ff-heading fw-500">
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">Let&apos;s Talk</span>
                                                <span className="btn-icon"><HeaderButtonArrow /></span>
                                                <span className="btn-icon"><HeaderButtonArrow /></span>
                                            </span>
                                        </SmartLink>
                                    </div>
                                    <button onClick={toggleMainSidebar} className="tp-menu-bar al-header-dvdr tp-header-sidebar-btn tp-header-2-menu-btn tp-header-it-menu-btn ml-20">
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

export default ArchitectureHeader;
