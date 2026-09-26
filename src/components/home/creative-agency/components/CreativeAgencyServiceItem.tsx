import { ArrowIconFourteen, DualPanelIcon, NexusIcon, QuadCoreIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ServiceItemProps } from "@/types";

const CreativeAgencyServiceItem: React.FC<ServiceItemProps> = ({ iconType, title, fadeFrom, type, slug }) => {
    // Check if current route uses dark theme
    const isDarkTheme = useIsDarkRoute();

    // Theme-based style tokens for service section
    const serviceItemTheme = {
        cardBackgroundClass: isDarkTheme ? "tp-bg-grey-8" : "tp-bg-grey-3",
        headingClass: isDarkTheme ? "tp-text-common-white" : "",
        bodyTextClass: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        hoverClass: isDarkTheme ? "hover-text-white" : "hover-text-grey",
        iconFillColor: isDarkTheme ? "white" : "#030303",
    };

    return (
        <div
            className="col-lg-4 col-md-6 tp_fade_anim"
            data-delay=".4"
            data-fade-from={fadeFrom}
            data-ease="bounce"
        >
            <div className={`tp-service-2-item tpshake-wrap ${serviceItemTheme.cardBackgroundClass} mb-40`}>
                <span className="tp-service-2-icon d-inline-block mb-175 tpshake">
                    {iconType === "Nexus" && <NexusIcon fillColor={serviceItemTheme.iconFillColor} />}
                    {iconType === "DualPanel" && <DualPanelIcon fillColor={serviceItemTheme.iconFillColor} />}
                    {iconType === "QuadCore" && <QuadCoreIcon fillColor={serviceItemTheme.iconFillColor} />}
                </span>

                <h3 className={`tp-ff-funnel fw-500 fs-35 fs-lg-27 mb-20 ${serviceItemTheme.headingClass}`}>
                    <SmartLink href={`/service-details/${type}/${slug}`}
                        className="underline-black"
                    >
                        {title}
                    </SmartLink>
                </h3>

                <SmartLink href={`/service-details/${type}/${slug}`}
                    className={`tp-left-right fw-500 fs-15 ${serviceItemTheme.bodyTextClass} text-uppercase ${serviceItemTheme.hoverClass}`}
                >
                    <span className="td-text d-inline-block mr-5">
                        View All Work
                    </span>
                    <span className="tp-arrow-angle">
                        <ArrowIconFourteen />
                    </span>
                </SmartLink>
            </div>
        </div>
    );
};

export default CreativeAgencyServiceItem;