import Awards from "@/components/pages/awards/layout/Awards";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Awwwards - Aleric Creative Agency React Next.js Template",
    description: "Awwwards page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <Awards />;
};

export default page;