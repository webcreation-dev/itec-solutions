import { SmartLink } from "@/components/common";
import { consultingServiceDt } from "@/types";
import { ArrowIconFourteen } from "@/svg";
import Image from "next/image";

const BusinessConsultingServiceItem: React.FC<consultingServiceDt> = ({ img, title, link, desc }) => {
    return (
        <div className="tp-service-cst-item p-relative">
            <div className="tp-service-cst-thumb">
                <Image width={560} height={486} className="w-100 img-fluid" src={img} alt={title} />
            </div>
            <div className="tp-service-cst-content tp-bg-common-white">
                <h5 className="fw-600 fs-28 tp-ff-dm tp-text-common-black-1 mb-15">
                    <SmartLink className="underline-black" href={link}>
                        {title}
                    </SmartLink>
                </h5>
                <p className="tp-service-cst-item-border tp-ff-dm fs-18 lh-140-per tp-text-common-black-1">
                    {desc}
                </p>
                <SmartLink
                    href={link}
                    className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
                >
                    <span className="mr10 td-text d-inline-block mr-5">
                        View Details
                    </span>
                    <span className="tp-arrow-angle">
                        <ArrowIconFourteen />
                    </span>
                </SmartLink>
            </div>
        </div>
    );
};

export default BusinessConsultingServiceItem;