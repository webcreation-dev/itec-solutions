"use client";
import { SmartLink } from "@/components/common";
import { VPPortfolioItem } from "@/types";
import { useRef } from "react";

const PortfolioItem: React.FC<VPPortfolioItem> = ({ video, link, titleTop, titleMiddle, }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const playVideo = () => {
        iframeRef.current?.contentWindow?.postMessage(
            '{"method":"play"}',
            "*"
        );
    };
    const pauseVideo = () => {
        iframeRef.current?.contentWindow?.postMessage(
            '{"method":"pause"}',
            "*"
        );
    };
    return (
        <div className="grid-item">
            <div className="project-item project-style-3 hover-play"
                onMouseEnter={playVideo}
                onMouseLeave={pauseVideo}
            >
                <div className="project-item-inner">
                    <div className="tp-portfolio-vp-post-thumbnail">
                        <div className="video-container">
                            <iframe
                                ref={iframeRef}
                                src={`${video}&api=1&player_id=vimeo`}
                                loading="lazy"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                referrerPolicy="strict-origin-when-cross-origin"

                            // ref={iframeRef}
                            // src={`${video}&api=1&player_id=vimeo`}
                            // loading="lazy"
                            // allow="autoplay; fullscreen; picture-in-picture"
                            ></iframe>
                        </div>
                    </div>
                    <div className="tp-portfolio-vp-content">
                        <div className="tp-portfolio-vp-title tp-ff-inter fw-600 fs-32 fs-xs-22 lh-160-per ls-m-3 tp-text-grey-5">
                            <SmartLink href={link}>
                                <span className="tp-portfolio-vp-text-top">
                                    {titleTop}
                                </span>
                                <br />
                                <span className="tp-portfolio-vp-text-middle">
                                    {titleMiddle}
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;