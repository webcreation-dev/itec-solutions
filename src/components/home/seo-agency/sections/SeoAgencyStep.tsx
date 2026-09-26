import { SmartLink } from "@/components/common";
import StepItem from "../components/StepItem";
import { ArrowIcon } from "@/svg/ArrowIcons";
import { StepItemDT } from "@/types";
import Image from "next/image";

const steps: StepItemDT[] = [
    {
        number: "01",
        title: "Engage with and <br> hire an AP",
        delay: ".3",
        align: "start",
        arrow: "step-3.png",
    },
    {
        number: "02",
        title: "Control your website <br> schema.",
        delay: ".4",
        align: "center",
        active: true,
    },
    {
        number: "03",
        title: "Ramp up sales & close <br /> transactions",
        delay: ".5",
        align: "end",
        arrow: "step-4.png",
    },
];
const SeoAgencyStep = () => {
    return (
        <div className="al-step-area pt-90 pb-80">
            <div className="container">
                <div className="al-step-wrapper p-relative">
                    <div className="al-step-shape-wrap">
                        <div className="al-step-shape-1 d-none d-xl-block">
                            <Image width={161} height={122} src="/assets/img/update/step/step-1.png" alt="Step 1" />
                        </div>
                        <div className="al-step-shape-2 d-none d-xl-block">
                            <Image width={70} height={80} src="/assets/img/update/step/step-2.png" alt="Step 2" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="al-step-title-wrap mb-80">
                                <div className="al-step-title-box text-center">
                                    <span className="al-section-subtitle fs-12 mb-30 tp_fade_anim" data-delay=".3">The Biggest SEO Update</span>
                                    <h4 className="al-section-title fs-40 tp_fade_anim" data-delay=".4">The case studies of businesses that have
                                        successfully used Aleric to improve their SEO</h4>
                                </div>
                                <div className="al-step-link text-center tp_fade_anim" data-delay=".5">
                                    <SmartLink href="/service-1" className="tp-btn-cst d-inline-block lh-1 tp-round-26 fs-16 tp-bg-common-blue hover-text-white ls-0 tp-btn-switch-2-animation tp-text-common-white fw-600 tp-ff-inter">
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Explore Aleric&apos;s SEO Tools</span>
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
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="row">
                                {steps.map((step, index) => (
                                    <StepItem key={step.number} step={step} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoAgencyStep;