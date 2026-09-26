import { HeaderSearch, MainHeader } from "@/components/layout";
import CreativeAgencyFooter from "@/components/layout/footers/CreativeAgencyFooter";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function AboutCreativeLayout({
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
                            <CreativeAgencyFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
