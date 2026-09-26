import { useIsDarkRoute } from "@/hooks";
import { LetterAIconTwo } from "@/svg";
import React from "react";

interface TextSlideItemProps {
    title: string;
}

const TextSlideItem: React.FC<TextSlideItemProps> = ({ title }) => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const textStyles = {
        titleColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        accentIconColor: isDark ? "#10302A" : "#B4E717",
    };
    // -------------------------------
    return (
        <div className="tp-text-cst-content">
            <h2 className={`tp-text-cst-title ${textStyles.titleColor} fw-700 text-capitalize tp-ff-dm`}>
                {title}
                <span>
                    <LetterAIconTwo fillColor={textStyles.accentIconColor} />
                </span>
            </h2>
        </div>
    );
};

export default TextSlideItem;