import PhotographerCopyright from "./components/PhotographerCopyright";
import PhotographerTextSlide from "./components/PhotographerTextSlide";
import { socialLinks } from "@/data/footer-data";
import Link from "next/link";

const PhotographerFooter = () => {
    return (
        <footer className="cursor-style fix">
            <div className="al-footer-pg-area pt-150 pb-60"
                style={{ backgroundColor: "#121314" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="al-footer-pg-subscribe-box text-center">
                                <span className="al-footer-pg-subscribe-title">
                                    Subscribe and never miss out
                                </span>
                                <div className="al-footer-pg-input-box">
                                    <form className="al-footer-pg-input" action="#">
                                        <input type="email" placeholder="Your Email" />
                                        <button
                                            className="al-btn-pg-subscribe"
                                            type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                                <div className="al-footer-pg-info-box">
                                    <Link
                                        className="al-footer-pg-info-mail"
                                        href="mailto:hello@yourwebsite.com">
                                        hello@yourwebsite.com
                                    </Link>
                                    <div className="al-footer-pg-social">
                                        {socialLinks.map((item, index) => (
                                            <Link key={index} href={item.href}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Text Slider */}
                <PhotographerTextSlide />
            </div>
            {/* Copyright */}
            <PhotographerCopyright />
        </footer>
    );
};

export default PhotographerFooter;