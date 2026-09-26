import { SmartLink } from "@/components/common";
import { aiServiceItemDt } from "@/types";

const AiServiceItem: React.FC<aiServiceItemDt> = ({ id, title }) => {
    return (
        <div className="tp-service-ai-item-main mb-35">
            <div className="tp-service-ai-item d-inline-block">
                <div className="d-flex align-items-center">
                    <span className="tp-service-ai-count tp-ff-jakarta fw-600 fs-24 fs-sm-18 ls-m-4 mr-30">
                        {id.toString().padStart(3, "0")}
                    </span>

                    <h2 className="tp-service-ai-title tp-ff-jakarta fs-72 fs-xl-60 fs-lg-50 fs-sm-35 fs-xs-25 ls-m-4">
                        <SmartLink href="/service-details-2">{title}</SmartLink>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default AiServiceItem;