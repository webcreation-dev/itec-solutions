"use client";
import { useVideoModal } from "@/providers/VideoProvider";
import { ArrowIconNine, VideoPlayIconTwo } from "@/svg";
import Image from "next/image";

const DigitalAgencyVideo = () => {
    const { playVideo } = useVideoModal();
    return (
        <div className="tp-video-area tp-video-spacing scale-up-img p-relative z-index-1 fix">
            <div className="tp-video-thumb">
                <img data-speed="0.4" className="img-cover scale-up" src="/assets/img/video/thumb.jpg" alt="thumb" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                        <div className="tp-video-content tp-bg-common-black">
                            <h4 className="tp-text-common-white fw-500 fs-25 fs-xs-20 lh-36 mb-50">We empower brands to
                                scale, innovate, and thrive in an ever-changing digital landscape.</h4>
                            <span className="tp-hero-bottom-border mb-40">
                                <ArrowIconNine />
                            </span>
                            <div className="tp-video-main tp-hero-video d-flex align-items-center">
                                <button onClick={() => { playVideo("go7QYaQR494") }} className="tp-hero-video-btn popup-video mr-20">
                                    <span>
                                        <VideoPlayIconTwo />
                                    </span>
                                </button>
                                <p className="tp-ff-heading lh-110-per mb-0 fw-700 fs-18 tp-text-common-white">We&apos;re Global Brand<br /> Digital Agency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyVideo;