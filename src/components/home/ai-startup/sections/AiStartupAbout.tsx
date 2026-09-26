"use client";
import AiCustomButton from "../components/AiCustomButton";
import { useIsDarkRoute } from "@/hooks";

const AiStartupAbout = () => {
    const isDarkRoute = useIsDarkRoute();

    // Meaningful names for colors based on usage
    const mainTextColor = isDarkRoute
        ? "tp-text-common-white"
        : "tp-text-common-black-6"; // for main heading
    const highlightShapeColor = isDarkRoute ? "currentColor" : "#111112"; // for shapes behind text
    const paragraphTextColor = isDarkRoute ? "tp-text-grey-2" : "tp-text-common-black-6"; // for paragraph content
    const sectionLabelColor = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-5"; // for "/ Our About /"
    const aiTagColor = isDarkRoute ? "tp-text-common-white" : ""; // for small AI tag

    return (
        <div className="tp-about-area pt-150 pb-130 p-relative z-index-1">
            <img className="tp-about-ai-ring p-absolute" src="/assets/img/about/ai/ring.png" alt="ring" />
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-about-ai-text-wrap mb-80 text-center">
                            <h3 className={`tp-about-ai-text tp-ff-jakarta fw-600 fs-72 fs-xl-60 fs-md-38 lh-120-per ls-m-4 ${mainTextColor}`}>We empower businesses{" "}
                                <span className="has-scale-image hide-ball" data-img="/assets/img/about/ai/shape.png" style={{ backgroundColor: highlightShapeColor }}></span>{" "}
                                and start stay ahead of{" "}<span className="has-scale-image hide-ball" data-img="/assets/img/about/ai/shape-2.png" style={{ backgroundColor: highlightShapeColor }}></span>{" "}
                                the by building intelligent, scalable solutions that solve real-world{" "} <span className="has-scale-image hide-ball" data-img="/assets/img/about/ai/shape-3.png" style={{ backgroundColor: highlightShapeColor }}></span>{" "}
                                problems. From strategy to deployment.</h3>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="tp-about-ai-subtitle mb-30 text-lg-center tp_fade_anim" data-delay=".3">
                            <span className={`tp-ff-inter fw-500 fs-18 ls-m-4 ${sectionLabelColor}`}>/ Our About /</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-about-ai-content mb-30">
                            <h2 className="tp-about-ai-title fw-600 tp-ff-jakarta ls-m-4 d-flex align-items-start mb-35 tp_fade_anim" data-delay=".3"><span className="title-slide-gradient">Aleric</span> <span className={`aleric-ai fs-22 ls-0 mt-35 ${aiTagColor}`}>AI</span></h2>
                            <div className="tp_fade_anim" data-delay=".5">
                                <p className={`tp-about-ai-para tp-ff-dm mb-55 fw-400 fs-22 ls-m-2 lh-150-per ${paragraphTextColor}`}>From strategy to deployment, we fuse cutting-edge technology with creative<br />
                                    thinking to craft digital products that learn, adapt, and evolve — helping our clients<br />
                                    innovate faster, operate smarter, and deliver better experiences to their users.<br />
                                    Whether {`it's`} automating workflows, enhancing customer interactions.</p>
                            </div>
                            <div className="tp_fade_anim" data-delay=".7" data-fade-from="bottom" data-ease="bounce">
                                <AiCustomButton buttonText="Get started" href="/about-modern" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiStartupAbout;