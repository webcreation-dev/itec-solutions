"use client";
import {
    AbstractCircleShape,
    CycleDiagramShape,
    FlowPathShape,
    HeaderButtonArrow,
} from "@/svg";
import { VerticalLineDivider } from "@/svg/BorderLine";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";

const skills = [
    {
        icon: <AbstractCircleShape />,
        title: (
            <>
                Professional <span className="tp-text-common-white">Expertise</span>
            </>
        ),
        delay: ".4",
        fadeFrom: "left",
        ml: "",
    },
    {
        icon: <FlowPathShape />,
        title: (
            <>
                Cutting-Edge <span className="tp-text-common-white">Technology</span>
            </>
        ),
        delay: ".4",
        fadeFrom: "bottom",
        ml: "ml-30",
        border: true,
    },
    {
        icon: <CycleDiagramShape />,
        title: (
            <>
                Scalable <span className="tp-text-common-white">Solutions</span>
            </>
        ),
        delay: ".4",
        fadeFrom: "right",
        ml: "ml-60",
    },
];

const WebDesignAgencySkill = () => {
      const isDarkTheme = useIsDarkRoute();
        // -------------------------------
        // Theme-based styles 
        // -------------------------------
        const themeClasses = {
            sectionBgClass: isDarkTheme ? "tp-bg-grey-8" : "tp-bg-black",
            
        };
        const skillBgImage = !isDarkTheme
        ? "/assets/img/skill/bg.jpg"
        : null;
        // -------------------------------
        
    return (
        <div
            className={`tp-skill-area ${themeClasses.sectionBgClass} bg-position pt-100 pb-95 `}
            style={{ backgroundImage: `url(${skillBgImage})`}}
        >
            <div className="container">
                <div className="row">
                    {/* Header */}
                    <div className="col-lg-12">
                        <div className="text-center mb-60">
                            <h2 className="tp-ff-teko tp-text-perspective fw-600 fs-70 fs-sm-60 fs-xs-42 text-uppercase tp-text-common-white lh-1">
                                Proven Experience <br /> on Digital Platform.
                            </h2>
                        </div>
                    </div>

                    {/* Skill Cards */}
                    {skills.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div
                                className={`tp-skill-wd-item tpshake-wrap p-relative pb-50 pt-50 tp_fade_anim ${item.ml || ""}`}
                                data-delay={item.delay}
                                data-fade-from={item.fadeFrom}
                            >
                                {/* Border */}
                                {index < 2 && (
                                    <span
                                        className={`tp-skill-wd-border ${item.border ? "borders-2" : ""}`}
                                    >
                                        <VerticalLineDivider />
                                    </span>
                                )}

                                {/* Icon */}
                                <span className="tp-skill-wd-icon mb-35">{item.icon}</span>

                                {/* Title */}
                                <h3 className="tp-ff-teko fw-600 fs-35 fs-lg-30 tp-text-theme-primary mb-20">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="fs-18 tp-text-grey-2">
                                    Web design agencies bring a team of skilled professionals in design & development
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Bottom CTA */}
                    <div className="col-lg-12">
                        <div
                            className="tp-skill-wd-bottom text-center mt-35 tp_fade_anim"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <p className="tp-skill-wd-para fw-500 fs-18 tp-text-common-white">
                                Don&apos;t hesitate collaborate with expertise-
                                <SmartLink
                                    href="/contact"
                                    className="ml-40 d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation tp-text-theme-primary tp-ff-heading fw-500"
                                >
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">Let&apos;s Talk</span>
                                        <span className="btn-icon">
                                            <HeaderButtonArrow />
                                        </span>
                                        <span className="btn-icon">
                                            <HeaderButtonArrow />
                                        </span>
                                    </span>
                                </SmartLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencySkill;