"use client";
import { useIsDarkRoute } from "@/hooks";
import { useVideoModal } from "@/providers/VideoProvider";
import { VideoPlayIconTwo } from "@/svg";

const VideoBtn = () => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();
    const contentClass = isDark ?"tp-text-common-white":"tp-text-common-black"

    return (
        <div className="tp-hero-video d-flex align-items-center">
            <button onClick={() => { playVideo("go7QYaQR494") }} className="tp-hero-video-btn popup-video mr-20">
                <span>
                    <VideoPlayIconTwo />
                </span>
            </button>
            <p className={`tp-ff-heading lh-110-per mb-0 fw-700 fs-18 ${contentClass}`}>We&apos;re Global <br /> Brand Design Agency.</p>
        </div>
    );
};

export default VideoBtn;