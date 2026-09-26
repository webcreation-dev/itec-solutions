import { AIAgencyButtonArrow, FooterStarIconTwo } from "@/svg";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const AIAgencyHero = () => {
    return (
        <div className="ais-hero-ptb bg-position pt-160 pb-110"
            style={{ backgroundImage: `url(/assets/img/update-2/hero/hero-3/hero-thumb-1.png)` }}>
            <div className="container container-1350">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ais-hero-wrapper p-relative text-center mb-50">
                            <div className="ais-hero-shapes">
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-5.png" alt="shape 1" className="shape-1" data-speed=".9" />
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-6.png" alt="shape 2" className="shape-2" data-speed="1.1" />
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-7.png" alt="shape 3" className="shape-3" data-speed="1.1" />
                            </div>
                            <span className="ais-hero-star d-block mb-10 tp_fade_anim" data-delay=".3">
                                {[...Array(5)].map((_, index) => (
                                    <FooterStarIconTwo key={index} />
                                ))}
                            </span>
                            <span className="ais-hero-sub d-inline-block mb-15 tp_fade_anim" data-delay=".4">
                                4.5 - 5.3K ratings 120 Reviews
                            </span>
                            <h4 className="ais-hero-title mb-15 tp_fade_anim" data-delay=".5">
                                Smarter <span>
                                    <Image width={36} height={36} src="/assets/img/update-2/hero/hero-3/hero-title-shape-1.png" alt="hero shape" />
                                </span> Business Growth <br /> AI-Powered{" "}
                                <span>
                                    <Image width={36} height={36} src="/assets/img/update-2/hero/hero-3/hero-title-shape-2.png" alt="hero shape" />
                                </span>{" "}
                                Solutions
                            </h4>
                            <div className="ais-hero-text tp_fade_anim" data-delay=".6">
                                <p>
                                    Accelerate your growth with smart AI tools built to automate <br /> processes, deliver clearer insights.
                                </p>
                            </div>
                            <div className="ais-hero-btn tp_fade_anim" data-delay=".8" data-fade-from="top" data-ease="bounce">
                                <SmartLink className="upd-btn-black-radius btn-style-ai d-inline-flex align-items-center justify-content-between" href="/contact">
                                    <span>
                                        <span className="text-1">Get Start</span>
                                        <span className="text-2">Get Start</span>
                                    </span>
                                    <i>
                                        <span>
                                            <AIAgencyButtonArrow />
                                            <AIAgencyButtonArrow />
                                        </span>
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                        <div className="ais-hero-thumb p-relative">
                            <Image className="img-fluid" width={1319} height={995} src="/assets/img/update-2/hero/hero-3/thumb-1.png" alt="hero thumb" />
                            <div className="ais-hero-thumb-shapes">
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-1.png" alt="hero-shape-1" className="shape-1" data-speed="1.1" />
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-2.png" alt="hero-shape-2" className="shape-2" data-speed=".9" />
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-3.png" alt="hero-shape-3" className="shape-3" data-speed="1.1" />
                                <img src="/assets/img/update-2/hero/hero-3/hero-shape-4.png" alt="hero-shape-4" className="shape-4" data-speed=".9" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgencyHero;