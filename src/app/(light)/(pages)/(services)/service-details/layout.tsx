import { ArchitectureFooter, ArchitectureHeader, HeaderSearch } from "@/components/layout";
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
                    <ArchitectureFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
