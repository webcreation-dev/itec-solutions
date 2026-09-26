import WebDesignAgencyFooter from "@/components/layout/footers/WebDesignAgencyFooter";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";
import { HeaderSearch, MainHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function WebDesignAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ClientProviders>
                <MagicCursorProvider>
                    <HeaderSearch />
                    <MainHeader menuVariantClass="tp-main-menu-wd" containerVariantClass="tp-header-wd-wrap" />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <WebDesignAgencyFooter/>
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
