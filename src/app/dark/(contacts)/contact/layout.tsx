import { HeaderSearch, MainHeader, MainFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ContactLayout({
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
                        <MainFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
