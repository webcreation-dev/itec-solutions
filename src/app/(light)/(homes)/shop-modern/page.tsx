import { ShopModernProduct, ShopModernProductBanner,ShopModernProductCategory, ShopModernProductHero, ShopModernProductSlider, ShopModernTrending, ShopModernBestSeller, ShopModernTestimonial, ShopModernBlog, ShopModernFeature, ShopModernInstagram } from "@/components/home/shop-modern/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop Modern - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = () => {
    return (
        <main>
            <ShopModernProductHero />
            <ShopModernProductBanner />
            <ShopModernProductCategory />
            <ShopModernProduct/>
            <ShopModernProductSlider/>
            <ShopModernTrending/>
            <ShopModernBestSeller/>
            <ShopModernTestimonial/>
            <ShopModernBlog/>
            <ShopModernFeature/>
            <ShopModernInstagram/>
        </main>
    );
};

export default page;