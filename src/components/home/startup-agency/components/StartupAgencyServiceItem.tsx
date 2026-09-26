"use client";
import { ArrowIconFourteen, ArrowLineIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { ServiceItemProps } from "@/types";
import { useIsDarkRoute } from "@/hooks";
import React from "react";

const StartupAgencyServiceItem: React.FC<ServiceItemProps> = ({
    icon: Icon, title, description, slug, type }) => {

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const serviceItemStyles = {
        titleColor: isDark ? "tp-text-common-white" : "",
        textColor: isDark ? "tp-text-grey-2" : "",
        linkColor: isDark
            ? "tp-text-common-white hover-text-white"
            : "tp-text-common-black",
        borderFill: isDark ? "#fff" : "#030303",
    }

    return (
        <div className="tp-service-sa-item tpshake-wrap tp-bg-common-white-2 mb-30">
            <span className="tp-service-sa-item-icon tpshake d-inline-block mb-30">
                {Icon && <Icon />}
            </span>
            <h4 className={`tp-service-sa-item-title mb-20 ${serviceItemStyles.titleColor}`}>
                <SmartLink href={`/service-details/${type}/${slug}`}>{title}</SmartLink>
            </h4>
            <p className={`tp-service-sa-item-text mb-130 ${serviceItemStyles.textColor}`}>{description}</p>
            <span className="tp-service-sa-border mb-10 d-inline-block">
                <ArrowLineIcon borderFill={serviceItemStyles.borderFill} />
            </span>
            <SmartLink href={`/service-details/${type}/${slug}`} className={`tp-left-right fw-500 fs-15 text-uppercase ${serviceItemStyles.linkColor}`}>
                <span className="td-text d-inline-block mr-5">View Details</span>{" "}
                <span className="tp-arrow-angle">
                    <ArrowIconFourteen />
                </span>
            </SmartLink>
        </div>
    );
};

export default StartupAgencyServiceItem;
