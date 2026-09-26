import { useVideoModal } from "@/providers/VideoProvider";
import { TestimonialQuoteTwo, VideoPlayIconTwo } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    img: string;
}

const TestimonialLeft = ({ item }: { item: TestimonialItem }) => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const testimonialStyle = {
        playIconColor: isDark ? "#F3F1F2" : "currentColor",
    };
    // -------------------------------

    return (
        <div className="col-lg-6 mb-25">
            <div className="tp-testimonial-cst-wrap p-relative">
                <div className="tp-testimonial-cst-thumb">
                    <Image className="img-fluid w-auto h-100" width={651} height={609} src={item.img} alt="thumb" />
                </div>
                <div className="tp-testimonial-cst-item tp-bg-common-green-2">
                    <div className="tp-video-main tp-testimonial-sa-video mb-40">
                        <button
                            onClick={() => { playVideo("go7QYaQR494") }}
                            className="tp-hero-video-btn popup-video">
                            <span>
                                <VideoPlayIconTwo width="13" height="16" fillColor={testimonialStyle.playIconColor} />
                            </span>
                        </button>
                    </div>
                    <p className="tp-text-common-black-1 lh-140-per fs-24 fs-lg-20 fs-xs-20 fw-500 tp-ff-dm mb-40">
                        Awesome! Working with Aelirc has transformed our operations. The team
                        is truly exceptional! Really we&apos;re grateful & {"We're"} closing 40% on
                        cold traffic.
                    </p>
                    <div className="tp-testimonial-sa-avatar d-flex">
                        <div className="tp-testimonial-sa-qoute mr-20">
                            <span className="qoute">
                                <TestimonialQuoteTwo />
                            </span>
                            <Image width={50} height={50}
                                className="rounded-circle"
                                src="/assets/img/testimonial/sa/avatar.png"
                                alt="avatar image"
                            />
                        </div>
                        <div>
                            <h5 className="fw-600 fs-28 mb-0 tp-text-common-black-1 tp-ff-dm">
                                {item.name}
                            </h5>
                            <span className="fs-20 tp-ff-dm tp-text-common-black-1">
                                {item.role}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TestimonialLeft;