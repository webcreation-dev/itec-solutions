import Shop from "@/components/pages/shop/layouts/Shop";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aleric - Shop Modern",
    description: "Welcome to Handyman & Services Shop Page",
};

const page = () => {
    return <Shop />;
};

export default page;