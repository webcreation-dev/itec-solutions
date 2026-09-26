"use client";
import { digitalAgencyServices } from "@/data/service-data";
import ServiceItem from "../components/ServiceItem";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const DigitalAgencyService = () => {
    const isDark = useIsDarkRoute();

    // Section subtitle text color (e.g., "Smart Solutions")
    const serviceSectionSubtitleClass = isDark ? "tp-text-common-white" : "tp-text-common-black";

    // Section main heading text color (e.g., "Our capabilities")
    const serviceSectionTitleClass = isDark ? "tp-text-common-white" : "";

    // Section paragraph/content text color
    const serviceSectionContentClass = isDark ? "tp-text-grey-2" : "tp-text-grey-1";

    // Shape image for dark/light mode
    const serviceShapeImg = isDark ? "/assets/img/service/shape-dark.png" : "/assets/img/service/shape.png";

    return (
        <div className="tp-service-area pt-160 mb-110">
            <div className="container">
                <div className="row">

                    {/* Left Content */}
                    <div className="col-lg-6">
                        <div className="tp-service-title-wrap mb-45">
                            <span
                                className={`tp-section-subtitle tp-ff-heading fw-500 ${serviceSectionSubtitleClass} fs-16 mb-80 tp_fade_anim`}
                                data-delay=".3"
                            >
                                <span className="borders d-inline-block"></span>
                                Smart Solutions
                            </span>

                            <div
                                className="d-sm-flex align-items-start tp_fade_anim"
                                data-delay=".5"
                            >
                                <Image
                                    width={70} height={70}
                                    className="mr-40 tp-service-shape"
                                    src={serviceShapeImg}
                                    alt="shape"
                                />
                                <p className={`tp-ff-heading fs-25 fw-500 ${serviceSectionContentClass} tp-service-para`}>
                                    We specialize in delivering cutting-edge strategies,
                                    unparalleled creativity, and seamless execution.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Title */}
                    <div className="col-lg-6">
                        <div className="mb-45 tp_fade_anim" data-delay=".4">
                            <h2 className={`tp-section-title ${serviceSectionTitleClass} fs-70 fs-xl-60 fs-lg-50 fw-700 text-uppercase`}>
                                Our capabilities
                            </h2>
                        </div>
                    </div>
                    {/* Services */}
                    {digitalAgencyServices.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalAgencyService;