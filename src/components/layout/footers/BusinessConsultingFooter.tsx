"use client";
import { businessCompanyLinks, businessFooterMenu, businessSocialLinks, businessSolutionLinks } from "@/data/footer-data";
import BusinessConsultingCopyright from "./components/BusinessConsultingCopyright";
import {
    DownloadArrowIcon,
    FooterScrollArrow,
    RocketSendIcon,
} from "@/svg";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/utils";

/* ================= COMPONENTS ================= */

const FooterLogoSection = () => (
    <div className="col-lg-4 col-md-6 col-sm-6">
        <div
            className="tp-footer-widget tp-footer-cst-widget mb-45 tp_fade_anim"
            data-delay=".3"
        >
            <div className="tp-footer-logo mb-25">
                <Link href="/">
                    <Image
                        width={150}
                        height={37}
                        src="/assets/img/logo/logo-white-2.png"
                        alt="logo white"
                    />
                </Link>
            </div>

            <p className="tp-footer-cst-dec fs-18 tp-ff-dm lh-28 mb-25">
                We&apos;re Global Digital <br />
                Agency Since-2018 to Provide Smart
                <br /> Solutions.
            </p>

            <div className="d-inline-block">
                <Link
                    className="tp-footer-wd-desk d-flex tp-ff-dm tp-text-grey-5 fw-600 hover-text-white"
                    href="#"
                >
                    <span>
                        <DownloadArrowIcon />
                    </span>
                    Entry Summary Worksheet
                </Link>
            </div>
        </div>
    </div>
);

const FooterLinks = ({
    title,
    links,
    className,
    delay,
}: {
    title: string;
    links: { label: string; href: string; badge?: string }[];
    className: string;
    delay: string;
}) => (
    <div className={className}>
        <div
            className="tp-footer-wd-widget tp-footer-cst-widget mb-40 ml-45 tp_fade_anim"
            data-delay={delay}
        >
            <h3 className="tp-footer-widget-title tp-ff-dm fs-27 fw-600 mb-30 tp-text-grey-5">
                {title}
            </h3>
            <ul>
                {links.map((item, i) => (
                    <li key={i}>
                        <Link href={item.href}>{item.label}</Link>
                        {item.badge && <span>{item.badge}</span>}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Newsletter = () => (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="tp-footer-widget-form tp-footer-cst-widget-form tp-footer-wd-widget-form mb-40">
            <h3
                className="tp-footer-widget-title  tp-ff-dm fs-27 fw-600 mb-35 tp-text-grey-5 tp_fade_anim"
                data-delay=".9"
            >
                Newsletter
            </h3>

            <form
                className="p-relative mb-30 tp_fade_anim"
                data-delay=".9"
                action="#"
            >
                <input
                    className="tp-input"
                    type="text"
                    placeholder="Email Address"
                />
                <button className="tp-button" type="submit">
                    <RocketSendIcon fillColor="#F3F1F2" />
                </button>
            </form>

            <div className="tp-footer-wd-social">
                {businessSocialLinks.map((item, i) => (
                    <div
                        key={i}
                        className="tp_fade_anim d-inline-block mr-5"
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
);

const FooterMenu = () => (
    <div className="tp-footer-cst-menu-wrap">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tp-footer-cst-menu">
                        <ul>
                            {businessFooterMenu.map((item, i) => (
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
);

const FooterBanner = () => (
    <div
        className="tp-footer-cst-banner bg-position z-index-1 text-center p-relative"
        style={{ backgroundImage: `url(/assets/img/footer/bg.jpg)` }}
    >
        <Image
            width={1351}
            height={79}
            className="tp-footer-cst-banner-shape img-fluid"
            src="/assets/img/footer/shape.png"
            alt="shape"
        />
        <div
            className="d-inline-block mb-10 tp_fade_anim"
            data-delay=".4"
            data-fade-from="top"
            data-ease="bounce"
        >
            <button onClick={() => scrollToSection(0)} className="tp-footer-cst-btp">
                <FooterScrollArrow />
            </button>
        </div>

        <h2 className="tp-ff-dm tp-text-common-white fw-600 fs-52 fs-sm-40">
            Schedule a Demo
        </h2>
    </div>
);

/* ================= MAIN ================= */

const BusinessConsultingFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-bg-common-black-1 p-relative z-index-1 pt-100">
                <div className="tp-footer-wd-main">
                    <div className="container-fluid container-1524">
                        <div className="row mb-35">
                            <FooterLogoSection />

                            <FooterLinks
                                title="Company"
                                links={businessCompanyLinks}
                                className="col-lg-2 col-md-6 col-sm-6"
                                delay=".5"
                            />

                            <FooterLinks
                                title="Solutions"
                                links={businessSolutionLinks}
                                className="col-lg-3 col-md-6 col-sm-6"
                                delay=".7"
                            />
                            <Newsletter />
                        </div>
                    </div>
                </div>
                <FooterMenu />
                <BusinessConsultingCopyright />
                <FooterBanner />
            </div>
        </footer>
    );
};

export default BusinessConsultingFooter;