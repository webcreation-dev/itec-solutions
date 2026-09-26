import { HeaderSearch, MainHeader, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function BrandShowcaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="light">
            <ClientProviders>
                <HeaderSearch />
                <MainHeader containerVariantClass="tp-header-cst-wrap" menuVariantClass="tp-main-menu-cst" menuAlign="center" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <BusinessConsultingFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
