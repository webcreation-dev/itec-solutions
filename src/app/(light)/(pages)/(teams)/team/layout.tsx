import { ArchitectureFooter, ArchitectureHeader, HeaderSearch } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
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
