"use client";
import { useEffect, useRef } from "react";

/**
 * Attaches the `.tp-btn-rounded` circle-dot hover animation to all
 * matching buttons inside the given container ref.
 *
 * Usage:
 *   const containerRef = useButtonHoverAnimation<HTMLElement>();
 *   return <footer ref={containerRef}>...</footer>;
 */
export function useButtonHoverAnimation<T extends HTMLElement = HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const buttons = container.querySelectorAll<HTMLElement>(".tp-btn-rounded");
        const handlers: Array<{ btn: HTMLElement; handler: (e: MouseEvent) => void }> = [];

        buttons.forEach((button) => {
            const handler = (e: MouseEvent) => {
                const rect = button.getBoundingClientRect();
                const x = e.pageX - (rect.left + window.scrollX);
                const y = e.pageY - (rect.top + window.scrollY);
                const dot = button.querySelector<HTMLElement>(".tp-btn-circle-dot");
                if (dot) {
                    dot.style.top = `${y}px`;
                    dot.style.left = `${x}px`;
                }
            };
            button.addEventListener("mouseenter", handler);
            handlers.push({ btn: button, handler });
        });

        return () => {
            handlers.forEach(({ btn, handler }) =>
                btn.removeEventListener("mouseenter", handler)
            );
        };
    }, []);

    return ref;
}
