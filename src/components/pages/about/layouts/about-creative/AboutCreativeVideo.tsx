"use client";

import React from "react";
import { useVideoModal } from "@/providers/VideoProvider";

const AboutCreativeVideo = () => {
    const { playVideo } = useVideoModal();

    return (
        <div className="tp-video-area tp-video-spacing p-relative z-index-1 fix">
            <div className="tp-video-thumb">
                <img data-speed=".8" className="img-cover" src="/assets/img/video/thumb.jpg" alt="Video Cover Thumbnail" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                        <div className="tp-video-content tp-bg-common-black">
                            <h4 className="tp-text-common-white fw-500 fs-25 fs-xs-20 lh-36 mb-50">
                                ITEC accompagne les projets avec une vision globale, de l’étude initiale à la réalisation, en France comme en Afrique de l’Ouest.
                            </h4>
                            <span className="tp-hero-bottom-border mb-40">
                                <svg height="6" viewBox="0 0 344 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM339 3.5L344 5.88675V0.113249L339 2.5V3.5ZM4.5 3.5H339.5V2.5H4.5V3.5Z" fill="white" fillOpacity="0.15" />
                                </svg>
                            </span>
                            <div className="tp-video-main tp-hero-video d-flex align-items-center">
                                <button onClick={() => playVideo("go7QYaQR494")} className="tp-hero-video-btn popup-video mr-20">
                                    <span>
                                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2595 11.3877C15.9455 10.276 15.9455 7.79857 14.2595 6.68685L4.82854 0.468212C2.95139 -0.769576 0.455619 0.592952 0.476139 2.84432L0.588819 15.2073C0.609123 17.4355 3.08348 18.7571 4.94126 17.5321L14.2595 11.3877Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </button>
                                <p className="tp-ff-heading lh-110-per mb-0 fw-700 fs-18 tp-text-common-white">
                                    ITEC Solutions<br />
                                    Ingénierie · Construction · Développement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCreativeVideo;
