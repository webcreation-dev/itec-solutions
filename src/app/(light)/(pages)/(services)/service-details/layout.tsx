import { ArchitectureHeader, HeaderSearch, MainFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function ServiceDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <HeaderSearch />
            <ArchitectureHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
