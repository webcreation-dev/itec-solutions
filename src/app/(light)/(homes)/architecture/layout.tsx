import { ArchitectureHeader, ArchitectureFooter, HeaderSearch } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ArchitectureLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider bgColor="#fff7ef">
                    <HeaderSearch />
                    <ArchitectureHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <ArchitectureFooter/>
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
