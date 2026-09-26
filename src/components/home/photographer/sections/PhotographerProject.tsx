"use client";
import ProjectItem from "../components/ProjectItem";

const projects = [
    {
        title: "Brand Promotion",
        image: "/assets/img/update/project/pg/project.jpg",
        href: "/portfolio-details-creative",
    },
    {
        title: "Commercial",
        image: "/assets/img/update/project/pg/project-2.jpg",
        href: "/portfolio-details-creative",
    },
    {
        title: "Wedding",
        image: "/assets/img/update/project/pg/project-3.jpg",
        href: "/portfolio-details-creative",
    },
    {
        title: "Portrait",
        image: "/assets/img/update/project/pg/project-4.jpg",
        href: "/portfolio-details-creative",
    },
];

const PhotographerProject = () => {
    return (
        <section
            className="al-project-pg-area pb-200 section-m-spacing"
            style={{ backgroundColor: "#121314" }}>
            <div className="container-fluid container-1750">
                {/* Top Section */}
                <div className="al-project-pg-top-wrap mb-70">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="al-project-pg-text">
                                <span>Scroll to Explore</span>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="al-project-pg-text text-start text-sm-end">
                                <span>Selected Case Studies ({projects.length})</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project List */}
                <div className="al-project-pg-wrapper">
                    <div className="al-project-pg-inner-wrap">
                        {projects.map((project, index) => (
                            <ProjectItem key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographerProject;