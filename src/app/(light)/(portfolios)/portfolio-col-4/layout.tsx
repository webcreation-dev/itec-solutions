import { HeaderSearch, MainFooter, MainHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function PortfolioColFourLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
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
