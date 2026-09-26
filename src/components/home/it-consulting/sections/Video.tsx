import Image from "next/image";

const Video = () => {
    return (
        <div className="cst-video-ptb p-relative pb-160">
            <div className="container container-1524">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cst-video-thumb text-center">
                            <Image style={{ width: "100%", height: "auto" }} width={1500} height={820} className="tp-gsap-image w-100" src="/assets/img/update-2/video/video-thumb-1.jpg" alt="Video Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;