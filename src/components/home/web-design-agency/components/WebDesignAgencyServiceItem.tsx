import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { HeaderButtonArrow } from "@/svg";
import { ServiceItemProps } from "@/types";

export interface serviceItemProps extends ServiceItemProps {
    index: number;
}
const WebDesignAgencyServiceItem: React.FC<serviceItemProps> = ({ id, title, description, categories, index, type, slug }) => {
     const isDarkTheme = useIsDarkRoute();
          // -------------------------------
          // Theme-based styles 
          // -------------------------------
          const themeClasses = {
              textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
              textBody: isDarkTheme ? "tp-text-grey-2" : "tp-text-grey-1",
          };
          // -------------------------------
    return (
        <div className="tp-service-wd-item project"
            data-index-number={index}
        >
            <div className="row">
                {/* Title */}
                <div className="col-xl-5 col-lg-4 col-md-5">
                    <div className="tp-service-wd-item-title d-flex align-items-center mb-20">
                        <span className="tp-ff-teko fw-600 fs-35 text-uppercase tp-text-grey-1 mr-80 mb-10">
                             {String(id).padStart(2, "0")}
                        </span>
                        <h3 className={`tp-ff-teko fw-600 fs-35 fs-lg-30 ${themeClasses.textPrimary}`}>
                            <SmartLink href={`/service-details/${type}/${slug}`}>{title}</SmartLink>
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="col-xl-5 col-lg-5 col-md-7">
                    <div className="tp-service-wd-content mb-20">
                        <p className={`fs-18 lh-28 mb-20 ${themeClasses.textBody}`}>{description}</p>
                        <ul>
                            {categories?.map((item, i) => (
                                <li key={i}>+ {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Button */}
                <div className="col-xl-2 col-lg-3">
                    <div className="tp-header-btn tp-service-wd-btn text-lg-end mb-20">
                        <SmartLink
                            href={`/service-details/${type}/${slug}`}
                            className={`tp-btn-lg tp-btn-border d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation fw-500 ${themeClasses.textPrimary}`}
                        >
                            <span className="d-flex align-items-center justify-content-center">
                                <span className="btn-text">View Info</span>
                                <span className="btn-icon">
                                    <HeaderButtonArrow />
                                </span>
                                <span className="btn-icon">
                                    <HeaderButtonArrow />
                                </span>
                            </span>
                        </SmartLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WebDesignAgencyServiceItem;