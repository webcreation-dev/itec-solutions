import { SubscribeEmailIcon } from "@/svg";
import { getCurrentYear } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const companyLinks = ["About", "Contact", "Our News", "Our Career"];

const serviceLinks = [
    "Construction",
    "interior",
    "Architecture",
    "Repair",
    "City planning",
];

const socialLinks = ["Pinterest", "Twitter", "Medium", "Instagram"];

const ConstructionFooter = () => {
    return (
        <footer>
            <div
                className="cnt-footer-bg"
                style={{
                    backgroundColor: "#111214",
                    backgroundImage: `url(/assets/img/update-2/footer/footer-2-bg.png)`,
                }}
            >
                <div className="ar-footer-area pt-115 pb-75">
                    <div className="container container-1430">
                        <div className="row">

                            {/* Col 1 */}
                            <div className="col-xl-4 col-lg-6 col-md-8">
                                <div
                                    className="ar-footer-widget ar-footer-col-1 mb-40 tp_fade_anim"
                                    data-delay=".3"
                                >
                                    <div className="ar-footer-logo mb-30">
                                        <Link href="index.html">
                                            <Image width={140} height={34}
                                                src="/assets/img/logo/logo-white.png"
                                                alt="footer logo"
                                            />
                                        </Link>
                                    </div>

                                    <div className="ar-footer-widget-content">
                                        <p>
                                            Our goal is to exceed expectations <br />
                                            and create spaces that are both beautiful <br />
                                            and practical.
                                        </p>
                                    </div>

                                    <div className="ar-footer-widget-form">
                                        <div className="ar-footer-widget-input p-relative">
                                            <input type="text" placeholder="Enter your email" />
                                            <span className="ar-footer-widget-envelop">
                                                <SubscribeEmailIcon />
                                            </span>

                                            <button
                                                className="ar-footer-widget-btn"
                                                type="submit"
                                            >
                                                subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Col 2 */}
                            <div className="col-xl-2 col-lg-3 col-md-4">
                                <div
                                    className="ar-footer-widget ar-footer-col-2 mb-40 tp_fade_anim"
                                    data-delay=".4"
                                >
                                    <h4 className="ar-footer-widget-title">Company</h4>
                                    <div className="ar-footer-widget-menu">
                                        <ul>
                                            {companyLinks.map((item, i) => (
                                                <li key={i}>
                                                    <Link href="#">{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Col 3 */}
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div
                                    className="ar-footer-widget ar-footer-col-3 mb-40 tp_fade_anim"
                                    data-delay=".5"
                                >
                                    <h4 className="ar-footer-widget-title">Service</h4>
                                    <div className="ar-footer-widget-menu">
                                        <ul>
                                            {serviceLinks.map((item, i) => (
                                                <li key={i}>
                                                    <Link href="#">{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Col 4 */}
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div
                                    className="ar-footer-widget ar-footer-col-4 mb-40 tp_fade_anim"
                                    data-delay=".6"
                                >
                                    <h4 className="ar-footer-widget-title">Inquire</h4>

                                    <div className="ar-footer-widget-info-box">
                                        <div className="ar-footer-widget-info mb-20">
                                            <Link
                                                className="https://www.google.com/maps"
                                                target="_blank"
                                                href="#"
                                            >
                                                7300-7398 Colonial Rd, <br /> Brooklyn, NY 11209
                                            </Link>
                                        </div>

                                        <div className="ar-footer-widget-info">
                                            <Link target="_blank" href="tel:(+068)56819696">
                                                (+068) 5681 96 96
                                            </Link>
                                            <Link target="_blank" href="mailto:hello@agncy.com">
                                                hello@agncy.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="ar-copyright-area ar-copyright-ptb">
                    <div className="container container-1430">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="ar-copyright-text text-lg-start text-center">
                                    <p>Aqlova © {getCurrentYear()}. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ar-copyright-social text-center text-lg-end">
                                    {socialLinks.map((item, i) => (
                                        <Link key={i} href="#">
                                            {item}
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

export default ConstructionFooter;