import SeoAnalysisForm from "../components/SeoAnalysisForm";
import SeoAccordion from "../components/SeoAccordion";

const SeoAgencyFaq = () => {
    return (
        <div className="al-faq-area pt-130 pb-140">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-5 col-lg-5">
                        <div className="al-faq-title-box mb-80">
                            <span className="al-section-subtitle fs-12 mb-20">Have a question?</span>
                            <h4 className="al-section-title tp-text-revel-anim fix">We are the ones who make the impossible possible.</h4>
                        </div>
                        <div className="al-faq-wrapper">
                            {/* FAQ Accordion */}
                            <SeoAccordion />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="al-faq-form-box">
                            <div className="al-faq-form-wrap">
                                <div className="al-faq-form-content mb-45">
                                    <h4 className="al-faq-form-title mb-10">Claim Your Complimentary SEO Analysis Today!</h4>
                                    <p>Get help from a team of experts if you need it</p>
                                </div>
                                {/* FAQ Form */}
                                <SeoAnalysisForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoAgencyFaq;