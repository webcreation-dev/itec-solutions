"use client";
import ITSolutionTeamItem from "../components/ITSolutionTeamItem";
import { SmartLink } from "@/components/common";
import { ServiceArrowIconThree } from "@/svg";
import teamData from "@/data/team-data";
import { useIsDarkRoute } from "@/hooks";

const ITSolutionTeam = () => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // styles 
    // -------------------------------
    const teamStyles = {
        headingText: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
        bodyText: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
    };
    // -------------------------------
    return (
        <div className="tp-team-area pt-120 p-relative pb-115 z-index-1">
            <img className="tp-team-it-shape" data-speed="0.8" src="/assets/img/team/it/shape.png" alt="shape" />

            <div className="container-fluid container-1524">
                <div className="row gx-50">

                    {/* Title */}
                    <div className="col-12">
                        <div className="tp-team-it-big-title tp-text-perspective">
                            <h2 className="tp-ff-inter ls-m-2 lh-1">Our Team</h2>
                        </div>
                    </div>

                    {/* Left Section */}
                    <div className="col-lg-5 col-md-8">
                        <div className="tp-team-it-title-wrap mb-40 p-relative">
                            <span className="tp-about-it-blur"></span>
                            <span className={`tp-section-it-subtitle d-inline-block tp-ff-inter fw-600 ${teamStyles.headingText} fs-18 mb-30`}>
                                What I Do
                            </span>

                            <h2 className={`tp-text-revel-anim fix ${teamStyles.headingText} fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter mb-30`}>
                                Our Experts Team<br /> Is Always Ready To<br /> Help You
                            </h2>

                            <p className={`tp-section-it-para tp-ff-inter lh-150-per ${teamStyles.bodyText} fs-18 mb-35`}>
                                “Aleric delivered exactly what we needed — efficient, reliable,<br />
                                and results- driven solutions. We&apos;ve seen measurable.
                            </p>

                            <SmartLink
                                href="/team"
                                className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">Explore More</span>
                                    <span className="btn-icon"><ServiceArrowIconThree /></span>
                                    <span className="btn-icon"><ServiceArrowIconThree /></span>
                                </span>
                            </SmartLink>
                        </div>

                        {/* Left Single Item */}
                        <div className="row justify-content-end">
                            <div className="col-lg-7 d-md-none d-lg-inline-block">
                                {teamData.itSolution.slice(0, 1).map((member, i) => (
                                    <div key={i} className="tp-team-it-item-single">
                                        <ITSolutionTeamItem {...member} type="itSolution" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="col-lg-7">
                        <div className="tp-team-it-item-right ml-65">
                            <div className="row gx-50">
                                {/* Column 1 */}
                                <div className="col-lg-6 col-md-6">
                                    {teamData.itSolution.slice(1, 3).map((member, i) => (
                                        <ITSolutionTeamItem key={i} {...member} type="itSolution" />
                                    ))}
                                </div>
                                {/* Column 2 */}
                                <div className="col-lg-6 col-md-6">
                                    {teamData.itSolution.slice(3, 5).map((member, i) => (
                                        <ITSolutionTeamItem key={i} {...member} type="itSolution" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionTeam;