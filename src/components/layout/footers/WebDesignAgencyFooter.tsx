"use client";
import { CopyrightIcon, DownloadBoxIcon, RocketSendIcon } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import { getCurrentYear } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const companyLinks = [
    { name: "About Us" },
    { name: "Our Work" },
    { name: "Career", badge: "Hiring" },
    { name: "Contact" },
];

const solutionLinks = [
    "Branding Design",
    "E-commerce",
    "Web Development",
    "Web Design",
    "Digital Marketing",
];

const socialLinks = [
    "fa-dribbble",
    "fa-behance",
    "fa-pinterest",
    "fa-linkedin",
];

const WebDesignAgencyFooter = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-grey-1",
        textHover: isDarkTheme ? "hover-text-white" : "hover-text-black",
    };
    const brandLogo = isDarkTheme ? "/assets/img/logo/logo-white-2.png" : "/assets/img/logo/logo.png"
    // -------------------------------
    return (
        <footer>
            <div className="tp-footer-area p-relative z-index-1 pt-115">
                <div className="tp-footer-wd-main">
                    <div className="container">
                        <div className="row mb-60">
                            {/* Left */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-45 tp_fade_anim" data-delay=".3">
                                    <div className="tp-footer-logo mb-25">
                                        <Link href="/">
                                            <Image width={150} height={36} src={brandLogo} alt="logo" />
                                        </Link>
                                    </div>

                                    <p className={`fs-18 lh-28 mb-35 ${themeClasses.textBody}`}>
                                        We&apos;re Global Digital <br />
                                        Agency Since-2018 to Provide Smart<br /> Solutions.
                                    </p>

                                    <div className="d-inline-block">
                                        <Link className={`tp-footer-wd-desk ${themeClasses.textPrimary} fw-600 text-uppercase`} href="#">
                                            <span>
                                                <DownloadBoxIcon />
                                            </span>
                                            Company Desk
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="tp-footer-wd-widget mb-40 tp_fade_anim" data-delay=".5">
                                    <h3 className={`tp-footer-widget-title tp-ff-teko fs-25 fw-600 mb-20 text-uppercase ${themeClasses.textPrimary}`}>
                                        Company
                                    </h3>
                                    <ul>
                                        {companyLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link href="#">{item.name}</Link>
                                                {item.badge && <span>{item.badge}</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Solutions */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-wd-widget ml-30 mb-40 tp_fade_anim" data-delay=".7">
                                    <h3 className={`tp-footer-widget-title tp-ff-teko fs-25 fw-600 mb-20 text-uppercase ${themeClasses.textPrimary}`}>
                                        Solutions
                                    </h3>
                                    <ul>
                                        {solutionLinks.map((item, i) => (
                                            <li key={i} >
                                                <Link href="#">{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-widget-form tp-footer-wd-widget-form mb-40 tp_fade_anim" data-delay=".9">
                                    <h3 className={`tp-footer-widget-title tp-ff-teko fs-25 fw-600 mb-25 text-uppercase ${themeClasses.textPrimary}`}>
                                        Newsletter
                                    </h3>

                                    <form className="p-relative mb-30" action="#">
                                        <input className="tp-input" type="text" placeholder="Email Address" />
                                        <button className="tp-button" type="submit">
                                            <RocketSendIcon fillColor="#030303" />
                                        </button>
                                    </form>

                                    <div className="tp-footer-wd-social">
                                        {socialLinks.map((icon, i) => (
                                            <Link key={i} href="#" style={{ marginLeft: "4px" }}>
                                                <i className={`fa-brands ${icon}`}></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Address */}
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-xl-5 col-lg-4 col-md-6">
                                <div className="tp-footer-widget mb-60 tp_fade_anim" data-delay=".5">
                                    <h3 className={`tp-footer-widget-title tp-ff-teko fs-25 fw-600 mb-20 text-uppercase ${themeClasses.textPrimary}`}>
                                        New York
                                    </h3>
                                    <Link className={`fw-400 fs-18 ${themeClasses.textBody} lh-28 ${themeClasses.textHover}`} href="#">
                                        Apple Inc.<br /> One Apple Park Way Cupertino, CA <br />
                                        95014, United States
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget mb-60 tp_fade_anim" data-delay=".7">
                                    <h3 className={`tp-footer-widget-title tp-ff-teko fs-25 fw-600 mb-20 text-uppercase ${themeClasses.textPrimary}`}>
                                        London
                                    </h3>
                                    <Link className={`fw-400 fs-18 ${themeClasses.textBody} lh-28 ${themeClasses.textHover}`} href="#">
                                        Belgrave House<br /> 76 Buckingham Palace Road, London SW1W 9TQ, United Kingdom
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="tp-footer-bottom tp-footer-wd-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="tp-footer-copyright">
                                    <p className={`mb-0 ${themeClasses.textBody}`}>
                                        <span>
                                            <CopyrightIcon />
                                        </span>{" "}
                                        Copyright {getCurrentYear()}{" "}
                                        <Link className={`${themeClasses.textPrimary} hover-text-primary`} href="#">
                                            ThemePure.
                                        </Link>{" "}
                                        All Right Reserves.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="tp-footer-copyright text-md-end">
                                    <p className={`mb-0 ${themeClasses.textBody}`}>
                                        <Link href="#" className="hover-text-primary">Privacy Policy</Link> |{" "}
                                        <Link href="#" className="hover-text-primary">Terms & Conditions</Link>
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

export default WebDesignAgencyFooter;