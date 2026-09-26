import { HeaderSearch, SecondaryHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function PortfolioCoverflowLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <HeaderSearch />
            <SecondaryHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                </div>
            </div>
        </ClientProviders>
    );
}
