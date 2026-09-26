"use client";
import { useIsDarkRoute } from "@/hooks";
import { DirectionalArrow } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const DigitalAgencyAbout = () => {
    const isDark = useIsDarkRoute();

    // Heading / title / content text classes
    const sectionSubtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black"; // Subtitle: "Who We Are"
    const sectionTitleClass = isDark ? "tp-text-common-white" : ""; // Main heading text
    const sectionParagraphClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1"; // Paragraph content color

    return (
        <div className="tp-about-area pt-140 pb-125">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-4 col-lg-4">
                        <div className="tp-about-subtitle mb-30 tp_fade_anim" data-delay=".3">
                            <span className={`tp-section-subtitle tp-ff-heading fw-500 ${sectionSubtitleClass} fs-16`}><span className="borders d-inline-block"></span>Who We Are</span>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-8 col-lg-8">
                        <div className="tp-about-content mb-30">
                            <h4 className={`tp-about-title ${sectionTitleClass} fs-50 fs-xl-45 fs-lg-35 fw-500 lh-120-per ls-0 mb-25 tp_fade_anim`} data-delay=".5"><span></span>Through AdOutreach, Aleric has empowered entrepreneurs to leverage value-driven video content.</h4>
                            <div className="tp_fade_anim" data-delay=".6">
                                <p className={`tp-about-para tp-ff-heading fw-500 fs-22 ${sectionParagraphClass}`}>They specialize in leveraging digital technologies to achieve specific marketing, branding, and business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-about-bottom pt-40 mt-30">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="tp-about-expreance d-flex align-items-end mb-30 tp_fade_anim" data-delay=".3">
                                <h2 className={`fw-500 fs-100 ${sectionTitleClass} p-relative d-inline-block mb-0 lh-1`}>12 <span className="plus fs-25">+</span></h2>
                                <span className={`tp-ff-heading fs-18 fw-700 ${sectionSubtitleClass} mb-15 ml-35`}>Years of<br /> Experience</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="tp-about-thumb text-end mb-30 tp_fade_anim" data-delay=".5">
                                <div className="tp-about-thumb-height mb-40 fix">
                                    <img data-speed=".9" className="img-cover" src="/assets/img/about/thumb.jpg" alt="Thumb" />
                                </div>
                                <Image width={65} height={65} className="mr-25" src="/assets/img/about/shape.png" alt="Shape" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-about-thumb tp-about-thumb-height-2 fix mb-30 tp_fade_anim" data-delay=".7">
                                <img data-speed=".9" className="img-cover" src="/assets/img/about/thumb-2.jpg" alt="Thumb 2" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="tp-rounded-btn-wrap text-md-end mr-40 mb-30 tp_fade_anim" data-delay=".8" data-fade-from="top" data-ease="bounce">
                                <div className="btn_wrapper d-inline-block">
                                    <Link href="/about-creative" className="tp-btn-rounded btn-item">
                                        <span className="d-block mb-10">
                                            <DirectionalArrow />
                                        </span>
                                        Start the Journey
                                        <i className="tp-btn-circle-dot"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyAbout;