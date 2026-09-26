
interface ArchitectureFaqItemProps {
    item: {
        id: string,
        title: string,
        isOpen: boolean,
    }
}
const ArchitectureFaqItem: React.FC<ArchitectureFaqItemProps> = ({ item }) => {
    return (
        <div
            className="accordion-item al-choose-archi-faq-list tp_fade_anim"
            data-delay=".3">
            <h2 className="accordion-header" id={`order_${item.id}`}>
                <button
                    className={`accordion-button al-choose-archi-faq-btn ${item.isOpen ? "" : "collapsed"
                        }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#order__collapse_${item.id}`}
                    aria-expanded={item.isOpen}
                    aria-controls={`order__collapse_${item.id}`}
                >
                    {item.title}
                    <span className="accordion-btn"></span>
                </button>
            </h2>
            <div
                id={`order__collapse_${item.id}`}
                className={`accordion-collapse collapse ${item.isOpen ? "show" : ""
                    }`}
                aria-labelledby={`order_${item.id}`}
                data-bs-parent="#general_faqaccordion"
            >
                <div className="accordion-body al-choose-archi-details-para p-relative">
                    <p>
                        ITEC coordonne les compétences utiles afin de garder une vision claire des priorités, des interfaces et des décisions à chaque étape du projet.
                    </p>
                    <span className="p-absolute">
                        <i className="flaticon-policy"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default ArchitectureFaqItem;
