"use client";
import { MedicalTestimonialQuoteIcon } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import { TestimonialItemDT } from "@/types";
import Image from "next/image";

const MedicalTestimonialItem: React.FC<TestimonialItemDT> = ({ avatar, name, designation, message }) => {
    const isDark = useIsDarkRoute();
    const messageColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const authorColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const quoteFill = isDark ? "#fff" : "#333333";

    return (
        <div className="tp-testimonial-md-item text-center">
            <span className="mb-40 d-inline-block">
                <MedicalTestimonialQuoteIcon fillColor={quoteFill} />
            </span>
            <h5 className={`tp-ff-familjen fw-600 fs-52 fs-xl-45 fs-lg-40 fs-md-30 lh-120-per ls-m-4 mb-45 ${messageColor}`}>
                &ldquo;{message}&rdquo;
            </h5>
            <div className="tp-testimonial-md-author">
                <Image className="rounded-circle mb-20" src={avatar} alt={name} width={80} height={80} />
                <h5 className={`tp-ff-inter fw-600 fs-24 mb-5 ${authorColor}`}>{name}</h5>
                <span className={`tp-ff-inter fs-18 ${authorColor}`}>{designation}</span>
            </div>
        </div>
    );
};

export default MedicalTestimonialItem;
