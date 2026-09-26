import { HeaderSearch, MainHeader, CreativeAgencyFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioDetailsLayout({
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
                        <CreativeAgencyFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
