import Image from "next/image";

const faqs = [
    {
        id: "one",
        count: "01",
        question: "What industries do you serve?",
        open: true,
    },
    {
        id: "two",
        count: "02",
        question: "How do you protect client data and privacy?",
    },
    {
        id: "three",
        count: "03",
        question: "Do you provide support after the project is done?",
    },
    {
        id: "four",
        count: "04",
        question: "How long does an average AI project take?",
    },
    {
        id: "five",
        count: "05",
        question: "Is my data safe and secure?",
    },
];

const AiStartupFaq = () => {
    return (
        <div className="tp-faq-area tp-bg-common-black-5 pt-155 pb-100 p-relative z-index-1">
            <Image
                width={1351}
                height={1220}
                className="tp-faq-ai-noise img-fluid"
                src="/assets/img/body/noise.png"
                alt="noise image"
            />

            <div className="container">
                <div className="row">

                    <div className="col-lg-9 offset-lg-3">
                        <div className="tp-faq-ai-title-wrap mb-90">
                            <span className="text-anim tp-ff-inter fw-500 fs-18 ls-m-4 tp-text-common-white mb-10 d-inline-block">
                                / FAQ /
                            </span>

                            <h2 className="text-anim tp-section-ai-title fs-72 fs-xl-65 fs-lg-55 fs-sm-45 fs-xs-40 fw-600 ls-m-4 tp-ff-jakarta tp-text-common-white">
                                Explore Answers to<br /> Our Most Asked Questions
                            </h2>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-ai-tab-content">
                            <div className="accordion mb-60" id="general_faqaccordion">

                                {faqs.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className="accordion-item tp_fade_anim"
                                        data-delay=".3"
                                    >
                                        <h2
                                            className="accordion-header p-relative"
                                            id={`order_${faq.id}`}
                                        >
                                            <button
                                                className={`tp-faq-btn ${!faq.open ? "collapsed" : ""}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#order__collapse_${faq.id}`}
                                                aria-expanded={faq.open ? "true" : "false"}
                                                aria-controls={`order__collapse_${faq.id}`}
                                            >
                                                <span className="tp-faq-ai-count">{faq.count}</span>

                                                {faq.question}

                                                <span className="accordion-btn"></span>
                                            </button>
                                        </h2>

                                        <div
                                            id={`order__collapse_${faq.id}`}
                                            className={`accordion-collapse collapse ${faq.open ? "show" : ""
                                                }`}
                                            aria-labelledby={`order_${faq.id}`}
                                            data-bs-parent="#general_faqaccordion"
                                        >
                                            <div className="accordion-body tp-faq-details-para">
                                                <p>
                                                    Partnering with this AI agency was one of the best
                                                    decisions we’ve made. From the very first call,<br />
                                                    their team demonstrated deep technical knowledge and
                                                    a strong understanding.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupFaq;