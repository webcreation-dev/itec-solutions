"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { MedicalButtonArrow } from "@/svg";
import { BaseService } from "@/types";

const MedicalServiceItem: React.FC<BaseService> = ({ title, delay, icon: Icon }) => {
    const isDark = useIsDarkRoute();

    const cardBg = isDark ? "tp-bg-grey-8" : "tp-bg-common-white";
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const paragraphColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const buttonHoverClass = isDark ? "hover-text-white" : "hover-text-black";

    return (
        <div className="col-lg-6 col-md-6 tp_fade_anim" data-delay={delay} data-fade-from="bottom">
            <div className={`tp-service-md-item tpshake-wrap mb-50 ${cardBg}`}>
                <span className="tp-service-md-icon tpshake d-inline-block mb-45">
                    {Icon && <Icon />}
                </span>
                <h3 className={`tp-service-md-title tp-ff-familjen fw-500 fs-42 ls-m-4 mb-15 ${titleColor}`}>
                    <SmartLink href="/service-details-2" className="underline-black">{title}</SmartLink>
                </h3>
                <p className={`tp-service-md-text tp-ff-dm fs-18 lh-160-per ls-m-3 opacity-8 mb-35 ${paragraphColor}`}>
                    Advanced medical expertise with genuine
                    compassion to ensure you receive. experienced
                    doctors, advanced technology.
                </p>
                <SmartLink href="/service-details-2" className={`tp-service-md-btn text-uppercase tp-left-right d-inline-block lh-1 fs-16 fw-800 tp-ff-dm ${buttonHoverClass} ${titleColor}`}>
                    <span className="td-text d-inline-block mr-5">Read More</span>{" "}
                    <span className="tp-arrow-angle">
                        <MedicalButtonArrow strokeColor="currentColor" />
                    </span>
                </SmartLink>
            </div>
        </div>
    );
};

export default MedicalServiceItem;
