"use client";
import { SecondaryOffcanvas, SmartLink } from "@/components/common";
import MobileMenus from "./components/MobileMenus";
import useGlobalContext from "@/hooks/useContext";
import { ArrowIconFourteen } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const CreativeAgencyHeader = () => {
    const { toggleSecondarySidebar } = useGlobalContext();

    return (
        <>
            <header>
                <div className="tp-header-area pre-header header-transparent tp-header-2-spacing">
                    <div className="container-fluid container-1800">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-5 col-6">
                                <div className="tp-header-2-logo-wrap d-flex align-items-center">
                                    <div className="tp-header-logo">
                                        <Link href="/"><Image width={150} height={36} src="/assets/img/logo/logo-white.png" alt="logo" /></Link>
                                    </div>
                                    <span className="tp-header-2-country tp-ff-funnel fw-500 fs-18 tp-text-grey-2">
                                        <i className="fa-regular fa-globe mr-5"></i>
                                        Based on California, USA
                                    </span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-7 col-6">
                                <div className="tp-header-right tp-header-2-right d-flex align-items-center justify-content-end">
                                    <div className="tp-btn-group">
                                        <SmartLink className="tp-btn-circle" href="/contact">
                                            <ArrowIconFourteen />
                                        </SmartLink>
                                        <SmartLink className="tp-btn-2 tp-btn-primary" href="/contact">Let&apos;s Talk</SmartLink>
                                        <SmartLink className="tp-btn-circle" href="/contact">
                                            <ArrowIconFourteen />
                                        </SmartLink>
                                    </div>
                                    <button onClick={toggleSecondarySidebar} className="tp-menu-bar tp-header-sidebar-btn tp-header-2-menu-btn tp-offcanvas-open-btn ml-20">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
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

export default CreativeAgencyHeader;