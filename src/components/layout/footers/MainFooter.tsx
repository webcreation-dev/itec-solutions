"use client";
import { ArrowIconEleven, ArrowIconTwelve, FooterShapeIcon, RocketSendIcon } from "@/svg";
import { mainFooterSocialLinks } from "@/data/footer-data";
import { SmartLink } from "@/components/common";
import Copyright from "./components/Copyright";
import { useIsDarkRoute, useButtonHoverAnimation } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const officeLocations = [
    {
        city: "New York",
        delay: ".5",
        colClass: "col-lg-7 col-md-6 col-sm-6",
        address: (
            <>
                Apple Inc.<br />
                One Apple Park Way Cupertino, CA <br />
                95014, United States
            </>
        ),
    },
    {
        city: "London",
        delay: ".7",
        colClass: "col-lg-5 col-md-6 col-sm-6",
        address: (
            <>
                Belgrave House<br />
                76 Buckingham Palace Road, London SW1W 9TQ, United Kingdom
            </>
        ),
    },
];

const MainFooter = () => {
    const isDark = useIsDarkRoute();
    const footerRef = useButtonHoverAnimation<HTMLElement>();

    // Footer section background class dark/light
    const footerSectionBgClass = isDark
        ? "tp-bg-grey-8"
        : "tp-bg-common-black";

    return (
        <footer ref={footerRef}>
            <div className={`tp-footer-area ${footerSectionBgClass} p-relative z-index-1 pt-105`}>
                <span className="tp-footer-shape">
                    <FooterShapeIcon />
                </span>
                <div className="tp-footer-top pb-30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-9">
                                <div className="tp-footer-top-social-wrap mb-30">
                                    <span className="tp-footer-top-subtitle tp-text-theme-primary fw-500 fs-18 tp-ff-heading tp_fade_anim" data-delay=".3">Get&apos;s Started a Projects?
                                        <ArrowIconTwelve />
                                    </span>
                                    <h2 className="tp-footer-top-title tp-text-common-white text-uppercase fw-500 rotate-text-anim"><SmartLink href="/contact">Let&apos;s Talk</SmartLink></h2>
                                    <div className="tp-footer-social tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                        <ul>
                                            {mainFooterSocialLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.link}>
                                                        <i className={item.icon}></i>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tp-rounded-btn-wrap tp-footer-btn text-lg-end mb-40 tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <div className="btn_wrapper d-inline-block">
                                        <SmartLink href="/contact" className="tp-btn-rounded btn-item">
                                            <span className="d-block mb-10">
                                                <ArrowIconEleven />
                                            </span>
                                            Start the Journey
                                            <i className="tp-btn-circle-dot"></i>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-footer-main pt-45 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="tp-footer-widget mb-45 tp_fade_anim" data-delay=".3">
                                    <div className="tp-footer-logo mb-25">
                                        <Link href="/"><Image width={150} height={30} src="/assets/img/logo/logo-white.png" alt="logo" style={{ height: 'auto' }} /></Link>
                                    </div>
                                    <p className="fw-500 fs-18 tp-text-grey-2 lh-28">We&aois;re Global Digital <br />
                                        Agency Since-2018 to Provide Smart<br /> Solutions.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row">
                                    {officeLocations.map((office, index) => (
                                        <div key={index} className={office.colClass}>
                                            <div
                                                className="tp-footer-widget mb-60 tp_fade_anim"
                                                data-delay={office.delay}
                                            >
                                                <h3 className="tp-footer-widget-title tp-ff-heading fs-25 mb-15 text-uppercase tp-text-common-white">
                                                    {office.city}
                                                </h3>

                                                <Link
                                                    className="fw-500 fs-18 tp-text-grey-2 lh-28 hover-text-white"
                                                    href="#"
                                                >
                                                    {office.address}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-lg-12">
                                        <div className="tp-footer-widget-form mb-60 tp_fade_anim" data-delay=".9">
                                            <h3 className="tp-footer-widget-title tp-ff-heading fs-25 mb-25 text-uppercase tp-text-common-white">Newsletter</h3>
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
                {/* copyright area */}
                <Copyright />
            </div>
        </footer>
    );
};

export default MainFooter;