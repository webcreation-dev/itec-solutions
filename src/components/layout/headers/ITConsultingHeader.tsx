"use client";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import HeaderMenus from "./components/HeaderMenu";
import useGlobalContext from "@/hooks/useContext";
import HeaderLogo from "./components/HeaderLogo";
import { useStickyHeader } from "@/hooks";
import { ButtonArrowIcon } from "@/svg";

const ITConsultingHeader = () => {
    const { toggleMainSidebar } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area tp-header-itc pre-header sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing ${isSticky ? "header-sticky" : ""}`}>
                    <div className="container-fluid container-1800">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div className="tp-header-logo">
                                    <HeaderLogo variant="dual" />
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
                                    <div className="cr-header-login d-none d-lg-block">
                                        <SmartLink href="/login">Login</SmartLink>
                                    </div>
                                    <div className="tp-header-btn-box d-none d-md-block ml-15">
                                        <SmartLink href="/contact" className="upd-btn-white-border tp-btn-light-bg">
                                            Get Started {" "}
                                            <span><ButtonArrowIcon width="15" viewBox="0 0 15 12" fillColor="currentColor" /></span>
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

export default ITConsultingHeader;