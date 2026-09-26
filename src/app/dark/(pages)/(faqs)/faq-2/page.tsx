import FaqTwo from "@/components/pages/faq/layouts/FaqTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ 2 - Aleric Creative Agency React Next.js Template",
    description: "FAQ 2 page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <FaqTwo />;
};

export default page;