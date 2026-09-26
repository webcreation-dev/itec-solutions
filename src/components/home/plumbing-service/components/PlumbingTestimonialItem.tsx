import { PlumbingTestimonialQuoteIcon } from "@/svg";
import { TestimonialItemDT } from "@/types";
import Image from "next/image";

const PlumbingTestimonialItem: React.FC<TestimonialItemDT> = ({ name, designation, avatar, message }) => {
    return (
        <div className="tp-testimonial-pb-item">
            <span className="tp-testimonial-pb-qoute d-inline-block mb-45">
                <PlumbingTestimonialQuoteIcon />
            </span>

            <p className="tp-testimonial-pb-content tp-ff-inter fw-400 fs-52 fs-xl-40 fs-sm-30 fs-xs-25 lh-120-per tp-text-grey-5 mb-85 whitespace-pre-line">
                {message}
            </p>

            <div className="tp-testimonial-pb-author d-flex align-items-center">
                <Image width={80} height={80}
                    className="rounded-circle mr-15"
                    src={avatar}
                    alt={name}
                />
                <div>
                    <h6 className="tp-ff-inter fw-600 fs-24 lh-140-per tp-text-grey-5 mb-5">
                        {name}
                    </h6>
                    <span className="tp-ff-inter fs-18 fw-400 tp-text-grey-5 opacity-8">
                        {designation}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PlumbingTestimonialItem;