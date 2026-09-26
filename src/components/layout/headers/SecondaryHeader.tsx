"use client";
import { SecondaryOffcanvas } from "@/components/common";
import MobileMenus from "./components/MobileMenus";
import useGlobalContext from "@/hooks/useContext";
import { useIsDarkRoute, useStickyHeader } from "@/hooks";
import { MenubarIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

interface SecondaryHeaderProps {
    theme?: "light" | "dark";
    isStickyDisabled?: boolean;
    isStatic?: boolean;
    isTransparent?: boolean;
    ptClass?: string;
    extraClass?: string;
}

const SecondaryHeader = ({
    theme,
    isStickyDisabled = false,
    isStatic = false,
    isTransparent = false,
    ptClass = "pt-10",
    extraClass = "",
}: SecondaryHeaderProps) => {
    const isSticky = useStickyHeader(20);
    const { toggleSecondarySidebar } = useGlobalContext();
    const isDark = useIsDarkRoute();

    const activeTheme = theme || (isDark ? "dark" : "light");

    const logoSrc = activeTheme === "dark" ? "/assets/img/logo/logo-white.png" : "/assets/img/logo/logo-black.png";
    const bgClass = activeTheme === "dark" ? "sticky-black-bg" : "sticky-white-bg";
    const rightClass = activeTheme === "dark" ? "" : "right-white";
    const mailClass = activeTheme === "dark" ? "underline-white" : "underline-black";

    const activePt = ptClass;
    const activeExtra = extraClass ? ` ${extraClass}` : "";

    const headerClass = isStatic
        ? `tp-header-slider-area pre-header ${activePt}${activeExtra}`
        : isStickyDisabled
            ? `tp-header-slider-area pre-header ${isTransparent ? "header-transparent" : "header-fixed"} ${activePt}${activeExtra}`
            : `tp-header-slider-area pre-header header-transparent tp-header-blur ${bgClass} ${isSticky ? "header-sticky" : ""}${activeExtra}`;


    return (
        <>
            <header>
                <div {...(!isStickyDisabled && { id: "header-sticky" })} className={headerClass}>
                    <div className="container-fluid container-1800">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tp-header-slider-wrapper d-flex align-items-center justify-content-between">
                                    <div className="tp-header-slider-left">
                                        <div className="tp-header-logo">
                                            <Link href="/"><Image width={150} height={40} src={logoSrc} alt="logo" /></Link>
                                        </div>
                                    </div>
                                    <div className={`tp-header-slider-right ${rightClass} d-flex align-items-center`}>
                                        <div className="tp-header-slider-info d-none d-md-block">
                                            <Link className={mailClass} href="mailto:hello@aleric.com">hello@aleric.com</Link>
                                        </div>
                                        <div className="tp-header-slider-bar-wrap ml-20">
                                            <button onClick={toggleSecondarySidebar} className="tp-header-slider-bar tp-offcanvas-open-btn">
                                                <span>
                                                    <MenubarIcon />
                                                </span>{" "}
                                                <span>Menu</span>
                                            </button>
                                        </div>
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

export default SecondaryHeader;