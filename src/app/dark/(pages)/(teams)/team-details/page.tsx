import TeamDetails from "@/components/pages/team/layouts/TeamDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Details - Aleric Creative Agency React Next.js Template",
    description: "Team Details Layout page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <TeamDetails />;
};

export default page;