import { HeaderSearch, MainHeader, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function PortfolioDetailsTwoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <MagicCursorProvider className="cursor-white-bg" bgColor="white">
                    <HeaderSearch />
                    <MainHeader containerVariantClass="tp-header-cst-wrap border-none" menuVariantClass="tp-main-menu-cst" menuAlign="center" />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                            <BusinessConsultingFooter />
                        </div>
                    </div>
                </MagicCursorProvider>
            </ClientProviders>
        </ThemeProvider>
    );
}
