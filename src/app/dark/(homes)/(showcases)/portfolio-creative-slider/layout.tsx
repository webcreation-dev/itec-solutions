import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioCreativeSliderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <HeaderSearch />
                <SecondaryHeader theme="dark" isStickyDisabled={true} />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
