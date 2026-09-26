
import PersonalPortfolioFooter from "@/components/layout/footers/PersonalPortfolioFooter";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { PersonalPortfolioHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PersonalPortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <MagicCursorProvider>
                <ClientProviders>
                    <PersonalPortfolioHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <PersonalPortfolioFooter />
                        </div>
                    </div>
                </ClientProviders>
            </MagicCursorProvider>
        </ThemeProvider>
    );
}
