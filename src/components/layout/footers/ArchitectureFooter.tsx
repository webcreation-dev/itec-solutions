"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { HeroArrowRightIcon } from "@/svg";
import { getCurrentYear } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
    { label: "À propos", href: "/about-modern" },
    { label: "Ingénierie", href: "/service-details" },
    { label: "Références", href: "/portfolio-col-3" },
    { label: "Actualités", href: "/blog-grid" },
    { label: "Contact", href: "/contact" },
];

const ArchitectureFooter = () => {
    const isDarkTheme = useIsDarkRoute();

    const footerClassesName = {
        sectionBg: !isDarkTheme ? "/assets/img/update/footer/bg.jpg" : undefined,
        sectionBgColor: isDarkTheme ? "#121212" : undefined,
        brandLogo: isDarkTheme ? "/assets/img/logo/logo-white.png" : "/assets/img/logo/logo.png",
    }

    return (
        <footer
            className="bg-position"
            style={{ backgroundImage: `url(${footerClassesName.sectionBg})`, backgroundColor: footerClassesName.sectionBgColor }}
        >
            {/* ================= CTA AREA ================= */}
            <div className="al-cta-archi-area pt-150 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="al-section-archi-title-wrapper">
                                <h2
                                    className="al-section-archi-title mb-20 tp_fade_anim"
                                    data-delay=".3"
                                >
                                    <span className="ml-30"> Un projet </span>
                                    <br /> à nous confier ?
                                </h2>

                                <span
                                    className="al-section-archi-subtitle tp_fade_anim"
                                    data-delay=".4"
                                >
                                    06 - Échangeons
                                </span>
                                <div className="row justify-content-end align-items-end">
                                    <div className="col-lg-9">
                                        <div className="row">
                                            {/* LEFT TEXT */}
                                            <div className="col-lg-6 mb-10">
                                                <div
                                                    className="al-section-archi-content al-cta-archi-para mr-40 tp_fade_anim"
                                                    data-delay=".4"
                                                >
                                                    <p>
                                                        Décrivez-nous votre besoin. Nos équipes vous accompagnent pour cadrer les premières étapes de votre projet.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* BUTTON */}
                                            <div className="col-lg-6 mb-10">
                                                <div
                                                    className="al-cta-archi-btn text-end mt-20 mr-100 tp_fade_anim"
                                                    data-delay=".5"
                                                    data-fade-from="top"
                                                    data-ease="bounce"
                                                >
                                                    <SmartLink
                                                        href="/contact"
                                                        className="tp-left-right d-inline-block tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-500 fs-14 tp-text-grey-5 hover-text-white text-uppercase"
                                                    >
                                                        Nous contacter
                                                        <span className="tp-arrow-angle ml-5">
                                                            <HeroArrowRightIcon />
                                                        </span>
                                                    </SmartLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================= FOOTER AREA ================= */}
            <div className="al-footer-archi-area al-footer-archi-main-border pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        {/* LOGO */}
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 pb-50">
                            <div className="al-footer-archi-logo tp_fade_anim" data-delay=".3">
                                <Link href="/">
                                    <Image
                                        width={150}
                                        height={36}
                                        src={footerClassesName.brandLogo}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* QUICK LINKS */}
                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 pb-50">
                            <div
                                className="footer-widget al-footer-archi-mr tp_fade_anim"
                                data-delay=".4"
                            >
                                <h4 className="al-footer-archi-widget-title mb-20">
                                    Liens utiles
                                </h4>
                                <div className="al-footer-archi-widget-link">
                                    <ul>
                                        {quickLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* CONTACT */}
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 pb-50">
                            <div className="footer-widget tp_fade_anim" data-delay=".5">
                                <h4 className="al-footer-archi-widget-title mb-20">
                                    Contact
                                </h4>
                                <div className="al-footer-archi-widget-link al-footer-archi-widget-contact al-footer-archi-border">
                                    <ul>
                                        <li>
                                            <Link
                                                href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                                target="_blank"
                                            >
                                                Coordonnées du siège<br /> à confirmer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="tel:02(526)2560365">
                                                Téléphone à confirmer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="mailto:support@alericinfo.com">
                                                contact@itec-solutions.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* NEWSLETTER */}
                        <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-10 pb-50">
                            <div className="footer-widget tp_fade_anim" data-delay=".6">
                                <h4 className="al-footer-archi-widget-title mb-10">
                                    Actualités
                                </h4>
                                <div className="al-footer-archi-widget-news">
                                    <form className="mb-25" action="#">
                                        <div className="al-footer-archi-input p-relative mb-15">
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="Votre adresse e-mail"
                                            />
                                            <button
                                                className="al-footer-archi-input-btn tp-left-right"
                                                type="submit"
                                            >
                                                <span className="tp-arrow-angle">
                                                    <HeroArrowRightIcon />
                                                </span>
                                            </button>
                                        </div>

                                        <div className="al-footer-archi-check">
                                            <input
                                                type="checkbox"
                                                name="checkbox"
                                                id="checkbox"
                                            />
                                            <label htmlFor="checkbox">
                                                J&apos;accepte de recevoir les actualités ITEC.
                                            </label>
                                        </div>
                                    </form>

                                    <div className="al-footer-archi-social-link">
                                        <Link href="#">facebook |</Link>
                                        <Link href="#"> instagram | </Link>
                                        <Link href="#">linkedin</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="al-footer-archi-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 mb-30">
                            <div className="al-footer-archi-copyright">
                                <p className="m-0">
                                    Copyright © <span>{getCurrentYear()}</span> | Tous droits
                                    réservés à{" "}
                                    <Link href="#" target="_blank">
                                        {" "}
                                        ITEC Solutions{" "}
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="al-footer-archi-copyright-social text-end">
                                <Link href="#">mentions légales</Link>
                                <span>|</span>
                                <Link href="#">confidentialité</Link>
                                <span>|</span>
                                <Link href="/contact">contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ArchitectureFooter;
