"use client";
import { CircleSegmentSmallIcon, CircularProgressBadgeIcon, DashedCircleIcon } from "@/svg";
import SkillTextSlider from "../components/SkillTextSlider";
import { useIsDarkRoute } from "@/hooks";

const PlumbingServiceSkill = () => {
    const isDarkMode = useIsDarkRoute();
    // -------------------------------
    // Theme-based Styles
    // -------------------------------
    const skillStyles = {
        sectionBg: isDarkMode ? "#1A1B1E" : "#f3f1f2",
        primaryText: isDarkMode ? "tp-text-common-white" : "tp-text-common-black-5",
        badgeBg: isDarkMode ? "tp-bg-common-white" : "tp-bg-common-black-5",
        badgeText: isDarkMode ? "tp-text-common-black" : "tp-text-common-white"
    };

    return (
        <div className="tp-skill-area">
            <div className="tp-skill-pb-panel-wrap d-flex">
                <div className="tp-skill-pb-panel">
                    <div className="tp-skill-pb-border pt-90 pb-110" style={{ backgroundColor: "#111112" }}>
                        <SkillTextSlider />
                        <div className="container-fluid container-1646">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="tp-skill-pb-old-new mb-30">
                                        <div className="tp-skill-pb-invert d-flex align-items-center mb-15">
                                            <span className="tp-skill-pb-numbar tp-bg-theme-secondary tp-ff-sora fw-700 fs-24 rounded-circle tp-text-common-white mr-25">1</span>
                                            <span className="tp-text-grey-5 opacity-8 tp-ff-inter fw-400 fs-24 ls-m-4">The old world</span>
                                        </div>
                                        <div className="tp-skill-pb-invert d-flex align-items-center">
                                            <span className="tp-skill-pb-numbar tp-border tp-ff-sora fw-700 fs-24 rounded-circle tp-text-common-white mr-25">2</span>
                                            <span className="tp-text-grey-5 opacity-8 tp-ff-inter fw-400 fs-24 ls-m-4">The new world</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tp-skill-pb-para mb-30 ml-60">
                                        <p className="tp-ff-inter  ls-m-3 text-capitalize tp-text-grey-5 opacity-8">help businesses align their technology long-term goals<br />
                                            through expert consulting smart strategy.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tp-skill-pb-circale-wrap d-flex align-items-center justify-content-end">
                                        <div className="tp-skill-pb-circale circale-1 p-relative">
                                            <div className="text-center">
                                                <span className="tp-ff-sora fw-600 fs-16 ls-m-4 text-uppercase tp-text-common-black-5">Scroll</span>
                                                <h6 className="tp-ff-sora fw-600 fs-40 ls-m-4 text-uppercase tp-text-common-black-5">Down</h6>
                                            </div>
                                            <span className="tp-skill-pb-doted scrool-rotate-img">
                                                <DashedCircleIcon />
                                            </span>
                                        </div>
                                        <div className="tp-skill-pb-circale circale-2 p-relative d-inline-block">
                                            <span className="tp-skill-pb-circale-content tp-ff-sora fw-600 fs-24 ls-m-4 tp-text-common-white text-capitalize">community building</span>
                                            <CircularProgressBadgeIcon />
                                        </div>
                                        <div className="tp-skill-pb-circale circale-3 p-relative d-inline-block">
                                            <span className="tp-skill-pb-circale-content tp-ff-sora fw-600 fs-24 ls-m-4 tp-text-common-white text-capitalize">customers</span>
                                            <CircleSegmentSmallIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-skill-pb-panel">
                    <div className="tp-skill-pb-border tp-skill-pb-border-2  pt-90 pb-110"
                        style={{ backgroundColor: skillStyles.sectionBg }}>
                        <SkillTextSlider titleColor={skillStyles.primaryText} subTitle="tp-text-theme-secondary" />
                        <div className="container-fluid container-1646">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="tp-skill-pb-old-new mb-30">
                                        <div className="tp-skill-pb-invert d-flex align-items-center mb-15">
                                            <span className={`tp-skill-pb-numbar tp-border tp-ff-sora fw-700 fs-24 rounded-circle ${skillStyles.primaryText} mr-25`}>1</span>
                                            <span className={`${skillStyles.primaryText} opacity-8 tp-ff-inter fw-400 fs-24 ls-m-4`}>The old world</span>
                                        </div>
                                        <div className="tp-skill-pb-invert d-flex align-items-center">
                                            <span className={`tp-skill-pb-numbar ${skillStyles.badgeBg} tp-ff-sora fw-700 fs-24 rounded-circle ${skillStyles.badgeText} mr-25`}>2</span>
                                            <span className={`${skillStyles.primaryText} opacity-8 tp-ff-inter fw-400 fs-24 ls-m-4`}>The new world</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="tp-skill-pb-para mb-30 ml-60">
                                        <p className={`tp-ff-inter  ls-m-3 text-capitalize ${skillStyles.primaryText} opacity-8`}>help businesses align their technology long-term goals<br />
                                            through expert consulting smart strategy.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tp-skill-pb-circale-wrap d-flex align-items-center justify-content-end">
                                        <div className="tp-skill-pb-circale circale-1 p-relative">
                                            <div className="text-center">
                                                <span className="tp-ff-sora fw-600 fs-16 ls-m-4 text-uppercase tp-text-common-white">Scroll</span>
                                                <h6 className="tp-ff-sora fw-600 fs-40 ls-m-4 text-uppercase tp-text-common-white">Down</h6>
                                            </div>
                                            <span className="tp-skill-pb-doted scrool-rotate-img">
                                                <DashedCircleIcon fillColor="#F3F1F2" />
                                            </span>
                                        </div>
                                        <div className="tp-skill-pb-circale circale-2 p-relative d-inline-block">
                                            <span className="tp-skill-pb-circale-content tp-ff-sora fw-600 fs-24 ls-m-4 tp-text-common-black-5 text-capitalize">community building</span>
                                            <CircularProgressBadgeIcon fillColor="#111112" fillColorTwo="#F3F1F2" strokeColor="#111112" />
                                        </div>
                                        <div className="tp-skill-pb-circale circale-3 p-relative d-inline-block">
                                            <span className="tp-skill-pb-circale-content tp-ff-sora fw-600 fs-24 ls-m-4 tp-text-common-black-5 text-capitalize">customers</span>
                                            <CircleSegmentSmallIcon fillColor="#111112" fillColorTwo="#F3F1F2" strokeColor="#111112" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingServiceSkill;