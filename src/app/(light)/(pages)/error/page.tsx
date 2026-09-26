import Error from "@/components/pages/error/layout/Error";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Error - Aleric Creative Agency React Next.js Template",
    description: "Error page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <Error />;
};

export default page;