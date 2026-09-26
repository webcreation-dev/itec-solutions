import { TestimonialQuoteIcon, TestimonialShape } from "@/svg";
import { TestimonialItemDT } from "@/types";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const ITSolutionTestimonialItem: React.FC<{ item: TestimonialItemDT }> = ({ item }) => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const testimonialItemStyles = {
        titleText: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        descriptionText: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
        shapeFill: isDark ? "#fff" : "#10302A",
        quoteFill: isDark ? "black" : "white",
    };
    // -------------------------------
    return (
        <div className="tp-testimonial-it-item p-relative">
            {/* Shape */}
            <span className="tp-testimonial-it-shape">
                <TestimonialShape fillColor={testimonialItemStyles.shapeFill} />
            </span>

            {/* Quote */}
            <span className="tp-testimonial-it-qoute mb-35">
                <TestimonialQuoteIcon fillColor={testimonialItemStyles.quoteFill} />
            </span>

            {/* Content */}
            <p className={`tp-ff-inter fw-500 fs-22 fs-xl-18 ls-m-2 ${testimonialItemStyles.descriptionText} lh-150-per mb-70`}>
                <span className={`${testimonialItemStyles.titleText}`}>
                    Awesome!
                </span>{" "}
                Working with Aelirc has transformed our operations. The
                team is truly exceptional! Really we&apos;re grateful &
                We&apos;re closing 40% on cold traffic.
            </p>

            {/* Author */}
            <div className="tp-testimonial-it-author d-flex align-items-center">
                <Image width={80} height={80}
                    className="tp-round-26 mr-15"
                    src={item.avatar}
                    alt="avatar"
                />
                <div>
                    <h4 className={`tp-ff-inter fw-600 fs-24 fs-xl-22 mb-5 ${testimonialItemStyles.titleText}`}>
                        {item.name}
                    </h4>
                    <span className={`tp-ff-inter fs-18 ${testimonialItemStyles.titleText}`}>
                        {item.designation}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionTestimonialItem;