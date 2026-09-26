import ServiceDetails from "@/components/pages/services/layouts/ServiceDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Details - Aleric",
};

const page = () => {
    return <ServiceDetails />;
};

export default page;