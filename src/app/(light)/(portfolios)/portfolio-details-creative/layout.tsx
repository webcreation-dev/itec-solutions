import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioDetailsCreativeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <HeaderSearch />
                <SecondaryHeader theme="dark" isStickyDisabled={true} isTransparent={true} ptClass="pt-35" extraClass="tp-pd-3-spacing" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
