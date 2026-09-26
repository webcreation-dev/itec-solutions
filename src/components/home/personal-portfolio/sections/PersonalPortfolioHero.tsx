"use client";

import { HeroCircleShape, HorizontalArrowLineIcon } from "@/svg";
import CornerShape from "../components/CornerShape";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const PersonalPortfolioHero = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const heroStyles = {
        text: isDark ? "tp-text-common-white" : "tp-text-common-black",
        body: isDark ? "tp-text-grey-2" : "tp-text-grey-1",

        svg: {
            primary: isDark ? "#999" : "#030303",
            corner: isDark ? "#ffffff" : "#030303",
        },
    };
    // -------------------------------

    return (
        <div className="tp-hero-area pre-header tp-hero-pp-spacing p-relative fix">
            {/* Shape */}
            <div className="tp-hero-pp-shape-wrap d-none d-lg-block">
                <span>
                    <HeroCircleShape fillColor={heroStyles.svg.corner} />
                </span>
            </div>

            <div className="container-fluid container-1800 containers">
                <div className="row">
                    <div className="col-lg-7 col-md-11 offset-lg-1">
                        <div className="tp-hero-content p-relative ml-75 mb-30">

                            {/* Subtitle */}
                            <div className="tp-hero-sa-subtitle mb-35">
                                <div className="tp-hero-sa-subtitle-inner">
                                    <span className={`tp-ff-heading fw-500 fs-18 ${heroStyles.text}`}>
                                        Research,<br /> Wireframe, Design
                                    </span>

                                    <span className="d-block">
                                        <HorizontalArrowLineIcon fillColor={heroStyles.svg.primary} />
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="tp-hero-pp-title-wrap mb-120">
                                <span className={`tp-ff-heading fw-500 fs-35 fs-xs-25 ${heroStyles.text} d-inline-block mb-35`}>
                                    I&apos;m Gabriel Mathiwes,
                                </span>

                                <h2 className={`tp-hero-pp-title fw-500 fs-100 fs-xl-80 fs-lg-70 fs-xs-40 lh-1 text-uppercase mb-45 ${heroStyles.text}`}>
                                    Senior Product <br />
                                    <Image
                                        width={185}
                                        height={70}
                                        src="/assets/img/hero/pp/bg.png"
                                        alt="bg image"
                                    />{" "}
                                    Designer.
                                </h2>

                                <p className={`tp-hero-pp-para tp-ff-heading fw-500 fs-25 ${heroStyles.body} lh-130-per`}>
                                    Crafting seamless & delightful experiences<br />
                                    for modern products.
                                </p>
                            </div>

                            {/* Social */}
                            <span className={`tp-ff-heading fw-500 fs-18 ${heroStyles.text} mb-10 d-inline-block`}>
                                Follow Me
                            </span>

                            <div className="tp-hero-pp-social d-flex flex-wrap">
                                <div className="tp-hero-social tp-hero-pp-social d-flex flex-wrap">
                                    <Link href="#"><i className="fa-brands fa-dribbble"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-behance"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                </div>

                                <span className="borders">Download Resume</span>
                            </div>

                            {/* Corner shapes */}
                            <div className="tp-about-wd-shape tp-hero-pp-shape tp-about-sa-shape">
                                <CornerShape position="left" color="#C4EE18" />
                                <CornerShape
                                    position="right"
                                    color={heroStyles.svg.corner}
                                    speed="0.9"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Image */}
                    <div className="col-lg-4 mb-40">
                        <div className="tp-hero-pp-thumb fix">
                            <img
                                data-speed="0.9"
                                src="/assets/img/hero/pp/thumb.jpg"
                                alt="thumbnail"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioHero;