import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { AiStartupFooter, AiStartupHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function StartupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider bgColor="white" className="cursor-white-bg">
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
