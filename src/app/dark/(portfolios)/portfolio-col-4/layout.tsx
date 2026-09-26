import { HeaderSearch, MainFooter, MainHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function PortfolioColFourLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider className="cursor-white-bg" bgColor="white">
                    <HeaderSearch />
                    <MainHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <MainFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
