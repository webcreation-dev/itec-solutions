
import { BusinessConsultingFooter, ConsultingHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function BusinessConsultingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <ConsultingHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <BusinessConsultingFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
