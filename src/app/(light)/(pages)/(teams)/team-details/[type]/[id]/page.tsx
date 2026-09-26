import { TeamMember } from "@/types/team-d";
import { notFound } from "next/navigation";
import teamData from "@/data/team-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Details - Digital Agency & Creative Portfolio Nextjs Template",
};


interface PageProps {
    params: Promise<{ type: string; id: string }>;
}

const page = async ({ params }: PageProps) => {
    const { type, id } = await params;

    const homeTeam: TeamMember[] | undefined = teamData[type];
    if (!homeTeam) return notFound();

    const member = homeTeam.find((m) => m.id === parseInt(id));
    if (!member) return notFound();

    return (
        <div className="team-details-page">
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <img src={member.img} alt={member.name} />
        </div>
    );
};

export default page;