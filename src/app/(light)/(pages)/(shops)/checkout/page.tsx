import Checkout from "@/components/pages/shop/layouts/Checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return <Checkout />;
};

export default page;