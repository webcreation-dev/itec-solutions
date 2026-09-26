import ShopDetails from "@/components/pages/shop/layouts/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aleric - Shop Details Dark",
    description: "Welcome to Handyman & Services Shop Details Page",
};

const page = () => {
    return <ShopDetails />;
};

export default page;