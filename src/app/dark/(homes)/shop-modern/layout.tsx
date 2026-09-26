
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { ClientProviders, ThemeProvider } from "@/providers";
import { ShopHeader,ShopFooter } from "@/components/layout";

export default function ShopModernLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider className="cursor-bg-red" bgColor="red">
                    <ShopHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <ShopFooter/>
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
