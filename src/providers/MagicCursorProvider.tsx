"use client";

import React from "react";
import { useMagicCursor } from "@/hooks/useMagicCursor";

interface MagicCursorProviderProps {
    className?: string; // dynamic class for cursor
    bgColor?: string;
    children: React.ReactNode;
}

export const MagicCursorProvider: React.FC<MagicCursorProviderProps> = ({
    className = "cursor-black-bg",
    bgColor = "black",
    children,
}) => {
    useMagicCursor({ bgColor });

    return (
        <>
            {/* Dynamic cursor DOM */}
            <div id="magic-cursor" className={className}>
                <div id="ball"></div>
            </div>

            {/* Page content */}
            {children}
        </>
    );
};