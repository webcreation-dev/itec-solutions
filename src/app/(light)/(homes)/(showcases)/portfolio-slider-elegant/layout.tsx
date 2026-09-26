import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioSliderElegantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
                    <HeaderSearch />
                    <SecondaryHeader isStickyDisabled={true} isStatic={true} />
                    {children}
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}


