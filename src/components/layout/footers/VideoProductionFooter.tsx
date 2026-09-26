import { ArrowIconSeventeen, CopyrightIcon } from "@/svg";
import { getCurrentYear } from "@/utils";
import Link from "next/link";

const navigationLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contacts", href: "#" },
];

const socialLinks = [
    { title: "Twitter", href: "#" },
    { title: "Instagram", href: "#" },
    { title: "LinkedIn", href: "#" },
    { title: "Dribble", href: "#" },
];

const footerMenuLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Use", href: "#" },
    { title: "Site Map", href: "#" },
];

const VideoProductionFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-bg-common-black-5 pt-155">
                <div className="container-fluid container-1524">
                    <div className="row">

                        {/* Contact */}
                        <div className="col-lg-7">
                            <div className="tp-footer-vp-widget mb-40">
                                <div className="mb-15">
                                    <Link
                                        href="tel:+123(524)555-2456"
                                        className="tp-ff-inter fw-500 fs-24 lh-120-per ls-m-4 tp-text-grey-5 hover-text-white underline-white"
                                    >
                                        +123(524) 555-2456
                                    </Link>
                                </div>

                                <div>
                                    <Link
                                        href="mailto:Hello@aleric.com"
                                        className="tp-ff-inter fw-500 fs-42 lh-120-per ls-m-2 tp-text-grey-5 hover-text-white underline-white"
                                    >
                                        Hello@aleric.com
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-footer-vp-widget ml-70 mb-40">
                                <span className="tp-ff-inter fw-500 fs-16 ls-m-4 tp-text-grey-5 d-inline-block mb-20">
                                    Navigation
                                </span>

                                <ul>
                                    {navigationLinks.map((link) => (
                                        <li key={link.title}>
                                            <Link href={link.href}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="tp-footer-vp-widget ml-20 mb-40">
                                <span className="tp-ff-inter fw-500 fs-16 ls-m-4 tp-text-grey-5 d-inline-block mb-20">
                                    Social
                                </span>

                                <ul>
                                    {socialLinks.map((link) => (
                                        <li key={link.title}>
                                            <Link href={link.href}>
                                                {link.title}
                                                <ArrowIconSeventeen />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Big Title */}
                        <div className="col-12">
                            <div className="tp-footer-vp-bigtext-wrap mt-110 mb-55 text-center">
                                <h2 className="tp-footer-vp-bigtext tp-ff-morganite-semibold text-uppercase ls-0 mb-0 tp-text-common-white text-scale-anim-bottom">
                                    Aleric Video Production
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="tp-footer-vp-bottom pb-15">
                        <div className="row">

                            {/* Copyright */}
                            <div className="col-lg-6 col-md-7">
                                <div className="tp-footer-copyright">
                                    <p className="tp-footer-it-copyright mb-10 tp-text-grey-5 tp-ff-inter">
                                        <span>
                                            <CopyrightIcon />
                                        </span>
                                        Copyright {getCurrentYear()}{" "}
                                        <Link href="#" className="underline-white">
                                            ThemePure.
                                        </Link>{" "}
                                        All Right Reserves.
                                    </p>
                                </div>
                            </div>

                            {/* Footer Menu */}
                            <div className="col-lg-6 col-md-5">
                                <div className="tp-footer-md-copyright-menu text-md-end mb-10">
                                    {footerMenuLinks.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.href}
                                            className="tp-text-grey-5 tp-ff-dm opacity-8 hover-text-white hover-opacity-1"
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default VideoProductionFooter;