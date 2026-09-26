import { BusinessConsultingFooter, ConsultingHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function BusinessConsultingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider bgColor="white" className="white">
                    <ConsultingHeader />
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
