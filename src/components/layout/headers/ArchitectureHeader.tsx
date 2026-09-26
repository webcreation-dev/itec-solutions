"use client";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import { SmartLink } from "@/components/common";
import HeaderMenus from "./components/HeaderMenu";
import { HeaderButtonArrow } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const ArchitectureHeader = () => {
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
                                                        width={178}
                                                        height={89}
                                                        src="/assets/img/logo/itec-logo.png"
                                                        alt="ITEC Ingénierie Construction Développement"
                                                    />
                                                    <Image
                                                        className="logo-2 d-none"
                                                        width={178}
                                                        height={89}
                                                        src="/assets/img/logo/itec-logo.png"
                                                        alt="ITEC Ingénierie Construction Développement"
                                                    />
                                                </>
                                            ) : (
                                                <Image
                                                    width={178}
                                                    height={89}
                                                    src="/assets/img/logo/itec-logo.png"
                                                    alt="ITEC Ingénierie Construction Développement"
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
                                    <div className="tp-header-btn tp-header-btn-spacing d-none d-md-inline-block">
                                        <SmartLink href="/contact" className="itec-header-talk tp-btn-lg d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-black text-uppercase ls-0 tp-btn-switch-animation tp-text-common-white hover-text-white tp-ff-heading fw-500">
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">Discutons</span>
                                                <span className="btn-icon"><HeaderButtonArrow /></span>
                                                <span className="btn-icon"><HeaderButtonArrow /></span>
                                            </span>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default ArchitectureHeader;
