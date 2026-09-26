
import { HeaderSearch, ITConsultingFooter, ITConsultingHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ConsultingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <HeaderSearch />
                <ITConsultingHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <ITConsultingFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
