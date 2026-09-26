import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { AiStartupFooter, AiStartupHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function StartupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider>
                    <AiStartupHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <AiStartupFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
