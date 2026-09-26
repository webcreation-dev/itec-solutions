import { SmartLink } from "@/components/common";
import { AIAgencyButtonArrow } from "@/svg";
import Image from "next/image";

const AIAgencyExpense = () => {
    return (
        <div className="ais-exp-ptb ais-exp-bg p-relative pb-100">
            <div className="container container-1350">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="ais-exp-thumb-wrapper z-index-1 p-relative mb-40">
                            <Image className="img-fluid" width={563} height={581} src="/assets/img/update-2/experience/thumb-main.png" alt="thumb" />
                            <div className="ais-exp-thumb-shapes">
                                <img src="/assets/img/update-2/experience/exp-shape-1.png" alt="shape 1" className="shape-1" data-speed="1.1" />
                                <img src="/assets/img/update-2/experience/exp-shape-2.png" alt="shape 2" className="shape-2" data-speed-x=".2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-end z-index-1 p-relative">
                            <div className="ais-exp-heading p-relative mb-40">
                                <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">Experience a unified AI ecosystem built</span>
                                <h4 className="ais-section-title tp_fade_anim" data-delay=".5">Combining advanced AI engineering smart automation engineering smart.</h4>
                                <div className="ais-exp-text tp_fade_anim" data-delay=".7">
                                    <p>We empower achieve lasting success <span>strategic planning</span> data
                                        driven insights, innovative business models. Our expert team helps
                                        you redefine operations implement sustainable.</p>
                                </div>
                                <div className="ais-exp-btn tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                                    <SmartLink className="upd-btn-black-radius btn-style-ai d-inline-flex align-items-center justify-content-between" href="/contact">
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
                            <div className="ais-exp-shape-3">
                                <Image className="img-fluid" width={162} height={162} src="/assets/img/update-2/experience/exp-shape-3.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAgencyExpense;