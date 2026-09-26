import { SmartLink } from "@/components/common";
import { BaseService } from "@/types";
import Image from "next/image";

const ServiceItem: React.FC<BaseService> = ({ title, description, icon: Icon, img, bgColor, delay }) => {
    return (
        <div className="col-xl-4 col-md-6">
            <div
                className="cst-service-item mb-30 tp_fade_anim"
                data-delay={delay}
                style={{ backgroundColor: bgColor }}
            >
                <div className="cst-service-item-content">
                    <div className="cst-service-item-icon">
                        <span className="mb-25">
                            {Icon && <Icon />}
                        </span>
                    </div>
                    <h4 className="cst-service-item-title">
                        <SmartLink className="underline-black" href="/service-2">
                            {title}
                        </SmartLink>
                    </h4>
                    <p>{description}</p>
                </div>
                <div className="cst-service-item-thumb">
                    {img && <Image style={{ width: "100%", height: "auto" }} width={452} height={265} src={img} alt={title} />}
                </div>
            </div>
        </div>
    );
};
export default ServiceItem;