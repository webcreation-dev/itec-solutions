import ServiceDetails from "@/components/pages/services/layouts/ServiceDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ingénierie & maîtrise d’œuvre | ITEC Solutions",
};

const page = () => {
    return <ServiceDetails />;
};

export default page;
