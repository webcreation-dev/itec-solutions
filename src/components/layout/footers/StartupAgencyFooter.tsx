import { CopyrightIcon, FooterCompanyDeskIcon, RocketSendIcon } from "@/svg";
import { footerMenus } from "@/data/footer-data";
import FooterLogo from "./components/FooterLogo";
import { getCurrentYear } from "@/utils";
import Link from "next/link";

interface FooterLink {
    label: React.ReactNode;
    href: string;
    badge?: string;
}

interface FooterSectionProps {
    title: string;
    links: FooterLink[];
    className?: string;
}

// Reusable Section Component
const FooterSection: React.FC<FooterSectionProps> = ({ title, links, className = "" }) => (
    <div className={`tp-footer-wd-widget tp-footer-sa-widget mb-40 tp_fade_anim ${className}`}>
        <h3 className="tp-footer-widget-title fs-25 fw-500 mb-20 text-uppercase tp-text-common-white">
            {title}
        </h3>
        <ul>
            {links.map((item, i) => (
                <li key={i}>
                    <Link href={item.href}>
                        {item.label}
                        {item.badge && <span>{item.badge}</span>}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const StartupAgencyFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-bg-common-black p-relative z-index-1 pt-115">
                <div className="tp-footer-wd-main">
                    <div className="container">
                        <div className="row mb-60">

                            {/* Logo + Intro */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-sa-widget mb-45 tp_fade_anim" data-delay=".3">
                                    <div className="tp-footer-logo mb-25">
                                        <FooterLogo />
                                    </div>

                                    <p className="fs-18 tp-text-grey-2 lh-28 mb-35">
                                        We&apos;re Global Digital <br />
                                        Agency Since-2018 to Provide Smart
                                        <br /> Solutions.
                                    </p>
                                    <Link
                                        className="tp-footer-wd-desk tp-text-common-white fw-600 text-uppercase"
                                        href="#"
                                    >
                                        <span>
                                            <FooterCompanyDeskIcon />
                                        </span>
                                        Company Desk
                                    </Link>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <FooterSection title="Company" links={footerMenus.company} />
                            </div>

                            {/* Solutions */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <FooterSection
                                    title="Solutions"
                                    links={footerMenus.services}
                                    className="ml-30"
                                />
                            </div>

                            {/* Newsletter */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-widget-form tp-footer-sa-widget tp-footer-wd-widget-form mb-40 tp_fade_anim" data-delay=".9">
                                    <h3 className="tp-footer-widget-title fs-25 fw-500 mb-25 text-uppercase tp-text-common-white">
                                        Newsletter
                                    </h3>

                                    <form className="p-relative mb-30">
                                        <input
                                            className="tp-input"
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        <button className="tp-button" type="submit">
                                            <RocketSendIcon fillColor="white" />
                                        </button>
                                    </form>

                                    <div className="tp-footer-wd-social">
                                        {footerMenus.social.map((item, i) => (
                                            <Link key={i} href={item.href}>
                                                <i className={`fa-brands ${item.icon}`}></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-xl-5 col-lg-4 col-md-6">
                                    <div className="tp-footer-widget mb-60 tp_fade_anim" data-delay=".5">
                                        <h3 className="tp-footer-widget-title fs-25 fw-500 mb-20 text-uppercase tp-text-common-white">New York</h3>
                                        <Link className="fw-400 fs-18 tp-text-grey-2 lh-28 underline-white hover-text-white" href="#">Apple Inc.<br /> One Apple Park Way Cupertino, CA <br />95014, United States</Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 tp_fade_anim" data-delay=".7">
                                    <div className="tp-footer-widget mb-60">
                                        <h3 className="tp-footer-widget-title fs-25 fw-500 mb-20 text-uppercase tp-text-common-white">London</h3>
                                        <Link className="fw-400 fs-18 tp-text-grey-2 lh-28 underline-white hover-text-white" href="#">Belgrave House<br /> 76 Buckingham Palace Road, London SW1W 9TQ, United Kingdom</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="tp-footer-bottom tp-footer-wd-bottom tp-footer-sa-bottom">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-7">
                                <div className="tp-footer-copyright">
                                    <p className="mb-0 tp-text-grey-2">
                                        <span>
                                            <CopyrightIcon />
                                        </span>{" "}
                                        Copyright {getCurrentYear()}{" "}
                                        <Link className="tp-text-common-white" href="#">
                                            ThemePure
                                        </Link>{" "}
                                        . All Right Reserves.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-5">
                                <div className="tp-footer-copyright text-md-end">
                                    <p className="mb-0 tp-text-grey-2">
                                        <Link href="#" className="hover-text-white">
                                            Privacy Policy
                                        </Link>{" "}
                                        |{" "}
                                        <Link href="#" className="hover-text-white">
                                            Terms & Conditions
                                        </Link>
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

export default StartupAgencyFooter;