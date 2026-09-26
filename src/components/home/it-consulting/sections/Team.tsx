import TeamItem from "../components/TeamItem";
import { OutlineButton } from "@/components/ui";
import teamData from "@/data/team-data";

const Team = () => {
    // Retrieve IT Consulting team items for rendering
    const teams = teamData.itConsulting;

    return (
        <section className="cst-team-ptb pt-140 pb-80">
            <div className="container container-1524">

                {/* Heading */}
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="cst-team-heading mb-50">
                            <span className="cst-section-subtitle mb-15 tp_fade_anim">
                                Our Team
                            </span>

                            <h4 className="cst-section-title tp_fade_anim">
                                Meet the talented team
                            </h4>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="cst-team-btn text-lg-end mb-50 tp_fade_anim">
                            <OutlineButton href="/team" className="cst-btn black-t" text="Join Team Member" />
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="cst-team-box">
                    <div className="row">
                        {teams.map((member) => (
                            <TeamItem key={member.id} {...member} type="itConsulting" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;