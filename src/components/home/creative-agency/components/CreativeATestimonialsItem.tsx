import { useIsDarkRoute } from "@/hooks";
import { TestimonialQuoteThree } from "@/svg";
import Image from "next/image";
import { ReactNode } from "react";

interface CreativeATestimonialsItemProps {
    text: ReactNode;
    img: string;
    name: string;
    role: string;
}

const CreativeATestimonialsItem = ({ text, img, name, role }: CreativeATestimonialsItemProps) => {
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

    // Theme-based style tokens for testimonial section
    const testimonialTheme = {
        primaryColor: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        bodyTextClass: isDarkTheme ? "tp-text-grey-2" : "tp-text-grey-1",
    };

    return (
        <div className="tp-testimonial-2-content text-center">

            <p className={`fs-35 fs-xs-25 ${testimonialTheme.primaryColor} fw-300 lh-130-per mb-35`}>
                {text}
            </p>

            <div className="d-flex align-items-center text-start justify-content-center">
                <div className="tp-testimonial-sa-qoute tp-testimonial-qoute mr-15">
                    <span className="qoute">
                        <TestimonialQuoteThree />
                    </span>
                    <div className="qoute-img">
                        <Image
                            width={60}
                            height={60}
                            className="rounded-circle"
                            src={img}
                            alt="Avatar"
                        />
                    </div>
                </div>
                <div>
                    <h5 className={`tp-ff-funnel fw-500 fs-25 ${testimonialTheme.primaryColor} mb-0`}>
                        {name}
                    </h5>
                    <span className={`fs-18 ${testimonialTheme.bodyTextClass}`}>
                        {role}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CreativeATestimonialsItem;