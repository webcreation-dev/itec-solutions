import Team from "@/components/pages/team/layouts/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos filiales | ITEC Solutions",
    description: "Les implantations et expertises d’ITEC Solutions.",
};

const page = () => {
    return <Team />;
};

export default page;
