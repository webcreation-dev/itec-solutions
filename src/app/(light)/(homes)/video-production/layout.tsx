import VideoProductionHeader from "@/components/layout/headers/VideoProductionHeader";
import { VideoProductionFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import BodyClass from "@/providers/BodyClass";

export default function VideoProductionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BodyClass className="video-production-bg">
            <ThemeProvider>
                <ClientProviders>
                    <VideoProductionHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <VideoProductionFooter />
                        </div>
                    </div>
                </ClientProviders>
            </ThemeProvider>
        </BodyClass>
    );
}
