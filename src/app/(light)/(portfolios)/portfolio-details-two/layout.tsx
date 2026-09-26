import { HeaderSearch, MainHeader, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";
import { MagicCursorProvider } from "@/providers/MagicCursorProvider";

export default function PortfolioDetailsTwoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <MagicCursorProvider className="cursor-black-bg" bgColor="black">
                    <HeaderSearch />
                    <MainHeader containerVariantClass="tp-header-area pre-header tp-header-cst-wrap sticky-white-bg tp-bg-common-white tp-header-blur header-transparent tp-header-lg-spacing" menuVariantClass="tp-main-menu-cst" menuAlign="center" />
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
