import { SmartLink } from "@/components/common";
import { ServiceItemProps } from "@/types";

const AiAgencyFeatureItem:React.FC<ServiceItemProps> = ({ slug, icon: Icon, title, description, type }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="app-feature-item ais-feature-item mb-30">

                <div className="app-feature-item-icon">
                    <span>
                        {Icon && <Icon />}
                    </span>
                </div>

                <div className="app-feature-item-content">
                    <h4 className="app-feature-title">{title}</h4>
                    <p>
                        {description.split(" ").slice(0, 6).join(" ")} <br />
                        {description.split(" ").slice(6).join(" ")}
                    </p>

                    <div className="ais-feature-item-btn">
                        <SmartLink
                            className="tp-line-black underline-white"
                            href={`/service-details/${type}/${slug}`}
                        >
                            Read more
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="9"
                                    viewBox="0 0 9 9"
                                    fill="none"
                                >
                                    <path
                                        d="M0.5 4.155H7.81M7.81 4.155L4.155 0.5M7.81 4.155L4.155 7.81"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </SmartLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgencyFeatureItem;