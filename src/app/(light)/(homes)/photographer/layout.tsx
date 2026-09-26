
import PhotographerFooter from "@/components/layout/footers/PhotographerFooter";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { SecondaryHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PhotographerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <MagicCursorProvider bgColor="black">
                <SecondaryHeader theme="dark" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <PhotographerFooter />
                    </div>
                </div>
            </MagicCursorProvider>
        </ClientProviders>
    );
}
