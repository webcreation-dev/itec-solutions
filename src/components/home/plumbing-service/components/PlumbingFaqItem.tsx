import { FaqItemDT } from "@/types";

const PlumbingFaqItem: React.FC<FaqItemDT> = ({ id, show, question, answer }) => {
    const collapseId = `order__collapse_${id}`;
    const headerId = `order_${id}`;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header p-relative" id={headerId}>
                <button
                    className={`${show ? "tp-faq-btn" : "collapsed tp-faq-btn"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={show ? "true" : "false"}
                    aria-controls={collapseId}
                >
                    {question}
                    <span className="accordion-btn"></span>
                </button>
            </h2>
            <div
                id={collapseId}
                className={`accordion-collapse collapse ${show ? "show" : ""}`}
                aria-labelledby={headerId}
                data-bs-parent="#general_faqaccordion"
            >
                <div className="accordion-body tp-faq-details-para">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default PlumbingFaqItem;
