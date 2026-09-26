"use client";
import { useIsDarkRoute } from "@/hooks";
import ProjectItem from "../components/ProjectItem";
import portfolioData from "@/data/portfolio-data";

const SeoAgencyProject = () => {
    // Retrieve Seo Agency portfolio items for rendering
    const portfolios = portfolioData.seoAgency;
    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute();
    const backgroundColor = !isDark ? "#002b3b" : "";
    const bgClass = isDark ? "tp-bg-grey-8" : "";

    return (
        <section
            className={`al-project-seo-area pt-120 pb-110 ${bgClass}`}
            style={{ backgroundColor: backgroundColor }}
        >
            <div className="container">
                {/* Section Title */}
                <div className="row">
                    <div className="col-xl-9">
                        <div className="al-project-seo-title-box mb-65">
                            <span className="al-section-subtitle fs-12 mb-20">
                                Work With Us
                            </span>
                            <h4 className="al-section-title mb-0 text-white tp-text-revel-anim fix">
                                This case study tells the story of a business that expanded into
                                new markets.
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Project List */}
                <div className="row">
                    <div className="col-xl-12">
                        {portfolios.map((project, index) => (
                            <ProjectItem key={project.id} {...project} index={index} type="seoAgency" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAgencyProject;