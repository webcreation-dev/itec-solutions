import { HeaderSearch, MainHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioShowcaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <HeaderSearch />
                <MainHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
