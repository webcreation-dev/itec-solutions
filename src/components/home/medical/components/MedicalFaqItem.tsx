interface MedicalFaqItemProps {
    id: string;
    question: string;
    answer: React.ReactNode;
    isOpen?: boolean;
    parentId: string;
    headerId: string;
}

const MedicalFaqItem: React.FC<MedicalFaqItemProps> = ({ id, question, answer, isOpen = false, parentId, headerId }) => {
    return (
        <div className="accordion-item tp_fade_anim" data-delay=".4">
            <h2 className="accordion-header p-relative" id={headerId}>
                <button
                    className={isOpen ? "tp-faq-btn" : "collapsed tp-faq-btn"}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls={id}
                >
                    {question}
                    <span className="accordion-btn"></span>
                </button>
            </h2>
            <div
                id={id}
                className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                aria-labelledby={headerId}
                data-bs-parent={`#${parentId}`}
            >
                <div className="accordion-body tp-faq-details-para">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default MedicalFaqItem;
