import FaqTwo from "@/components/pages/faq/layouts/FaqTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité | ITEC Solutions",
    description: "Politique de confidentialité du site ITEC Solutions.",
};

const page = () => {
    return <FaqTwo />;
};

export default page;
