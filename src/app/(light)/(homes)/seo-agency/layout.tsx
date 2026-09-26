import { SeoAgencyFooter, SeoAgencyHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders } from "@/providers";

export default function SeoAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <MagicCursorProvider>
                <SeoAgencyHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <SeoAgencyFooter />
                    </div>
                </div>
            </MagicCursorProvider>
        </ClientProviders>
    );
}
