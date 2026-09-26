import { OutlineButton } from "@/components/ui";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        id: "one",
        question: "Services do you offer?",
        answer:
            "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    },
    {
        id: "two",
        question: "Is there a mobile app available?",
        answer:
            "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    },
    {
        id: "three",
        question: "Google mobile can monetize your app?",
        answer:
            "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    },
    {
        id: "four",
        question: "Do you offer customer support?",
        answer:
            "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    },
    {
        id: "five",
        question: "How quickly can I schedule a service?",
        answer:
            "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    },
    {
        id: "six",
        question: "Warranty on your work?",
        answer:
            "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
    },
];

const Faq = () => {
    return (
        <section className="cst-faq-ptb p-relative pt-140 pb-120">
            <div className="container container-1524">
                <div className="row">

                    {/* Left Content */}
                    <div className="col-lg-5">
                        <div className="cst-faq-heading p-relative mb-50">
                            <span
                                className="cst-section-subtitle mb-10 tp_fade_anim"
                                data-delay="0.3"
                            >
                                Faq
                            </span>
                            <h4
                                className="cst-section-title mb-50 tp_fade_anim"
                                data-delay="0.5"
                            >
                                Comprehensive <br /> Handyman Solutions
                            </h4>
                            <div
                                className="cst-faq-btn tp_fade_anim"
                                data-delay="0.7"
                            >
                                <OutlineButton href="/team" className="cst-btn black-t" text="Join Team Member" />
                            </div>
                        </div>
                    </div>

                    {/* Right Accordion */}
                    <div className="col-lg-7">
                        <div className="cst-faq-wrap pl-70">
                            <div
                                className="ai-faq-accordion-wrap tp_fade_anim"
                                data-delay="0.3"
                                data-fade-from="right"
                                data-ease="bounce"
                            >
                                <div className="accordion" id="faqAccordion">
                                    {faqData.map((item, index) => {
                                        const collapseId = `collapse-${item.id}`;
                                        const headingId = `heading-${item.id}`;
                                        const isFirst = index === 0;

                                        return (
                                            <div className="accordion-items" key={item.id}>
                                                <h2 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`accordion-buttons ${!isFirst ? "collapsed" : ""}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isFirst}
                                                        aria-controls={collapseId}
                                                    >
                                                        {item.question}
                                                        <span className="accordion-icon"></span>
                                                    </button>
                                                </h2>

                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;