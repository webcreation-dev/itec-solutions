import { ITConsultingFooter, ITConsultingHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ConsultingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider bgColor="black">
                    <ITConsultingHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <ITConsultingFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
