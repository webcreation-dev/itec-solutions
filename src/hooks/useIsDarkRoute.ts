"use client";

import { usePathname } from "next/navigation";

export const useIsDarkRoute = () => {
    const pathname = usePathname();

    const isDark = pathname?.startsWith("/dark") ?? false;

    return isDark;
};