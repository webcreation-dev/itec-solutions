import { serviceData } from "@/data/service-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Details - Digital Agency & Creative Portfolio Nextjs Template",
};


const page = async ({ params }: {
    params: Promise<{ type: string; slug: string }>;
}) => {
    const { type, slug } = await params;

    const services = serviceData[type as keyof typeof serviceData];

    if (!services) return notFound();

    const service = services.find((item) => item.slug === slug);

    if (!service) return notFound();

    return (
        <div className="team-details-page">
            <h2>{service.title}</h2>
            <h4>{service.description}</h4>
            {service.img && <Image src={service.img} alt={service.title} width={500} height={300} />}
        </div>
    );
};

export default page;
