import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Cta = () => {
    return (
        <div className="cst-cta-ptb">
            <div className="container container-1524">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cst-cta-wrapper">
                            <div className="cst-cta-thumb">
                                <Image width={1500} height={796} src="/assets/img/update-2/cta/thumb-1.jpg" alt="thumb img" />
                            </div>
                            <div className="cst-cta-content">
                                <span className="cst-section-subtitle mb-10">Schedule Consultation</span>
                                <h4 className="cst-section-title mb-15">{`Let's`} connect</h4>
                                <p className="cst-cta-content-text">Track Your Income and Expenses: With our app, you can easily track your income and expenses.</p>
                                <div className="cst-cta-input-box">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;