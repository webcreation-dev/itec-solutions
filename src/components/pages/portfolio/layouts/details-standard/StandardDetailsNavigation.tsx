"use client";

import React from "react";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const StandardDetailsNavigation = () => {
    const isDark = useIsDarkRoute();
    const arrowColor = isDark ? "#999999" : "#525252";
    const hoverTextClass = isDark ? "hover-text-white" : "hover-text-black";

    return (
        <div className="tp-portfolio-navigation-area pt-115 pb-140">
            <div className="container">
                <div className="tp-portfolio-navigation-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <SmartLink href="#" className="tp-portfolio-navigation-btn d-flex align-items-center mb-30">
                                <img className="mr-30" src="/assets/img/portfolio/details/nav.png" alt="" />
                                <div>
                                    <span className={`tp-left-right mb-5 d-inline-block fw-500 tp-ff-heading fs-15 tp-text-grey-1 ${hoverTextClass}`}>
                                        <span className="mr-5 td-text d-inline-block">Previous</span>
                                        <span className="tp-arrow-angle">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.06885 2.83035C5.12094 2.62132 9.09361 1.33336 12 0C10.6661 2.90583 9.37759 6.87793 9.16909 9.92998L7.16334 5.65075L0.982808 11.8317C0.87465 11.9395 0.728086 12.0001 0.57532 12C0.461345 11.9999 0.349936 11.9661 0.255176 11.9028C0.160417 11.8395 0.0865593 11.7494 0.0429459 11.6441C-0.000666618 11.5388 -0.0120802 11.423 0.010149 11.3112C0.0323772 11.1994 0.0872517 11.0967 0.167832 11.0161L6.34799 4.83604L2.06885 2.83035Z" fill={arrowColor} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.06885 2.83035C5.12094 2.62132 9.09361 1.33336 12 0C10.6661 2.90583 9.37759 6.87793 9.16909 9.92998L7.16334 5.65075L0.982808 11.8317C0.87465 11.9395 0.728086 12.0001 0.57532 12C0.461345 11.9999 0.349936 11.9661 0.255176 11.9028C0.160417 11.8395 0.0865593 11.7494 0.0429459 11.6441C-0.000666618 11.5388 -0.0120802 11.423 0.010149 11.3112C0.0323772 11.1994 0.0872517 11.0967 0.167832 11.0161L6.34799 4.83604L2.06885 2.83035Z" fill={arrowColor} />
                                            </svg>
                                        </span>
                                    </span>
                                    <h5 className="tp-portfolio-navigation-title fw-500 fs-25 fs-xs-20 lh-120-per">Turning Clicks Into<br /> Conversions.</h5>
                                </div>
                            </SmartLink>
                        </div>
                        <div className="col-lg-2">
                            <div className="tp-portfolio-navigation-grid text-center mb-30">
                                <SmartLink href="/portfolio-col-2">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.80057 0.35791C2.22126 0.35791 0.123114 2.45621 0.123114 5.03537C0.123114 7.61453 2.2204 9.71268 4.80057 9.71268C7.38075 9.71268 9.47803 7.61453 9.47803 5.03537C9.47803 2.45621 7.37974 0.35791 4.80057 0.35791ZM19.9391 0.35791C17.3599 0.35791 15.2616 2.45621 15.2616 5.03537C15.2616 7.61453 17.3599 9.71268 19.9391 9.71268C22.5184 9.71268 24.617 7.61453 24.617 5.03537C24.617 2.45621 22.5193 0.35791 19.9391 0.35791ZM35.3225 9.71283C37.9013 9.71283 40 7.61468 40 5.03551C40 2.45635 37.903 0.35791 35.3225 0.35791C32.7421 0.35791 30.6451 2.45621 30.6451 5.03537C30.6451 7.61453 32.7437 9.71283 35.3225 9.71283ZM4.67833 24.7009C7.25749 24.7009 9.35622 22.6031 9.35622 20.0235C9.35622 17.4438 7.25749 15.3457 4.67833 15.3457C2.09916 15.3457 0 17.444 0 20.0235C0 22.6031 2.09916 24.7009 4.67833 24.7009ZM19.8169 24.7009C22.3956 24.7009 24.4943 22.6031 24.4943 20.0235C24.4943 17.4438 22.3973 15.3457 19.8169 15.3457C17.2368 15.3457 15.1394 17.4438 15.1394 20.0235C15.1394 22.6031 17.2377 24.7009 19.8169 24.7009ZM35.2016 24.7009C37.7813 24.7009 39.8791 22.6031 39.8791 20.0235C39.8791 17.4438 37.7813 15.3457 35.2016 15.3457C32.6219 15.3457 30.5224 17.4438 30.5224 20.0235C30.5224 22.6031 32.6211 24.7009 35.2016 24.7009ZM4.78537 30.2872C2.2062 30.2872 0.107037 32.3849 0.107037 34.9647C0.107037 37.5434 2.2062 39.642 4.78537 39.642C7.36453 39.642 9.46268 37.5444 9.46268 34.9647C9.46268 32.3849 7.36453 30.2872 4.78537 30.2872ZM19.9248 30.2872C17.3454 30.2872 15.2464 32.3849 15.2464 34.9647C15.2464 37.5434 17.3447 39.642 19.9248 39.642C22.5035 39.642 24.6021 37.5444 24.6021 34.9647C24.6021 32.3849 22.5035 30.2872 19.9248 30.2872ZM35.3078 30.2872C32.729 30.2872 30.6303 32.3849 30.6303 34.9647C30.6303 37.5434 32.729 39.642 35.3078 39.642C37.8875 39.642 39.9852 37.5444 39.9852 34.9647C39.9852 32.3849 37.8865 30.2872 35.3078 30.2872Z" fill="currentColor" />
                                    </svg>
                                </SmartLink>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <SmartLink href="#" className="tp-portfolio-navigation-btn d-flex align-items-center mb-30 text-end justify-content-lg-end">
                                <div>
                                    <span className={`tp-left-right mb-5 d-inline-block fw-500 tp-ff-heading fs-15 tp-text-grey-1 ${hoverTextClass}`}>
                                        <span className="mr-5 td-text d-inline-block">Next</span>
                                        <span className="tp-arrow-angle">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.06885 2.83035C5.12094 2.62132 9.09361 1.33336 12 0C10.6661 2.90583 9.37759 6.87793 9.16909 9.92998L7.16334 5.65075L0.982808 11.8317C0.87465 11.9395 0.728086 12.0001 0.57532 12C0.461345 11.9999 0.349936 11.9661 0.255176 11.9028C0.160417 11.8395 0.0865593 11.7494 0.0429459 11.6441C-0.000666618 11.5388 -0.0120802 11.423 0.010149 11.3112C0.0323772 11.1994 0.0872517 11.0967 0.167832 11.0161L6.34799 4.83604L2.06885 2.83035Z" fill={arrowColor} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.06885 2.83035C5.12094 2.62132 9.09361 1.33336 12 0C10.6661 2.90583 9.37759 6.87793 9.16909 9.92998L7.16334 5.65075L0.982808 11.8317C0.87465 11.9395 0.728086 12.0001 0.57532 12C0.461345 11.9999 0.349936 11.9661 0.255176 11.9028C0.160417 11.8395 0.0865593 11.7494 0.0429459 11.6441C-0.000666618 11.5388 -0.0120802 11.423 0.010149 11.3112C0.0323772 11.1994 0.0872517 11.0967 0.167832 11.0161L6.34799 4.83604L2.06885 2.83035Z" fill={arrowColor} />
                                            </svg>
                                        </span>
                                    </span>
                                    <h5 className="tp-portfolio-navigation-title fw-500 fs-25 fs-xs-20 lh-120-per">Elevating Brand<br /> Websites</h5>
                                </div>
                                <img className="ml-30" src="/assets/img/portfolio/details/nav-2.png" alt="" />
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardDetailsNavigation;
