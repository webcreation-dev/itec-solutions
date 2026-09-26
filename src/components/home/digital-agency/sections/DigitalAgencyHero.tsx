"use client";
import { ArrowIconFive, ArrowIconSeven, ArrowIconSix, DigitalAgencyHeroShape, ShapeIcon, ShapeIconTwo } from "@/svg";
import HeroBottomContent from "../components/HeroBottomContent";
import VideoBtn from "../components/VideoBtn";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const DigitalAgencyHero = () => {
    const isDark = useIsDarkRoute();

    // Text classes
    const heroTitleTextClass = isDark ? "tp-text-common-white" : ""; // Main hero title text color
    const heroSubtitleTextClass = isDark ? "tp-text-common-black" : ""; // Small "We're" subtitle
    const heroContentTextClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1"; // Paragraph content
    const heroContentExtraClass = isDark ? "tp-text-grey-2" : ""; // Optional additional content color
    const heroCounterTextClass = isDark ? "tp-text-common-white" : "tp-text-common-black"; // Counter numbers (24K+)

    // SVG colors
    const arrowIconColor = isDark ? "#999" : "#030303"; // ArrowIconSeven fill color
    const shapeIconColor = isDark ? "#fff" : "#030303"; // ShapeIconTwo fill color

    return (
        <div className="tp-hero-area pre-header tp-hero-spacing fix">
            <div className="container-fluid container-1800 containers">
                <div className="row">
                    <div className="col-lg-1 col-md-1 d-none d-md-block">
                        <div className="tp-hero-social d-flex align-items-center mt-20">
                            <span className="d-flex align-items-center mb-55">Follow
                                <ArrowIconFive />
                            </span>
                            <Link href="#"><i className="fa-brands fa-dribbble"></i></Link>
                            <Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fa-brands fa-behance"></i></Link>
                            <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-11">
                        <div className="tp-hero-content ml-75">
                            <h2 className={`tp-hero-title ${heroTitleTextClass}`}>
                                <span className="tp-hero-title-sm d-inline-block">
                                    <span className={heroSubtitleTextClass}>We&apos;re</span>
                                    <ArrowIconSix />
                                </span>{" "}
                                Creative <br />
                                Design & Development <br />
                                Agency.
                            </h2>
                            <div className="tp-hero-bottom-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tp-hero-customer d-flex align-items-center mb-50">
                                            <span className="d-inline-block mr-20">
                                                <DigitalAgencyHeroShape />
                                            </span>
                                            <Image className="mr-20" src="/assets/img/hero/avatar.png" alt="avatar image" width={109} height={45} />
                                            <p className={`fw-500 fs-16 ${heroContentTextClass} lh-130-per mb-0 d-inline-block`}>We have <b className={heroCounterTextClass}>24K+</b><br />
                                                customers in world-wide.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="tp-hero-customer-text mb-30">
                                            <p className={`fs-20 lh-28 mb-60 ${heroContentExtraClass}`}>Empowering brands to grow, engage, and thrive in a fast-paced digital world with cutting-edge marketing, design, and development solutions, that deliver measurable growth.</p>
                                            <VideoBtn />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="tp-hero-right-content ml-80 pt-15 mb-30">
                            <h5 className={`fw-500 fs-25 mb-10 ${heroTitleTextClass}`}>Creative & <br /> Aesthetics<br /> Design.</h5>
                            <span className="d-inline-block mb-100">
                                <ArrowIconSeven fillColor={arrowIconColor} />
                            </span>
                            <div className="tp-hero-right-shape tp-btn-bounce">
                                <span className="shape-1" data-speed="0.9">
                                    <ShapeIcon />
                                </span>
                                <span className="shape-2">
                                    <ShapeIconTwo fillColor={shapeIconColor} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-bottom pt-40">
                <HeroBottomContent />
            </div>
        </div>
    );
};

export default DigitalAgencyHero;