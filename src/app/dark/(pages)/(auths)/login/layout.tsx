import { HeaderSearch, MainHeader, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <HeaderSearch />
                <MainHeader />
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
