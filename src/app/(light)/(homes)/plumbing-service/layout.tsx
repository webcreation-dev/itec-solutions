import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { HeaderSearch, PlumbingFooter, ShopHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import BodyClass from "@/providers/BodyClass";

export default function PlumbingServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BodyClass className="plumbing-bg">
            <ThemeProvider>
                <ClientProviders>
                    <MagicCursorProvider className="cursor-bg-red" bgColor="red">
                        <HeaderSearch />
                        <ShopHeader />
                        <div id="smooth-wrapper">
                            <div id="smooth-content">
                                {children}
                                <PlumbingFooter/>
                            </div>
                        </div>
                    </MagicCursorProvider>
                </ClientProviders>
            </ThemeProvider>
        </BodyClass>
    );
}
