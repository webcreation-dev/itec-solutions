import { HeaderSearch, MainHeader, BusinessConsultingFooter } from "@/components/layout";
import { ClientProviders } from "@/providers";
import BodyClass from "@/providers/BodyClass";

export default function AwardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BodyClass className="video-production-bg">
            <ClientProviders>
                <HeaderSearch />
                <MainHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <BusinessConsultingFooter />
                    </div>
                </div>
            </ClientProviders>
        </BodyClass>
    );
}
