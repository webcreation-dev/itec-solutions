"use client";

import cursorAnimation from "@/utils/cursorAnimation";
import { useEffect } from "react";

type CursorConfig = {
    bgColor?: "white" | "black" | "red" | "custom" | string;
    customClass?: string;
};

/**
 * Custom hook to enable a magic cursor effect with optional background color or custom class.
 * 
 * @param config - Configuration for cursor and background
 */
export const useMagicCursor = (config: CursorConfig = {}) => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Add base cursor class
        document.body.classList.add("tp-magic-cursor");

        // Store original background to restore on cleanup
        const originalBg = document.body.style.backgroundColor;

        // Apply background color classes or custom color
        if (config.bgColor === "white") {
            document.body.classList.add("cursor-white-bg");
        } else if (config.bgColor === "black") {
            document.body.classList.add("cursor-black-bg");
        } else if (config.bgColor === "red") {
            document.body.classList.add("cursor-red-bg");
        } else if (config.bgColor === "green") {
            document.body.classList.add("cursor-green-bg");
        } else if (config.bgColor) {
            document.body.style.backgroundColor = config.bgColor;
        }

        // Apply custom class if provided
        if (config.customClass) {
            document.body.classList.add(config.customClass);
        }

        // Add cursor elements if not already present
        if (!document.querySelector("#magic-cursor")) {
            const cursorHtml = `
        <div id="magic-cursor" class="tp-cursor"></div>
        <div class="tp-cursor-effect"></div>
      `;
            document.body.insertAdjacentHTML("beforeend", cursorHtml);
        }

        // Start cursor animation
        const cursorEl = document.querySelector("#magic-cursor");
        if (cursorEl) {
            requestAnimationFrame(cursorAnimation);
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove("tp-magic-cursor");
            document.body.classList.remove("cursor-white-bg", "cursor-black-bg", "cursor-bg-green");
            if (config.customClass) document.body.classList.remove(config.customClass);

            // Restore original background
            document.body.style.backgroundColor = originalBg;

            // Remove cursor elements
            document.querySelectorAll(".tp-cursor, .tp-cursor-effect").forEach((el) => el.remove());
        };
    }, [config.bgColor, config.customClass]);
};