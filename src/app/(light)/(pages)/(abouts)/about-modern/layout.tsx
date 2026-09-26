import { ArchitectureHeader, HeaderSearch, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function AboutModernLayout({
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
                            <BusinessConsultingFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
