"use client";
import AiStartupCopyright from "./components/AiStartupCopyright";
import { aiMenuLinks, aiSocialLinks } from "@/data/footer-data";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Link from "next/link";

const AiStartupFooter = () => {
    const isDarkRoute = useIsDarkRoute();
    // -------------------------------
    // Class & Asset 
    // -------------------------------
    const sectionBackgroundImg = isDarkRoute ? "/assets/img/footer/ai/bg-black.jpg" : "/assets/img/footer/ai/bg.jpg";
    const footerTextColor = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-5";
    // -------------------------------

    return (
        <footer>
            <div
                className="tp-footer-area pt-155 bg-position"
                style={{ backgroundImage: `url(${sectionBackgroundImg})` }}
            >
                <div className="container-fluid container-1524">
                    <div className="row">
                        {/* Location */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-footer-ai-widget mb-40 tp_fade_anim" data-delay=".3">
                                <h5 className={`tp-ff-jakarta fw-600 fs-18 lh-140-per ls-m-2 text-uppercase ${footerTextColor} mb-15`}>
                                    location
                                </h5>
                                <Link
                                    href="#"
                                    className={`tp-ff-dm fs-18 lh-140-per ls-m-2 ${footerTextColor} opacity-8 underline-black`}
                                >
                                    2118 Thornridge Cir. Syracuse,
                                    <br />
                                    Connecticut 35624
                                </Link>
                            </div>
                        </div>
                        {/* Contact */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-footer-ai-widget widget-2 mb-40 tp_fade_anim" data-delay=".5">
                                <h5 className={`tp-ff-jakarta fw-600 fs-18 lh-140-per ls-m-2 text-uppercase ${footerTextColor} mb-15`}>
                                    Contract
                                </h5>
                                <div className="mb-10">
                                    <Link
                                        href="tel:+025(256)956965"
                                        className={`tp-ff-dm fs-18 lh-140-per ls-m-2 ${footerTextColor} opacity-8 underline-black`}
                                    >
                                        +025 (256) 956 965
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="mailto:themepure@gmail.com"
                                        className={`tp-ff-dm fs-18 lh-140-per ls-m-2 ${footerTextColor} opacity-8 underline-black`}
                                    >
                                        themepure@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Menu */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="tp-footer-ai-menu d-flex justify-content-lg-end mb-40 tp_fade_anim" data-delay=".7">
                                <ul>
                                    {aiMenuLinks.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Social */}
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="tp-footer-wd-social tp-footer-ai-social d-flex justify-content-lg-end mb-40">
                                {aiSocialLinks.map((social, i) => (
                                    <div
                                        key={i}
                                        className="tp_fade_anim"
                                        data-delay={social.delay}
                                        data-fade-from="top"
                                        data-ease="bounce"
                                    >
                                        <Link href="#">
                                            <i className={`fa-brands ${social.icon}`}></i>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Big Footer Title */}
                        <div className="col-lg-12">
                            <div
                                className="tp-footer-ai-title-wrap text-center pt-35 pb-80 tp_fade_anim"
                                data-fade-from="top"
                                data-delay=".7"
                                data-ease="bounce"
                            >
                                <h2 className={`tp-footer-ai-bigtitle tp-ff-jakarta fw-800 text-uppercase ${footerTextColor}`}>
                                    <SmartLink href="/contact-us" className="text-scale-anim">
                                        Aleric
                                    </SmartLink>
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
                {/* copyright area */}
                <AiStartupCopyright />
            </div>
        </footer>
    );
};

export default AiStartupFooter;