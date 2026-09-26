"use client";
import MedicalServiceItem from "../components/MedicalServiceItem";
import { serviceData } from "@/data/service-data";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { MedicalButtonArrow } from "@/svg";

const MedicalService = () => {
    const isDark = useIsDarkRoute();
    // Retrieve medical service items for rendering
    const services = serviceData.medicalService || [];

    const subtitleColor = isDark ? "tp-text-common-white" : "tp-text-common-black";
    const titleColor = isDark ? "tp-text-common-white" : "tp-text-common-black-5";
    const paragraphColor = isDark ? "tp-text-common-white" : "tp-text-common-black-6";
    const buttonHoverClass = isDark ? "hover-text-white" : "hover-text-black";

    return (
        <div className="tp-service-area pb-110">
            <div className="container-fluid container-1824">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8">
                        <div className="tp-service-md-title-wrap mb-40">
                            <span className={`tp-text-revel-anim fix tp-section-md-subtitle tp-ff-dm fw-600 fs-16 ls-m-3 d-inline-block ${subtitleColor}`}>Latest Services</span>
                            <h2 className={`tp-text-revel-anim fix tp-section-md-title tp-ff-familjen fs-62 lh-1 ls-m-3 mb-20 ${titleColor}`}>Services that go beyond treatment</h2>
                            <p className={`tp-ff-dm fs-20 lh-150-per ls-m-3 opacity-8 mb-50 ${paragraphColor}`}>
                                We combine advanced medical expertise with genuine
                                compassion to ensure you receive.
                            </p>
                            <div className="tp_fade_anim" data-delay=".9" data-fade-from="bottom" data-ease="bounce">
                                <SmartLink href="/service-4" className={`tp-btn-md tp-btn-md-border tp-left-right p-relative d-inline-block lh-1 fs-16 fw-800 tp-ff-dm ${buttonHoverClass} ${titleColor}`}>
                                    <span className="td-text d-inline-block mr-5">All Treatment</span>{" "}
                                    <span className="tp-arrow-angle">
                                        <MedicalButtonArrow strokeColor="currentColor" />
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="tp-service-md-item-wrap ml-50">
                            <div className="row gx-30">
                                {services.map((item) => (
                                    <MedicalServiceItem key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalService;
