import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioSwipeGalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider className="cursor-white-bg" bgColor="white">
                    <HeaderSearch />
                    <SecondaryHeader theme="dark" isStickyDisabled={true} />
                    {children}
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
