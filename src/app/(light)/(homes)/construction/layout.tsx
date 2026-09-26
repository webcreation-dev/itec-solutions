
import { ArchitectureFooter, ArchitectureHeader, HeaderSearch } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ConstructionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <MagicCursorProvider bgColor="#F2F1EE">
                    <HeaderSearch />
                    <ArchitectureHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <ArchitectureFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
