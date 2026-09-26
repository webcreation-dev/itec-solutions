import { notFound } from "next/navigation";
import { blogData } from "@/data/blog-data";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Details - Digital Agency & Creative Portfolio Nextjs Template",
};


const Page = async ({
    params,
}: {
    params: Promise<{ type: string; slug: string }>;
}) => {
    const { type, slug } = await params;

    const blogItems = blogData[type as keyof typeof blogData];

    if (!blogItems) return notFound();

    const blog = blogItems.find((item) => item.slug === slug);

    if (!blog) return notFound();

    return (
        <div className="team-details-page">
            <h2>{blog.title}</h2>
            <h4>{blog.slug}</h4>

            <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
            />
        </div>
    );
};

export default Page;