import { SmartLink } from "@/components/common";
import { ArrowIcon } from "@/svg";
import Image from "next/image";

const AiStartupCta = () => {
    return (
        <div className="tp-cta-area tp-bg-common-black-5 section-m-spacing p-relative z-index-1">
            <Image width={1351} height={681} className="tp-faq-ai-noise" src="/assets/img/body/noise.png" alt="noice image" />
            <div className="container-fluid container-1824">
                <div className="tp-cta-ai-bg bg-position tp-image-distortion z-index-1" style={{ backgroundImage: `url(/assets/img/cta/ai/bg.jpg)` }} data-background="">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="tp-cta-ai-wrap text-center">
                                <h2 className="tp-ff-inter fw-600 fs-62 fs-md-50 fs-sm-40 fs-xs-30 ls-m-4 lh-120-per tp-text-grey-5 mb-65 tp_fade_anim" data-delay=".3">Transform Ideas into <br /> Intelligent Solutions with Us</h2>
                                <div className="tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                                    <SmartLink href="/contact-us" className="tp-btn-ai-xxl tp-bg-common-angry tp-btn-switch-2-animation p-relative hover-text-white d-inline-block text-uppercase tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                                        <span className="d-flex align-items-center justify-content-center">
                                            <span className="btn-text">Get Starteed Now</span>
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
                </div>
            </div>
        </div>
    );
};

export default AiStartupCta;