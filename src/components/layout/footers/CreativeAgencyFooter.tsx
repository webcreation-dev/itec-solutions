"use client";
import { ArrowIconEleven, ArrowIconTwelve, CopyrightIcon, FooterShapeIcon, RocketSendIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { getCurrentYear } from "@/utils";
import { useIsDarkRoute, useButtonAnimation } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    { icon: "fa-dribbble", label: "Dribbble" },
    { icon: "fa-behance", label: "Behance" },
    { icon: "fa-pinterest", label: "Pinterest" },
    { icon: "fa-linkedin", label: "LinkedIn" },
];

const footerMenuLinks = ["Career", "Our Work", "Contact"];

const CreativeAgencyFooter = () => {
    // Check if current route uses dark theme
    const isDark = useIsDarkRoute();
    const footerBgClass = isDark ? "tp-bg-grey-8" : "tp-bg-common-black";
    const footerRef = useButtonAnimation<HTMLElement>();

    return (
        <footer ref={footerRef}>
            <div className={`tp-footer-area ${footerBgClass}  p-relative z-index-1 pt-105`}>
                <span className="tp-footer-shape">
                    <FooterShapeIcon />
                </span>

                {/* Footer Top */}
                <div className="tp-footer-top pb-30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-9">
                                <div className="tp-footer-top-social-wrap mb-30">
                                    <span className="tp-footer-top-subtitle tp-text-theme-primary fw-500 fs-18 tp-ff-heading tp_fade_anim" data-delay=".4">
                                        Get&apos;s Started a Projects?
                                        <ArrowIconTwelve />
                                    </span>
                                    <h2 className="tp-footer-top-title tp-text-common-white text-uppercase fw-500 rotate-text-anim">
                                        Let&apos;s Talk
                                    </h2>
                                    <div className="tp-footer-social tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                        <ul>
                                            {socialLinks.map((item, i) => (
                                                <li key={i}>
                                                    <Link href="#">
                                                        <i className={`fa-brands ${item.icon}`}></i>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tp-rounded-btn-wrap tp-footer-btn tp-footer-2-btn text-lg-end mb-40 tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <div className="btn_wrapper d-inline-block">
                                        <SmartLink href="/contact" className="tp-btn-rounded btn-item">
                                            <span className="d-block mb-10">
                                                <ArrowIconEleven />
                                            </span>
                                            Start the<br /> Journey
                                            <i className="tp-btn-circle-dot"></i>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Main */}
                <div className="tp-footer-main pt-45 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="tp-footer-widget mb-45 tp_fade_anim" data-delay=".3">
                                    <div className="tp-footer-logo mb-25">
                                        <Link href="/">
                                            <Image data-width="150" src="/assets/img/logo/logo-white.png" alt="logo" width={150} height={36} />
                                        </Link>
                                    </div>
                                    <p className="fw-500 fs-18 tp-text-grey-2 lh-28">
                                        We&apos;re Global Digital <br />
                                        Agency Since-2018 to Provide Smart<br /> Solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6 col-sm-6">
                                        <div className="tp-footer-widget mb-60 tp_fade_anim" data-delay=".5">
                                            <h3 className="tp-footer-widget-title tp-ff-heading fs-25 mb-15 text-uppercase tp-text-common-white">
                                                New York
                                            </h3>
                                            <Link className="fw-500 fs-18 tp-text-grey-2 lh-28 hover-text-white" href="#">
                                                Apple Inc.<br /> One Apple Park Way Cupertino, CA <br />
                                                95014, United States
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 col-sm-6">
                                        <div className="tp-footer-widget mb-60 tp_fade_anim" data-delay=".7">
                                            <h3 className="tp-footer-widget-title tp-ff-heading fs-25 mb-15 text-uppercase tp-text-common-white">
                                                London
                                            </h3>
                                            <Link className="fw-500 fs-18 tp-text-grey-2 lh-28 hover-text-white" href="#">
                                                Belgrave House<br /> 76 Buckingham Palace Road, London SW1W 9TQ, United Kingdom
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-footer-widget-form mb-60 tp_fade_anim" data-delay=".9">
                                            <h3 className="tp-footer-widget-title tp-ff-heading fs-25 mb-25 text-uppercase tp-text-common-white">
                                                Newsletter
                                            </h3>
                                            <form className="p-relative" action="#">
                                                <input className="tp-input" type="text" placeholder="Enter Email Address" />
                                                <button className="tp-button" type="submit">
                                                    <RocketSendIcon />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="tp-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tp-footer-copyright">
                                    <p className="mb-0 tp-text-grey-2">
                                        <span>
                                            <CopyrightIcon />
                                        </span>{" "}
                                        Copyright {getCurrentYear()}{" "}
                                        <Link className="tp-text-common-white hover-text-primary" href="#">
                                            ThemePure.
                                        </Link>{" "}
                                        All Right Reserves.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-footer-menu">
                                    <ul>
                                        {footerMenuLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link href="#">{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CreativeAgencyFooter;
