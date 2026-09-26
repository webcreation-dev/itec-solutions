const accordionData = [
    {
        title: "What we do?",
        content:
            "Our tools are easy to use and affordable, so you can start improving your website's SEO today.",
    },
    {
        title: "How we do it?",
        content:
            "Our tools are easy to use and affordable, so you can start improving your website's SEO today.",
    },
    {
        title: "How can I download the products?",
        content:
            "Our tools are easy to use and affordable, so you can start improving your website's SEO today.",
    },
    {
        title: "Free Shipping & Return Order",
        content:
            "Our tools are easy to use and affordable, so you can start improving your website's SEO today.",
    },
    {
        title: "Payment options",
        content:
            "Our tools are easy to use and affordable, so you can start improving your website's SEO today.",
    },
];

const SeoAccordion = () => {
    return (
        <div className="accordion" id="accordionExample">
            {accordionData.map((item, index) => {
                const collapseId = `collapse-${index}`;
                const headingId = `heading-${index}`;
                const isFirst = index === 0;

                return (
                    <div className="accordion-items" key={index}>
                        <h2 className="accordion-header" id={headingId}>
                            <button
                                className={`accordion-buttons ${!isFirst ? "collapsed" : ""}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${collapseId}`}
                                aria-expanded={isFirst ? "true" : "false"}
                                aria-controls={collapseId}
                            >
                                {item.title}
                                <span className="accordion-icon"></span>
                            </button>
                        </h2>

                        <div
                            id={collapseId}
                            className={`accordion-collapse collapse ${isFirst ? "show" : ""
                                }`}
                            data-bs-parent="#accordionExample"
                            aria-labelledby={headingId}
                        >
                            <div className="accordion-body">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SeoAccordion;