import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioMixSlicerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider className="cursor-white-bg" bgColor="white">
                    <HeaderSearch />
                    <SecondaryHeader theme="dark" isStickyDisabled={true} isTransparent={true} />
                    {children}
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}

