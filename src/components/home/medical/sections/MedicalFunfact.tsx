import Image from "next/image";

const greenImages = [
    { src: "/assets/img/funfact/funfact-1.png", delay: ".3" },
    { src: "/assets/img/funfact/funfact-placeholder.png", delay: ".5" },
    { src: "/assets/img/funfact/funfact-placeholder.png", delay: ".7" },
    { src: "/assets/img/funfact/funfact-1-1.png", delay: ".9" },
    { src: "/assets/img/funfact/funfact-placeholder.png", delay: "1" },
    { src: "/assets/img/funfact/funfact-2.png", delay: "1.1" },
    { src: "/assets/img/funfact/funfact-3.png", delay: "1.2" },
    { src: "/assets/img/funfact/funfact-placeholder-2.png", delay: "1.3" },
];

const greenImages2 = [
    { src: "/assets/img/funfact/funfact-placeholder.png", delay: "1.4" },
    { src: "/assets/img/funfact/funfact-4.png", delay: "1.5" },
    { src: "/assets/img/funfact/funfact-5.png", delay: "1.6" },
    { src: "/assets/img/funfact/funfact-placeholder-2.png", delay: "1.7" },
];

const pinkImages = [
    { src: "/assets/img/funfact/funfact-1.png", delay: ".3" },
    { src: "/assets/img/funfact/funfact-2.png", delay: ".5" },
    { src: "/assets/img/funfact/funfact-3.png", delay: ".7" },
    { src: "/assets/img/funfact/funfact-placeholder-3.png", delay: ".9" },
    { src: "/assets/img/funfact/funfact-placeholder-3.png", delay: "1" },
    { src: "/assets/img/funfact/funfact-1-1.png", delay: "1.1" },
    { src: "/assets/img/funfact/funfact-placeholder-3.png", delay: "1.2" },
    { src: "/assets/img/funfact/funfact-placeholder-2.png", delay: "1.3" },
];

const pinkImages2 = [
    { src: "/assets/img/funfact/funfact-placeholder.png", delay: "1.4" },
    { src: "/assets/img/funfact/funfact-4.png", delay: "1.5" },
    { src: "/assets/img/funfact/funfact-placeholder-3.png", delay: "1.6" },
    { src: "/assets/img/funfact/funfact-5.png", delay: "1.7" },
];

const MedicalFunfact = () => {
    return (
        <div className="tp-funfact-area">
            <div className="tp-funfact-panel-wrap">
                {/* Green Panel */}
                <div className="tp-funfact-panel">
                    <div className="tp-funfact-green-wrap bg-position tp-text-bounce-trigger p-relative" style={{ backgroundImage: "url('/assets/img/funfact/bg.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tp-funfact-img-wrap">
                                        <div className="row gx-20">
                                            {greenImages.map((img, i) => (
                                                <div key={i} className="col-lg-3 col-sm-4 col-6">
                                                    <div className="tp-funfact-img mb-20 tp_fade_anim" data-delay={img.delay}>
                                                        <Image src={img.src} alt="funfact image" width={146} height={146} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="tp-funfact-content-wrap ml-85">
                                        <div className="tp-funfact-content tp_fade_anim" data-fade-from="right" data-delay="1.3">
                                            <span className="tp-funfact-subtitle d-inline-block tp-ff-dm fw-600 fs-16 tp-text-common-black-5">( Medical )</span>
                                            <h4 className="tp-funfact-title tp-ff-familjen fs-92 fs-xl-70 fs-lg-60 ls-m-4 tp-text-common-black-5">Real talk, <br /> real impact</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-funfact-img-wrap-2 p-relative">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row gx-20">
                                                    {greenImages2.map((img, i) => (
                                                        <div key={i} className="col-lg-6 col-sm-4 col-6">
                                                            <div className="tp-funfact-img mb-20 tp_fade_anim" data-delay={img.delay}>
                                                                <Image src={img.src} alt="funfact image" width={146} height={146} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="tp-funfact-big-img mb-20 tp-text-bounce" data-delay=".7">
                                                    <Image className="img-fluid" src="/assets/img/funfact/funfact-6.png" alt="funfact image" width={300} height={300} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="tp-funfact-content-wrap ml-85">
                                            <div className="tp-funfact-number">
                                                <span>
                                                    <span className="tp-text-bounce" data-delay="1">1</span>
                                                    <span className="tp-text-bounce" data-delay="1.3">0</span>
                                                    <i className="tp-text-bounce" data-delay="1.6">8</i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pink Panel */}
                <div className="tp-funfact-panel">
                    <div className="tp-funfact-green-wrap pink-style bg-position tp-text-bounce-trigger" style={{ backgroundImage: "url('/assets/img/funfact/bg-2.png')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tp-funfact-img-wrap">
                                        <div className="row gx-20">
                                            {pinkImages.map((img, i) => (
                                                <div key={i} className="col-lg-3 col-sm-4 col-6">
                                                    <div className="tp-funfact-img mb-20 tp_fade_anim" data-delay={img.delay}>
                                                        <Image src={img.src} alt="funfact image" width={146} height={146} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="tp-funfact-content-wrap ml-85">
                                        <div className="tp-funfact-content tp_fade_anim" data-fade-from="right" data-delay="1.3">
                                            <span className="tp-funfact-subtitle d-inline-block tp-ff-dm fw-600 fs-16 tp-text-common-white">( Medical )</span>
                                            <h4 className="tp-funfact-title tp-ff-familjen fs-92 fs-xl-70 fs-lg-60 ls-m-4 tp-text-common-white">Expert woman<br /> in medical.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-funfact-img-wrap-2 p-relative">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row gx-20">
                                                    {pinkImages2.map((img, i) => (
                                                        <div key={i} className="col-lg-6 col-sm-4 col-6">
                                                            <div className="tp-funfact-img mb-20 tp_fade_anim" data-delay={img.delay}>
                                                                <Image src={img.src} alt="funfact image" width={146} height={146} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="tp-funfact-big-img mb-20 tp-text-bounce" data-delay=".7">
                                                    <Image className="img-fluid" src="/assets/img/funfact/funfact-7.png" alt="funfact image" width={300} height={300} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="tp-funfact-content-wrap ml-85">
                                            <div className="tp-funfact-number">
                                                <span>
                                                    <span className="tp-text-bounce" data-delay="1">0</span>
                                                    <span className="tp-text-bounce" data-delay="1.3">8</span>
                                                    <i className="tp-text-bounce" data-delay="1.6">8</i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Yellow Panel */}
                <div className="tp-funfact-panel">
                    <div className="tp-funfact-green-wrap yellow-style bg-position tp-text-bounce-trigger h-100" style={{ backgroundImage: "url('/assets/img/funfact/bg-2.jpg')" }}>
                        <div className="container-fluid container-1646">
                            <div className="row">
                                <div className="col-12">
                                    <div className="tp-funfact-content-wrap p-relative z-index-1">
                                        <Image className="tp-funfact-yellow-shape tp_fade_anim d-none d-md-block" data-delay="1.6" src="/assets/img/funfact/funfact-1.png" alt="funfact image" width={146} height={146} />
                                        <Image className="tp-funfact-yellow-shape-2 tp_fade_anim d-none d-md-block" data-delay="1.7" src="/assets/img/funfact/funfact-2.png" alt="funfact image" width={146} height={146} />
                                        <Image className="tp-funfact-yellow-shape-3 tp_fade_anim d-none d-md-block" data-delay="1.8" src="/assets/img/funfact/funfact-5.png" alt="funfact image" width={146} height={146} />
                                        <Image className="tp-funfact-yellow-shape-4 tp_fade_anim d-none d-md-block" data-delay="1.9" src="/assets/img/funfact/funfact-3.png" alt="funfact image" width={146} height={146} />
                                        <div className="tp-funfact-number text-center">
                                            <h3 className="tp-ff-familjen fs-70 fs-xl-50 lh-1 ls-m-4 tp-text-common-black-5 mb-0 tp_fade_anim" data-delay=".3">Our Team,<br /> Your No. 1 Support</h3>
                                            <span className="tp_fade_anim" data-delay=".5"><em>#</em>Top1</span>
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

export default MedicalFunfact;
