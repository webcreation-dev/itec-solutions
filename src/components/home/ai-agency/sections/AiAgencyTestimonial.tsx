import AiAgencyTestimonialItem from "../components/AiAgencyTestimonialItem";
import { TestimonialGoogleIcon, TestimonialStarIcon } from "@/svg";
import { testimonialItems } from "@/data/testimonial-data";
import Image from "next/image";

const AiAgencyTestimonial = () => {
    // Retrieve ai agency testimonial items for rendering
    const testimonials = testimonialItems[6].aiAgency;

    return (
        <div className="ais-testimonial-ptb p-relative pt-100 pb-80" style={{ backgroundColor: "#F8E9D9" }}>
            <div className="app-testimonial-shape">
                <div className="shape-1" data-speed=".9">
                    <Image width={80} height={80} src="/assets/img/update-2/testimonial/ai/testimonial-shape-1.png" alt="shape-1" />
                </div>
                <div className="shape-2" data-speed="1.1">
                    <Image width={89} height={80} src="/assets/img/update-2/testimonial/ai/testimonial-shape-2.png" alt="shape-2" />
                </div>
                <div className="shape-3">
                    <Image className="img-fluid" width={922} height={922} src="/assets/img/update-2/testimonial/ai/testimonial-shape-circle.png" alt="shape circle" />
                </div>
            </div>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="app-testimonial-warp mb-55">
                            <div className="app-testimonial-heading text-center p-relative mb-20">
                                <span className="ais-section-subtitle">Our Testimonial</span>
                                <h4 className="ais-section-title">Trusted by 21,000+ customers <br /> worldwide today</h4>
                                <div className="app-testimonial-big-text">
                                    <h3>4.86</h3>
                                </div>
                            </div>
                            <div className="app-testimonial-review-width tp_fade_anim" data-delay=".6" data-fade-from="top" data-ease="bounce">
                                <div className="app-testimonial-review">
                                    <div className="app-testimonial-review-icon">
                                        <span>
                                            <TestimonialGoogleIcon />
                                        </span>
                                    </div>
                                    <div className="app-testimonial-review-content">
                                        <span><i>4.9/5</i>{" "}
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} style={{ marginRight: "4px" }}>
                                                    <TestimonialStarIcon />
                                                </span>
                                            ))}
                                        </span>
                                        <p>Based on 1,258 reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ais-testimonial-wrap z-index-1 p-relative">
                <div className="app-testimonial-wrapper">
                    <div className="app-testimonial-slider d-flex">
                        {[...(testimonials || []), ...(testimonials || [])].map((item, index) => (
                            <AiAgencyTestimonialItem key={index} {...item} />
                        ))}
                    </div>
                </div>
                <div className="app-testimonial-wrapper ais-rtl">
                    <div className="app-testimonial-slider d-flex">
                        {[...(testimonials || []), ...(testimonials || [])].map((item, index) => (
                            <AiAgencyTestimonialItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgencyTestimonial;