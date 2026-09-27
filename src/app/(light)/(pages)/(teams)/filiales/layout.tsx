import { ArchitectureFooter, ArchitectureHeader, HeaderSearch } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function FilialesLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClientProviders>
            <HeaderSearch />
            <ArchitectureHeader />
            <div id="smooth-wrapper"><div id="smooth-content">{children}<ArchitectureFooter /></div></div>
        </ClientProviders>
    );
}
