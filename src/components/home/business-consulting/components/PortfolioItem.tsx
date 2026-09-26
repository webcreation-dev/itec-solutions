import { SmartLink } from "@/components/common";
import { PortfolioArrowIcon } from "@/svg";
import { useIsDarkRoute } from "@/hooks";

interface PortfolioItemProps {
    tag: string;
    title: string;
    link: string;
    onHover?: () => void;
    isActive?: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ tag, title, link, onHover, isActive }) => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const portfolioItemStyles = {
        titleColor: isDark ? "tp-text-common-white" : "#B4E717",
        actionIconColor: isDark ? "currentColor" : "#030303",
        tagTextColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
        tagBgColor: isDark ? "tp-bg-common-black" : "tp-bg-common-white-2",
    };
    // -------------------------------
    return (
        <div
            className={`tp-portfolio-cst-item portfolio-item d-flex justify-content-between align-items-center ${isActive ? "active" : ""
                }`}
            onMouseEnter={onHover}
        >
            <div className="tp-portfolio-cst-text mb-15">
                <span className={`tp-portfolio-cst-tag mb-20 fw-500 ${portfolioItemStyles.tagTextColor} tp-ff-dm d-inline-block ${portfolioItemStyles.tagBgColor}`}>
                    {tag}
                </span>

                <h4 className={`${portfolioItemStyles.titleColor} tp-portfolio-cst-title fw-600 fs-28 tp-ff-dm`}>
                    <SmartLink href={link}>{title}</SmartLink>
                </h4>
            </div>

            <SmartLink className="tp-portfolio-cst-btn mb-15" href={link}>
                <PortfolioArrowIcon fillColor={portfolioItemStyles.actionIconColor} />
            </SmartLink>
        </div>
    );
};

export default PortfolioItem;