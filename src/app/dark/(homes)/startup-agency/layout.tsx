import { HeaderSearch, StartupAgencyFooter, StartupAgencyHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function StartupAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider bgColor="white" className="cursor-white-bg">
                    <HeaderSearch />
                    <StartupAgencyHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <StartupAgencyFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
