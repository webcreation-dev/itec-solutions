import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioCreativeSliderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <HeaderSearch />
                <SecondaryHeader isStickyDisabled={true} />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
