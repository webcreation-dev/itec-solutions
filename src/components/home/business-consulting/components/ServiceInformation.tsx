import { SmartLink } from "@/components/common";
import { ArrowIcon, CheckIconMedium } from "@/svg";

const ServiceInformation = () => {
    return (
        <div className="row">
            <div className="col-lg-5">
                <div className="tp-service-cst-shape mb-40 d-none d-lg-block tp_fade_anim" data-delay=".4" data-fade-from="left" data-ease="bounce">
                    <img src="/assets/img/service/cst/shape.png" alt="shape" />
                </div>
            </div>
            <div className="col-lg-7">
                <div className="tp-service-cst-info ml-70 mb-40">
                    <h2 className="fw-600 fs-35 lh-110-per tp-ff-dm tp-text-grey-5 mb-20 tp_fade_anim" data-delay=".3" data-fade-from="right">Transform your business today<br /> with expert digital solutions.</h2>
                    <div className="tp_fade_anim" data-delay=".4" data-fade-from="right">
                        <p className="tp-ff-dm fs-18 lh-140-per tp-text-grey-6 mb-30">Leverage cutting-edge technology and strategic insights to<br />
                            streamline operations, boost efficiency.</p>
                    </div>
                    <div className="tp-service-cst-info-list mb-35 tp_fade_anim" data-delay=".5" data-fade-from="right">
                        <ul>
                            <li>
                                <span>
                                    <CheckIconMedium />
                                </span>
                                Digital Strategy Consulting
                            </li>
                            <li>
                                <span>
                                    <CheckIconMedium />
                                </span>
                                AI & Machine Learning Solutions
                            </li>
                            <li>
                                <span>
                                    <CheckIconMedium />
                                </span>
                                Data Analytics & Insights
                            </li>
                        </ul>
                    </div>
                    <h2 className="fw-600 fs-35 lh-110-per tp-ff-dm tp-text-grey-5 mb-20 tp_fade_anim" data-delay=".6" data-fade-from="right">Technology Stack Evaluation.</h2>
                    <div className="tp_fade_anim" data-delay=".7" data-fade-from="right">
                        <p className="tp-ff-dm fs-18 lh-140-per tp-text-grey-6 mb-45">Strategists dedicated to creating stunning, functional websites<br />
                            that align with your unique business goals. and strategic insights to<br />
                            streamline operations, boost efficiency.</p>
                    </div>
                    <div className="tp_fade_anim" data-delay=".8" data-fade-from="right">
                        <SmartLink href="/service-details-2" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                            <span className="d-flex align-items-center justify-content-center">
                                <span className="btn-text">View More</span>
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
    );
};

export default ServiceInformation;