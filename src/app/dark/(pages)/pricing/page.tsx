import Pricing from "@/components/pages/pricing/layout/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing - Aleric Creative Agency React Next.js Template",
    description: "Pricing page of Aleric Creative Agency React Next.js Template",
};

const page = () => {
    return <Pricing />;
};

export default page;