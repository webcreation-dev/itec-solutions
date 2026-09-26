import { SmartLink } from "@/components/common";
import { ArrowIconThree } from "@/svg";

const projectStages = [
    {
        year: "01",
        title: "Étudier la faisabilité et les besoins",
        delay: ".3",
    },
    {
        year: "02",
        title: "Structurer le programme et le montage",
        delay: ".4",
    },
    {
        year: "03",
        title: "Coordonner les partenaires et les études",
        delay: ".5",
    },
    {
        year: "04",
        title: "Suivre la réalisation jusqu’à la livraison",
        delay: ".6",
    },
];

const ConstructionFaq = () => {
    return (
        <div className="cnt-faq-ptb pt-130 pb-140">
            <div className="container container-1320">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-lg-6">
                        <div className="cnt-faq-heading mb-50">
                            <h3
                                className="tp-section-title-clash-600 fs-60 fw-500 mb-0 pb-40 tp_fade_anim"
                                data-delay=".4"
                            >
                                Une méthode <br />
                                de projet claire, <br />
                                de l’idée au chantier.
                            </h3>

                            <div className="cnt-faq-btn tp_fade_anim" data-delay=".5">
                                <SmartLink
                                    className="upd-btn-black-square cnt-btn-style style-2 btn-transparent"
                                    href="/contact"
                                >
                                    <i>
                                        <ArrowIconThree />
                                        <ArrowIconThree />
                                    </i>

                                    <span>
                                        <span className="text-1">Échanger avec ITEC</span>
                                        <span className="text-2">Échanger avec ITEC</span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-lg-6">
                        <div className="ar-award-right-wrap cnt-faq-wrap">
                            {projectStages.map((item, index) => (
                                <div
                                    key={index}
                                    className="ar-award-item tp_fade_anim"
                                    data-delay={item.delay}
                                >
                                    <div className="row align-items-center">
                                        <div className="col-md-9">
                                            <div className="ar-award-box-left z-index-3 p-relative">
                                                <span className="ar-award-year">{item.year}</span>
                                                <span className="ar-award-title">{item.title}</span>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="ar-award-box-right z-index-3 p-relative text-md-end w-100">
                                                <span className="ar-award-icon">
                                                    <ArrowIconThree />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Side End */}
                </div>
            </div>
        </div>
    );
};

export default ConstructionFaq;
