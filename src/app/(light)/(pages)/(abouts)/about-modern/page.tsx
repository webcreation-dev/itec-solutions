
import AboutModern from "@/components/pages/about/layouts/AboutModern";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notre vision | ITEC Solutions",
    description: "La vision et les ambitions de développement d’ITEC Solutions.",
};

const page = () => {
    return <AboutModern />;
};

export default page;
