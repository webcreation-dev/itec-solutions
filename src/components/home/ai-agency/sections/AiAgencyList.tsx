import Image from "next/image";
import Link from "next/link";

const AiAgencyList = () => {
    return (
        <div className="ais-list-ptb pt-130 pb-100">
            <div className="container container-1350">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="ais-list-thumb-wrapper z-index-1 p-relative mb-40">
                            <div className="tp--hover-item">
                                <div className="ais-list-thumb">
                                    <Link className="cursor-hide tp--hover-img" data-displacement="/assets/img/update-2/cta/home-3/list-thumb-1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1" href="/assets/img/update-2/cta/home-3/list-thumb-1.jpg">
                                        <img src="/assets/img/update-2/cta/home-3/list-thumb-1.jpg" alt="thumb" />
                                    </Link>
                                </div>
                            </div>
                            <div className="ais-list-thumb-shape" data-speed="1.1">
                                <Image className="img-fluid" width={268} height={196} src="/assets/img/update-2/cta/home-3/list-thumb-2.png" alt="thumb" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ais-list-heading mb-35">
                            <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">Empowering your business</span>
                            <h4 className="ais-section-title tp_fade_anim" data-delay=".5">Combining advanced AI <br /> engineering smart automation.</h4>
                        </div>
                        <div className="ais-list-wrap tp_fade_anim" data-delay=".7">
                            <ul>
                                <li>01 - Trusted Expertise</li>
                                <li>02 - Smart Innovation</li>
                                <li>03 - Premium Quality</li>
                                <li>04 -  AI-Powered</li>
                                <li>05 - Scalable Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgencyList;