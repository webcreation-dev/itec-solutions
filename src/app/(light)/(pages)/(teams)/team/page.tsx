import Team from "@/components/pages/team/layouts/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos filiales | ITEC Solutions",
    description: "Les filiales et expertises d’ITEC Solutions en France, au Sénégal et au Bénin.",
};

const page = () => {
    return <Team />;
};

export default page;
