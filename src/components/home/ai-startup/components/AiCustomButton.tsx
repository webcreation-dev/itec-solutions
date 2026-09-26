"use client";

import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ReactNode } from "react";
import { ArrowIcon } from "@/svg";

interface CustomButtonProps {
    href: string;
    className?: string;
    buttonText: string;
    showIcon?: boolean; // icon dekhabo naki na
    iconComponent?: ReactNode; // optional, default ArrowIcon
}
const AiCustomButton = ({
    href,
    className = "",
    buttonText,
    showIcon = true,
    iconComponent,
}: CustomButtonProps) => {
    const Icon = iconComponent || <ArrowIcon />;
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Class & Asset Mapping
    // -------------------------------
    const btnClasses = {
        // btnBg: isDark ? "tp-bg-common-white" : "tp-bg-common-black",
        btnText: isDark ? "tp-text-common-white" : "tp-text-common-black-6",
        btnHoverText: isDark ? "hover-text-black" : "hover-text-white",
    };

    return (
        <SmartLink
            href={href}
            className={`tp-btn-ai tp-btn-switch-2-animation p-relative hover-text-white d-inline-block text-uppercase ${btnClasses.btnText} lh-1 fs-16 fw-700 tp-ff-dm ${className}`}
        >
            <span className="d-flex align-items-center justify-content-center">
                <span className="btn-text">{buttonText}</span>
                {showIcon && (
                    <>
                        <span className="btn-icon">{Icon}</span>
                        <span className="btn-icon">{Icon}</span>
                    </>
                )}
            </span>
        </SmartLink>
    );
};

export default AiCustomButton;