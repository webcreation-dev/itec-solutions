import React from "react";
import { SmartLink } from "@/components/common";

const CreativeDetailsOverview = () => {
    return (
        <div className="tp-pd-3-overview-area pt-120 pb-95">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-left tp_fade_anim" data-delay=".3">
                            <span className="tp-pd-3-subtitle">Digital platform</span>
                            <h4 className="tp-pd-3-title">Project Overview</h4>
                            <SmartLink className="tp-pd-3-btn" href="/portfolio-details-creative">
                                Visit Site
                                <span>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9.99999H15.2222M8.11121 1.11108L17.0001 9.99997L8.11121 18.8889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-right">
                            <div className="tp-pd-3-overview-text">
                                <p>
                                    ElectroHub, a prominent retailer in the electronics
                                    market, needed a refreshed visual identity to stand out among competitors and appeal to a tech-savvy audience.
                                    The goal was to create a cohesive and modern
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Client</span>
                                        <h4>Envato Market</h4>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Service</span>
                                        <h4>Visual Identity</h4>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Service</span>
                                        <h4>Visual Identity</h4>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Date</span>
                                        <h4>8 June 2020</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeDetailsOverview;
