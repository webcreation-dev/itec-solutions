import { ContactStyleOne } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Dark - Digital Agency & Creative Portfolio Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ContactStyleOne />
        </main>
    );
};

export default page;