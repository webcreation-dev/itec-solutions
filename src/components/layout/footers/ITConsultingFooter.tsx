import { FooterReviewArrow, FooterStarIcon, MassageSendIcon } from "@/svg";
import ITConsultingCopyright from "./components/ITConsultingCopyright";
import { footerContact, ITConsultingFooterMenus } from "@/data/footer-data";
import FooterColumn from "./components/FooterColumn";
import Image from "next/image";
import Link from "next/link";

const ITConsultingFooter = () => {
    return (
        <footer>
            <div
                className="cst-footer-ptb cst-footer-style bg-position"
                style={{
                    backgroundImage:
                        "url(/assets/img/update-2/footer/footer-1-bg.jpg)",
                }}
            >
                <div className="cst-footer-wrap pb-45">
                    <div className="container container-1230">
                        <div className="row">

                            {/* Logo & Info */}
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                                <div className="dgm-footer-widget">
                                    <div className="dgm-footer-logo mb-30">
                                        <Link href="/">
                                            <Image
                                                width={120}
                                                height={29}
                                                src="/assets/img/logo/logo-white.png"
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>

                                    <div className="dgm-footer-widget-paragraph mb-35">
                                        <p>Your ultimate travel partner. Carries the <br />
                                            info you need while travelling.</p>
                                    </div>

                                    <div className="app-footer-rating">
                                        <div className="app-hero-bottom-rating">
                                            <div className="app-hero-bottom-rating-point">
                                                <span>4.8</span>
                                            </div>
                                            <div className="app-hero-bottom-rating-star">
                                                <div className="app-hero-bottom-rating-stars">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i}>
                                                            <FooterStarIcon />
                                                        </span>
                                                    ))}
                                                </div>
                                                <Link href="#">
                                                    Based on 204 Reviews{" "}
                                                    <FooterReviewArrow />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Column */}
                            <div className="col-xl-2 col-lg-2 col-md-3 mb-40">
                                <FooterColumn
                                    title={ITConsultingFooterMenus[0].title}
                                    links={ITConsultingFooterMenus[0].links}
                                />
                            </div>

                            {/* Contact Column */}
                            <div className="col-xl-2 col-lg-2 col-md-3 mb-40">
                                <div className="dgm-footer-widget app-footer-widget app-footer-col-3">
                                    <h4 className="dgm-footer-widget-title">
                                        Need help?
                                    </h4>

                                    <div className="app-footer-widget-info mb-20">
                                        <div className="app-footer-widget-info-title">Call us directly?</div>
                                        <Link className="underline-black" href={`tel:${footerContact.phone}`}>
                                            {footerContact.phone}
                                        </Link>
                                    </div>

                                    <div className="app-footer-widget-info">
                                        <div className="app-footer-widget-info-title">Need live support?</div>
                                        <Link className="underline-black" href={`mailto:${footerContact.email}`}>
                                            {footerContact.email}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                                <div className="dgm-footer-widget app-footer-widget app-footer-col-4 z-index-1 p-relative">
                                    <h4 className="dgm-footer-widget-title">
                                        Keep in touch with us
                                    </h4>

                                    <div className="dgm-footer-widget-paragraph color-style mb-25">
                                        <p>Subscribe our newsletter to get the <br /> latest news and update-2s!</p>
                                    </div>
                                    <div className="dgm-footer-widget-input p-relative">
                                        <form>
                                            <input type="email" placeholder="Enter your email" />
                                            <div className="input-button">
                                                <div className="animated-border-box radius-style-2">
                                                    <button type="submit" className="upd-btn-gradient sm p-relative">
                                                        Send <MassageSendIcon />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* footer copyright */}
                <ITConsultingCopyright />
            </div>
        </footer>
    );
};

export default ITConsultingFooter;