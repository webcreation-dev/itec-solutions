import { HeaderSearch, MainHeader } from "@/components/layout";
import PersonalPortfolioFooter from "@/components/layout/footers/PersonalPortfolioFooter";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function AboutMeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
                    <HeaderSearch />
                    <MainHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <PersonalPortfolioFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
