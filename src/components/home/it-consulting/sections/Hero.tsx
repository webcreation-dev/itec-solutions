import BrandTextSlider from "@/components/shared/components/BrandTextSlider";
import { brand_text_items } from "@/data/brand-data";
import { SmartLink } from "@/components/common";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="cst-hero-ptb crp-hero-bg pt-90 bg-position" style={{ backgroundImage: "url(/assets/img/update-2/hero/hero-thumb-1.jpg)" }}>
            <div className="container container-1524">
                <div className="row align-items-center">
                    <div className="col-xl-6 order-xl-1 order-2">
                        <div className="cst-hero-thumb-wrapper z-index-1 p-relative">
                            <div className="cst-hero-thumb">
                                <Image className="img-fluid" width={710} height={920} src="/assets/img/update-2/hero/hero-thumb-2.jpg" alt="Hero Thumb" />
                            </div>
                            <div className="cst-hero-thumb-shapes">
                                <div className="shape-1" data-speed=".8"><Image width={301} height={203} src="/assets/img/update-2/hero/hero-shape-1.png" alt="Hero Shape 1" /></div>
                                <div className="shape-2" data-speed="1.1"><Image width={346} height={303} src="/assets/img/update-2/hero/hero-shape-2.png" alt="Hero Shape 2" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 order-xl-2 order-1">
                        <div className="cst-hero-wrapper p-relative d-md-flex pb-50">
                            <div className="shape-1 tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                <Image width={86} height={70} src="/assets/img/update-2/hero/hero-shape-3.png" alt="Hero Shape 3" />
                            </div>
                            <div className="cst-hero-left tp_fade_anim" data-delay=".3" data-fade-from="left">
                                <div className="cst-hero-subtitle">
                                    advanced branding solutions
                                </div>
                            </div>
                            <div className="cst-hero-right">
                                <div className="cst-hero-heading tp_fade_anim" data-delay=".3">
                                    <h3 className="cst-hero-title cst-section-title color-white fs-62 mb-45">Transform <br />
                                        your future with <br />
                                        expert consulting <br />
                                        solutions</h3>
                                </div>
                                <div className="cst-hero-btn-box">
                                    <div className="cst-hero-btn tp_fade_anim" data-delay=".5">
                                        <SmartLink className="cst-btn" href="/contact">
                                            <span>
                                                <span className="text-1">
                                                    Lets Get Started
                                                    <ButtonArrowIcon />
                                                </span>{" "}
                                                <span className="text-2">
                                                    Lets Get Started
                                                    <ButtonArrowIcon />
                                                </span>
                                            </span>
                                        </SmartLink>

                                    </div>
                                    <div className="cst-hero-btn tp_fade_anim" data-delay=".7">
                                        <SmartLink className="cst-btn transparent" href="/contact">
                                            <span>
                                                <span className="text-1">Schedule a Call</span>
                                                <span className="text-2">Schedule a Call</span>
                                            </span>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brand text slider start */}
            <div className="cst-hero-slider-wrapper">
                <BrandTextSlider items={brand_text_items[0]?.itConsultingItems ?? []} />
            </div>
            {/* brand text slider end */}
        </div>
    );
};

export default Hero;