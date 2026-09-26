import { SmartLink } from "@/components/common";
import { ArrowIconTwo } from "@/svg";
import Image from "next/image";

const SeoAgencyVideo = () => {
    return (
        <div className="al-video-area al-video-height p-relative">
            <div className="al-video-play-btn">
                <SmartLink href="/contact" className="al-hover-btn-wrapper btn_wrapper btn-item">
                    Get a Demo
                    <span>
                        <ArrowIconTwo />
                    </span>
                </SmartLink>
            </div>
            <div className="al-video-img">
                <Image style={{ width: "100%", height: "auto" }} width={1351} height={901} data-speed=".8" src="/assets/img/update/video/video-img.jpg" alt="Video Image" />
            </div>
        </div>
    );
};
export default SeoAgencyVideo;