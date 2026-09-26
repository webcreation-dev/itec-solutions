"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIcon } from "@/svg";
import Image from "next/image";

// FAQ Data
const faqData = [
    {
        id: "one",
        title: "Client Discovery Session",
        show: true,
    },
    {
        id: "two",
        title: "Research & Insights Gathering",
    },
    {
        id: "three",
        title: "Collaborative Planning",
    },
];

const BusinessConsultingFaq = () => {
    const isDark = useIsDarkRoute();

    // -------------------------------
    // Styles
    // -------------------------------
    const faqSectionStyles = {
        headingColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyTextColor: isDark ? "tp-text-grey-2" : "",
        highlightTextColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
    };
    // -------------------------------
    return (
        <div className="tp-faq-area pt-155 pb-120">
            <div className="container-fluid container-1524">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-lg-6">
                        <div className="tp-faq-cst-left mb-40 mr-110">
                            <h2 className={`fw-600 fs-50 fs-xs-35 lh-120-per tp-ff-dm ${faqSectionStyles.headingColor}`}>
                                Our Proven <span className="fw-300">Approach</span>
                            </h2>

                            <div className="tp-faq-cst-thumb-wrap p-relative">
                                {/* Static image */}
                                <Image
                                    width={604}
                                    height={543}
                                    className="img-fluid"
                                    src="/assets/img/faq/shape.png"
                                    alt="shape"
                                    priority
                                />

                                <div className="tp-faq-cst-tag">
                                    {[
                                        "Consultation",
                                        "Optimization",
                                        "Proposal",
                                        "Evaluation",
                                        "Ongoing Support",
                                    ].map((tag, index) => (
                                        <span key={index} className={`cst-btn cst-btn-${index + 1}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6">
                        <div className="tp-faq-wrap tp-faq-cst-tab-content mb-40 ml-95">
                            <p className={`tp-faq-cst-para fs-18 tp-ff-dm mb-70 ${faqSectionStyles.bodyTextColor}`}>
                                We are a creative agency passionate about crafting bold,
                                innovative, and strategic brand experiences. From branding
                                design to digital.
                            </p>

                            {/*Accordion */}
                            <div className="accordion mb-60" id="general_faqaccordion">
                                {faqData.map((item) => {
                                    const collapseId = `order__collapse_${item.id}`;
                                    const headingId = `order_${item.id}`;

                                    return (
                                        <div key={item.id} className="accordion-item">
                                            <h2 className="accordion-header p-relative" id={headingId}>
                                                <button
                                                    className={`tp-faq-btn ${!item.show ? "collapsed" : ""
                                                        }`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    aria-expanded={item.show ? "true" : "false"}
                                                    aria-controls={collapseId}
                                                >
                                                    {item.title}
                                                    <span className="accordion-btn"></span>
                                                </button>
                                            </h2>

                                            <div
                                                id={collapseId}
                                                className={`accordion-collapse collapse ${item.show ? "show" : ""
                                                    }`}
                                                aria-labelledby={headingId}
                                                data-bs-parent="#general_faqaccordion"
                                            >
                                                <div className="accordion-body tp-faq-details-para">
                                                    <p>
                                                        Branding is the process of creating a unique identity for your <br />
                                                        business,{" "}
                                                        <span className={`fw-500 ${faqSectionStyles.highlightTextColor}`}>
                                                            including visuals, messaging, and positioning.
                                                        </span>{" "}
                                                        It helps <br />
                                                        build trust, recognition.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Button */}
                            <SmartLink
                                href="/portfolio-col-3"
                                className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black fw-700 tp-ff-dm"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">
                                        View All Features Project
                                    </span>

                                    {[1, 2].map((_, i) => (
                                        <span key={i} className="btn-icon">
                                            <ArrowIcon />
                                        </span>
                                    ))}
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingFaq;