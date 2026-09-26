import { SmartLink } from "@/components/common";
import { HeroArrowRightIcon } from "@/svg";

const ArchitectureAbout = () => {
    return (
        <div className="al-about-archi-area p-relative z-index-1 pt-150 pb-150">
            <img className="al-about-archi-shape d-none d-xl-block" src="/assets/img/update/about/archi/bg.png" alt="about" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-8 col-lg-10 col-12">
                        <div className="al-section-archi-title-wrapper  mb-50">
                            <h2 className="al-section-archi-title mb-20 text-uppercase  tp_fade_anim" data-delay=".3"><span className="ml-30">notre</span><br /> vision</h2>
                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <span className="al-section-archi-subtitle tp_fade_anim" data-delay=".4">01 - ITEC SOLUTIONS</span>
                                </div>
                                <div className="col-md-9 col-12">
                                    <div className="al-section-archi-content ml-55 tp_fade_anim" data-delay=".5">
                                        <p className="">ITEC Solutions réunit l&apos;ingénierie, la construction et le développement immobilier pour donner une forme concrète aux ambitions de ses partenaires.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-1750">
                <div className="row gx-50">
                    <div className="col-lg-7 custom-column-1">
                        <div className="row gx-50">
                            <div className="col-lg-6 col-md-6">
                                <div className="al-about-archi-thumb height-1 fix mb-80">
                                    <img data-speed=".8" className="img-cover w-100" src="/assets/img/update/about/archi/1.jpg" alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-80">
                                <div className="al-about-archi-thumb height-1 fix">
                                    <img data-speed=".8" className="img-cover w-100" src="/assets/img/update/about/archi/2.jpg" alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="al-about-archi-content-wrapper ml-200 mr-100 tp_fade_anim" data-delay=".4">
                                    <p className="al-about-archi-para mb-35">De l&apos;étude initiale à la livraison, nous accompagnons chaque projet avec méthode, rigueur et sens des usages. Notre ambition : créer des réalisations fiables, utiles et durables, adaptées à leur territoire.</p>
                                    <SmartLink className="al-about-archi-link tp-left-right" href="/about-modern">En savoir plus{" "}
                                        <span className="tp-arrow-angle">
                                            <HeroArrowRightIcon />
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 custom-column-2">
                        <div className="al-about-archi-thumb height-2 fix">
                            <img data-speed=".8" className="img-cover w-100" src="/assets/img/update/about/archi/3.jpg" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureAbout;
