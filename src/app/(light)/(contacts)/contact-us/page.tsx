import { ContactStyleTwo } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us Light - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ContactStyleTwo />
        </main>
    );
};

export default page;