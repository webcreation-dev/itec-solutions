"use client";
import ServiceItem from "../components/ServiceItem";
import { SmartLink } from "@/components/common";
import { serviceData } from "@/data/service-data";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIcon } from "@/svg";

const SeoAgencyService = () => {
    // Retrieve IT Consulting service items for rendering
    const services = serviceData.seoAgency;

    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute();
    const btnClsTextColor = isDark ? "tp-text-common-white" : "tp-text-common-black-1";

    return (
        <div className="al-service-seo-area pt-120 pb-70">
            <div className="container">
                {/* Title & Button */}
                <div className="al-service-seo-title-wrap mb-70">
                    <div className="row align-items-end">
                        <div className="col-xl-9 col-lg-6">
                            <div className="al-service-seo-title-box mb-20">
                                <span className="al-section-subtitle fs-12 mb-20">What we do</span>
                                <h4 className="al-section-title tp-text-revel-anim fix mb-0">
                                    The specific features of <br /> Aleric that make it an effective SEO tool
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="al-service-seo-btn-box text-start text-md-end mb-20">
                                <SmartLink
                                    href="/service-1"
                                    className={`tp-btn-cst mb-15 tp-btn-border tp-btn-seo-border d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation ${btnClsTextColor} fw-700 tp-ff-inter`}>
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">View All Services</span>
                                        <span className="btn-icon">
                                            <ArrowIcon />
                                        </span>
                                        <span className="btn-icon">
                                            <ArrowIcon />
                                        </span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services Grid */}
                <div className="row">
                    {services.map((service, idx) => (
                        <ServiceItem key={idx} {...service} type="seoAgency" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeoAgencyService;