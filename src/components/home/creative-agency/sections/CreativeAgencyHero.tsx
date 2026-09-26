"use client";
import { ArrowIconFourteen, VideoPlayIconFive } from "@/svg";
import { ScrollLink } from "@/components/common/ScrollLink";
import { HeroBorderLine } from "@/svg/BorderLine";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import Image from "next/image";

const CreativeAgencyHero = () => {
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();
    const { playVideo } = useVideoModal();

    // Theme-based UI configuration for Hero section
    const heroThemeConfig = {
        iconStrokeColor: isDarkTheme ? "white" : "black",
        iconFillColor: isDarkTheme ? "white" : "#030303",
    };

    // Determine bottom shape image based on theme
    const bottomShapeSrc = isDarkTheme ? "/assets/img/hero/hero-2/bottom-shape-2.png" : "/assets/img/hero/hero-2/bottom-shape.png";

    return (
        <div className="tp-hero-area pre-header tp-hero-2-spacing fix p-relative z-index-1">
            <div className="tp-hero-2-video-container">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    ref={(el) => {
                        if (el) {
                            el.muted = true;
                        }
                    }}
                >
                    <source src="https://html.aqlova.com/videos/aleric/aleric-video.mp4" type="video/mp4" />
                </video>
            </div>
            <img className="tp-hero-2-shape-two d-none d-lg-block" data-speed="0.9" src="/assets/img/hero/hero-2/shape.png" alt="shape" />
            <div className="container-fluid container-1800 containers">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="tp-hero-2-left">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="tp-hero-2-title-wrap pt-115 mb-40">
                                        <h2 className="tp-hero-2-title tp-ff-funnel fw-600 fs-100 tp-text-common-white lh-1">
                                            Build{" "}
                                            <span className="tp-video-2-main d-inline-block">
                                                <span className="tp-video-main tp-hero-video d-flex align-items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => playVideo("go7QYaQR494")}
                                                        className="tp-hero-video-btn popup-video mr-20"
                                                        aria-label="Play video"
                                                    >
                                                        <span>
                                                            <VideoPlayIconFive />
                                                        </span>
                                                    </button>
                                                    <span className="tp-ff-p lh-110-per mb-0 fw-500 fs-18 tp-text-grey-2 ls-1">We&apos;re Global Brand<br /> Digital Agency.</span>
                                                </span>
                                            </span>
                                            <br />
                                            Impactful Brand<br /> Design.
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="tp-hero-2-impact-wrap p-relative d-flex align-items-center mb-40">
                                        <div className="shape-img mr-25">
                                            <Image width={60} height={60} src="/assets/img/hero/hero-2/shape-3.png" alt="shape" />
                                        </div>
                                        <div className="tp-hero-2-impact-text lh-1">
                                            <span className="fw-500 fs-18 tp-text-grey-2 ls-0">We Build Unique</span>
                                            <span className="tp-lines">
                                                <HeroBorderLine />
                                            </span>
                                            <span className="fw-500 fs-18 mt-5 ls-0 d-inline-block tp-text-grey-2">Strategy + Creativity = <span className="tp-text-theme-primary">Impact</span></span>
                                        </div>
                                    </div>
                                    <Image width={100} height={60} className="tp-hero-2-shape upslide" src="/assets/img/hero/hero-2/shape-2.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="tp-hero-2-author mb-40">
                            <div className="tp-hero-2-customer d-flex align-items-center mb-40">
                                <Image width={109} height={45} className="mr-20" src="/assets/img/hero/avatar-2.png" alt="avatar" />
                                <p className="fw-500 fs-16 tp-text-grey-2 lh-130-per mb-0 d-inline-block">We have <b className="tp-text-common-white">24K+</b><br />
                                    customers in world-wide.</p>
                            </div>
                            <p className="fw-400 fs-20 tp-text-grey-2 mb-30">We design stunning, <b className="tp-text-common-white fw-500">Responsive,</b> and <b className="tp-text-common-white fw-500">User-friendly websites</b> tailored to your business goals. Let&apos;s create a <b className="tp-text-common-white fw-500">Digital experience</b> your audience will love.</p>
                            <SmartLink href="/about-me" className="tp-left-right fw-500 fs-15 tp-text-common-white text-uppercase hover-text-white">
                                <span className="mr10 td-text d-inline-block mr-5">See Our Work</span>{" "}
                                <span className="tp-arrow-angle">
                                    <ArrowIconFourteen />
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-2-bottom-shape d-none d-sm-inline-block">
                <div className="p-relative">
                    <Image className="img-fluid" width={1905} height={60} src={bottomShapeSrc} alt="bottom shape" />
                    <div className="tp-hero-2-bottom-scrool">
                        <ScrollLink target="#service" className="tp-smooth">
                            <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="21" height="29" rx="10.5" stroke={heroThemeConfig.iconStrokeColor} />
                                <rect className="upslide-1" x="9" y="10" width="4" height="10" rx="2" fill={heroThemeConfig.iconFillColor} />
                            </svg>
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyHero;