import { SecondaryHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function PortfolioSlicerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider>
                    <SecondaryHeader theme="dark" />
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
