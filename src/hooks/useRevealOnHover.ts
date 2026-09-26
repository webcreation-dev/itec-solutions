"use client";
import { useEffect, RefObject } from "react";

export const useRevealOnHover = (
    containerRef?: RefObject<HTMLElement | null>,
    selector = ".tp-reveal-item",
    childIndex = 1
) => {
    useEffect(() => {
        const parent = containerRef ? containerRef.current : document;
        if (!parent) return;

        const hoverItems = parent.querySelectorAll<HTMLElement>(selector);

        const moveImage = (e: MouseEvent, item: HTMLElement, index: number) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const child = item.children[index] as HTMLElement | undefined;
            if (child) {
                child.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        const listeners: Array<{ element: HTMLElement; handler: (e: MouseEvent) => void }> = [];

        hoverItems.forEach((item) => {
            const handler = (e: MouseEvent) => {
                moveImage(e, item, childIndex);
            };
            item.addEventListener("mousemove", handler);
            listeners.push({ element: item, handler });
        });

        return () => {
            listeners.forEach(({ element, handler }) => {
                element.removeEventListener("mousemove", handler);
            });
        };
    }, [containerRef, selector, childIndex]);
};
