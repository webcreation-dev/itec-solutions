import Image from "next/image";

const PhotographerAbout = () => {
    return (
        <div className="al-about-pg-area black-bg-6 pt-150 pb-200">
            <div className="container container-1320">
                <div className="al-about-pg-border">
                    <div className="row align-items-end">
                        <div className="col-xl-2">
                            <div className="al-about-pg-subtitle-box">
                                <span className="al-section-pg-subtitle"><i>ABOUT ME</i></span>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-8">
                            <div className="al-about-pg-title-box">
                                <h2 className="al-section-pg-title mb-20 tp_text_invert invert-black-7">EMMA MITCHELL</h2>
                                <p className="tp_text_invert invert-black-7">I have expanded in comparison for faced here with an open form in a state of phase
                                    transition.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 d-none d-md-block">
                            <div className="al-about-pg-shape text-end">
                                <Image width={120} height={120} src="/assets/img/update/about/pg/shape.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="al-about-pg-thumb text-end">
                            <Image width={356} height={417} src="/assets/img/update/about/pg/thumb.jpg" alt="thumb" data-speed="1.1" data-lag="0" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="al-about-pg-content-wrap">
                            <div className="al-about-pg-content">
                                <p>Photography was always my passion and my dream job. It&apos;s even difficult for me to call it
                                    a job, as I consider my profession as a hobby of my life. New people, catching their mood
                                    being part of the happiest momentы of their life. Kale chips subway tile before direct
                                    trade cliched hammock kinfolk deep photography.</p>
                            </div>
                            <div className="al-about-pg-funfact d-flex justify-content-between align-items-center p-relative">
                                <span className="border-line"></span>
                                <div className="al-about-pg-funfact-item d-flex flex-wrap">
                                    <span className="cols">
                                        <i>Years</i>
                                        <em>17<span>+</span></em>
                                    </span>
                                    <span className="cols">
                                        <i>People</i>
                                        <em>100<span>+</span></em>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4">
                        <div className="al-about-pg-thumb-2 text-md-end pt-100">
                            <Image width={180} height={224} src="/assets/img/update/about/pg/thumb-2.jpg" alt="thumb-2" data-speed="0.8" data-lag="0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotographerAbout;