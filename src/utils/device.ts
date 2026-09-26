"use client";

// Check if device is mobile
export function isMobile(): boolean {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}