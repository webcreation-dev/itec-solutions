"use client";

const VideoVPArea = () => {
    return (
        <div className="tp-video-vp-area tp-video-brand-img-wrap-2 fix pb-160">
            <div className="container-fluid container-1830 p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-video-vp-wrap">
                            <div className="tp-video-vp-img-inner-2" id="video">
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
                                    <source src="https://html.aqlova.com/videos/aleric/video-production.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoVPArea;