import { SecondaryHeader } from "@/components/layout";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PortfolioPerspectiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
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
