import portfolioData from "@/data/portfolio-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Details - Digital Agency & Creative Portfolio Nextjs Template",
};


const Page = async ({ params }: {
    params: Promise<{ type: string; slug: string }>;
}) => {
    const { type, slug } = await params;

    const portfolioItems = portfolioData[type as keyof typeof portfolioData];

    if (!portfolioItems) return notFound();

    const portfolio = portfolioItems.find((item) => item.slug === slug);

    if (!portfolio) return notFound();

    return (
        <div className="team-details-page">
            <h2>{portfolio.title}</h2>
            <h4>{portfolio.slug}</h4>

            {portfolio.img &&
                <Image
                    src={portfolio.img}
                    alt={portfolio.title}
                    width={500}
                    height={300}
                />}
        </div>
    );
};

export default Page;