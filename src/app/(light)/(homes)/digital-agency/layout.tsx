
import { HeaderSearch, MainHeader, MainFooter } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function DigitalAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider>
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
