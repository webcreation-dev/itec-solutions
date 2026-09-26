"use client";
import { SmartLink } from "@/components/common";
import { PlumbingButtonArrow } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

// services data
const services = [
    { id: "001", title: "Leak Detection" },
    { id: "002", title: "Plumbing Services" },
    { id: "003", title: "Garbage Disposal" },
    { id: "004", title: "Leak Detection" },
    { id: "005", title: "Sump Pump" },
];

// images data
const serviceImages = [
    { src: "/assets/img/service/pb/thumb.png", alt: "thumb-1" },
    { src: "/assets/img/service/pb/thumb-2.png", alt: "thumb-2" },
    { src: "/assets/img/service/pb/thumb-3.png", alt: "thumb-3" },
    { src: "/assets/img/service/pb/thumb-4.png", alt: "thumb-4" },
    { src: "/assets/img/service/pb/thumb-5.png", alt: "thumb-5" },
];

const PlumbingServiceArea = () => {
    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const serviceStyles = {
        headingColor: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black-5",
    };

    return (
        <div className="tp-service-area pt-155">
            <div className="container-fluid container-1646">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-lg-6">
                        <div className="tp-service-title-wrap mb-40">
                            <span className={`text-anim tp-section-pb-subtitle mb-15 d-inline-block tp-ff-inter fw-500 fs-18 ls-m-4 lh-160-per ${serviceStyles.headingColor}`}>
                                {`{Our Latest Services }`}
                            </span>

                            <h2 className={`text-anim tp-section-pb-title mb-50 tp-ff-sora fs-48 fs-sm-40 fs-xs-35 ls-m-2 lh-120-per ${serviceStyles.headingColor}`}>
                                Comprehensive<br /> Handyman Solutions
                            </h2>

                            <div
                                className="tp_fade_anim"
                                data-delay=".5"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <SmartLink
                                    href="/service-4"
                                    className="tp-left-right d-inline-block tp-left-right-pb tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 hover-text-white"
                                >
                                    <span className="td-text d-inline-block mr-5">
                                        All Services
                                    </span>
                                    <span className="tp-arrow-angle tp-arrow-angle-pb">
                                        <PlumbingButtonArrow />
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6">
                        <div className="p-relative tp-service-wd tp-service-pb-wrap">
                            <div className="tp-service-wd-item-wrap projects">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="tp-service-wd-item tp-service-pb-item project"
                                        data-index-number={index}
                                    >
                                        <div className="tp-service-wd-item-title tp-service-pb-item-title d-flex align-items-end mb-20">
                                            <span className={`tp-ff-inter fw-500 fs-20 fs-xs-17 ls-m-5 ${serviceStyles.headingColor} mr-25 mb-10`}>
                                                {service.id}
                                            </span>

                                            <h3 className={`tp-ff-sora fw-600 fs-72 fs-xl-60 fs-lg-50 fs-xs-30 ls-m-5 ${serviceStyles.headingColor} mb-0`}>
                                                <SmartLink href="/service-details-2">
                                                    {service.title}
                                                </SmartLink>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="image-wrapper tp-service-pb-thumb">
                                <div className="image-slider">
                                    {serviceImages.map((img, index) => (
                                        <Image
                                            key={index}
                                            className="img-fluid"
                                            width={397}
                                            height={253}
                                            src={img.src}
                                            alt={img.alt}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BORDER */}
                    <div className="col-12">
                        <div className="tp-service-pb-border pt-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceArea;