import { ArrowIcon, EmailIcon, FacebookIcon, InstragramIcon, LinkedinIcon, TwittorIcon } from "@/svg";
import Link from "next/link";
import FooterLogo from "./components/FooterLogo";
import { SmartLink } from "@/components/common";
import { seoAgencyfooterMenu } from "@/data/footer-data";
import { getCurrentYear } from "@/utils";

const socialLinks = [
    {
        icon: <FacebookIcon width="8" height="15" />,
        href: "#",
    },
    {
        icon: <TwittorIcon width="14" height="12" />,
        href: "#",
    },
    {
        icon: <LinkedinIcon fillColor="currentcolor" width="14" height="14" />,
        href: "#",
    },
    {
        icon: <InstragramIcon />,
        href: "#",
    },
];

const SeoAgencyFooter = () => {
    return (
        <footer>
            <div className="al-footer-seo-bg p-relative">
                <div className="al-footer-seo-area al-footer-seo-black-bg pt-100 pb-30">
                    <div className="container">
                        <div className="row">
                            {/* Left Widget */}
                            <div className="col-xl-4 col-lg-5 col-md-5 mb-40">
                                <div className="al-footer-seo-widget al-footer-seo-col-1 z-index-1 p-relative">

                                    {/* Logo */}
                                    <div className="tp-footer-logo mb-30">
                                        {/* footer logo component */}
                                        <FooterLogo />
                                    </div>

                                    {/* Description */}
                                    <div className="al-footer-seo-widget-paragraph mb-35">
                                        <p>
                                            We are committed to helping you succeed, and we will work
                                            with you every step of the way.
                                        </p>
                                    </div>

                                    {/* Social Links */}
                                    <div className="al-footer-seo-widget-social">
                                        {socialLinks.map((item, index) => (
                                            <Link key={index} href={item.href}>
                                                <span>{item.icon}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Widget */}
                            <div className="col-xl-8 col-lg-7 col-md-7 mb-40">
                                <div className="al-footer-seo-widget al-footer-seo-col-2">
                                    <div className="al-footer-seo-widget-bigtext">
                                        <h2 className="al-footer-seo-widget-title tp_fade_anim">
                                            {`Let's`} talk <br /> about your <br /> business goals.
                                        </h2>
                                    </div>

                                    <SmartLink
                                        href="/contact"
                                        className="d-inline-block lh-0 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-inter"
                                    >
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Get Updates</span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                            <span className="btn-icon">
                                                <ArrowIcon />
                                            </span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Area */}
                <div className="al-copyright-seo-area al-copyright-seo-border black-bg-4">
                    <div className="container">
                        <div className="row align-items-center">

                            {/* Left */}
                            <div className="col-xl-5 col-lg-5 col-md-6">
                                <div className="al-copyright-seo-left text-center text-md-start z-index-1 p-relative">
                                    <p>
                                        © {getCurrentYear()}{" "}
                                        <Link href="#">Aleric</Link>. All Rights Reserved.
                                    </p>
                                </div>
                            </div>

                            {/* Middle */}
                            <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                                <div className="al-copyright-seo-middle">
                                    <Link href="mailto:aleric@gmail.com">
                                        <span>
                                            <EmailIcon />
                                        </span>
                                        aleric@gmail.com
                                    </Link>
                                </div>
                            </div>

                            {/* Right Menu */}
                            <div className="col-xl-5 col-lg-4 col-md-6">
                                <div className="al-copyright-seo-right">
                                    <div className="al-copyright-seo-menu text-md-end text-center">
                                        <ul>
                                            {seoAgencyfooterMenu.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.href}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
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

export default SeoAgencyFooter;