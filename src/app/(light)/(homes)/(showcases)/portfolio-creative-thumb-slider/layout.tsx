import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioCreativeThumbSliderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
                    <HeaderSearch />
                    <SecondaryHeader theme="dark" isStickyDisabled={true} />
                    {children}
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}

