import { SmartLink } from "@/components/common";
import { AIAgencyButtonArrow } from "@/svg";
import Image from "next/image";

const AIAgencyService = () => {
    return (
        <div className="ais-service-ptb ais-service-bdr z-index-1 p-relative pt-15 pb-15">
            <div className="container container-1350">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ais-service-wrapper include-bg" style={{ backgroundImage: "url(/assets/img/update-2/service/home-3/service-bg.png)", backgroundColor: "#F6F4FE" }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="ais-exp-heading p-relative mb-40">
                                        <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">Aleric Features</span>
                                        <h4 className="ais-section-title tp_fade_anim" data-delay=".5">Robust & secure <br /> exchange platform</h4>
                                        <div className="ais-exp-text tp_fade_anim" data-delay=".7">
                                            <p>Whether {`you’re`} looking to trade major coins like <br />
                                                Bitcoin and Ethereum or interested in emerging altcoins, <br />
                                                our platform provides all the tools you need.</p>
                                        </div>
                                        <div className="ais-exp-btn tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                                            <SmartLink className="upd-btn-black-radius btn-blue-bg btn-style-ai d-inline-flex align-items-center justify-content-between" href="/contact">
                                                <span>
                                                    <span className="text-1">Book a call</span>
                                                    <span className="text-2">Book a call</span>
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
                                <div className="col-lg-6">
                                    <div className="ais-service-thumb-wrapper text-lg-end z-index-1 p-relative">
                                        <Image className="img-fluid" width={500} height={487} src="/assets/img/update-2/service/home-3/thumb-1.png" alt="thumb" />
                                        <div className="ais-service-shape">
                                            <img className="d-block mb-10" data-speed-x="-.2" src="assets/img/update-2/service/home-3/thumb-2.png" alt="thumb-2" />
                                            <img className="d-block ml-20" data-speed-x=".2" src="assets/img/update-2/service/home-3/thumb-3.png" alt="thumb-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgencyService;