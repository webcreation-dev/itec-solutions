import { HeaderSearch, ShopHeader, ShopFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function ShopDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <HeaderSearch />
            <ShopHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <ShopFooter />
                </div>
            </div>
        </ClientProviders>
    );
}


