"use client";
import { CrossIconThree, CrossIconTwo, DribbleIcon, InstragramIconTwo, TwittorIcon } from "@/svg";
import MobileMenus from "../layout/headers/components/MobileMenus";
import useGlobalContext from "@/hooks/useContext";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from 'next/link';

const SecondaryOffcanvas = () => {
    const isDark = useIsDarkRoute();
    const { isSecondarySidebarOpen, setSecondarySidebarOpen } = useGlobalContext();

    // Determine background class based on dark mode
    const bgClass = isDark ? "offcanvas-2-black-bg" : "offcanvas-2-white-bg";

    return (
        <div className={`tp-offcanvas-2-area p-relative ${bgClass} ${isSecondarySidebarOpen ? "opened" : ""}`}>
            <div className="tp-offcanvas-2-bg is-left left-box"></div>
            <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
            <div className="tp-offcanvas-2-wrapper">
                <div className="tp-offcanvas-2-left left-box">
                    <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
                        <div className="tp-offcanvas-2-logo">
                            <Link href="/">
                                <Image className="logo-1" width={150} height={36} src="/assets/img/logo/logo-white-2.png" alt="logo-white" />
                                <Image className="logo-2" width={150} height={36} src="/assets/img/logo/logo-black.png" alt="logo-black" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-close d-md-none text-end">
                            <button onClick={() => setSecondarySidebarOpen(false)} className="tp-offcanvas-2-close-btn">
                                <span className="texts">
                                    <span>close</span>
                                </span>{" "}
                                <span className="d-inline-block">
                                    <span><CrossIconTwo /></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-menu counter-ro">
                        <nav><MobileMenus /></nav>
                    </div>
                </div>
                <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
                    <div className="tp-offcanvas-2-close text-end">
                        <button onClick={() => setSecondarySidebarOpen(false)} className="tp-offcanvas-2-close-btn">
                            <span className="texts"><span>close</span></span>
                            <span className="d-inline-block">
                                <span><CrossIconThree /></span>
                            </span>
                        </button>
                    </div>
                    <div className="tp-offcanvas-2-right-info-box mt-160">
                        <h4 className="tp-offcanvas-2-right-info-title">Get In Touch</h4>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Phone</label>
                            <Link className="tp-line-white" href="tel:42345678910">+4 (234) 567 8910</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Email</label>
                            <Link className="tp-line-white" href="mailto:hello@gmail.com">hello@gmail.com</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Address</label>
                            <Link className="tp-line-white" href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                602 Elgin St. Celina, Delaware <br /> 1009
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-15">Follow us</label>
                            <div className="tp-offcanvas-2-right-social">
                                <Link href="#"><DribbleIcon /></Link>{" "}
                                <Link href="#"><TwittorIcon width="14" height="13" /></Link>{" "}
                                <Link href="#"><InstragramIconTwo /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryOffcanvas;