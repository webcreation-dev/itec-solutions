import Team from "@/components/pages/team/layouts/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Team Dark - Aleric Creative Agency React Next.js Template",
    description: "Expert Team Dark Layout page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <Team />;
};

export default page;