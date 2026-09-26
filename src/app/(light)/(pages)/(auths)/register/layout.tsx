import { HeaderSearch, MainHeader, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <HeaderSearch />
            <MainHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <BusinessConsultingFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
