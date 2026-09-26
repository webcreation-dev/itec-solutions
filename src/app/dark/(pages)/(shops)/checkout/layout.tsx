import { HeaderSearch, ShopHeader, ShopFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <HeaderSearch />
                <ShopHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <ShopFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
