import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function ParallaxCarouselDarkLayout({
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
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
