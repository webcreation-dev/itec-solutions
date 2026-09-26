import { HeaderSearch, MainHeader, MainFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function ErrorPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <HeaderSearch />
            <MainHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
