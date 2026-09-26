import { AboutCheckIcon, ArrowIconNineteen } from "@/svg";
import { SmartLink } from "@/components/common";
import React from "react";

interface AboutInsightCardProps {
    image: string;
    title: string;
    items: string[];
    link: string;
}

const AboutInsightCard: React.FC<AboutInsightCardProps> = ({
    image,
    title,
    items,
    link,
}) => {
    return (
        <div
            className="tp-about-cst-list tp-bg-common-green-2 tp-round-8 d-inline-block"
            data-speed="0.9">
            <img className="w-100" src={image} alt="insight image" />
            <div className="tp-about-cst-list-inner">
                <h4 className="tp-text-common-black-3 tp-ff-dm fw-600 fs-18 mb-5">
                    {title}
                </h4>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <span>
                                <AboutCheckIcon />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
                <SmartLink
                    className="tp-about-cst-list-btn tp-bg-common-black-1 text-capitalize d-flex justify-content-between align-items-center tp-text-grey-5 fw-700 fs-14 tp-ff-dm"
                    href={link}
                >
                    Learn more
                    <ArrowIconNineteen />
                </SmartLink>
            </div>
        </div>
    );
};

export default AboutInsightCard;