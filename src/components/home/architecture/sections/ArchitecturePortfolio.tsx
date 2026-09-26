import ArchitectureProjectItem from "../components/ArchitectureProjectItem";
const projects = [
    {
        img: "/assets/img/update/project/04.jpg",
        year: "Études",
        title: (
            <>
                Études techniques <br /> & maîtrise d&apos;œuvre
            </>
        ),
        colClass: "col-xxl-4 col-xl-6 col-lg-6",
    },
    {
        img: "/assets/img/update/project/01.jpg",
        year: "BTP",
        title: (
            <>
                Construction <br /> de bâtiments
            </>
        ),
        colClass: "/col-xxl-8 col-xl-6 col-lg-6",
    },
    {
        img: "/assets/img/update/project/02.jpg",
        year: "Immobilier",
        title: (
            <>
                Développement <br /> immobilier
            </>
        ),
        colClass: "col-xxl-8 col-xl-6 col-lg-6",
    },
    {
        img: "/assets/img/update/project/03.jpg",
        year: "Partenariats",
        title: (
            <>
                Coordination <br /> de projets
            </>
        ),
        colClass: "col-xxl-4 col-xl-6 col-lg-6",
    },
];

const ArchitecturePortfolio = () => {
    return (
        <div className="al-project-archi-area pt-150 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xx-6 col-xl-8 col-lg-10 col-12">
                        <div className="al-section-archi-title-wrapper mb-50">
                            <h2
                                className="al-section-archi-title mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                <span className="ml-30"> Nos</span>
                                <br /> savoir-faire
                            </h2>

                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <span
                                        className="al-section-archi-subtitle tp_fade_anim"
                                        data-delay=".4"
                                    >
                                        03 - Nos pôles
                                    </span>
                                </div>

                                <div className="col-md-8 col-12">
                                    <div
                                        className="al-section-archi-content tp_fade_anim"
                                        data-delay=".5"
                                    >
                                        <p>
                                            Des compétences complémentaires pour concevoir, réaliser
                                            et développer des projets exigeants, du premier croquis
                                            jusqu&apos;à leur mise en service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-1750">
                <div className="row gx-30">
                    {projects.map((item, i) => (
                        <ArchitectureProjectItem key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchitecturePortfolio;
