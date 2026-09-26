"use client";
import ProjectItemTwo from "../components/ProjectItemTwo";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const projects = [
    {
        title: "Wedding",
        category: "Collections / Design / Wedding",
        image: "/assets/img/update/project/pg-2/wedding.jpg",
        year: "2025",
    },
    {
        title: "Event",
        category: "Collections / Design / Event",
        image: "/assets/img/update/project/pg-2/event.jpg",
        year: "2025",
    },
    {
        title: "Family Shoots",
        category: "Collections / Design / Wedding",
        image: "/assets/img/update/project/pg-2/family.jpg",
        year: "2025",
    },
    {
        title: "Cosmetic Store",
        category: "Collections / Design / Wedding",
        image: "/assets/img/update/project/pg-2/cosmetic.jpg",
        year: "2025",
    },
    {
        title: "Fashion",
        category: "Collections / Design / Wedding",
        image: "/assets/img/update/project/pg-2/fashion.jpg",
        year: "2025",
    },
];

const PhotographerProjectTwo = () => {
    // Determine if the current route is a dark route
    const isdark = useIsDarkRoute();
    const wrapperClass = isdark ? "black-bg-6 section-m-spacing" : "";

    return (
        <section className={`al-project-pg-2-area pt-150 pb-150 ${wrapperClass}`}>
            <div className="container container-1320">
                {/* Title Section */}
                <div className="al-project-pg-2-title-wrap mb-90">
                    <div className="row align-items-end">
                        <div className="col-xl-2">
                            <div className="al-about-pg-subtitle-box">
                                <span className="al-section-pg-subtitle">EXPERTISE</span>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-8">
                            <div className="al-about-pg-title-box">
                                <h2 className="al-section-pg-title mb-20 tp_text_invert invert-black-7">
                                    EMMA MITCHELL
                                </h2>
                                <p className="tp_text_invert invert-black-7">
                                    [ The Projects I&apos;ve Been Primarily Focused On Lately. ]
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 d-none d-md-block">
                            <div className="al-about-pg-shape text-end">
                                <Image
                                    src="/assets/img/update/about/pg/shape.png"
                                    alt="Shape"
                                    width={120}
                                    height={120}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project List */}
                <div className="row">
                    <div className="offset-xl-3 col-xl-9">
                        <div className="al-project-pg-2-wrap">
                            {projects.map((project, index) => (
                                <ProjectItemTwo {...project} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographerProjectTwo;