import { HeaderSearch, VideoProductionFooter } from "@/components/layout";
import VideoProductionHeader from "@/components/layout/headers/VideoProductionHeader";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function VideoProductionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <HeaderSearch />
                <VideoProductionHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <VideoProductionFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
