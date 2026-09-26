import { TestimonialQuote, TestimonialShape } from '@/svg';
import { TestimonialItemDT } from '@/types';
import { useIsDarkRoute } from '@/hooks';
import Image from 'next/image';

const TestimonialItem: React.FC<TestimonialItemDT> = ({ message, avatar, name, designation }) => {
    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute();

    // Helper classes based on dark mode
    const textColorPrimary = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const textColorSecondary = isDark ? "tp-text-grey-2" : "tp-text-common-black";
    const quoteColor = isDark ? "black" : "white";
    const shapeColor = isDark ? "#F3F1F2" : "#B4E717";

    return (
        <div className="tp-testimonial-it-item p-relative">
            <span className="tp-testimonial-it-shape">
                <TestimonialShape fillColor={shapeColor} />
            </span>

            <span className="tp-testimonial-it-qoute mb-35">
                <TestimonialQuote fillColor={quoteColor} />
            </span>

            <p className={`tp-ff-inter fw-500 fs-22 fs-xl-18 ls-m-2 ${textColorSecondary} lh-150-per mb-70`}>
                <span className={textColorPrimary}>
                    Awesome!
                </span>{" "}
                {message}
            </p>

            <div className="tp-testimonial-it-author d-flex align-items-center">
                <Image
                    className="tp-round-26 mr-15"
                    src={avatar}
                    alt={name}
                    width={80}
                    height={80}
                />
                <div>
                    <h4 className={`tp-ff-inter fw-600 fs-24 fs-xl-22 ${textColorPrimary} mb-5`}>
                        {name}
                    </h4>
                    <span className={`tp-ff-inter fs-18 ${textColorPrimary}`}>
                        {designation}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;