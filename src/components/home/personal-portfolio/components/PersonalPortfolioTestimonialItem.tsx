import { PPTestimonialQuoteIcon } from "@/svg";
import { TestimonialItemDT } from "@/types";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const PersonalPortfolioTestimonialItem: React.FC<TestimonialItemDT> = ({
    message,
    avatar,
    name,
    designation,
}) => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Theme-based styles
    // -------------------------------
    const testimonialStyles = {
        text: isDark
            ? "tp-text-common-white"
            : "tp-text-common-black",

        messageText: isDark
            ? "tp-text-grey-2"
            : "tp-text-common-black",

        metaText: isDark
            ? "tp-text-grey-2"
            : "tp-text-grey-1",
    };
    // -------------------------------

    return (
        <div className="tp-testimonial-2-content text-center">

            {/* Message */}
            <h5
                className={`fs-35 fs-lg-30 fs-xs-25 ${testimonialStyles.messageText} fw-500 lh-130-per mb-35`}
            >
                {message}
            </h5>

            <div className="d-flex align-items-center text-start justify-content-center">

                {/* Quote + Avatar */}
                <div className="tp-testimonial-sa-qoute tp-testimonial-qoute mr-15">
                    <span className="qoute">
                        <PPTestimonialQuoteIcon />
                    </span>

                    <div className="qoute-img">
                        <Image
                            width={60}
                            height={60}
                            className="rounded-circle"
                            src={avatar}
                            alt={name}
                        />
                    </div>
                </div>
                {/* Name + Designation */}
                <div>
                    <h5 className={`fw-700 fs-25 ${testimonialStyles.text} mb-0`}>
                        {name}
                    </h5>

                    <span className={`fs-18 ${testimonialStyles.metaText}`}>
                        {designation}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioTestimonialItem;