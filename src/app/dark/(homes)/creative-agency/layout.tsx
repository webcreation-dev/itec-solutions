import { CreativeAgencyFooter, CreativeAgencyHeader, HeaderSearch } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function CreativeAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider bgColor="white" className="cursor-white-bg">
                    <HeaderSearch />
                    <CreativeAgencyHeader />
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
