import { HeaderSearch, ITSolutionFooter, SeoAgencyHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ITSolutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <MagicCursorProvider className="cursor-white-bg" bgColor="white">
                <ClientProviders>
                    <HeaderSearch />
                    <SeoAgencyHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <ITSolutionFooter />
                        </div>
                    </div>
                </ClientProviders>
            </MagicCursorProvider>
        </ThemeProvider>
    );
}
