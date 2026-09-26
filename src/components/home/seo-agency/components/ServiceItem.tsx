import { SmartLink } from "@/components/common";
import { ServiceItemProps } from "@/types";

const ServiceItem: React.FC<ServiceItemProps> = ({ slug, icon: Icon, title, delay, bgColor, description, type }) => (
    <div className="col-xl-3 col-lg-4 col-md-4">
        <div
            className="al-service-seo-item tpshake-wrap mb-70 tp_fade_anim"
            data-delay={delay}
        >
            <div className="al-service-seo-icon tpshake">
                <span style={{ backgroundColor: bgColor }}>
                    {Icon && <Icon />}
                </span>
            </div>
            <div className="al-service-seo-content">
                <h4 className="al-service-seo-title">
                    <SmartLink className="underline-black" href={`/service-details/${type}/${slug}`}>
                        {title}
                    </SmartLink>
                </h4>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div >
);
export default ServiceItem;