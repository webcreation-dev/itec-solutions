"use client";

import React from "react";
import { SmartLink } from "@/components/common";

const DetailsTwoRelated = () => {
    return (
        <>
            {/* tp-banner-area-start */}
            <div className="tp-about-me-banner scale-up-img">
                <img className="img-cover scale-up" data-speed="0.4" src="/assets/img/portfolio/details/two/banner.jpg" alt="About Thumbnail" />
            </div>
            {/* tp-banner-area-end */}

            {/* tp-portfolio-area-start */}
            <div className="tp-portfolio-area pb-110 pt-155">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-portfolio-cst-subtitle-wrap tp-portfolio-details-2-subtitle d-flex justify-content-between flex-wrap align-items-center mb-20">
                                <h5 className="mb-15 tp-ff-dm fw-600 tp-text-common-black fs-32 ls-m-2">Related Project</h5>
                                <SmartLink href="/blog-grid-2" className="mb-15 d-inline-block lh-0 fs-16 ls-0 tp-btn-switch-2-animation tp-text-common-black hover-text-black fw-700 tp-ff-dm">
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">All Articles</span>
                                        <span className="btn-icon">
                                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <span className="btn-icon">
                                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </span> 
                                </SmartLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-portfolio-sa-item mb-50 not-hide-cursor" data-cursor="View<br>Demo">
                                <div className="tp-portfolio-sa-thumb mb-25">
                                    <SmartLink href="/portfolio-details-two" className="cursor-hide">
                                        <img className="w-100 mover" src="/assets/img/portfolio/sa/thumb.jpg" alt="" />
                                    </SmartLink>
                                </div>
                                <div className="tp-portfolio-sa-content">
                                    <h4 className="tp-portfolio-sa-item-title tp-ff-dm fs-25 lh-1 mb-15">
                                        <SmartLink className="underline-black" href="/portfolio-details-two">Crafting Digital Experiences</SmartLink>
                                    </h4>
                                    <span className="tp-portfolio-sa-item-tag fw-700 fs-16 tp-text-grey-1 tp-ff-dm tp-bg-common-white-2 d-inline-block">UI/UX Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-portfolio-sa-item mb-50 not-hide-cursor" data-cursor="View<br>Demo">
                                <div className="tp-portfolio-sa-thumb mb-25">
                                    <SmartLink href="/portfolio-details-two" className="cursor-hide">
                                        <img className="w-100" src="/assets/img/portfolio/sa/thumb-2.jpg" alt="" />
                                    </SmartLink>
                                </div>
                                <div className="tp-portfolio-sa-content">
                                    <h4 className="tp-portfolio-sa-item-title tp-ff-dm fs-25 lh-1 mb-15">
                                        <SmartLink className="underline-black" href="/portfolio-details-two">Building Visual Identities</SmartLink>
                                    </h4>
                                    <span className="tp-portfolio-sa-item-tag fw-700 fs-16 tp-text-grey-1 tp-ff-dm tp-bg-common-white-2 d-inline-block">Web Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tp-portfolio-area-end */}
        </>
    );
};

export default DetailsTwoRelated;
