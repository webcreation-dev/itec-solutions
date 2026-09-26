import { HeaderSearch, MedicalFooter, MedicalHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function MedicalPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider bgColor="green" className="cursor-white-bg cursor-bg-green">
                    <HeaderSearch />
                    <MedicalHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <MedicalFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
