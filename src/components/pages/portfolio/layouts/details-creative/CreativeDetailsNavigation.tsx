import React from "react";
import { SmartLink } from "@/components/common";

const CreativeDetailsNavigation = () => {
    return (
        <div className="tp-pd-3-navigation-area pt-100">
            <div className="container-fluid">
                <div className="row gx-15 justify-content-center">
                    <div className="col-xl-7">
                        <div className="tp-pd-3-navigation-top text-center pb-100">
                            <h2 className="tp-pd-3-navigation-title">next projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-20">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-navigation-thumb-wrap tp-pd-3-navigation-thumb-overlay p-relative not-hide-cursor mb-20" data-cursor="View<br>Demo">
                            <SmartLink className="cursor-hide" href="/portfolio-details-creative">
                                <div className="tp-pd-3-navigation-thumb">
                                    <img src="/assets/img/portfolio/details/creative/port-10.jpg" alt="" />
                                </div>
                                <div className="des-portfolio-category d-flex align-items-center">
                                    <div className="fix mr-10">
                                        <span>Web Design</span>
                                    </div>
                                    <div className="fix">
                                        <span>Web Development</span>
                                    </div>
                                </div>
                                <div className="des-portfolio-category portfolio-meta">
                                    <div className="fix">
                                        <span>2025</span>
                                    </div>
                                </div>
                                <div className="tp-pd-3-navigation-content fix">
                                    <h4 className="tp-pd-3-navigation-title-sm">Luxe Beauty</h4>
                                </div>
                            </SmartLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-navigation-thumb-wrap tp-pd-3-navigation-thumb-overlay p-relative not-hide-cursor mb-20" data-cursor="View<br>Demo">
                            <SmartLink className="cursor-hide" href="/portfolio-details-creative">
                                <div className="tp-pd-3-navigation-thumb">
                                    <img src="/assets/img/portfolio/details/creative/port-11.jpg" alt="" />
                                </div>
                                <div className="des-portfolio-category d-flex align-items-center">
                                    <div className="fix mr-10">
                                        <span>Web Design</span>
                                    </div>
                                    <div className="fix">
                                        <span>Web Development</span>
                                    </div>
                                </div>
                                <div className="des-portfolio-category portfolio-meta">
                                    <div className="fix">
                                        <span>2025</span>
                                    </div>
                                </div>
                                <div className="tp-pd-3-navigation-content fix">
                                    <h4 className="tp-pd-3-navigation-title-sm">Luxe Beauty</h4>
                                </div>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeDetailsNavigation;
