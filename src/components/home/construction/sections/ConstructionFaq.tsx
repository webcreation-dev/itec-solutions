import { SmartLink } from "@/components/common";
import { ArrowIconThree } from "@/svg";

const awards = [
    {
        year: "2005",
        title: "Architecture project of the year",
        delay: ".3",
    },
    {
        year: "2010",
        title: "Architecture MasterPriz",
        delay: ".4",
    },
    {
        year: "2014",
        title: "Best project of the year",
        delay: ".5",
    },
    {
        year: "2020",
        title: "Architecture MasterPrize",
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
                                Through a <br />
                                unique combination <br />
                                of engineering,
                            </h3>

                            <div className="cnt-faq-btn tp_fade_anim" data-delay=".5">
                                <SmartLink
                                    className="upd-btn-black-square cnt-btn-style style-2 btn-transparent"
                                    href="/service-2"
                                >
                                    <i>
                                        <ArrowIconThree />
                                        <ArrowIconThree />
                                    </i>

                                    <span>
                                        <span className="text-1">Explore Services</span>
                                        <span className="text-2">Explore Services</span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-lg-6">
                        <div className="ar-award-right-wrap cnt-faq-wrap">
                            {awards.map((item, index) => (
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