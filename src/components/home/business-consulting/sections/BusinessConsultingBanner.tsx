"use client";
import { ArrowIcon, ArrowIconFourteen, BannerBarIcon, LineShapeIcon, } from "@/svg";
import { SmartLink } from "@/components/common";
import Image from "next/image";
import Link from "next/link";

const BusinessConsultingBanner = () => {
    return (
        <div className="tp-banner-area tp-banner-cst-spacing scale-up-img p-relative z-index-1 fix">
            <div className="tp-video-thumb">
                <img data-speed="0.4" className="img-cover scale-up" src="/assets/img/banner/cst/thumb.jpg" alt="thumb" />
            </div>
            <div className="tp-cta-wd-shape">
                <LineShapeIcon />
            </div>
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-banner-cst-content">
                            <span className="tp-testimonial-cst-network">
                                <BannerBarIcon />
                            </span>
                            <div className="d-flex justify-content-center">
                                <div className="tp-banner-cst-widget p-relative">
                                    <Image width={355} height={412}
                                        className="tp-banner-cst-shape" src="/assets/img/banner/cst/shape.png" alt="shape" />
                                    <div className="tp-banner-cst-logo-wrap text-center">
                                        <div className="tp-banner-cst-logo">
                                            <Link href="/"><Image width={125} height={31} src="/assets/img/logo/logo-white-2.png" alt="logo white" /></Link>
                                        </div>
                                        <p className="tp-ff-dm fw-500 fs-18 tp-text-grey-5 ls-m-2 lh-1 mb-10">Supper Services <br /> award</p>
                                        <SmartLink href="/service-details-2" className="tp-banner-cst-logo-btn tp-left-right">
                                            <span className="tp-arrow-angle">
                                                <ArrowIconFourteen />
                                            </span>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-banner-cst-bottom">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tp-banner-cst-title mb-20">
                                            <h2 className="fw-600 fs-52 fs-xs-35 tp-text-common-white tp-ff-dm mb-0">Join Our Community</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-hero-cst-btn-inner text-lg-end mb-5">
                                            <div className="tp_fade_anim d-inline-block" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                                <Link href="/service-details-2" className="tp-btn-cst mb-15 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <span className="btn-text">Free Consulting</span>
                                                        <span className="btn-icon">
                                                            <ArrowIcon />
                                                        </span>
                                                        <span className="btn-icon">
                                                            <ArrowIcon />
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="tp_fade_anim d-inline-block" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                                <SmartLink href="service-details-2" className="tp-btn-cst mb-15 tp-btn-gradian d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm">
                                                    <span className="d-flex align-items-center justify-content-center">
                                                        <span className="btn-text">Schedule a Consultation</span>
                                                        <span className="btn-icon">
                                                            <ArrowIcon />
                                                        </span>
                                                        <span className="btn-icon">
                                                            <ArrowIcon />
                                                        </span>
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
    );
};

export default BusinessConsultingBanner;