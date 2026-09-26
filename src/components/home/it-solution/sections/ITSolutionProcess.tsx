
"use client";
import { ServiceArrowIconThree, VideoPlayIconThree } from "@/svg";
import { useVideoModal } from "@/providers/VideoProvider";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const steps = [
    {
        id: "01",
        title: (
            <>
                Design <br /> & Prototyping
            </>
        ),
        delay: ".3",
    },
    {
        id: "02",
        title: (
            <>
                Research <br /> & Analysis
            </>
        ),
        delay: ".5",
    },
    {
        id: "03",
        title: (
            <>
                Testing <br /> & Iteration
            </>
        ),
        delay: ".7",
    },
    {
        id: "04",
        title: (
            <>
                Prepare <br /> for Delivery
            </>
        ),
        delay: ".9",
    },
];

const ITSolutionProcess = () => {
    const { playVideo } = useVideoModal();
    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const processStyles = {
        headingText: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyText: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
        secondaryText: isDark ? "tp-text-common-white" : "tp-text-common-black-4",
        linkText: isDark ? "tp-text-common-white" : "tp-text-common-black",
    };
    // -------------------------------

    return (
        <div className="tp-process-it-bg">
            <div className="tp-process-area">
                <div className="tp-text-moving-area black-bg-4 pt-140 pb-150">
                    <div className="tp-text-it-moving-top moving-text mb-40">
                        <div className="tp-text-it-item wrapper-text d-flex align-items-center">
                            <span>Brand _ </span>
                            <span>Strategy _</span>
                            <span> Development _ </span>
                            <span>Management _ </span>
                        </div>
                    </div>

                    <div className="tp-text-it-moving-bottom moving-text">
                        <div className="tp-text-it-item wrapper-text d-flex align-items-center">
                            <span>IT _ </span>
                            <span>Solutions _ </span>
                            <span>Video _ </span>
                            <span>Production _</span>
                            <span>Business _</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-process-area pb-145 p-relative z-index-1">
                <img
                    className="tp-process-it-shape"
                    data-speed="0.8"
                    src="/assets/img/process/it/shape.png"
                    alt="shape"
                />

                <div className="container-fluid container-1524">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="tp-process-pp-video-wrap tp-process-it-video-thumb d-flex mb-50">
                                <span className="tp-process-it-icon d-none d-xl-block">
                                    <svg
                                        width="155"
                                        height="310"
                                        viewBox="0 0 155 310"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M155 155C155 240.604 85.6041 310 0 310V0C85.6041 0 155 69.3959 155 155Z"
                                            fill="#B4E717"
                                        />
                                    </svg>
                                </span>

                                <div className="tp-process-pp-video-inner tp-process-it-wrap p-relative d-inline-block">
                                    <Image
                                        width={310}
                                        height={310}
                                        className="tp-process-pp-video-img img-fluid"
                                        src="/assets/img/process/it/thumb.png"
                                        alt="thumb"
                                    />

                                    <div className="tp-video-main tp-process-it-video">
                                        <button type="button" onClick={() => { playVideo("go7QYaQR494") }}
                                            className="tp-hero-video-btn popup-video">
                                            <span>
                                                <VideoPlayIconThree />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="tp-process-it-title-wrap mb-50">
                                <h2 className={`tp-text-revel-anim fix tp-ff-inter fs-60 fs-xs-40 ls-m-4 ${processStyles.headingText} mb-20`}>
                                    Guided by Process,
                                    <br /> Driven by Results.
                                </h2>

                                <p className={`tp-section-it-para ${processStyles.bodyText} fs-24 fs-xs-18 tp-ff-inter lh-150-per`}>
                                    We follow a streamlined, intelligent workflow designed
                                    <br />
                                    to eliminate friction and deliver consistent results.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-30 pt-30">
                        {steps.map((step) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={step.id}>
                                <div
                                    className="tp-process-it-item text-center mb-30 tp_fade_anim"
                                    data-delay={step.delay}
                                >
                                    <span className={`tp-process-it-position tp-ff-inter fs-24 fw-600 ${processStyles.headingText} mb-110 d-inline-block`}>
                                        {`{${step.id}}`}
                                    </span>

                                    <h4 className={`tp-process-it-title tp-ff-inter fs-28 lh-120-per ${processStyles.headingText} mb-20`}>
                                        {step.title}
                                    </h4>

                                    <p className={`tp-process-it-para tp-ff-inter fs-16 lh-150-per ${processStyles.headingText}`}>
                                        Conduct user research (interviews, surveys, analytics).
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-12">
                            <div
                                className="tp-skill-wd-bottom text-center mt-30 tp_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <p className={`tp-process-it-para-2 tp-skill-wd-para tp-ff-inter fw-500 fs-16 ${processStyles.secondaryText}`}>
                                    Don&apos;t hesitate collaborate with expertise-
                                    <SmartLink
                                        href="/contact-us"
                                        className={`ml-20 d-inline-block lh-0 tp-round-26 fs-16 ls-m-3 text-uppercase ls-0 tp-btn-switch-animation ${processStyles.linkText} tp-ff-inter fw-700`}
                                    >
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Let&apos;s Talk</span>
                                            <span className="btn-icon">
                                                <ServiceArrowIconThree />
                                            </span>
                                            <span className="btn-icon">
                                                <ServiceArrowIconThree />
                                            </span>
                                        </span>
                                    </SmartLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionProcess;