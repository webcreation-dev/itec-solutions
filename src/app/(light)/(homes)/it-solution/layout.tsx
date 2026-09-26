import { ITSolutionFooter, SeoAgencyHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function ITSolutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <MagicCursorProvider>
                <ClientProviders>
                    <SeoAgencyHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <ITSolutionFooter />
                        </div>
                    </div>
                </ClientProviders>
            </MagicCursorProvider>
        </ThemeProvider>
    );
}
