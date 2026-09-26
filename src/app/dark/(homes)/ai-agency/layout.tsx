import { HeaderSearch, MainHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function AIAgencyLayout({
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
                </div>
            </div>
        </ClientProviders>
    );
}
