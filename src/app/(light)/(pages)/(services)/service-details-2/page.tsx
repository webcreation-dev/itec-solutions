import ServiceDetailsTwo from "@/components/pages/services/layouts/ServiceDetailsTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Details 2 - Aleric",
    description: "Business consulting service details page with smart solutions, branding design, and process overview.",
};

const page = () => {
    return <ServiceDetailsTwo />;
};

export default page;