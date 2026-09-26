
import ServiceOne from "@/components/pages/services/layouts/ServiceOne";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service One - Aleric",
};

const page = () => {
    return <ServiceOne />;
};

export default page;