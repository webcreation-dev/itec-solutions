"use client";
import { useVideoModal } from "@/providers/VideoProvider";
import { VideoPlayIconSeven } from "@/svg";
import Image from "next/image";

const MedicalVideo = () => {
    const { playVideo } = useVideoModal();
    const videoId = "go7QYaQR494"; // Replace with your YouTube video ID

    return (
        <div className="tp-video-area tp-video-md-spacing scale-up-img p-relative">
            <Image className="tp-video-md-bg img-cover scale-up img-fluid" data-speed=".8"
                src="/assets/img/video/md/bg.jpg" alt="" width={2124} height={960} />
            <div className="tp-video-main tp-video-md-wrap">
                <button onClick={() => { playVideo(videoId) }} className="tp-video-md-btn popup-video video-animetion">
                    <span>
                        <VideoPlayIconSeven />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default MedicalVideo;
