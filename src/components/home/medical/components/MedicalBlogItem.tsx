"use client";
import { CalendarIcon, CommentTwoIcon, MedicalButtonArrow } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { BlogItemProps } from "@/types";
import Image from "next/image";

const MedicalBlogItem: React.FC<BlogItemProps> = ({ image, title, date, fadeFrom }) => {
    const isDark = useIsDarkRoute();
    const textColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const buttonHoverClass = isDark ? "hover-text-white" : "hover-text-black";

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 tp_fade_anim" data-delay=".4" data-fade-from={fadeFrom} data-ease="bounce">
            <div className="tp-blog-ai-item tp-blog-md-item tp--hover-item tp-round-24 mb-30">
                <SmartLink href="/blog-details-2" className="tp-round-24 w-100 fix p-relative d-inline-block">
                    <div className="tp-blog-ai-thumb w-100 tp--hover-img tp-round-24"
                        data-displacement="/assets/img/imghover/stripe-mul.png"
                        data-intensity="0.2"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <Image className="tp-round-24 w-100 img-fluid" src={image} alt={title} width={580} height={435} />
                    </div>
                </SmartLink>
                <div className="tp-blog-ai-content tp-blog-md-content text-center">
                    <div className="tp-blog-md-dates">
                        <span className={`tp-ff-dm mb-5 fw-500 fs-16 d-inline-block ${textColor}`}>
                            <CalendarIcon />
                            {date}
                        </span>
                        <span className={`tp-ff-dm mb-5 fw-500 fs-16 d-inline-block ${textColor}`}>
                            <CommentTwoIcon />
                            01 Comments
                        </span>
                    </div>
                    <h4 className={`tp-blog-md-title tp-ff-familjen fs-42 lh-1 ls-m-4 mb-25 ${textColor}`}>
                        <SmartLink href="/blog-details-2" className="underline-white">{title}</SmartLink>
                    </h4>
                    <SmartLink href="/blog-details-2" className={`tp-left-right p-relative d-inline-block text-uppercase lh-1 fs-16 fw-700 tp-ff-dm ${buttonHoverClass} ${textColor}`}>
                        <span className="td-text d-inline-block mr-5">Read More</span>
                        <span className="tp-arrow-angle">
                            <MedicalButtonArrow strokeColor="currentColor" />
                        </span>
                    </SmartLink>
                </div>
            </div>
        </div>
    );
};

export default MedicalBlogItem;
