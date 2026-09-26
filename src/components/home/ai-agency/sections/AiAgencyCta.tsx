import { SmartLink } from "@/components/common";
import { AIAgencyButtonArrow } from "@/svg";

const AiAgencyCta = () => {
    return (
        <div className="ais-cta-ptb">
            <div className="container container-1350">
                <div className="ais-cta-wrapper z-index-1 p-relative pt-90 pb-100" style={{ backgroundColor: "#F6F4FE" }}>
                    <div className="ais-cta-shapes">
                        <img src="/assets/img/update-2/cta/home-3/cta-shape-1.png" alt="shape-1" className="shape-1" data-speed=".9" />
                        <img src="/assets/img/update-2/cta/home-3/cta-shape-2.png" alt="shape-2" className="shape-2" data-speed="1.1" />
                        <img src="/assets/img/update-2/cta/home-3/cta-shape-3.png" alt="shape-3" className="shape-3" data-speed="1.1" />
                        <img src="/assets/img/update-2/cta/home-3/cta-shape-4.png" alt="shape-4" className="shape-4" data-speed-x="-.2" />
                        <img src="/assets/img/update-2/cta/home-3/cta-shape-5.png" alt="shape-5" className="shape-5" data-speed=".9" />
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ais-cta-wrap z-index-1 p-relative text-center">
                                <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">Empowering your business</span>
                                <h4 className="ais-section-title tp_fade_anim" data-delay=".5">Unlock your full trading <br /> potential with industry-leading tools.</h4>
                                <div className="ais-cta-text tp_fade_anim" data-delay=".7">
                                    <p className="mb-45">Trade, invest, and manage your cryptocurrency portfolio with precision and ease</p>
                                </div>
                                <div className="ais-cta-btn tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                                    <SmartLink className="upd-btn-black-radius btn-blue-bg btn-style-ai d-inline-flex align-items-center justify-content-between" href="/contact">
                                        <span>
                                            <span className="text-1">Find out more</span>
                                            <span className="text-2">Find out more</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgencyCta;