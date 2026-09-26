"use client";
import { SecondaryOffcanvas, SmartLink } from "@/components/common";
import useGlobalContext from "@/hooks/useContext";
import MobileMenus from "./components/MobileMenus";
import { HeaderButtonArrow } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const PersonalPortfolioHeader = () => {
    const { toggleSecondarySidebar } = useGlobalContext();

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const headerClassNames = {
        textColor: isDark ? "tp-text-common-white" : "tp-text-common-black",
        buttonBg: isDark ? "tp-bg-common-white" : "tp-bg-common-black",
        buttonText: isDark ? "tp-text-common-black" : "tp-text-common-white",
        buttonHoverText: isDark ? "hover-text-black" : "hover-text-white",
    };
    const brandLogo = isDark
        ? "/assets/img/logo/logo-white-2.png"
        : "/assets/img/logo/logo.png";
    // -------------------------------
    
    return (
        <>
            <header>
                <div className="tp-header-area pre-header header-transparent tp-header-2-spacing">
                    <div className="container-fluid container-1800">
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-8 col-sm-5 col-6">
                                <div className="tp-header-2-logo-wrap d-flex align-items-center">
                                    <div className="tp-header-logo">
                                        <Link href="/"><Image width={150} height={37} src={brandLogo} alt="logo white" /></Link>
                                    </div>
                                    <span className={`tp-header-2-country tp-ff-heading fw-500 fs-18 ${headerClassNames.textColor} d-none d-xl-inline-block`}>
                                        <i className="fa-regular fa-globe mr-5"></i>{" "}
                                        Based on California, USA
                                    </span>
                                    <Link href="mailto:info@example.com" className={`tp-header-pp-email tp-ff-heading fw-500 fs-18 ${headerClassNames.textColor} d-none d-lg-inline-block`}>
                                        Email: info@example.com
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-7 col-6">
                                <div className="tp-header-right tp-header-2-right d-flex align-items-center justify-content-end">
                                    <button onClick={toggleSecondarySidebar} className="tp-menu-bar tp-offcanvas-open-btn tp-header-sidebar-btn tp-header-2-menu-btn tp-header-pp-menu-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div className="tp-header-btn  tp-header-btn-spacing ml-15 d-none d-sm-inline-block">
                                        <SmartLink href="/contact" className={`tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 ${headerClassNames.buttonBg} text-uppercase ls-0 tp-btn-switch-animation ${headerClassNames.buttonText} ${headerClassNames.buttonHoverText} tp-ff-heading fw-500`}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="tp-mobile-menu-active d-none">
                    <MobileMenus />
                </nav>
            </header>

            {/* off canvas */}
            <SecondaryOffcanvas />
            {/* off canvas */}
        </>
    );
};

export default PersonalPortfolioHeader;