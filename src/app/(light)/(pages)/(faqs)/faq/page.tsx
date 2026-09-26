import Faq from "@/components/pages/faq/layouts/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Aleric Creative Agency React Next.js Template",
    description: "FAQ page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <Faq />;
};

export default page;