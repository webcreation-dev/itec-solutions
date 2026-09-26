
import AboutModern from "@/components/pages/about/layouts/AboutModern";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Modern Dark - Aleric Creative Agency React Next.js Template",
    description: "About Modern Layout page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <AboutModern />;
};

export default page;