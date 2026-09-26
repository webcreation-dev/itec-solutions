"use client";
import Image from "next/image";
import Link from "next/link";
import { HeaderMessageSendIcon, HeaderPhoneIcon, HeaderSearchIcon, MedicalButtonArrow } from "@/svg";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import { PrimaryOffcanvas, SmartLink } from "@/components/common";
import useGlobalContext from "@/hooks/useContext";
import HeaderMenus from "./components/HeaderMenu";

const socialLinks = [
    { icon: "fa-brands fa-facebook", label: "Facebook" },
    { icon: "fa-brands fa-twitter", label: "Twitter" },
    { icon: "fa-brands fa-pinterest", label: "Pinterest" },
    { icon: "fa-brands fa-linkedin", label: "LinkedIn" },
];

const MedicalHeader = () => {
    const { toggleSearchModal, toggleMainSidebar } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const headerClasses = {
        stickyBg: isDark ? "sticky-black-bg" : "sticky-white-bg",
        dropdownBg: isDark ? "dropdown-black-bg" : "dropdown-white-bg",
    };

    const brandLogo = isDark
        ? "/assets/img/logo/logo-white-2.png"
        : "/assets/img/logo/logo-black-2.png";
    // -------------------------------

    return (
        <>
            <header>
                <div
                    id="header-sticky"
                    className={`tp-header-area pre-header tp-header-md-wrap ${headerClasses.stickyBg} tp-header-blur header-transparent ${isSticky ? "header-sticky" : ""}`}
                >
                    <div className="tp-header-md-top tp-bg-common-black-5 d-none d-lg-block">
                        <div className="container-fluid container-1824">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="tp-header-md-social">
                                        <ul>
                                            {socialLinks.map((item, i) => (
                                                <li key={i}>
                                                    <Link href="#">
                                                        <i className={item.icon}></i>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="tp-header-md-contact">
                                        <ul>
                                            <li>
                                                <HeaderPhoneIcon />
                                                Call us: <Link href="mailto:info@example.com">info@example.com</Link>
                                            </li>
                                            <li>
                                                <HeaderMessageSendIcon />
                                                Send email: <Link href="mailto:info@example.com">info@example.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-header-md-main">
                        <div className="container-fluid container-1824">
                            <div className="row align-items-center">
                                <div className="col-xxl-2 col-xl-2 col-6">
                                    <div className="tp-header-logo">
                                        <Link href="/"><Image width={150} height={36} src={brandLogo} alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                                    <div className={`tp-main-menu tp-header-dropdown ${headerClasses.dropdownBg} d-flex justify-content-center`}>
                                        <nav className="tp-mobile-menu-active">
                                            <HeaderMenus />
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-3 col-6">
                                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                                        <div className="tp-header-search">
                                            <button
                                                onClick={toggleSearchModal}
                                                className="tp-header-search-btn tp-header-md-search-btn tp-search-click"
                                            >
                                                <HeaderSearchIcon />
                                            </button>
                                        </div>
                                        <div className="tp-header-btn d-none d-sm-inline-block ml-10">
                                            <SmartLink href="/contact" className="tp-btn-md tp-btn-md-header tp-bg-theme-1 tp-left-right p-relative hover-text-white d-inline-block text-uppercase tp-text-grey-5 lh-1 fs-15 fw-800 tp-ff-dm">
                                                <span className="mr10 td-text d-inline-block mr-5">Appointment</span>{" "}
                                                <span className="tp-arrow-angle">
                                                    <MedicalButtonArrow />
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
                </div>
            </header>
            {/* off canvas */}
            <PrimaryOffcanvas />
            {/* off canvas */}
        </>
    );
};

export default MedicalHeader;
