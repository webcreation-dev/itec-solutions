"use client";

import { CopyrightIcon, FooterDarkLeftShape, FooterDarkRightShape, FooterLeftShape, FooterRightShape } from "@/svg";
import { personalPortfolioQuickLinks, personalPortfolioSocialLinks } from "@/data/footer-data";
import { useIsDarkRoute } from "@/hooks";
import { getCurrentYear } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const PersonalPortfolioFooter = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const footerStyles = {
        background: isDark ? "tp-bg-grey-8" : "tp-bg-common-black",
    };
    // -------------------------------
    // Theme-based shapes 
    // -------------------------------
    const FooterRightShapeIcon = isDark
        ? FooterDarkRightShape
        : FooterRightShape;

    const FooterLeftShapeIcon = isDark
        ? FooterDarkLeftShape
        : FooterLeftShape;
    // -------------------------------
    return (
        <footer>
            <div className={`tp-footer-area ${footerStyles.background} p-relative z-index-1 pt-105`}>
                {/* SHAPES */}
                <span className="tp-footer-pp-shape">
                    <FooterRightShapeIcon />
                </span>
                <span className="tp-footer-pp-shape-2">
                    <FooterLeftShapeIcon />
                </span>
                {/* BG SHAPE */}
                <Image
                    width={1905}
                    height={959}
                    className="tp-awards-bg-shape img-fluid"
                    src="/assets/img/awards/grid-shape.png"
                    alt="shape icon"
                />

                {/* TOP SECTION */}
                <div className="tp-footer-top pb-70">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-12">
                                <div className="tp-footer-top-social-wrap text-center mb-30">
                                    <span
                                        className="tp-footer-top-subtitle tp-text-theme-primary fw-500 fs-18 tp-ff-heading mb-5 d-inline-block tp_fade_anim"
                                        data-delay=".3"
                                    >
                                        Get&apos;s Started a Projects?
                                    </span>

                                    <h2 className="tp-footer-top-title rotate-text-anim tp-text-common-white lh-1 text-uppercase fw-500 mb-45">
                                        Let&apos;s Work
                                        <br />
                                        Together.
                                    </h2>

                                    <div
                                        className="tp-footer-social tp-footer-pp-social tp_fade_anim"
                                        data-delay=".4"
                                        data-fade-from="bottom"
                                        data-ease="bounce"
                                    >
                                        <ul>
                                            {personalPortfolioSocialLinks.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.href}>
                                                        <i className={`fa-brands ${item.icon}`}></i>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN FOOTER */}
                <div className="tp-footer-main pt-65 pb-15">
                    <div className="container">
                        <div className="row">
                            {/* LOGO */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className="tp-footer-widget mb-45 tp_fade_anim"
                                    data-delay=".3"
                                >
                                    <div className="tp-footer-logo">
                                        <Link href="/">
                                            <Image
                                                width={150}
                                                height={36}
                                                src="/assets/img/logo/logo-white.png"
                                                alt="logo white"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className="tp-footer-pp-widget mb-40 tp_fade_anim"
                                    data-delay=".5"
                                >
                                    <h3 className="tp-footer-widget-title fw-500 fs-25 mb-10 text-uppercase tp-text-common-white">
                                        Quick Links
                                    </h3>
                                    <ul>
                                        {personalPortfolioQuickLinks.map((link, i) => (
                                            <li key={i}>
                                                <Link href={link.href}>{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CONTACT */}
                            <div className="col-lg-6">
                                <div
                                    className="tp-footer-pp-widget ml-25 mb-40 tp_fade_anim"
                                    data-delay=".7"
                                >
                                    <span className="tp-ff-heading fw-500 fs-18 tp-text-common-white mb-35 d-inline-block">
                                        <i className="fa-regular fa-globe mr-5"></i>{" "}
                                        Based on California, USA
                                    </span>

                                    <div className="tp-footer-pp-link">
                                        <Link className="mr-35" href="mailto:info@example.com">
                                            info@example.com
                                        </Link>
                                        <Link href="tel:+91-87643534353">
                                            +91-876 4353 4353
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="tp-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-footer-copyright text-center">
                                    <p className="mb-0 tp-text-grey-2">
                                        <span>
                                            <CopyrightIcon />
                                        </span>{" "}
                                        Copyright {getCurrentYear()}{" "}
                                        <Link
                                            className="tp-text-common-white hover-text-primary"
                                            href="#"
                                        >
                                            ThemePure.
                                        </Link>{" "}
                                        All Right Reserves.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PersonalPortfolioFooter;