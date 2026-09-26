"use client";
import ConstructionTeamCard from "../components/ConstructionTeamCard";
import { SmartLink } from "@/components/common";
import teamData from "@/data/team-data";
import { useIsDarkRoute } from "@/hooks";
import { ArrowIconThree } from "@/svg";

const ConstructionTextTeam = () => {
    // Retrieve construction team items for rendering
    const teams = teamData.construction;

    const isDarkTheme = useIsDarkRoute();
    const sectionBg = isDarkTheme ? "#1b1b1d" : "#EBEAE7";

    return (
        <div
            className="cnt-team-ptb cnt-bg-clip pt-120 pb-100"
            style={{ backgroundColor: sectionBg }}
            data-bg-color="#EBEAE7"
        >
            <div className="container container-1350">
                {/* Header */}
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="cnt-team-heading mb-60">
                            <span
                                className="cnt-section-subtitle mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                Aleric Team
                            </span>

                            <h3
                                className="tp-section-title-clash-600 fs-60 fw-500 mb-0 tp_fade_anim"
                                data-delay=".4"
                            >
                                Through a <br /> unique combination.
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div
                            className="cnt-team-btn text-lg-end mb-60 tp_fade_anim"
                            data-delay=".5"
                        >
                            <SmartLink
                                className="upd-btn-black-square cnt-btn-style style-2 btn-transparent"
                                href="/team"
                            >
                                <i>
                                    <ArrowIconThree />
                                    <ArrowIconThree />
                                </i>

                                <span>
                                    <span className="text-1">All Members</span>
                                    <span className="text-2">All Members</span>
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>

                {/* Team List */}
                <div className="row">
                    {teams.map((member) => (
                        <ConstructionTeamCard key={member.id} {...member} type="construction" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConstructionTextTeam;