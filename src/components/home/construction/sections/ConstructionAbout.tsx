import { SmartLink } from "@/components/common";
import { ArrowIconThree } from "@/svg";
import Image from "next/image";

const ConstructionAbout = () => {
    return (
        <div className="ar-about-area cnt-about-style p-relative pt-120 pb-160">
            <Image width={575} height={559} className="ar-about-shape img-fluid" src="/assets/img/update-2/about/cst/about-shape.png" alt="about shape" />
            <div className="container container-1510">
                <div className="ar-about-title-wrap mb-60">
                    <div className="row align-items-end">
                        <div className="col-xl-8 col-lg-8">
                            <div className="ar-about-title-box">
                                <span className="cnt-section-subtitle mb-20 tp_fade_anim" data-delay=".3">ITEC Solutions</span>
                                <h3 className="tp-section-title-clash-600 fs-60 fw-500 mb-0 pb-40 tp_fade_anim" data-delay=".4">
                                    Une expertise qui réunit ingénierie,
                                    construction et développement immobilier.
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                            <div className="ar-about-top-img text-end">
                                <img data-speed=".9" src="/assets/img/update-2/about/about-2/thumb-1.jpg" alt="thumb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col-xl-5 col-lg-5 col-md-7">
                        <div className="ar-about-thumb p-relative">
                            <img data-speed=".9" src="/assets/img/update-2/about/about-2/thumb-2.jpg" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-10 order-1 order-lg-0">
                        <div className="ar-about-content">
                            <h3 className="ar-about-title-sm tp_fade_anim" data-delay=".3">
                                Chaque projet exige une lecture précise du contexte, des usages et des contraintes de réalisation.
                            </h3>
                            <div className="tp_fade_anim" data-delay=".4">
                                <p>
                                    ITEC organise les savoir-faire nécessaires pour faire avancer les projets avec clarté et continuité.
                                </p>
                            </div>
                            <div className="cnt-about-btn-box tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <SmartLink className="upd-btn-black-square cnt-btn-style style-2 btn-transparent" href="/service-2">
                                    <i>
                                        <ArrowIconThree />
                                        <ArrowIconThree />
                                    </i>
                                    <span>
                                        <span className="text-1">Découvrir les services</span>
                                        <span className="text-2">Découvrir les services</span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 order-0 order-lg-0">
                        <div data-speed="1.1" className="ar-about-exp-wrap d-flex justify-content-xxl-start justify-content-end">
                            <div className="ar-about-exp-box"
                                style={{ backgroundImage: `url(/assets/img/update-2/hero/hero/hero-bg-shape-2.png)` }}>
                                <span>Une vision <br /> intégrée</span>
                                <h4>3</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionAbout;
