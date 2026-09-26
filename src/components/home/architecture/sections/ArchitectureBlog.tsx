import ArchitectureBlogItem from "../components/ArchitectureBlogItem";
import { blogData } from "@/data/blog-data";

const ArchitectureBlog = () => {
    // Retrieve architecture blog items for rendering
    const blogs = blogData.architecture;

    return (
        <div className="al-blog-archi-area pt-150 pb-115">
            <div className="container">
                <div className="row align-items-center mb-35">
                    <div className="col-lg-7 mb-30">
                        <div className="al-section-archi-title-wrapper">
                            <h2
                                className="al-section-archi-title mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                <span className="ml-30">Nos </span>
                                <br /> actualités
                            </h2>
                            <span
                                className="al-section-archi-subtitle tp_fade_anim"
                                data-delay=".4"
                            >
                                05 - À la une
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div
                            className="al-section-archi-content mr-85 tp_fade_anim"
                            data-delay=".6"
                        >
                            <p className="m-0">
                                Découvrez les réflexions, projets et initiatives qui portent le développement d&apos;ITEC Solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* BLOG LIST */}
                <div className="row">
                    {blogs.map((item, i) => (
                        <ArchitectureBlogItem key={i} {...item} type="architecture" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchitectureBlog;
