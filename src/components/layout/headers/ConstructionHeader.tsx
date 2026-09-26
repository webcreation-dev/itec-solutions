"use client";
import { SecondaryOffcanvas, SmartLink } from "@/components/common";
import { ArrowIconThree, MenubarIconTwo } from "@/svg";
import MobileMenus from "./components/MobileMenus";
import useGlobalContext from "@/hooks/useContext";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const ConstructionHeader = () => {
    const { toggleSecondarySidebar } = useGlobalContext();
    const isDarkTheme = useIsDarkRoute();
    const logoBrand = isDarkTheme ? "/assets/img/logo/logo-white.png" : "/assets/img/logo/logo-black.png";

    return (
        <>
            <header>
                <div className="tp-header-cnt-area pt-30 header-transparent">
                    <div className="container container-1824">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="tp-header-cnt-left">
                                    <div className="tp-header-cnt-wrap d-flex justify-content-between align-items-center">
                                        <div className="tp-header-logo-wrap d-flex align-items-center">
                                            <div className="tp-header-logo mr-40">
                                                <Link href="/">
                                                    <Image width={120} height={30} src={logoBrand} alt="logo black" />
                                                </Link>
                                            </div>
                                            <p className="d-none d-lg-inline-block">
                                                Ingénierie <br /> Construction & développement.
                                            </p>
                                        </div>

                                        <div onClick={toggleSecondarySidebar} className="tp-header-cnt-bar-wrap d-none d-lg-flex ">
                                            <button className="tp-header-bar tp-offcanvas-open-btn">
                                                Menu{" "}
                                                <span>
                                                    <MenubarIconTwo />
                                                </span>
                                            </button>
                                            <div className="tp-header-8-lang d-none d-md-block">
                                                <Link href="#">FR</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-header-8-right text-end">
                                    <div className="tp-header-cnt-btn d-none d-lg-inline-block">
                                        <SmartLink className="upd-btn-black-square cnt-btn-style" href="/contact">
                                            <span>
                                                <span className="text-1">Parler de votre projet</span>
                                                <span className="text-2">Parler de votre projet</span>
                                            </span>
                                            <i>
                                                <ArrowIconThree />
                                                <ArrowIconThree />
                                            </i>
                                        </SmartLink>
                                    </div>
                                    <div className="tp-header-cnt-bar-wrap d-block d-lg-none">
                                        <button onClick={toggleSecondarySidebar} className="tp-header-bar tp-offcanvas-open-btn">
                                            Menu
                                            <span>
                                                <MenubarIconTwo />
                                            </span>
                                        </button>
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

export default ConstructionHeader;
