import Image from "next/image";
import ArchitectureFaqItem from "./ArchitectureFaqItem";

const faqItems = [
    {
        id: "one",
        title: "Une approche intégrée",
        isOpen: true,
    },
    {
        id: "two",
        title: "Des équipes pluridisciplinaires",
        isOpen: false,
    },
    {
        id: "three",
        title: "Un suivi rigoureux",
        isOpen: false,
    },
];

const ArchitectureChoose = () => {
    return (
        <div
            className="al-choose-archi-area z-index-1 p-relative pt-150 pb-100"
            style={{ backgroundColor: "#1c1d21" }}>
            <Image width={565} height={626}
                className="al-choose-archi-shape d-none d-xxl-block p-absolute img-fluid"
                src="/assets/img/update/faq/vector.png"
                alt="shape"
            />
            <div className="container">
                <div className="row align-items-center mb-35">
                    <div className="col-lg-7 mb-30">
                        <div className="al-section-archi-title-wrapper">
                            <h2
                                className="al-section-archi-title tp-text-common-white mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                <span className="ml-30"> Notre</span>
                                <br /> engagement
                            </h2>

                            <span
                                className="al-section-archi-subtitle tp-text-theme-secondary tp_fade_anim"
                                data-delay=".4"
                            >
                                04 - Pourquoi ITEC
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-30">
                        <div
                            className="al-section-archi-content mr-85 tp_fade_anim"
                            data-delay=".5"
                        >
                            <p className="tp-text-common-white-2">
                                Nous plaçons la qualité d&apos;exécution, la maîtrise des délais et le dialogue avec chaque partenaire au cœur de notre manière de travailler.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7 pb-50">
                        <div className="al-choose-archi-thumb fix">
                            <img
                                data-speed=".8"
                                className="img-cover w-100"
                                src="/assets/img/update/faq/thumb.jpg"
                                alt="choose"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 pb-50">
                        <div className="al-choose-archi-faq">
                            <div className="accordion pb-30" id="general_faqaccordion">
                                {faqItems.map((item) => (
                                    <ArchitectureFaqItem key={item.id} item={item} />
                                ))}
                            </div>
                            <div className="al-choose-archi-expreance tp_fade_anim" data-delay=".3">
                                <h2>01</h2>
                                <h5>
                                    vision<br /> commune
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureChoose;
