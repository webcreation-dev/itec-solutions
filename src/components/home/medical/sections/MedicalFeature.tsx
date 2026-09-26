import { SmartLink } from "@/components/common";
import { serviceData } from "@/data/service-data";
import { MedicalServiceArrowIcon } from "@/svg";
import Image from "next/image";

const MedicalFeature = () => {
    // Retrieve medical feature items for rendering
    const features = serviceData.medicalFeature || [];

    return (
        <div className="tp-feature-area pb-80">
            <div className="container-fluid container-1824">
                <div className="row">
                    {features.map((item) => (
                        <div key={item.id} className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                            <div
                                className="tp-feature-md-item tpshake-wrap d-flex mb-30 tp_fade_anim"
                                data-delay={item.delay}
                                data-duration="1"
                                data-fade-from="bottom"
                                data-ease="bounce"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <div className="tp-feature-md-icon mr-30">
                                    {item.image && <Image className="img-fluid w-100 h-auto" src={item.image} alt={item.title} width={50} height={50} />}
                                </div>
                                <div className="tp-feature-md-content">
                                    <h4 className="tp-ff-familjen fw-600 fs-24 lh-140-per ls-m-4 tp-text-common-black-5">{item.title}</h4>
                                    <p className="tp-ff-dm fs-18 lh-160-per ls-m-3 tp-text-common-black-6 opacity-8 mb-20">
                                        Combine advanced medical expertise genuine compassion to ensure you receive.
                                    </p>
                                    <SmartLink href={`/service-details/medicalFeature/${item.slug}`} className="tp-feature-md-btn tp-btn-md hover-text-white d-inline-block tp-text-common-black-5 lh-1 fs-16 fw-700 tp-ff-dm">
                                        <span>Read More</span>{" "}
                                        <MedicalServiceArrowIcon />
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicalFeature;
