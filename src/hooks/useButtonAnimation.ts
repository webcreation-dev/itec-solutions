"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Attaches the button move (magnetic parallax) animation and dot tracking hover animation
 * to all matching buttons inside the given container ref.
 *
 * Usage:
 *   const containerRef = useButtonAnimation<HTMLElement>();
 *   return <footer ref={containerRef}>...</footer>;
 */
export function useButtonAnimation<T extends HTMLElement = HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const allBtns = container.querySelectorAll<HTMLElement>(".btn_wrapper, #btn_wrapper");
        const allCircles = container.querySelectorAll<HTMLElement>(".btn-item");

        const moveHandlers: Array<{ btn: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
        const hoverHandlers: Array<{ btn: HTMLElement; hover: (e: MouseEvent) => void }> = [];

        // 1. Magnetic move animation
        allBtns.forEach((btn, i) => {
            const circle = allCircles[i];
            if (!circle) return;

            const onMouseMove = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const relX = e.clientX - rect.left;
                const relY = e.clientY - rect.top;

                gsap.to(circle, {
                    duration: 0.5,
                    x: ((relX - rect.width / 2) / rect.width) * 80,
                    y: ((relY - rect.height / 2) / rect.height) * 80,
                    ease: "power2.out",
                });
            };

            const onMouseLeave = () => {
                gsap.to(circle, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    ease: "power2.out",
                });
            };

            btn.addEventListener("mousemove", onMouseMove);
            btn.addEventListener("mouseleave", onMouseLeave);
            moveHandlers.push({ btn, move: onMouseMove, leave: onMouseLeave });
        });

        // 2. Dot hover tracking animation on matching tp-btn-rounded elements
        const buttons = container.querySelectorAll<HTMLElement>(".tp-btn-rounded");
        buttons.forEach((button) => {
            const onMouseEnter = (e: MouseEvent) => {
                const rect = button.getBoundingClientRect();
                const x = e.pageX - (rect.left + window.scrollX);
                const y = e.pageY - (rect.top + window.scrollY);
                const dot = button.querySelector<HTMLElement>(".tp-btn-circle-dot");
                if (dot) {
                    dot.style.top = `${y}px`;
                    dot.style.left = `${x}px`;
                }
            };
            button.addEventListener("mouseenter", onMouseEnter);
            hoverHandlers.push({ btn: button, hover: onMouseEnter });
        });

        return () => {
            moveHandlers.forEach(({ btn, move, leave }) => {
                btn.removeEventListener("mousemove", move);
                btn.removeEventListener("mouseleave", leave);
            });
            hoverHandlers.forEach(({ btn, hover }) => {
                btn.removeEventListener("mouseenter", hover);
            });
        };
    }, []);

    return ref;
}
export default useButtonAnimation;
