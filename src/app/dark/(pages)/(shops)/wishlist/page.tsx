import Wishlist from "@/components/pages/shop/layouts/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wishlist - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return <Wishlist />;
};

export default page;