"use client";

const PhotographerVideo = () => {
    return (
        <div className="al-video-pg-area">
            <div className="al-video-pg-wrap">
                <video
                    className="play-video"
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
                    <source src="https://html.aqlova.com/videos/diego/diego-video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default PhotographerVideo;