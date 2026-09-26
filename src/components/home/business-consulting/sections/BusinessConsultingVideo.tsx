"use client";
import { SmartLink } from "@/components/common";
import { ServiceArrowIcon } from "@/svg";
import Image from "next/image";

const BusinessConsultingVideo = () => {
    return (
        <div className="tp-video-area tp-bg-common-black-1 pt-115 fix">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="tp-hero-cst-impact-wrap p-relative d-flex align-items-center mb-50 tp_fade_anim" data-delay=".4" data-fade-from="left">
                            <div className="mr-15">
                                <Image width={50} height={50} src="/assets/img/video/cst/shape.png" alt="shape" />
                            </div>
                            <div className="tp-hero-cst-impact-text lh-1">
                                <span className="tp-hero-cst-impact-border fs-15 tp-text-grey-5 tp-ff-dm ls-0">We Build Unique</span>
                                <span className="fs-15 ls-0 d-inline-block tp-text-grey-5 tp-ff-dm mr-30">Strategy + Creativity = <span className="fw-600">Impact</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="tp-video-cst-title-wrap text-end tp_fade_anim" data-delay=".4" data-fade-from="right">
                            <h2 className="tp-video-cst-title tp-ff-dm fs-62 fs-md-50 fs-xs-35 text-capitalize fw-400 d-inline-block">
                                <SmartLink href="/service-details-2">Achieve success <br />
                                    through modern<br />
                                    <span>
                                        <ServiceArrowIcon />
                                    </span>
                                    thinking
                                </SmartLink>
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tp-video-cst-wrap p-relative mt-145">
                            <div className="tp-video-cst-main">
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
                                    <source src="https://html.aqlova.com/videos/budgeto/budgeto%20video.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="tp-video-cst-mask">
                                <img className="img-fluid" width={1905} height={820} src="/assets/img/video/cst/transparent.png" alt="transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingVideo;