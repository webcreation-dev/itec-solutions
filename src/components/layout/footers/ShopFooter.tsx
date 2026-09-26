"use client";
import { shopAccountLinks, shopInfoLinks, shopSocialLinks } from "@/data/footer-data";
import { EmailIconTwo, LocationIcon } from "@/svg";
import FooterLogo from "./components/FooterLogo";
import { useIsDarkRoute } from "@/hooks";
import { getCurrentYear } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ShopFooter = () => {
    const isDarkTheme = useIsDarkRoute();

    // -------------------------------
    // Theme-based Styles
    // -------------------------------
     const brandLogo = isDarkTheme ? "/assets/img/logo/logo-white-2.png":"/assets/img/logo/logo.png";

    return (
        <footer 
            className={isDarkTheme ? "tp-bg-grey-8" : ""} 
            style={isDarkTheme ? {} : { backgroundColor: "rgb(249, 249, 249)" }}
        >
            <div className="al-footer-shop-area">
                <div className="al-footer-shop-top pt-95 pb-40">
                    <div className="container">
                        <div className="row">

                            {/* ================= LEFT LOGO ================= */}
                            <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                                <div className="al-footer-shop-widget footer-col-1 mb-50">
                                    <div className="al-footer-shop-widget-content">
                                        <div className="al-footer-shop-logo">
                                            <FooterLogo logo={brandLogo} />
                                        </div>

                                        <p className="al-footer-shop-desc">
                                            We are a team of designers and developers that create high quality WordPress
                                        </p>

                                        <div className="al-footer-shop-social">
                                            {shopSocialLinks.map((item) => (
                                                <Link key={item.id} href={item.href} style={{ marginRight: "4px" }}>
                                                    <i className={`fa-brands ${item.icon}`}></i>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================= ACCOUNT LINKS ================= */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="al-footer-shop-widget footer-col-2 mb-50">
                                    <h4 className="al-footer-shop-widget-title">My Account</h4>
                                    <div className="al-footer-shop-widget-content">
                                        <ul>
                                            {shopAccountLinks.map((item) => (
                                                <li key={item.id}>
                                                    <Link href={item.href}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ================= INFO LINKS ================= */}
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="al-footer-shop-widget footer-col-3 mb-50">
                                    <h4 className="al-footer-shop-widget-title">Infomation</h4>
                                    <div className="al-footer-shop-widget-content">
                                        <ul>
                                            {shopInfoLinks.map((item) => (
                                                <li key={item.id}>
                                                    <Link href={item.href}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ================= CONTACT ================= */}
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="al-footer-shop-widget footer-col-4 mb-50">
                                    <h4 className="al-footer-shop-widget-title">Talk To Us</h4>

                                    <div className="al-footer-shop-widget-content">

                                        <div className="al-footer-shop-talk mb-20">
                                            <span>Got Questions? Call us</span>
                                            <h4>
                                                <Link href="tel:670-413-90-762">
                                                    +670 413 90 762
                                                </Link>
                                            </h4>
                                        </div>

                                        <div className="al-footer-shop-contact">

                                            {/* EMAIL */}
                                            <div className="al-footer-shop-contact-item d-flex align-items-start">
                                                <div className="al-footer-shop-contact-icon">
                                                    <span>
                                                        <EmailIconTwo />
                                                    </span>
                                                </div>
                                                <div className="al-footer-shop-contact-content">
                                                    <p>
                                                        <Link href="mailto:aleric@support.com">
                                                            aleric@support.com
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* LOCATION */}
                                            <div className="al-footer-shop-contact-item d-flex align-items-start">
                                                <div className="al-footer-shop-contact-icon">
                                                    <span>
                                                        <LocationIcon />
                                                    </span>
                                                </div>
                                                <div className="al-footer-shop-contact-content">
                                                    <p>
                                                        <Link
                                                            href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4"
                                                            target="_blank"
                                                        >
                                                            79 Sleepy Hollow St. <br />
                                                            Jamaica, New York 1432
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= FOOTER BOTTOM ================= */}
                <div className="al-footer-shop-bottom">
                    <div className="container">
                        <div className="al-footer-shop-bottom-wrapper">
                            <div className="row align-items-center">

                                <div className="col-md-6">
                                    <div className="al-footer-shop-copyright">
                                        <p>
                                            © {getCurrentYear()} All Rights Reserved | HTML Template by{" "}
                                            <Link href="/">Aqlova</Link>.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="al-footer-shop-payment text-md-end">
                                        <p>
                                            <Image width={232} height={30}
                                                src="/assets/img/update/footer/footer-pay-2.png"
                                                alt="currency image"
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ShopFooter;