import { ArchitectureFooter, ArchitectureHeader, HeaderSearch } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
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
        </ThemeProvider>
    );
}
