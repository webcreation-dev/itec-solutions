import { StartupTestimonialQuoteIcon, VideoPlayIconEight } from "@/svg";
import { useVideoModal } from "@/providers/VideoProvider";
import { TestimonialItemDT } from "@/types";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const StartupAgencyTestimonialItem: React.FC<TestimonialItemDT> = ({ avatar, name, designation, message }) => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const testimonialItemStyles = {
        quoteHighlight: isDark ? "tp-text-common-white" : "tp-text-common-black",
        quoteSecondary: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
        nameColor: isDark ? "tp-text-common-white" : "",
        roleColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
    }

    return (
        <div className="tp-testimonial-sa-item">
            <div className="tp-video-main tp-testimonial-sa-video mb-25">
                <button onClick={() => playVideo("go7QYaQR494")} className="tp-hero-video-btn popup-video">
                    <span>
                        <VideoPlayIconEight />
                    </span>
                </button>
            </div>
            <p className={`lh-130-per fs-25 fs-xs-20 fw-500 tp-ff-heading mb-60 ${testimonialItemStyles.quoteHighlight}`}>Awesome!  <span className={testimonialItemStyles.quoteSecondary}>{message}</span> We&apos;re closing 40% on cold traffic. </p>
            <div className="tp-testimonial-sa-avatar d-flex">
                <div className="tp-testimonial-sa-qoute mr-20">
                    <span className="qoute">
                        <StartupTestimonialQuoteIcon />
                    </span>
                    <Image className="rounded-circle" src={avatar} alt={name} width={80} height={80} />
                </div>
                <div>
                    <h5 className={`fw-500 fs-25 mb-0 ${testimonialItemStyles.nameColor}`}>{name}</h5>
                    <span className={`fs-18 ${testimonialItemStyles.roleColor}`}>{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyTestimonialItem;