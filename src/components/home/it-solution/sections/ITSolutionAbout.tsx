"use client";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";
import { useIsDarkRoute } from "@/hooks";

const ITSolutionAbout = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // about styles 
    // -------------------------------
    const aboutStyles = {
        textColor: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyColor: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
    };
    // -------------------------------
    return (
        <div className="tp-about-area pt-160">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-about-it-content-wrap mb-40">
                            <span className={`tp-about-it-subtitle tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 ${aboutStyles.textColor} fs-18 mb-90`}> What I Do</span>
                            <div className="tp-about-it-expreance-wrap p-relative">
                                <span className="tp-about-it-blur"></span>
                                <h2 className={`tp-about-it-expreance tp-ff-inter fw-600 ls-m-4 mb-0 lh-1 ${aboutStyles.textColor}   `}>
                                    <AnimatedCounter min={0} max={15} />+
                                </h2>
                                <div className="tp-about-it-feature">
                                    <span className="feature-1">Evaluation</span>
                                    <span className="feature-2">Optimization</span>
                                    <span className="feature-3">Consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-about-it-content mb-40">
                            <h2 className={`tp-text-revel-anim fix fs-60 fs-xs-40 tp-ff-inter lh-120-per ls-m-4 ${aboutStyles.textColor} mb-40`}>We&apos;re Aleric IT<br /> Solutions Agency</h2>
                            <div className="tp-about-it-rating-wrap mb-50">
                                <div className="tp-about-it-total-rating">
                                    <h3 className={`tp-ff-inter  fs-40 lh-1 mb-5 ls-m-4 ${aboutStyles.textColor}`}>4.9</h3>
                                    <span className={`tp-ff-inter fs-15 ${aboutStyles.textColor}`}> (1.2k Reviews)</span>
                                </div>
                                <div className="tp-about-it-rating">
                                    <span className={`fw-500 mb-5 fs-14 ls-m-4 tp-ff-inter d-block ${aboutStyles.textColor}`}>Average Rating</span>
                                    <span className="rating">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </span>
                                </div>
                            </div>
                            <p className={`fs-18 tp-ff-inter lh-150-per mb-50 ${aboutStyles.bodyColor}`}>“Aleric delivered exactly what we needed — efficient, reliable, and results-driven solutions. We’ve seen measurable improvements since partnering with
                                them we bring ideas to life with creativity, precision, and impact.”</p>
                            <div className="tp-about-it-author">
                                <h6 className={`fw-600 fs-25 ${aboutStyles.textColor} tp-ff-inter mb-5`}>John Doe</h6>
                                <span className={`tp-ff-inter fs-18 ${aboutStyles.bodyColor}`}>CEO, InnovateTech</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionAbout;