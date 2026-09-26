import {
    DribbleIconTwo,
    FacebookIconTwo,
    InstagramIconThree,
    TwitterIconTwo,
} from "@/svg";
import FooterLogo from "./components/FooterLogo";
import { getCurrentYear } from "@/utils";
import Link from "next/link";

// social data
const socialData = [
    { icon: <FacebookIconTwo />, href: "#" },
    { icon: <TwitterIconTwo />, href: "#" },
    { icon: <DribbleIconTwo />, href: "#" },
    { icon: <InstagramIconThree />, href: "#" },
];

// menu data
const footerMenus = [
    {
        title: "Company",
        colClass: "col-xxl-2 col-xl-2 col-lg-3 col-md-3",
        widgetClass: "crp-footer-col-2",
        delay: ".5",
        links: ["Home", "About Us", "Services", "Our works", "Blog Contact"],
    },
    {
        title: "IT Services",
        colClass: "col-xxl-3 col-xl-3 col-lg-3 col-md-3",
        widgetClass: "crp-footer-col-3",
        delay: ".5",
        links: [
            "Data Security",
            "Cloud Services",
            "Website Development",
            "IT Consultation",
            "UI/UX Design",
        ],
    },
];

const AIAgencyFooter = () => {
    return (
        <footer>
            <div className="crp-footer-area ais-footer-style p-relative pt-120 z-index-1 p-relative">
                <div className="container container-1350">
                    <div className="row">

                        {/* LEFT */}
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                            <div
                                className="crp-footer-widget crp-footer-col-1 mb-90 tp_fade_anim"
                                data-delay=".3"
                            >
                                <div className="crp-footer-logo">
                                    <FooterLogo
                                        width={120}
                                        height={28}
                                        logo="/assets/img/logo/logo-black.png"
                                    />
                                </div>

                                <p>
                                    With years of experience and a team <br /> of seasoned experts,
                                </p>

                                <div className="crp-footer-social">
                                    {socialData.map((item, i) => (
                                        <Link key={i} href={item.href} style={{marginLeft:"4px"}}>
                                            <span>{item.icon}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MENUS */}
                        {footerMenus.map((menu, index) => (
                            <div key={index} className={menu.colClass}>
                                <div
                                    className={`crp-footer-widget ${menu.widgetClass} mb-90 tp_fade_anim`}
                                    data-delay={menu.delay}
                                >
                                    <h4 className="crp-footer-widget-title">
                                        {menu.title}
                                    </h4>

                                    <div className="crp-footer-widget-menu">
                                        <ul>
                                            {menu.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        className="tp-line-white underline-white cream-2"
                                                        href="#"
                                                    >
                                                        {link}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* CONTACT */}
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                            <div
                                className="crp-footer-widget crp-footer-col-4 mb-90 tp_fade_anim"
                                data-delay=".7"
                            >
                                <div className="crp-footer-widget-info mb-40">
                                    <h4 className="crp-footer-widget-title">Location</h4>
                                    <Link
                                        className="tp-line-white underline-white cream-2"
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                    >
                                        Germany — 482 15h Street, Office 426 Berlin, De 80500
                                    </Link>
                                </div>

                                <div className="crp-footer-widget-info">
                                    <h4 className="crp-footer-widget-title">
                                        Call Us on
                                    </h4>

                                    <div className="crp-footer-widget-contact">
                                        <Link
                                            className="tp-line-white underline-white cream-2"
                                            href="mailto:hello@design.com"
                                        >
                                            hello@design.com
                                        </Link>
                                    </div>

                                    <div className="crp-footer-widget-contact">
                                        <Link
                                            className="tel tp-line-white underline-white cream-2 d-inline-block"
                                            href="tel:(+1)2345678910"
                                        >
                                            (+1) 234 567 8910
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="crp-copyright-text ais-footer-copyright text-center pt-30 pb-30">
                                <p>
                                    © {getCurrentYear()} | All rights reserved by{" "}
                                    <Link href="#">
                                        <span>Aqlova</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AIAgencyFooter;