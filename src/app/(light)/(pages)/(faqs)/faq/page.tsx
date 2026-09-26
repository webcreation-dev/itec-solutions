import Faq from "@/components/pages/faq/layouts/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales | ITEC Solutions",
    description: "Mentions légales du site ITEC Solutions.",
};

const page = () => {
    return <Faq />;
};

export default page;
