"use client";
import AboutInsightCard from "../components/AboutInsightCard";
import { AboutShapeIcon, ArrowIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const aboutInsightData = [
    {
        image: "/assets/img/about/cst/graph.png",
        title: "Data - driven insights",
        items: [
            "Digital Strategy Consulting",
            "AI & Machine Learning Solutions",
            "Data Analytics & Insights",
        ],
        link: "/service-4",
    },
];

const BusinessConsultingAbout = () => {
    const isDarkRoute = useIsDarkRoute();
    // -------------------------------
    // Class
    // -------------------------------
    const aboutStyles = {
        secondaryTextColor: isDarkRoute ? "tp-text-grey-2" : "",
        counterTextColor: isDarkRoute ? "tp-text-common-white" : "",
        shapeFillColor: isDarkRoute ? "white" : "#030303",
        bodyTextColor: isDarkRoute ? "tp-text-common-white" : "tp-text-common-black",
    };
    // -------------------------------

    return (
        <div id="about" className="tp-about-area pt-150 pb-100">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-about-cst-title-wrap mb-80">
                            <h2 className="tp-about-2-title fs-md-40 fs-xs-30 tp_text_invert invert-black-3 tp-ff-dm fw-600 tp-text-common-black-1">We don&apos;t just create—we transform. We are a <br />
                                team of visionary designers, strategists, & storytellers<br />
                                dedicated to building brands that captivate and connect.</h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5">
                        <div className="tp-about-cst-thumb-wrap mb-30">
                            <div className="tp-about-cst-thumb pb-60">
                                <Image width={289} height={248} className="mr-30 img-fluid" src="/assets/img/about/cst/thumb.jpg" alt="thumb" />
                            </div>
                            <div className="tp-about-expreance d-flex align-items-end mb-30">
                                <h2 className={`${aboutStyles.counterTextColor} fw-600 fs-100 tp-ff-dm p-relative d-inline-block mb-0 lh-1`}>12 <span className="plus fs-25">+</span></h2>
                                <span className={`${aboutStyles.bodyTextColor} tp-ff-dm fs-18 fw-700  mb-10 ml-15`}>Years of<br /> Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-7">
                        <div className="tp-about-cst-tab-wrap ml-35 mb-30">
                            <div className="tp-about-cst-tab mb-25">
                                <ul role="tablist">
                                    <li className="nav-tab-item" role="presentation">
                                        <Link href="#groth" className="active" data-bs-toggle="tab">01. Growth Strategies</Link>
                                    </li>
                                    <li className="nav-tab-item" role="presentation">
                                        <Link href="#market" data-bs-toggle="tab">02. Market Analysis</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content p-relative mb-45">
                                <div className="tab-pane active show" id="groth" role="tabpanel">
                                    <div className="tp-about-cst-tab-content">
                                        <p className={`${aboutStyles.secondaryTextColor} fs-18 tp-ff-dm lh-140-per mb-30`}>We are a creative agency passionate about
                                            crafting bold, innovative, and strategic brand
                                            experiences. From branding and design to digital
                                            marketing and content creation, we bring ideas
                                            to life with creativity, precision, and impact.</p>
                                        <p className={`${aboutStyles.secondaryTextColor} fs-18 tp-ff-dm lh-140-per mb-40`}>With a passion for innovation and a results- driven approach, we help businesses stand
                                            out in a crowded marketplace.</p>
                                        <SmartLink href="/about-modern" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">About Us</span>
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
                                <div className="tab-pane" id="market" role="tabpanel">
                                    <div className="tp-about-cst-tab-content">
                                        <p className={`${aboutStyles.secondaryTextColor} fs-18 tp-ff-dm lh-140-per mb-30`}>We are a creative agency passionate about
                                            crafting bold, innovative, and strategic brand
                                            experiences. From branding and design to digital
                                            marketing and content creation, we bring ideas
                                            to life with creativity, precision, and impact.</p>
                                        <p className={`${aboutStyles.secondaryTextColor} fs-18 tp-ff-dm lh-140-per mb-40`}>Strategists dedicated to creating stunning, functional websites
                                            that align with your unique business goals. and strategic insights to
                                            streamline operations, boost efficiency.</p>
                                        <SmartLink href="/about-modern" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-0 tp-btn-switch-2-animation tp-text-common-black-1 fw-700 tp-ff-dm">
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="btn-text">About Us</span>
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
                            <span className="tp-about-cst-shape text-center d-block ml-100 tpswing">
                                <AboutShapeIcon fillColor={aboutStyles.shapeFillColor} />
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="tp-about-cst-list-wrap ml-30 p-relative mb-30">
                            <div className="tp-about-cst-list-thumb text-end fix ml-150 tp-round-20">
                                <img data-speed="0.9" className="tp-round-20" src="/assets/img/about/cst/thumb-2.jpg" alt="thumb" />
                            </div>
                            {aboutInsightData.map((item, index) => (
                                <AboutInsightCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingAbout;