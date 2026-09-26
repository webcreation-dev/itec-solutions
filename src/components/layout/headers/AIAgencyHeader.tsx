"use client";
import { AIAgencyHeaderArrowIcon, AIAgencyButtonArrow } from "@/svg";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";
import Image from "next/image";
import Link from "next/link";
import { useStickyHeader } from "@/hooks";

const AIAgencyHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area pre-header tp-header-cst-wrap sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing ${isSticky ? "header-sticky" : ""}`}>
                    <div className="container-fluid container-1800">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div className="tp-header-logo">
                                    <Link href="/">
                                        <Image width={150} height={36} src="/assets/img/logo/logo-black.png" alt="logo" />
                                    </Link>
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
                                    <div className="ais-header-btn d-none d-xxl-block">
                                        <Link href="tel:012346678">Give us a call
                                            <span>
                                                <AIAgencyHeaderArrowIcon />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="tp-header-btn-box d-none d-md-block ml-20">
                                        <SmartLink className="upd-btn-black-radius btn-style-ai btn-blue-bg d-inline-flex align-items-center justify-content-between" href="/contact">
                                            <span>
                                                <span className="text-1">Get In touch</span>
                                                <span className="text-2">Get In touch</span>
                                            </span>
                                            <i>
                                                <span>
                                                    <AIAgencyButtonArrow />
                                                    <AIAgencyButtonArrow />
                                                </span>
                                            </i>
                                        </SmartLink>
                                    </div>
                                    <button onClick={toggleMainSidebar} className="tp-menu-bar tp-header-sidebar-btn tp-header-2-menu-btn tp-header-cst-menu-btn ml-20 d-xl-none">
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

export default AIAgencyHeader;