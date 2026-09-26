import { ContactStyleOne } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & demande de devis | ITEC Solutions",
};

const page = () => {
    return (
        <main>
            <ContactStyleOne />
        </main>
    );
};

export default page;
