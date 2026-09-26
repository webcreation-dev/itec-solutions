import { SmartLink } from "@/components/common";
import { HeaderButtonArrow } from "@/svg";
import { ServiceItemProps } from "@/types";

const PersonalPortfolioServiceItem: React.FC<ServiceItemProps> = ({ serialNumber, title, description, categories, image, slug, type }) => {
    return (
        <div className="tp-service-pp-item tp-service-pp-panel">
            <div className="row">

                {/* Number */}
                <div className="col-xxl-3 col-xl-2 col-lg-1 col-md-1">
                    <div className="tp-service-pp-number">
                        <span className="fw-500 fs-20 tp-text-common-white text-uppercase">
                            {serialNumber}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-7">
                    <div className="tp-service-pp-content">

                        <h4 className="tp-section-title text-uppercase tp-text-common-white fs-80 fs-xl-65 fs-md-40 fw-500 mb-55">
                            <SmartLink className="tp_text_invert" href={`/service-details/${type}/${slug}`}>
                                {title}
                            </SmartLink>
                        </h4>

                        <p className="fs-18 tp-text-grey-2 mb-55">
                            {description}
                        </p>

                        <div className="tp-service-pp-btn pb-90">
                            <SmartLink
                                href={`/service-details/${type}/${slug}`}
                                className="tp-btn-lg tp-btn-white d-inline-block lh-0 tp-round-26 fs-15 tp-bg-common-black text-uppercase ls-0 tp-btn-switch-animation tp-text-common-white hover-text-white tp-ff-heading fw-500"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">See Our Services</span>
                                    <span className="btn-icon"><HeaderButtonArrow /></span>
                                    <span className="btn-icon"><HeaderButtonArrow /></span>
                                </span>
                            </SmartLink>
                        </div>

                        <div className="tp-service-pp-category">
                            {categories?.map((cat, i) => (
                                <span key={i}>{cat}</span>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Image */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div className="tp-service-pp-thumb text-end">
                        <img
                            className="tp_fade_anim"
                            data-fade-from="right"
                            data-delay=".2"
                            src={image}
                            alt={title}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PersonalPortfolioServiceItem;