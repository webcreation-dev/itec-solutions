"use client";

import React, { useEffect } from "react";
import { AppProvider, BootstrapProvider, ScrollSmoothProvider, ScrollToTopProvider, VideoProvider } from "@/providers";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import ProductModal from "@/components/pages/shop/layouts/components/ProductModal";
import { AnimationWrapper } from "@/components/wrappers";
import { useIsDarkRoute } from "@/hooks";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDark = useIsDarkRoute();

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.remove("aleric-light");
            html.classList.add("aleric-dark");
        } else {
            html.classList.remove("aleric-dark");
            html.classList.add("aleric-light");
        }
    }, [isDark]);

    return (
        <AppProvider>
            <BootstrapProvider>
                <ScrollSmoothProvider>
                    <ScrollToTopProvider>
                        <AnimationWrapper>
                            <VideoProvider>
                                <BackToTop />
                                <ProductModal />
                                {children}
                            </VideoProvider>
                        </AnimationWrapper>
                    </ScrollToTopProvider>
                </ScrollSmoothProvider>
            </BootstrapProvider>
        </AppProvider>
    );
}