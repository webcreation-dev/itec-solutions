import { HeaderSearch, MainFooter, MainHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function ServiceThreeLayout({
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
