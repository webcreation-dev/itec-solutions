import ShopDetailsView from "@/components/pages/shop/layouts/ShopDetails";
import { products } from "@/data/product-data";
import { PageParamsProps } from "@/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop Details - Digital Agency & Creative Portfolio Nextjs Template",
};


export default async function ShopDetailsPage(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    // Find the product that matches the given ID
    const product = products.find((p) => p.id === Number(id));
    
    if (!product) {
        notFound();
    }
    
    return <ShopDetailsView product={product} />;
}
