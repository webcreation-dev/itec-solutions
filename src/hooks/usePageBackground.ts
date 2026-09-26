"use client";

import { useEffect } from "react";

type UsePageBackgroundConfig = {
    bgColor?: string;         // background color
    customClass?: string;     // optional class add
};

export const usePageBackground = (config: UsePageBackgroundConfig = {}) => {
    const { bgColor, customClass } = config;

    useEffect(() => {
        if (typeof window === "undefined") return; // SSR safe

        const html = document.documentElement;

        // Store original background & class
        const originalBg = html.style.backgroundColor;
        const originalClass = html.className;

        // Apply custom background color
        if (bgColor) html.style.backgroundColor = bgColor;

        // Apply custom class
        if (customClass) html.classList.add(customClass);

        // Cleanup on unmount
        return () => {
            html.style.backgroundColor = originalBg;
            if (customClass) html.classList.remove(customClass);
            // optionally restore original class
            html.className = originalClass;
        };
    }, [bgColor, customClass]);
};