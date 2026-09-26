"use client";
import StartupAgencyTeamItem from "../components/StartupAgencyTeamItem";
import teamData from "@/data/team-data";
import { useIsDarkRoute } from "@/hooks";

const StartupAgencyTeam = () => {
    // Retrieve startup agency team items for rendering
    const teams = teamData.startupAgency;

    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const teamStyles = {
        titleColor: isDark ? "tp-text-common-white" : "",
        paraColor: isDark ? "tp-text-grey-2" : "",
        shapeFill: isDark ? "#fff" : "#030303",
    }

    return (
        <div className="tp-team-area pt-110 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-md-3 d-none d-md-block">
                        <div className="tp-about-wd-shape tp-team-sa-shape tp-about-sa-shape">
                            <span className="shape-1 d-inline-block mr-10" data-speed=".9">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill="#7D5DFF" />
                                </svg>
                            </span>
                            <span className="shape-1 mb-15">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill={teamStyles.shapeFill} />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 col-md-9">
                        <div className="tp-team-sa-title-wrap">
                            <h2 className={`tp-team-sa-title mb-25 tp_fade_anim ${teamStyles.titleColor}`} data-delay=".3">Team</h2>
                            <div className="tp-service-2-para tp-techonolgy-para tp-team-sa-para tp_fade_anim" data-delay=".5">
                                <p className={`fs-18 ${teamStyles.paraColor}`}>We&apos;re a team of experienced startup strategists, designers, marketers, and growth hackers committed to helping founders turn ideas into high-growth businesses.</p>
                            </div>
                        </div>
                    </div>
                    {teams.map((member, idx) => (
                        <StartupAgencyTeamItem key={idx} {...member} type="startupAgency" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyTeam;
