"use client";
import { CurvedLineShape, DiagonalTriangleShape, HalfCircleShape, LongArrowRight, VerticalArrowDown, VideoPlayIconTwo } from "@/svg";
import { ArrowLineDivider, DualLineProgressIndicator } from "@/svg/BorderLine";
import { ScrollLink } from "@/components/common/ScrollLink";
import { useVideoModal } from "@/providers/VideoProvider";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const socialLinks = [
    { name: "Dribbble", icon: "fa-dribbble", href: "#" },
    { name: "Behance", icon: "fa-behance", href: "#" },
    { name: "Pinterest", icon: "fa-pinterest", href: "#" },
    { name: "LinkedIn", icon: "fa-linkedin-in", href: "#" },
];

const WebDesignAgencyHero = () => {
    const { playVideo } = useVideoModal();

    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme  ? "tp-text-common-white" : "tp-text-common-black",
        textBody: isDarkTheme  ? "tp-text-grey-2" : "tp-text-grey-1",
        shapeFill: isDarkTheme ? "#fff" : "#030303",
    };
    const heroBgImage = isDarkTheme ? "/assets/img/hero/hero-3/grid-bg-black.png" : "/assets/img/hero/hero-3/grid-bg.png";
    const heroBadgeImage = isDarkTheme ? "/assets/img/hero/hero-3/shape-black.png" : "/assets/img/hero/hero-3/shape.png";
    const avatarImage = isDarkTheme ? "/assets/img/hero/avatar-dark.png":"/assets/img/hero/avatar.png"
    // -------------------------------

    return (
        <div className="section-triger pre-header">
            <div className="tp-hero-area tp-hero-wd-spacing p-relative bg-position"
                style={{ backgroundImage: `url(${heroBgImage})` }}>
                <ScrollLink target="#about" className="tp-smooth tp-hero-wd-btp d-none d-xl-block">
                    <VerticalArrowDown fillColor={themeClasses.shapeFill}/>
                </ScrollLink>
                <div className="container-fluid containers container-1800">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3">
                            <div className="tp-hero-wd-text mb-30">
                                <span className="d-inline-block mb-10">
                                    <DualLineProgressIndicator fillColor={themeClasses.shapeFill}/>
                                </span>
                                <p className={`${themeClasses.textBody} fw-400 fs-20`}><span className={`${themeClasses.textPrimary} fw-500`}>We&apos;re Aleric,</span> to build creative & user-centric design also develop for customer.</p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7 col-lg-9">
                            <div className="tp-hero-wd-title-wrap mb-30">
                                <h2 className={`tp-hero-wd-title tp-ff-teko fs-100 text-uppercase mb-20 ${themeClasses.textPrimary}`}>Crafting
                                    <span className="curved-shape upslide d-inline-block">
                                        <CurvedLineShape fillColor={themeClasses.shapeFill}/>
                                    </span><br />
                                    <span className="d-inline-block title-space">
                                        Web {" "}
                                        <span className="icons d-inline-block">
                                            <LongArrowRight />
                                        </span>{" "}
                                        Design<br />
                                    </span>
                                    Solutions.</h2>
                                <div className="tp-hero-wd-customer p-relative">
                                    <div className="tp-hero-customer d-flex align-items-center mb-30 mr-95">
                                        <Image width={109} height={53} className="mr-20 img-fluid" src={avatarImage} alt="avatar" />
                                        <p className={`fw-500 fs-16 ${themeClasses.textBody} lh-22 mb-0 d-inline-block`}>We have <b className={`${themeClasses.textPrimary} tp-ff-teko fs-22`}>24K+</b><br />
                                            customers in world-wide.</p>
                                    </div>
                                    <div className="tp-hero-video d-flex align-items-center mb-30">
                                        <button onClick={() => { playVideo("go7QYaQR494") }} className="tp-hero-video-btn popup-video mr-20">
                                            <span>
                                                <VideoPlayIconTwo fillColor="currentColor" />
                                            </span>
                                        </button>
                                        <p className={`lh-110-per mb-0 fw-500 fs-18 ${themeClasses.textBody}`}>We&apos;re Global <br /> Brand Design Agency.</p>
                                    </div>
                                    <div className="tp-hero-wd-shape">
                                        <span className="shape-1 mb-5">
                                            <HalfCircleShape fillColor={themeClasses.shapeFill}/>
                                        </span>
                                        <span className="shape-2">
                                            <DiagonalTriangleShape />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-3 col-lg-5">
                            <div className="tp-hero-wd-right mb-30">
                                <img width={123} height={70} className="mb-150" src={heroBadgeImage } alt="shape" />
                                <div>
                                    <h4 className={`tp-ff-teko fw-500 fs-35 mb-5 ${themeClasses.textPrimary}`}>Awwwards</h4>
                                    <p className={`fw-400 fs-20 ${themeClasses.textBody}`}>Top Contributor since 2019 to current.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-wd-bottom p-relative scale-up-img z-index-1 fix">
                <div className="box tp-hero-wd-bottom-bg">
                    <img data-speed=".8" className="img-cover scale-up" src="/assets/img/hero/hero-3/bg.jpg" alt="hero bg" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8">
                            <div className="tp-hero-wd-bottom-info tp-bg-common-black">
                                <h5 className="tp-hero-wd-bottom-title tp-ff-teko fw-500 fs-25 tp-text-common-white lh-30 mb-140">Making a Brand on the <span className="tp-text-theme-primary">Digital Marketplace!</span></h5>
                                <div>
                                    <span className="tp-ff-teko fs-25 tp-text-grey-2">See Our Work</span>
                                    <span className="tp-hero-wd-bottom-border">
                                        <ArrowLineDivider />
                                    </span>
                                    <div className="tp-footer-social">
                                        <ul>
                                            {socialLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.href}>
                                                        <i className={`fa-brands ${item.icon}`}></i>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyHero;