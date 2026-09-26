
import PhotographerFooter from "@/components/layout/footers/PhotographerFooter";
import { SecondaryHeader } from "@/components/layout";
import { ClientProviders, ThemeProvider } from "@/providers";

export default function PhotographerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider defaultTheme="dark">
            <ClientProviders>
                <SecondaryHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        {children}
                        <PhotographerFooter />
                    </div>
                </div>
            </ClientProviders>
        </ThemeProvider>
    );
}
