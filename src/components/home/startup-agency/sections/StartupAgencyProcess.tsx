"use client";
import { ArrowIconFourteen, ProcessBorderLine, ProcessGlassCurveShape } from "@/svg";
import StartupAgencyProcessItem from "../components/StartupAgencyProcessItem";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const processSteps = [
    {
        count: "01",
        title: "Strategy Planning",
        description: "We start with an in-depth consultation to understand your startup’s goals.",
        items: ["+ Market Analysis", "+ Custom Growth Plan", "+ Complex Part Note"],
        delay: ".3",
    },
    {
        count: "02",
        title: "Implementation",
        description: "We start with an in-depth consultation to understand your startup’s goals.",
        items: ["+ Market Analysis", "+ Custom Growth Plan", "+ Complex Part Note"],
        delay: ".4",
    },
    {
        count: "03",
        title: "Delivery Project",
        description: "We start with an in-depth consultation to understand your startup’s goals.",
        items: ["+ Market Analysis", "+ Custom Growth Plan", "+ Complex Part Note"],
        delay: ".5",
    },
];

const StartupAgencyProcess = () => {
    const isDark = useIsDarkRoute();
    const sectionBg = isDark ? "tp-bg-grey-8" : "tp-bg-common-black";

    return (
        <div className={`tp-process-area pt-100 pb-60 p-relative z-index-1 ${sectionBg}`}>
            <Image className="tp-awards-bg-shape" src="/assets/img/awards/grid-shape.png" alt="grid shape" width={1920} height={500} />
            <span className="tp-process-sa-shape">
                <ProcessGlassCurveShape />
            </span>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-md-6">
                        <div className="tp-process-sa-title-wrap tp_fade_anim" data-delay=".3">
                            <h2 className="tp-text-common-white fs-70 fs-md-52 fw-700 lh-1">Startup  Work<br /> Process.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="tp-process-sa-link mb-15 text-md-end tp_fade_anim" data-delay=".5">
                            <span className="fw-700 fs-18 tp-text-grey-2 tp-ff-heading">Ready to Scale? </span>
                            <SmartLink href="/contact" className="tp-left-right fw-700 hover-text-grey fs-18 ml-20 tp-ff-heading text-uppercase tp-text-common-white">
                                <span className="td-text d-inline-block mr-5">Let&apos;s Talk</span>
                                <span className="tp-arrow-angle">
                                    <ArrowIconFourteen />
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
                <span className="tp-process-sa-border d-inline-block mb-60 mt-30">
                    <ProcessBorderLine />
                </span>
                <div className="row">
                    {processSteps.map((step, idx) => (
                        <StartupAgencyProcessItem key={idx} step={step} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyProcess;
