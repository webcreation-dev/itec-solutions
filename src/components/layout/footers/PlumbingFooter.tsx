"use client";
import { plumbingLegalLinks, plumbingQuickLinks, plumbingSocials } from "@/data/footer-data";
import FooterLogo from "./components/FooterLogo";
import { getCurrentYear } from "@/utils";
import { CopyrightIcon } from "@/svg";
import Link from "next/link";
import { useThrowable } from "@/hooks/useThrowable";

const PlumbingFooter = () => {
    const sceneRef = useThrowable({ scrollGravity: false });

    return (
        <footer>
            <div className="tp-footer-area pt-125 tp-bg-common-black pt-120 tp-techonolgy-capsule-wrapper tp-footer-pb-capsule-wrapper"
                data-tp-throwable-scene="true"
                ref={sceneRef}
            >
                <div className="tp-footer-wd-main pb-80">
                    <div className="container-fluid container-1646">
                        <div className="row mb-35">
                            {/*  Left Widget */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-pb-widget mb-45 tp_fade_anim"
                                    data-delay=".3">
                                    <div className="tp-footer-logo mb-35">
                                        <FooterLogo />
                                    </div>

                                    <p className="tp-text-grey-5 fs-18 tp-ff-inter lh-150-per mb-25">
                                        We&apos;re Global Digital Agency Since- 2018
                                        <br /> to Provide Smart Solutions.
                                    </p>

                                    <div className="tp-footer-wd-social d-flex">
                                        {plumbingSocials.map((item, i) => (
                                            <div
                                                key={i}
                                                className="tp_fade_anim"
                                                data-delay={item.delay}
                                                data-fade-from="top"
                                                data-ease="bounce"
                                            >
                                                <Link href="#">
                                                    <i className={`fa-brands ${item.icon}`}></i>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/*  Address */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div
                                    className="tp-footer-it-widget tp-footer-pb-widget mb-40 ml-20 tp_fade_anim"
                                    data-delay=".5"
                                >
                                    <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                                        Address
                                    </h3>

                                    <Link className="tp-text-grey-5 opacity-8 tp-ff-inter fs-18 ls-m-2 lh-140-per hover-opacity-1 hover-text-white d-block mb-25"
                                        href="https://www.google.com/maps">
                                        2118 Thornridge Cir. Syracuse,
                                        <br /> Connecticut 35624
                                    </Link>

                                    <Link className="tp-ff-inter fw-600 fs-18 lh-140-per ls-m-2 tp-text-grey-5 hover-opacity-1 hover-text-white mb-25 d-block"
                                        href="tel:+025(256)956965">
                                        +025 (256) 956 965
                                    </Link>

                                    <Link className="tp-ff-inter fs-18 lh-140-per ls-m-2 tp-text-grey-5 opacity-8 hover-opacity-1 hover-text-white"
                                        href="mailto:themepure@gmail.com">
                                        themepure@gmail.com
                                    </Link>
                                </div>
                            </div>

                            {/*  Quick Links */}
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                <div
                                    className="tp-footer-wd-widget tp-footer-cst-widget tp-footer-it-widget tp-footer-pb-widget mb-40 ml-85 tp_fade_anim"
                                    data-delay=".7"
                                >
                                    <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                                        Quick Links
                                    </h3>
                                    <ul>
                                        {plumbingQuickLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/*  Legal Links */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div
                                    className="tp-footer-wd-widget tp-footer-cst-widget tp-footer-it-widget tp-footer-pb-widget ml-180 mb-40 tp_fade_anim"
                                    data-delay=".9"
                                >
                                    <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                                        Legal & Policy Links
                                    </h3>
                                    <ul>
                                        {plumbingLegalLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="tp-footer-pb-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-footer-copyright text-center">
                                    <p className="tp-text-grey-5 tp-ff-inter">
                                        <span>
                                            <CopyrightIcon />
                                        </span>{" "}
                                        Copyright {getCurrentYear()}{" "}
                                        <Link href="#" className="tp-text-theme-secondary">
                                            ThemePure.
                                        </Link>{" "}
                                        All Right Reserves.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-techonolgy-capsule-item-wrapper tp-footer-pb-shape-wrapper">
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="213" height="421" viewBox="0 0 213 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M212.563 0C184.668 -3.29502e-07 157.047 5.44243 131.275 16.0165C105.504 26.5907 82.0876 42.0894 62.3631 61.6278C42.6387 81.1662 26.9923 104.362 16.3175 129.89C5.64269 155.418 0.148437 182.779 0.148438 210.41C0.148438 238.042 5.6427 265.403 16.3175 290.931C26.9923 316.459 42.6387 339.655 62.3631 359.193C82.0876 378.731 105.504 394.23 131.275 404.804C157.047 415.378 184.668 420.821 212.563 420.821L212.563 0Z" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="353" height="385" viewBox="0 0 353 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M110.531 -40.0004C84.729 -23.9733 62.3036 -3.07363 44.5353 21.5054C26.7671 46.0844 14.004 73.8614 6.97473 103.25C-0.0545245 132.639 -1.21227 163.065 3.5676 192.79C8.34746 222.515 18.9713 250.957 34.8326 276.492C50.6939 302.027 71.482 324.155 96.01 341.614C120.538 359.072 148.326 371.518 177.786 378.241C207.247 384.964 237.803 385.833 267.711 380.798C297.619 375.763 326.293 364.922 352.095 348.895L110.531 -40.0004Z" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="227" height="226" viewBox="0 0 227 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="113.22" cy="112.86" r="113.099" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="409" height="408" viewBox="0 0 409 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="204.238" cy="203.936" r="203.898" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="213" height="421" viewBox="0 0 213 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M212.563 0C184.668 -3.29502e-07 157.047 5.44243 131.275 16.0165C105.504 26.5907 82.0876 42.0894 62.3631 61.6278C42.6387 81.1662 26.9923 104.362 16.3175 129.89C5.64269 155.418 0.148437 182.779 0.148438 210.41C0.148438 238.042 5.6427 265.403 16.3175 290.931C26.9923 316.459 42.6387 339.655 62.3631 359.193C82.0876 378.731 105.504 394.23 131.275 404.804C157.047 415.378 184.668 420.821 212.563 420.821L212.563 0Z" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="227" height="226" viewBox="0 0 227 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="113.138" cy="112.859" r="113.099" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                    <p data-tp-throwable-el="">
                        <span className="tp-techonolgy-capsule-item">
                            <svg width="409" height="408" viewBox="0 0 409 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="204.238" cy="203.936" r="203.898" fill="#171718" />
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default PlumbingFooter;