import { useEffect, useRef } from "react";
import Matter from "matter-js";
import gsap from "gsap";

interface Options {
    scrollGravity?: boolean;
}

export const useThrowable = (options: Options = {}) => {
    const sceneRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const {
            Engine,
            Runner,
            Bodies,
            Composite,
            Mouse,
            MouseConstraint,
            Events,
            Body,
        } = Matter;

        const element = sceneRef.current;

        const engine = Engine.create();
        const runner = Runner.create();

        let width = element.offsetWidth;
        let height = element.offsetHeight;

        engine.gravity.y = 0.6;

        // -----------------------------
        // IntersectionObserver FIX
        // -----------------------------
        let isVisible = false;

        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;

            if (isVisible) {
                Runner.run(runner, engine);
            } else {
                Runner.stop(runner);
            }
        });

        observer.observe(element);

        // -----------------------------
        // Mouse FIX (scroll safe)
        // -----------------------------
        const mouse = Mouse.create(element);

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.15,
                render: { visible: false },
            },
        });

        Composite.add(engine.world, mouseConstraint);

        // IMPORTANT FIX: disable wheel hijack properly 
        const mcMouse = mouseConstraint.mouse as Matter.Mouse;

        // safe cast to extend internal Matter Mouse
        type ExtendedMouse = Matter.Mouse & {
            mousewheel?: EventListener;
            mousewheelStart?: EventListener;
            mousewheelMove?: EventListener;
            mousewheelEnd?: EventListener;
        };

        const extendedMouse = mcMouse as ExtendedMouse;

        // remove wheel listener safely
        if (extendedMouse.mousewheel) {
            extendedMouse.element.removeEventListener("wheel", extendedMouse.mousewheel);
        }

        // disable internal handlers
        extendedMouse.mousewheel = undefined;
        extendedMouse.mousewheelStart = undefined;
        extendedMouse.mousewheelMove = undefined;
        extendedMouse.mousewheelEnd = undefined;
        // Elements
        const items = element.querySelectorAll<HTMLElement>("[data-tp-throwable-el]");
        const bodies: Matter.Body[] = [];

        // -----------------------------
        // create bodies
        // -----------------------------
        items.forEach((el) => {
            const rect = el.getBoundingClientRect();

            const body = Bodies.rectangle(
                Math.random() * width,
                Math.random() * -height,
                rect.width,
                rect.height,
                {
                    restitution: 0.4,
                    friction: 0.1,
                }
            );

            Composite.add(engine.world, body);
            bodies.push(body);
        });

        // rain effect
        bodies.forEach((body, index) => {
            setTimeout(() => {
                Body.setStatic(body, false);
            }, index * 80);
        });

        // boundaries
        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, {
            isStatic: true,
        });

        const leftWall = Bodies.rectangle(-50, height / 2, 100, height, {
            isStatic: true,
        });

        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, {
            isStatic: true,
        });

        Composite.add(engine.world, [ground, leftWall, rightWall]);

        // -----------------------------
        // quickSetter (performance)
        // -----------------------------
        const setters = Array.from(items).map((el) => ({
            x: gsap.quickSetter(el, "x", "px"),
            y: gsap.quickSetter(el, "y", "px"),
            r: gsap.quickSetter(el, "rotation", "deg"),
        }));

        // -----------------------------
        // tick
        // -----------------------------
        Events.on(runner, "tick", () => {
            if (!isVisible) return;

            bodies.forEach((body, i) => {
                const set = setters[i];
                if (!set) return;

                set.x(body.position.x);
                set.y(body.position.y);
                set.r(body.angle);
            });
        });

        // -----------------------------
        // scroll gravity (safe)
        // -----------------------------
        if (options.scrollGravity) {
            let lastScroll = window.scrollY;

            Events.on(runner, "tick", () => {
                const scrollY = window.scrollY;
                const diff = scrollY - lastScroll;

                engine.gravity.y = 0.8 + diff * 0.002;

                lastScroll = scrollY;
            });
        }

        // -----------------------------
        // resize fix
        // -----------------------------
        const handleResize = () => {
            width = element.offsetWidth;
            height = element.offsetHeight;

            Body.setPosition(ground, {
                x: width / 2,
                y: height + 50,
            });

            Body.setPosition(leftWall, {
                x: -50,
                y: height / 2,
            });

            Body.setPosition(rightWall, {
                x: width + 50,
                y: height / 2,
            });
        };

        window.addEventListener("resize", handleResize);

        // -----------------------------
        // cleanup
        // -----------------------------
        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();

            Runner.stop(runner);
            Engine.clear(engine);
            Composite.clear(engine.world, false as unknown as boolean);
        };
    }, [options.scrollGravity]);

    return sceneRef;
};