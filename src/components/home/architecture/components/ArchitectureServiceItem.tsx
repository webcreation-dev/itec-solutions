import { SmartLink } from "@/components/common";
import { ServiceArrowIconFour } from "@/svg";
import { ServiceItemProps } from "@/types";

const ArchitectureServiceItem: React.FC<ServiceItemProps> = ({ delay, icon: Icon, title, description, slug }) => {
    const destination = slug === "developpement-immobilier" ? "/construction" : "/ingenierie";

    return (
        <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
            <div
                className="al-service-archi-wrapper tp_fade_anim"
                data-delay={delay}
                data-fade-from="left"
            >
                <div className="al-service-archi-icon mb-40">
                    {Icon && <Icon />}
                </div>
                <div className="al-service-archi-content">
                    <h3 className="al-service-archi-title">
                        <SmartLink href={destination}>
                            {title.split(" ").map((word, i) => (
                                <span key={i}>
                                    {word}
                                    <br />
                                </span>
                            ))}
                        </SmartLink>
                    </h3>
                    <p className="mb-35">{description}</p>
                    <SmartLink
                        className="al-service-archi-link"
                        href={destination}
                    >
                        <span>
                            <ServiceArrowIconFour />
                        </span>
                    </SmartLink>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureServiceItem;
