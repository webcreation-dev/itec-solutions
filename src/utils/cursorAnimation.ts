/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";

export default function cursorAnimation(): void {
    if (typeof window === "undefined") return;

    const body = document.body;
    if (!body.classList.contains("tp-magic-cursor") || body.classList.contains("is-mobile")) return;

    // Wrap .tp-magnetic-item elements if not already wrapped
    document.querySelectorAll<HTMLElement>(".tp-magnetic-item").forEach((item) => {
        if (item.parentNode && !(item.parentNode as HTMLElement).classList.contains("tp-magnetic-wrap")) {
            const wrapper = document.createElement("div");
            wrapper.classList.add("tp-magnetic-wrap");
            const parent = item.parentNode;
            if (parent) {
                parent.insertBefore(wrapper, item);
                wrapper.appendChild(item);
            }
        }
    });

    // Add .not-hide-cursor to anchor items
    document.querySelectorAll<HTMLAnchorElement>("a.tp-magnetic-item").forEach((a) => {
        a.classList.add("not-hide-cursor");
    });

    // Cursor properties
    const ballWidth = 14;
    const ballHeight = 14;
    const ballScale = 1;
    const ballOpacity = 1;
    const ballBorderWidth = 1;
    const ratio = 0.15;

    // Query ball dynamically to get the current active ball in DOM
    const getBall = () => document.getElementById("ball") as HTMLElement | null;
    const activeBall = getBall();
    if (!activeBall) return; // Prevent null crash

    // Initialize global state if not already done
    if (!(window as any)._tpCursorState) {
        (window as any)._tpCursorState = {
            currentCursorEl: null as HTMLElement | null,
            currentLinkEl: null as HTMLElement | null,
            currentMagneticWrap: null as HTMLElement | null,
            active: false,
            mouse: { x: 0, y: 0 },
            pos: { x: 0, y: 0 },
        };
    }

    // Set initial ball positioning
    gsap.set(activeBall, {
        xPercent: -50,
        yPercent: -50,
        width: ballWidth,
        height: ballHeight,
        borderWidth: ballBorderWidth,
        opacity: ballOpacity,
        backgroundColor: "#000",
    });

    const resetCursorBallToDefault = () => {
        const currentBall = getBall();
        if (!currentBall) return;

        const s = (window as any)._tpCursorState;
        if (s) {
            s.currentCursorEl = null;
            s.currentLinkEl = null;
            s.currentMagneticWrap = null;
            s.active = false;
        }

        // Reset ball styles
        gsap.killTweensOf(currentBall);
        gsap.to(currentBall, {
            duration: 0.3,
            xPercent: -50,
            yPercent: -50,
            width: ballWidth,
            height: ballHeight,
            opacity: ballOpacity,
            scale: ballScale,
            borderWidth: ballBorderWidth,
            backgroundColor: "#000",
            clearProps: "boxShadow,backdropFilter",
        });

        // Remove any ball-view divs
        currentBall.querySelectorAll(".ball-view").forEach((v) => {
            gsap.killTweensOf(v);
            v.remove();
        });
    };
    (window as any)._tpResetCursorBall = resetCursorBallToDefault;

    // Track mouse position and add ticker once
    if (!(window as any)._tpCursorInitialized) {
        (window as any)._tpCursorInitialized = true;

        document.addEventListener("mousemove", (e: MouseEvent) => {
            const s = (window as any)._tpCursorState;
            if (s) {
                s.mouse.x = e.clientX;
                s.mouse.y = e.clientY;
            }
        });

        // GSAP ticker for smooth follow
        gsap.ticker.add(() => {
            const currentBall = getBall();
            if (currentBall) {
                const s = (window as any)._tpCursorState;
                if (s) {
                    // Check if any of our active hovered elements are no longer in the DOM or hidden
                    let resetBall = false;

                    if (s.currentCursorEl) {
                        const el = s.currentCursorEl;
                        if (!document.body.contains(el) || el.offsetWidth === 0) {
                            const elementAtPoint = document.elementFromPoint(s.mouse.x, s.mouse.y) as HTMLElement | null;
                            const newCursorEl = elementAtPoint?.closest<HTMLElement>("[data-cursor]");
                            if (newCursorEl) {
                                s.currentCursorEl = newCursorEl;
                                const newText = newCursorEl.getAttribute("data-cursor");
                                const view = currentBall.querySelector<HTMLElement>(".ball-view");
                                if (view && newText) {
                                    view.innerHTML = newText;
                                }
                            } else {
                                s.currentCursorEl = null;
                                if (!s.currentLinkEl) {
                                    resetBall = true;
                                }
                            }
                        }
                    }

                    if (s.currentLinkEl) {
                        const el = s.currentLinkEl;
                        if (!document.body.contains(el) || el.offsetWidth === 0) {
                            const elementAtPoint = document.elementFromPoint(s.mouse.x, s.mouse.y) as HTMLElement | null;
                            const newLinkEl = elementAtPoint?.closest<HTMLElement>("a, button");
                            if (newLinkEl && !newLinkEl.classList.contains("cursor-hide") && !newLinkEl.classList.contains("not-hide-cursor") && !newLinkEl.closest(".not-hide-cursor")) {
                                s.currentLinkEl = newLinkEl;
                            } else {
                                s.currentLinkEl = null;
                                if (!s.currentCursorEl) {
                                    resetBall = true;
                                }
                            }
                        }
                    }

                    if (s.currentMagneticWrap) {
                        const el = s.currentMagneticWrap;
                        if (!document.body.contains(el) || el.offsetWidth === 0) {
                            const elementAtPoint = document.elementFromPoint(s.mouse.x, s.mouse.y) as HTMLElement | null;
                            const newWrapEl = elementAtPoint?.closest<HTMLElement>(".tp-magnetic-wrap");
                            if (newWrapEl) {
                                s.currentMagneticWrap = newWrapEl;
                            } else {
                                s.currentMagneticWrap = null;
                                s.active = false;
                                if (!s.currentCursorEl && !s.currentLinkEl) {
                                    resetBall = true;
                                }
                            }
                        }
                    }

                    if (resetBall) {
                        // Reset ball styles back to default (14px)
                        gsap.killTweensOf(currentBall);
                        gsap.to(currentBall, {
                            duration: 0.3,
                            xPercent: -50,
                            yPercent: -50,
                            width: ballWidth,
                            height: ballHeight,
                            opacity: ballOpacity,
                            scale: ballScale,
                            borderWidth: ballBorderWidth,
                            backgroundColor: "#000",
                            clearProps: "boxShadow,backdropFilter",
                        });

                        currentBall.querySelectorAll(".ball-view").forEach((v) => {
                            gsap.killTweensOf(v);
                            v.remove();
                        });
                    }

                    if (!s.active) {
                        s.pos.x += (s.mouse.x - s.pos.x) * ratio;
                        s.pos.y += (s.mouse.y - s.pos.y) * ratio;
                        gsap.set(currentBall, { x: s.pos.x, y: s.pos.y });
                    }
                }
            }
        });
    }

    // Magnetic hover movement helpers
    function parallaxIt(
        e: MouseEvent,
        parent: HTMLElement,
        target: HTMLElement | null,
        movement: number
    ): void {
        if (!target) return;
        const rect = parent.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        gsap.to(target, {
            duration: 0.3,
            x: ((relX - rect.width / 2) / rect.width) * movement,
            y: ((relY - rect.height / 2) / rect.height) * movement,
            ease: "power2.out",
        });
    }

    // Parallax cursor positioning
    function parallaxCursor(e: MouseEvent, parent: HTMLElement, movement: number): void {
        const rect = parent.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const s = (window as any)._tpCursorState;
        if (s) {
            s.pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
            s.pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
            const currentBall = getBall();
            if (currentBall) {
                gsap.to(currentBall, { duration: 0.3, x: s.pos.x, y: s.pos.y });
            }
        }
    }

    // ==========================================
    // EVENT DELEGATION
    // ==========================================
    if (!(window as any)._tpCursorDelegated) {
        (window as any)._tpCursorDelegated = true;

        // Mouseover delegation
        document.addEventListener("mouseover", (e) => {
            const currentBall = getBall();
            if (!currentBall) return;

            const target = e.target as HTMLElement;
            const s = (window as any)._tpCursorState;
            if (!s) return;

            // 1. Data-cursor elements
            const cursorEl = target.closest<HTMLElement>("[data-cursor]");
            if (cursorEl) {
                if (cursorEl !== s.currentCursorEl) {
                    s.currentCursorEl = cursorEl;

                    // Immediately remove any existing ball-view to avoid duplicates
                    currentBall.querySelectorAll(".ball-view").forEach((v) => {
                        gsap.killTweensOf(v);
                        v.remove();
                    });

                    currentBall.classList.add("with-blur");
                    const viewDiv = document.createElement("div");
                    viewDiv.classList.add("ball-view");
                    const text = cursorEl.getAttribute("data-cursor");
                    if (text) viewDiv.innerHTML = text;
                    currentBall.appendChild(viewDiv);

                    gsap.killTweensOf(currentBall);
                    gsap.killTweensOf(viewDiv);

                    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
                    const color = getComputedStyle(cursorEl).getPropertyValue('--cursor-color').trim() || '#fff';

                    gsap.to(currentBall, {
                        duration: 0.3,
                        xPercent: isRtl ? 50 : -50,
                        yPercent: -60,
                        width: 110,
                        height: 110,
                        opacity: 1,
                        borderWidth: 0,
                        zIndex: 1,
                        backdropFilter: "blur(14px)",
                        backgroundColor: color,
                    });
                    gsap.to(viewDiv, { duration: 0.3, scale: 1, autoAlpha: 1 });
                }
                if (!cursorEl.classList.contains("not-hide-cursor")) {
                    cursorEl.classList.add("not-hide-cursor");
                }
            }

            // 2. Links & buttons (hide cursor)
            const linkEl = target.closest<HTMLElement>("a, button");
            if (linkEl && !linkEl.classList.contains("cursor-hide") && !linkEl.classList.contains("not-hide-cursor") && !linkEl.closest(".not-hide-cursor")) {
                if (linkEl !== s.currentLinkEl) {
                    s.currentLinkEl = linkEl;
                    gsap.killTweensOf(currentBall);
                    gsap.to(currentBall, { duration: 0.3, scale: 0, opacity: 0 });
                }
            }

            // 3. Magnetic wraps
            const wrapEl = target.closest<HTMLElement>(".tp-magnetic-wrap");
            if (wrapEl && wrapEl !== s.currentMagneticWrap) {
                s.currentMagneticWrap = wrapEl;
                gsap.killTweensOf(currentBall);
                gsap.to(currentBall, { duration: 0.3, scale: 2, borderWidth: 1, opacity: ballOpacity });
                s.active = true;
            }
        });

        // Mouseout delegation
        document.addEventListener("mouseout", (e) => {
            const currentBall = getBall();
            if (!currentBall) return;

            const target = e.target as HTMLElement;
            const relatedTarget = e.relatedTarget as HTMLElement | null;
            const s = (window as any)._tpCursorState;
            if (!s) return;

            // Ensure our target pointers are still in document body to prevent memory leak / stale reference bugs
            if (s.currentCursorEl && !document.body.contains(s.currentCursorEl)) {
                s.currentCursorEl = null;
            }
            if (s.currentLinkEl && !document.body.contains(s.currentLinkEl)) {
                s.currentLinkEl = null;
            }
            if (s.currentMagneticWrap && !document.body.contains(s.currentMagneticWrap)) {
                s.currentMagneticWrap = null;
            }

            // 1. Data-cursor elements
            const cursorEl = target.closest<HTMLElement>("[data-cursor]");
            if (cursorEl && cursorEl === s.currentCursorEl) {
                if (!relatedTarget || !cursorEl.contains(relatedTarget)) {
                    s.currentCursorEl = null;

                    gsap.killTweensOf(currentBall);
                    gsap.to(currentBall, {
                        duration: 0.3,
                        xPercent: -50,
                        yPercent: -50,
                        width: ballWidth,
                        height: ballHeight,
                        opacity: ballOpacity,
                        borderWidth: ballBorderWidth,
                        backgroundColor: "#000",
                    });

                    const view = currentBall.querySelector<HTMLElement>(".ball-view");
                    if (view) {
                        gsap.killTweensOf(view);
                        gsap.to(view, {
                            duration: 0.3,
                            scale: 0,
                            autoAlpha: 0,
                            clearProps: "all",
                            onComplete: () => {
                                // Only remove if it is still the same child and not replaced by a new enter
                                if (view.parentNode === currentBall) {
                                    view.remove();
                                }
                            },
                        });
                    }
                }
            }

            // 2. Links & buttons
            const linkEl = target.closest<HTMLElement>("a, button");
            if (linkEl && linkEl === s.currentLinkEl) {
                if (!relatedTarget || !linkEl.contains(relatedTarget)) {
                    s.currentLinkEl = null;
                    gsap.killTweensOf(currentBall);
                    gsap.to(currentBall, { duration: 0.3, scale: ballScale, opacity: ballOpacity });
                }
            }

            // 3. Magnetic wraps
            const wrapEl = target.closest<HTMLElement>(".tp-magnetic-wrap");
            if (wrapEl && wrapEl === s.currentMagneticWrap) {
                if (!relatedTarget || !wrapEl.contains(relatedTarget)) {
                    s.currentMagneticWrap = null;
                    gsap.killTweensOf(currentBall);
                    gsap.to(currentBall, { duration: 0.3, scale: ballScale, borderWidth: ballBorderWidth, opacity: ballOpacity });
                    
                    const item = wrapEl.querySelector<HTMLElement>(".tp-magnetic-item");
                    if (item) {
                        gsap.killTweensOf(item);
                        gsap.to(item, { duration: 0.3, x: 0, y: 0, clearProps: "all" });
                    }
                    s.active = false;
                }
            }
        });

        // Mousemove delegation for magnetic wrap parallax
        document.addEventListener("mousemove", (e) => {
            const wrapEl = (e.target as HTMLElement).closest<HTMLElement>(".tp-magnetic-wrap");
            if (wrapEl) {
                const item = wrapEl.querySelector<HTMLElement>(".tp-magnetic-item");
                parallaxCursor(e, wrapEl, 2);
                parallaxIt(e, wrapEl, item, 25);
            }
        });

        // Click delegation
        document.addEventListener("click", (e) => {
            const currentBall = getBall();
            if (!currentBall) return;

            const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a");
            if (link) {
                const href = link.getAttribute("href") ?? "";
                const isClickable =
                    !link.classList.contains("cursor-hide") &&
                    !link.classList.contains("lg-trigger") &&
                    !link.closest(".tp-btn-disabled") &&
                    link.target !== "_blank" &&
                    !href.startsWith("#") &&
                    !href.startsWith("mailto") &&
                    !href.startsWith("tel");

                if (isClickable) {
                    gsap.killTweensOf(currentBall);
                    gsap.to(currentBall, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
                }
            }
        });
    }

    // Show/hide on document enter/leave
    if (!(window as any)._tpCursorDocEvents) {
        (window as any)._tpCursorDocEvents = true;

        const getCursorEl = () => document.getElementById("magic-cursor");

        document.addEventListener("mouseleave", () => {
            const cursor = getCursorEl();
            if (cursor) gsap.to(cursor, { duration: 0.3, autoAlpha: 0 });
        });
        document.addEventListener("mouseenter", () => {
            const cursor = getCursorEl();
            if (cursor) gsap.to(cursor, { duration: 0.3, autoAlpha: 1 });
        });
        document.addEventListener("mousemove", () => {
            const cursor = getCursorEl();
            if (cursor) gsap.to(cursor, { duration: 0.3, autoAlpha: 1 });
        });
    }
}
