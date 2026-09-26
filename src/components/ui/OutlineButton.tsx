"use client";

import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ButtonArrowIcon } from "@/svg";

interface OutlineButtonProps {
    text: string;
    href: string;
    className?: string;
    showIcon?: boolean;
    iconColor?: string; // optional override
    children?: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
    text,
    href,
    className = "",
    showIcon = true,
    iconColor, // optional override
    children,
}) => {
    // Detect dark route
    const isDark = useIsDarkRoute();

    // Default color logic (can be overridden)
    const arrowSvgColor = iconColor ?? (isDark ? "currentColor" : "black");
    return (
        <SmartLink className={className} href={href}>
            <span>
                <span className="text-1">
                    {text} {showIcon && <ButtonArrowIcon fillColor={arrowSvgColor} />}
                </span>
                <span className="text-2">
                    {text} {showIcon && <ButtonArrowIcon fillColor={arrowSvgColor} />}
                </span>
                {children}
            </span>
        </SmartLink>
    );
};
export default OutlineButton;