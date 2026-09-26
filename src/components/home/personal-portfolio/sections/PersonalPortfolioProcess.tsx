"use client";
import PersonalPortfolioProcessItem from "../components/PersonalPortfolioProcessItem";
import { HeaderButtonArrow, ProcessHalfCircle, VideoPlayIconFour } from "@/svg";
import { personalPortfolioProcessData } from "@/data/process-data";
import { ProcessConnectorLine } from "@/svg/BorderLine";
import { useVideoModal } from "@/providers/VideoProvider";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const PersonalPortfolioProcess = () => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const processStyles = {
        sectionBg: isDark ? "tp-bg-grey-8" : "tp-bg-common-black",
    };
    // -------------------------------

    return (
        <div className={`tp-process-area pt-110 pb-100 ${processStyles.sectionBg} p-relative z-index-1`}>
            <Image width={1905} height={918}
                className="tp-awards-bg-shape img-fluid"
                src="/assets/img/awards/grid-shape.png"
                alt="shape"
            />

            <div className="container">
                <div className="row">
                    {/* LEFT VIDEO */}
                    <div className="col-lg-5">
                        <div
                            className="tp-process-pp-video-wrap mb-35 tp_fade_anim"
                            data-delay=".3"
                        >
                            <div className="d-flex mb-30">
                                <span>
                                    <ProcessHalfCircle />
                                </span>

                                <div className="tp-process-pp-video-inner p-relative d-inline-block">
                                    <Image width={208} height={208}
                                        className="tp-process-pp-video-img img-fluid"
                                        src="/assets/img/process/pp/bg.jpg"
                                        alt="video image"
                                    />

                                    <div className="tp-video-main tp-process-pp-video">
                                        <button onClick={() => { playVideo("go7QYaQR494") }}
                                            className="tp-hero-video-btn popup-video">
                                            <span>
                                                <VideoPlayIconFour />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <p className="tp-ff-heading fw-500 fs-25 tp-text-grey-2 lh-130-per">
                                Understand the problem, users,
                                <br />
                                and business objectives.
                            </p>
                        </div>
                    </div>

                    {/* TITLE */}
                    <div className="col-lg-7">
                        <div
                            className="tp-process-pp-title-inner pt-30 mb-35 tp_fade_anim"
                            data-delay=".5"
                        >
                            <h2 className="fs-70 fs-sm-40 tp-text-common-white">
                                Design Process
                                <br />
                                What I Do
                            </h2>
                        </div>
                    </div>

                    {/* CONNECTOR LINE */}
                    <div className="col-12 d-none d-lg-block">
                        <div className="tp-process-pp-border">
                            <ProcessConnectorLine />
                        </div>
                    </div>

                    {/* PROCESS ITEMS */}
                    {personalPortfolioProcessData.map((item) => (
                        <PersonalPortfolioProcessItem key={item.id} {...item} />
                    ))}

                    {/* CTA */}
                    <div className="col-lg-12">
                        <div
                            className="tp-skill-wd-bottom text-center mt-35 tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <p className="tp-skill-wd-para tp-ff-heading fw-500 fs-18 tp-text-common-white">
                                Don&apos;t hesitate collaborate with expertise-
                                <SmartLink
                                    href="/contact"
                                    className="ml-40 d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation tp-text-theme-primary tp-ff-heading fw-500"
                                >
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">Let&apos;s Talk</span>

                                        {[1, 2].map((_, i) => (
                                            <span key={i} className="btn-icon">
                                                <HeaderButtonArrow />
                                            </span>
                                        ))}
                                    </span>
                                </SmartLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioProcess;