import { CopyrightIcon, RocketSendIcon } from "@/svg";
import { footerMenus } from "@/data/footer-data";
import Image from "next/image";
import Link from "next/link";

const FooterMenu = ({ items }: { items: { label: string; badge?: string }[] }) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>
                <Link href="#">{item.label}</Link>
                {item.badge && <span>{item.badge}</span>}
            </li>
        ))}
    </ul>
);

const ITSolutionFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area tp-bg-common-black p-relative z-index-1 pt-120 fix">
                <div className="tp-footer-wd-main pb-40">
                    <div className="container-fluid container-1524">
                        <div className="row mb-35">
                            {/* Left */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-cst-widget mb-45 tp_fade_anim" data-delay=".3">
                                    <div className="tp-footer-logo mb-35">
                                        <Link href="/"><Image className="img-fluid" width={150} height={36} src="/assets/img/logo/logo-white.png" alt="logo" /></Link>
                                    </div>

                                    <p className="tp-footer-it-dec tp-text-grey-5 fs-18 tp-ff-inter lh-150-per mb-25">
                                        We&apos;re Global Digital Agency Since- <br /> 2018 to Provide Smart Solutions.
                                    </p>
                                    <div className="tp-footer-widget-form tp-footer-cst-widget-form tp-footer-it-widget-form mb-40">
                                        <form className="p-relative mb-30" action="#">
                                            <input className="tp-input d-inline-block" type="text" placeholder="Email Address" />
                                            <button className="tp-button" type="submit">
                                                <RocketSendIcon fillColor="#F3F1F2" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Company */}
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="tp-footer-wd-widget tp-footer-cst-widget tp-footer-it-widget mb-40 ml-45 tp_fade_anim" data-delay=".5">
                                    <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                                        Company
                                    </h3>
                                    <FooterMenu items={footerMenus.company} />
                                </div>
                            </div>

                            {/* Solutions */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-wd-widget tp-footer-cst-widget tp-footer-it-widget ml-115 mb-40 tp_fade_anim" data-delay=".7">
                                    <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                                        Solutions
                                    </h3>
                                    <FooterMenu items={footerMenus.services} />
                                </div>
                            </div>
                            {/* Contact */}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-it-widget mb-40 ml-80 tp_fade_anim" data-delay=".9">
                                    <h3 className="tp-footer-widget-title tp-ff-inter fs-24 ls-m-4 fw-600 mb-30 tp-text-common-white">
                                        Contract
                                    </h3>

                                    <Link className="tp-text-grey-5 opacity-8 tp-ff-inter fs-18 ls-m-2 lh-140-per hover-opacity-1 hover-text-white d-block mb-45" href="https://www.google.com/maps">
                                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                                    </Link>

                                    <Link className="tp-ff-inter fs-18 lh-140-per ls-m-2 tp-text-grey-5 opacity-8 hover-opacity-1 hover-text-white d-block mb-45" href="mailto:info@arelic.com">
                                        info@arelic.com
                                    </Link>

                                    <Link className="tp-ff-inter fw-600 fs-18 lh-140-per ls-m-2 tp-text-grey-5 opacity-8 hover-opacity-1 hover-text-white" href="tel:+152(603)555-0123">
                                        +152 (603) 555-0123
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="tp-footer-cst-bottom tp-footer-it-bottom">
                    <div className="container-fluid container-1524">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="tp-footer-copyright">
                                    <p className="tp-footer-it-copyright mb-10 tp-text-grey-5 tp-ff-inter">
                                        <span><CopyrightIcon /></span>{" "}
                                        Copyright {new Date().getFullYear()} <Link href="#" className="underline-white">ThemePure.</Link> All Right Reserves.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="tp-footer-copyright text-md-end">
                                    <p className="mb-10 tp-text-grey-5 tp-ff-inter tp-text-grey-5 opacity-8">
                                        <Link href="#" className="hover-text-white hover-opacity-1 underline-white">Privacy Policy</Link> |{" "}
                                        <Link href="#" className="hover-text-white hover-opacity-1 underline-white">Terms & Conditions</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="tp-footer-it-bigtext-wrap text-center tp_fade_anim" data-fade-from="top" data-delay=".7" data-ease="bounce">
                                    <h2 className="tp-footer-it-bigtext tp-ff-inter fw-500">Aleric</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ITSolutionFooter;