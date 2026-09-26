import { useVideoModal } from "@/providers/VideoProvider";
import { VideoPlayIconThree } from "@/svg";

interface WebDesignAgencyTestimonialItemProps {
    videoUrl: string;
    text: string;
    highlight: string;
    end: string;
    name: string;
    role: string;
}

const WebDesignAgencyTestimonialItem: React.FC<WebDesignAgencyTestimonialItemProps> = ({ videoUrl, text, highlight, end, name, role }) => {
    const { playVideo } = useVideoModal();

    return (
        <div className="tp-testimonial-slider-item">
            <div className="tp-video-main tp-testimonial-video">
                <button onClick={() => { playVideo(videoUrl) }} className="tp-hero-video-btn popup-video">
                    <span>
                        <VideoPlayIconThree />
                    </span>
                </button>
            </div>
            <p className="tp-ff-heading fs-33 fs-sm-25 fw-400 tp-text-common-white lh-110-per ls-0 mb-30">
                {text}{" "}
                <span className="tp-text-grey-2">{highlight}</span>{" "}
                {end}
            </p>
            <div>
                <h5 className="fs-25 fw-600 tp-ff-teko tp-text-common-white mb-0">
                    {name}
                </h5>
                <span className="fs-18 fw-400 tp-text-grey-2">{role}</span>
            </div>
        </div>
    );
};

export default WebDesignAgencyTestimonialItem;