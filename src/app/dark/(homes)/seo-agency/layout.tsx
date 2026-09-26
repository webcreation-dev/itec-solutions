import { SeoAgencyFooter, SeoAgencyHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function SeoAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <SeoAgencyHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <SeoAgencyFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
